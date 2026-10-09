# 🎯 PHY175 (PHYSICS FOR COMPUTER SCIENCE) - MIDTERM MASTER STUDY CRASH COURSE
**Target**: 30 / 30 Marks | **Coverage**: Unit 1, Unit 2, Unit 3 | **Format**: 30 MCQs (1 Mark each)
**Study Plan**: 3 to 4 Hours Zero-to-Hero High-Yield Revision Blueprint
**Reference Material**: Class PPTs (Lec 1-18, Optical Fiber, BJT, CMOS, Practice Sheets 1-2, Unit 3 Tutorials 1-3)

---

## ⏱️ 3 TO 4 HOUR MASTER CRASH-COURSE STUDY TIMELINE

| Time Window | Focus Area | High-Yield Key Targets |
| :--- | :--- | :--- |
| **Hour 1 (0:00 - 1:00)** | **UNIT 1: Solid State & Semiconductor Physics** | Drude-Lorentz Free Electron Theory, Drift vs Diffusion, Energy Bands, Intrinsic/Extrinsic Semis, Fermi Level ($E_F$), Hall Effect ($V_H, R_H$). |
| **Hour 2 (1:00 - 2:00)** | **UNIT 2: Electrical Laws, Devices & Communications** | KCL/KVL, PN Diode (Forward/Reverse, Zener vs Avalanche), BJT ($\alpha, \beta$, active/cutoff/sat), CMOS Inverter, Solar Cell ($V_{oc}, I_{sc}, FF$), Optical Fiber ($NA, \theta_a$, TIR, V-number), CPU vs GPU. |
| **Hour 3 (2:00 - 3:00)** | **UNIT 3: Digital Logic, Number Systems & K-Maps** | Base conversions (Dec/Bin/Oct/Hex), 1's/2's Complements, Signed subtraction, BCD, Excess-3, Gray code, Logic gates (Universal NAND/NOR counts), Boolean laws, K-Map grouping & minimization. |
| **Final 45 Mins (3:00 - 3:45)** | **Full Midterm Mock Exam & Rapid Review** | Solve the **30-MCQ Midterm Mock Exam** under 30-minute exam conditions, review answer keys, check formula sheet. |

---

# 📚 UNIT 1: SOLID STATE PHYSICS & SEMICONDUCTORS

### 1. Free Electron Theory
* **Classical Free Electron Theory (Drude–Lorentz, 1900)**:
  * Metals treated as positive ion cores immersed in a "gas" of valence electrons.
  * Electrons move randomly, colliding elastically with lattice ions.
  * **Drift Velocity ($v_d$)**: Net average velocity acquired by electrons under an electric field $E$:
    $$v_d = \mu E = \frac{e E \tau}{m}$$
    where $\mu = \frac{e\tau}{m}$ is electron mobility, $\tau$ is mean relaxation time.
  * **Ohm's Law (Microscopic Form)**: Current density $J = \sigma E = n e v_d = \frac{n e^2 \tau}{m} E \implies \sigma = \frac{n e^2 \tau}{m}$.
  * **Successes**: Explains Ohm's law, high electrical/thermal conductivity, **Wiedemann–Franz Law** ($\frac{K}{\sigma T} = \text{constant} = L$, Lorentz number).
  * **Failures**: Could not explain specific heat of electrons ($\text{exp} \ll \frac{3}{2}R$), temperature dependence of resistivity ($\rho \propto T$ observed vs $\sqrt{T}$ classical), magnetic susceptibility, or why some solids are insulators/semiconductors.
* **Quantum Free Electron Theory (Sommerfeld, 1928)**: Applied Pauli exclusion principle and Fermi-Dirac statistics.
* **Zone / Band Theory (Bloch, 1928)**: Electrons move in a periodic crystal potential.

---

### 2. Drift Current vs Diffusion Current
| Parameter | Drift Current ($J_{\text{drift}}$) | Diffusion Current ($J_{\text{diff}}$) |
| :--- | :--- | :--- |
| **Cause / Driving Force** | Applied External Electric Field ($E$) | Carrier Concentration Gradient ($dn/dx$ or $dp/dx$) |
| **Electrons Formula** | $J_{n,\text{drift}} = q n \mu_n E$ | $J_{n,\text{diff}} = q D_n \frac{dn}{dx}$ |
| **Holes Formula** | $J_{p,\text{drift}} = q p \mu_p E$ | $J_{p,\text{diff}} = -q D_p \frac{dp}{dx}$ (Note negative sign!) |
| **Total Current Density** | $J_{\text{total}} = (q n \mu_n + q p \mu_p)E + q D_n \frac{dn}{dx} - q D_p \frac{dp}{dx}$ |
| **Einstein's Relation** | $$\frac{D_n}{\mu_n} = \frac{D_p}{\mu_p} = \frac{k_B T}{q} = V_T \approx 26\text{ mV at } 300\text{ K}$$ |

---

### 3. Energy Bands & Classification of Solids
* **Valence Band (VB)**: Highest occupied energy band containing valence electrons; completely filled at $0\text{ K}$.
* **Conduction Band (CB)**: Lowest unoccupied band; completely empty at $0\text{ K}$.
* **Forbidden Energy Gap ($E_g = E_c - E_v$)**:
  * **Conductors (Metals)**: Conduction and valence bands **overlap** ($E_g = 0$) or partially filled. Positive Temperature Coefficient of Resistance ($\alpha > 0$, resistance increases with $T$).
  * **Semiconductors**: Small forbidden gap ($E_g \approx 1\text{ eV}$; $\text{Si} = 1.1\text{ eV}$, $\text{Ge} = 0.67\text{ eV}$, $\text{GaAs} = 1.42\text{ eV}$). At $0\text{ K}$, behaves as an insulator. Negative Temperature Coefficient ($\alpha < 0$, conductivity increases exponentially with $T$).
  * **Insulators**: Very wide forbidden gap ($E_g > 3\text{ to }5\text{ eV}$, e.g. Diamond $\approx 5.4\text{ eV}$).

---

### 4. Intrinsic vs Extrinsic Semiconductors
* **Intrinsic (Pure)**:
  * Pure Si or Ge (Group IV, 4 valence electrons, covalent bonds).
  * Thermal excitation creates equal numbers of electrons and holes: $n = p = n_i$.
  * **Mass Action Law**: $n \cdot p = n_i^2$ (Valid for both intrinsic and extrinsic semiconductors!).
  * **Why Si is preferred over Ge**:
    1. Larger bandgap ($1.1\text{ eV}$ vs $0.67\text{ eV}$) $\rightarrow$ Much lower reverse leakage current.
    2. Higher operating temperature ($150^\circ\text{C}-200^\circ\text{C}$ for Si vs $75^\circ\text{C}-85^\circ\text{C}$ for Ge).
    3. Easy formation of stable native insulating layer ($\text{SiO}_2$).
    4. Higher breakdown voltage (PIV).
* **Extrinsic (Doped)**:
  * **N-Type**: Doped with **Pentavalent** impurity (Donors: P, As, Sb - Group V).
    * Majority: Electrons ($n \approx N_D$), Minority: Holes ($p = \frac{n_i^2}{N_D}$).
    * Donor level $E_d$ lies just below the conduction band ($0.05\text{ eV}$ below $E_c$ in Si, $0.01\text{ eV}$ in Ge).
    * Electrically **neutral** overall.
  * **P-Type**: Doped with **Trivalent** impurity (Acceptors: B, Al, Ga, In - Group III).
    * Majority: Holes ($p \approx N_A$), Minority: Electrons ($n = \frac{n_i^2}{N_A}$).
    * Acceptor level $E_a$ lies just above the valence band ($0.05\text{ eV}$ above $E_v$ in Si, $0.01\text{ eV}$ in Ge).
    * Electrically **neutral** overall.

---

