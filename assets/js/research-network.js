(function () {
  "use strict";

  var stage = document.getElementById("rn-stage");
  var dataElement = document.getElementById("rn-data");
  if (!stage || !dataElement) return;

  var placeholder = document.getElementById("rn-placeholder");
  var kindElement = document.getElementById("rn-detail-kind");
  var nameElement = document.getElementById("rn-detail-name");
  var descriptionElement = document.getElementById("rn-detail-description");
  var linkElement = document.getElementById("rn-detail-link");
  var directory = document.getElementById("rn-directory");
  var motionOK = !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var colors = { core: "#2a4763", slow: "#347ac0", fast: "#138b82", future: "#c78b2c" };
  var dimColor = "#cdd8e1";
  var network;
  try { network = JSON.parse(dataElement.textContent); }
  catch (error) { placeholder.textContent = "Unable to read research network data. Please use the text directory."; if (directory) directory.open = true; return; }

  var byId = new Map(network.nodes.map(function (node) { return [node.id, node]; }));
  var activeFilter = "all";
  var selectedId = null;
  var graph = null;
  var started = false;

  function identifier(value) { return value && typeof value === "object" ? value.id : value; }
  function connected(nodeId) {
    var ids = new Set([nodeId]);
    network.links.forEach(function (edge) {
      var source = identifier(edge.source), target = identifier(edge.target);
      if (source === nodeId) ids.add(target);
      if (target === nodeId) ids.add(source);
    });
    return ids;
  }
  function relevant(node) {
    if (selectedId) return connected(selectedId).has(node.id);
    return activeFilter === "all" || node.track === activeFilter || node.track === "core";
  }
  function linkRelevant(edge) {
    var source = identifier(edge.source), target = identifier(edge.target);
    if (selectedId) return source === selectedId || target === selectedId;
    if (activeFilter === "all") return true;
    var a = byId.get(source), b = byId.get(target);
    return Boolean(a && b && (a.track === activeFilter || b.track === activeFilter));
  }
  function linkColor(edge) {
    if (!linkRelevant(edge)) return "#e6ebef";
    if (edge.kind === "future") return "#cbaa6f";
    if (edge.kind === "cross") return "#b8a7cc";
    return "#a8bccb";
  }
  function repaint() {
    if (!graph) return;
    graph.nodeColor(function (node) { return relevant(node) ? colors[node.track] : dimColor; });
    graph.linkColor(linkColor);
    graph.linkWidth(function (edge) { return linkRelevant(edge) ? (selectedId ? 1.5 : 0.75) : 0.25; });
    graph.refresh();
  }
  function showNode(id) {
    var node = byId.get(id);
    if (!node) return;
    selectedId = node.id;
    kindElement.textContent = node.status;
    nameElement.textContent = node.name;
    descriptionElement.textContent = node.description;
    if (node.url) {
      linkElement.href = node.url;
      linkElement.hidden = false;
    } else {
      linkElement.removeAttribute("href");
      linkElement.hidden = true;
    }
    repaint();
  }
  function setFilter(group) {
    activeFilter = group;
    selectedId = null;
    document.querySelectorAll("[data-rn-filter]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-rn-filter") === group));
    });
    var names = { all: "All research topics", slow: "Slow-time-scale forecasting and EMS", fast: "Fast dynamic modeling and control", future: "Three potential exploration fields" };
    kindElement.textContent = "Research category";
    nameElement.textContent = names[group] || names.all;
    descriptionElement.textContent = "Select a node to inspect its scientific question, existing work, or proposed direction.";
    linkElement.hidden = true;
    linkElement.removeAttribute("href");
    repaint();
  }
  document.querySelectorAll("[data-rn-filter]").forEach(function (button) {
    button.addEventListener("click", function () { setFilter(button.getAttribute("data-rn-filter")); });
  });
  document.querySelectorAll("[data-rn-select]").forEach(function (button) {
    button.addEventListener("click", function () { showNode(button.getAttribute("data-rn-select")); });
  });
  document.getElementById("rn-reset").addEventListener("click", function () {
    setFilter("all");
    if (graph) graph.cameraPosition({ x: 100, y: 55, z: 450 }, { x: 0, y: -20, z: 0 }, motionOK ? 600 : 0);
  });

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      var timer = window.setTimeout(function () { script.remove(); reject(new Error("Timed out loading visualization library.")); }, 16000);
      script.src = url;
      script.async = true;
      script.onload = function () { window.clearTimeout(timer); resolve(); };
      script.onerror = function () { window.clearTimeout(timer); reject(new Error("Unable to load visualization library.")); };
      document.head.appendChild(script);
    });
  }
  function webGLAvailable() {
    try {
      var canvas = document.createElement("canvas");
      return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
    } catch (error) { return false; }
  }
  function markUnavailable(error) {
    placeholder.hidden = false;
    placeholder.textContent = "Interactive 3D graphics are unavailable here. Browse the research topics in the text view below.";
    if (directory) directory.open = true;
    if (window.console && console.warn) console.warn("Research network:", error);
  }
  async function initialize() {
    if (started) return;
    started = true;
    if (!webGLAvailable()) { markUnavailable("WebGL is unavailable"); return; }
    try {
      await loadScript("https://cdn.jsdelivr.net/npm/3d-force-graph@1.80.1/dist/3d-force-graph.min.js");
      if (typeof window.ForceGraph3D !== "function") throw new Error("Graph library did not initialize.");
      try { await loadScript("https://cdn.jsdelivr.net/npm/three-spritetext@1.10.0/dist/three-spritetext.min.js"); }
      catch (error) { if (window.console && console.warn) console.warn("Sprite labels unavailable:", error); }

      var nodes = network.nodes.map(function (node) {
        return Object.assign({}, node, { fx: node.x, fy: node.y });
      });
      var links = network.links.map(function (edge) { return Object.assign({}, edge); });
      var options = { controlType: "orbit" };
      graph = new window.ForceGraph3D(stage, options)
        .width(stage.clientWidth)
        .height(stage.clientHeight)
        .backgroundColor("#f6f9fc")
        .graphData({ nodes: nodes, links: links })
        .nodeVal(function (node) { return node.track === "core" ? 15 : node.track === "future" ? 9 : 6; })
        .nodeRelSize(5)
        .nodeColor(function (node) { return colors[node.track]; })
        .nodeOpacity(0.95)
        .nodeResolution(18)
        .nodeLabel(function (node) {
                                      return node.status && node.status.trim()
                                        ? node.name + " — " + node.status
                                        : node.name;
                                    })
        .linkColor(linkColor)
        .linkOpacity(0.57)
        .linkWidth(0.8)
        // .linkDirectionalArrowLength(function (edge) { return edge.kind === "future" ? 8 : 0; })
        .linkDirectionalArrowLength(8)
        .linkDirectionalArrowRelPos(0.76)
        .enableNodeDrag(false)
        .cooldownTicks(140)
        .onNodeClick(function (node) { showNode(node.id); })
        .onNodeHover(function (node) { stage.style.cursor = node ? "pointer" : "grab"; });

      if (typeof window.SpriteText === "function") {
        graph.nodeThreeObject(function (node) {
          var sprite = new window.SpriteText(node.short);
          sprite.textHeight = 6;
          sprite.fontFace = "Arial";
          sprite.fontWeight = "bold";
          sprite.color = relevant(node) ? "#284359" : "#a5b2c0";
          sprite.material.depthWrite = false;
          sprite.center.y = -0.95;
          return sprite;
        }).nodeThreeObjectExtend(true);
      }

      if (graph.d3Force("charge")) graph.d3Force("charge").strength(-130);
      if (graph.d3Force("link")) graph.d3Force("link").distance(function (edge) { return edge.kind === "cross" ? 145 : 105; });
      graph.cameraPosition({ x: 100, y: 55, z: 450 }, { x: 0, y: -20, z: 0 }, 0);
      repaint();
      placeholder.hidden = true;

      if ("ResizeObserver" in window) {
        new ResizeObserver(function () { if (graph) graph.width(stage.clientWidth).height(stage.clientHeight); }).observe(stage);
      } else {
        window.addEventListener("resize", function () { if (graph) graph.width(stage.clientWidth).height(stage.clientHeight); });
      }
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
          if (!graph) return;
          if (entries[0].isIntersecting) graph.resumeAnimation();
          else graph.pauseAnimation();
        }, { threshold: 0.01 }).observe(stage);
      }
    } catch (error) { markUnavailable(error); }
  }

  if ("IntersectionObserver" in window) {
    var lazyObserver = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        lazyObserver.disconnect();
        initialize();
      }
    }, { rootMargin: "350px 0px", threshold: 0 });
    lazyObserver.observe(stage);
  } else {
    initialize();
  }
})();
