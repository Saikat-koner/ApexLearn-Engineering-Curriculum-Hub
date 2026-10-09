# PHY175: Physics for Computer Science — Midterm Master 200-MCQ Question Bank & Comprehensive Study Guide
**Target**: 30/30 Marks in Midterm Exam | **Units Covered**: 1, 2 & 3 | **Total MCQs**: 200 Questions with Explanations

---

## ⚡ Executive Blueprint & 3-Hour Mastery Schedule
- **Hour 1 (Unit 1)**: Solid State Physics, Drude-Lorentz Theory, Quantum Free Electron, Fermi-Dirac, Hall Effect, Drift vs Diffusion.
- **Hour 2 (Unit 2)**: PN Junction, Zener vs Avalanche, BJT (α, β, γ), CMOS Inverter, Solar Cells, Optical Fiber (NA, V-number), CPU vs GPU.
- **Hour 3 (Unit 3)**: Number Systems, 1's & 2's Complements, Excess-3 & Gray Codes, Universal Gates, Boolean Laws, K-Maps.
- **Last 45 Mins**: Solve Mock Questions & Review Formula Sheet.

---

## 📚 Complete High-Yield Topic Summary & Formula Sheet

### Unit 1: Solid State Physics & Semiconductors
| Concept / Parameter | Formula / Key Fact | Notes & Traps |
|---|---|---|
| Classical Drift Velocity | $v_d = \mu E = \frac{e E \tau}{m}$ | $\tau = $ relaxation time |
| Electrical Conductivity | $\sigma = \frac{n e^2 \tau}{m} = n e \mu$ | Microscopic Ohm's Law: $J = \sigma E$ |
| Wiedemann-Franz Law | $\frac{K}{\sigma T} = L = 2.44 \times 10^{-8} \text{ W}\cdot\Omega/\text{K}^2$ | Lorentz number $L$ is constant |
| Classical Failures | Electronic Specific Heat $= \frac{3}{2}R$ (predicted) vs $\approx 0.01R$ (actual); $\rho \propto \sqrt{T}$ vs $\rho \propto T$ | Resolved by Sommerfeld Quantum Theory (1928) |
| Einstein's Relation | $\frac{D_n}{\mu_n} = \frac{D_p}{\mu_p} = \frac{k_B T}{q} = V_T \approx 26\text{ mV}$ at $300\text{ K}$ | Links diffusion and mobility |
| Mass Action Law | $n \cdot p = n_i^2$ | Holds for both intrinsic and extrinsic semiconductors |
| Bandgap $E_g$ at 300K | $\text{Si} = 1.1\text{ eV}, \text{Ge} = 0.67\text{ eV}, \text{Diamond} = 5.4\text{ eV}$ | Metals: $E_g = 0$ (overlapping bands) |
| Fermi-Dirac Function | $f(E) = \frac{1}{1 + e^{(E-E_F)/k_B T}}$ | At $T > 0\text{ K}, f(E_F) = 0.5$ (50% probability) |
| Hall Voltage & Coeff | $V_H = \frac{R_H B I}{t}, R_H = -\frac{1}{ne} \text{ (N-type)}, R_H = +\frac{1}{pe} \text{ (P-type)}$ | $\mu_H = \sigma \cdot |R_H|$ |

### Unit 2: Circuit Laws, Devices, Optics & Computing
| Concept / Parameter | Formula / Key Fact | Notes & Traps |
|---|---|---|
| KCL & KVL | KCL: $\sum I = 0$ (Conservation of Charge); KVL: $\sum V = 0$ (Conservation of Energy) | Fundamental circuit axioms |
| Barrier Potential | $\text{Si} \approx 0.7\text{ V}, \text{Ge} \approx 0.3\text{ V}$ at $300\text{ K}$ | Forward bias reduces barrier |
| Diode Breakdown | **Zener**: Heavy doping, thin depletion, $< 6\text{ V}$, negative temp coeff; **Avalanche**: Light doping, impact ionization, $> 6\text{ V}$, positive temp coeff | Zener diode is used as voltage regulator |
| BJT Currents & Gains | $I_E = I_B + I_C; \alpha = \frac{I_C}{I_E}; \beta = \frac{I_C}{I_B}; \beta = \frac{\alpha}{1-\alpha}; \alpha = \frac{\beta}{1+\beta}; \gamma = 1+\beta$ | Doping: $E > C > B$; Size: $C > E > B$ |
| BJT Operating Regions | Active: EB forward, CB reverse (amplifier); Saturation: Both forward (ON switch); Cut-off: Both reverse (OFF switch) | CE has 180° phase inversion |
| CMOS Inverter | Pull-up PMOS to $V_{DD}$, Pull-down NMOS to GND | Zero static power dissipation |
| Solar Cell | $FF = \frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}; \eta = \frac{V_{oc} I_{sc} FF}{P_{in}} \times 100\%$ | Operates in 4th quadrant |
| Optical Fiber | $\theta_c = \sin^{-1}(n_2/n_1); NA = \sin\theta_a = \sqrt{n_1^2 - n_2^2} \approx n_1\sqrt{2\Delta}$ | TIR condition: $n_1 > n_2$ |
| Normalized Freq $V$ | $V = \frac{2\pi a}{\lambda} NA$; Single mode cut-off: $V \le 2.405$; Modes $M \approx \frac{V^2}{2}$ (Step), $M \approx \frac{V^2}{4}$ (GRIN) | Single-mode eliminates intermodal dispersion |
| CPU vs GPU | CPU: Low latency, 4-16 complex cores, large cache; GPU: High throughput, 1000s simple SIMD ALUs | SIMD = Single Instruction Multiple Data |

### Unit 3: Digital Electronics, Number Systems, Universal Gates & K-Maps
| Concept / Parameter | Formula / Key Fact | Notes & Traps |
|---|---|---|
| Number Systems | Binary (base 2), Octal (base 8, group 3 bits), Hex (base 16, group 4 bits) | Decimal range n-bit 2's comp: $-2^{n-1}$ to $+2^{n-1}-1$ |
| Complements & Subtraction | 1's comp: Invert bits (uses end-around carry); 2's comp: 1's comp + 1 (discards end carry, unique zero) | 8-bit signed range: $-128$ to $+127$ |
| Codes | BCD (8421, invalid: 1010-1111); Excess-3 (BCD + 0011, self-complementing); Gray Code (unit distance, single bit flip) | Gray to Binary: $B_{MSB}=G_{MSB}, B_i = B_{i+1} \oplus G_i$ |
| Universal Gate Realizations | **NAND counts**: NOT=1, AND=2, OR=3, XOR=4, XNOR=5; **NOR counts**: NOT=1, OR=2, AND=3, XOR=5, XNOR=4 | Universal gates: NAND & NOR |
| Boolean Theorems | $A + A'B = A + B; A(A' + B) = AB; AB + A'C + BC = AB + A'C$ (Consensus) | De Morgan's: $(A+B)' = A'B'; (AB)' = A'+B'$ |
| K-Map Simplification | Cell grouping in powers of 2 ($1, 2, 4, 8, 16$); Corners $(0, 2, 8, 10) = B'D'$ | Don't care ($d$) used only to enlarge groups |

---

## 🎯 Full 200-MCQ Master Question Bank (with Solutions & Explanations)


### 📌 Unit 1: Solid State Physics

**Q1. According to the Classical Free Electron Theory of Drude and Lorentz (1900), valence electrons in metals are assumed to behave as:**
- A) Quantum bound harmonic oscillators
- B) A classical ideal gas of free particles colliding elastically with positive ion cores
- C) Immobile particles tightly locked to lattice sites
- D) Fermions strictly obeying the Pauli exclusion principle at all temperatures

> **Correct Answer: B**  
> *Explanation:* Drude-Lorentz theory treats conduction electrons as a classical gas of free particles undergoing elastic collisions with stationary positive ion cores.

**Q2. The microscopic form of Ohm's Law relates current density J and electric field E through electrical conductivity σ as:**
- A) J = σ / E
- B) J = σ · E
- C) E = σ · J
- D) J = σ² · E

> **Correct Answer: B**  
> *Explanation:* Microscopic Ohm's Law is J = σ E, derived from J = n·e·vd and vd = (e·E·τ/m).

**Q3. The electrical conductivity σ of a metal in classical free electron theory is given by:**
- A) σ = (n e² τ) / m
- B) σ = (n e τ) / m²
- C) σ = (n² e τ) / m
- D) σ = m / (n e² τ)

> **Correct Answer: A**  
> *Explanation:* From J = n·e·vd = n·e·(e·E·τ/m) = (n·e²·τ/m)·E, comparing with J = σ·E gives σ = (n·e²·τ)/m.

**Q4. The Wiedemann-Franz Law states that for metals at a given temperature, the ratio of thermal conductivity (K) to electrical conductivity (σ) is:**
- A) Inversely proportional to absolute temperature T
- B) Directly proportional to absolute temperature T (K/σ ∝ T)
- C) Proportional to T²
- D) Independent of temperature

> **Correct Answer: B**  
> *Explanation:* Wiedemann-Franz Law: K / (σ T) = L (Lorentz Number = 2.44 × 10⁻⁸ W·Ω/K²), meaning K/σ is directly proportional to T.

**Q5. Which of the following experimental observations represents a critical failure of classical Drude-Lorentz theory?**
- A) Inability to derive Ohm's law
- B) Predicting an electronic molar heat capacity of (3/2)R, whereas the experimental value is ~0.01R at 300 K
- C) Explanation of high electrical conductivity in copper
- D) Explaining why metals reflect light

> **Correct Answer: B**  
> *Explanation:* Classical equipartition predicted Cv,el = 3/2 R, but experimentally it is ~100 times smaller because only a tiny fraction of electrons near the Fermi level absorb thermal energy.

**Q6. Classical free electron theory predicts the temperature dependence of electrical resistivity of metals as ρ ∝ √T, whereas experiments show:**
- A) ρ ∝ 1/T
- B) ρ ∝ T
- C) ρ ∝ T³
- D) ρ is independent of T

> **Correct Answer: B**  
> *Explanation:* Experimentally, resistivity of pure metals increases linearly with temperature (ρ ∝ T) due to lattice vibration (phonon) scattering.

**Q7. Quantum Free Electron Theory was proposed by Arnold Sommerfeld in 1928 by applying:**
- A) Maxwell-Boltzmann classical statistics
- B) Fermi-Dirac quantum statistics and Pauli Exclusion Principle
- C) Bohr's planetary model of atom
- D) Newton's laws of motion exclusively

> **Correct Answer: B**  
> *Explanation:* Sommerfeld resolved classical discrepancies by treating electrons as quantum fermions obeying Pauli exclusion and Fermi-Dirac statistics.