### 5. Fermi Level ($E_F$) & Fermi-Dirac Distribution
* **Fermi-Dirac Distribution Function**:
  $$f(E) = \frac{1}{1 + e^{(E - E_F)/k_B T}}$$
  * Represents the probability of an energy state $E$ being occupied by an electron at temperature $T$.
  * At $T = 0\text{ K}$: $f(E) = 1$ for $E < E_F$, and $f(E) = 0$ for $E > E_F$.
  * At any $T > 0\text{ K}$: For $E = E_F \implies f(E_F) = \frac{1}{1 + e^0} = \frac{1}{2} = 0.5$ (**50% probability**).
* **Position of Fermi Level**:
  * **Intrinsic**: Exactly in the middle of bandgap ($E_F = \frac{E_c + E_v}{2}$).
  * **N-type**: Shifts **upward** towards the conduction band ($E_F > E_i$).
  * **P-type**: Shifts **downward** towards the valence band ($E_F < E_i$).
  * As temperature increases to very high levels, extrinsic semiconductors become intrinsic, and $E_F$ shifts back toward the center of the bandgap.

---

### 6. Hall Effect (Crucial for Numericals & MCQs!)
* **Definition**: When a magnetic field $B$ is applied perpendicular to a current $I$ flowing through a conductor/semiconductor, a transverse voltage (Hall Voltage $V_H$) develops across the opposite sides.
* **Lorentz Force Equilibrium**: $q E_H = q v_d B \implies E_H = v_d B$.
* **Hall Coefficient ($R_H$)**:
  $$R_H = \frac{1}{n q} = \begin{cases} -\frac{1}{n e} < 0 & \text{(N-type / Electrons)} \\ +\frac{1}{p e} > 0 & \text{(P-type / Holes)} \end{cases}$$
* **Hall Voltage ($V_H$)**:
  $$V_H = E_H \cdot w = \frac{B I}{n q t} = \frac{R_H B I}{t}$$
  where $t$ is thickness of sample along the direction of magnetic field $B$, $w$ is width.
* **Hall Mobility ($\mu_H$)**: $\mu = \sigma |R_H| = \frac{\sigma}{n e}$.
* **Key Applications**:
  1. Determine semiconductor type (Sign of $R_H$: Negative $\rightarrow$ N-type, Positive $\rightarrow$ P-type).
  2. Measure carrier concentration ($n = \frac{1}{e |R_H|}$).
  3. Measure carrier mobility ($\mu = \sigma R_H$).
  4. Measure unknown magnetic field ($B$).

---

# 📚 UNIT 2: ELECTRICAL LAWS, DEVICES, COMMUNICATIONS & COMPUTING

### 1. Basic Circuit Laws
* **Current & Charge**: $i(t) = \frac{dq}{dt} \iff q(t) = \int i(t) dt$.
* **Power & Energy**: $P = V \cdot I = I^2 R = \frac{V^2}{R}$ (Watts). Energy $E = \int P dt = P \times t$ (Joules or kWh, $1\text{ kWh} = 3.6 \times 10^6\text{ J}$).
  * **Passive Sign Convention**: Current enters $(+)$ terminal $\implies$ absorbing power ($P > 0$). Current enters $(-)$ terminal $\implies$ delivering power ($P < 0$).
* **Ohm's Law**: $V = IR$. Series: $R_{eq} = R_1 + R_2$. Parallel: $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$.
* **Kirchhoff's Current Law (KCL)**: $\sum I_{\text{entering}} = \sum I_{\text{leaving}}$ at any node. (Based on **Conservation of Charge**).
* **Kirchhoff's Voltage Law (KVL)**: $\sum V_{\text{loop}} = 0$ in any closed loop. (Based on **Conservation of Energy**).

---

### 2. PN Junction Diode & Breakdown Mechanisms
* **Barrier Potential**: Silicon $\approx 0.7\text{ V}$, Germanium $\approx 0.3\text{ V}$ at room temperature.
* **Forward Bias**: P to $(+)$, N to $(-)$. Depletion width narrows, barrier potential reduces ($V_{bi} - V_F$), forward current rises exponentially: $I = I_0(e^{V/\eta V_T} - 1)$.
* **Reverse Bias**: P to $(-)$, N to $(+)$. Depletion width widens, only tiny reverse saturation current $I_0$ flows (doubles every $10^\circ\text{C}$ rise).
* **Breakdown Mechanisms Comparison**:
  | Feature | Zener Breakdown | Avalanche Breakdown |
  | :--- | :--- | :--- |
  | **Doping Level** | **Heavily Doped** | **Lightly Doped** |
  | **Depletion Width** | Very narrow ($< 10\text{ nm}$) | Relatively wide |
  | **Mechanism** | Strong electric field directly ruptures covalent bonds (Direct field emission / Tunneling) | Thermally generated carriers accelerated by field knock out electrons by collision (**Impact Ionization**) |
  | **Breakdown Voltage** | **Low** ($< 6\text{ V}$) | **High** ($> 6\text{ V}$) |
  | **Temperature Coeff.** | **Negative** ($V_Z$ decreases with $T$) | **Positive** ($V_A$ increases with $T$) |

---

### 3. Bipolar Junction Transistor (BJT)
* **Structure & Sizing**:
  * **Emitter (E)**: Heavily doped, medium physical size (Emits carriers).
  * **Base (B)**: Lightly doped, very thin ($< 1\,\mu\text{m}$) (Passes carriers).
  * **Collector (C)**: Moderately doped, **largest physical size** (Dissipates heat).
* **Basic Current Relation**: $I_E = I_B + I_C$ (Since $I_B \ll I_C$, $I_E \approx I_C$).
* **Operating Regions**:
  | Operating Region | E-B Junction | C-B Junction | Circuit Application |
  | :--- | :--- | :--- | :--- |
  | **Active** | Forward Biased | Reverse Biased | **Linear Amplifier** |
  | **Cut-off** | Reverse Biased | Reverse Biased | **OFF Switch** ($I_C \approx 0$) |
  | **Saturation** | Forward Biased | Forward Biased | **ON Switch** ($V_{CE} \approx 0.2\text{ V}$) |
  | **Inverted** | Reverse Biased | Forward Biased | Attenuator (Rarely used) |
* **Current Gain Parameters**:
  * Common Base (CB): $\alpha = \frac{I_C}{I_E}$ ($0.95 \le \alpha < 1$).
  * Common Emitter (CE): $\beta = \frac{I_C}{I_B}$ ($20 \le \beta \le 500$).
  * Relations:
    $$\beta = \frac{\alpha}{1 - \alpha}, \quad \alpha = \frac{\beta}{1 + \beta}, \quad \gamma = 1 + \beta = \frac{I_E}{I_B}$$

---

### 4. CMOS (Complementary Metal-Oxide-Semiconductor)
* Built using a complementary pair: **PMOS** (Pull-Up Network to $V_{DD}$) and **NMOS** (Pull-Down Network to Ground).
* **CMOS Inverter Working**:
  * Input = HIGH ($1$ / $V_{DD}$): NMOS is **ON**, PMOS is **OFF** $\rightarrow$ Output pulled to **LOW ($0$ / GND)**.
  * Input = LOW ($0$ / GND): PMOS is **ON**, NMOS is **OFF** $\rightarrow$ Output pulled to **HIGH ($1$ / $V_{DD}$)**.
* **Key Advantage**: **Zero static power dissipation** (one transistor is always OFF). Power is consumed only during dynamic switching transitions.

---

### 5. Solar Cell (Photovoltaic Device)
* Converts optical photons directly into electricity via the **Photovoltaic Effect**.
* **Three Basic Processes**:
  1. **Generation** of electron-hole pairs by incident light ($h\nu \ge E_g$).
  2. **Separation** of pairs by the built-in electric field in the depletion layer (electrons swept to n-side, holes to p-side).
  3. **Collection** of carriers at metallic contacts.
