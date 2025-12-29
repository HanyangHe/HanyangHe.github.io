---
title: "Learning Vector Fields of Differential Equations on Manifolds with Curvature-Adaptive Geometrically Constrained SINDy"
collection: publications
category: manuscripts
permalink: /publication/2025-05-21-paper-GSINDy
excerpt: 'Hanyang He, and Yan Li'
date: 2025-05-21
venue: 'Communications in Nonlinear Science and Numerical Simulation (CNSNS)'
paperurl: 'https://www.sciencedirect.com/science/article/abs/pii/S1007570425008159'
# citation: 'Hanyang He, Yan Li, Learning vector fields of differential equations on manifolds with curvature-adaptive geometrically constrained SINDy, Communications in Nonlinear Science and Numerical Simulation (CNSNS), Volume 155, 2026, 109406, ISSN 1007-5704, https://doi.org/10.1016/j.cnsns.2025.109406.'
---

This paper presents a curvature adaptive geometrically constrained method for manifold vector field learning of a nonlinear system described by various types of differential equations. Traditional vector field learning methods do not guarantee that the estimated vector field remains within the tangent space, leading to rapid error accumulation during time integration. To overcome this challenge, we propose a method that exploits the geometric constraints of the manifold around the solution trajectory to confine the vector to the tangent space. Specifically, the Generalized Moving Least Squares (GMLS) method is employed to obtain a high-order estimate of the tangent space. A new curvature-based weighted matrix is proposed for GMLS to enhance the precision of this estimation. Moreover, we propose a normal correction integrator compatible with GSINDy to bolster robustness against complex manifold geometries and deviations from the manifold of the trajectory during prediction. Thus, the proposed methodology extends the well-known Sparse Identification of Nonlinear Dynamics (SINDy) framework into a geometrically-constrained version, which offers strong interpretability and low computational cost, as well as guarantees the preservation of geometrical constraints. Three numerical examples are presented to validate the proposed method, demonstrating improvements in candidate function compatibility, curvature adaptability, tracking of complex dynamics reduced from high-dimensional systems, and noise robustness.

Code for this study: 'https://github.com/HanyangHe/Curvature-Adaptive-Geometrically-Constrained-SINDy'