**Q8. The drift velocity vd of free electrons in a conductor is mathematically defined as:**
- A) vd = μ / E
- B) vd = μ · E = (e E τ / m)
- C) vd = e E / (m τ)
- D) vd = m / (e E τ)

> **Correct Answer: B**  
> *Explanation:* Drift velocity is the net velocity acquired in an electric field: vd = μ E = (e τ / m) E.

**Q9. Relaxation time (τ) of a conduction electron is defined as the average time:**
- A) Taken by an electron to traverse the conductor length
- B) Elapsed between two successive collisions with lattice ions
- C) Required for an electron to escape into vacuum
- D) Required for an electron to recombine with a hole

> **Correct Answer: B**  
> *Explanation:* Relaxation time τ is the mean time interval between two successive collisions of a conduction electron.

**Q10. Mobility (μ) of charge carriers is defined as:**
- A) Drift velocity per unit electric field (vd / E)
- B) Electric field per unit drift velocity (E / vd)
- C) Current density per unit charge (J / q)
- D) Diffusion coefficient per unit time (D / t)

> **Correct Answer: A**  
> *Explanation:* Mobility is defined as drift velocity acquired per unit applied electric field: μ = vd / E = e τ / m.

**Q11. Drift current is produced by ________, whereas diffusion current is produced by ________.**
- A) Carrier concentration gradient; Applied electric field
- B) Applied electric field; Carrier concentration gradient
- C) Magnetic field; Thermal gradient
- D) Mechanical stress; Optical illumination

> **Correct Answer: B**  
> *Explanation:* Drift current arises from carrier acceleration in an electric field, while diffusion current arises from spatial variations in carrier concentration.

**Q12. The Einstein relation connecting diffusion coefficient (D) and mobility (μ) of charge carriers at temperature T is:**
- A) D / μ = kB T / q = VT
- B) μ / D = kB T / q
- C) D · μ = kB T / q
- D) D / μ = q / (kB T)

> **Correct Answer: A**  
> *Explanation:* Einstein relation: D / μ = (kB T / q) = VT (Thermal voltage ≈ 26 mV at 300 K).

**Q13. The total current density J in a semiconductor containing both electrons and holes is given by:**
- A) J = q(n μn + p μp)E + q Dn (dn/dx) - q Dp (dp/dx)
- B) J = q(n μn - p μp)E + q Dn (dn/dx) + q Dp (dp/dx)
- C) J = q(n μn + p μp)E - q Dn (dn/dx) - q Dp (dp/dx)
- D) J = σ E + q Dn (dp/dx)

> **Correct Answer: A**  
> *Explanation:* Total current J = J_drift + J_diff = q(n μn + p μp)E + q Dn (dn/dx) - q Dp (dp/dx). The minus sign on hole diffusion reflects positive charge moving down the gradient.

**Q14. The forbidden energy gap (Eg) in solids is defined as the energy difference between:**
- A) Bottom of Valence Band and Top of Conduction Band
- B) Top of Valence Band (Ev) and Bottom of Conduction Band (Ec)
- C) Fermi level and vacuum level
- D) Donor level and acceptor level

> **Correct Answer: B**  
> *Explanation:* Eg = Ec - Ev, the forbidden energy span between the highest valence state and lowest conduction state.

**Q15. At room temperature (300 K), the forbidden energy gaps of Silicon (Si) and Germanium (Ge) are approximately:**
- A) 0.67 eV and 1.1 eV
- B) 1.1 eV and 0.67 eV
- C) 1.42 eV and 5.4 eV
- D) 0 eV and 1.1 eV

> **Correct Answer: B**  
> *Explanation:* Eg(Si) ≈ 1.1 eV and Eg(Ge) ≈ 0.67 eV at room temperature.

**Q16. In conductors (metals), the valence band and conduction band:**
- A) Are separated by an energy gap greater than 5 eV
- B) Overlap or the valence band is partially filled
- C) Are completely empty at 0 K
- D) Are separated by exactly 1.1 eV

> **Correct Answer: B**  
> *Explanation:* In metals, the conduction and valence bands overlap (Eg = 0), providing abundant free electrons for conduction.

**Q17. Insulators like diamond have a forbidden energy gap Eg that is typically:**
- A) Exactly 0 eV
- B) Around 1 eV
- C) Greater than 3 to 5 eV (~5.4 eV for diamond)
- D) Negative

> **Correct Answer: C**  
> *Explanation:* Insulators have wide bandgaps (Eg > 3 to 5 eV; diamond is ~5.4 eV), preventing thermal excitation across the gap.

**Q18. The temperature coefficient of resistance (α) for intrinsic semiconductors is:**
- A) Positive (resistance increases with temperature)
- B) Negative (resistance decreases / conductivity increases exponentially with temperature)
- C) Zero at all temperatures
- D) Infinite

> **Correct Answer: B**  
> *Explanation:* Semiconductors have a negative temperature coefficient of resistance (α < 0); thermal energy generates electron-hole pairs, drastically boosting conductivity.

**Q19. At absolute zero temperature (0 K), an ideal pure intrinsic semiconductor behaves as a:**
- A) Superconductor
- B) Perfect conductor
- C) Perfect insulator
- D) Semiconductor with high current

> **Correct Answer: C**  
> *Explanation:* At 0 K, no thermal energy exists to break covalent bonds; VB is completely full, CB is completely empty.

**Q20. An intrinsic semiconductor crystal (such as pure Silicon) is held together by:**
- A) Ionic bonds
- B) Covalent bonds
- C) Metallic bonds
- D) Hydrogen bonds

> **Correct Answer: B**  
> *Explanation:* Silicon and Germanium atoms (Group IV) share 4 valence electrons with 4 neighboring atoms via covalent bonds.

**Q21. In an intrinsic semiconductor under thermal equilibrium, the carrier concentrations satisfy:**
- A) n > p
- B) p > n
- C) n = p = ni
- D) n · p = 0

> **Correct Answer: C**  
> *Explanation:* Thermal bond rupture generates one electron in CB and one hole in VB simultaneously, so n = p = ni.

**Q22. The Mass Action Law states that in any semiconductor under thermal equilibrium:**
- A) n + p = ni
- B) n · p = ni²
- C) n / p = ni²
- D) n · p = 2 ni

> **Correct Answer: B**  
> *Explanation:* Mass Action Law: n · p = ni² at a constant temperature, valid for both intrinsic and extrinsic semiconductors.

**Q23. Silicon is preferred over Germanium in modern semiconductor electronics primarily because:**
- A) Si has a smaller bandgap than Ge
- B) Si has a larger bandgap (1.1 eV vs 0.67 eV), resulting in much lower reverse leakage current and higher temperature stability
- C) Si has higher electron mobility than Ge
- D) Ge is completely non-conductive

> **Correct Answer: B**  
> *Explanation:* Si has larger Eg, smaller reverse saturation current, higher operating temperature (up to 200°C vs 85°C for Ge), and forms stable native SiO2.

**Q24. When pure Silicon is doped with a Pentavalent impurity (such as Phosphorus, Arsenic, or Antimony):**
- A) P-type semiconductor is created
- B) N-type semiconductor is created with donor energy level Ed just below the conduction band
- C) The crystal becomes negatively charged overall
- D) Carrier concentration drops to zero

> **Correct Answer: B**  
> *Explanation:* Pentavalent atoms donate free electrons to CB, creating an N-type semiconductor with donor level Ed ~0.05 eV below Ec.

**Q25. When pure Silicon is doped with a Trivalent impurity (such as Boron, Aluminum, Gallium, or Indium):**
- A) N-type semiconductor is formed
- B) P-type semiconductor is formed with acceptor energy level Ea just above the valence band
- C) The crystal becomes positively charged overall
- D) Electron concentration exceeds hole concentration

> **Correct Answer: B**  
> *Explanation:* Trivalent atoms accept electrons to complete bonds, creating holes in VB and forming P-type material with Ea ~0.05 eV above Ev.

**Q26. An N-type semiconductor as a whole is:**
- A) Negatively charged
- B) Positively charged
- C) Electrically neutral
- D) Positively charged only at high temperatures

> **Correct Answer: C**  
> *Explanation:* An N-type crystal is electrically neutral because fixed positive donor ions exactly balance free electrons.

**Q27. In an N-type semiconductor, the majority carriers are ________ and minority carriers are ________.**
- A) Holes; Electrons
- B) Electrons; Holes
- C) Protons; Neutrons
- D) Ions; Holes

> **Correct Answer: B**  
> *Explanation:* In N-type material, electrons are majority carriers (n ≈ ND) and holes are minority carriers (p = ni² / ND).

**Q28. The Fermi-Dirac distribution function f(E) gives the probability that an available energy state E is:**
- A) Empty at absolute zero
- B) Occupied by an electron at temperature T
- C) Generating a photon
- D) Radiating thermal energy

> **Correct Answer: B**  
> *Explanation:* f(E) = 1 / [1 + exp((E - EF)/kB T)] represents the probability of electron occupancy of state E at temperature T.

**Q29. At any temperature T > 0 K, the probability of finding an electron at the Fermi level E = EF is exactly:**
- A) 1.0 (100%)
- B) 0.5 (50%)
- C) 0.0 (0%)
- D) 0.25 (25%)

> **Correct Answer: B**  
> *Explanation:* f(EF) = 1 / [1 + exp((EF - EF)/kB T)] = 1 / [1 + exp(0)] = 1 / 2 = 0.5.

**Q30. In an intrinsic semiconductor, the Fermi level EF lies:**
- A) Near the conduction band edge Ec
- B) Near the valence band edge Ev
- C) Exactly at the center of the forbidden bandgap (Ec + Ev)/2
- D) Inside the conduction band

> **Correct Answer: C**  
> *Explanation:* Since electron and hole densities are equal in intrinsic semiconductor, EF = (Ec + Ev)/2.

**Q31. In an N-type semiconductor, as doping concentration increases, the Fermi level EF:**
- A) Shifts downward towards the valence band
- B) Shifts upward closer to the conduction band edge Ec
- C) Remains strictly at the middle of the bandgap
- D) Drops into the valence band

> **Correct Answer: B**  
> *Explanation:* Adding donor impurities increases electron density, pushing EF upward toward Ec.

**Q32. In a P-type semiconductor, the Fermi level EF lies:**
- A) Closer to the valence band edge Ev
- B) Closer to the conduction band edge Ec
- C) Outside the crystal
- D) At the exact top of the conduction band

> **Correct Answer: A**  
> *Explanation:* Adding acceptor impurities increases hole concentration, pulling EF down toward Ev.

**Q33. When a magnetic field B is applied perpendicular to a current I in a semiconductor, the resulting transverse electric field is called the:**
- A) Seebeck field
- B) Hall electric field (EH)
- C) Peltier field
- D) Faraday field