* **Key Parameters**:
  * **$V_{oc}$ (Open Circuit Voltage)**: Voltage when $I = 0$.
  * **$I_{sc}$ (Short Circuit Current)**: Current when $V = 0$ (directly $\propto$ light intensity).
  * **Fill Factor ($FF$)**: $FF = \frac{V_{mp} \cdot I_{mp}}{V_{oc} \cdot I_{sc}} < 1$ (typical $0.7 - 0.85$).
  * **Efficiency ($\eta$)**: $\eta = \frac{P_{max}}{P_{in}} \times 100\% = \frac{V_{oc} \cdot I_{sc} \cdot FF}{P_{in}} \times 100\%$.
  * Operates in the **4th quadrant** of V-I characteristics (delivers power).

---

### 6. Optical Fiber Communication (High-Yield Formulas!)
* **Structure**: Core ($n_1$) surrounded by Cladding ($n_2$), with $n_1 > n_2$.
* **Principle**: **Total Internal Reflection (TIR)**.
  * Conditions: (1) Light travels from denser to rarer medium ($n_1 > n_2$), (2) Angle of incidence $\theta_i > \text{Critical Angle } \theta_c$.
* **Critical Formulas**:
  * **Critical Angle**: $\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right)$.
  * **Acceptance Angle ($\theta_a$)**: Maximum launch angle in air ($n_0 = 1$):
    $$\sin \theta_a = \sqrt{n_1^2 - n_2^2} \implies \theta_a = \sin^{-1}\left(\sqrt{n_1^2 - n_2^2}\right)$$
  * **Numerical Aperture ($NA$)**:
    $$NA = \sin \theta_a = \sqrt{n_1^2 - n_2^2} \approx n_1 \sqrt{2\Delta}$$
    where $\Delta = \frac{n_1 - n_2}{n_1}$ is fractional refractive index difference.
  * **V-Number (Normalized Frequency)**:
    $$V = \frac{2\pi a}{\lambda} NA = \frac{2\pi a}{\lambda}\sqrt{n_1^2 - n_2^2}$$
    where $a$ is core radius, $\lambda$ is wavelength.
  * **Number of Modes ($M$)**:
    * Step Index Multimode: $M \approx \frac{V^2}{2}$
    * Graded Index (GRIN) Multimode: $M \approx \frac{V^2}{4}$
    * Single Mode Fiber (SMF) cut-off condition: $V \le 2.405$.

---

### 7. Computer Architecture: CPU vs GPU
| Feature | CPU (Central Processing Unit) | GPU (Graphics Processing Unit) |
| :--- | :--- | :--- |
| **Optimization** | **Low Latency** | **High Throughput** |
| **Cores** | Few powerful, complex cores (4–16) | Thousands of small, efficient ALU cores |
| **Architecture** | Heavy cache, branch prediction, Out-of-Order execution | SIMD (Single Instruction Multiple Data), massive parallel hardware |
| **Best Suited For** | Sequential tasks, operating systems, complex logic | Parallel tasks, matrix math, graphics, AI/ML training & inference |

---

# 📚 UNIT 3: DIGITAL ELECTRONICS & LOGIC DESIGN

### 1. Number Systems & Interconversions
* **Bases**: Binary ($r=2$), Octal ($r=8$), Decimal ($r=10$), Hexadecimal ($r=16$: $A=10, B=11, C=12, D=13, E=14, F=15$).
* **Conversion Rules**:
  * Decimal $\rightarrow$ Base $r$: Divide integer by $r$ (bottom-up remainders), multiply fraction by $r$ (top-down integers).
  * Base $r$ $\rightarrow$ Decimal: Sum of positional weights $\sum d_i \cdot r^i$.
  * Binary $\leftrightarrow$ Octal: Group bits in **3s** ($2^3 = 8$).
  * Binary $\leftrightarrow$ Hexadecimal: Group bits in **4s** ($2^4 = 16$).
  * Octal $\leftrightarrow$ Hexadecimal: Go via binary ($Octal \rightarrow \text{3-bit Binary} \rightarrow \text{4-bit Hex}$).

---

### 2. Complements & Binary Arithmetic
* **1's Complement**: Invert all bits ($0 \leftrightarrow 1$).
* **2's Complement**: $\text{1's Complement} + 1$.
  * *Fast Trick*: Start from LSB (rightmost bit). Keep all bits unchanged up to and including the first '1'. Invert all remaining bits to the left!
* **Signed Number Representations ($n$ bits)**:
  | Representation | Positive Range | Negative Range | Zero Representation |
  | :--- | :--- | :--- | :--- |
  | **Sign-Magnitude** | $0$ to $+(2^{n-1}-1)$ | $-(2^{n-1}-1)$ to $-0$ | Dual ($+0 = 0000, -0 = 1000$) |
  | **1's Complement** | $0$ to $+(2^{n-1}-1)$ | $-(2^{n-1}-1)$ to $-0$ | Dual ($+0 = 0000, -0 = 1111$) |
  | **2's Complement** | $0$ to $+(2^{n-1}-1)$ | **$-2^{n-1}$ to $-1$** | **Unique** ($0000$) |
  *(For 8-bit signed 2's complement: Range is $-128$ to $+127$.)*
* **Subtraction using Complements**:
  * **1's Complement ($A - B = A + \text{1's comp}(B)$)**:
    * Carry generated $\implies$ Result is **Positive**, **ADD carry to LSB** (End-around carry).
    * No carry $\implies$ Result is **Negative**, take 1's complement of result with negative sign.
  * **2's Complement ($A - B = A + \text{2's comp}(B)$)**:
    * Carry generated $\implies$ Result is **Positive**, **DISCARD the carry**.
    * No carry $\implies$ Result is **Negative**, take 2's complement of result with negative sign.

---

### 3. Binary Codes
* **BCD (8421 Code)**: Each decimal digit ($0-9$) represented by 4 binary bits ($0000 - 1001$).
  * **Invalid BCD codes**: $1010$ (10) through $1111$ (15) (6 invalid combinations).
* **Excess-3 (XS-3) Code**: $\text{BCD} + 3$ ($0011_2$).
  * **Self-Complementing Code**: 1's complement of XS-3 code = XS-3 code of 9's complement of the decimal digit!
* **Gray Code (Reflected / Unit Distance Code)**: Only **1 bit changes** between successive numbers.
  * **Binary to Gray**: $G_{MSB} = B_{MSB}$, and $G_i = B_{i+1} \oplus B_i$.
  * **Gray to Binary**: $B_{MSB} = G_{MSB}$, and $B_i = B_{i+1} \oplus G_i$.

---

