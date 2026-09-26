
---
title: Physics-Embedded Model Discovery
card_title: Physics-Embedded Model Discovery
collection: projects
layout: research-project
permalink: /projects/physics-embedded-model-discovery/
author_profile: true
comments: false
share: false
related: false
show_in_projects: false
project_order: 20
research_area: identification
method_label: PhDN
project_status: Under review
status_style: review
summary: A compositional dictionary network that combines explicit physical or symbolic structure with differentiable refinement.
excerpt: A compositional dictionary network that combines explicit physical or symbolic structure with differentiable refinement.
question: Can a dictionary model represent nested physical relationships without giving up an explicit interface for prior knowledge and interpretation?

research_tags:
- Model discovery
- Symbolic structure
- Scientific ML
paper_ids:
- phdn
content_updated: September 25, 2026
---

## The representation problem

A flat dictionary is easy to inspect, but a complicated physical relationship may require many candidate terms or a carefully chosen basis. A flexible neural representation can approximate complex functions, yet its intermediate computations may be difficult to interpret as physical relationships. PhDN investigates a representation that connects these strengths. [1](#paper-phdn)

## Approach

The **Physics-embedded Dictionary Network (PhDN)** extends a single linear-dictionary model into a multilayer, differentiable directed acyclic graph. Local dictionaries can contain generic functions, available physical relationships, or expressions compiled from symbolic structure. Intermediate outputs become reusable variables rather than being hidden inside one large flat expansion.

When structural knowledge is unavailable, symbolic regression can propose an initial skeleton. That skeleton is compiled into the dictionary network and refined through continuous parameter optimization and augmentation. When partial knowledge is available, it can instead guide the local dictionaries as a soft structural prior.

These are alternative ways to initialize and inform the same representation; symbolic regression is not the definition of the PhDN architecture itself.

## Evaluation and scope

The manuscript studies both scalar physical relationships and dynamical-system vector fields. Its evaluation concerns predictive accuracy, out-of-distribution behavior, interpretability, and the effect of available priors. [1](#paper-phdn)

The goal is an explicit, adaptable representation—not a claim that every trained network recovers a unique governing law or automatically satisfies all physical constraints. This work is broader than a particular microgrid application.

## Project status

This work is a **manuscript under review**. The research summary describes the submitted direction; conclusions and implementation details may change during revision.