> **Correct Answer: B**  
> *Explanation:* The transverse field established across the conductor to balance the Lorentz force is the Hall electric field EH.

**Q34. The Hall voltage VH across a sample of thickness t carrying current I in magnetic field B is given by:**
- A) VH = (RH · B · I) / t
- B) VH = (RH · t) / (B · I)
- C) VH = RH · B · I · t
- D) VH = (B · I) / (RH · t)

> **Correct Answer: A**  
> *Explanation:* VH = EH · w = (RH · J · B) · w = RH (I / (w t)) B w = (RH B I) / t.

**Q35. The Hall coefficient RH for an N-type semiconductor is:**
- A) Positive (RH > 0)
- B) Negative (RH = -1/(n e) < 0)
- C) Exactly zero
- D) Imaginary

> **Correct Answer: B**  
> *Explanation:* For electrons (charge -e), RH = -1 / (n e), which is negative.

**Q36. The Hall coefficient RH for a P-type semiconductor is:**
- A) Positive (RH = +1/(p e) > 0)
- B) Negative (RH < 0)
- C) Zero
- D) Dependent only on magnetic field

> **Correct Answer: A**  
> *Explanation:* For holes (charge +e), RH = +1 / (p e), which is positive.

**Q37. Hall mobility μH of charge carriers is related to conductivity σ and Hall coefficient RH by:**
- A) μH = σ / |RH|
- B) μH = σ · |RH|
- C) μH = |RH| / σ
- D) μH = σ² · |RH|

> **Correct Answer: B**  
> *Explanation:* Since σ = n e μ and |RH| = 1/(n e), we have μH = σ · |RH|.

**Q38. A copper wire carries current I = 5 A. If electron density n = 8.5 × 10²⁸ m⁻³ and cross-sectional area A = 1.0 × 10⁻⁶ m², the electron drift speed vd is: (e = 1.6 × 10⁻¹⁹ C)**
- A) 3.68 × 10⁻⁴ m/s
- B) 3.68 × 10⁴ m/s
- C) 1.25 × 10⁻² m/s
- D) 3.0 × 10⁸ m/s

> **Correct Answer: A**  
> *Explanation:* vd = I / (n e A) = 5 / (8.5e28 * 1.6e-19 * 1e-6) = 5 / 13600 = 3.68 × 10⁻⁴ m/s.

**Q39. A Silicon sample is doped with ND = 10¹⁷ cm⁻³ of Phosphorus. If ni = 1.5 × 10¹⁰ cm⁻³, the minority hole concentration p is:**
- A) 1.5 × 10³ cm⁻³
- B) 2.25 × 10³ cm⁻³
- C) 2.25 × 10¹⁰ cm⁻³
- D) 10¹⁷ cm⁻³

> **Correct Answer: B**  
> *Explanation:* p = ni² / ND = (1.5 × 10¹⁰)² / 10¹⁷ = 2.25 × 10²⁰ / 10¹⁷ = 2.25 × 10³ cm⁻³.

**Q40. A semiconductor slab of thickness 0.5 mm carrying 10 mA in B = 0.5 T has RH = 0.05 m³/C. The Hall voltage VH is:**
- A) 0.5 mV
- B) 5.0 mV
- C) 0.05 V
- D) 0.5 V

> **Correct Answer: A**  
> *Explanation:* VH = (RH B I) / t = (0.05 * 0.5 * 0.01) / (0.5 × 10⁻³) = 0.00025 / 0.0005 = 0.5 mV.

**Q41. If the Hall coefficient RH of a semiconductor is +1.25 × 10⁻⁴ m³/C, the carrier concentration is:**
- A) 5 × 10²² m⁻³ holes
- B) 5 × 10²² m⁻³ electrons
- C) 1.25 × 10²⁰ m⁻³ holes
- D) 8 × 10²¹ m⁻³ electrons

> **Correct Answer: A**  
> *Explanation:* Positive RH means holes (P-type). p = 1 / (e RH) = 1 / (1.6e-19 * 1.25e-4) = 5 × 10²² m⁻³.

**Q42. Which of the following is NOT an application of the Hall effect?**
- A) Determining whether a semiconductor is N-type or P-type
- B) Measuring carrier concentration and mobility
- C) Measuring unknown magnetic field B
- D) Directly measuring the speed of light in vacuum

> **Correct Answer: D**  
> *Explanation:* Hall effect measures carrier polarity, concentration, mobility, and magnetic fields, not the speed of light.

**Q43. In a pure semiconductor, when temperature increases from 300 K to 400 K, the electrical conductivity:**
- A) Decreases linearly
- B) Increases exponentially
- C) Drops to zero
- D) Remains strictly constant

> **Correct Answer: B**  
> *Explanation:* Conductivity increases exponentially as σ ∝ exp(-Eg / 2kB T) due to rapid generation of electron-hole pairs.

**Q44. In an N-type semiconductor, the donor energy level Ed lies:**
- A) In the middle of the forbidden gap
- B) Just below the bottom of the conduction band Ec
- C) Just above the top of the valence band Ev
- D) Inside the valence band

> **Correct Answer: B**  
> *Explanation:* Donor level Ed is very close to Ec (~0.05 eV in Si), making ionization very easy at room temperature.

**Q45. In a P-type semiconductor, the acceptor energy level Ea lies:**
- A) In the middle of the conduction band
- B) Just above the top of the valence band Ev
- C) Just below the bottom of the conduction band Ec
- D) Outside the energy band diagram

> **Correct Answer: B**  
> *Explanation:* Acceptor level Ea lies just above Ev (~0.05 eV in Si), readily accepting electrons from VB.

**Q46. The unit of Hall coefficient RH in SI units is:**
- A) m³ / C
- B) V / m
- C) Ω · m
- D) C / m²

> **Correct Answer: A**  
> *Explanation:* RH = 1 / (n q) = 1 / (m⁻³ · C) = m³ / C (or m³ / A·s).

**Q47. The unit of carrier mobility μ is:**
- A) m² / (V · s)
- B) V / (m · s)
- C) m / s²
- D) Ω · m²

> **Correct Answer: A**  
> *Explanation:* μ = vd / E = (m/s) / (V/m) = m² / (V·s) (or cm² / V·s).

**Q48. Thermal voltage VT at room temperature (T = 300 K) is approximately equal to:**
- A) 0.7 V
- B) 0.3 V
- C) 26 mV (0.0259 V)
- D) 1.1 V

> **Correct Answer: C**  
> *Explanation:* VT = kB T / q = (1.38 × 10⁻²³ * 300) / (1.6 × 10⁻¹⁹) ≈ 0.02586 V ≈ 26 mV.

**Q49. When a semiconductor is illuminated by light with photon energy hν < Eg:**
- A) Intense electron-hole pairs are created
- B) No electron-hole pairs are generated (semiconductor is transparent)
- C) The semiconductor becomes a superconductor
- D) The bandgap collapses to zero

> **Correct Answer: B**  
> *Explanation:* Photons with energy below Eg cannot excite electrons across the bandgap, so the material is transparent.

**Q50. At very high temperatures, an extrinsic doped semiconductor behaves as:**
- A) An insulator
- B) An intrinsic semiconductor (intrinsic carrier generation overwhelms dopant density)
- C) A superconductor
- D) A pure metal with overlapping bands

> **Correct Answer: B**  
> *Explanation:* At high T, thermally generated ni >> ND or NA, causing the material to behave like an intrinsic semiconductor.

**Q51. Mean free path λ of conduction electrons is related to drift velocity vd and relaxation time τ as:**
- A) λ = vd · τ
- B) λ = vd / τ
- C) λ = τ / vd
- D) λ = vd² · τ

> **Correct Answer: A**  
> *Explanation:* Mean free path λ is the average distance between collisions: λ = vd · τ.

**Q52. For an energy state E located 3 kB T above the Fermi level (E - EF = 3 kB T), the Fermi-Dirac occupation probability f(E) is:**
- A) 1 / (1 + e³)
- B) 1 / (1 + e⁻³)
- C) 0.5
- D) 1.0

> **Correct Answer: A**  
> *Explanation:* f(E) = 1 / [1 + exp((E - EF)/kB T)] = 1 / [1 + exp(3)] ≈ 1 / (1 + 20.08) ≈ 0.047 (4.7%).

**Q53. For an energy state E located 3 kB T below the Fermi level (E - EF = -3 kB T), the probability of finding a hole (unoccupied state) is:**
- A) 1 / (1 + e³)
- B) 1 / (1 + e⁻³)
- C) 0.5
- D) 0.95

> **Correct Answer: A**  
> *Explanation:* Probability of being empty 1 - f(E) = 1 - 1/(1 + e⁻³) = e⁻³ / (1 + e⁻³) = 1 / (1 + e³).

**Q54. Which of the following elements is a trivalent acceptor dopant for Silicon?**
- A) Phosphorus (P)
- B) Arsenic (As)
- C) Boron (B)
- D) Antimony (Sb)

> **Correct Answer: C**  
> *Explanation:* Boron (Group III) is trivalent; P, As, Sb (Group V) are pentavalent donors.

**Q55. Which of the following elements is a pentavalent donor dopant for Silicon?**
- A) Boron (B)
- B) Gallium (Ga)
- C) Arsenic (As)
- D) Indium (In)

> **Correct Answer: C**  
> *Explanation:* Arsenic (Group V) is pentavalent; B, Ga, In (Group III) are trivalent.

**Q56. In a Hall effect setup, if current I flows in +x direction and magnetic field B is applied in +z direction, electrons experience Lorentz force in:**
- A) +y direction
- B) -y direction
- C) +z direction
- D) -x direction

> **Correct Answer: B**  
> *Explanation:* Electrons drift in -x direction. Lorentz force F = -e (v × B) = -e ((-v x̂) × (B ẑ)) = -e (v B ŷ) = -y direction.

**Q57. If electrical conductivity of a semiconductor is σ = 100 S/m and RH = 0.02 m³/C, the carrier mobility is:**
- A) 2 m²/(V·s)
- B) 5000 m²/(V·s)
- C) 0.0002 m²/(V·s)
- D) 200 m²/(V·s)

> **Correct Answer: A**  
> *Explanation:* μ = σ · RH = 100 * 0.02 = 2 m² / (V·s).

**Q58. The concept of 'effective mass' of an electron arises in:**
- A) Drude classical theory
- B) Band theory of solids due to electron interaction with periodic crystal lattice potential
- C) Ideal gas laws
- D) Coulomb electrostatic law

> **Correct Answer: B**  
> *Explanation:* Effective mass m* accounts for the forces exerted on the electron by the periodic crystal potential.

**Q59. In Germanium (Ge), the donor level Ed lies approximately ________ below the conduction band edge Ec.**
- A) 0.01 eV
- B) 0.05 eV
- C) 0.67 eV
- D) 1.1 eV

