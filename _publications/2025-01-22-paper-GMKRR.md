---
title: "Learning vector fields of differential equations on manifolds with geometrically constrained operator-valued kernels"
collection: publications
category: manuscripts
permalink: /publication/2025-01-22-paper-GMKRR
excerpt: 'Daning Huang, Hanyang He, John Harlim, Yan Li'
date: 2025-01-22
venue: 'ICLR'
paperurl: 'https://openreview.net/forum?id=OwpLQrpdwE&nesting=2&sort=date-desc'
# citation: 'Huang, D., He, H., Harlim, J., & Li, Y. (2025). Learning vector fields of differential equations on manifolds with geometrically constrained operator-valued kernels. In International Conference on Learning Representations (ICLR 2025).'
---

We address the problem of learning ordinary differential equations (ODEs) on manifolds. Existing machine learning methods, particularly those using neural networks, often struggle with high computational demands. To overcome this issue, we introduce a geometrically constrained operator-valued kernel that allows us to represent vector fields on tangent bundles of smooth manifolds. The construction of the kernel imposes the geometric constraints that are estimated from the data and ensures the computational feasibility for learning high dimensional systems of ODEs. Once the vector fields are estimated, e.g., by the kernel ridge regression, we need an ODE solver that guarantees the solution to stay on (or close to) the manifold. To overcome this issue, we propose a geometry-preserving ODE solver that approximates the exponential maps corresponding to the ODE solutions. We deduce a theoretical error bound for the proposed solver that guarantees the approximate solutions to lie on the manifold in the limit of large data. We verify the effectiveness of the proposed approach on high-dimensional dynamical systems, including the cavity flow problem, the beating and travelling waves in Kuramoto-Sivashinsky equations, and the reaction-diffusion dynamics.
