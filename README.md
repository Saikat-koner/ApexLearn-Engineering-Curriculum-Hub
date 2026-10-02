# 🎓 ApexLearn: Engineering Student Curriculum Portal & Master Study Hub

[![Grade](https://img.shields.io/badge/Academic%20Target-Grade%20'O'%20(100th%20Percentile)-10b981?style=for-the-badge&logo=target)](https://github.com/Saikat-koner/ApexLearn-Engineering-Curriculum-Hub)
[![Credits](https://img.shields.io/badge/Total%20Credits-19%20Semester%20Credits-0ea5e9?style=for-the-badge)](https://github.com/Saikat-koner/ApexLearn-Engineering-Curriculum-Hub)
[![Offline](https://img.shields.io/badge/Offline%20First-100%25%20Zero%20CORS%20Barrier-f59e0b?style=for-the-badge&logo=offline)](https://github.com/Saikat-koner/ApexLearn-Engineering-Curriculum-Hub)
[![Languages](https://img.shields.io/badge/Languages-13%20Indian%20+%205%20Global-8b5cf6?style=for-the-badge)](https://github.com/Saikat-koner/ApexLearn-Engineering-Curriculum-Hub)

> **ApexLearn Portal** is a high-performance, responsive engineering curriculum hub engineered for undergraduate students. Covering all 7 core first-year university engineering courses, it combines visual architecture flowcharts, 4-tier examination scoring rubrics, 89 handpicked video masterclasses, 72 3D Viva Voce flashcards, and an in-portal Markdown study reader.

---

## 🌟 Key Highlights & Features

### 1. 📚 Complete 7-Subject Engineering Catalog (19 Total Credits)
- **CSE111 (3 Credits):** *Computational Thinking, Systems & Professional Readiness* (Dual-Mode CPU Rings, Inodes, chmod octal math, Git 4-stage DAG, 7 Malware classes, 3-factor MFA, Agentic AI loops).
- **CHE110 (2 Credits):** *Environmental Studies & Green Chemistry* (BOD/COD, EDTA Hardness titration, 4 Indian biodiversity hotspots, Montreal/Kyoto protocols, 12 Green Chemistry principles).
- **CSE326 (2 Credits):** *Internet Programming & Web Technologies* (CSS Box Model, Flexbox/Grid, Event Bubbling & Delegation, Closures, DOM trees, Async/Await, Mobile-First responsive layouts).
- **ECE120 (1 Credit):** *Basic Electrical & Electronics Engineering* (KCL/KVL, Thevenin/Norton theorems, Max Power Transfer, P-N Junctions, Bridge Rectifiers, BJT CE regions, Op-Amp Virtual Ground).
- **INT108 (4 Credits):** *Python Programming Foundations* (Mutable vs Immutable, Python GIL, Mutable default traps, List comprehensions, `*args`/`**kwargs`, Decorators, Exception handling).
- **MTH165 (4 Credits):** *Engineering Mathematics: Matrices & Calculus* (Rouché-Capelli consistency, Cayley-Hamilton & $A^{-1}$, Eigenvalue invariants, Rolle's/LMVT, Euler's Theorem, Lagrange Multipliers, Fourier series).
- **PHY175 (3 Credits):** *Solid State Physics, Logic Circuits & IoT Devices* (Hall Effect & $R_H=1/ne$, Fermi-Dirac distribution, Universal NAND/NOR gates, JK Flip-Flop Master-Slave, Shift registers, Arduino PWM).

---

### 2. 📺 Curated Video Master Hub with Pacing Timeline & Completion Tracker (89 Tutorials)
- **89 High-Yield YouTube Video Masterclasses** calibrated to university examination topics and faculty lecture syllabi.
- **📅 14-Week Semester Study Timeline Roadmaps:** Direct scheduling tags (e.g. `Week 1–2 Foundation`, `Week 5–6 Mid-Term Sprint`, `Week 12–14 End-Term Sprint`) on every tutorial.
- **⏱️ Estimated Video Watch & Study Durations:** Granular pacing estimates (e.g. `⏱️ 22 mins`, `⏱️ 35 mins`) and total subject study load calculations (e.g. `~5h 45m total load`).
- **🔥 Exam Priority & Weight Badges:** Clear distinction between `🔥 Mandatory Exam Question`, `⭐ High-Yield Core Topic`, `⚡ Practical Mastery`, and `🏆 100-Percentile Grade 'O' Booster`.
- **✅ Interactive Completion Tracker:** Persistent `localStorage`-backed checkbox tracking (`apex_watched_vids_*`) with live percentage completion bars and 1-click progress resets.
- **Top Creators:** *Dr. Gajendra Purohit, Gate Smashers, 3Blue1Brown, CS50 Harvard, All About Electronics, Kevin Powell, Corey Schafer, NetworkChuck, and Kunal Kushwaha*.

---

### 3. 🎴 3D Viva Voce Flashcard Mastery Simulator
- **72 High-Yield Viva Voce Flashcards** with 3D card flip animations.
- **Robust State Tracking:** Discrete `Set`-based mastery scoring (+10 pts per unique card) with zero mark inflation.
- **Interactive Self-Assessment:** Rate answers as `❌ Needs Practice (0 pts)` or `✅ Mastered (+10 pts)`.
- **End-of-Deck Summary & Focused Drill:** View completion accuracy and launch a dedicated session containing only the cards you missed (`🔁 Practice Missed Cards`).

---

### 4. 📝 Publication-Grade In-Portal Markdown Reader
- Over **290,000 characters** of study material bundled into an embedded offline registry (`js/data-markdown.js`).
- **Interactive Table of Contents Sidebar:** Auto-generated outline with smooth anchor scrolling.
- **Live Search Highlighting:** Instant regex-based search with real-time text highlighting and match counter.
- **Text Zoom Controls (`A-` / `A+`):** Customizable reading size for long study sessions.
- **1-Click Code Copy:** Dedicated copy buttons on all code snippets and command lines.

---

### 5. 🛠️ Interactive Student Tool Suite
- **⏱️ Pomodoro Focus Timer:** 25/5 study sprint intervals with Web Audio API chime sounds.
- **📊 10-Point Weighted SGPA / CGPA Calculator:** Real-time calculation based on official credit weights:
  $$\text{SGPA} = \frac{\sum (\text{Credits}_i \times \text{GradePoints}_i)}{19}$$
- **⚡ Master Formula & Invariant Bank:** Instant search for mathematical formulas, physical laws, and circuit theorems.
- **📓 Local Study Notes Scratchpad:** Auto-saves revision notes to browser `localStorage` with 1-click `.txt` export.

---

### 6. 🇮🇳 Multilingual i18n Engine (13 Indian Languages + 5 Global)
Instant reactive DOM translation across:
- **Major Indian Languages:** हिन्दी (Hindi), বাংলা (Bengali), தமிழ் (Tamil), తెలుగు (Telugu), मराठी (Marathi), ગુજરાતી (Gujarati), ಕನ್ನಡ (Kannada), മലയാളം (Malayalam), ਪੰਜਾਬੀ (Punjabi), ଓଡ଼ିଆ (Odia), অসমীয়া (Assamese), اردو (Urdu), संस्कृतम् (Sanskrit).
- **Global Languages:** English, Español, Français, Deutsch, 日本語.

---

### 7. 🔌 100% Offline-First Architecture (`file:///` Compatible)
- Pure client-side zero-dependency architecture (HTML5, CSS3, ES6+ JavaScript).
- **Embedded Synchronous Data Layer (`js/data-subjects.js` & `js/data-markdown.js`):** Completely bypasses browser CORS restrictions when double-clicking `index.html` from disk.
- Zero database or backend server requirement.

---

## 📂 Project Structure

```
StudentCurriculumHub/
├── index.html                   # Main Portal Single-Page Application
├── launch.bat                   # 1-Click Windows Local Launcher
├── launch.sh                    # 1-Click Mac / Linux Local Launcher
├── server.py                    # Python HTTP Server Runner
├── server.js                    # Node.js HTTP Server Runner
├── css/
│   └── styles.css               # Modern CSS Variables, Tokens & Components
├── data/
│   └── subjects.json            # Central Curriculum Database (7 Subjects)
├── js/
│   ├── app.js                   # Application Controller & Drawer Engine
│   ├── data-subjects.js         # Embedded Offline Subject Catalog
│   ├── data-markdown.js         # Embedded 290k-Char Markdown Registry
│   ├── i18n.js                  # 18-Language Translation Dictionary Engine
│   └── interactive-tools.js     # Flashcards, Pomodoro, GPA & Markdown Reader
└── subjects/                    # Standalone HTML, Markdown & PDF Dossiers
    ├── CHE110_Ultimate_Master_Study_Dashboard.html
    ├── CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── CSE111_Ultimate_Master_Study_Dashboard.html
    ├── CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── CSE326_Ultimate_Master_Study_Dashboard.html
    ├── CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── ECE120_Ultimate_Master_Study_Dashboard.html
    ├── ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── INT108_Ultimate_Master_Study_Dashboard.html
    ├── INT108_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── INT108_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── MTH165_Ultimate_Master_Study_Dashboard.html
    ├── MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.md
    ├── MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
    ├── PHY175_Ultimate_Master_Study_Dashboard.html
    ├── PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.md
    └── PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.pdf
```

---

## 🚀 Getting Started

### 1. Offline Execution (Double-Click)
Simply open `index.html` directly in any web browser (Chrome, Edge, Firefox, Brave, Safari). No internet connection or server required.

### 2. Local HTTP Server
Run any of the following from the root directory:
```bash
# Python
python -m http.server 8000

# Node.js
node server.js

# Or using batch script
launch.bat
```
Then navigate to `http://localhost:8000`.

### 3. Deploy to Web (GitHub Pages / Vercel / Netlify)
Push this repository to GitHub and enable **GitHub Pages** under `Settings > Pages > Branch: main`, or import directly to Vercel/Netlify with one click.

---

## 📄 License & Attribution
- **Author:** Saikat Koner (Black Hat Coders 108)
- **Target Standard:** 100-Percentile Grade 'O' University Examination Benchmarks
- **License:** MIT License