> **Correct Answer: A**  
> *Explanation:* Ed in Ge is ~0.01 eV below Ec (compared to ~0.05 eV in Si).

**Q60. Direct bandgap semiconductors (like GaAs) differ from indirect bandgap semiconductors (like Si) because:**
- A) Conduction band minimum and Valence band maximum occur at the same crystal momentum (k = 0), allowing efficient photon emission
- B) They have zero bandgap
- C) They cannot be doped
- D) Conduction band is always full

> **Correct Answer: A**  
> *Explanation:* Direct bandgap semiconductors allow direct radiative electron-hole recombination without phonon assistance, making them ideal for LEDs/lasers.

**Q61. The Fermi energy EF of a metal at T = 0 K is:**
- A) The energy of the lowest conduction state
- B) The highest occupied energy state at 0 K
- C) Zero for all metals
- D) Infinite

> **Correct Answer: B**  
> *Explanation:* At 0 K, all energy states up to EF are 100% occupied, and all states above EF are completely empty.

**Q62. A hole in semiconductor physics is treated as:**
- A) A positively charged quasiparticle with charge +e and positive effective mass
- B) A real free proton in the nucleus
- C) An electron moving with negative velocity
- D) A neutral neutron

> **Correct Answer: A**  
> *Explanation:* A hole is an empty electron state in the valence band behaving as a mobile positive quasiparticle with charge +e.

**Q63. If temperature of a pure semiconductor is increased, the Fermi level EF:**
- A) Stays exactly at the center of the bandgap
- B) Deviates slightly depending on effective masses of electrons and holes: EF = (Ec+Ev)/2 + (3/4) kB T ln(mh*/me*)
- C) Jumps immediately to conduction band
- D) Becomes zero

> **Correct Answer: B**  
> *Explanation:* EF = (Ec+Ev)/2 + (3/4) kB T ln(mh*/me*); if mh* ≈ me*, it stays essentially at the exact center.

**Q64. In a metal, electrical resistivity ρ is proportional to relaxation time τ as:**
- A) ρ ∝ τ
- B) ρ ∝ 1 / τ
- C) ρ ∝ τ²
- D) ρ is independent of τ

> **Correct Answer: B**  
> *Explanation:* Since σ = n e² τ / m, resistivity ρ = 1/σ = m / (n e² τ) ∝ 1/τ.

**Q65. If a sample has a negative Hall coefficient RH < 0, the sign of majority charge carriers is:**
- A) Positive (+q)
- B) Negative (-q, electrons)
- C) Neutral
- D) Indeterminate

> **Correct Answer: B**  
> *Explanation:* RH < 0 definitively proves that the majority charge carriers are electrons.


### 📌 Unit 2: Electrical Laws, Devices, Optics & Computing

**Q66. Kirchhoff's Current Law (KCL) is based on which fundamental conservation law?**
- A) Conservation of Energy
- B) Conservation of Electric Charge (dq/dt = 0 at node)
- C) Conservation of Linear Momentum
- D) Conservation of Angular Momentum

> **Correct Answer: B**  
> *Explanation:* KCL states that algebraic sum of currents entering a node is zero (∑ I = 0), representing conservation of charge.

**Q67. Kirchhoff's Voltage Law (KVL) is based on which fundamental conservation law?**
- A) Conservation of Charge
- B) Conservation of Energy (work done moving around closed loop is zero)
- C) Conservation of Mass
- D) Newton's Third Law

> **Correct Answer: B**  
> *Explanation:* KVL states that algebraic sum of voltages around any closed loop is zero (∑ V = 0), representing conservation of energy.

**Q68. In an unbiased PN junction at thermal equilibrium, the depletion region contains:**
- A) Abundant free electrons and holes
- B) Immobile ionized donor (+q) and acceptor (-q) ions devoid of free mobile carriers
- C) Neutral Silicon atoms only
- D) Pure metallic contacts

> **Correct Answer: B**  
> *Explanation:* Diffusion leaves uncompensated immobile positive donor ions on N-side and negative acceptor ions on P-side.

**Q69. The barrier potential (built-in potential V0) at 300 K is approximately ________ for Silicon and ________ for Germanium.**
- A) 0.3 V and 0.7 V
- B) 0.7 V and 0.3 V
- C) 1.1 V and 0.67 V
- D) 2.0 V and 1.5 V

> **Correct Answer: B**  
> *Explanation:* Barrier potential is ~0.7 V for Silicon and ~0.3 V for Germanium at room temperature.

**Q70. When a PN junction is forward biased (P connected to positive, N to negative):**
- A) Depletion width widens and barrier height increases
- B) Depletion width narrows, barrier potential reduces (V0 - VF), and diffusion current increases exponentially
- C) No current can flow
- D) Zener breakdown occurs

> **Correct Answer: B**  
> *Explanation:* Forward bias opposes built-in barrier, shrinking depletion layer and enabling exponential majority carrier diffusion.

**Q71. When a PN junction is reverse biased (P connected to negative, N to positive):**
- A) Depletion layer widens, barrier height increases (V0 + VR), and only a tiny minority saturation current I0 flows
- B) Large diffusion current flows
- C) Barrier potential drops to zero
- D) Diode acts as a closed switch

> **Correct Answer: A**  
> *Explanation:* Reverse bias aids built-in field, expanding depletion width and restricting current to reverse saturation current I0.

**Q72. The reverse saturation current I0 of a PN junction diode approximately:**
- A) Halves for every 10 °C rise in temperature
- B) Doubles for every 10 °C rise in temperature
- C) Remains strictly independent of temperature
- D) Increases linearly with applied reverse voltage

> **Correct Answer: B**  
> *Explanation:* I0 is governed by thermally generated minority carriers and roughly doubles every 10 °C increase in temperature.

**Q73. Zener breakdown occurs in PN junctions that are:**
- A) Lightly doped with wide depletion region under high reverse voltage (> 6 V)
- B) Heavily doped with extremely narrow depletion region (< 10 nm) under moderate reverse voltage (< 6 V)
- C) Forward biased at 0.7 V
- D) Completely undoped

> **Correct Answer: B**  
> *Explanation:* Zener breakdown occurs in heavily doped junctions where intense electric field (> 10⁶ V/cm) directly ruptures covalent bonds via quantum tunneling.

**Q74. Avalanche breakdown in PN junctions is caused by:**
- A) Direct electric field emission of valence electrons
- B) Impact ionization where accelerated minority carriers collide with lattice atoms, generating secondary electron-hole pairs
- C) High forward current
- D) Optical excitation

> **Correct Answer: B**  
> *Explanation:* Avalanche breakdown occurs in lightly doped diodes under higher reverse voltage via cumulative impact ionization.

**Q75. The temperature coefficient of breakdown voltage is ________ for Zener breakdown and ________ for Avalanche breakdown.**
- A) Positive; Negative
- B) Negative; Positive
- C) Zero; Zero
- D) Positive; Positive

> **Correct Answer: B**  
> *Explanation:* Zener breakdown voltage decreases with temperature (negative temp coeff), while Avalanche breakdown voltage increases with temperature (positive temp coeff).

**Q76. A Zener diode is operated in ________ bias to function as a ________.**
- A) Forward; Rectifier
- B) Reverse breakdown region; Constant voltage regulator
- C) Forward; Variable capacitor
- D) Reverse; Solar energy collector

> **Correct Answer: B**  
> *Explanation:* In reverse breakdown, Zener diode maintains an almost perfectly constant voltage across its terminals despite current variations.

**Q77. In a Bipolar Junction Transistor (BJT), the correct relationship among terminal currents is:**
- A) IC = IE + IB
- B) IE = IB + IC
- C) IB = IE + IC
- D) IE = IC - IB

> **Correct Answer: B**  
> *Explanation:* By KCL applied to BJT package, total emitter current is sum of base and collector currents: IE = IB + IC.

**Q78. The doping concentrations of the three BJT regions in descending order are:**
- A) Collector > Base > Emitter
- B) Emitter > Collector > Base
- C) Base > Emitter > Collector
- D) Collector > Emitter > Base

> **Correct Answer: B**  
> *Explanation:* Emitter is heavily doped (to inject carriers), Collector is moderately doped, and Base is very lightly doped (and ultra-thin).

**Q79. The physical sizes (areas) of the three BJT regions in descending order are:**
- A) Emitter > Base > Collector
- B) Collector > Emitter > Base
- C) Base > Collector > Emitter
- D) Emitter > Collector > Base

> **Correct Answer: B**  
> *Explanation:* Collector has the largest physical area to dissipate heat generated during collection of charge carriers.

**Q80. For a BJT to operate in the Active Region (linear amplifier mode):**
- A) Emitter-Base (EB) junction is Forward biased; Collector-Base (CB) junction is Reverse biased
- B) EB junction is Reverse biased; CB junction is Forward biased
- C) Both EB and CB junctions are Forward biased
- D) Both EB and CB junctions are Reverse biased

> **Correct Answer: A**  
> *Explanation:* Active mode requires forward-biased EB junction (injection) and reverse-biased CB junction (collection).

**Q81. For a BJT to operate as a closed switch (ON state in saturation):**
- A) Both EB and CB junctions are Forward biased
- B) Both EB and CB junctions are Reverse biased
- C) EB forward biased, CB reverse biased
- D) EB reverse biased, CB forward biased

> **Correct Answer: A**  
> *Explanation:* In Saturation region, both junctions are forward biased, giving minimal VCE,sat (~0.2 V) and maximum current.

**Q82. For a BJT to operate as an open switch (OFF state in cut-off):**
- A) Both EB and CB junctions are Reverse biased
- B) Both EB and CB junctions are Forward biased
- C) EB forward biased, CB reverse biased
- D) Base is shorted to collector

> **Correct Answer: A**  
> *Explanation:* In Cut-off region, both junctions are reverse biased, resulting in zero terminal currents (open switch).

**Q83. The Common Base DC current gain (α) and Common Emitter DC current gain (β) are defined as:**
- A) α = IC / IE and β = IC / IB
- B) α = IB / IC and β = IE / IC
- C) α = IE / IC and β = IC / IB
- D) α = IC / IB and β = IC / IE

> **Correct Answer: A**  
> *Explanation:* α = IC / IE (typically 0.95 to 0.998) and β = IC / IB (typically 20 to 500).

**Q84. The mathematical relationship between β and α is:**
- A) β = α / (1 + α)
- B) β = α / (1 - α)
- C) β = (1 - α) / α
- D) β = 1 / (1 - α)

> **Correct Answer: B**  
> *Explanation:* Since IE = IB + IC, dividing by IC gives 1/α = 1/β + 1, which rearranges to β = α / (1 - α).

