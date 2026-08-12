---
title: "Online MPC-based EMS for microgrids with multi-modal PV forecasting and cone-relaxed power-flow constraints"
collection: publications
category: manuscripts
permalink: /publication/2026-07-01-paper-IJEPES EMS1
excerpt: 'Hanyang He, John Harlim, Daning Huang, Yan Li'
date: 2026-07-01
venue: 'International Journal of Electrical Power & Energy Systems'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S0142061526005120'
# citation: 'Hanyang He, John Harlim, Daning Huang, Yan Li, "Online MPC-based EMS for microgrids with multi-modal PV forecasting and cone-relaxed power-flow constraints," International Journal of Electrical Power & Energy Systems, doi: 10.1016/j.ijepes.2026.112070, https://www.sciencedirect.com/science/article/pii/S0142061526005120.'
---

The large-scale integration of photovoltaic (PV) generation, whose output is highly sensitive to weather conditions and climate variability, poses significant challenges to the secure, economic, and stable operation of microgrids. To enhance the operational resilience of microgrids against significant deviations between actual PV generation and day-ahead forecasts due to weather uncertainty, this paper proposes an online model predictive control (MPC)-based energy management system (EMS) capable of handling PV-forecasting deviations and associated power-flow constraint violations. Within the proposed framework, the MPC is equipped with a multi-modal dictionary-guided anisotropic kernel ridge regression (MMDG-AKRR) forecasting model that improves the generalizability of PV power forecasting across heterogeneous weather conditions. By leveraging online similarity-driven model weighting, the proposed forecasting approach enables timely correction of PV power trajectories when significant deviations from day-ahead predictions occur. Meanwhile, a second-order cone relaxation of power-flow constraints, explicitly formulated in terms of bus-voltage and branch-current magnitudes, is embedded into the MPC optimization to ensure grid-secure and computationally efficient dispatch decisions. Comprehensive comparative studies demonstrate that, relative to conventional neural-network-based and kernel-based forecasting methods, the proposed MMDG-AKRR model achieves better short-horizon prediction adaptability and enhanced robustness to PV forecasting uncertainties. Moreover, the proposed MMDG-AKRR-assisted MPC-EMS framework delivers a more favorable balance between operational security and economic performance than traditional day-ahead EMS schemes and linear MPC-based approaches. Compared with nonlinear MPC formulations that explicitly enforce nonlinear power-flow constraints, the proposed framework substantially reduces computational burden while maintaining high-quality solutions, highlighting its practical applicability for real-time microgrid energy management.