### 4. Logic Gates & Universal Gate Implementation
* **Basic Gates**: NOT (7404), AND (7408: $Y = AB$), OR (7432: $Y = A+B$).
* **Universal Gates**: **NAND (7400)** and **NOR (7402)** can implement ANY digital circuit alone.
* **Minimum Universal Gates Required Table (MUST MEMORIZE!)**:
  | Target Function / Gate | NAND Gates Needed | NOR Gates Needed |
  | :--- | :---: | :---: |
  | **NOT** | **1** | **1** |
  | **AND** | **2** | **3** |
  | **OR** | **3** | **2** |
  | **NOR** | **4** | **1** |
  | **NAND** | **1** | **4** |
  | **XOR** ($A \oplus B$) | **4** | **5** |
  | **XNOR** ($(A \oplus B)'$) | **5** | **4** |
* **XOR Gate ($Y = A'B + AB' = A \oplus B$)**:
  * Properties: $A \oplus 0 = A$, $A \oplus 1 = A'$, $A \oplus A = 0$, $A \oplus A' = 1$.
  * Acts as an **Odd Parity Detector** and **Controlled Inverter**.
* **XNOR Gate ($Y = AB + A'B' = (A \oplus B)'$)**: Coincidence detector / Equivalence gate.

---

### 5. Boolean Algebra Theorems
* **De Morgan's Laws**: $(A + B)' = A' \cdot B'$, and $(A \cdot B)' = A' + B'$.
* **Distributive Law (Crucial!)**: $A + BC = (A + B)(A + C)$.
* **Absorption Laws**: $A + AB = A$, $A(A + B) = A$, $A + A'B = A + B$, $A(A' + B) = AB$.
* **Consensus Theorem**: $AB + A'C + BC = AB + A'C$ (Redundant term $BC$ removed).

---

### 6. Canonical Forms & Karnaugh Maps (K-Maps)
* **Minterm ($m$) / SOP**: Product term containing all variables in normal or complemented form where output = 1. E.g. $F = \sum m(1, 3, 5, 7)$.
* **Maxterm ($M$) / POS**: Sum term where output = 0. E.g. $F = \prod M(0, 2, 4, 6)$.
* **K-Map Structure**:
  * Gray code row & column ordering: $00, 01, 11, 10$.
  * Grouping rules: Sizes must be powers of 2 ($1, 2, 4, 8, 16$).
    * Pair ($2$ cells) $\rightarrow$ Eliminates $1$ variable.
    * Quad ($4$ cells) $\rightarrow$ Eliminates $2$ variables.
    * Octet ($8$ cells) $\rightarrow$ Eliminates $3$ variables.
  * **Corner Quad**: Cells $(0, 2, 8, 10)$ group to give $B'D'$.
  * **Don't Care ($d$ or $\phi$)**: Include in groups ONLY if it helps form a larger group; otherwise ignore.

---

# 📝 100+ HIGH-YIELD TOPIC-WISE PRACTICE MCQS WITH DETAILED EXPLANATIONS

### --- UNIT 1 MCQS ---

**Q1.** According to the Classical Free Electron Theory of Drude and Lorentz, the valence electrons inside a metal behave like:
A) Bound harmonic oscillators
B) A classical ideal gas of free particles
C) Quantum particles obeying Pauli exclusion
D) Fixed charges at lattice positions
**Answer: B**
*Explanation:* Drude-Lorentz theory treats conduction electrons as classical neutral gas molecules moving randomly among fixed positive ion cores.

**Q2.** The Wiedemann-Franz law states that the ratio of thermal conductivity ($K$) to electrical conductivity ($\sigma$) is directly proportional to:
A) Absolute temperature ($T$)
B) Square of temperature ($T^2$)
C) Square root of temperature ($\sqrt{T}$)
D) Independent of temperature
**Answer: A**
*Explanation:* $\frac{K}{\sigma} = L T$, where $L$ is the Lorentz number ($\frac{K}{\sigma T} = \text{constant}$).

**Q3.** Which of the following is a major failure of the Classical Free Electron Theory?
A) Inability to derive Ohm's law
B) Incorrectly predicting a high electronic specific heat ($3/2 R$)
C) Inability to explain Wiedemann-Franz law
D) Predicting zero electrical conductivity for metals
**Answer: B**
*Explanation:* Classical theory predicted electronic heat capacity $C_v = \frac{3}{2}R$, whereas experimentally it is roughly $0.01 R$ at room temperature because only electrons near $E_F$ can absorb thermal energy.

**Q4.** Drift current is caused by ________, whereas diffusion current is caused by ________.
A) Carrier concentration gradient; Applied electric field
B) Applied electric field; Carrier concentration gradient
C) Applied magnetic field; Temperature gradient
D) Photons; Thermal vibration
**Answer: B**
*Explanation:* Drift current is driven by an applied electric field ($J_{\text{drift}} = \sigma E$), whereas diffusion current arises from non-uniform spatial distribution of carriers ($J_{\text{diff}} \propto \frac{dn}{dx}$).

**Q5.** The Einstein relation relating diffusion coefficient ($D$) and mobility ($\mu$) for charge carriers is given by:
A) $\frac{D}{\mu} = \frac{k_B T}{q}$
B) $\frac{\mu}{D} = \frac{k_B T}{q}$
C) $D \cdot \mu = \frac{k_B T}{q}$
D) $\frac{D}{\mu} = \frac{q}{k_B T}$
**Answer: A**
*Explanation:* Einstein relation: $\frac{D}{\mu} = \frac{k_B T}{q} = V_T$ (thermal voltage $\approx 26\text{ mV}$ at $300\text{ K}$).

**Q6.** The energy bandgap ($E_g$) of Silicon and Germanium at room temperature are respectively:
A) $0.67\text{ eV}$ and $1.1\text{ eV}$
B) $1.1\text{ eV}$ and $0.67\text{ eV}$
C) $1.42\text{ eV}$ and $5.4\text{ eV}$
D) $0\text{ eV}$ and $1.1\text{ eV}$
**Answer: B**
*Explanation:* Silicon has $E_g \approx 1.1\text{ eV}$ and Germanium has $E_g \approx 0.67\text{ eV}$.

**Q7.** At absolute zero ($0\text{ K}$), an ideal intrinsic semiconductor behaves as:
A) Perfect conductor
B) Superconductor
C) Perfect insulator
D) Semi-metal
**Answer: C**
*Explanation:* At $0\text{ K}$, no thermal energy is available to break covalent bonds; the valence band is completely full and conduction band is completely empty.

**Q8.** When a pentavalent impurity (such as Phosphorus or Arsenic) is added to pure Silicon:
A) P-type semiconductor is formed with acceptor energy level near VB
B) N-type semiconductor is formed with donor energy level near CB
C) Intrinsic carrier concentration increases equally
D) The bandgap becomes zero
**Answer: B**
*Explanation:* Pentavalent atoms have 5 valence electrons. 4 bond with Si and the 5th electron is loosely bound, creating a donor energy level $E_d$ just below the conduction band ($0.05\text{ eV}$ in Si).

**Q9.** An N-type semiconductor is:
A) Positively charged
B) Negatively charged
C) Electrically neutral
D) Depends on doping concentration
**Answer: C**
*Explanation:* Every donor atom is neutral before doping. After donating an electron, it becomes a fixed positive ion, which exactly balances the negative charge of the donated free electron.

**Q10.** According to the Mass Action Law, under thermal equilibrium in a semiconductor:
A) $n + p = n_i$
B) $n \cdot p = n_i^2$
C) $n / p = n_i^2$
D) $n \cdot p = 2 n_i$
**Answer: B**
*Explanation:* The product of majority and minority carrier concentrations is always constant and equal to $n_i^2$ at a given temperature.

**Q11.** The probability that an energy state at the Fermi level $E = E_F$ is occupied by an electron at any temperature $T > 0\text{ K}$ is:
A) $1.0$ (100%)
B) $0.5$ (50%)
C) $0.0$ (0%)
D) $0.25$ (25%)
**Answer: B**
*Explanation:* $f(E_F) = \frac{1}{1 + e^{(E_F - E_F)/k_B T}} = \frac{1}{1 + e^0} = \frac{1}{2} = 0.5$.

**Q12.** In a P-type semiconductor, the Fermi energy level $E_F$:
A) Lies exactly in the middle of the bandgap
B) Lies closer to the conduction band
C) Lies closer to the valence band
D) Lies inside the conduction band
**Answer: C**
*Explanation:* In P-type semiconductors, the high concentration of holes in the valence band pulls the Fermi level downwards towards $E_v$.

**Q13.** The Hall coefficient $R_H$ of an N-type semiconductor is:
A) Positive
B) Negative
C) Zero
D) Infinite
**Answer: B**
*Explanation:* $R_H = -\frac{1}{n e}$ for electrons; the negative sign indicates negative charge carriers.

**Q14.** A semiconductor specimen of thickness $0.5\text{ mm}$ carrying a current of $10\text{ mA}$ is placed in a magnetic field $B = 0.5\text{ T}$. If the Hall coefficient is $R_H = 0.05\text{ m}^3/\text{C}$, the Hall voltage $V_H$ generated is:
A) $0.5\text{ mV}$
B) $5.0\text{ mV}$
C) $0.05\text{ V}$
D) $0.5\text{ V}$
**Answer: A**
*Explanation:* $V_H = \frac{R_H B I}{t} = \frac{0.05 \times 0.5 \times (10 \times 10^{-3})}{0.5 \times 10^{-3}} = 0.05 \times 10^{-2} = 0.5 \times 10^{-3}\text{ V} = 0.5\text{ mV}$.