**Q85. If a transistor has α = 0.99, its common emitter current gain β is:**
- A) 49
- B) 99
- C) 100
- D) 0.01

> **Correct Answer: B**  
> *Explanation:* β = α / (1 - α) = 0.99 / (1 - 0.99) = 0.99 / 0.01 = 99.

**Q86. A CMOS inverter is constructed using:**
- A) Two NMOS transistors in series
- B) One PMOS transistor as pull-up network and one NMOS transistor as pull-down network
- C) Two PMOS transistors in parallel
- D) One BJT and one diode

> **Correct Answer: B**  
> *Explanation:* CMOS inverter pairs a PMOS pull-up (connected to VDD) and an NMOS pull-down (connected to GND).

**Q87. In a CMOS inverter, when the input Vin is at Logic 1 (VDD):**
- A) PMOS is ON, NMOS is OFF, Vout = VDD
- B) PMOS is OFF, NMOS is ON, Vout = 0 V (Logic 0)
- C) Both transistors are ON
- D) Both transistors are OFF

> **Correct Answer: B**  
> *Explanation:* High input turns NMOS ON and PMOS OFF, pulling output cleanly down to 0 V (GND).

**Q88. The primary advantage of CMOS technology in computer logic design is:**
- A) High static power dissipation
- B) Near-zero static power dissipation because PMOS and NMOS are never ON simultaneously in steady state
- C) Requirement of negative supply voltage
- D) High output impedance

> **Correct Answer: B**  
> *Explanation:* In steady state (0 or 1), one transistor is always OFF, eliminating direct path from VDD to GND and yielding zero static power.

**Q89. A solar cell converts solar radiation directly into electrical energy based on the:**
- A) Thermionic emission
- B) Photovoltaic effect across a PN junction
- C) Seebeck effect
- D) Hall effect

> **Correct Answer: B**  
> *Explanation:* Solar cells operate via photovoltaic effect: light generates electron-hole pairs, separated by the junction field to create photovoltage.

**Q90. In the I-V characteristic curve of a solar cell, the cell operates in the:**
- A) First quadrant (power absorbing)
- B) Second quadrant
- C) Fourth quadrant (power delivering, V > 0 and I < 0)
- D) Third quadrant

> **Correct Answer: C**  
> *Explanation:* Solar cells deliver power to an external load, operating in the 4th quadrant of the I-V plane.

**Q91. The Fill Factor (FF) of a solar cell is defined as:**
- A) FF = (Voc · Isc) / (Vmp · Imp)
- B) FF = (Vmp · Imp) / (Voc · Isc) = Pmax / (Voc · Isc)
- C) FF = Voc / Isc
- D) FF = Pout / Pin

> **Correct Answer: B**  
> *Explanation:* FF is the ratio of maximum deliverable power (Vmp · Imp) to the product of open-circuit voltage Voc and short-circuit current Isc.

**Q92. A solar cell has Voc = 0.6 V, Isc = 3.0 A, and maximum power point values Vmp = 0.5 V, Imp = 2.7 A. The Fill Factor is:**
- A) 0.50
- B) 0.75 (75%)
- C) 0.90
- D) 1.25

> **Correct Answer: B**  
> *Explanation:* FF = (Vmp · Imp) / (Voc · Isc) = (0.5 * 2.7) / (0.6 * 3.0) = 1.35 / 1.80 = 0.75.

**Q93. Light propagates through the core of an optical fiber via:**
- A) Total Internal Reflection (TIR) at the core-cladding boundary
- B) Continuous refraction through cladding
- C) Electron conduction
- D) Magnetic induction

> **Correct Answer: A**  
> *Explanation:* Light is trapped and guided in optical fiber core through continuous Total Internal Reflection.

**Q94. For Total Internal Reflection to occur in an optical fiber, the refractive indices must satisfy:**
- A) Core refractive index n1 < Cladding refractive index n2
- B) Core refractive index n1 > Cladding refractive index n2
- C) n1 = n2
- D) Cladding must be metallic

> **Correct Answer: B**  
> *Explanation:* TIR requires light to travel from denser core (n1) toward rarer cladding (n2), so n1 > n2.

**Q95. The critical angle θc at the core-cladding interface is given by:**
- A) θc = sin⁻¹(n1 / n2)
- B) θc = sin⁻¹(n2 / n1)
- C) θc = cos⁻¹(n2 / n1)
- D) θc = tan⁻¹(n1 / n2)

> **Correct Answer: B**  
> *Explanation:* By Snell's Law, critical angle θc = sin⁻¹(n2 / n1). Light incident at angle > θc undergoes total internal reflection.

**Q96. Numerical Aperture (NA) of an optical fiber measures its light gathering capacity and is defined in terms of acceptance angle θa as:**
- A) NA = sin(θa) = √(n1² - n2²)
- B) NA = cos(θa) = √(n1² + n2²)
- C) NA = tan(θa) = n1 / n2
- D) NA = n1 - n2

> **Correct Answer: A**  
> *Explanation:* NA = sin(θa) = √(n1² - n2²) ≈ n1 √(2Δ), where Δ is fractional index difference.

**Q97. An optical fiber has core refractive index n1 = 1.50 and cladding index n2 = 1.48. The Numerical Aperture (NA) is:**
- A) 0.020
- B) 0.244
- C) 0.500
- D) 0.987

> **Correct Answer: B**  
> *Explanation:* NA = √(1.50² - 1.48²) = √(2.25 - 2.1904) = √0.0596 ≈ 0.2441.

**Q98. The condition for single-mode fiber (SMF) propagation in a step-index optical fiber is that the V-number must satisfy:**
- A) V > 100
- B) V ≤ 2.405
- C) V = 0
- D) V ≥ 5.5

> **Correct Answer: B**  
> *Explanation:* A step-index fiber operates strictly in single mode (HE11) when normalized frequency V ≤ 2.405.

**Q99. The total number of guided propagation modes M in a multimode step-index optical fiber with large V-number is approximately:**
- A) M ≈ V
- B) M ≈ V² / 2
- C) M ≈ V² / 4
- D) M ≈ 2 V²

> **Correct Answer: B**  
> *Explanation:* For step-index multimode fiber, M ≈ V² / 2. (For parabolic graded-index fiber, M ≈ V² / 4).

**Q100. A CPU architecture is fundamentally optimized for ________, whereas a GPU architecture is optimized for ________.**
- A) High data throughput; Ultra-low instruction latency
- B) Ultra-low instruction latency with deep caches; Massive parallel data throughput with thousands of ALUs
- C) Graphics processing only; Serial pointer arithmetic only
- D) Zero memory bandwidth; High clock jitter

> **Correct Answer: B**  
> *Explanation:* CPUs optimize single-thread latency with large caches and branch prediction; GPUs optimize parallel throughput with thousands of SIMD cores.

**Q101. In an electric circuit, electric power P dissipated in a resistor R carrying current I with voltage V is:**
- A) P = V · I = I² R = V² / R
- B) P = V / I = I / R
- C) P = V² · R
- D) P = I / V²

> **Correct Answer: A**  
> *Explanation:* Joule's law: P = V I = I² R = V² / R.

**Q102. An electric bulb rated 100 W, 200 V has an internal operating resistance of:**
- A) 2 Ω
- B) 200 Ω
- C) 400 Ω
- D) 20,000 Ω

> **Correct Answer: C**  
> *Explanation:* R = V² / P = (200)² / 100 = 40,000 / 100 = 400 Ω.

**Q103. If three resistors of 6 Ω, 3 Ω, and 2 Ω are connected in parallel, the equivalent resistance is:**
- A) 11 Ω
- B) 1 Ω
- C) 0.5 Ω
- D) 3 Ω

> **Correct Answer: B**  
> *Explanation:* 1/Req = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1 Ω⁻¹ => Req = 1 Ω.

**Q104. The relationship between collector current IC, base current IB, and reverse saturation current ICBO in common emitter mode is:**
- A) IC = β IB + (1 + β) ICBO
- B) IC = β IB + ICBO
- C) IC = α IB + ICBO
- D) IC = β IE

> **Correct Answer: A**  
> *Explanation:* IC = α IE + ICBO = α (IB + IC) + ICBO => IC = (α/(1-α)) IB + (1/(1-α)) ICBO = β IB + (1 + β) ICBO.

**Q105. In a BJT amplifier, the Common Collector (Emitter Follower) configuration provides:**
- A) High voltage gain and low current gain
- B) Voltage gain ≈ 1, high current gain, high input impedance, and low output impedance (ideal buffer)
- C) High voltage gain and high output impedance
- D) Zero power gain

> **Correct Answer: B**  
> *Explanation:* Common Collector acts as a voltage buffer (Av ≈ 1) with high Zin and low Zout, perfect for impedance matching.

**Q106. The Common Emitter (CE) configuration of BJT provides a phase shift between input and output voltage of:**
- A) 0° (in-phase)
- B) 90°
- C) 180° (out-of-phase)
- D) 270°

> **Correct Answer: C**  
> *Explanation:* CE configuration introduces a 180° phase inversion between input signal and amplified output voltage.

**Q107. Fractional refractive index difference Δ in an optical fiber is defined as:**
- A) Δ = (n1 - n2) / n1
- B) Δ = (n1 + n2) / n1
- C) Δ = (n1 - n2) / n2
- D) Δ = n1 · n2

> **Correct Answer: A**  
> *Explanation:* Fractional index difference Δ = (n1 - n2) / n1, representing the relative step between core and cladding.

**Q108. In a graded-index (GRIN) optical fiber, the refractive index of the core:**
- A) Is strictly constant throughout the core
- B) Decreases parabolically from center axis toward the cladding
- C) Increases linearly toward the cladding
- D) Is lower than the cladding index

> **Correct Answer: B**  
> *Explanation:* GRIN core index decreases parabolically n(r) = n1 √(1 - 2Δ(r/a)²), equalizing transit times of different optical rays.

**Q109. Intermodal dispersion is completely absent in which type of optical fiber?**
- A) Multimode Step-Index Fiber
- B) Multimode Graded-Index Fiber
- C) Single-Mode Fiber (SMF)
- D) Plastic Optical Fiber

> **Correct Answer: C**  
> *Explanation:* Single-mode fiber supports only one fundamental propagation mode, inherently eliminating intermodal dispersion.

**Q110. A step-index fiber has core radius a = 4 μm, NA = 0.15, operating at wavelength λ = 1.3 μm. The V-number is:**
- A) 2.90
- B) 1.50
- C) 5.80
- D) 0.85

> **Correct Answer: A**  
> *Explanation:* V = (2π a / λ) NA = (2 * 3.1416 * 4 / 1.3) * 0.15 = 19.333 * 0.15 ≈ 2.90.

