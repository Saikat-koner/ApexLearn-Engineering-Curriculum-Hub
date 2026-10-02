# MTH165: Engineering Mathematics / Mathematics for Engineers
## 100-Percentile Comprehensive Master Study Guide, Video Master Hub & Mathematical Reference Dossier
**Author / Lead Student:** Saikat Koner (Black Hat Coders 108)
**Target:** 100/100 Marks | Grade 'O' | 100th Percentile
**Course Code:** MTH165 | L:3 T:1 P:0 Credits:4

---

## 📑 Table of Contents
1. [Gold-Standard Textbooks & Deep Chapter Context](#textbooks)
2. [Curated Video Study Guide & Deep Concept Explanations](#video-master-hub)
3. [Unit-by-Unit "What to Study, Where to Study & How to Study" Master Matrix](#study-matrix)
4. [Unit I: Matrix Methods, Systems of Equations & Eigenvalues](#unit-i)
5. [Unit II: Differential Calculus, Theorems, Indeterminate Forms & Extrema](#unit-ii)
6. [Unit III: Fundamentals of Integral Calculus, Properties & Reduction Formulas](#unit-iii)
7. [Unit IV: Multivariate Differentiation, Euler's Theorem & Lagrange Multipliers](#unit-iv)
8. [Unit V: Multivariable Integration (Double/Triple), Jacobians & Applications](#unit-v)
9. [Unit VI: Fourier Series, Dirichlet Conditions, Half-Range & Parseval's Identity](#unit-vi)
10. [High-Yield Standard Problem Solving Templates](#worked-problems)
11. [Top 50 Master Viva Voce & Conceptual Exam Question Bank](#viva-voce)
12. [100-Percentile 4-Tier Exam Scoring & Step-Marking Defense Strategy](#exam-strategy)

---

<a name="textbooks"></a>
## 📚 1. Gold-Standard Textbooks & Deep-Dive Chapter Context

| Unit | Subject Area | Recommended Standard Textbook | Chapters, Core Main Concepts & Key Exam Takeaways |
| :--- | :--- | :--- | :--- |
| **Unit I** | **Matrix Methods & Linear Systems** | *Higher Engineering Mathematics* (44th Ed) — **B.S. Grewal** / *Advanced Engg. Math* — **R.K. Jain & S.R.K. Iyengar** | • **Grewal Ch 2 (Linear Algebra / Matrices):** Rank of a matrix via Echelon form & Normal form $[I_r\ 0; 0\ 0]$. Linear dependence/independence ($c_1 v_1 + \dots + c_k v_k = 0$). Rouché-Capelli Theorem for $AX=B$: Unique solution ($\rho(A) = \rho([A\|B]) = n$), Infinite solutions ($\rho(A) = \rho([A\|B]) < n$), Inconsistent ($\rho(A) < \rho([A\|B])$). Gauss Elimination vs Gauss-Jordan inversion.<br>• **Jain & Iyengar Ch 2 (Eigenvalue Problems):** Characteristic equation $\det(A - \lambda I) = 0$, Eigenvector determination $(A - \lambda I)X = 0$, Algebraic Multiplicity (AM) vs Geometric Multiplicity (GM). Fundamental theorems: $\sum \lambda_i = \text{trace}(A)$, $\prod \lambda_i = \det(A)$. Cayley-Hamilton Theorem ($P(A) = 0$), matrix polynomial reduction, computation of $A^{-1}$ and $A^k$. |
| **Unit II** | **Differential Calculus & Applications** | *Higher Engineering Mathematics* — **B.S. Grewal** / *NCERT Class XII Part I* | • **Grewal Ch 4 (Differential Calculus):** Standard derivatives, Chain rule, Parametric differentiation ($dy/dx = g'(t)/f'(t)$, $d^2y/dx^2 = \frac{d}{dt}(dy/dx) \cdot \frac{1}{f'(t)}$), Implicit differentiation ($dy/dx = -F_x / F_y$), Logarithmic differentiation for $y = f(x)^{g(x)}$. Leibniz's Theorem for $n$-th derivative: $(uv)_n = \sum \binom{n}{k} u_{n-k} v_k$.<br>• **Grewal Ch 4 & 5 (Mean Value Theorems & Extrema):** Rolle's Theorem, LMVT ($f'(c) = \frac{f(b)-f(a)}{b-a}$), CMVT ($\frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)}$). Taylor's & Maclaurin's series with Lagrange remainder. L'Hôpital's rule across 7 indeterminate forms ($0/0, \infty/\infty, 0\cdot\infty, \infty-\infty, 0^0, \infty^0, 1^\infty$). Single-variable Maxima/Minima and inflection points ($f''(x) = 0$). |
| **Unit III** | **Integral Calculus Fundamentals** | *NCERT Class XII Part II* / *Higher Engineering Mathematics* — **B.S. Grewal** | • **NCERT Ch 7 & Grewal Ch 6 (Integral Calculus):** Standard integration techniques: Substitution ($x = a\sin\theta, a\tan\theta, a\sec\theta$), Integration by parts ($\int u v dx = u v_1 - u' v_2 + u'' v_3 - \dots$ via ILATE rule), Partial fraction decomposition.<br>• **Grewal Ch 6 (Definite Integrals & Properties):** King's Property $\int_a^b f(x)dx = \int_a^b f(a+b-x)dx$, Symmetry properties for Even/Odd functions $\int_{-a}^a f(x)dx$, $\int_0^{2a} f(x)dx$ split, Wallis' formula & Gamma function reduction: $\int_0^{\pi/2} \sin^m x \cos^n x dx = \frac{\Gamma(\frac{m+1}{2})\Gamma(\frac{n+1}{2})}{2\Gamma(\frac{m+n+2}{2})}$. |
| **Unit IV** | **Multivariate Differential Calculus** | *Advanced Engineering Mathematics* — **R.K. Jain & S.R.K. Iyengar** / *B.S. Grewal* | • **Jain & Iyengar Ch 5 & Grewal Ch 5 (Partial Differentiation):** Limits & Continuity in $\mathbb{R}^2$ (Path test $y=mx, y=mx^2$), Partial derivatives ($f_x, f_y$), Total Differential $df = f_x dx + f_y dy$, Composite chain rule. Euler's Theorem on Homogeneous Functions ($x u_x + y u_y = nu$, $x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = n(n-1)u$), Function of function extension $x u_x + y u_y = n \frac{F(u)}{F'(u)}$.<br>• **Grewal Ch 5 (Two-Variable Extrema):** Stationary points ($f_x=0, f_y=0$), Discriminant $\Delta = rt - s^2$ ($r=f_{xx}, s=f_{xy}, t=f_{yy}$). Local min ($\Delta > 0, r > 0$), Local max ($\Delta > 0, r < 0$), Saddle point ($\Delta < 0$), Inconclusive ($\Delta = 0$). Lagrange's Undetermined Multipliers: $\nabla f + \lambda \nabla g = 0$. |
| **Unit V** | **Multivariable Integration & Applications** | *Higher Engineering Mathematics* — **B.S. Grewal** / *Jain & Iyengar* | • **Grewal Ch 7 (Multiple Integrals):** Double integrals $\iint_R f(x,y) dx dy$, Change of order of integration (identifying vertical vs horizontal strips, reversing boundary equations), Triple integrals $\iiint_V f(x,y,z) dx dy dz$.<br>• **Grewal Ch 7 (Jacobians & Coordinate Transformations):** Jacobian transformation $J = \frac{\partial(x,y)}{\partial(u,v)}$, Polar coordinates ($dx dy = r dr d\theta$), Cylindrical ($r dr d\theta dz$), Spherical ($r^2 \sin\phi dr d\phi d\theta$). Physical applications: Area of 2D regions ($A = \iint dx dy$), Volume of solids under surfaces ($V = \iint z dx dy = \iiint dx dy dz$). |
| **Unit VI** | **Fourier Series & Harmonic Analysis** | *Advanced Engineering Mathematics* — **R.K. Jain & S.R.K. Iyengar** / *B.S. Grewal* | • **Jain & Iyengar Ch 10 & Grewal Ch 10 (Fourier Series):** Periodic functions, Dirichlet's conditions, Euler's Fourier coefficients ($a_0, a_n, b_n$) over $[-\pi, \pi]$ and $[-L, L]$. Convergence at jump discontinuities: $\frac{f(x^+) + f(x^-)}{2}$.<br>• **Grewal Ch 10 (Symmetry & Half-Range Series):** Even functions ($b_n = 0$, Fourier Cosine Series), Odd functions ($a_0=0, a_n=0$, Fourier Sine Series). Half-Range expansions over $[0, L]$. Parseval's Theorem ($\frac{1}{L}\int_{-L}^L [f(x)]^2 dx = \frac{a_0^2}{2} + \sum (a_n^2 + b_n^2)$) and famous series deductions ($\sum \frac{1}{n^2} = \frac{\pi^2}{6}$, $\sum \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$). |

---

<a name="video-master-hub"></a>
## 📺 2. Curated Video Study Guide & Deep Concept Explanations

Each video listed below is handpicked for its mathematical rigor, step-by-step clarity, and direct alignment with university examination question patterns.

### 🎥 Unit I: Matrix Methods, Linear Systems & Eigenvalues

1. **Rank of Matrix (Echelon Form & Normal Form)** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Rank of Matrix Masterclass](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Rank+of+Matrix+Echelon+Form+Normal+Form)
   - **Core Concepts Covered:** How to apply elementary row operations without altering the matrix rank; transforming to Row Echelon form ($a_{ij} = 0$ for $i > j$); counting non-zero rows; transforming to Normal Form $[I_r\ 0; 0\ 0]$ using both row and column operations.
   - **Exam Scoring Trigger:** Never use column operations when solving linear systems $AX=B$; only use row operations to preserve solution vectors.

2. **System of Linear Equations ($AX = B$) & Consistency Tests** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Consistency of Linear Equations](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+System+of+Linear+Equations+Consistency+Rouche+Capelli)
   - **Core Concepts Covered:** Augmented matrix $[A|B]$ construction; Rouché-Capelli consistency conditions; determining conditions for $\lambda$ and $\mu$ to yield (i) No solution, (ii) Unique solution, (iii) Infinite solutions.
   - **Exam Scoring Trigger:** Always write the rank comparison step explicitly: $\rho(A) = \rho([A|B]) = n$ before stating the nature of the solution.

3. **Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Eigenvalues & Cayley Hamilton Theorem](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Eigenvalues+Eigenvectors+Cayley+Hamilton+Theorem)
   - **Core Concepts Covered:** Characteristic equation shortcut $\lambda^3 - \text{tr}(A)\lambda^2 + (M_{11}+M_{22}+M_{33})\lambda - |A| = 0$; finding orthogonal eigenvectors for repeated eigenvalues; verifying $P(A) = 0$; computing $A^{-1}$ and $A^4$.
   - **Exam Scoring Trigger:** Double-check eigenvalue sum ($\sum \lambda_i = \text{Trace}(A)$) and product ($\prod \lambda_i = \det(A)$) before calculating eigenvectors.

4. **Essence of Linear Algebra: 3D Visual Transformations** — *3Blue1Brown*
   - **Direct Link:** [Watch 3Blue1Brown Linear Algebra Series](https://www.youtube.com/results?search_query=3Blue1Brown+Essence+of+Linear+Algebra)
   - **Core Concepts Covered:** Visualizing determinants as volume scaling factors, eigenvectors as directional invariants under linear transforms, and column spaces as spans.

---

### 🎥 Unit II: Differential Calculus, Leibniz's Theorem & Mean Value Theorems

1. **Leibniz's Theorem for $n$-th Derivative of a Product** — *Bhagwan Singh Vishwakarma (BSV Maths)*
   - **Direct Link:** [Watch Leibniz Theorem BSV Maths](https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Leibniz+Theorem+nth+derivative)
   - **Core Concepts Covered:** $(uv)_n = \sum_{r=0}^n \binom{n}{r} u_{n-r} v_r$; choosing $v$ such that higher derivatives terminate; standard university proofs like proving $(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2+m^2)y_n = 0$ for $y = \sin(m \sin^{-1} x)$ or $y = (x^2-1)^n$.
   - **Exam Scoring Trigger:** Differentiate the base equation twice, cross-multiply to remove square roots and fractions, then apply Leibniz's theorem term by term.

2. **Mean Value Theorems (Rolle's, LMVT, Cauchy's MVT)** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Rolle LMVT CMVT Masterclass](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Rolle+Theorem+LMVT+Cauchy+Mean+Value+Theorem)
   - **Core Concepts Covered:** Verifying continuity and differentiability conditions; algebraic and trigonometric functions; finding exact point $c \in (a, b)$; Cauchy's theorem ratio $\frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)}$.
   - **Exam Scoring Trigger:** State the differentiability domain as OPEN interval $(a, b)$ and continuity domain as CLOSED interval $[a, b]$.

3. **Taylor's & Maclaurin's Series Expansions** — *Bhagwan Singh Vishwakarma*
   - **Direct Link:** [Watch Taylor and Maclaurin Series BSV](https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Taylor+Maclaurin+Series+Expansion)
   - **Core Concepts Covered:** Expansion in powers of $(x - a)$ vs powers of $x$; Lagrange remainder term; expanding $\ln(1+x), e^x, \sin x, \tan^{-1} x$.

4. **Indeterminate Forms & Multi-Stage L'Hôpital's Rule** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Indeterminate Forms L'Hopital Tricks](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Indeterminate+Forms+L+Hospital+Rule+Shortcuts)
   - **Core Concepts Covered:** Solving $0/0$ and $\infty/\infty$; converting $0 \cdot \infty$ and $\infty - \infty$; logarithmic conversion of exponential indeterminate forms $1^\infty, 0^0, \infty^0$.

---

### 🎥 Unit III: Fundamentals of Integral Calculus & Reduction Formulas

1. **Definite Integrals & King's Property** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch King's Property Definite Integrals](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Definite+Integrals+Properties+King+Rule)
   - **Core Concepts Covered:** $\int_0^a f(x)dx = \int_0^a f(a-x)dx$; evaluating $I = \int_0^{\pi/2} \frac{\sqrt{\sin x}}{\sqrt{\sin x} + \sqrt{\cos x}} dx = \frac{\pi}{4}$; proving $\int_0^{\pi/2} \ln(\sin x) dx = -\frac{\pi}{2}\ln 2$.
   - **Exam Scoring Trigger:** Add the original equation $I$ and transformed equation $I$ to create $2I = \int 1 dx$.

2. **Wallis' Formula & Beta-Gamma Reductions** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Wallis Formula Beta Gamma Function](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Wallis+Formula+Beta+Gamma+Function)
   - **Core Concepts Covered:** Solving $\int_0^{\pi/2} \sin^m x \cos^n x dx$; integer numerator/denominator countdown rules; Gamma function relation $\Gamma(n) = (n-1)!$ and $\Gamma(1/2) = \sqrt{\pi}$.

---

### 🎥 Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema

1. **Limits & Path Tests of Two Variables** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Two Variable Limits Path Test](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Limits+and+Continuity+of+Two+Variables+Path+Test)
   - **Core Concepts Covered:** $\epsilon-\delta$ limit definitions; testing paths $y = mx, y = mx^2, y = mx^3, y = mx - x^2$; proving non-existence of limits when the resulting value depends on slope $m$.

2. **Euler's Theorem on Homogeneous Functions & Composite Extensions** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Euler Theorem Homogeneous Functions](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Euler+Theorem+on+Homogeneous+Functions)
   - **Core Concepts Covered:** Identifying homogeneous degree $n$; proving $x u_x + y u_y = nu$; second order $x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = n(n-1)u$; solving composite inverse trig functions $u = \sin^{-1}(\dots)$ via $x u_x + y u_y = n \frac{F(u)}{F'(u)}$.

3. **Maxima & Minima of Two Variables ($rt - s^2$)** — *Bhagwan Singh Vishwakarma*
   - **Direct Link:** [Watch Two Variable Maxima Minima BSV](https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Maxima+and+Minima+Two+Variables+rt-s2)
   - **Core Concepts Covered:** Solving $f_x = 0$ and $f_y = 0$; calculating $r = f_{xx}, s = f_{xy}, t = f_{yy}$; constructing the discriminant table; distinguishing local minimum ($r > 0$), local maximum ($r < 0$), and saddle points ($\Delta < 0$).

4. **Lagrange's Method of Undetermined Multipliers** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Lagrange Multipliers Masterclass](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Lagrange+Method+of+Undetermined+Multipliers)
   - **Core Concepts Covered:** Auxiliary function $F = f + \lambda g$; setting partial derivatives to 0; optimizing rectangular box volume inside an ellipsoid $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$.

---

### 🎥 Unit V: Multivariable Integration, Change of Order & Jacobians

1. **Change of Order of Integration in Double Integrals** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Change of Order Double Integrals](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Change+of+Order+of+Integration+Double+Integral)
   - **Core Concepts Covered:** Sketching boundary curves $y = f_1(x), y = f_2(x), x=a, x=b$; identifying bounded region $R$; changing vertical strip $(dy dx)$ to horizontal strip $(dx dy)$ for integrands like $\int e^{-y^2} dy$ or $\int \frac{\sin y}{y} dy$.

2. **Jacobians & Coordinate Transformations (Polar, Cylindrical, Spherical)** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Jacobians Transformation Masterclass](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Jacobians+Properties+Coordinate+Transformation)
   - **Core Concepts Covered:** Jacobian determinant calculation; $J \cdot J' = 1$; composite chain rule for Jacobians; differential area elements ($dx dy = r dr d\theta$) and volume elements ($dV = \rho^2 \sin\phi d\rho d\phi d\theta$).

3. **Double & Triple Integrals for Area and Volume Calculation** — *Bhagwan Singh Vishwakarma*
   - **Direct Link:** [Watch Double Triple Integrals Area Volume](https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Area+and+Volume+Multiple+Integrals)
   - **Core Concepts Covered:** Calculating area between parabolas $y^2 = 4ax$ and $x^2 = 4ay$; volume of sphere $x^2 + y^2 + z^2 = a^2$ via spherical coordinates.

---

### 🎥 Unit VI: Fourier Series, Dirichlet Conditions & Half-Range Expansions

1. **Fourier Series Full Concept & Euler's Formulas** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Fourier Series Masterclass GP](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Fourier+Series+Euler+Formula+Full+Concept)
   - **Core Concepts Covered:** Periodic functions; Dirichlet conditions; integration by parts with $\cos(n\pi) = (-1)^n$ and $\sin(n\pi) = 0$; evaluating coefficients $a_0, a_n, b_n$ in $[-\pi, \pi]$ and $[-L, L]$.

2. **Even & Odd Functions in Fourier Series (Cosine vs Sine Series)** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Even Odd Fourier Series](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Fourier+Series+Even+Odd+Functions)
   - **Core Concepts Covered:** Symmetry reduction: Even function $\implies b_n = 0$; Odd function $\implies a_0 = a_n = 0$; expanding $f(x) = x^2$ or $f(x) = |x|$.

3. **Half-Range Fourier Sine and Cosine Series & Parseval's Identity** — *Dr. Gajendra Purohit*
   - **Direct Link:** [Watch Half Range Fourier Series & Parseval](https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Half+Range+Fourier+Series+Parseval+Identity)
   - **Core Concepts Covered:** Half-range Sine series ($b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}dx$); Half-range Cosine series; Parseval's formula $\frac{1}{L}\int [f(x)]^2 dx = \frac{a_0^2}{2} + \sum(a_n^2+b_n^2)$; deducing $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$, $\sum \frac{1}{n^4} = \frac{\pi^4}{90}$.

---

<a name="study-matrix"></a>
## 🗺️ 3. Unit-by-Unit "What to Study, Where to Study & How to Study" Master Matrix

```
========================================================================================================================
UNIT / MODULE        | WHAT TO STUDY (CORE CONCEPTS)        | WHERE TO STUDY (TEXTBOOK/SOURCE)  | HOW TO STUDY (STRATEGY)
========================================================================================================================
Unit I: Matrix       | • Rank via Row Echelon Form          | Grewal: Ch 2                      | 1. Transform A to Upper Triangular
Methods & Systems    | • Rouché-Capelli System Consistency  | Jain & Iyengar: Ch 2              | 2. Apply [A|B] augmented matrix test
                     | • Eigenvalues, Eigenvectors & CHT    | Dr. Gajendra Purohit Linear Alg   | 3. Verify CHT: A^3 - c1 A^2 + c2 A - c3 I = 0
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit II: Differential| • Parametric, Implicit & Leibniz     | Grewal: Ch 4 & 5                  | 1. Memorize Leibniz n-th derivative formula
Calculus & Theorems  | • Rolle's, LMVT, CMVT & Taylor/Mac   | NCERT Class XII Part I            | 2. Master L'Hôpital across 0/0 and 1^inf
                     | • L'Hôpital & Single Variable Extrema| BSV Maths Engineering Calculus    | 3. State exact differentiability preconditions
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit III: Integral   | • Substitution, Parts (ILATE)        | NCERT Class XII Part II           | 1. Apply King's Rule: f(a+b-x)
Calculus Fundamentals| • Definite Integral Symmetry & Kings | Grewal: Ch 6                      | 2. Use Bernoulli's generalized parts rule
                     | • Wallis Formula & Gamma Reductions  | Dr. Gajendra Purohit Integrals    | 3. Solve (sin^m x * cos^n x) via Gamma
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit IV: Multivariate| • Limits (Path Test) & Total Diff    | Jain & Iyengar: Ch 5              | 1. Prove limit non-existence via y=mx^k
Differentiation      | • Euler's Theorem for Homogeneous Fn | Grewal: Ch 5                      | 2. Master x u_x + y u_y = n F(u)/F'(u)
                     | • Extrema (rt - s^2) & Lagrange Mult | Gajendra Purohit Multivariate     | 3. Form auxiliary F = f + lambda * g
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit V: Multivariable| • Double Integrals & Strip Switching | Grewal: Ch 7                      | 1. Sketch region R & mark strip endpoints
Integration          | • Jacobians & Polar/Cylindrical/Spher| Jain & Iyengar: Ch 5 & 7          | 2. Transform dx dy -> r dr dtheta
                     | • Area (∬ dx dy) & Volume (∭ dx dy dz)| BSV Maths Multiple Integrals      | 3. Identify symmetric solid boundaries
---------------------+--------------------------------------+-----------------------------------+---------------------------------------
Unit VI: Fourier     | • Euler's Coefficients (a0, an, bn)  | Jain & Iyengar: Ch 10             | 1. Check Even/Odd symmetry first
Series & Harmonics   | • Dirichlet Conditions & Jump Points | Grewal: Ch 10                     | 2. Integrate by parts with [cos(n pi)=(-1)^n]
                     | • Half-Range Series & Parseval's ID  | Dr. Gajendra Purohit Fourier      | 3. Deduce sum(1/n^2) = pi^2 / 6
========================================================================================================================
```

---

<a name="unit-i"></a>
## 📐 4. Unit I: Matrix Methods, Linear Systems & Eigenvalues

```
+----------------------------------------------------------------------------------------------------+
|                               UNIT I MATHEMATICAL EXECUTION PIPELINE                               |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [Matrix A (m x n)] ---> [Row Echelon Form] ---> Rank rho(A) = Non-zero Rows Count                 |
|                                                                                                    |
|  System AX = B:                                                                                    |
|  • Augmented Matrix [A | B]                                                                        |
|    |-- If rho(A) != rho([A|B])          ===> INCONSISTENT (No Solution)                            |
|    |-- If rho(A) == rho([A|B]) == n     ===> CONSISTENT (Unique Trivial / Non-Trivial Solution)    |
|    +-- If rho(A) == rho([A|B]) = r < n  ===> CONSISTENT (Infinite Solutions, n-r free variables)  |
|                                                                                                    |
|  Eigenvalues & Eigenvectors:                                                                       |
|  • Characteristic Eq: |A - lambda * I| = lambda^3 - tr(A)*lambda^2 + M_ii*lambda - det(A) = 0      |
|  • Eigenvector Eq: (A - lambda_i * I) X = 0                                                        |
|  • Cayley-Hamilton Theorem: A^3 - c1*A^2 + c2*A - c3*I = 0 ===> Multiply by A^-1 to isolate A^-1  |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
```

### 🔑 Key Theorems & Invariants
1. **Rank Properties:** $\rho(A) = \rho(A^T) = \rho(A A^T)$. If $A$ is $m \times n$, $\rho(A) \le \min(m, n)$.
2. **Eigenvalue Invariants:**
   - $\sum_{i=1}^n \lambda_i = \text{Trace}(A) = \sum a_{ii}$
   - $\prod_{i=1}^n \lambda_i = \det(A)$
   - If $A$ has eigenvalues $\lambda_i$, then $A^k$ has eigenvalues $\lambda_i^k$, $A^{-1}$ has eigenvalues $\frac{1}{\lambda_i}$, and $kA + cI$ has eigenvalues $k\lambda_i + c$.
   - Real Symmetric matrices always possess **real eigenvalues** and mutually **orthogonal eigenvectors**.
3. **Cayley-Hamilton Invariant:** Every square matrix satisfies its own characteristic polynomial equation. $A^{-1} = -\frac{1}{a_0} \left( A^{n-1} + a_1 A^{n-2} + \dots + a_{n-1} I \right)$.

---

<a name="unit-ii"></a>
## 📈 5. Unit II: Differential Calculus, Theorems, Indeterminate Forms & Extrema

### 🔑 Fundamental Formulas & Theorems
1. **Parametric & Implicit Derivatives:**
   $$\frac{dy}{dx} = \frac{g'(t)}{f'(t)}, \quad \frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right) \cdot \frac{dt}{dx} = \frac{g''(t)f'(t) - g'(t)f''(t)}{[f'(t)]^3}$$
   $$\text{If } F(x,y) = 0 \implies \frac{dy}{dx} = -\frac{\partial F / \partial x}{\partial F / \partial y} = -\frac{F_x}{F_y}$$
2. **Leibniz's Rule for $n$-th Derivative of a Product:**
   $$(u \cdot v)_n = u_n v + \binom{n}{1} u_{n-1} v_1 + \binom{n}{2} u_{n-2} v_2 + \dots + \binom{n}{r} u_{n-r} v_r + \dots + u v_n$$
3. **Mean Value Theorems:**
   - **Rolle's Theorem:** If $f(x)$ is continuous in $[a, b]$, differentiable in $(a, b)$, and $f(a) = f(b)$, then $\exists\ c \in (a, b)$ such that $f'(c) = 0$.
   - **Lagrange's MVT:** If $f(x)$ is continuous in $[a, b]$ and differentiable in $(a, b)$, then $\exists\ c \in (a, b)$ such that $f'(c) = \frac{f(b) - f(a)}{b - a}$.
   - **Cauchy's MVT:** $\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$.
4. **Taylor's & Maclaurin's Series:**
   $$f(x) = f(0) + x f'(0) + \frac{x^2}{2!} f''(0) + \frac{x^3}{3!} f'''(0) + \dots + \frac{x^n}{n!} f^{(n)}(0) + \dots$$
5. **Indeterminate Forms & L'Hôpital's Transformations:**
   - $0/0$ or $\infty/\infty$: Directly apply $\lim \frac{f'(x)}{g'(x)}$.
   - $0 \cdot \infty$: Rewrite as $\frac{f(x)}{1/g(x)}$ ($0/0$) or $\frac{g(x)}{1/f(x)}$ ($\infty/\infty$).
   - $1^\infty, 0^0, \infty^0$: Let $y = f(x)^{g(x)} \implies \ln y = g(x) \ln f(x)$, solve limit $L$, then answer is $e^L$.

---

<a name="unit-iii"></a>
## 🔄 6. Unit III: Fundamentals of Integral Calculus & Reduction Formulas

### 🔑 Core Definite Integral Properties
1. **King's Rule (Most Frequently Exam Tested):**
   $$\int_a^b f(x) dx = \int_a^b f(a + b - x) dx \implies \int_0^a f(x) dx = \int_0^a f(a - x) dx$$
2. **Even / Odd Functions:**
   $$\int_{-a}^a f(x) dx = \begin{cases} 2 \int_0^a f(x) dx & \text{if } f(-x) = f(x) \text{ (Even)} \\ 0 & \text{if } f(-x) = -f(x) \text{ (Odd)} \end{cases}$$
3. **Split Property for $2a$:**
   $$\int_0^{2a} f(x) dx = \begin{cases} 2 \int_0^a f(x) dx & \text{if } f(2a - x) = f(x) \\ 0 & \text{if } f(2a - x) = -f(x) \end{cases}$$
4. **Wallis' & Gamma Reduction Formulas:**
   $$\int_0^{\pi/2} \sin^m x \cos^n x dx = \frac{\Gamma\left(\frac{m+1}{2}\right) \Gamma\left(\frac{n+1}{2}\right)}{2 \Gamma\left(\frac{m+n+2}{2}\right)}$$
   $$\text{For integers: } \int_0^{\pi/2} \sin^n x dx = \frac{(n-1)(n-3)\dots(1 \text{ or } 2)}{n(n-2)\dots(2 \text{ or } 1)} \times K \quad \left(K = \frac{\pi}{2} \text{ if } n \text{ is even}, K = 1 \text{ if odd}\right)$$

---

<a name="unit-iv"></a>
## 🌐 7. Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema

```
+----------------------------------------------------------------------------------------------------+
|                         TWO-VARIABLE EXTREMA DECISION MATRIX (rt - s^2)                            |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  1. Find Stationary Points: Solve f_x = 0  and  f_y = 0 simultaneously for (a, b)                  |
|  2. Calculate Second Partial Derivatives at (a, b):                                                |
|     • r = f_xx(a, b)                                                                               |
|     • s = f_xy(a, b)                                                                               |
|     • t = f_yy(a, b)                                                                               |
|  3. Evaluate Discriminant: Delta = rt - s^2                                                        |
|                                                                                                    |
|     |-- If Delta > 0 and r > 0  ===> LOCAL MINIMUM  (f(a,b) is minimum value)                      |
|     |-- If Delta > 0 and r < 0  ===> LOCAL MAXIMUM  (f(a,b) is maximum value)                      |
|     |-- If Delta < 0            ===> SADDLE POINT    (Neither max nor min)                         |
|     +-- If Delta = 0            ===> INCONCLUSIVE    (Further higher-order testing required)       |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
```

### 🔑 Euler's Theorem on Homogeneous Functions
If $u = f(x, y)$ is a homogeneous function of degree $n$ (i.e., $f(tx, ty) = t^n f(x, y)$):
1. **First-Order Euler Form:**
   $$x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n u$$
2. **Second-Order Euler Form:**
   $$x^2 \frac{\partial^2 u}{\partial x^2} + 2xy \frac{\partial^2 u}{\partial x \partial y} + y^2 \frac{\partial^2 u}{\partial y^2} = n(n - 1) u$$
3. **Composite Function Extension (Crucial Exam Formula):**
   $$\text{If } f(u) = H(x, y) \text{ is homogeneous of degree } n \implies x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = n \frac{f(u)}{f'(u)} = G(u)$$
   $$x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = G(u)[G'(u) - 1]$$

### 🔑 Lagrange's Method of Undetermined Multipliers
To optimize $f(x, y, z)$ subject to constraint $\phi(x, y, z) = 0$:
1. Form auxiliary function: $F(x, y, z, \lambda) = f(x, y, z) + \lambda \phi(x, y, z)$.
2. Set partial derivatives to zero: $F_x = 0, F_y = 0, F_z = 0, F_\lambda = \phi(x, y, z) = 0$.
3. Solve for $(x, y, z, \lambda)$ to find constrained extrema.

---

<a name="unit-v"></a>
## 🧊 8. Unit V: Multivariable Integration (Double/Triple), Jacobians & Applications

```
+----------------------------------------------------------------------------------------------------+
|                         CHANGE OF ORDER OF INTEGRATION STRATEGY MATRIX                             |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  Given: I = ∫_{x=a}^b ∫_{y=f1(x)}^{f2(x)} F(x,y) dy dx   (Vertical Strip Integration)             |
|                                                                                                    |
|  Step 1: Extract and sketch the 4 boundary curves: x=a, x=b, y=f1(x), y=f2(x)                     |
|  Step 2: Shade the exact intersection region R and determine all corner vertices.                 |
|  Step 3: Switch to a HORIZONTAL STRIP:                                                             |
|          • Left boundary curve:  x = g1(y)                                                         |
|          • Right boundary curve: x = g2(y)                                                         |
|          • Bottom y-limit:       y = c                                                             |
|          • Top y-limit:          y = d                                                             |
|  Step 4: Reconstructed Integral: I = ∫_{y=c}^d ∫_{x=g1(y)}^{g2(y)} F(x,y) dx dy                  |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
```

### 🔑 Coordinate Transformations & Jacobians
1. **Jacobian Definition:**
   $$J = \frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix}, \quad J \cdot J' = 1$$
2. **Polar Coordinates:** $x = r\cos\theta, y = r\sin\theta \implies dx dy = r dr d\theta$.
3. **Cylindrical Coordinates:** $x = r\cos\theta, y = r\sin\theta, z = z \implies dV = r dr d\theta dz$.
4. **Spherical Polar Coordinates:** $x = \rho\sin\phi\cos\theta, y = \rho\sin\phi\sin\theta, z = \rho\cos\phi \implies dV = \rho^2 \sin\phi d\rho d\phi d\theta$.
5. **Physical Applications:**
   - **Area:** $A = \iint_R dx dy = \iint_R r dr d\theta$
   - **Volume:** $V = \iint_R z dx dy = \iiint_V dx dy dz$

---

<a name="unit-vi"></a>
## 🌊 9. Unit VI: Fourier Series, Dirichlet Conditions, Half-Range & Parseval's Identity

### 🔑 Euler's Fourier Formulas in $[-L, L]$
$$f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty \left( a_n \cos\frac{n\pi x}{L} + b_n \sin\frac{n\pi x}{L} \right)$$
$$a_0 = \frac{1}{L} \int_{-L}^L f(x) dx, \quad a_n = \frac{1}{L} \int_{-L}^L f(x) \cos\frac{n\pi x}{L} dx, \quad b_n = \frac{1}{L} \int_{-L}^L f(x) \sin\frac{n\pi x}{L} dx$$

### 🔑 Dirichlet's Preconditions for Fourier Expansion
A function $f(x)$ can be expanded in a Fourier series if in the interval of definition:
1. $f(x)$ is periodic, single-valued, and bounded (finite).
2. $f(x)$ has a finite number of discontinuities in any one period.
3. $f(x)$ has a finite number of local maxima and minima in any one period.

### 🔑 Convergence at Point of Discontinuity
At a jump discontinuity $x = x_0$, the Fourier series converges to the arithmetic mean:
$$f(x_0) = \frac{f(x_0^+) + f(x_0^-)}{2}$$

### 🔑 Symmetry & Half-Range Expansions in $[0, L]$
- **Even Function ($f(-x) = f(x)$):** $b_n = 0$, $a_0 = \frac{2}{L}\int_0^L f(x)dx$, $a_n = \frac{2}{L}\int_0^L f(x)\cos\frac{n\pi x}{L}dx$ (Fourier Cosine Series).
- **Odd Function ($f(-x) = -f(x)$):** $a_0 = 0, a_n = 0$, $b_n = \frac{2}{L}\int_0^L f(x)\sin\frac{n\pi x}{L}dx$ (Fourier Sine Series).
- **Parseval's Identity:**
  $$\frac{1}{L} \int_{-L}^L [f(x)]^2 dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty (a_n^2 + b_n^2)$$

---

<a name="worked-problems"></a>
## 📝 10. High-Yield Standard Problem Solving Templates

### Problem 1 (Unit I): Cayley-Hamilton Theorem & Inverse
**Problem:** For matrix $A = \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$, verify Cayley-Hamilton Theorem and compute $A^{-1}$ and $A^4$.
**Step 1:** Characteristic Equation $|A - \lambda I| = (1-\lambda)(-1-\lambda) - 4 = \lambda^2 - 1 - 4 = \lambda^2 - 5 = 0$.
**Step 2:** CHT states $A^2 - 5I = 0$.
$A^2 = \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix} = 5I \implies A^2 - 5I = 0$. (Verified!)
**Step 3:** Post-multiply by $A^{-1}$: $A - 5A^{-1} = 0 \implies A^{-1} = \frac{1}{5}A = \begin{pmatrix} 1/5 & 2/5 \\ 2/5 & -1/5 \end{pmatrix}$.
**Step 4:** Compute $A^4 = (A^2)^2 = (5I)^2 = 25I = \begin{pmatrix} 25 & 0 \\ 0 & 25 \end{pmatrix}$.

### Problem 2 (Unit IV): Euler's Theorem on Homogeneous Function
**Problem:** If $u = \sin^{-1}\left(\frac{x + 2y + 3z}{\sqrt{x^8 + y^8 + z^8}}\right)$, prove that $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} + z \frac{\partial u}{\partial z} = -3 \tan u$.
**Step 1:** Let $f(u) = \sin u = \frac{x + 2y + 3z}{\sqrt{x^8 + y^8 + z^8}} = H(x, y, z)$.
**Step 2:** Degree of numerator = 1, degree of denominator = $\sqrt{t^8} = t^4$. Degree of $H = 1 - 4 = -3$.
**Step 3:** Apply composite Euler theorem: $x u_x + y u_y + z u_z = n \frac{f(u)}{f'(u)} = -3 \frac{\sin u}{\cos u} = -3 \tan u$. (Q.E.D.)

### Problem 3 (Unit V): Change of Order of Integration
**Problem:** Evaluate $I = \int_0^1 \int_x^1 \frac{y^2}{1 + y^4} dy dx$ by changing the order of integration.
**Step 1:** Current limits: $x \le y \le 1$ and $0 \le x \le 1$. Region $R$ is a triangle bounded by $y = x, y = 1, x = 0$.
**Step 2:** Switching to horizontal strip: $x$ goes from $0$ to $y$; $y$ goes from $0$ to $1$.
**Step 3:** $I = \int_0^1 \int_0^y \frac{y^2}{1 + y^4} dx dy = \int_0^1 \frac{y^2}{1 + y^4} [x]_0^y dy = \int_0^1 \frac{y^3}{1 + y^4} dy$.
**Step 4:** Let $t = 1 + y^4 \implies dt = 4y^3 dy$. When $y=0, t=1$; when $y=1, t=2$.
$I = \frac{1}{4} \int_1^2 \frac{dt}{t} = \frac{1}{4} \ln 2$.

---

<a name="viva-voce"></a>
## 🎯 11. Top 50 Master Viva Voce & Conceptual Exam Question Bank

1. **Q:** What is the rank of a matrix and how is it related to linear independence of row vectors?
   **A:** The rank of a matrix is the maximum number of linearly independent row (or column) vectors in the matrix, equivalent to the order of the largest non-zero minor.
2. **Q:** State Rouché-Capelli Theorem for consistency of $AX = B$.
   **A:** A linear system $AX = B$ is consistent if and only if $\rho(A) = \rho([A|B])$. If $\rho(A) = \rho([A|B]) = n$, the solution is unique; if $< n$, infinite solutions exist.
3. **Q:** Why are eigenvalues of a real symmetric matrix always real?
   **A:** For a real symmetric matrix $A = A^T$, $(AX)^* = X^* A^* = X^* A$. Taking inner products with the eigenvector conjugate yields $(\lambda - \bar{\lambda}) X^* X = 0$, forcing $\lambda = \bar{\lambda}$.
4. **Q:** State the Cayley-Hamilton Theorem and give two practical applications.
   **A:** Every square matrix satisfies its own characteristic equation ($P(A) = 0$). Applications: (1) Finding matrix inverse $A^{-1}$ without computing cofactors, (2) Evaluating high matrix powers $A^k$ and matrix polynomials.
5. **Q:** State Leibniz's theorem for the $n$-th derivative of a product of two functions.
   **A:** $(uv)_n = \sum_{k=0}^n \binom{n}{k} u_{n-k} v_k = u_n v + n u_{n-1} v_1 + \frac{n(n-1)}{2!} u_{n-2} v_2 + \dots + u v_n$.
6. **Q:** What are the three mandatory conditions for Rolle's Theorem?
   **A:** (1) $f(x)$ is continuous on $[a, b]$, (2) $f(x)$ is differentiable on $(a, b)$, (3) $f(a) = f(b)$.
7. **Q:** What is the geometric interpretation of Lagrange's Mean Value Theorem?
   **A:** There exists at least one point $c \in (a, b)$ where the tangent to the curve is parallel to the chord (secant line) connecting $(a, f(a))$ and $(b, f(b))$.
8. **Q:** Name all 7 indeterminate forms.
   **A:** $\frac{0}{0}, \frac{\infty}{\infty}, 0 \cdot \infty, \infty - \infty, 0^0, \infty^0, 1^\infty$.
9. **Q:** How do you convert the indeterminate form $1^\infty$ into a form suitable for L'Hôpital's rule?
   **A:** Let $y = f(x)^{g(x)} \implies \ln y = g(x) \ln f(x) = \frac{\ln f(x)}{1/g(x)}$ (which is $0/0$). Evaluate limit $L$, then $\lim y = e^L$.
10. **Q:** What is King's Property in definite integrals?
    **A:** $\int_a^b f(x) dx = \int_a^b f(a + b - x) dx$. It is used to simplify integrand denominators by adding original and transformed integrals.
11. **Q:** State Wallis' Formula for $\int_0^{\pi/2} \sin^m x \cos^n x dx$.
    **A:** $\frac{\Gamma(\frac{m+1}{2})\Gamma(\frac{n+1}{2})}{2\Gamma(\frac{m+n+2}{2})}$.
12. **Q:** State Euler's Theorem for a homogeneous function $u(x, y)$ of degree $n$.
    **A:** $x \frac{\partial u}{\partial x} + y \frac{\partial u}{\partial y} = nu$.
13. **Q:** What is the condition for a stationary point $(a, b)$ of $f(x, y)$ to be a saddle point?
    **A:** The discriminant $\Delta = rt - s^2 < 0$, where $r = f_{xx}, s = f_{xy}, t = f_{yy}$.
14. **Q:** Explain Lagrange's Method of Undetermined Multipliers.
    **A:** To optimize $f(x,y,z)$ subject to $g(x,y,z) = 0$, construct auxiliary $F = f + \lambda g$ and solve $\nabla f = -\lambda \nabla g$ along with $g=0$.
15. **Q:** Why do we change the order of integration in double integrals?
    **A:** When the inner integral cannot be integrated in terms of elementary functions with respect to the initial variable (e.g., $\int e^{-y^2} dy$ or $\int \frac{\sin y}{y} dy$).
16. **Q:** What is the Jacobian of transformation from Cartesian $(x, y)$ to Polar coordinates $(r, \theta)$?
    **A:** $J = \frac{\partial(x,y)}{\partial(r,\theta)} = r$. Thus $dx dy = r dr d\theta$.
17. **Q:** State Dirichlet's conditions for the existence of Fourier series.
    **A:** $f(x)$ must be periodic, single-valued, bounded, with a finite number of finite discontinuities and finite extrema in any period.
18. **Q:** What value does a Fourier series converge to at a point of jump discontinuity $x_0$?
    **A:** The average of left-hand and right-hand limits: $\frac{f(x_0^+) + f(x_0^-)}{2}$.
19. **Q:** Why do Fourier Sine series contain only $b_n$ terms?
    **A:** Because odd functions satisfy $f(-x) = -f(x)$, causing the symmetric integrals for $a_0$ and $a_n$ (integrand is odd) to vanish identically ($a_0 = a_n = 0$).
20. **Q:** State Parseval's Identity for Fourier series in $[-L, L]$.
    **A:** $\frac{1}{L} \int_{-L}^L [f(x)]^2 dx = \frac{a_0^2}{2} + \sum_{n=1}^\infty (a_n^2 + b_n^2)$.

---

<a name="exam-strategy"></a>
## 🏆 12. 100-Percentile 4-Tier Exam Scoring & Step-Marking Defense Strategy

```
========================================================================================================================
TIER              | ACTION PLAN & EXAM WRITING PROTOCOL                                | SCORE TARGET
========================================================================================================================
Tier 1: Formula   | • Write standard general formula before plugging numerical values.  | Guaranteed 40% base
Defense           | • Explicitly state preconditions (continuity, differentiability).  | step-marks on every
                  | • Define notations (e.g., r = f_xx, s = f_xy, t = f_yy).           | subjective problem.
------------------+--------------------------------------------------------------------+------------------------
Tier 2: Visual    | • Draw 2D Cartesian sketches for Change of Order integration.      | Secures top evaluator
Diagrams & Strips | • Shade region R and mark all intersection vertices clearly.       | confidence and avoids
                  | • Draw vertical and horizontal strips with labeled arrows.         | limit flip errors.
------------------+--------------------------------------------------------------------+------------------------
Tier 3: Algebraic | • Check eigenvalue trace sum (sum lambda_i = tr A) and det product. | Eliminates 100% of
Invariants Check  | • Check even/odd Fourier symmetry before integrating.              | calculation and sign
                  | • Verify Cayley-Hamilton equation with A^2 before taking inverse.  | mistakes.
------------------+--------------------------------------------------------------------+------------------------
Tier 4: Final     | • Box the final answer clearly with units (sq. units, cubic units). | Secures 100/100 Marks
Answer Boxing     | • State explicit deduction series results (e.g., sum 1/n^2 = pi^2/6).| (Grade 'O').
========================================================================================================================
```

---

*Authored by Saikat Koner (Black Hat Coders 108) — MTH165 Engineering Mathematics Master Suite*