**Q15.** The Hall effect can NOT be used to determine:
A) Type of semiconductor (N-type or P-type)
B) Carrier concentration
C) Carrier mobility
D) The energy bandgap directly
**Answer: D**
*Explanation:* Hall effect measures $R_H$ and $\mu_H$, giving carrier type, density, and mobility, but does not directly measure optical bandgap $E_g$.

---

### --- UNIT 2 MCQS ---

**Q16.** Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL) are expressions of the conservation of ________ and ________ respectively.
A) Energy; Charge
B) Charge; Energy
C) Momentum; Charge
D) Charge; Mass
**Answer: B**
*Explanation:* KCL represents conservation of electric charge ($\sum I = 0$), while KVL represents conservation of energy around a loop ($\sum V = 0$).

**Q17.** The total charge entering a terminal is $q(t) = 5t \sin(4\pi t)\text{ mC}$. The current at $t = 0.5\text{ s}$ is:
A) $10\pi\text{ mA}$
B) $5\text{ mA}$
C) $0\text{ mA}$
D) $20\pi\text{ mA}$
**Answer: A**
*Explanation:* $i = \frac{dq}{dt} = 5\sin(4\pi t) + 20\pi t \cos(4\pi t)$. At $t = 0.5$: $\sin(2\pi) = 0$ and $\cos(2\pi) = 1$. Thus $i(0.5) = 5(0) + 20\pi(0.5)(1) = 10\pi\text{ mA} \approx 31.42\text{ mA}$.

**Q18.** A $100\text{ W}$ light bulb operates continuously for $2\text{ hours}$. The total electrical energy consumed is:
A) $200\text{ J}$
B) $0.2\text{ kWh}$ ($720\text{ kJ}$)
C) $72\text{ kJ}$
D) $200\text{ kWh}$
**Answer: B**
*Explanation:* Energy = $P \times t = 100\text{ W} \times 2\text{ h} = 200\text{ Wh} = 0.2\text{ kWh} = 100 \times 7200\text{ s} = 720,000\text{ J} = 720\text{ kJ}$.

**Q19.** The reverse saturation current $I_0$ of a Silicon diode approximately ________ for every $10^\circ\text{C}$ rise in temperature.
A) Remains constant
B) Doubles
C) Triples
D) Halves
**Answer: B**
*Explanation:* Reverse saturation current in p-n junctions doubles approximately every $10^\circ\text{C}$ increase due to thermal generation of minority carriers.

**Q20.** Zener breakdown occurs in ________ doped junctions under ________ reverse voltage, whereas Avalanche breakdown occurs in ________ doped junctions.
A) Lightly; High; Heavily
B) Heavily; Low ($< 6\text{ V}$); Lightly
C) Heavily; High ($> 6\text{ V}$); Lightly
D) Moderately; Zero; Heavily
**Answer: B**
*Explanation:* Zener breakdown is caused by direct field emission in heavily doped, narrow depletion junctions at $<6\text{ V}$. Avalanche occurs due to impact ionization in lightly doped junctions at $>6\text{ V}$.

**Q21.** In a BJT, the three regions in decreasing order of doping concentration are:
A) Collector > Emitter > Base
B) Emitter > Collector > Base
C) Base > Emitter > Collector
D) Emitter > Base > Collector
**Answer: B**
*Explanation:* Doping order: Emitter (heaviest) > Collector (moderate) > Base (lightest). Physical size order: Collector (largest) > Emitter (medium) > Base (thinnest).

**Q22.** For a transistor operating in the active region, the Emitter-Base (EB) junction is ________ biased and the Collector-Base (CB) junction is ________ biased.
A) Forward; Reverse
B) Reverse; Forward
C) Forward; Forward
D) Reverse; Reverse
**Answer: A**
*Explanation:* Active region (linear amplification) requires EB forward biased and CB reverse biased.

**Q23.** If a transistor has $\alpha = 0.98$, the common-emitter current gain $\beta$ is:
A) 49
B) 98
C) 0.02
D) 50
**Answer: A**
*Explanation:* $\beta = \frac{\alpha}{1 - \alpha} = \frac{0.98}{1 - 0.98} = \frac{0.98}{0.02} = 49$.

**Q24.** In a CMOS inverter circuit, when the input voltage is HIGH ($V_{DD}$):
A) NMOS is ON and PMOS is OFF, pulling output to Ground ($0$)
B) PMOS is ON and NMOS is OFF, pulling output to $V_{DD}$ ($1$)
C) Both NMOS and PMOS are ON, causing high static current
D) Both NMOS and PMOS are OFF
**Answer: A**
*Explanation:* A HIGH input turns ON the pull-down NMOS transistor and turns OFF the pull-up PMOS transistor, driving the output cleanly to 0V.

**Q25.** The primary reason CMOS technology dominates modern VLSI microprocessors is:
A) High static power consumption
B) Virtually zero static power dissipation
C) Simple bipolar junction structure
D) Negative operating voltage
**Answer: B**
*Explanation:* Because one transistor in the complementary pair is always OFF in steady state, static power dissipation is negligible, enabling billions of transistors on a single chip.

**Q26.** A solar cell converts solar radiation into electricity based on the:
A) Thermionic emission
B) Photovoltaic effect
C) Seebeck effect
D) Hall effect
**Answer: B**
*Explanation:* Photons with energy $h\nu \ge E_g$ generate electron-hole pairs which are separated by the junction's built-in field to produce DC voltage and current.

**Q27.** The Fill Factor ($FF$) of a solar cell is defined as:
A) $\frac{V_{oc} \cdot I_{sc}}{V_{mp} \cdot I_{mp}}$
B) $\frac{V_{mp} \cdot I_{mp}}{V_{oc} \cdot I_{sc}}$
C) $\frac{V_{oc}}{I_{sc}}$
D) $\frac{I_{mp}}{I_{sc}}$
**Answer: B**
*Explanation:* Fill factor is the ratio of maximum usable power ($P_{max} = V_{mp} I_{mp}$) to the theoretical product of open-circuit voltage and short-circuit current ($V_{oc} I_{sc}$).

**Q28.** The basic principle of light propagation through an optical fiber is:
A) Total Internal Reflection (TIR)
B) Total Internal Refraction
C) Diffraction
D) Polarization
**Answer: A**
*Explanation:* Optical fiber confines light in the core ($n_1$) by total internal reflection at the core-cladding ($n_2$) boundary where $n_1 > n_2$.

**Q29.** An optical fiber has a core refractive index $n_1 = 1.50$ and cladding refractive index $n_2 = 1.45$. The Numerical Aperture ($NA$) of the fiber in air ($n_0=1$) is:
A) $0.384$
B) $0.147$
C) $0.500$
D) $0.050$
**Answer: A**
*Explanation:* $NA = \sqrt{n_1^2 - n_2^2} = \sqrt{1.50^2 - 1.45^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} \approx 0.384$.

**Q30.** For single-mode propagation in a step-index optical fiber, the normalized frequency (V-number) must satisfy:
A) $V \le 2.405$
B) $V > 2.405$
C) $V = 3.141$
D) $V \ge 4.810$
**Answer: A**
*Explanation:* Cut-off condition for single-mode fiber is $V \le 2.405$.

**Q31.** Compared to a CPU, a GPU is primarily designed to deliver:
A) Extremely low latency on single-threaded execution
B) High throughput on massively parallel, compute-intensive workloads
C) Complex branch prediction and speculative execution
D) Larger sequential instruction pipelines
**Answer: B**
*Explanation:* GPUs have thousands of smaller ALU cores optimized for data-parallel SIMD execution (high throughput), whereas CPUs have fewer complex cores optimized for low latency.

---

### --- UNIT 3 MCQS ---

**Q32.** The hexadecimal equivalent of the binary number $(11011011)_2$ is:
A) $(DB)_{16}$
B) $(BD)_{16}$
C) $(213)_{16}$
D) $(AB)_{16}$
**Answer: A**
*Explanation:* Group into 4 bits: $1101 = 13 = \text{D}$, and $1011 = 11 = \text{B}$. So $(11011011)_2 = (\text{DB})_{16}$.