**Q111. The power conversion efficiency (η) of a solar cell is given by:**
- A) η = (Voc · Isc · FF / Pin) × 100%
- B) η = (Pin / Pmax) × 100%
- C) η = (Voc / Isc) × 100%
- D) η = (FF / Pin) × 100%

> **Correct Answer: A**  
> *Explanation:* Efficiency η = (Pmax / Pin) × 100% = (Voc · Isc · FF / Pin) × 100%.

**Q112. A solar panel of area 1.5 m² is exposed to solar irradiance of 1000 W/m². If it delivers 225 W electrical power, its efficiency is:**
- A) 10%
- B) 15%
- C) 22.5%
- D) 30%

> **Correct Answer: B**  
> *Explanation:* Pin = 1000 W/m² * 1.5 m² = 1500 W. Efficiency η = (225 / 1500) × 100% = 15%.

**Q113. In a CE transistor amplifier, if base current changes by 20 μA and collector current changes by 2 mA, the AC current gain βac is:**
- A) 10
- B) 100
- C) 50
- D) 200

> **Correct Answer: B**  
> *Explanation:* βac = ΔIC / ΔIB = (2 × 10⁻³ A) / (20 × 10⁻⁶ A) = 100.

**Q114. The relationship between Common Collector current gain γ and Common Emitter current gain β is:**
- A) γ = β
- B) γ = 1 + β
- C) γ = β - 1
- D) γ = β / (1 + β)

> **Correct Answer: B**  
> *Explanation:* γ = IE / IB = (IB + IC) / IB = 1 + β.

**Q115. In an NPN transistor, the majority charge carriers in the emitter and collector are:**
- A) Holes
- B) Electrons
- C) Positive ions
- D) Photons

> **Correct Answer: B**  
> *Explanation:* In NPN BJT, Emitter (N) and Collector (N) have electrons as majority carriers, while Base (P) has holes.

**Q116. In a PNP transistor, the majority charge carriers injected from emitter into base are:**
- A) Holes
- B) Electrons
- C) Negative ions
- D) Neutrons

> **Correct Answer: A**  
> *Explanation:* In PNP BJT, Emitter is P-type, so it injects holes into the N-type base region.

**Q117. A diode circuit has an AC dynamic resistance rd defined as:**
- A) rd = V / I
- B) rd = ΔV / ΔI = η VT / ID
- C) rd = ID / VT
- D) rd = 1 / (V · I)

> **Correct Answer: B**  
> *Explanation:* Dynamic resistance is the slope reciprocal rd = dV/dI = η VT / ID ≈ 26 mV / ID at room temperature.

**Q118. For a Silicon diode carrying forward current ID = 26 mA at 300 K (taking ideality factor η = 1), dynamic resistance rd is:**
- A) 1 Ω
- B) 26 Ω
- C) 0.1 Ω
- D) 10 Ω

> **Correct Answer: A**  
> *Explanation:* rd = VT / ID = 26 mV / 26 mA = 1 Ω.

**Q119. The ideal diode equation (Shockley equation) for current I as a function of voltage V is:**
- A) I = I0 [exp(qV / η kB T) - 1]
- B) I = I0 [exp(η kB T / qV) + 1]
- C) I = I0 (qV / kB T)
- D) I = V / R

> **Correct Answer: A**  
> *Explanation:* Shockley diode equation is I = I0 [exp(V / η VT) - 1].

**Q120. When a reverse bias VR >> VT is applied across a PN diode, the diode current approaches:**
- A) 0 A
- B) -I0 (reverse saturation current)
- C) +I0
- D) -∞

> **Correct Answer: B**  
> *Explanation:* When V is negative and |V| >> VT, exp(V/VT) → 0, so I = I0 (0 - 1) = -I0.

**Q121. In a bridge rectifier circuit with sinusoidal AC input, the number of diodes conducting simultaneously in each half cycle is:**
- A) 1
- B) 2
- C) 4
- D) 0

> **Correct Answer: B**  
> *Explanation:* In a bridge rectifier, two diagonally opposite diodes conduct simultaneously during each half cycle.

**Q122. The ripple factor of an ideal full-wave rectifier without filter is approximately:**
- A) 1.21
- B) 0.482
- C) 0.10
- D) 0.0

> **Correct Answer: B**  
> *Explanation:* Full-wave rectifier ripple factor is γ = √( (Irms/Idc)² - 1 ) ≈ 0.482 (compared to 1.21 for half-wave).

**Q123. The maximum theoretical rectification efficiency of a full-wave rectifier is:**
- A) 40.6%
- B) 81.2%
- C) 50.0%
- D) 100%

> **Correct Answer: B**  
> *Explanation:* Full-wave rectifier maximum theoretical efficiency is 81.2% (twice that of a half-wave rectifier, 40.6%).

**Q124. In a BJT, the Early Effect (base-width modulation) is caused by:**
- A) Variation of reverse-bias voltage across the collector-base junction altering the effective base width
- B) High temperature melting the base
- C) Heavy doping of emitter
- D) Forward biasing collector

> **Correct Answer: A**  
> *Explanation:* Higher reverse collector bias widens the CB depletion layer into the base, reducing the effective neutral base width.

**Q125. Which BJT configuration is most widely used for voltage and power amplification?**
- A) Common Base (CB)
- B) Common Emitter (CE)
- C) Common Collector (CC)
- D) Inverted Collector

> **Correct Answer: B**  
> *Explanation:* Common Emitter provides both high voltage gain and high current gain, yielding the highest power gain.

**Q126. In a CMOS circuit, dynamic power dissipation during switching is given by:**
- A) Pdyn = Cload · VDD² · f
- B) Pdyn = VDD · Istatic
- C) Pdyn = Cload · VDD / f
- D) Pdyn = VDD² / R

> **Correct Answer: A**  
> *Explanation:* Dynamic switching power is Pdyn = α · Cload · VDD² · f, where f is switching clock frequency.

**Q127. SIMD (Single Instruction, Multiple Data) execution model is characteristic of:**
- A) Traditional single-core CPU control logic
- B) Modern GPU compute architectures for vector/matrix processing
- C) Hard disk drives
- D) Static RAM chips

> **Correct Answer: B**  
> *Explanation:* GPUs use SIMD/SIMT architectures where a single instruction stream operates on thousands of data points simultaneously.

**Q128. Which component in a CPU architecture is responsible for predicting conditional jumps to avoid pipeline stalls?**
- A) Arithmetic Logic Unit (ALU)
- B) Branch Predictor and Speculative Execution Unit
- C) Level 3 Cache
- D) Memory Management Unit (MMU)

> **Correct Answer: B**  
> *Explanation:* Branch prediction speculatively predicts execution paths to keep instruction pipelines full and reduce latency.

**Q129. An optical fiber has NA = 0.20 and core index n1 = 1.46. The acceptance angle θa in air (n0 = 1.0) is:**
- A) 11.54°
- B) 23.08°
- C) 45.0°
- D) 6.0°

> **Correct Answer: A**  
> *Explanation:* θa = sin⁻¹(NA) = sin⁻¹(0.20) ≈ 11.54°.

**Q130. If the fractional index difference of a fiber is Δ = 0.01 and n1 = 1.5, the cladding index n2 is:**
- A) 1.485
- B) 1.490
- C) 1.400
- D) 1.515

> **Correct Answer: A**  
> *Explanation:* Δ = (n1 - n2) / n1 => 0.01 = (1.5 - n2) / 1.5 => 0.015 = 1.5 - n2 => n2 = 1.485.

**Q131. A Zener diode voltage regulator circuit has unregulated input Vin = 15 V, regulated Zener voltage VZ = 9 V, and series resistor Rs = 100 Ω. The total current through Rs is:**
- A) 60 mA
- B) 90 mA
- C) 150 mA
- D) 6 mA

> **Correct Answer: A**  
> *Explanation:* Current through Rs is Is = (Vin - VZ) / Rs = (15 - 9) / 100 = 6 / 100 = 0.06 A = 60 mA.

**Q132. In an optical fiber, attenuation (loss) is primarily caused by:**
- A) Rayleigh scattering and material absorption (OH⁻ absorption bands)
- B) Cosmic rays only
- C) Light travelling too fast
- D) Magnetic interference from Earth

> **Correct Answer: A**  
> *Explanation:* Fiber losses stem from intrinsic Rayleigh scattering (∝ 1/λ⁴) and absorption bands (such as water vapor OH⁻ ions).

**Q133. The standard telecommunication optical window with the lowest fiber attenuation (~0.2 dB/km) is at wavelength:**
- A) 850 nm
- B) 1310 nm
- C) 1550 nm
- D) 632 nm

> **Correct Answer: C**  
> *Explanation:* Silica fiber has its global attenuation minimum (~0.2 dB/km) in the 1550 nm (C-band) window.

**Q134. A BJT has collector current IC = 4.9 mA and base current IB = 100 μA. The emitter current IE is:**
- A) 4.8 mA
- B) 5.0 mA
- C) 5.9 mA
- D) 4.9 mA

> **Correct Answer: B**  
> *Explanation:* IE = IC + IB = 4.9 mA + 0.1 mA = 5.0 mA.

**Q135. For the transistor in Q134 (IC = 4.9 mA, IE = 5.0 mA, IB = 0.1 mA), the current gains α and β are:**
- A) α = 0.98, β = 49
- B) α = 0.49, β = 98
- C) α = 0.99, β = 100
- D) α = 0.95, β = 19

> **Correct Answer: A**  
> *Explanation:* α = IC / IE = 4.9 / 5.0 = 0.98; β = IC / IB = 4.9 / 0.1 = 49.


### 📌 Unit 3: Digital Electronics, Logic & K-Maps

**Q136. The binary equivalent of the decimal number (25)₁₀ is:**
- A) (11001)₂
- B) (11010)₂
- C) (10011)₂
- D) (11101)₂

> **Correct Answer: A**  
> *Explanation:* 25 = 16 + 8 + 1 = 11001 in binary (1·16 + 1·8 + 0·4 + 0·2 + 1·1).

**Q137. The hexadecimal equivalent of the binary number (110110111100)₂ is:**
- A) (DBC)₁₆
- B) (EBC)₁₆
- C) (DBE)₁₆
- D) (ABC)₁₆

> **Correct Answer: A**  
> *Explanation:* Group 4 bits from right: 1101 = D (13), 1011 = B (11), 1100 = C (12) => (DBC)₁₆.

**Q138. The octal equivalent of the binary number (101110010)₂ is:**
- A) (562)₈
- B) (572)₈
- C) (275)₈
- D) (652)₈

> **Correct Answer: A**  
> *Explanation:* Group 3 bits from right: 101 = 5, 110 = 6, 010 = 2 => (562)₈.

