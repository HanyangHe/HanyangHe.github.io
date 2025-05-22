---
title: "Learning Vector Fields of Differential Equations on Manifolds with Curvature-Adaptive Geometrically Constrained SINDy"
collection: publications
category: manuscripts
permalink: /publication/2025-05-21-paper-GSINDy
excerpt: 'This paper presents a curvature adaptive geometrically constrained method for manifold vector field learning of a nonlinear system described by various types of differential equations.'
date: 2025-05-21
venue: 'SSRN (Under review - CNSNS)'
paperurl: 'http://ssrn.com/abstract=5263698'
citation: 'He, Hanyang, and Li, Yan, Learning Vector Fields of Differential Equations on Manifolds with Curvature-Adaptive Geometrically Constrained Sindy. Available at SSRN: https://ssrn.com/abstract=5263698 or http://dx.doi.org/10.2139/ssrn.5263698'
---

This paper presents a curvature adaptive geometrically constrained method for manifold vector field learning of a nonlinear system described by various types of differential equations. Traditional vector field learning methods do not guarantee that the estimated vector field remains within the tangent space, leading to rapid error accumulation during time integration. To overcome this challenge, we propose a method that exploits the geometric constraints of the manifold around the solution trajectory to confine the vector to the tangent space. Specifically, the Generalized Moving Least Squares (GMLS) method is employed to obtain a high-order estimate of the tangent space. A new curvature-based weighted matrix is proposed for GMLS to enhance the precision of this estimation. Moreover, we propose a normal correction integrator compatible with GSINDy to bolster robustness against complex manifold geometries and deviations from the manifold of the trajectory during prediction. Thus, the proposed methodology extends the well-known Sparse Identification of Nonlinear Dynamics (SINDy) framework into a geometrically-constrained version, which offers strong interpretability and low computational cost, as well as guarantees the preservation of geometrical constraints. Three numerical examples are presented to validate the proposed method, demonstrating improvements in candidate function compatibility, curvature adaptability, tracking of complex dynamics reduced from high-dimensional systems, and noise robustness.