**Q33.** The decimal value of the binary number $(110110)_2$ is:
A) 54
B) 46
C) 52
D) 27
**Answer: A**
*Explanation:* $1\times 32 + 1\times 16 + 0\times 8 + 1\times 4 + 1\times 2 + 0\times 1 = 32 + 16 + 4 + 2 = 54$.

**Q34.** The binary equivalent of $(101101101)_2$ in Octal is:
A) $(555)_8$
B) $(555)_{16}$
C) $(555)_8$
D) $(555)_8 \rightarrow 101 \mid 101 \mid 101 = (555)_8$
**Answer: D**
*Explanation:* Grouping 3 bits from right: $101 \rightarrow 5$, $101 \rightarrow 5$, $101 \rightarrow 5 \implies (555)_8$.

**Q35.** The 2's complement of the binary number $(101100)_2$ is:
A) $010011$
B) $010100$
C) $101101$
D) $010010$
**Answer: B**
*Explanation:* 1's complement = $010011$. Adding 1: $010011 + 1 = 010100$. (Or using the quick trick: copy from right up to first '1' $\rightarrow$ '00', '1', then flip rest $\rightarrow 010100$).

**Q36.** The range of signed numbers that can be represented using 8-bit 2's complement format is:
A) $-127$ to $+127$
B) $-128$ to $+127$
C) $0$ to $255$
D) $-128$ to $+128$
**Answer: B**
*Explanation:* Range for $n$ bits is $-2^{n-1}$ to $+(2^{n-1}-1)$. For $n=8$: $-2^7$ to $+(2^7-1) = -128$ to $+127$.

**Q37.** In 2's complement subtraction, if an end carry is generated when adding $A$ and 2's complement of $B$, it indicates that:
A) The result is negative and must be complemented
B) The result is positive and the carry is discarded
C) An overflow has definitely occurred
D) The carry must be added back to the LSB
**Answer: B**
*Explanation:* In 2's complement arithmetic, a final end carry indicates a positive result, and the carry bit is simply discarded.

**Q38.** Which of the following is an invalid BCD (8421) code?
A) 1001
B) 0111
C) 1100
D) 0000
**Answer: C**
*Explanation:* BCD represents decimal digits $0-9$ ($0000$ to $1001$). Codes from $1010$ (10) to $1111$ (15) are invalid in BCD.

**Q39.** The Excess-3 (XS-3) code for the decimal number $(47)_{10}$ is:
A) $0100\ 0111$
B) $0111\ 1010$
C) $0111\ 1001$
D) $1000\ 1010$
**Answer: B**
*Explanation:* Digit 4: $4+3 = 7 = 0111_2$. Digit 7: $7+3 = 10 = 1010_2$. So XS-3 is $0111\ 1010$.

**Q40.** Why is Gray code widely used in optical shaft angle encoders and K-maps?
A) It uses fewer bits than binary
B) Only one bit changes between consecutive numbers, eliminating transition errors
C) It is a weighted arithmetic code
D) It can be directly added without conversion
**Answer: B**
*Explanation:* Gray code is a unit-distance code (reflected code); only a single bit toggles per step, preventing race conditions and false intermediate states.

**Q41.** The Gray code corresponding to the binary number $(1101)_2$ is:
A) $1011$
B) $1110$
C) $1001$
D) $0110$
**Answer: A**
*Explanation:* $G_3 = B_3 = 1$; $G_2 = B_3 \oplus B_2 = 1 \oplus 1 = 0$; $G_1 = B_2 \oplus B_1 = 1 \oplus 0 = 1$; $G_0 = B_1 \oplus B_0 = 0 \oplus 1 = 1$. So Gray code = $1011$.

**Q42.** The minimum number of 2-input NAND gates required to implement a 2-input XOR gate is:
A) 3
B) 4
C) 5
D) 6
**Answer: B**
*Explanation:* A 2-input XOR gate ($A'B + AB'$) requires exactly 4 NAND gates (and 5 NOR gates).

**Q43.** The minimum number of 2-input NOR gates required to implement a 2-input AND gate is:
A) 2
B) 3
C) 4
D) 1
**Answer: B**
*Explanation:* To make AND from NOR: By De Morgan's $AB = (A' + B')'$. We need 2 NORs to invert $A$ and $B$, plus 1 NOR to combine $\implies 3$ NOR gates.

**Q44.** The Boolean expression $A + A'B$ simplifies to:
A) $A$
B) $B$
C) $A + B$
D) $AB$
**Answer: C**
*Explanation:* Distributive law: $A + A'B = (A + A')(A + B) = (1)(A + B) = A + B$.

**Q45.** The dual of the Boolean expression $A + BC$ is:
A) $A(B + C)$
B) $A' + B'C'$
C) $A + B + C$
D) $A'(B' + C')$
**Answer: A**
*Explanation:* Duality principle: Swap $+$ with $\cdot$ and $0$ with $1$ without complementing variables. $A + BC \rightarrow A(B + C)$.

**Q46.** In a 4-variable K-Map, grouping 4 adjacent 1s (a Quad) eliminates:
A) 1 variable
B) 2 variables
C) 3 variables
D) 4 variables
**Answer: B**
*Explanation:* Grouping $2^k$ cells eliminates $k$ variables. For a quad ($2^2 = 4$ cells), $k=2$ variables are eliminated.

**Q47.** The simplified Boolean expression for $F(A,B,C,D) = \sum m(0, 1, 2, 5, 7, 8, 9, 10, 13, 15)$ is:
A) $BD + C'D + B'D'$
B) $A'B + CD + A'D'$
C) $BD + B'D'$
D) $A'B' + CD + AB$
**Answer: A**
*Explanation:* From class tutorial sheet: Group 1 (cells 5,7,13,15) = $BD$; Group 2 (cells 1,5,9,13) = $C'D$; Group 3 (corner quad 0,2,8,10) = $B'D'$. Minimized form: $BD + C'D + B'D'$.

**Q48.** In a K-Map, "Don't Care" conditions ($d$ or $\phi$) should be:
A) Always grouped as 1s
B) Always treated as 0s
C) Grouped only if they help enlarge a group to eliminate more variables
D) Placed only in corner cells
**Answer: C**
*Explanation:* Don't care states represent unspecified or impossible input combinations. They are included in groups only when they expand group sizes ($1 \rightarrow 2 \rightarrow 4 \rightarrow 8$), otherwise left ungrouped.

---

# 🏆 OFFICIAL 30-MCQ MIDTERM MOCK EXAM (EXACT 30 MARKS PATTERN)
**Time Allowed**: 45 Minutes | **Total Marks**: 30 | **Questions**: 30 MCQs (1 Mark each)

### 📌 MOCK EXAM QUESTIONS

**Q1.** According to Drude-Lorentz classical free electron theory, the electrical conductivity $\sigma$ is given by:
A) $\frac{n e^2 \tau}{m}$
B) $\frac{n e \tau}{m^2}$
C) $\frac{n^2 e \tau}{m}$
D) $\frac{m}{n e^2 \tau}$

**Q2.** The temperature dependence of electrical resistivity in a pure metal is best described as:
A) $\rho \propto 1/T$
B) $\rho \propto T$
C) $\rho \propto e^{-E_g/2k_B T}$
D) $\rho$ is independent of $T$

**Q3.** In an electric circuit, what is the drift speed of conduction electrons in a copper wire carrying a current of $5\text{ A}$ if the electron density is $8.5 \times 10^{28}\text{ m}^{-3}$ and cross-sectional area is $1.0 \times 10^{-6}\text{ m}^2$? ($e = 1.6 \times 10^{-19}\text{ C}$)
A) $3.68 \times 10^{-4}\text{ m/s}$
B) $3.68 \times 10^{4}\text{ m/s}$
C) $1.25 \times 10^{-2}\text{ m/s}$
D) $3.0 \times 10^{8}\text{ m/s}$