**Q139. The 1's complement of the binary number 10110100 is obtained by:**
- A) Adding 1 to the number
- B) Inverting each bit (0→1, 1→0), yielding 01001011
- C) Inverting only the MSB
- D) Shifting bits to left

> **Correct Answer: B**  
> *Explanation:* 1's complement bit inversion: 10110100 becomes 01001011.

**Q140. The 2's complement of the 8-bit binary number 00101100 is:**
- A) 11010011
- B) 11010100
- C) 11010001
- D) 00101101

> **Correct Answer: B**  
> *Explanation:* 1's complement = 11010011. Adding 1 gives 11010011 + 1 = 11010100. (Or keep bits up to first 1 from right, invert rest).

**Q141. In an 8-bit 2's complement signed number system, the decimal range of representable numbers is:**
- A) -127 to +127
- B) -128 to +127
- C) 0 to 255
- D) -256 to +255

> **Correct Answer: B**  
> *Explanation:* For n-bit 2's complement, range is -2^(n-1) to +(2^(n-1) - 1). For n=8, -128 to +127.

**Q142. A major advantage of 2's complement representation over 1's complement is that 2's complement:**
- A) Has two distinct representations for zero (+0 and -0)
- B) Has a unique representation for zero (00000000) and simplified subtraction circuitry
- C) Requires more hardware
- D) Cannot represent negative numbers

> **Correct Answer: B**  
> *Explanation:* 2's complement eliminates negative zero (-0) and allows subtraction to be performed directly with adder hardware by discarding the final end-carry.

**Q143. When subtracting binary numbers using 1's complement, if an end-around carry is generated, it must be:**
- A) Discarded
- B) Added to the Least Significant Bit (LSB)
- C) Subtracted from MSB
- D) Multiplied by 2

> **Correct Answer: B**  
> *Explanation:* In 1's complement arithmetic, an end carry indicates a positive result and must be added back to the LSB (end-around carry).

**Q144. When subtracting binary numbers using 2's complement, if a final end carry is generated:**
- A) The result is positive and the end carry is discarded
- B) The end carry is added to the LSB
- C) The result is negative and must be complemented
- D) An arithmetic overflow has definitely occurred

> **Correct Answer: A**  
> *Explanation:* In 2's complement, an end carry signifies the result is positive and the carry is simply discarded.

**Q145. The BCD (Binary Coded Decimal / 8421 code) representation of decimal number 87 is:**
- A) 1010111
- B) 1000 0111
- C) 0111 1000
- D) 1000 0101

> **Correct Answer: B**  
> *Explanation:* Encode each decimal digit into 4 bits: 8 = 1000, 7 = 0111 => 1000 0111.

**Q146. Which of the following 4-bit combinations is an INVALID BCD code?**
- A) 0101
- B) 1001
- C) 1100
- D) 0000

> **Correct Answer: C**  
> *Explanation:* Valid BCD covers 0000 (0) to 1001 (9). 1010 (10) through 1111 (15) are invalid BCD states.

**Q147. The Excess-3 code for decimal number 5 is:**
- A) 0101
- B) 1000
- C) 0011
- D) 1010

> **Correct Answer: B**  
> *Explanation:* Excess-3 = Decimal + 3 = 5 + 3 = 8 => (1000)₂ in 4-bit binary.

**Q148. Excess-3 code is known as a 'self-complementing code' because:**
- A) Its 1's complement produces the 9's complement of the corresponding decimal digit
- B) Its 2's complement is 0
- C) It uses only NAND gates
- D) It has unit Hamming distance

> **Correct Answer: A**  
> *Explanation:* Inverting all bits of an Excess-3 code word gives the Excess-3 code of the 9's complement of that decimal digit.

**Q149. Gray Code is called a 'unit distance code' because:**
- A) Every code word has exactly one '1'
- B) Consecutive code words differ in only one bit position
- C) It represents numbers in distance units
- D) It has zero parity

> **Correct Answer: B**  
> *Explanation:* Gray code ensures only one bit flips between any two adjacent numbers, preventing spurious glitches/hazards in encoders and K-maps.

**Q150. The Gray code equivalent of binary number 1011 is:**
- A) 1110
- B) 1101
- C) 0110
- D) 1001

> **Correct Answer: A**  
> *Explanation:* G3 = B3 = 1; G2 = B3 ⊕ B2 = 1 ⊕ 0 = 1; G1 = B2 ⊕ B1 = 0 ⊕ 1 = 1; G0 = B1 ⊕ B0 = 1 ⊕ 1 = 0 => 1110.

**Q151. The binary equivalent of Gray code 1101 is:**
- A) 1001
- B) 1000
- C) 1010
- D) 1111

> **Correct Answer: A**  
> *Explanation:* B3 = G3 = 1; B2 = B3 ⊕ G2 = 1 ⊕ 1 = 0; B1 = B2 ⊕ G1 = 0 ⊕ 0 = 0; B0 = B1 ⊕ G0 = 0 ⊕ 1 = 1 => 1001.

**Q152. Which of the following pairs of logic gates are called Universal Logic Gates?**
- A) AND and OR
- B) NAND and NOR
- C) XOR and XNOR
- D) NOT and AND

> **Correct Answer: B**  
> *Explanation:* NAND and NOR can independently implement any arbitrary Boolean function (AND, OR, NOT, XOR, XNOR).

**Q153. The minimum number of 2-input NAND gates required to implement a 2-input XOR gate is:**
- A) 3
- B) 4
- C) 5
- D) 2

> **Correct Answer: B**  
> *Explanation:* XOR gate requires exactly 4 NAND gates. (XNOR requires 5 NAND gates).

**Q154. The minimum number of 2-input NOR gates required to implement a 2-input XOR gate is:**
- A) 4
- B) 5
- C) 3
- D) 2

> **Correct Answer: B**  
> *Explanation:* XOR gate requires 5 NOR gates. (XNOR requires 4 NOR gates).

**Q155. The minimum number of 2-input NAND gates required to implement a 2-input AND gate is:**
- A) 1
- B) 2
- C) 3
- D) 4

> **Correct Answer: B**  
> *Explanation:* NAND followed by NAND-as-inverter gives (A·B)'' = A·B, requiring 2 NAND gates.

**Q156. The minimum number of 2-input NAND gates required to implement a 2-input OR gate is:**
- A) 2
- B) 3
- C) 4
- D) 1

> **Correct Answer: B**  
> *Explanation:* By De Morgan's, A + B = (A' · B')'. Invert A (1 NAND), invert B (1 NAND), then NAND together (1 NAND) = 3 NAND gates.

**Q157. According to De Morgan's First Law, (A + B)' is equivalent to:**
- A) A' + B'
- B) A' · B'
- C) A · B
- D) (A · B)'

> **Correct Answer: B**  
> *Explanation:* De Morgan's Theorem 1: Complement of a sum equals product of complements: (A + B)' = A' · B'.

**Q158. According to De Morgan's Second Law, (A · B)' is equivalent to:**
- A) A' · B'
- B) A' + B'
- C) A + B
- D) (A + B)'

> **Correct Answer: B**  
> *Explanation:* De Morgan's Theorem 2: Complement of a product equals sum of complements: (A · B)' = A' + B'.

**Q159. The Boolean expression A + A'B simplifies to:**
- A) A
- B) A + B
- C) A · B
- D) B

> **Correct Answer: B**  
> *Explanation:* By Distributive Law: A + A'B = (A + A')(A + B) = 1 · (A + B) = A + B.

**Q160. The Boolean expression A(A' + B) simplifies to:**
- A) A + B
- B) A · B
- C) A'
- D) 0

> **Correct Answer: B**  
> *Explanation:* A · A' + A · B = 0 + A · B = A · B.

**Q161. According to the Consensus Theorem, the expression AB + A'C + BC simplifies to:**
- A) AB + A'C
- B) BC
- C) AB + BC
- D) A'C + BC

> **Correct Answer: A**  
> *Explanation:* Consensus theorem: BC is the redundant consensus term of AB and A'C, so AB + A'C + BC = AB + A'C.

**Q162. The dual of the Boolean expression A + B·C = (A + B)(A + C) is obtained by:**
- A) Replacing + with ·, · with +, and swapping 0 and 1, yielding A · (B + C) = (A · B) + (A · C)
- B) Complementing every literal
- C) Inverting only the LHS
- D) Multiplying by 2

> **Correct Answer: A**  
> *Explanation:* Duality principle: Swap AND (·) and OR (+), and swap 0 and 1 without complementing literals.

**Q163. In a Karnaugh Map (K-Map), adjacent cells are arranged according to:**
- A) Natural binary sequence (00, 01, 10, 11)
- B) Gray code sequence (00, 01, 11, 10)
- C) BCD code
- D) Excess-3 code

> **Correct Answer: B**  
> *Explanation:* K-Map columns and rows use Gray code (00, 01, 11, 10) so adjacent physical cells differ by exactly one bit.

**Q164. A 4-variable K-Map contains a total of ________ cells.**
- A) 4
- B) 8
- C) 16
- D) 32

> **Correct Answer: C**  
> *Explanation:* Number of cells for n variables is 2ⁿ. For n=4, 2⁴ = 16 cells.

**Q165. In a K-Map, valid cell groupings must contain a number of 1s equal to:**
- A) Any integer (1, 2, 3, 4, 5...)
- B) A power of 2 (1, 2, 4, 8, 16...)
- C) Multiples of 3
- D) Odd numbers only

> **Correct Answer: B**  
> *Explanation:* Valid groups must be powers of 2 (2^k) in rectangular or square shapes.

**Q166. In a 4-variable K-map for F(A,B,C,D), grouping the 4 corner cells (m0, m2, m8, m10) simplifies to:**
- A) A'C'
- B) B'D'
- C) BD
- D) A'D'

> **Correct Answer: B**  
> *Explanation:* m0(0000), m2(0010), m8(1000), m10(1010). Row A varies (0,1), B is constant 0 (B'). Column C varies (0,1), D is constant 0 (D') => B'D'.

**Q167. A 'Don't Care' condition (d or X) in a K-Map:**
- A) Must always be included in every group
- B) Must never be grouped with 1s
- C) Can be treated as 1 if it helps form a larger group, or treated as 0 otherwise
- D) Inverts the output to 0

> **Correct Answer: C**  
> *Explanation:* Don't Care terms provide flexibility: include as 1 only if they enlarge a group to minimize literals; ignore as 0 otherwise.

**Q168. An Essential Prime Implicant (EPI) is a prime implicant that:**
- A) Covers at least one minterm '1' that is not covered by any other prime implicant
- B) Covers all minterms
- C) Contains don't care conditions only
- D) Can be safely deleted without affecting logic

> **Correct Answer: A**  
> *Explanation:* EPI must be included in the minimal SOP expression because it uniquely covers at least one 1-cell.

