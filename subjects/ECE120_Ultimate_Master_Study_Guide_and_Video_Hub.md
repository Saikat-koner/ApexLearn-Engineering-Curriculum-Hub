# ECE120: Basic Electrical & Electronics Engineering, Digital Logic & IoT Systems
## 100-Percentile Comprehensive Master Study Guide, Hardware Schematics, Flowcharts & Resource Dossier
**Author / Lead Student:** Saikat Koner (Black Hat Coders 108)
**Target:** 100/100 Marks | Grade 'O' | 100th Percentile
**Course Code:** ECE120 | L:1 T:0 P:2 Credits:1

---

## 📑 Table of Contents
1. [Gold-Standard Textbooks & Deep Chapter Context](#textbooks)
2. [Curated YouTube Video Channels & High-Yield Playlists](#videos)
3. [Topic-by-Topic "What to Study, Where to Study & How to Study" Master Matrix](#study-matrix)
4. [Module 1: DC Circuit Analysis, Kirchhoff's Laws & Network Theorems](#module-1)
5. [Module 2: Semiconductor Diodes, V-I Characteristics & Rectifier Circuits](#module-2)
6. [Module 3: Bipolar Junction Transistors (BJT) & Transistor Biasing](#module-3)
7. [Module 4: Digital Logic Gates, Boolean Algebra & Universal Logic Realization](#module-4)
8. [Module 5: Combinational Logic Circuits (Half Adder, Full Adder & Subtractors)](#module-5)
9. [Module 6: Microcontrollers & Embedded IoT Systems (Arduino Uno & IR Sensors)](#module-6)
10. [Step-by-Step Worked Numerical Problems & Derivations](#numericals)
11. [Hardware Practical Experiments, Breadboard Wiring & Laboratory Precautions](#practicals)
12. [IoT Capstone Project Blueprint Matrix](#projects)
13. [Top 50 Guaranteed High-Frequency Exam & Viva Voce Questions with Full Answers](#viva-bank)
14. [100-Percentile 4-Tier Exam Scoring Strategy](#strategy)

---

<a name="textbooks"></a>
## 📚 1. Gold-Standard Textbooks & Deep-Dive Chapter Context

| Subject Area | Recommended Standard Textbook | Chapters, Core Main Concepts & Key Exam Takeaways |
| :--- | :--- | :--- |
| **DC Circuits & Basic Electrical** | *Basic Electrical and Electronics Engineering* — **D. P. Kothari & I. J. Nagrath** (McGraw Hill, 2nd Ed) | • **Ch 1 & 2 (DC Network Analysis & Theorems):** Ohm's Law, Kirchhoff's Laws (KVL $\sum V = 0$, KCL $\sum I = 0$), Voltage Divider Rule ($V_x = V_s \frac{R_x}{R_{total}}$), Current Divider Rule ($I_x = I_s \frac{R_{other}}{R_{total}}$), Star-Delta ($\text{Y}-\Delta$) Transformations, Thevenin's Theorem ($V_{th}, R_{th}$), Norton's Theorem ($I_N, R_N$), Maximum Power Transfer Theorem ($R_L = R_{th}$, $\eta = 50\%$).<br>• **Ch 3 (AC Fundamentals):** Sinusoidal waveform parameters, RMS value ($V_{rms} = V_m/\sqrt{2}$), Average value ($V_{avg} = 2V_m/\pi$), Form Factor ($FF = 1.11$), Peak Factor ($PF = 1.414$), Phasor representation, Impedance triangle ($Z = R + jX$). |
| **Electronic Devices & Circuits** | *Electronic Devices and Circuit Theory* (11th Ed) — **Robert L. Boylestad & Louis Nashelsky** (Pearson) | • **Ch 1 (Semiconductor Diodes):** Intrinsic vs Extrinsic semiconductors, P-N junction barrier potential (Si $0.7\text{V}$, Ge $0.3\text{V}$), Forward and Reverse bias V-I characteristics, Shockley Diode Equation ($I_D = I_0 (e^{V_D / \eta V_T} - 1)$), Static ($R_{DC} = V_D/I_D$) and Dynamic resistance ($r_d = \Delta V_D/\Delta I_D \approx 26\text{mV}/I_D$), Zener diode voltage regulator.<br>• **Ch 2 (Diode Applications & Rectifiers):** Half-Wave Rectifier ($\eta_{max} = 40.6\%$, PIV $= V_m$, Ripple Factor $\gamma = 1.21$), Full-Wave Center-Tapped and Bridge Rectifier ($\eta_{max} = 81.2\%$, PIV $= 2V_m$ or $V_m$, Ripple Factor $\gamma = 0.482$), Capacitive smoothing filters.<br>• **Ch 3 & 4 (BJT Transistors & Biasing):** BJT operation, NPN vs PNP, CE/CB/CC configurations, Input/Output characteristic curves, Current gains ($\alpha = I_C/I_E$, $\beta = I_C/I_B$, $\beta = \frac{\alpha}{1-\alpha}$), Transistor operating regions (Cut-off, Active, Saturation), Fixed Bias and Voltage Divider Bias circuits. |
| **Digital Logic & Combinational Design** | *Digital Logic and Computer Design* / *Digital Design* (6th Ed) — **M. Morris Mano & Michael D. Ciletti** (Pearson) | • **Ch 1 & 2 (Number Systems & Boolean Algebra):** Binary/Octal/Hexadecimal conversion, 1's and 2's complement subtraction, Boolean algebra postulates, De Morgan's Theorems ($(A+B)' = A'B'$, $(AB)' = A' + B'$), SOP (Minterms $\sum m$) and POS (Maxterms $\prod M$) standard forms.<br>• **Ch 3 (Gate-Level Minimization):** Karnaugh Maps (2, 3, 4-variable K-maps), Prime Implicants, Don't Care conditions ($d$), Universal Gates (NAND IC 7400, NOR IC 7402), Implementation of all basic gates using only NAND/NOR.<br>• **Ch 4 (Combinational Logic):** Half Adder ($\text{Sum} = A \oplus B$, $\text{Carry} = AB$), Full Adder ($\text{Sum} = A \oplus B \oplus C_{in}$, $C_{out} = AB + BC_{in} + AC_{in}$ using 2 Half Adders & OR gate), Half & Full Subtractors, 4-bit Ripple Carry Adder, Multiplexers (MUX) & Demultiplexers (DEMUX). |
| **IoT & Microcontrollers** | *Internet of Things: Architecture & Design Principles* — **Raj Kamal** (McGraw Hill) | • **Ch 1, 3 & 4 (Embedded Hardware & IoT):** ATmega328P architecture, Arduino Uno GPIO pinouts, Analog (ADC 10-bit $0-1023$) vs Digital (HIGH/LOW), PWM pins ($490/980\text{Hz}$), IR obstacle sensor triangulation & active-LOW comparator logic (LM393), Pull-up/Pull-down resistors, Interfacing Actuators (Relays, Buzzers, DC Motors via L298N). |

---

<a name="videos"></a>
## 📺 2. Curated YouTube Video Channels & High-Yield Playlists

| Topic / Module | Recommended Channel | Search Query / Direct Topic Link | Key Focus Area & Video Takeaways |
| :--- | :--- | :--- | :--- |
| **DC Circuit Analysis & Network Theorems** | **Neso Academy** / **Gate Smashers** | [Neso Academy Network Theory KVL KCL Thevenin](https://www.youtube.com/results?search_query=Neso+Academy+Network+Theory+KVL+KCL) | Node Voltage Analysis, Mesh Current Analysis, Thevenin & Norton equivalent derivations with solved numericals. |
| **AC Circuits & Phasors** | **All About Electronics** | [All About Electronics AC Circuit Analysis Phasors](https://www.youtube.com/results?search_query=All+About+Electronics+AC+Circuit+Analysis+Phasors) | RMS, Average, Form factor, Impedance triangle ($R-L-C$ series/parallel resonance). |
| **PN Junction Diodes & V-I Curve** | **All About Electronics** / **Neso Academy** | [All About Electronics PN Junction Diode V-I Characteristics](https://www.youtube.com/results?search_query=All+About+Electronics+PN+Junction+Diode+Characteristics) | Barrier potential derivation, forward/reverse bias, dynamic resistance, Zener diode breakdown. |
| **Half-Wave & Full-Wave Rectifiers** | **All About Electronics** | [All About Electronics Half Wave and Full Wave Rectifier](https://www.youtube.com/results?search_query=All+About+Electronics+Half+Wave+and+Full+Wave+Rectifier) | Circuit diagrams, derivation of efficiency ($\eta$), Ripple factor ($\gamma$), and PIV ratings. |
| **BJT Configurations & Biasing** | **Neso Academy** | [Neso Academy BJT Transistor Characteristics and Biasing](https://www.youtube.com/results?search_query=Neso+Academy+BJT+Transistor+Biasing) | CE/CB input/output curves, DC load line, Q-point stability, Voltage Divider Biasing. |
| **Logic Gates & Universal NAND/NOR** | **Neso Academy** | [Neso Academy Logic Gates and Universal Gates Realization](https://www.youtube.com/results?search_query=Neso+Academy+Logic+Gates+Universal+Gates) | Truth tables, De Morgan's theorems, implementing NOT, AND, OR, XOR, XNOR using NAND/NOR only. |
| **Adders, Subtractors & K-Maps** | **Gate Smashers** / **Neso Academy** | [Gate Smashers Half Adder and Full Adder](https://www.youtube.com/results?search_query=Gate+Smashers+Half+Adder+and+Full+Adder) | 2, 3, 4-variable K-maps, Half/Full adder logic diagrams, Ripple carry adders. |
| **Breadboard Lab Practicals (Exp 1-5)** | **All About Electronics** | [All About Electronics Breadboard Multimeter Diode Practical](https://www.youtube.com/results?search_query=All+About+Electronics+Breadboard+Practical+Experiments) | Physical hardware wiring, DMM voltage/current measurement, IC 74xx testing on trainer kit. |
| **Arduino Uno + IR Sensor Interfacing** | **Circuit Digest** | [Arduino Uno IR Sensor Interfacing Circuit Digest](https://www.youtube.com/results?search_query=Arduino+Uno+IR+Sensor+Interfacing+Circuit+Digest) | Complete wiring, active-LOW `digitalRead()` logic, Serial monitor debugging, buzzer alerts. |
| **Master Viva Voce Preparation** | **Gate Smashers** | [Digital Electronics & Basic Electrical Viva Questions Gate Smashers](https://www.youtube.com/results?search_query=Digital+Electronics+Viva+Questions+Gate+Smashers) | 50+ examiner questions, troubleshooting breadboard errors, IC pinout traps. |

---

<a name="study-matrix"></a>
## 🗺️ 3. Topic-by-Topic "What, Where & How to Study" Master Matrix

```
========================================================================================================================
MODULE / TOPIC       | WHAT TO STUDY (CORE CONCEPTS)        | WHERE TO STUDY (TEXTBOOK/SOURCE)  | HOW TO STUDY (STRATEGY)
========================================================================================================================
1. DC Circuits       | • Ohm's Law, KVL & KCL               | Kothari & Nagrath: Ch 1 & 2       | 1. Master sign conventions for loops
   & Theorems        | • Voltage & Current Divider Rules    | Neso Academy Network Theory       | 2. Solve 3 node-voltage problems
                     | • Thevenin, Norton, Max Power        |                                   | 3. Practice Thevenin Vth & Rth steps
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
2. Semiconductor     | • P-N Junction Barrier Potential     | Boylestad: Ch 1 & 2               | 1. Draw Si (0.7V) vs Ge (0.3V) curve
   Diodes &          | • Forward/Reverse V-I Characteristics| All About Electronics Diodes      | 2. Derive dynamic resistance rd
   Rectifiers        | • Half-Wave & Full-Wave Bridge       |                                   | 3. Compare Rectifier η, PIV, Ripple
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
3. Transistors (BJT) | • NPN vs PNP physical operation      | Boylestad: Ch 3 & 4               | 1. Memorize α = β/(1+β) and IE=IB+IC
   & Biasing         | • CE Configuration Input/Output      | Neso Academy Transistors          | 2. Draw CE output characteristic curves
                     | • DC Load Line, Q-Point & Biasing    |                                   | 3. Solve Voltage Divider Bias circuit
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
4. Digital Logic     | • Basic Gates (AND, OR, NOT, XOR)    | Morris Mano: Ch 2 & 3             | 1. Memorize 74xx IC pinouts (VCC 14)
   & Universal Gates | • Universal NAND (7400) & NOR (7402) | Neso Academy Digital Logic        | 2. Draw 5-NAND gate realizations
                     | • De Morgan's Theorems & K-Maps      |                                   | 3. Practice 3 & 4-variable K-maps
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
5. Combinational     | • Half Adder (Sum=A⊕B, Carry=AB)     | Morris Mano: Ch 4                 | 1. Derive truth tables & K-maps
   Adders/Subtractors| • Full Adder (2 HAs + 1 OR Gate)     | Gate Smashers Digital Logic       | 2. Draw gate-level circuit schematics
                     | • Ripple Carry Adder & Subtractors   |                                   | 3. Connect on breadboard using LEDs
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
6. Microcontrollers  | • ATmega328P Architecture & GPIOs    | Raj Kamal: Ch 1, 3 & 4            | 1. Understand Active-LOW IR module logic
   & Arduino IoT     | • IR Sensor (LM393 Comparator)       | Circuit Digest Arduino Tutorials  | 2. Write setup() & loop() C++ sketch
                     | • C++ Code (pinMode, digitalRead)    |                                   | 3. Calculate max GPIO current limits
========================================================================================================================
```

---

<a name="module-1"></a>
## ⚡ MODULE 1: DC Circuit Analysis, Kirchhoff's Laws & Network Theorems

### 1.1 Fundamental Laws & Rules
* **Ohm's Law:** $V = I \times R$, valid only at constant temperature for linear bilateral conductors.
* **Kirchhoff's Current Law (KCL):** The algebraic sum of currents entering any electrical node is zero.
  $$\sum I_{\text{entering}} = \sum I_{\text{leaving}} \iff \sum I = 0 \quad \text{(Conservation of Electric Charge)}$$
* **Kirchhoff's Voltage Law (KVL):** The algebraic sum of all voltages around any closed loop is zero.
  $$\sum V_{\text{rises}} - \sum V_{\text{drops}} = 0 \iff \sum V = 0 \quad \text{(Conservation of Energy)}$$
* **Voltage Divider Rule (Series Circuit):**
  $$V_x = V_s \times \left[ \frac{R_x}{R_1 + R_2 + \dots + R_n} \right] \quad \text{(Current } I \text{ is constant)}$$
* **Current Divider Rule (2 Parallel Branches):**
  $$I_1 = I_s \times \left[ \frac{R_2}{R_1 + R_2} \right], \quad I_2 = I_s \times \left[ \frac{R_1}{R_1 + R_2} \right] \quad \text{(Voltage } V \text{ is constant)}$$

```
                        DC CIRCUIT ANALYSIS LOGIC FLOWCHART
                                         │
                        [ COMPLEX RESISTIVE DC NETWORK ]
                                         │
        ┌────────────────────────────────┴────────────────────────────────┐
        ▼                                                                 ▼
[ MESH / LOOP ANALYSIS ]                                      [ NODAL VOLTAGE ANALYSIS ]
• Identify independent planar meshes                          • Identify Essential Nodes & pick 1 Ground (0V)
• Assign clockwise loop currents I1, I2                       • Apply KCL at each non-ground node
• Apply KVL: Sum(V) = 0                                       • Express branch currents: I = (V_node - V_adj)/R
• Solve simultaneous linear equations                         • Solve node voltages matrix [G][V] = [I]
        │                                                                 │
        └────────────────────────────────┬────────────────────────────────┘
                                         ▼
                             [ NETWORK THEOREMS ]
        ┌────────────────────────────────┼────────────────────────────────┐
        ▼                                ▼                                ▼
[ THEVENIN'S THEOREM ]         [ NORTON'S THEOREM ]         [ MAX POWER TRANSFER ]
Replace network with:          Replace network with:        Max power delivered when:
• Vth = Open-Circuit Voltage   • IN = Short-Circuit Current • R_Load = R_Thevenin
• Rth = Dead-source resistance • RN = Rth (in parallel)     • Max Efficiency η = 50%
```

### 1.2 Thevenin's Theorem Step-by-Step Procedure:
1. **Remove the Load Resistor ($R_L$):** Disconnect $R_L$ between terminal terminals $A$ and $B$.
2. **Calculate Open-Circuit Voltage ($V_{th}$):** Find the potential difference $V_{AB}$ across terminals $A-B$ using KVL or Nodal Analysis.
3. **Calculate Thevenin Resistance ($R_{th}$):** Deactivate all independent sources (replace independent **Voltage Sources with Short Circuits** and independent **Current Sources with Open Circuits**). Calculate equivalent resistance looking into terminals $A-B$.
4. **Draw Thevenin Equivalent Circuit:** Connect $V_{th}$ in series with $R_{th}$ and reconnect $R_L$.
5. **Calculate Load Current ($I_L$) & Load Voltage ($V_L$):**
   $$I_L = \frac{V_{th}}{R_{th} + R_L}, \quad V_L = I_L \times R_L$$

---

<a name="module-2"></a>
## 🔌 MODULE 2: Semiconductor Diodes, V-I Characteristics & Rectifiers

### 2.1 Semiconductor Physics & P-N Junction
* **Energy Bandgap ($E_g$):** Conductor ($E_g \approx 0\text{ eV}$), Semiconductor (Si: $1.1\text{ eV}$, Ge: $0.67\text{ eV}$, GaAs: $1.42\text{ eV}$), Insulator ($E_g > 5\text{ eV}$).
* **P-N Junction Formation:** P-region (doped with trivalent acceptors e.g., Boron; majority holes) joins N-region (doped with pentavalent donors e.g., Phosphorus; majority electrons). Carrier diffusion across junction creates immobile positive and negative ion cores forming the **Depletion Region** and built-in **Barrier Potential ($V_0$)**.
* **Biasing Modes:**
  * **Forward Bias:** (+) connected to P-type, (-) connected to N-type $\rightarrow$ narrows depletion width $\rightarrow$ exponential current conduction when $V > V_{\text{knee}}$ ($0.7\text{V}$ for Si, $0.3\text{V}$ for Ge).
  * **Reverse Bias:** (+) connected to N-type, (-) connected to P-type $\rightarrow$ widens depletion width $\rightarrow$ only tiny temperature-dependent reverse saturation current ($I_0 \approx \text{nA}$ for Si, $\mu\text{A}$ for Ge) flows until Zener or Avalanche breakdown occurs.

```
                      DIODE V-I CHARACTERISTICS & RECTIFIER PIPELINE
                                             │
      ┌──────────────────────────────────────┴──────────────────────────────────────┐
      ▼                                                                             ▼
[ FORWARD BIAS REGION ]                                                   [ REVERSE BIAS REGION ]
• Depletion layer thins out                                               • Depletion layer widens
• V < V_knee: Current ≈ 0 mA                                              • Tiny reverse saturation current I0
• V > V_knee (Si: 0.7V, Ge: 0.3V): Exponential rise                       • Breakdown at V_Z (Zener/Avalanche)
• Dynamic Resistance rd = ΔVD / ΔID ≈ 26mV / ID                           • Zener Diode operates as Voltage Regulator
      │                                                                             │
      └──────────────────────────────────────┬──────────────────────────────────────┘
                                             ▼
                              [ AC TO DC POWER RECTIFIERS ]
      ┌──────────────────────────────────────┴──────────────────────────────────────┐
      ▼                                                                             ▼
[ HALF-WAVE RECTIFIER (1 Diode) ]                               [ FULL-WAVE BRIDGE RECTIFIER (4 Diodes) ]
• Conducts during (+) half-cycle only                           • Conducts during both (+) and (-) half-cycles
• DC Output: Vdc = Vm / π = 0.318 Vm                            • DC Output: Vdc = 2Vm / π = 0.636 Vm
• Max Efficiency: η_max = 40.6%                                 • Max Efficiency: η_max = 81.2%
• Ripple Factor: γ = 1.21                                       • Ripple Factor: γ = 0.482
• Peak Inverse Voltage: PIV = Vm                                • Peak Inverse Voltage: PIV = Vm (per diode)
• Output Ripple Frequency: f_out = f_in (50 Hz)                 • Output Ripple Frequency: f_out = 2 * f_in (100 Hz)
```

### 2.2 Rectifier Comparison Performance Matrix (Guaranteed Exam Table):

| Parameter | Half-Wave Rectifier | Center-Tapped Full-Wave | Bridge Full-Wave Rectifier |
| :--- | :--- | :--- | :--- |
| **Number of Diodes** | 1 Diode | 2 Diodes | **4 Diodes** |
| **Transformer Required?** | Optional | Center-Tapped (Expensive/Bulky) | Standard / Optional |
| **$V_{dc}$ (Average DC Voltage)** | $V_m / \pi \approx 0.318 V_m$ | $2V_m / \pi \approx 0.636 V_m$ | **$2V_m / \pi \approx 0.636 V_m$** |
| **$I_{dc}$ (Average DC Current)** | $I_m / \pi$ | $2I_m / \pi$ | **$2I_m / \pi$** |
| **$V_{rms}$ (RMS Output Voltage)**| $V_m / 2 = 0.5 V_m$ | $V_m / \sqrt{2} \approx 0.707 V_m$ | **$V_m / \sqrt{2} \approx 0.707 V_m$** |
| **Max Rectification Efficiency ($\eta$)** | **$40.6\%$** | **$81.2\%$** | **$81.2\%$** |
| **Ripple Factor ($\gamma = \sqrt{(V_{rms}/V_{dc})^2 - 1}$)** | **$1.21$** (Very High) | **$0.482$** | **$0.482$** (Low) |
| **Peak Inverse Voltage (PIV)** | $V_m$ | $2V_m$ | **$V_m$** |
| **Output Fundamental Frequency**| $f_{in}$ ($50\text{ Hz}$) | $2f_{in}$ ($100\text{ Hz}$) | **$2f_{in}$ ($100\text{ Hz}$)** |
| **Transformer Utilization Factor (TUF)** | $0.287$ | $0.693$ | **$0.812$** (Highest) |

---

<a name="module-3"></a>
## 📻 MODULE 3: Bipolar Junction Transistors (BJT) & Transistor Biasing

### 3.1 BJT Physics & Current Relationships
* **Structure:** Three doped regions — **Emitter (E)** (heavily doped, medium size), **Base (B)** (very lightly doped, ultra-thin $\approx 1\,\mu\text{m}$), and **Collector (C)** (moderately doped, largest physical size for heat dissipation).
* **Fundamental Current Equation:**
  $$I_E = I_B + I_C \quad (\text{Emitter current is always the sum of Base and Collector currents})$$
* **Current Gain Parameters:**
  * **Common Base Current Gain ($\alpha$):** $\alpha = \frac{I_C}{I_E}$ (Typically $0.95 - 0.998$).
  * **Common Emitter Current Gain ($\beta$):** $\beta = \frac{I_C}{I_B}$ (Typically $50 - 300$).
  * **Inter-relationship Formula:**
    $$\beta = \frac{\alpha}{1 - \alpha}, \quad \alpha = \frac{\beta}{1 + \beta}$$

```
                               BJT OPERATING REGIONS & DC BIASING
                                               │
             ┌─────────────────────────────────┼─────────────────────────────────┐
             ▼                                 ▼                                 ▼
   [ CUT-OFF REGION ]                  [ ACTIVE REGION ]                [ SATURATION REGION ]
   • E-B Junction: Reverse Biased      • E-B Junction: Forward Biased   • E-B Junction: Forward Biased
   • C-B Junction: Reverse Biased      • C-B Junction: Reverse Biased   • C-B Junction: Forward Biased
   • IC ≈ 0 mA, VCE ≈ VCC              • Linear Amplification: IC = β*IB• Fully ON: VCE(sat) ≈ 0.2V
   • APPLICATION: Digital Switch OFF   • APPLICATION: Linear Amplifier  • APPLICATION: Digital Switch ON
             │                                 │                                 │
             └─────────────────────────────────┼─────────────────────────────────┘
                                               ▼
                              [ TRANSISTOR BIASING CIRCUITS ]
             ┌─────────────────────────────────┴─────────────────────────────────┐
             ▼                                                                   ▼
   [ FIXED BIAS CIRCUIT ]                                            [ VOLTAGE DIVIDER BIAS (SELF-BIAS) ]
   • Simple, uses single RB resistor                                 • Most stable, independent of β variations
   • Highly unstable: Q-point shifts with β & temp                   • R1 & R2 set fixed base voltage: V_B = VCC * R2/(R1+R2)
   • Stability Factor: S = 1 + β (Poor)                              • Emitter resistor RE provides negative feedback: S ≈ 1
```

---

<a name="module-4"></a>
## 🧩 MODULE 4: Digital Logic Gates, Boolean Algebra & Universal Logic

### 4.1 Truth Tables & Logic Gate Taxonomy
* **Basic Gates:** AND ($Y = A \cdot B$), OR ($Y = A + B$), NOT ($Y = A'$).
* **Universal Gates:** NAND ($Y = (A \cdot B)'$), NOR ($Y = (A + B)'$).
* **Arithmetic / Parity Gates:** XOR ($Y = A \oplus B = A'B + AB'$), XNOR ($Y = (A \oplus B)' = AB + A'B'$).

```
========================================================================================================
GATE NAME  | LOGIC SYMBOL (ASCII)    | BOOLEAN EQUATION          | TRUTH TABLE (A, B -> Output Y)
========================================================================================================
NOT Gate   | A ──[|>o── Y            | Y = A'                    | A=0->1, A=1->0
AND Gate   | A ──[ & ]── Y           | Y = A · B                 | 00->0, 01->0, 10->0, 11->1
OR Gate    | A ──[ ≥1]── Y           | Y = A + B                 | 00->0, 01->1, 10->1, 11->1
NAND Gate  | A ──[ & ]o── Y          | Y = (A · B)'              | 00->1, 01->1, 10->1, 11->0 (Universal)
NOR Gate   | A ──[ ≥1]o── Y          | Y = (A + B)'              | 00->1, 01->0, 10->0, 11->0 (Universal)
XOR Gate   | A ──[ =1]── Y           | Y = A ⊕ B = A'B + AB'     | 00->0, 01->1, 10->1, 11->0 (Odd 1s Detector)
XNOR Gate  | A ──[ =1]o── Y          | Y = (A ⊕ B)' = AB + A'B'  | 00->1, 01->0, 10->0, 11->1 (Equivalence Gate)
========================================================================================================
```

### 4.2 Universal Gate Realizations (NAND & NOR Gate Counts):
| Target Gate to Realize | Minimum Number of 2-Input NAND Gates | Minimum Number of 2-Input NOR Gates |
| :--- | :---: | :---: |
| **NOT Gate** | **1** | **1** |
| **AND Gate** | **2** | **3** |
| **OR Gate** | **3** | **2** |
| **NOR Gate** | **4** | **1** |
| **NAND Gate** | **1** | **4** |
| **XOR Gate** | **4** | **5** |
| **XNOR Gate** | **5** | **4** |

### 4.3 Standard 74xx TTL IC Pin Configurations (DIP-14 Package):
* **Pin 14:** $V_{CC} = +5.0\text{V}$ Regulated DC Power.
* **Pin 7:** $GND = 0\text{V}$ Ground.
* **IC 7400:** Quad 2-Input NAND Gate (Pins 1,2 Inputs $\rightarrow$ Pin 3 Output; Pins 4,5 Inputs $\rightarrow$ Pin 6 Output).
* **IC 7408:** Quad 2-Input AND Gate (Pins 1,2 Inputs $\rightarrow$ Pin 3 Output).
* **IC 7432:** Quad 2-Input OR Gate (Pins 1,2 Inputs $\rightarrow$ Pin 3 Output).
* **IC 7486:** Quad 2-Input XOR Gate (Pins 1,2 Inputs $\rightarrow$ Pin 3 Output).
* **⚠️ CRITICAL EXAM TRAP — IC 7402 (Quad 2-Input NOR):** Unlike all other standard 74xx ICs, **Pin 1 is Output** and **Pins 2 & 3 are Inputs**; **Pin 4 is Output** and **Pins 5 & 6 are Inputs**!

---

<a name="module-5"></a>
## ➕ MODULE 5: Combinational Logic Circuits (Adders & Subtractors)

### 5.1 Half Adder & Full Adder Design Equations
* **Half Adder:** Adds two 1-bit inputs ($A, B$).
  $$\text{Sum } (S) = A \oplus B = A'B + AB' \quad (\text{IC 7486 XOR})$$
  $$\text{Carry } (C) = A \cdot B \quad (\text{IC 7408 AND})$$
* **Full Adder:** Adds three 1-bit inputs ($A, B, C_{in}$).
  $$\text{Sum } (S) = A \oplus B \oplus C_{in}$$
  $$\text{Carry-Out } (C_{out}) = AB + BC_{in} + AC_{in} = AB + C_{in}(A \oplus B)$$
* **Full Adder Realization Rule:** A Full Adder is constructed using **2 Half Adders and 1 OR Gate** (or 9 NAND gates).

```
HALF ADDER LOGIC CIRCUIT:
A ───────*─────────────┐ +---+
         │             └─┤ = ├─── Sum = A ⊕ B (IC 7486 XOR)
B ───*───┼─────────────┌─┤ 1 │
     │   │             │ +---+
     │   └─────┐ +---+ │
     │         └─┤ & ├─┴───────── Carry = A · B (IC 7408 AND)
     └───────────┤   │
                 +---+

FULL ADDER BLOCK ARCHITECTURE:
A ───┐ +--------------+  Sum1   +--------------+  Sum = A ⊕ B ⊕ Cin
B ───┴─┤ HALF ADDER 1 ├─────────┤ HALF ADDER 2 ├─────────────────────►
       |              | Carry1  |              | Carry2
Cin ───┼──────────────┼─────────┤              ├───┐
       +--------------+         +--------------+   │  +---+
                                                   └──┤ ≥ ├── Cout = Carry1 + Carry2
                                                      │ 1 ├──► = AB + BCin + ACin
                                                   ┌──┤   │
                                                   │  +---+
```

### 5.2 Full Adder Comprehensive Truth Table:
| Input A | Input B | Carry-In ($C_{in}$) | Sum ($S = A \oplus B \oplus C_{in}$) | Carry-Out ($C_{out}$) |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

---

<a name="module-6"></a>
## 🤖 MODULE 6: Microcontrollers & Embedded IoT Systems (Arduino Uno & IR)

### 6.1 Arduino Uno (ATmega328P) Hardware Specifications
* **Core MCU:** Microchip ATmega328P 8-bit AVR RISC microcontroller.
* **Operating Clock Speed:** $16\text{ MHz}$ External Quartz Crystal Oscillator.
* **Memory Architecture:** $32\text{ KB}$ Flash Memory ($0.5\text{ KB}$ used by Bootloader), $2\text{ KB}$ SRAM (Static RAM for runtime variables), $1\text{ KB}$ EEPROM (Non-volatile storage).
* **I/O Pinout Breakdown:**
  * **14 Digital I/O Pins (Pins 0 to 13):** Logic $0 = 0\text{V}$, Logic $1 = 5\text{V}$.
  * **6 PWM Pins (Pins 3, 5, 6, 9, 10, 11):** Output pseudo-analog voltages ($0-5\text{V}$) via `analogWrite(pin, 0-255)` at $490\text{ Hz}$ / $980\text{ Hz}$.
  * **6 Analog Input Channels (Pins A0 to A5):** Built-in 10-bit Successive Approximation ADC ($2^{10} = 1024$ quantization levels: $0\text{V} \rightarrow 0$, $5\text{V} \rightarrow 1023$, Resolution $= 5\text{V}/1024 \approx 4.88\text{ mV}$).
  * **UART Serial Pins:** Pin 0 ($RX$) and Pin 1 ($TX$).
* **Current Limits:** Max DC current per GPIO pin $= 40\text{ mA}$ (Recommended safe limit $\le 20\text{ mA}$). Total package limit $= 200\text{ mA}$.

```
                             ARDUINO UNO + IR SENSOR SYSTEM ARCHITECTURE
                                                  │
                 ┌────────────────────────────────┴────────────────────────────────┐
                 ▼                                                                 ▼
      [ SENSOR HARDWARE MODULE ]                                       [ ATmega328P EMBEDDED CONTROLLER ]
      • IR Transmitter LED (940nm)                                     • 16 MHz Clock, 32KB Flash, 2KB SRAM
      • IR Photodiode Receiver                                         • Pin D2 configured as INPUT (pinMode)
      • LM393 High-Speed Voltage Comparator                            • Pin D13 configured as OUTPUT
      • 10kΩ Potentiometer Sensitivity Trimmer                         • UART Hardware Serial @ 9600 Baud
      • ACTIVE-LOW LOGIC OUTPUT:                                       • Embedded Execution Loop:
        - Obstacle Present  -> Pin OUT = LOW (0V)                        1. digitalRead(2)
        - Path Clear        -> Pin OUT = HIGH (5V)                       2. if (state == LOW) -> digitalWrite(13, HIGH)
                                                                         3. Serial.println("Obstacle Alert!")
```

### 6.2 Production Arduino C++ Sketch (`intelligent_ir_system.ino`):
```cpp
// ECE120: Intelligent Embedded Systems - IR Obstacle Detection & Buzzer Alert
const int IR_SENSOR_PIN = 2;  // Digital Pin 2 connected to IR module OUT
const int ALERT_LED_PIN = 13; // Built-in LED & External Buzzer on Pin 13

void setup() {
    pinMode(IR_SENSOR_PIN, INPUT);    // Configure D2 as digital input
    pinMode(ALERT_LED_PIN, OUTPUT);   // Configure D13 as digital output
    Serial.begin(9600);               // Initialize Serial UART communication at 9600 bps
    Serial.println("==================================================");
    Serial.println("ECE120: Intelligent IR Obstacle Alert System Ready");
    Serial.println("==================================================");
}

void loop() {
    // Read the digital logic state from the IR sensor module
    int sensorState = digitalRead(IR_SENSOR_PIN);

    // CRITICAL ACTIVE-LOW LOGIC:
    // Sensor outputs LOW (0V) when obstacle reflects IR light
    if (sensorState == LOW) {
        digitalWrite(ALERT_LED_PIN, HIGH); // Sound buzzer and light alert LED
        Serial.println("[ALERT] Obstacle Detected! Object within proximity range.");
    } else {
        digitalWrite(ALERT_LED_PIN, LOW);  // Turn off alert LED and buzzer
        Serial.println("[STATUS] Path Clear. No obstacle detected.");
    }

    delay(200); // 200ms sampling delay to prevent Serial buffer congestion
}
```

---

<a name="numericals"></a>
## 🧮 10. Step-by-Step Worked Numerical Problems & Derivations

### Problem 1: Thevenin Equivalent Circuit Calculation
**Question:** In a DC circuit, a $20\text{V}$ voltage source is connected in series with an $8\ \Omega$ resistor, which connects to a node with a parallel $12\ \Omega$ resistor and a load resistor $R_L = 6\ \Omega$ across terminals $A-B$. Calculate $V_{th}$, $R_{th}$, and the load current $I_L$.
* **Step 1 (Find $V_{th}$):** Remove $R_L$. By Voltage Divider across the $12\ \Omega$ resistor:
  $$V_{th} = V_{AB} = 20\text{V} \times \left( \frac{12}{8 + 12} \right) = 20 \times \frac{12}{20} = \mathbf{12\text{ V}}$$
* **Step 2 (Find $R_{th}$):** Short-circuit the $20\text{V}$ source. Looking into terminals $A-B$:
  $$R_{th} = 8\ \Omega \parallel 12\ \Omega = \frac{8 \times 12}{8 + 12} = \frac{96}{20} = \mathbf{4.8\ \Omega}$$
* **Step 3 (Find $I_L$):**
  $$I_L = \frac{V_{th}}{R_{th} + R_L} = \frac{12\text{V}}{4.8\ \Omega + 6\ \Omega} = \frac{12}{10.8} = \mathbf{1.111\text{ A}}$$

---

### Problem 2: Resistor 4-Band Color Code Calculation
**Question:** Determine the resistance and tolerance range for a resistor with color bands: **Yellow - Violet - Orange - Gold**.
* **Band 1 (Yellow):** $4$
* **Band 2 (Violet):** $7$
* **Band 3 (Orange - Multiplier):** $10^3\ \Omega = 1\text{ k}\Omega$
* **Band 4 (Gold - Tolerance):** $\pm 5\%$
* **Calculation:**
  $$R = 47 \times 10^3\ \Omega \pm 5\% = \mathbf{47\text{ k}\Omega \pm 5\%}$$
  $$\text{Tolerance Value} = 47\text{ k}\Omega \times 0.05 = 2.35\text{ k}\Omega$$
  $$\text{Range} = [47 - 2.35]\text{ k}\Omega \text{ to } [47 + 2.35]\text{ k}\Omega = \mathbf{44.65\text{ k}\Omega \text{ to } 49.35\text{ k}\Omega}$$

---

### Problem 3: Diode Dynamic Resistance Calculation
**Question:** A Silicon diode operating at room temperature ($V_T = 26\text{ mV}$) carries a forward current of $I_D = 2\text{ mA}$ with an ideality factor $\eta = 1$. Calculate its dynamic resistance ($r_d$).
* **Formula:**
  $$r_d = \frac{\eta V_T}{I_D} = \frac{1 \times 26\text{ mV}}{2\text{ mA}} = \mathbf{13\ \Omega}$$

---

<a name="practicals"></a>
## 🧰 11. Hardware Practical Experiments & Laboratory Precautions

### Summary of All 6 Lab Experiments:
1. **Exp 1: The Electronics Expedition:** Identification of active/passive components, DMM measurements (voltage, current, resistance, diode check), and breadboard rail architecture.
2. **Exp 2: Divider Quest:** Breadboard verification of Voltage Divider Rule ($V_2 = V_s \frac{R_2}{R_1+R_2}$), Current Divider Rule, KVL ($\sum V = 0$), and KCL ($\sum I = 0$).
3. **Exp 3: Diode Voltage Quest:** Forward bias V-I curve plotting for 1N4007 Silicon diode, Knee Voltage determination ($0.7\text{V}$), and dynamic resistance ($r_d$).
4. **Exp 4: Universal Gate Adventure:** Realization of NOT, AND, OR, XOR using Universal NAND (IC 7400) and NOR (IC 7402) on digital trainer kit.
5. **Exp 5: Adder Chronicles:** Breadboard wiring and truth table validation of Half Adder (IC 7486 XOR + IC 7408 AND) and Full Adder (2 HAs + IC 7432 OR).
6. **Exp 6: Intelligent Systems:** Interfacing Arduino Uno with Active-LOW IR sensor module (LM393) and triggering LED/Buzzer alerts.

### ⚠️ Top 5 Crucial Laboratory Precautions & Exam Gotchas:
1. **Never Connect DMM Ammeter in Parallel:** An ammeter has near $0\ \Omega$ internal resistance. Connecting it in parallel across a power rail causes a direct short circuit, instantly blowing the internal fuse!
2. **Mandatory Diode Current-Limiting Resistor:** Always insert a $330\ \Omega$ or $1\text{ k}\Omega$ resistor in series with a diode. Direct connection causes thermal runaway and destroys the diode.
3. **IC 7402 NOR Gate Pinout Exception:** In IC 7402, **Pin 1 is Output** and **Pins 2 & 3 are Inputs** (opposite of standard 7400/7408 ICs).
4. **Active-LOW IR Sensor Condition:** Obstacle detection pulls the OUT pin to **$0\text{V}$ (LOW)**; code must check `if (digitalRead(pin) == LOW)`.
5. **TTL Supply Voltage Cap:** Apply strictly $+5.0\text{V} \pm 5\%$ to Pin 14 ($V_{CC}$) and Pin 7 ($GND$). Voltages $>5.5\text{V}$ permanently damage TTL chips.

---

<a name="projects"></a>
## 🚀 12. IoT Capstone Project Blueprint Matrix

| Domain | Capstone Project Title | Sensors & Modules | Actuators & Interfaces | Key System Architecture |
| :--- | :--- | :--- | :--- | :--- |
| **Smart Infrastructure** | Automated Smart Street Lighting | LDR (Light Dependent Resistor), IR Proximity Sensor | 5V Relay Module, High-Power LED Lamp | Lights turn ON only at night when vehicles/pedestrians are detected by IR sensors. |
| **Environmental Monitoring** | Industrial Gas & Temperature Monitor | MQ-135 Gas Sensor, DHT11 Temp/Humidity | 16x2 I2C LCD, 5V Active Piezo Buzzer | Real-time air quality index monitoring with audio alarm when toxic thresholds are breached. |
| **Robotics & Automation** | Autonomous Obstacle-Avoiding Rover | HC-SR04 Ultrasonic Sensor, SG90 Servo, IR | L298N Dual H-Bridge Motor Driver, 2x DC Motors | Ultrasonic radar mounted on servo scans $180^\circ$ to steer rover away from obstacles. |
| **Healthcare & Biomedical** | Contactless Patient Health Monitor | MAX30102 Pulse Oximeter & Heart-Rate Sensor | 0.96" I2C OLED Display, ESP8266 Wi-Fi | Real-time $SpO_2$ and BPM monitoring streamed to a cloud IoT dashboard. |

---

<a name="viva-bank"></a>
## 🎯 13. Top 50 Guaranteed High-Frequency Exam & Viva Voce Questions

1. **Q: State Ohm's Law and its limitations.**
   *A:* At constant temperature, the current flowing through a conductor is directly proportional to the potential difference across it ($V = IR$). Limitations: Non-linear devices (diodes, transistors, vacuum tubes) and non-metallic conductors do not obey Ohm's Law.
2. **Q: State Kirchhoff's Current Law (KCL) and its conservation principle.**
   *A:* The algebraic sum of currents meeting at any electrical junction is zero ($\sum I = 0$). It is based on the **Law of Conservation of Electric Charge**.
3. **Q: State Kirchhoff's Voltage Law (KVL) and its conservation principle.**
   *A:* The algebraic sum of voltages in any closed loop is zero ($\sum V = 0$). It is based on the **Law of Conservation of Energy**.
4. **Q: What is the internal resistance of an ideal voltmeter and an ideal ammeter?**
   *A:* Ideal Voltmeter $= \infty$ (draws zero current); Ideal Ammeter $= 0\ \Omega$ (causes zero voltage drop).
5. **Q: What is the Loading Effect in a voltage divider circuit?**
   *A:* When a voltmeter or load resistor ($R_L$) is connected in parallel with $R_2$, the equivalent resistance drops ($R_2 \parallel R_L$), causing the measured voltage to be lower than the calculated open-circuit voltage.
6. **Q: State Thevenin's Theorem.**
   *A:* Any linear, bilateral, active two-terminal DC network can be replaced by an equivalent circuit consisting of a single independent voltage source $V_{th}$ in series with a resistance $R_{th}$.
7. **Q: State Norton's Theorem.**
   *A:* Any linear two-terminal DC network can be replaced by an equivalent circuit consisting of an independent current source $I_N$ in parallel with a resistance $R_N$ ($R_N = R_{th}$).
8. **Q: State the Maximum Power Transfer Theorem.**
   *A:* Maximum DC power is transferred from a source to a load when the load resistance equals the Thevenin resistance of the network ($R_L = R_{th}$). The maximum efficiency at this point is $50\%$.
9. **Q: What is the Knee / Cut-in Voltage of Silicon and Germanium Diodes?**
   *A:* Silicon $= \approx 0.7\text{V}$, Germanium $= \approx 0.3\text{V}$.
10. **Q: Why is Silicon preferred over Germanium in semiconductor diodes?**
    *A:* Silicon has a wider bandgap ($1.1\text{ eV}$ vs $0.67\text{ eV}$), drastically lower reverse saturation current ($\text{nA}$ vs $\mu\text{A}$), and much higher maximum operating temperature ($175^\circ\text{C}$ vs $75^\circ\text{C}$).
11. **Q: What is Peak Inverse Voltage (PIV)?**
    *A:* The maximum reverse bias voltage a diode can withstand without breaking down.
12. **Q: What is the maximum efficiency of a Half-Wave and Full-Wave Rectifier?**
    *A:* Half-Wave $= 40.6\%$, Full-Wave (Bridge/Center-Tapped) $= 81.2\%$.
13. **Q: What is the Ripple Factor of a Half-Wave and Full-Wave Rectifier?**
    *A:* Half-Wave $\gamma = 1.21$, Full-Wave $\gamma = 0.482$.
14. **Q: What is the fundamental ripple frequency of a Full-Wave Rectifier with $50\text{ Hz}$ AC input?**
    *A:* $f_{out} = 2 \times f_{in} = 2 \times 50\text{ Hz} = 100\text{ Hz}$.
15. **Q: What is the operating principle of a Zener Diode?**
    *A:* A heavily doped PN diode that operates in the reverse breakdown region to maintain a constant DC voltage across its terminals despite variations in input voltage or load current.
16. **Q: Differentiate between Avalanche Breakdown and Zener Breakdown.**
    *A:* Zener Breakdown occurs in heavily doped diodes at low voltages ($<6\text{V}$) via quantum mechanical electron tunneling with a negative temperature coefficient. Avalanche Breakdown occurs in lightly doped diodes at higher voltages ($>6\text{V}$) via carrier impact ionization with a positive temperature coefficient.
17. **Q: What are the three regions of a Bipolar Junction Transistor (BJT)?**
    *A:* Emitter (heavily doped), Base (very thin and lightly doped), Collector (moderately doped, largest physical area for heat dissipation).
18. **Q: What is the fundamental BJT current relation?**
    *A:* $I_E = I_B + I_C$.
19. **Q: Define $\alpha$ and $\beta$ of a transistor and give their mathematical relation.**
    *A:* $\alpha = I_C/I_E$ (CB gain), $\beta = I_C/I_B$ (CE gain). Relation: $\beta = \frac{\alpha}{1-\alpha}$, $\alpha = \frac{\beta}{1+\beta}$.
20. **Q: What are the biasing conditions for the three operating regions of a BJT?**
    *A:* Active Region: E-B forward, C-B reverse (Amplifier). Cut-off Region: E-B reverse, C-B reverse (Switch OFF). Saturation Region: E-B forward, C-B forward (Switch ON).
21. **Q: Why is the Voltage Divider Bias circuit the most popular BJT biasing method?**
    *A:* Because its operating point (Q-point) is exceptionally stable and virtually independent of transistor current gain ($\beta$) variations and temperature fluctuations.
22. **Q: Why are NAND and NOR called Universal Logic Gates?**
    *A:* Because any Boolean logic expression and all standard logic gates (NOT, AND, OR, XOR, XNOR) can be constructed solely using NAND gates or solely using NOR gates.
23. **Q: State De Morgan's First and Second Laws.**
    *A:* 1st: $(A + B)' = A' \cdot B'$; 2nd: $(A \cdot B)' = A' + B'$.
24. **Q: How many 2-input NAND gates are needed to implement an XOR gate?**
    *A:* Exactly **4 NAND gates**.
25. **Q: How many 2-input NOR gates are needed to implement an XOR gate?**
    *A:* Exactly **5 NOR gates**.
26. **Q: What are the standard VCC and Ground pin numbers for a standard 14-pin TTL IC?**
    *A:* Pin 14 is $V_{CC} (+5\text{V})$ and Pin 7 is $GND (0\text{V})$.
27. **Q: What is the pinout exception for IC 7402 (NOR Gate)?**
    *A:* In IC 7402, Pin 1 is the Output, while Pins 2 and 3 are Inputs.
28. **Q: What are the defined TTL logic voltage levels?**
    *A:* Logic HIGH $= 2.0\text{V} - 5.0\text{V}$ (typically $>2.4\text{V}$); Logic LOW $= 0.0\text{V} - 0.8\text{V}$ (typically $<0.4\text{V}$). The region between $0.8\text{V}$ and $2.0\text{V}$ is indeterminate.
29. **Q: What happens if a TTL input is left floating/unconnected?**
    *A:* It acts as a Logic HIGH ($1$), but is susceptible to noise pickup.
30. **Q: What is Propagation Delay in digital logic gates?**
    *A:* The time delay between the transition of an input signal and the corresponding transition of the output signal (typically $\approx 10\text{ ns}$ in standard TTL).
31. **Q: What is Fan-Out of a logic gate?**
    *A:* The maximum number of standard logic inputs that the output of a single gate can drive without degrading logic voltage levels (typically $10$ for standard TTL).
32. **Q: What is the Boolean expression for the Sum and Carry of a Half Adder?**
    *A:* $\text{Sum} = A \oplus B$, $\text{Carry} = A \cdot B$.
33. **Q: What is the Boolean expression for the Sum and Carry-Out of a Full Adder?**
    *A:* $\text{Sum} = A \oplus B \oplus C_{in}$, $C_{out} = AB + BC_{in} + AC_{in} = AB + C_{in}(A \oplus B)$.
34. **Q: How many Half Adders and OR gates are needed to build a Full Adder?**
    *A:* **2 Half Adders and 1 OR Gate** (or 9 NAND gates).
35. **Q: What is a Ripple Carry Adder and what is its primary limitation?**
    *A:* An $n$-bit parallel adder formed by cascading $n$ Full Adders. Limitation: Propagation delay increases linearly with $n$ because each stage must wait for the carry bit from the preceding stage.
36. **Q: What is the difference between a Half Subtractor and a Half Adder?**
    *A:* Half Adder: $\text{Sum} = A \oplus B$, $\text{Carry} = AB$. Half Subtractor: $\text{Difference} = A \oplus B$, $\text{Borrow} = A'B$.
37. **Q: What is the main microcontroller chip on an Arduino Uno board?**
    *A:* Microchip **ATmega328P** (8-bit AVR RISC microcontroller).
38. **Q: What is the operating clock speed and supply voltage of Arduino Uno?**
    *A:* Clock Speed $= 16\text{ MHz}$, Operating Voltage $= 5\text{V}$ DC.
39. **Q: What are the Flash, SRAM, and EEPROM memory sizes on ATmega328P?**
    *A:* Flash $= 32\text{ KB}$, SRAM $= 2\text{ KB}$, EEPROM $= 1\text{ KB}$.
40. **Q: What is the difference between `digitalRead()` and `analogRead()` in Arduino?**
    *A:* `digitalRead()` returns binary `HIGH` ($5\text{V}$) or `LOW` ($0\text{V}$). `analogRead()` reads ADC pins ($0-5\text{V}$) and returns a 10-bit quantized integer value from $0$ to $1023$.
41. **Q: What is PWM in Arduino Uno and which pins support it?**
    *A:* Pulse Width Modulation simulates analog voltages by varying the duty cycle of a digital square wave via `analogWrite(pin, 0-255)`. Pins: **3, 5, 6, 9, 10, 11**.
42. **Q: What is the maximum current that an Arduino Uno GPIO pin can source?**
    *A:* Absolute maximum $= 40\text{ mA}$ (Recommended continuous operating current $\le 20\text{ mA}$).
43. **Q: How does an IR Proximity Sensor module work?**
    *A:* An IR LED emits infrared radiation at $\approx 940\text{nm}$. When an object is within range, radiation reflects back to an IR photodiode receiver, altering its reverse resistance, which is converted to a digital signal by an onboard LM393 voltage comparator.
44. **Q: Why does the standard IR sensor module operate on Active-LOW logic?**
    *A:* When an obstacle is detected, the comparator output is pulled to Ground ($0\text{V}$ / `LOW`). When no obstacle is present, the output is pulled to $5\text{V}$ (`HIGH`).
45. **Q: Why do black objects fail to trigger an IR sensor?**
    *A:* Black surfaces absorb infrared radiation instead of reflecting it back to the receiver photodiode.
46. **Q: What is the purpose of the potentiometer trimmer on an IR sensor module?**
    *A:* To adjust the reference threshold voltage of the LM393 comparator, thereby calibrating the detection distance ($2\text{cm} - 30\text{cm}$).
47. **Q: What is the function of a pull-up or pull-down resistor?**
    *A:* To hold a digital input pin at a deterministic HIGH or LOW voltage state when no active driving signal is connected, preventing floating indeterminate states caused by EMI noise.
48. **Q: What are the color bands for a $1\text{ k}\Omega \pm 5\%$ resistor?**
    *A:* Brown (1), Black (0), Red ($\times 10^2$), Gold ($\pm 5\%$).
49. **Q: What are the color bands for a $10\text{ k}\Omega \pm 5\%$ resistor?**
    *A:* Brown (1), Black (0), Orange ($\times 10^3$), Gold ($\pm 5\%$).
50. **Q: What are the color bands for a $330\ \Omega \pm 5\%$ resistor?**
    *A:* Orange (3), Orange (3), Brown ($\times 10^1$), Gold ($\pm 5\%$).

---

<a name="strategy"></a>
## 🏆 14. 100-Percentile 4-Tier Exam Scoring Strategy

```
+---------------------------------------------------------------------------------------------------+
|                        100-PERCENTILE 4-TIER ECE120 EXAM EXECUTION ROADMAP                        |
+---------------------------------------------------------------------------------------------------+
                                                  |
        ┌─────────────────────────────────────────┼─────────────────────────────────────────┐
        ▼                                         ▼                                         ▼
[ TIER 1: HIGH-WEIGHTAGE CORE ]         [ TIER 2: SEMICONDUCTOR & BJT ]           [ TIER 3: LOGIC & EMBEDDED ]
• DC Circuits: KVL, KCL, Dividers       • Diode V-I characteristics & Knee math   • Truth tables & K-map simplification
• Thevenin & Norton solved numericals   • Half/Full-Wave Rectifier parameters     • Universal NAND/NOR gate realization
• Resistor 4-Band color code math       • BJT CE curves & Voltage Divider Bias    • Full Adder design (2 HAs + 1 OR)
• Max Power Transfer (RL = Rth, η=50%)  • Dynamic resistance formula (rd = 26/ID) • Arduino GPIO, Active-LOW IR code
        │                                         │                                         │
        └─────────────────────────────────────────┼─────────────────────────────────────────┘
                                                  ▼
                                 [ TIER 4: PERFECT EXAM PRESENTATION ]
        1. Always begin every numerical with an explicit GIVEN DATA & FORMULA block.
        2. Draw large, clean ASCII or schematic circuit diagrams with clear pinouts (Pin 14 VCC, Pin 7 GND).
        3. For every law or theorem, write the underlying Conservation Principle (KVL=Energy, KCL=Charge).
        4. In lab viva, highlight exact component values (Si 0.7V, 16MHz clock, 40mA GPIO limit, Active-LOW IR).
```

---
*Generated and Compiled for Saikat Koner (Black Hat Coders 108). All Rights Reserved.*