**Q4.** A sample of Silicon is doped with $10^{17}\text{ atoms/cm}^3$ of Arsenic. If the intrinsic carrier concentration $n_i = 1.5 \times 10^{10}\text{ cm}^{-3}$, the hole concentration $p$ at thermal equilibrium is:
A) $1.5 \times 10^3\text{ cm}^{-3}$
B) $2.25 \times 10^3\text{ cm}^{-3}$
C) $2.25 \times 10^{10}\text{ cm}^{-3}$
D) $10^{17}\text{ cm}^{-3}$

**Q5.** In an intrinsic semiconductor, the Fermi energy level $E_F$ is located:
A) Just below the conduction band edge $E_c$
B) Just above the valence band edge $E_v$
C) Approximately at the midpoint of the forbidden energy gap
D) Inside the valence band

**Q6.** The Hall voltage $V_H$ in a semiconductor strip of thickness $t$ carrying current $I$ in a magnetic field $B$ is inversely proportional to:
A) Magnetic field $B$
B) Sample thickness $t$
C) Current $I$
D) Hall coefficient $R_H$

**Q7.** In a Hall effect experiment, if the measured Hall coefficient $R_H$ is $+1.25 \times 10^{-4}\text{ m}^3/\text{C}$, the majority carriers are ________ and their concentration is ________.
A) Electrons; $5 \times 10^{22}\text{ m}^{-3}$
B) Holes; $5 \times 10^{22}\text{ m}^{-3}$
C) Holes; $1.25 \times 10^{20}\text{ m}^{-3}$
D) Electrons; $8 \times 10^{21}\text{ m}^{-3}$

**Q8.** Which of the following equations correctly represents the total current density in a semiconductor?
A) $J = q(n\mu_n + p\mu_p)E + q D_n \frac{dn}{dx} - q D_p \frac{dp}{dx}$
B) $J = q(n\mu_n - p\mu_p)E + q D_n \frac{dn}{dx} + q D_p \frac{dp}{dx}$
C) $J = \sigma E + q D_n \frac{dp}{dx}$
D) $J = q n v_d - q p v_d$

**Q9.** If the current through a terminal is $i(t) = (3t^2 - t)\text{ A}$, the total charge entering the terminal between $t = 1\text{ s}$ and $t = 2\text{ s}$ is:
A) $5.5\text{ C}$
B) $7.0\text{ C}$
C) $4.5\text{ C}$
D) $9.0\text{ C}$

**Q10.** In a series circuit containing a $12\text{ V}$ DC supply and two resistors $R_1 = 4\,\Omega$ and $R_2 = 8\,\Omega$, the voltage drop across $R_2$ is:
A) $4\text{ V}$
B) $8\text{ V}$
C) $12\text{ V}$
D) $6\text{ V}$

**Q11.** For a Silicon p-n junction diode at room temperature, the knee/cut-in voltage is approximately:
A) $0.3\text{ V}$
B) $0.7\text{ V}$
C) $1.1\text{ V}$
D) $0.0\text{ V}$

**Q12.** Avalanche breakdown in a p-n junction diode is primarily caused by:
A) High electric field tearing electrons out of covalent bonds
B) Collision of thermally accelerated carriers causing impact ionization
C) Heavy doping of the p and n regions
D) Narrowing of the depletion layer below $10\text{ nm}$

**Q13.** For a transistor operating in the active region with $I_B = 50\,\mu\text{A}$ and $\beta = 100$, the emitter current $I_E$ is:
A) $5.00\text{ mA}$
B) $5.05\text{ mA}$
C) $0.50\text{ mA}$
D) $50.0\text{ mA}$

**Q14.** A transistor has a base-to-collector current gain $\beta = 199$. Its emitter current gain $\alpha$ is:
A) $0.995$
B) $0.990$
C) $0.950$
D) $0.980$

**Q15.** When the input to a CMOS inverter is connected to logic '0' ($0\text{ V}$):
A) NMOS is ON, PMOS is OFF, Output = 0
B) PMOS is ON, NMOS is OFF, Output = $V_{DD}$ (Logic 1)
C) Both transistors conduct, producing maximum power loss
D) Output floats with high impedance

**Q16.** A solar cell produces an open-circuit voltage $V_{oc} = 0.6\text{ V}$ and a short-circuit current $I_{sc} = 2.5\text{ A}$. If the maximum power output is $P_{max} = 1.2\text{ W}$, the Fill Factor ($FF$) is:
A) $0.60$
B) $0.80$
C) $0.50$
D) $0.75$

**Q17.** A step-index optical fiber has core refractive index $n_1 = 1.48$ and cladding refractive index $n_2 = 1.46$. The acceptance angle $\theta_a$ in air ($n_0 = 1$) is:
A) $14.04^\circ$
B) $24.23^\circ$
C) $80.6^\circ$
D) $45.0^\circ$

**Q18.** The fractional refractive index change $\Delta$ of an optical fiber having $n_1 = 1.50$ and $n_2 = 1.47$ is:
A) $0.020$ (2.0%)
B) $0.030$ (3.0%)
C) $0.015$ (1.5%)
D) $0.200$ (20%)

**Q19.** Which transmission medium provides the highest bandwidth and complete immunity to electromagnetic interference (EMI)?
A) Coaxial Cable
B) Shielded Twisted Pair (STP)
C) Optical Fiber Cable
D) Microwave Radio Link

**Q20.** The architectural difference between CPU and GPU is best described by:
A) CPU prioritizes massive SIMD parallelism; GPU prioritizes branch prediction
B) CPU has thousands of simple ALUs; GPU has 4 to 16 complex cores
C) CPU is optimized for low-latency sequential tasks; GPU is optimized for high-throughput data parallelism
D) GPU executes single-threaded operating system kernels faster than CPU

**Q21.** The hexadecimal equivalent of the octal number $(375)_8$ is:
A) $(FD)_{16}$
B) $(1BD)_{16}$
C) $(BD)_{16}$
D) $(F5)_{16}$

**Q22.** Convert the decimal number $(25.625)_{10}$ into its binary equivalent:
A) $(11001.101)_2$
B) $(11001.011)_2$
C) $(11010.101)_2$
D) $(10001.101)_2$

**Q23.** The 1's complement representation of the decimal number $-34$ in an 8-bit register is:
A) $11011101$
B) $11011110$
C) $00100010$
D) $10100010$

**Q24.** Subtract $(1010)_2$ from $(1101)_2$ using 2's complement arithmetic:
A) $(0011)_2$
B) $(1001)_2$
C) $(0101)_2$
D) $(0111)_2$

**Q25.** The Excess-3 code for the decimal number $(85)_{10}$ is:
A) $1000\ 0101$
B) $1011\ 1000$
C) $1011\ 0101$
D) $1100\ 1000$

**Q26.** The Gray code $(1010)_G$ converted to binary is:
A) $(1100)_2$
B) $(1111)_2$
C) $(1001)_2$
D) $(1011)_2$

**Q27.** How many 2-input NAND gates are required to construct a 2-input OR gate?
A) 1
B) 2
C) 3
D) 4

**Q28.** The output $Y$ of a 2-input XOR gate is HIGH ($1$) when:
A) Both inputs are 1
B) Both inputs are 0
C) Exactly one input is 1 (inputs are unequal)
D) Independent of inputs

**Q29.** The Boolean function $F = (A + B)(A + C)$ is equivalent to:
A) $A + BC$
B) $AB + C$
C) $A + B + C$
D) $ABC$

**Q30.** The canonical SOP expression $F(A,B,C) = \sum m(1, 2, 4, 7)$ has the equivalent canonical POS form:
A) $\prod M(0, 3, 5, 6)$
B) $\prod M(1, 2, 4, 7)$
C) $\sum m(0, 3, 5, 6)$
D) $\prod M(1, 3, 5, 7)$

---

## 🔑 MIDTERM MOCK EXAM ANSWER KEY & DETAILED STEP-BY-STEP SOLUTIONS

