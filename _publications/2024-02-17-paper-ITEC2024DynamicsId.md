---
title: "Tangent and Normal Space-Based Method for Dynamics Identification in Microgrids"
collection: publications
category: conferences
permalink: /publication/2024-02-17-paper-ITEC2024DynamicsId
# excerpt: 'This paper introduced a data-driven system identification method to model transient dynamics in the microgrid.'
date: 2024-02-17
venue: '2024 IEEE Transportation Electrification Conference and Expo (ITEC)'
---

This paper presents an identification method for the transient dynamics of microgrids that exploits the intrinsic geometric structure of the dynamics, i.e., the high-dimensional states reside on a relatively low-dimensional manifold. In terms of discrete-time dynamics, the increment in states is decomposed into the tangent and normal components using the local geometric information, inferred from the data set of dynamical responses. The sparse identification of nonlinear dynamical systems (SINDy) method and generalized moving least square (GMLS) algorithms are used to estimate the tangent and normal components of increments, respectively, at every time step to constrain the solution onto the manifold of dynamics; this reduces the sensitivity of the SINDy model to candidate function selection and improves the prediction performance. A ten-bus microgrid system with five loads is used to test and verify the effectiveness of the presented method in identifying the system’s nonlinear dynamics. Numerical tests show that the developed method can better estimate the dynamic transients caused by load variation than the traditional SINDy model. The results imply that the proposed method is a useful tool to model the transient dynamics in power systems, especially when the state space lies on a low-dimensional manifold.