**Q169. The canonical Sum of Products (SOP) form of a logic function represents the logic using:**
- A) Maxterms (Π M)
- B) Minterms (Σ m)
- C) NOR gates only
- D) XOR gates only

> **Correct Answer: B**  
> *Explanation:* Canonical SOP is a sum (OR) of fundamental product terms (minterms Σ m).

**Q170. The canonical Product of Sums (POS) form of a logic function represents the logic using:**
- A) Minterms (Σ m)
- B) Maxterms (Π M)
- C) NAND gates only
- D) XNOR gates only

> **Correct Answer: B**  
> *Explanation:* Canonical POS is a product (AND) of fundamental sum terms (maxterms Π M).

**Q171. For a 3-variable function F(A,B,C), the minterm m5 corresponds to:**
- A) A' B C'
- B) A B' C
- C) A B C'
- D) A' B' C

> **Correct Answer: B**  
> *Explanation:* 5 in binary is 101 => A=1, B=0, C=1 => product term A B' C.

**Q172. For a 3-variable function F(A,B,C), the maxterm M5 corresponds to:**
- A) A' + B + C'
- B) A + B' + C
- C) A' + B' + C
- D) A + B + C'

> **Correct Answer: A**  
> *Explanation:* For maxterms, 0 is uncomplemented and 1 is complemented. 5 = 101 => A' + B + C'.

**Q173. The output of a 2-input XOR gate is Logic 1 if and only if:**
- A) Both inputs are 1
- B) Both inputs are 0
- C) The two inputs are different (one is 0, other is 1)
- D) Both inputs are identical

> **Correct Answer: C**  
> *Explanation:* XOR (exclusive OR) outputs 1 when inputs are unequal (odd parity detector: 0⊕1=1, 1⊕0=1).

**Q174. The output of a 2-input XNOR gate (Equivalence Gate) is Logic 1 when:**
- A) The two inputs are identical (both 0 or both 1)
- B) Inputs are different
- C) Input A is 1 only
- D) Input B is 1 only

> **Correct Answer: A**  
> *Explanation:* XNOR outputs 1 when inputs are equal (0⊙0=1, 1⊙1=1), acting as a coincidence detector.

**Q175. The logic expression (A ⊕ B) ⊕ B simplifies to:**
- A) A
- B) B
- C) 1
- D) 0

> **Correct Answer: A**  
> *Explanation:* By associativity and property B ⊕ B = 0: (A ⊕ B) ⊕ B = A ⊕ (B ⊕ B) = A ⊕ 0 = A.

**Q176. The Boolean identity A ⊕ 1 is equal to:**
- A) A
- B) A' (NOT A)
- C) 1
- D) 0

> **Correct Answer: B**  
> *Explanation:* A ⊕ 1 = A·1' + A'·1 = 0 + A' = A'.

**Q177. The Boolean identity A ⊕ 0 is equal to:**
- A) A
- B) A'
- C) 0
- D) 1

> **Correct Answer: A**  
> *Explanation:* A ⊕ 0 = A·0' + A'·0 = A·1 + 0 = A.

**Q178. In a 3-variable K-map for F(A,B,C) = Σ m(0, 1, 2, 3), the minimal simplified expression is:**
- A) A'
- B) B'
- C) C'
- D) A

> **Correct Answer: A**  
> *Explanation:* m0, m1, m2, m3 occupy the entire top row where A=0 => A'.

**Q179. In a 3-variable K-map for F(A,B,C) = Σ m(1, 3, 5, 7), the minimal simplified expression is:**
- A) A
- B) B
- C) C
- D) C'

> **Correct Answer: C**  
> *Explanation:* All four minterms have C=1 across all combinations of A and B => C.

**Q180. In a 4-variable K-map, grouping an entire column of 4 cells eliminates ________ variables, leaving a product term with ________ variables.**
- A) 1; 3
- B) 2; 2
- C) 3; 1
- D) 4; 0

> **Correct Answer: B**  
> *Explanation:* A group of 4 cells (2²) eliminates log2(4) = 2 variables, leaving 4 - 2 = 2 variables.

**Q181. In a 4-variable K-map, grouping an entire block of 8 cells eliminates ________ variables, leaving a single literal with ________ variable(s).**
- A) 3; 1
- B) 2; 2
- C) 1; 3
- D) 4; 0

> **Correct Answer: A**  
> *Explanation:* An octet (8 cells = 2³) eliminates log2(8) = 3 variables, reducing to 4 - 3 = 1 variable.

**Q182. The 9's complement of decimal number 438 is:**
- A) 561
- B) 562
- C) 651
- D) 560

> **Correct Answer: A**  
> *Explanation:* Subtract each digit from 9: 999 - 438 = 561.

**Q183. The 10's complement of decimal number 438 is:**
- A) 561
- B) 562
- C) 560
- D) 652

> **Correct Answer: B**  
> *Explanation:* 10's complement = 9's complement + 1 = 561 + 1 = 562.

**Q184. Convert binary (11010.11)₂ to decimal:**
- A) 26.75
- B) 26.50
- C) 24.75
- D) 26.25

> **Correct Answer: A**  
> *Explanation:* 16 + 8 + 0 + 2 + 0 = 26; Fractional part = 1·2⁻¹ + 1·2⁻² = 0.5 + 0.25 = 0.75 => 26.75.

**Q185. Convert hexadecimal (2F.4)₁₆ to decimal:**
- A) 47.25
- B) 47.50
- C) 31.25
- D) 45.25

> **Correct Answer: A**  
> *Explanation:* 2·16¹ + 15·16⁰ = 32 + 15 = 47; Fractional part = 4 / 16 = 0.25 => 47.25.

**Q186. Add the binary numbers 1011 and 1101. The result is:**
- A) 11000
- B) 10110
- C) 11100
- D) 10000

> **Correct Answer: A**  
> *Explanation:* 1011 (11) + 1101 (13) = 24 => (11000)₂.

**Q187. In a digital system, an arithmetic overflow when adding two signed numbers occurs if:**
- A) Adding two positive numbers yields a negative result, or adding two negative numbers yields a positive result
- B) An end carry is generated
- C) Both numbers are zero
- D) The result is positive

> **Correct Answer: A**  
> *Explanation:* Overflow occurs in signed addition when adding two operands of the same sign produces a result of opposite sign (Cin ⊕ Cout at MSB = 1).

**Q188. The Boolean expression (A + B)(A + B') simplifies to:**
- A) A
- B) B
- C) A + B
- D) 0

> **Correct Answer: A**  
> *Explanation:* A·A + A·B' + B·A + B·B' = A + A·B' + A·B + 0 = A(1 + B' + B) = A·1 = A.

**Q189. The Boolean expression AB + AB' + A'B simplifies to:**
- A) A + B
- B) A · B
- C) A' + B'
- D) 1

> **Correct Answer: A**  
> *Explanation:* A(B + B') + A'B = A·1 + A'B = A + A'B = A + B.

**Q190. The minimum number of 2-input NOR gates required to implement a NOT gate (inverter) is:**
- A) 1
- B) 2
- C) 3
- D) 4

> **Correct Answer: A**  
> *Explanation:* Tie both inputs together: (A + A)' = A', requiring 1 NOR gate.

**Q191. The minimum number of 2-input NAND gates required to implement a NOT gate (inverter) is:**
- A) 1
- B) 2
- C) 3
- D) 4

> **Correct Answer: A**  
> *Explanation:* Tie both inputs together: (A · A)' = A', requiring 1 NAND gate.

**Q192. The minimum number of 2-input NOR gates required to implement an OR gate is:**
- A) 1
- B) 2
- C) 3
- D) 4

> **Correct Answer: B**  
> *Explanation:* NOR gate gives (A + B)'. Followed by a NOR inverter gives ((A + B)')' = A + B (2 NOR gates).

**Q193. The minimum number of 2-input NOR gates required to implement an AND gate is:**
- A) 2
- B) 3
- C) 4
- D) 5

> **Correct Answer: B**  
> *Explanation:* By De Morgan's, A · B = (A' + B')'. Invert A (1 NOR), invert B (1 NOR), and NOR them together (1 NOR) = 3 NOR gates.

**Q194. The Gray code sequence for 3-bit numbers starting from 0 to 7 is:**
- A) 000, 001, 011, 010, 110, 111, 101, 100
- B) 000, 001, 010, 011, 100, 101, 110, 111
- C) 000, 010, 001, 011, 100, 110, 101, 111
- D) 111, 110, 101, 100, 011, 010, 001, 000

> **Correct Answer: A**  
> *Explanation:* Standard 3-bit Gray code sequence is 000, 001, 011, 010, 110, 111, 101, 100.

**Q195. In a 4-variable K-map, if all 16 cells contain '1', the output simplifies to:**
- A) 1 (logic high)
- B) 0
- C) ABCD
- D) A + B + C + D

> **Correct Answer: A**  
> *Explanation:* A group of 16 cells (2⁴) in a 4-variable map eliminates all 4 variables, yielding constant 1.

**Q196. Simplify the Boolean function F(A,B,C) = Σ m(0, 2, 4, 6):**
- A) C'
- B) B'
- C) A'
- D) C

> **Correct Answer: A**  
> *Explanation:* m0(000), m2(010), m4(100), m6(110). A and B vary across all states, while C is constant 0 => C'.

**Q197. Simplify the Boolean function F(A,B,C) = Σ m(4, 5, 6, 7):**
- A) A
- B) B
- C) C
- D) A'

> **Correct Answer: A**  
> *Explanation:* m4, m5, m6, m7 span the entire bottom row where A=1 => A.

**Q198. In a Half Adder circuit, the Sum (S) and Carry (C) outputs for inputs A and B are:**
- A) S = A ⊕ B, C = A · B
- B) S = A · B, C = A ⊕ B
- C) S = A + B, C = A' · B
- D) S = (A ⊕ B)', C = A + B

> **Correct Answer: A**  
> *Explanation:* Half Adder performs modulo-2 addition: Sum = A ⊕ B and Carry = A · B.

**Q199. In a Full Adder circuit with inputs A, B, and Cin, the Sum (S) is given by:**
- A) S = A ⊕ B ⊕ Cin
- B) S = A · B · Cin
- C) S = A + B + Cin
- D) S = (A ⊕ B) · Cin

> **Correct Answer: A**  
> *Explanation:* Full Adder 3-input odd parity sum is S = A ⊕ B ⊕ Cin.

**Q200. The total number of minterms in a Boolean function of n variables is:**
- A) 2ⁿ
- B) 2^(2ⁿ)
- C) n²
- D) 2n

> **Correct Answer: A**  
> *Explanation:* An n-variable Boolean space contains exactly 2ⁿ distinct minterms (and 2ⁿ maxterms). The total number of distinct switching functions is 2^(2ⁿ).