| Q# | Key | Detailed Step-by-Step Solution |
| :---: | :---: | :--- |
| **Q1** | **A** | Microscopic Ohm's law: $J = \sigma E = n e v_d = n e \left(\frac{e E \tau}{m}\right) = \frac{n e^2 \tau}{m} E \implies \sigma = \frac{n e^2 \tau}{m}$. |
| **Q2** | **B** | In metals, lattice vibrations (phonons) increase linearly with temperature, increasing collision frequency $\implies \rho \propto T$. (For semiconductors, $\rho \propto e^{E_g/2k_BT}$). |
| **Q3** | **A** | $v_d = \frac{I}{n e A} = \frac{5}{(8.5 \times 10^{28}) \times (1.6 \times 10^{-19}) \times (1.0 \times 10^{-6})} = \frac{5}{1.36 \times 10^4} = 3.68 \times 10^{-4}\text{ m/s}$. |
| **Q4** | **B** | In N-type Si, $n \approx N_D = 10^{17}\text{ cm}^{-3}$. By Mass Action Law: $p = \frac{n_i^2}{N_D} = \frac{(1.5 \times 10^{10})^2}{10^{17}} = \frac{2.25 \times 10^{20}}{10^{17}} = 2.25 \times 10^3\text{ cm}^{-3}$. |
| **Q5** | **C** | In intrinsic semiconductors, electron and hole concentrations are identical ($n = p = n_i$), positioning $E_F$ at the exact midpoint: $E_F = \frac{E_c + E_v}{2}$. |
| **Q6** | **B** | Hall voltage formula: $V_H = \frac{R_H B I}{t}$, where $t$ is the thickness along the direction of magnetic field. Thus $V_H \propto 1/t$. |
| **Q7** | **B** | Positive Hall coefficient ($R_H > 0$) indicates **P-type** semiconductor (holes). Concentration $p = \frac{1}{e R_H} = \frac{1}{(1.6 \times 10^{-19}) \times (1.25 \times 10^{-4})} = \frac{1}{2.0 \times 10^{-23}} = 5 \times 10^{22}\text{ m}^{-3}$. |
| **Q8** | **A** | Total current is sum of drift ($q(n\mu_n + p\mu_p)E$) and diffusion ($q D_n \frac{dn}{dx} - q D_p \frac{dp}{dx}$). Note minus sign on hole diffusion due to negative charge flow gradient. |
| **Q9** | **A** | $q = \int_1^2 (3t^2 - t)dt = \left[ t^3 - \frac{t^2}{2} \right]_1^2 = \left(8 - 2\right) - \left(1 - 0.5\right) = 6 - 0.5 = 5.5\text{ C}$. |
| **Q10** | **B** | Voltage divider rule: $V_2 = V_{\text{total}} \times \frac{R_2}{R_1 + R_2} = 12\text{ V} \times \frac{8}{4 + 8} = 12 \times \frac{8}{12} = 8\text{ V}$. |
| **Q11** | **B** | Silicon p-n junction barrier potential at room temperature ($300\text{ K}$) is $\approx 0.7\text{ V}$ ($0.3\text{ V}$ for Germanium). |
| **Q12** | **B** | In lightly doped diodes with wide depletion layers, high reverse bias accelerates minority carriers to high kinetic energies, colliding with crystal lattice atoms to generate electron-hole pairs (impact ionization). |
| **Q13** | **B** | $I_C = \beta I_B = 100 \times 50\,\mu\text{A} = 5000\,\mu\text{A} = 5.0\text{ mA}$. Total emitter current $I_E = I_B + I_C = 0.05\text{ mA} + 5.0\text{ mA} = 5.05\text{ mA}$. |
| **Q14** | **A** | $\alpha = \frac{\beta}{1 + \beta} = \frac{199}{1 + 199} = \frac{199}{200} = 0.995$. |
| **Q15** | **B** | For input $V_{in} = 0\text{ V}$ (Logic 0): PMOS ($|V_{GS}| = V_{DD}$) turns ON, NMOS ($V_{GS} = 0$) turns OFF. Output pulls up to $V_{DD}$ (Logic 1). |
| **Q16** | **B** | Fill Factor $FF = \frac{P_{max}}{V_{oc} \cdot I_{sc}} = \frac{1.2\text{ W}}{0.6\text{ V} \times 2.5\text{ A}} = \frac{1.2}{1.5} = 0.80$. |
| **Q17** | **A** | $NA = \sqrt{n_1^2 - n_2^2} = \sqrt{1.48^2 - 1.46^2} = \sqrt{2.1904 - 2.1316} = \sqrt{0.0588} = 0.2425$. $\theta_a = \sin^{-1}(0.2425) \approx 14.04^\circ$. |
| **Q18** | **A** | $\Delta = \frac{n_1 - n_2}{n_1} = \frac{1.50 - 1.47}{1.50} = \frac{0.03}{1.50} = 0.020 = 2.0\%$. |
| **Q19** | **C** | Optical fibers transmit signals as photons through dielectric glass, providing terahertz bandwidth and total immunity to electromagnetic interference, lightning, and crosstalk. |
| **Q20** | **C** | CPUs focus on low latency per thread with large caches and branch predictors; GPUs focus on high compute throughput across thousands of SIMD cores executing data-parallel threads. |
| **Q21** | **A** | Step 1: $(375)_8 \rightarrow 3 = 011_2, 7 = 111_2, 5 = 101_2 \implies 011111101_2$. Step 2: Group in 4s from right: $1111\ 1101 \rightarrow 0000\ 1111\ 1101 \rightarrow 0\text{ F D} \implies (\text{FD})_{16}$. (Option A). |
| **Q22** | **A** | Integer: $25 = 16 + 8 + 1 = (11001)_2$. Fraction: $0.625 \times 2 = 1.25$ (carry 1); $0.25 \times 2 = 0.50$ (carry 0); $0.50 \times 2 = 1.00$ (carry 1) $\implies (0.101)_2$. Total: $(11001.101)_2$. |
| **Q23** | **A** | $+34 = (00100010)_2$. 1's complement of $+34$ is formed by inverting all bits: $11011101$. |
| **Q24** | **A** | $A = (1101)_2 = 13$, $B = (1010)_2 = 10$. 2's complement of $B$ (4-bit): 1's comp = $0101 \implies 0101 + 1 = 0110$. Add: $1101 + 0110 = 10011$. Discard end carry $\implies (0011)_2 = 3$. |
| **Q25** | **B** | Decimal 8: $8+3 = 11 = (1011)_2$. Decimal 5: $5+3 = 8 = (1000)_2$. So $(85)_{\text{XS-3}} = 1011\ 1000$. |
| **Q26** | **A** | Gray $G = 1010$: $B_3 = G_3 = 1$; $B_2 = B_3 \oplus G_2 = 1 \oplus 0 = 1$; $B_1 = B_2 \oplus G_1 = 1 \oplus 1 = 0$; $B_0 = B_1 \oplus G_0 = 0 \oplus 0 = 0 \implies (1100)_2$. |
| **Q27** | **C** | By De Morgan's: $A + B = (A' \cdot B')'$. 2 NANDs to invert $A$ and $B$, 1 NAND to combine $\implies 3$ NAND gates. |
| **Q28** | **C** | XOR output is 1 when inputs are different ($0 \oplus 1 = 1, 1 \oplus 0 = 1$). It serves as an inequality or odd parity detector. |
| **Q29** | **A** | Distributive law: $(A + B)(A + C) = A\cdot A + AC + AB + BC = A(1 + C + B) + BC = A(1) + BC = A + BC$. |
| **Q30** | **A** | A 3-variable system has $2^3 = 8$ terms ($0$ through $7$). If minterms are $\sum m(1, 2, 4, 7)$, the remaining terms form the maxterms: $\prod M(0, 3, 5, 6)$. |

---
**Prepared with ❤️ for 1st Year CSE Core Students - 100% Midterm Success Guaranteed!**
