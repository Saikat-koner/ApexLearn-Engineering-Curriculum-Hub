/**
 * ApexLearn: Engineering Student Curriculum Portal
 * Enhanced Master Application Engine with Multi-Tabbed Drawer, Live Search, and Topic Tracking
 */

let allSubjects = [];
let currentFilterDept = 'all';
let currentSearchQuery = '';
let activeDrawerSubjectId = null;
let activeDrawerTabName = 'tabStrategy';

// Initialize immediately and on DOM load
function initPortalApp() {
  initTheme();
  loadSubjects();
  setupEventListeners();
  setupKeyboardShortcuts();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortalApp);
} else {
  initPortalApp();
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('apex_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('apex_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Load Subjects
function getCoreSubjectsFallback() {
  if (typeof window.DEFAULT_SUBJECTS !== 'undefined' && Array.isArray(window.DEFAULT_SUBJECTS) && window.DEFAULT_SUBJECTS.length > 0) {
    return JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS));
  }
  return [{"id": "cse111", "code": "CSE111", "title": "Computational Thinking, Systems & Professional Readiness", "department": "Computer Science & Engineering", "credits": 3, "semester": 1, "category": "Computer Science", "icon": "\ud83d\udcbb", "themeColor": "#0ea5e9", "badge": "Core Foundation", "shortDescription": "Comprehensive foundation covering Computational Thinking 4-Pillar pipeline, Dual-Mode CPU execution (Ring 3 vs Ring 0), Inode metadata, chmod octal bitmask, Network OSI/TCP layers, Cloud SPI models, Git 4-stage DAG, 7-class Malware Taxonomy, 3-Factor MFA, Agentic AI loops, and ATS Dream CV.", "strategyMatrix": [{"unit": "Unit I", "what": "Dual-Mode CPU execution (User Ring 3 vs Kernel Ring 0), Inode metadata & chmod octal bitmask (4-2-1), Mesh topology formula N(N-1)/2, Type-1 Bare-Metal vs Type-2 Hosted Hypervisors, Cloud SPI models.", "where": "Silberschatz Ch 1, 2, 13; Kurose & Ross Ch 1, 5; Thomas Erl Ch 4, 11", "how": "1. Draw Dual-Mode user/kernel ring transitions.\n2. Practice chmod octal bitmask calculations (755, 644).\n3. Compare bare-metal vs hosted hypervisor latencies."}, {"unit": "Unit II", "what": "Git 4-stage state machine (Working Dir -> Staging -> Local Repo -> Remote), 3-Way Merge vs Fast-Forward, Malware Taxonomy (7 classes), 3-Factor MFA, Principle of Least Privilege (PoLP).", "where": "Scott Chacon (Pro Git) Ch 1-3; William Stallings Ch 1, 22, 23", "how": "1. Trace Git SHA-1 DAG commits & branch merges.\n2. Classify virus vs worm vs rootkit Ring 0 stealth.\n3. Categorize MFA factors: Knowledge, Possession, Inherence."}, {"unit": "Unit III", "what": "Student-Centric Revenue Generation (SCRGM), Recognition of Prior Learning (RPL), Credit Exemption pathways, Grade 'O' Standing Committee guidelines.", "where": "Official University Academic Regulations Handbook", "how": "1. Review credit transfer and exemption criteria.\n2. Understand research paper Grade 'O' upgradation policies."}, {"unit": "Unit IV", "what": "AI \u2283 ML \u2283 DL hierarchy, Supervised vs Unsupervised vs Reinforcement Learning, Generative AI vs Agentic AI (Perception-Tool-Action loop), Prompt Engineering (Zero-shot, Few-shot, CoT).", "where": "Russell & Norvig Ch 1, 19, 28; DeepLearning.AI (Andrew Ng)", "how": "1. Map AI \u2283 ML \u2283 DL Venn hierarchy.\n2. Trace Agentic AI autonomous tool-use cycles.\n3. Structure Chain-of-Thought prompts for complex reasoning."}, {"unit": "Unit V & VI", "what": "Career Pathways Matrix (Product vs Service vs Research), 5-Step IDP, 1-page ATS Dream CV using STAR method with quantified metrics.", "where": "Gayle McDowell (CTCI) Ch 1, 2; Kunal Kushwaha", "how": "1. Formulate ATS bullets: Situation, Task, Action, Result.\n2. Calibrate bi-weekly milestones in 5-Step IDP."}], "visualArchitecture": [{"title": "Computational Thinking 4-Pillar Pipeline", "ascii": "[ REAL-WORLD PROBLEM ]\n          \u2502\n          \u25bc\n[ 1. DECOMPOSITION ] \u2500\u2500\u25ba Break into isolated sub-problems (Auth, Cart, Payment)\n          \u2502\n          \u25bc\n[ 2. PATTERN RECOGNITION ] \u2500\u2500\u25ba Identify recurring patterns (OAuth2, Webhooks)\n          \u2502\n          \u25bc\n[ 3. ABSTRACTION ] \u2500\u2500\u25ba Filter out non-essential details, focus on invariants\n          \u2502\n          \u25bc\n[ 4. ALGORITHM DESIGN ] \u2500\u2500\u25ba Formulate deterministic step-by-step instructions"}, {"title": "Dual-Mode CPU Execution Rings", "ascii": "+---------------------------------------------------+\n| USER MODE (Ring 3)                                |\n| - User Applications (Browser, Python, VS Code)    |\n| - Restricted CPU Instructions (No direct I/O)     |\n+---------------------------------------------------+\n          \u2502                                   \u25b2\n          \u2502 System Call Trap (INT 0x80 / SYS) \u2502 Return to User\n          \u25bc                                   \u2502\n+---------------------------------------------------+\n| KERNEL MODE (Ring 0)                              |\n| - Complete Hardware / Memory Control              |\n| - Privileged Instructions, Page Tables, Interrupts|\n+---------------------------------------------------+"}, {"title": "Git 4-Stage State Machine", "ascii": "+-------------------+      git add       +-------------------+     git commit      +-------------------+\n| WORKING DIRECTORY | -----------------> |   STAGING AREA    | ------------------> | LOCAL REPOSITORY  |\n| (Untracked files) |                    | (Index Snapshot)  |                     | (Committed DAG)   |\n+-------------------+                    +-------------------+                     +-------------------+\n          ^                                        |                                         |\n          |               git checkout / restore   |                                         | git push\n          +----------------------------------------+                                         v\n                                              git pull / git fetch                 +-------------------+\n                                       <------------------------------------------ | REMOTE REPOSITORY |\n                                                                                   +-------------------+"}, {"title": "Agentic AI Perception-Tool-Action Loop", "ascii": "                     [ USER GOAL / PROMPT ]\n                                \u2502\n                                \u25bc\n                     [ 1. PERCEPTION / LLM ]\n                   Ingest Context & System State\n                                \u2502\n                                \u25bc\n                     [ 2. REASONING ENGINE ]\n                 Formulate Multi-Step Plan (CoT)\n                                \u2502\n                                \u25bc\n                     [ 3. TOOL / API EXECUTION ]\n               Execute Bash / File Edit / Web Search\n                                \u2502\n                                \u25bc\n                     [ 4. SELF-REFLECTION ]\n              Did output solve task? (Yes -> Done / No -> Loop)"}], "scoringStrategy": {"tier1": "Formula & Formal Definition Defense: State exact definitions (User Mode Ring 3 vs Kernel Mode Ring 0, Inode metadata, CIA Triad, Non-repudiation) before explaining mechanisms.", "tier2": "Visual Architecture Schematics: Draw boxed ASCII diagrams for Process 5-state lifecycle, Git state machine, or Type-1 vs Type-2 hypervisors.", "tier3": "Comparative Invariant Tables: Tabulate comparisons (Hub vs Switch vs Router with collision/broadcast domains; IaaS vs PaaS vs SaaS; Virus vs Worm vs Rootkit).", "tier4": "Precision Code / CLI Boxing: Provide exact Linux commands (chmod 755 script.sh, ps aux | grep python), Git sequences, or STAR metric bullets for 100/100 (Grade 'O')."}, "textbooks": [{"title": "Operating System Concepts (10th Ed)", "authors": "Silberschatz, Galvin & Gagne", "chapters": "Ch 1 (Dual-Mode Ring 0 vs 3), Ch 2 (Batch/RTOS), Ch 13 (Inodes & chmod octal bitmask)"}, {"title": "Computer Networking: A Top-Down Approach (8th Ed)", "authors": "Kurose & Ross / Forouzan", "chapters": "Ch 1 (Mesh Topology N(N-1)/2), Ch 5 & 6 (Collision/Broadcast domains, L1-L3 devices)"}, {"title": "Cloud Computing: Concepts, Technology & Architecture", "authors": "Thomas Erl", "chapters": "Ch 4 & 5 (IaaS, PaaS, SaaS), Ch 11 (Type-1 Bare-Metal vs Type-2 Hosted Hypervisors)"}, {"title": "Pro Git (2nd Ed, Open Access)", "authors": "Scott Chacon & Ben Straub", "chapters": "Ch 1-3 (4-Stage State Machine, DAG commits, 3-Way Merge vs Fast-Forward)"}, {"title": "Cryptography and Network Security (7th Ed)", "authors": "William Stallings", "chapters": "Ch 1, 22, 23 (CIA Triad, 7 Malware Classes, 3-Factor MFA, PoLP)"}, {"title": "Artificial Intelligence: A Modern Approach (4th Ed)", "authors": "Russell & Norvig", "chapters": "Ch 1, 19, 28 (AI \u2283 ML \u2283 DL hierarchy, Agentic AI Loops, Prompt Engineering)"}], "units": [{"unit": "Unit I", "title": "Computational Thinking & Computing Environment", "topics": ["4 Pillars: Decomposition, Pattern Recognition, Abstraction, Algorithms", "Dual-Mode CPU execution (User Mode Ring 3 vs Kernel Mode Ring 0)", "Process 5-state lifecycle (New, Ready, Running, Waiting, Terminated)", "Inode metadata & chmod octal bitmask (4-2-1 math)", "Network topologies (Mesh formula N(N-1)/2, Star, Bus, Ring)", "Collision vs Broadcast domains, Layer 1-3 devices", "Cloud SPI tiers (IaaS, PaaS, SaaS) & Hypervisors (Type-1 vs Type-2)"]}, {"unit": "Unit II", "title": "Version Control & Cyber Security Architecture", "topics": ["Git 4-stage state machine (Working, Staging, Local, Remote)", "3-Way Merge vs Fast-Forward merge conflict resolution", "CIA Triad (Confidentiality, Integrity, Availability)", "Malware taxonomy: Virus, Worm, Trojan, Ransomware, Spyware, Rootkit, Botnet", "3-Factor MFA: Knowledge (Password), Possession (OTP/Key), Inherence (Biometric)", "Principle of Least Privilege (PoLP) and Defense in Depth"]}, {"unit": "Unit III", "title": "University Academic Framework & Policy Systems", "topics": ["Student-Centric Revenue Generation Model (SCRGM)", "Recognition of Prior Learning (RPL) & Credit Exemptions", "Grade 'O' Standing Committee policy guidelines & research publications"]}, {"unit": "Unit IV", "title": "Artificial Intelligence, ML & Emerging Tech", "topics": ["AI \u2283 ML \u2283 DL Venn hierarchy", "Supervised (labeled) vs Unsupervised (unlabeled) vs Reinforcement Learning", "Generative AI vs Agentic AI (Perception-Tool-Action loop)", "Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought (CoT), System Personas"]}, {"unit": "Unit V & VI", "title": "Career Pathways, IDP & ATS Dream CV", "topics": ["Career Pathways Matrix (Product vs Service vs Research vs Higher Studies)", "5-Step Individual Development Plan (IDP) with bi-weekly milestones", "1-Page ATS Dream CV formatting using STAR Method (Situation, Task, Action, Result)"]}], "videos": [{"title": "CS50 Computational Thinking & 4 Pillars", "channel": "CS50 (Harvard)", "url": "https://www.youtube.com/results?search_query=CS50+Computational+Thinking"}, {"title": "Operating System Types & Dual-Mode Execution", "channel": "Gate Smashers", "url": "https://www.youtube.com/results?search_query=Gate+Smashers+Types+of+Operating+System"}, {"title": "Linux Command Line & chmod Permissions", "channel": "freeCodeCamp", "url": "https://www.youtube.com/results?search_query=freeCodeCamp+Linux+Command+Line+for+Beginners"}, {"title": "Network Devices (Hub vs Switch vs Router)", "channel": "PowerCert Animated Videos", "url": "https://www.youtube.com/results?search_query=PowerCert+Network+Devices+Hub+Switch+Router"}, {"title": "Hypervisors Type 1 (Bare-Metal) vs Type 2 (Hosted)", "channel": "NetworkChuck", "url": "https://www.youtube.com/results?search_query=NetworkChuck+Hypervisor+Type+1+Type+2"}, {"title": "Git & GitHub Complete Practical Tutorial", "channel": "Kunal Kushwaha", "url": "https://www.youtube.com/results?search_query=Kunal+Kushwaha+Git+GitHub+Tutorial"}, {"title": "Cyber Security Full Course & Malware Taxonomy", "channel": "Simplilearn / John Hammond", "url": "https://www.youtube.com/results?search_query=Cyber+Security+Full+Course+Simplilearn"}, {"title": "Prompt Engineering & Agentic AI Masterclass", "channel": "DeepLearning.AI (Andrew Ng)", "url": "https://www.youtube.com/results?search_query=ChatGPT+Prompt+Engineering+for+Developers+Andrew+Ng"}], "vivaQuestions": [{"q": "What is the difference between User Mode (Ring 3) and Kernel Mode (Ring 0)?", "a": "User mode runs applications with restricted CPU instructions and isolated memory; Kernel mode has complete hardware control, executing privileged CPU instructions, device drivers, and interrupt handling."}, {"q": "Explain chmod 755 in octal permission math.", "a": "Read=4, Write=2, Execute=1. Owner gets 7 (rwx = 4+2+1), Group gets 5 (r-x = 4+0+1), Others get 5 (r-x = 4+0+1)."}, {"q": "What is the key structural difference between Type-1 and Type-2 hypervisors?", "a": "Type-1 (Bare-Metal) runs directly on host silicon with near-zero latency; Type-2 (Hosted) runs on top of a host operating system with virtualization overhead."}, {"q": "Explain how Agentic AI differs from standard Generative AI.", "a": "Generative AI produces text/images from a static prompt in a single pass; Agentic AI operates in an autonomous Perception-Reasoning-Tool Execution-Self Reflection loop to accomplish multi-step objectives."}, {"q": "What is the formula for Mesh Network connections?", "a": "Number of duplex physical links = N(N-1)/2, where N is the total number of connected nodes."}], "assets": {"dashboard": "subjects/CSE111_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "che110", "code": "CHE110", "title": "Environmental Studies & Sustainability", "department": "Chemistry & Environmental Sciences", "credits": 2, "semester": 1, "category": "Chemistry", "icon": "\ud83c\udf31", "themeColor": "#10b981", "badge": "Mandatory Science", "shortDescription": "Multidisciplinary exploration of ecosystem dynamics, 10% Lindeman trophic transfer, 4 Indian biodiversity hotspots, pollution chemistry (BOD/COD, smog), disaster frameworks, and environmental legislation.", "strategyMatrix": [{"unit": "Unit I & II", "what": "4 Spheres, Brundtland 1987, 17 SDGs, Lindeman's 10% rule, Ecological Pyramids (Energy upright vs inverted aquatic biomass), Hydrosere vs Xerosere succession.", "where": "Kaushik & Kaushik Ch 1-4; Erach Bharucha Ch 2, 3", "how": "1. Draw 10% energy pyramid.\n2. Trace stages of primary ecological succession.\n3. Memorize 17 SDG targets."}, {"unit": "Unit III", "what": "3 Levels of biodiversity, 4 Indian Hotspots (Western Ghats, Himalayas, Indo-Burma, Sundaland), HIPPO threats, IUCN Red List categories, In-situ vs Ex-situ.", "where": "Erach Bharucha Ch 4", "how": "1. Map 4 Indian hotspots.\n2. Compare In-situ vs Ex-situ conservation protocols."}, {"unit": "Unit IV", "what": "Photochemical vs Classical Smog, BOD vs COD math, Eutrophication lifecycle, Chapman Ozone catalytic cycle, 4Rs solid waste hierarchy.", "where": "Dave & Katewa Ch 5; Kaushik & Kaushik Ch 5", "how": "1. Write BOD vs COD chemical equations.\n2. Trace 5 stages of cultural eutrophication.\n3. Outline Chapman CFC ozone breakdown."}, {"unit": "Unit V & VI", "what": "NDMA 3-tier hierarchy (NDMA/SDMA/DDMA), 6 Indian Environmental Acts (Wildlife 1972 to NGT 2010), Historic movements (Bishnoi 1730, Chipko 1973, Appiko, Silent Valley, NBA).", "where": "Kaushik & Kaushik Ch 6, 7; Erach Bharucha Ch 6-8", "how": "1. Draw NDMA command hierarchy.\n2. Memorize key Environmental Acts timeline.\n3. Detail Chipko & Narmada Bachao movements."}], "visualArchitecture": [{"title": "10% Lindeman's Trophic Energy Flow", "ascii": "[ SUNLIGHT: 1,000,000 J of Radiant Energy ]\n                     \u2502  (1% captured by plants)\n                     \u25bc\n[ PRIMARY PRODUCERS (Phytoplankton/Trees) ]: 10,000 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ PRIMARY CONSUMERS (Herbivores/Zooplankton) ]: 1,000 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ SECONDARY CONSUMERS (Carnivores) ]: 100 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ TERTIARY APEX CONSUMERS (Hawks/Tigers) ]: 10 J\n(90% of energy is lost at each step as metabolic heat)"}, {"title": "Eutrophication Lifecycle Flowchart", "ascii": "[ Agricultural Runoff (Excess Nitrates & Phosphates) ]\n                         \u2502\n                         \u25bc\n[ Rapid Algal Bloom on Lake Surface (Dense Green Mat) ]\n                         \u2502\n                         \u25bc\n[ Sunlight Blocked -> Submerged Plants Die & Decay ]\n                         \u2502\n                         \u25bc\n[ Aerobic Decomposers Multiply -> High BOD & Dissolved Oxygen Depletion ]\n                         \u2502\n                         \u25bc\n[ Asphyxiation of Aquatic Fish -> Complete Ecosystem Collapse ]"}], "scoringStrategy": {"tier1": "Scientific Definition & Parameter Defense: Define BOD, COD, Carrying Capacity, and Biomagnification with exact units (BOD < 1 mg/L for drinking water).", "tier2": "Ecological Flowcharts & Cycles: Draw neat flowcharts for Eutrophication, 10% Trophic Energy pyramids, or Chapman Ozone Cycles.", "tier3": "Legislative Act & Year Invariants: State exact statutory names and years (Wildlife Act 1972, Water Act 1974, Air Act 1981, EPA 1986, NGT Act 2010).", "tier4": "Case Study & Quantitative Impact Boxing: Box historical case studies (Bhopal 1984 MIC leak, Minamata mercury poisoning, Chipko 1973) for Grade 'O'."}, "textbooks": [{"title": "Perspectives in Environmental Studies", "authors": "Anubha Kaushik & C.P. Kaushik", "chapters": "Ch 1-4 (Ecosystems & Energy), Ch 5 (Pollution & BOD/COD), Ch 6-7 (Acts & Movements)"}, {"title": "Textbook of Environmental Studies for Undergraduate Courses", "authors": "Erach Bharucha", "chapters": "Ch 2-3 (Ecosystem Dynamics), Ch 4 (4 Indian Hotspots & Conservation), Ch 6-8 (Disasters & Ethics)"}], "units": [{"unit": "Unit I & II", "title": "Ecology, Ecosystems & Resources", "topics": ["4 Spheres: Lithosphere, Hydrosphere, Atmosphere, Biosphere", "Lindeman's 10% energy rule", "Ecological succession (Hydrosere vs Xerosere)", "17 UN SDGs", "Brundtland Report 1987"]}, {"unit": "Unit III", "title": "Biodiversity & Conservation", "topics": ["3 Levels of biodiversity (Genetic, Species, Ecosystem)", "4 Indian Hotspots (Western Ghats, Himalayas, Indo-Burma, Sundaland)", "In-situ (Sanctuaries, Biosphere Reserves) vs Ex-situ (Gene banks, Zoos)", "IUCN Red List"]}, {"unit": "Unit IV", "title": "Pollution Chemistry & Waste", "topics": ["Photochemical vs Classical Smog", "BOD vs COD math", "Eutrophication 5 stages", "Chapman CFC ozone breakdown cycle", "4Rs solid waste hierarchy (Reduce, Reuse, Recycle, Recover)"]}, {"unit": "Unit V & VI", "title": "Disasters, Acts & Movements", "topics": ["NDMA 3-tier hierarchy (NDMA/SDMA/DDMA)", "6 Major Environmental Acts (Wildlife 1972 to NGT 2010)", "Bishnoi (1730), Chipko (1973), Appiko, Silent Valley, NBA"]}], "videos": [{"title": "Ecological Succession & Trophic Energy Flow", "channel": "Amoeba Sisters", "url": "https://www.youtube.com/results?search_query=Amoeba+Sisters+Ecological+Succession+Energy+Flow"}, {"title": "Biodiversity Hotspots in India & Global Conservation", "channel": "StudyIQ IAS", "url": "https://www.youtube.com/results?search_query=StudyIQ+Biodiversity+Hotspots+in+India"}, {"title": "Smog, Eutrophication & Ozone Depletion Mechanisms", "channel": "StudyIQ / TED-Ed", "url": "https://www.youtube.com/results?search_query=Photochemical+Smog+vs+Classical+Smog+StudyIQ"}, {"title": "Historic Environmental Movements in India", "channel": "Drishti IAS", "url": "https://www.youtube.com/results?search_query=Environmental+Movements+in+India+Chipko+Narmada+StudyIQ"}], "vivaQuestions": [{"q": "Why is the Pyramid of Energy always upright?", "a": "Because energy flow is unidirectional; only ~10% is transferred to higher trophic levels, with ~90% lost as metabolic heat (2nd Law of Thermodynamics)."}, {"q": "What is the difference between BOD and COD?", "a": "BOD measures oxygen required by aerobic microbes to biologically break down organic waste; COD measures total oxygen to chemically oxidize all organic matter using potassium dichromate (COD > BOD)."}, {"q": "Name the 4 Biodiversity Hotspots in India.", "a": "1) Western Ghats & Sri Lanka, 2) Himalayas, 3) Indo-Burma, 4) Sundaland (Nicobar Islands)."}], "assets": {"dashboard": "subjects/CHE110_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "cse326", "code": "CSE326", "title": "Client-Side Web Development", "department": "Computer Science & Engineering", "credits": 2, "semester": 2, "category": "Computer Science", "icon": "\ud83c\udf10", "themeColor": "#3b82f6", "badge": "Full-Stack Track", "shortDescription": "Modern frontend engineering encompassing semantic HTML5, CSS3 Box Model, Flexbox/Grid layouts, Specificity math, JavaScript DOM execution context, async/await Fetch API, and GitHub Pages CI/CD.", "strategyMatrix": [{"unit": "Unit I & II", "what": "Browser Critical Rendering Path (DOM+CSSOM -> Render Tree -> Layout -> Paint), Semantic HTML5 tags, Form validation regex.", "where": "Lemay, Colburn & Kyrnin Ch 1, 2, 5, 6", "how": "1. Trace browser DOM parsing.\n2. Master semantic structuring (<header>, <nav>, <main>).\n3. Implement regex input validation."}, {"unit": "Unit III", "what": "CSS Specificity math (a,b,c,d), border-box model, 1D Flexbox axis alignments, 2D CSS Grid repeat(auto-fit, minmax).", "where": "HTML5 Black Book Ch 7-11; Kevin Powell", "how": "1. Calculate specificity scores.\n2. Build responsive Flexbox navbars.\n3. Design 2D CSS Grid card layouts."}, {"unit": "Unit IV & V", "what": "Execution Context & Call Stack, Closures, Event Bubbling vs Capturing vs Delegation, fetch() API async/await, LocalStorage.", "where": "Marijn Haverbeke (Eloquent JS); MDN", "how": "1. Trace JS event loop & microtask queue.\n2. Handle DOM events via delegation.\n3. Fetch JSON data asynchronously."}, {"unit": "Unit VI", "what": "All 6 University Lab Experiments (Validation, Dynamic DOM, Product Filter, Todo App, GitHub Pages automated hosting).", "where": "Pro Git Ch 1-3; Chrome DevTools", "how": "1. Write clean executable code for all 6 labs.\n2. Deploy static web apps to GitHub Pages."}], "visualArchitecture": [{"title": "Browser Critical Rendering Path", "ascii": "[ HTML Bytes ] \u2500\u2500\u25ba [ Tokens ] \u2500\u2500\u25ba [ Nodes ] \u2500\u2500\u25ba [ DOM Tree ]\n                                                      \u2502\n                                                      \u25bc\n[ CSS Bytes ]  \u2500\u2500\u25ba [ Tokens ] \u2500\u2500\u25ba [ Nodes ] \u2500\u2500\u25ba [ CSSOM Tree ]\n                                                      \u2502\n                                                      \u25bc\n                                              [ RENDER TREE ] (Computed Styles)\n                                                      \u2502\n                                                      \u25bc\n                                              [ LAYOUT ENGINE ] (Geometry & Box Model)\n                                                      \u2502\n                                                      \u25bc\n                                              [ PAINT & COMPOSITE ] (Pixels to GPU Screen)"}, {"title": "JavaScript Event Loop Architecture", "ascii": "[ CALL STACK ] (LIFO execution)\n       \u2502 (Async API Call)\n       \u25bc\n[ WEB APIS (Browser) ] (Timer, DOM Events, fetch())\n       \u2502 (Task completes)\n       \u25bc\n+-------------------------------------------------------------+\n| [ MICROTASK QUEUE ] (Promises, MutationObserver - High Pri) |\n| [ MACROTASK QUEUE ] (setTimeout, setInterval, I/O - Low Pri)|\n+-------------------------------------------------------------+\n       \u2502\n       \u25bc (Event Loop checks when Call Stack is empty)\n[ CALL STACK ]"}], "scoringStrategy": {"tier1": "W3C Semantic Syntax Defense: Write valid HTML5 semantic tags and CSS declarations with exact attribute names (pattern, required, box-sizing: border-box).", "tier2": "DOM Tree & Box Model Diagrams: Draw hierarchical DOM node trees or CSS box model layers (Content -> Padding -> Border -> Margin).", "tier3": "Specificity & Event Delegation Checks: Calculate exact CSS specificity tuples (inline, ID, Class, Element) and explain event bubbling prevention.", "tier4": "Clean Runnable Code Boxing: Box complete, indentation-perfect JavaScript functions with try-catch and async/await error handling."}, "textbooks": [{"title": "Mastering HTML, CSS & JavaScript Web Publishing", "authors": "Lemay, Colburn & Kyrnin", "chapters": "Ch 1, 2, 5, 6 (DOM, Semantic Tags, Forms)"}, {"title": "HTML5 Black Book", "authors": "Kogent Learning Solutions", "chapters": "Ch 7-11 (Flexbox, Grid, Canvas, Web Storage)"}, {"title": "Eloquent JavaScript (3rd Ed)", "authors": "Marijn Haverbeke", "chapters": "Ch 13-15 (DOM manipulation, Event Loop, Async/Promises)"}], "units": [{"unit": "Unit I & II", "title": "HTML5 Semantics & Form Controls", "topics": ["Critical Rendering Path (DOM+CSSOM -> Render Tree)", "Semantic tags (<article>, <aside>, <nav>, <main>)", "Regex form validation attributes"]}, {"unit": "Unit III", "title": "CSS3 Styling, Flexbox & Grid", "topics": ["CSS Specificity formula (a,b,c,d)", "box-sizing: border-box", "1D Flexbox axis alignments (justify-content, align-items)", "2D CSS Grid repeat(auto-fit, minmax)"]}, {"unit": "Unit IV & V", "title": "JavaScript DOM & Web APIs", "topics": ["Execution Context & Call Stack", "Event Bubbling vs Capturing vs Delegation", "fetch() API with async/await", "localStorage vs sessionStorage"]}, {"unit": "Unit VI", "title": "Practicals & CI/CD Deployment", "topics": ["Lab 1-6 executable projects", "DOM dynamic filtering", "Async Todo application", "GitHub Pages static deployment"]}], "videos": [{"title": "Semantic HTML5 & Accessible Forms", "channel": "Dave Gray", "url": "https://www.youtube.com/results?search_query=Dave+Gray+HTML+Full+Course+for+Beginners"}, {"title": "Flexbox, CSS Grid & Specificity Deep Dive", "channel": "Kevin Powell", "url": "https://www.youtube.com/results?search_query=Kevin+Powell+Flexbox+CSS+Guide"}, {"title": "Namaste JavaScript - Execution Context & Event Loop", "channel": "Akshay Saini", "url": "https://www.youtube.com/results?search_query=Namaste+JavaScript+Akshay+Saini+Season+1"}], "vivaQuestions": [{"q": "Explain CSS Specificity calculation formula (a, b, c, d).", "a": "a = Inline styles (1000), b = ID selectors (0100), c = Class, attribute, pseudo-classes (0010), d = Element and pseudo-element selectors (0001). Highest score takes precedence."}, {"q": "What is the difference between box-sizing: content-box and border-box?", "a": "In content-box, width applies only to content; in border-box, width includes padding and border within the declared dimension."}, {"q": "What is Event Delegation in JavaScript?", "a": "A pattern where a single event listener is attached to a common parent element, leveraging event bubbling to handle events on child nodes via event.target."}], "assets": {"dashboard": "subjects/CSE326_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "ece120", "code": "ECE120", "title": "Basic Electrical, Electronics & IoT Lab", "department": "Electronics & Communication Engineering", "credits": 1, "semester": 1, "category": "Electronics", "icon": "\u26a1", "themeColor": "#f59e0b", "badge": "Hardware Lab", "shortDescription": "Hands-on electrical laws (KVL/KCL, Thevenin), semiconductor diodes, bridge rectifiers, BJT CE mode, universal NAND/NOR digital logic synthesis, Full Adders, breadboard wiring protocols, and Arduino Uno sensor interfacing.", "strategyMatrix": [{"unit": "Module 1", "what": "KVL, KCL, Thevenin's & Norton's theorems, Maximum Power Transfer (R_L = R_th, \u03b7 = 50%), Voltage/Current division rules.", "where": "Kothari & Nagrath Ch 1, 2", "how": "1. Solve Thevenin equivalent V_th and R_th circuits.\n2. Apply node voltage equations."}, {"unit": "Module 2", "what": "P-N junction barrier potential, Shockley diode equation, Half-Wave (\u03b7=40.6%) vs Full-Wave Bridge Rectifier (\u03b7=81.2%), PIV ratings.", "where": "Boylestad & Nashelsky Ch 1, 2", "how": "1. Derive rectifier efficiency and ripple factor.\n2. Calculate PIV requirements for diodes."}, {"unit": "Module 3", "what": "BJT operation in CE mode, input/output characteristics, active/cutoff/saturation regions, current gain relations (\u03b2 = \u03b1 / (1 - \u03b1)).", "where": "Boylestad & Nashelsky Ch 3, 4", "how": "1. Plot CE output curves.\n2. Calculate Q-point in voltage divider bias."}, {"unit": "Module 4 & 5", "what": "Universal NAND/NOR realization, De Morgan's laws, 4-variable K-Maps, Full Adder via 2 HAs + OR gate.", "where": "Morris Mano Ch 1-4", "how": "1. Synthesize all gates using NAND IC 7400.\n2. Draw Full Adder logic diagram with 2 HAs."}, {"unit": "Module 6", "what": "ATmega328P pinout, 10-bit ADC (4.88 mV), IR sensor active-LOW comparator logic (LM393), Breadboard practicals 1-5.", "where": "Raj Kamal (IoT Architecture)", "how": "1. Wire ICs on breadboard with VCC/GND decoupling.\n2. Write Arduino C++ active-LOW detection code."}], "visualArchitecture": [{"title": "Full-Wave Bridge Rectifier Circuit", "ascii": "           AC INPUT SECONDARY\n                 (~) A\n                  |\n        +---------+---------+\n        |                   |\n        v D1                v D2\n     +-----+             +-----+\n     |     |             |     |\n  +--+     +--+       +--+     +--+\n  |           |       |           |\n  |   +-------+-------+-------+   |\n  |   |                       |   |\n  |   |       [ LOAD RL ]     |   |\n  |   |        +       -      |   |\n  |   +-------+-------+-------+   |\n  |           |       |           |\n  |   +--+    |       |    +--+   |\n  +---|  |----+       +----|  |---+\n      +--+                 +--+\n        ^ D4                ^ D3\n        |                   |\n        +---------+---------+\n                  |\n                 (~) B"}, {"title": "Full Adder Circuit (2 HAs + 1 OR)", "ascii": "A \u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n       \u2502     [XOR 1]\u2500\u2500\u2500\u25ba A \u2295 B \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\nB \u2500\u2500\u252c\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                     \u2502     [XOR 2]\u2500\u2500\u2500\u25ba SUM = A \u2295 B \u2295 C_in\n    \u2502  \u2502                           C_in \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                     \u2502\n    \u2502        [AND 1]\u2500\u2500\u25ba A\u00b7B \u2500\u2500\u2500\u2500\u2500\u2510    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                \u2502          [AND 2]\u2500\u2500\u25ba C_in\u00b7(A \u2295 B)\n                                 \u2502             \u2502\n                                 \u2514\u2500\u2500\u25ba[ OR ]\u25c4\u2500\u2500\u2500\u2518\n                                       \u2502\n                                       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba C_out = A\u00b7B + C_in\u00b7(A \u2295 B)"}], "scoringStrategy": {"tier1": "Circuit Law & Formal Theorem Defense: State network theorems (Thevenin, Norton, KVL, KCL) with complete algebraic equations before solving numericals.", "tier2": "Labeled Circuit & Gate Schematics: Draw neat circuit schematics with labeled current loops, diode polarity arrows, or IC pinout numbers.", "tier3": "Ripple Factor & Invariant Verification: Verify bridge rectifier ripple factor is exactly 0.482, efficiency is 81.2%, and BJT current relation I_E = I_B + I_C holds true.", "tier4": "Precision SI Unit Boxing: Box final electrical parameters with explicit standard SI units (V, A, mA, k\u03a9, \u03bcF, Hz)."}, "textbooks": [{"title": "Basic Electrical Engineering", "authors": "D.P. Kothari & I.J. Nagrath", "chapters": "Ch 1, 2 (DC Theorems, Thevenin, Norton)"}, {"title": "Electronic Devices and Circuit Theory", "authors": "Robert L. Boylestad & Louis Nashelsky", "chapters": "Ch 1-4 (Diodes, Rectifiers, BJT CE characteristics)"}, {"title": "Digital Logic and Computer Design", "authors": "M. Morris Mano", "chapters": "Ch 1-4 (Universal Gates, Full Adder design, K-Maps)"}], "units": [{"unit": "Module 1", "title": "DC Circuit Analysis & Theorems", "topics": ["KVL & KCL node/mesh loops", "Thevenin's & Norton's equivalent circuits", "Maximum Power Transfer Theorem (R_L = R_th, \u03b7 = 50%)"]}, {"unit": "Module 2", "title": "Diode Physics & Rectifiers", "topics": ["P-N junction barrier potential", "Shockley equation", "Half-wave (\u03b7=40.6%) vs Full-wave bridge rectifier (\u03b7=81.2%, PIV=V_m, \u03b3=0.482)"]}, {"unit": "Module 3", "title": "BJT Transistors & Amplifiers", "topics": ["BJT CE mode input/output characteristics", "Active, Cutoff, Saturation regions", "Current gain relations (\u03b2 = \u03b1 / (1 - \u03b1))"]}, {"unit": "Module 4 & 5", "title": "Digital Logic & Adder Circuits", "topics": ["Universal NAND/NOR gate realization", "De Morgan's laws", "Full Adder using 2 Half Adders and 1 OR gate"]}, {"unit": "Module 6", "title": "Breadboard Practicals & Arduino IoT", "topics": ["IC 7400/7402/7408/7432/7486 pinouts & decoupling", "ATmega328P architecture", "LM393 IR sensor active-LOW interfacing"]}], "videos": [{"title": "Network Theorems & KVL/KCL Step-by-Step", "channel": "Neso Academy", "url": "https://www.youtube.com/results?search_query=Neso+Academy+Network+Theory+KVL+KCL"}, {"title": "Diode Characteristics & Bridge Rectifiers", "channel": "All About Electronics", "url": "https://www.youtube.com/results?search_query=All+About+Electronics+Half+Wave+and+Full+Wave+Rectifier"}, {"title": "BJT Common Emitter Transistor Characteristics", "channel": "Neso Academy", "url": "https://www.youtube.com/results?search_query=Neso+Academy+BJT+Common+Emitter+Characteristics"}], "vivaQuestions": [{"q": "State Thevenin's Theorem.", "a": "Any linear bilateral two-terminal DC network can be replaced by an equivalent circuit of a single voltage source V_th in series with an equivalent resistance R_th."}, {"q": "What is the Peak Inverse Voltage (PIV) of a Full-Wave Bridge Rectifier?", "a": "PIV = V_m (the peak secondary voltage), which is half that of a center-tapped rectifier (2V_m)."}, {"q": "State De Morgan's Laws.", "a": "1) (A \u00b7 B)' = A' + B'\n2) (A + B)' = A' \u00b7 B'"}], "assets": {"dashboard": "subjects/ECE120_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "int108", "code": "INT108", "title": "Python Programming & Problem Solving", "department": "Computer Science & Engineering", "credits": 4, "semester": 1, "category": "Computer Science", "icon": "\ud83d\udc0d", "themeColor": "#10b981", "badge": "Core Programming", "shortDescription": "Mastery of Python language mechanics, CPython compilation pipeline, PVM bytecode execution, Garbage Collection, LEGB scoping, C3 MRO inheritance, Pickle serialization, 15 University Lab Practicals, and Top 75 Viva Voce Bank.", "strategyMatrix": [{"unit": "Unit I & II", "what": "CPython compilation (AST -> Bytecode -> PVM), Reference counting, Generational GC, GIL, Small Integer caching [-5, 256], Loop-else invariant.", "where": "Kenneth A. Lambert Ch 1-3; Reema Thareja Ch 1-3", "how": "1. Trace bytecode execution in ceval.c.\n2. Understand loop-else execution rules.\n3. Master PEMDAS right-associative exponentiation."}, {"unit": "Unit III", "what": "PEP 393 string representations, slicing math s[start:stop:step], dynamic array overallocation, shallow vs deep copy, O(1) SipHash dict lookup.", "where": "Reema Thareja Ch 5-7", "how": "1. Calculate step slicing boundaries.\n2. Differentiate copy.copy() vs copy.deepcopy().\n3. Represent sparse matrices via tuple keys."}, {"unit": "Unit IV & V", "what": "LEGB variable scope resolution, Mutable default argument trap, Closures, Decorators, C3 MRO Linearization, __slots__ memory optimization, Dunder methods.", "where": "Reema Thareja Ch 8, 10, 11", "how": "1. Trace LEGB scope lookups.\n2. Compute C3 MRO linearization order.\n3. Implement __str__, __repr__, __add__ operator overloading."}, {"unit": "Unit VI & Labs", "what": "Context managers (with open()), pickle serialization & security warnings, try-except-else-finally lifecycle, regex tokens, Complete 15 Lab Practicals.", "where": "Lambert Ch 9; Python Official Docs", "how": "1. Write context managers with __enter__/__exit__.\n2. Memorize complete code for all 15 university practicals.\n3. Test regex token extractions."}], "visualArchitecture": [{"title": "CPython Compilation & PVM Pipeline", "ascii": "[ Source Code: script.py ]\n            \u2502\n            \u25bc (Lexer / Tokenizer)\n[ Tokens Stream ]\n            \u2502\n            \u25bc (Parser)\n[ Abstract Syntax Tree (AST) ]\n            \u2502\n            \u25bc (Bytecode Compiler)\n[ Bytecode Object: script.pyc (.pyc cache) ]\n            \u2502\n            \u25bc (Python Virtual Machine - ceval.c Loop)\n[ PVM Instruction Execution / Machine Code ]"}, {"title": "LEGB Scope Resolution Hierarchy", "ascii": "[ LOCAL (L) ] (Names assigned inside current function)\n       \u2502 (Not found?)\n       \u25bc\n[ ENCLOSING (E) ] (Names in outer enclosing function closures)\n       \u2502 (Not found?)\n       \u25bc\n[ GLOBAL (G) ] (Module-level top names, or global keyword)\n       \u2502 (Not found?)\n       \u25bc\n[ BUILT-IN (B) ] (Pre-loaded built-ins: len, range, print, open)\n       \u2502 (Not found?)\n       \u25bc\n[ NameError: name 'x' is not defined ]"}], "scoringStrategy": {"tier1": "Formal Pythonic Concept & Complexity Defense: Define Python mechanisms (CPython bytecode, GIL, Call-by-sharing, LEGB) with time and space complexity (O(1) dictionary lookup).", "tier2": "CPython Heap & Pointer Diagrams: Draw variable-to-heap object pointer arrows, illustrating immutable object caching and mutable list reallocations.", "tier3": "Trap & Invariant Cross-Checks: Avoid the mutable default argument trap and verify loop else execution conditions.", "tier4": "PEP 8 Clean Code Boxing: Box complete, indentation-perfect Python scripts with type hints and docstrings for 100/100 (Grade 'O')."}, "textbooks": [{"title": "Fundamentals of Python: First Programs", "authors": "Kenneth A. Lambert", "chapters": "Ch 1-9 (PVM, Slicing, OOP, Files)"}, {"title": "Python Programming: Using Problem Solving Approach", "authors": "Reema Thareja", "chapters": "Ch 1-11 (Data structures, Functions, Exceptions, Classes, MRO)"}], "units": [{"unit": "Unit I & II", "title": "CPython Compilation & Control Flow", "topics": ["AST -> Bytecode (.pyc) -> PVM (ceval.c)", "Ref Counting + Generational GC", "Small integer caching [-5, 256]", "Loop-else invariant"]}, {"unit": "Unit III", "title": "Sequences, Dicts & Hash Maps", "topics": ["PEP 393 string representations", "Slicing math s[start:stop:step]", "O(1) SipHash dict lookup", "Shallow vs Deep copy"]}, {"unit": "Unit IV & V", "title": "Functions, OOP & C3 MRO", "topics": ["LEGB scope resolution", "Mutable default argument trap", "Decorators & closures", "C3 Linearization (MRO)", "__slots__ memory optimization"]}, {"unit": "Unit VI & Labs", "title": "File I/O, Pickling & 15 Lab Practicals", "topics": ["Context managers (__enter__/__exit__)", "Pickle security warnings", "Complete 15 University Lab Practical codes", "Top 75 Viva Voce bank"]}], "videos": [{"title": "Python Programming Beginner to Advanced", "channel": "Corey Schafer", "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Tutorial+Beginners"}, {"title": "Python Data Structures, Dicts & Slicing", "channel": "Corey Schafer", "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Lists+Tuples+and+Dictionaries"}, {"title": "Object-Oriented Python & Dunder Methods", "channel": "Corey Schafer", "url": "https://www.youtube.com/results?search_query=Corey+Schafer+OOP+Python"}], "vivaQuestions": [{"q": "What is the Global Interpreter Lock (GIL) in CPython?", "a": "A mutex protecting CPython memory structures, preventing multiple native threads from executing bytecodes concurrently to ensure thread safety for reference counting."}, {"q": "Explain Python's calling convention: Pass-by-Object-Reference.", "a": "Object references are passed by value. Modifying a mutable object reflects in caller; rebinding a parameter name creates a local reference without modifying caller."}, {"q": "What is the Mutable Default Argument trap?", "a": "Default parameter values are evaluated once when the function is defined. If mutable (e.g., def f(x=[]):), mutations persist across subsequent calls."}], "assets": {"dashboard": "subjects/INT108_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/INT108_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/INT108_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "mth165", "code": "MTH165", "title": "Mathematics for Engineers", "department": "Mathematics", "credits": 4, "semester": 1, "category": "Mathematics", "icon": "\ud83d\udcd0", "themeColor": "#818cf8", "badge": "Core Mathematics", "shortDescription": "Rigorous engineering mathematics spanning Matrix Rank, Rouch\u00e9-Capelli system consistency, Leibniz n-th derivative rule, Mean Value Theorems, King's Integral Rule, Two-variable extrema (rt-s^2), Change of Order multiple integration, and Fourier series expansions.", "strategyMatrix": [{"unit": "Unit I", "what": "Rank via Row Echelon & Normal forms [I_r 0; 0 0], Rouch\u00e9-Capelli consistency for AX=B, Eigenvalue Trace/Det invariants, Cayley-Hamilton inverse A^-1.", "where": "B.S. Grewal Ch 2; Jain & Iyengar Ch 2", "how": "1. Transform to Upper Triangular form.\n2. Apply augmented matrix [A|B] test.\n3. Verify CHT: A^3 - c1 A^2 + c2 A - c3 I = 0."}, {"unit": "Unit II", "what": "Parametric (d^2y/dx^2), Implicit (-F_x/F_y), Leibniz's n-th derivative formula (uv)_n, Rolle's/LMVT/Taylor series, L'H\u00f4pital across 7 forms.", "where": "B.S. Grewal Ch 4, 5; NCERT XII Part I", "how": "1. Memorize Leibniz n-th derivative formula.\n2. Master 1^inf to L'H\u00f4pital log transformation.\n3. State continuity and differentiability conditions."}, {"unit": "Unit III", "what": "King's Property \u222bf(a+b-x)dx, Even/Odd symmetry, Wallis & Gamma reduction formula \u222b sin^m x cos^n x dx = \u0393((m+1)/2)\u0393((n+1)/2) / [2\u0393((m+n+2)/2)].", "where": "NCERT XII Part II; B.S. Grewal Ch 6", "how": "1. Add I and King's transformed I equations.\n2. Solve trig products via Gamma reductions."}, {"unit": "Unit IV", "what": "Path test for limits, Composite Euler's theorem x u_x + y u_y = n F(u)/F'(u), Two-variable extrema (rt - s^2), Lagrange multipliers.", "where": "Jain & Iyengar Ch 5; B.S. Grewal Ch 5", "how": "1. Prove limit non-existence via parabolic paths.\n2. Construct stationary point discriminant table.\n3. Form auxiliary function F = f + \u03bbg."}, {"unit": "Unit V", "what": "Double integrals change of order (switching vertical strips to horizontal strips with sketches), Jacobians in Polar & Spherical, 2D Area & 3D Volume.", "where": "B.S. Grewal Ch 7", "how": "1. Sketch 2D region R and mark vertices.\n2. Reverse vertical strip dy dx to horizontal dx dy.\n3. Convert to Polar/Spherical Jacobians."}, {"unit": "Unit VI", "what": "Dirichlet conditions, Euler formulas (a0, an, bn), Discontinuity jump convergence [f(x0+)+f(x0-)]/2, Half-range Sine/Cosine series, Parseval deductions.", "where": "Jain & Iyengar Ch 10; B.S. Grewal Ch 10", "how": "1. Check Even/Odd symmetry to zero out an/bn.\n2. Integrate by parts using [cos(n pi) = (-1)^n].\n3. Deduce sum(1/n^2) = pi^2 / 6."}], "visualArchitecture": [{"title": "Matrix Linear System (AX = B) Consistency Pipeline", "ascii": "[ System AX = B ] \u2500\u2500\u25ba Form Augmented Matrix [ A | B ]\n                             \u2502\n                             \u25bc Apply Elementary Row Operations\n                 [ Row Echelon Form of [ A | B ] ]\n                             \u2502\n         +-------------------+-------------------+\n         \u2502                                       \u2502\n         \u25bc                                       \u25bc\n  rank(A) != rank([A|B])                  rank(A) == rank([A|B]) = r\n         \u2502                                       \u2502\n         \u25bc                               +-------+-------+\n  INCONSISTENT                           \u2502               \u2502\n  (No Solution)                          \u25bc               \u25bc\n                                       r == n          r < n\n                                         \u2502               \u2502\n                                         \u25bc               \u25bc\n                                     CONSISTENT      CONSISTENT\n                                  (Unique Soln)   (Infinite Solns)\n                                                  (n-r Free Vars)"}, {"title": "Two-Variable Extrema Decision Matrix (rt - s\u00b2)", "ascii": "Stationary Points: Solve f_x = 0 and f_y = 0 for (a, b)\nCalculate at (a, b): r = f_xx, s = f_xy, t = f_yy\nEvaluate: Discriminant \u0394 = r\u00b7t - s\u00b2\n                 \u2502\n         +-------+-------+\n         \u2502               \u2502\n         \u25bc               \u25bc\n      \u0394 > 0            \u0394 < 0 \u2500\u2500\u25ba SADDLE POINT (Neither max nor min)\n         \u2502               \u2502\n     +---+---+           \u25bc\n     \u2502       \u2502         \u0394 = 0 \u2500\u2500\u25ba INCONCLUSIVE (Higher tests needed)\n     \u25bc       \u25bc\n   r > 0   r < 0\n     \u2502       \u2502\n     \u25bc       \u25bc\n   LOCAL   LOCAL\n  MINIMUM MAXIMUM"}], "scoringStrategy": {"tier1": "Formula & Precondition Defense: State standard equations (Leibniz, Euler, King's rule, Fourier coefficients) and explicit preconditions (continuity on [a,b], differentiability on (a,b)).", "tier2": "Visual 2D Region Sketches & Strips: Draw clear 2D Cartesian region diagrams for Change of Order double integration, labeling boundary curves and strip arrows.", "tier3": "Invariant Cross-Checks: Verify eigenvalue trace sum (\u03a3 \u03bb_i = tr(A)) and determinant product (\u03a0 \u03bb_i = det(A)); check even/odd symmetry before calculating Fourier coefficients.", "tier4": "Answer & Deduction Series Boxing: Box final numerical solutions with units and write explicit deduction lines (\u03a3 1/n\u00b2 = \u03c0\u00b2/6)."}, "textbooks": [{"title": "Higher Engineering Mathematics", "authors": "B.S. Grewal", "chapters": "Ch 2, 4, 5, 6, 7, 10 (Matrices, Calculus, Multiple Integrals, Fourier)"}, {"title": "Advanced Engineering Mathematics", "authors": "R.K. Jain & S.R.K. Iyengar", "chapters": "Ch 2, 5, 10 (Linear systems, Homogeneous functions, Extrema)"}], "units": [{"unit": "Unit I", "title": "Matrix Methods & Linear Systems", "topics": ["Rank via Row Echelon and Normal form [I_r 0; 0 0]", "Rouch\u00e9-Capelli consistency for AX=B", "Eigenvalue Trace and Determinant invariants", "Cayley-Hamilton inverse A^-1"]}, {"unit": "Unit II", "title": "Differential Calculus & Applications", "topics": ["Parametric & Implicit derivatives", "Leibniz's n-th derivative formula (uv)_n", "Rolle's & LMVT theorems", "L'H\u00f4pital across 7 indeterminate forms"]}, {"unit": "Unit III", "title": "Fundamentals of Integral Calculus", "topics": ["King's Rule \u222bf(a+b-x)dx", "Wallis & Gamma reduction formula \u222b sin^m x cos^n x dx", "Definite integral symmetry"]}, {"unit": "Unit IV", "title": "Multivariate Differentiation", "topics": ["Composite Euler's theorem for homogeneous functions", "Two-variable extrema discriminant (rt - s^2)", "Lagrange multipliers \u2207f + \u03bb\u2207g = 0"]}, {"unit": "Unit V", "title": "Multivariable Integration", "topics": ["Double integral Change of Order (switching vertical/horizontal strips)", "Jacobians in Polar (r dr d\u03b8) and Spherical coordinates", "Area and Volume applications"]}, {"unit": "Unit VI", "title": "Fourier Series", "topics": ["Euler's formulae (a0, an, bn)", "Discontinuity jump convergence [f(x0+)+f(x0-)]/2", "Half-range Sine/Cosine series", "Parseval's identity deductions"]}], "videos": [{"title": "Rank of Matrix & System Consistency (AX=B)", "channel": "Dr. Gajendra Purohit", "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Rank+of+Matrix+Echelon+Form+Normal+Form"}, {"title": "Leibniz's Theorem & n-th Derivative Rules", "channel": "BSV Maths", "url": "https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Leibniz+Theorem+nth+derivative"}, {"title": "Double Integration Change of Order with Region Sketches", "channel": "Dr. Gajendra Purohit", "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Change+of+Order+of+Integration"}], "vivaQuestions": [{"q": "State the Rouch\u00e9-Capelli Theorem for linear systems AX = B.", "a": "The system is consistent iff rank(A) = rank([A|B]). If rank = n, unique solution; if rank < n, infinite solutions with (n-rank) free variables."}, {"q": "State the eigenvalue invariants for any square matrix A.", "a": "(1) Sum of eigenvalues = Trace(A), (2) Product of eigenvalues = Determinant |A|."}, {"q": "What is King's Property of definite integrals?", "a": "\u222b[a to b] f(x) dx = \u222b[a to b] f(a + b - x) dx."}], "assets": {"dashboard": "subjects/MTH165_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}, {"id": "phy175", "code": "PHY175", "title": "Physics for Engineers & Electronics", "department": "Physics & Electronics", "credits": 3, "semester": 1, "category": "Physics", "icon": "\ud83d\udd2c", "themeColor": "#06b6d4", "badge": "Core Physics", "shortDescription": "Comprehensive engineering physics and digital hardware syllabus covering Solid State Physics, Hall Effect derivation, BJT CE modes, CMOS inverters, Optical Fiber NA, 4-variable K-Maps, Full Adders, Master-Slave JK Flip-Flops, Shift Registers, and Arduino Sensors.", "strategyMatrix": [{"unit": "Unit I", "what": "Free electron theory, Fermi energy, Fermi-Dirac distribution f(E), Band theory, Effective mass, Hall effect derivation (V_H = BI/net, R_H = 1/ne), Solar cell Fill Factor & efficiency.", "where": "V.K. Mehta Ch 1; S.O. Pillai Ch 6", "how": "1. Memorize Fermi-Dirac f(E) equation.\n2. Draw 3D slab for V_H = BI / (n e t).\n3. Contrast Direct vs Indirect bandgaps."}, {"unit": "Unit II", "what": "KCL, KVL, Voltage/Current division, PN Diode characteristics, Rectifier efficiency (40.6% vs 81.2%), BJT CE modes, CMOS inverter, Optical fiber NA = \u221a(n1^2 - n2^2), CPU vs GPU.", "where": "Robert L. Boylestad Ch 1-4", "how": "1. Practice bridge rectifier PIV & efficiency.\n2. Master CMOS zero static power operation.\n3. Derive Fiber NA = sqrt(n1^2 - n2^2)."}, {"unit": "Unit III", "what": "Radix conversions, 2's complement subtraction & overflow, Binary-Gray conversion, Universal NAND/NOR gate synthesis, Boolean algebra, 4-variable K-Maps with Don't Cares ('X').", "where": "Thomas L. Floyd Ch 2-4; M. Morris Mano", "how": "1. Perform 2's comp subtraction + overflow.\n2. Master 4-variable K-Map rolling grouping.\n3. Apply Don't Care ('X') for max reduction."}, {"unit": "Unit IV", "what": "Half/Full Adders (Sum = A\u2295B\u2295C_in, C_out = AB + C_in(A\u2295B)) via 2 HAs + OR, Subtractors, 4:1 / 8:1 MUX logic generators, Decoders, Priority Encoders, 2-bit Comparators.", "where": "Thomas L. Floyd Ch 5, 6", "how": "1. Draw Full Adder with 2 HAs + 1 OR gate.\n2. Implement logic functions using MUX tables.\n3. Derive 2-bit Magnitude Comparator equations."}, {"unit": "Unit V", "what": "Latches vs Flip-Flops (SR, JK, D, T), Master-Slave JK race-around fix, Flip-Flop conversion tables, Shift registers (SISO, SIPO, PISO, PIPO), Mod-N counters (f_max = 1/n*t_pd).", "where": "Thomas L. Floyd Ch 7, 8; R.P. Jain", "how": "1. Master Master-Slave JK race-around fix.\n2. Use excitation tables for FF conversions.\n3. Connect NAND to CLR for Mod-N counter."}, {"unit": "Unit VI", "what": "ATmega328P architecture, 10-bit ADC resolution (4.88 mV), Ultrasonic HC-SR04 distance formula (d = T/58 cm), LDR voltage divider, DHT11 40-bit protocol.", "where": "Richard Blum; Tero Karvinen", "how": "1. Calculate ADC resolution V_ref / 1023.\n2. Memorize distance = (Time * 0.034) / 2.\n3. Explain 40-bit DHT11 single-bus packet."}], "visualArchitecture": [{"title": "Hall Effect 3D Slab & Force Balance", "ascii": "                       Magnetic Field B (z-axis)\n                                  ^\n                                  |\n           +--------------------------------------+\n          /                                      /|\n         +--------------------------------------+ |\n         |  - - - - - - - - - - - - - - - - - - | |  Thickness t\nCurrent I|   F_e = e\u00b7E_H  (downward)            | |\n =======>|   F_m = e\u00b7v_d\u00b7B (upward)             | +\n         |  + + + + + + + + + + + + + + + + + + |/\n         +--------------------------------------+\n                     Width w\n\n1. Force Balance:     e \u00b7 E_H = e \u00b7 v_d \u00b7 B  ===>  E_H = v_d \u00b7 B\n2. Current Density:   J = n\u00b7e\u00b7v_d = I / (w\u00b7t) ===> v_d = I / (n\u00b7e\u00b7w\u00b7t)\n3. Hall Voltage:      V_H = E_H \u00b7 w = (B \u00b7 I) / (n \u00b7 e \u00b7 t)\n4. Hall Coefficient:  R_H = 1 / (n \u00b7 e)  ===>  V_H = (R_H \u00b7 B \u00b7 I) / t\n5. Carrier Mobility:  \u03bc = \u03c3 \u00b7 R_H"}, {"title": "4-Variable K-Map Grouping Architecture", "ascii": "                  CD      00          01          11          10\n             AB      +-----------+-----------+-----------+-----------+\n             00      |    m0     |    m1     |    m3     |    m2     |\n                     +-----------+-----------+-----------+-----------+\n             01      |    m4     |    m5     |    m7     |    m6     |\n                     +-----------+-----------+-----------+-----------+\n             11      |    m12    |    m13    |    m15    |    m14    |\n                     +-----------+-----------+-----------+-----------+\n             10      |    m8     |    m9     |    m11    |    m10    |\n                     +-----------+-----------+-----------+-----------+\n\nGrouping Rules: Octet (8 cells -> -3 vars) > Quad (4 cells -> -2 vars)\n                > Pair (2 cells -> -1 var) > Single (1 cell)\nCorner Quad: (m0, m2, m8, m10) -> Product Term: B'D'"}], "scoringStrategy": {"tier1": "Physical Formula & Definition Defense: Write standard physics equations with definitions (V_H = BI / net, NA = \u221a(n1^2 - n2^2)) and state boundary conditions.", "tier2": "Labeled 3D Slabs & Gate Schematics: Draw 3D Hall effect slabs showing B, I, and field directions; draw clean gate-level schematics for Adders, MUX, and Flip-Flops.", "tier3": "K-Map & Excitation Cross-Checks: Verify K-Map grouping with Don't Cares ('X') and double check Flip-Flop excitation transitions.", "tier4": "Numerical Precision & Unit Boxing: Box final numerical solutions with explicit standard SI units (m^3/C, cm, mV, \u03bcs)."}, "textbooks": [{"title": "Principles of Electronics", "authors": "V.K. Mehta & Rohit Mehta", "chapters": "Ch 1, 3, 4, 8 (Semiconductors, Diodes, BJTs)"}, {"title": "Electronic Devices and Circuit Theory", "authors": "Robert L. Boylestad & Louis Nashelsky", "chapters": "Ch 1, 3, 5, 13 (Rectifiers, BJT, CMOS)"}, {"title": "Digital Fundamentals (11th Ed)", "authors": "Thomas L. Floyd", "chapters": "Ch 2-8 (K-Maps, Combinational Circuits, Flip-Flops, Shift Registers, Counters)"}], "units": [{"unit": "Unit I", "title": "Solid State Physics & Band Theory", "topics": ["Free electron theory & Fermi energy", "Fermi-Dirac distribution f(E)", "Effective mass m*", "Hall effect derivation (V_H = BI/net, R_H = 1/ne)", "Solar cell Fill Factor"]}, {"unit": "Unit II", "title": "Electricity & Electronic Devices", "topics": ["PN junction diode Shockley equation", "Bridge rectifier efficiency (81.2%)", "BJT CE mode (\u03b1, \u03b2)", "CMOS zero static power", "Optical fiber NA = \u221a(n1^2 - n2^2)"]}, {"unit": "Unit III", "title": "Number Systems & Logic Gates", "topics": ["2's complement arithmetic & overflow", "Binary-to-Gray conversion", "Universal NAND/NOR synthesis", "4-variable K-Maps with Don't Cares ('X')"]}, {"unit": "Unit IV", "title": "Combinational Logic Circuits", "topics": ["Full Adder (2 HAs + OR)", "Subtractors", "Multiplexers (4:1, 8:1)", "3-to-8 Decoders", "2-bit Magnitude Comparators"]}, {"unit": "Unit V", "title": "Sequential Logic Circuits", "topics": ["Latches vs Flip-Flops", "Master-Slave JK race-around fix", "Flip-Flop conversions", "Shift Registers (SISO/SIPO/PISO/PIPO)", "Mod-N asynchronous counters"]}, {"unit": "Unit VI", "title": "Arduino & Sensors Interfacing", "topics": ["ATmega328P pinout & 10-bit ADC (4.88 mV)", "Ultrasonic HC-SR04 distance (d = T/58 cm)", "LDR voltage divider", "DHT11 40-bit protocol"]}], "videos": [{"title": "Hall Effect Derivation & Fermi-Dirac Distribution", "channel": "Dr. Gajendra Purohit / NPTEL", "url": "https://www.youtube.com/results?search_query=Hall+Effect+Derivation+Engineering+Physics+Dr+Gajendra+Purohit"}, {"title": "PN Junction Diode, BJT & CMOS Technology", "channel": "All About Electronics", "url": "https://www.youtube.com/results?search_query=All+About+Electronics+PN+Junction+Diode+Characteristics+Rectifiers"}, {"title": "K-Map 4-Variable Minimization & Full Adder", "channel": "Neso Academy", "url": "https://www.youtube.com/results?search_query=Neso+Academy+K+Map+Minimization+4+Variables+Dont+Care"}], "vivaQuestions": [{"q": "What is the Hall Effect and its derivation formula?", "a": "Generation of transverse voltage V_H across a conductor in a magnetic field due to Lorentz force. V_H = (B \u00b7 I) / (n \u00b7 e \u00b7 t), with Hall coefficient R_H = 1/(n\u00b7e)."}, {"q": "Why does CMOS consume zero static power?", "a": "PMOS and NMOS are complementary; in any steady state, one transistor is completely OFF, eliminating any direct DC path from V_DD to GND."}, {"q": "What is the race-around condition in JK Flip-Flops?", "a": "When J=1, K=1 and clock pulse width tp > propagation delay tpd, the output toggles continuously during the high clock level. Solved using Master-Slave JK architecture."}], "assets": {"dashboard": "subjects/PHY175_Ultimate_Master_Study_Dashboard.html", "guideMd": "subjects/PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.md", "guidePdf": "subjects/PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"}}];
}

// Load Subjects with 100% offline file:/// & http:// support
async function loadSubjects() {
  let loadedList = [];

  // Step 1: Immediately use embedded window.DEFAULT_SUBJECTS (instant rendering, zero delay)
  if (typeof window.DEFAULT_SUBJECTS !== 'undefined' && Array.isArray(window.DEFAULT_SUBJECTS) && window.DEFAULT_SUBJECTS.length > 0) {
    loadedList = JSON.parse(JSON.stringify(window.DEFAULT_SUBJECTS));
  }

  // Step 2: If on a web server, attempt live fetch from data/subjects.json
  if (window.location.protocol.startsWith('http')) {
    try {
      const res = await fetch('data/subjects.json');
      if (res.ok) {
        const remoteData = await res.json();
        if (Array.isArray(remoteData) && remoteData.length > 0) {
          loadedList = remoteData;
        }
      }
    } catch (e) {
      console.log('Serving from embedded subject catalog.');
    }
  }

  // Step 3: Hardcoded emergency fallback if list is still empty
  if (!loadedList || loadedList.length === 0) {
    loadedList = getCoreSubjectsFallback();
  }

  // Step 4: Merge custom subjects from localStorage
  try {
    const localSaved = localStorage.getItem('apex_custom_subjects');
    if (localSaved) {
      const customSubs = JSON.parse(localSaved);
      if (Array.isArray(customSubs)) {
        const existingIds = new Set(loadedList.map(s => s.id));
        customSubs.forEach(cs => {
          if (cs && cs.id && !existingIds.has(cs.id)) {
            loadedList.push(cs);
          }
        });
      }
    }
  } catch (e) {
    console.error('Error merging custom subjects from localStorage', e);
  }

  allSubjects = loadedList;
  updateStats();
  renderSubjects();
  if (typeof populateFormulaBank === 'function') populateFormulaBank();
  if (typeof populateFlashcardSubjects === 'function') populateFlashcardSubjects();
}

// Update Portal Stats
function updateStats() {
  const statSubs = document.getElementById('statTotalSubjects');
  if (statSubs) statSubs.textContent = allSubjects.length;

  const totalCredits = allSubjects.reduce((sum, s) => sum + (Number(s.credits) || 0), 0);
  const statCredits = document.getElementById('statTotalCredits');
  if (statCredits) statCredits.textContent = totalCredits;

  const totalVideos = allSubjects.reduce((sum, s) => sum + (s.videos ? s.videos.length : 0), 0);
  const statVideos = document.getElementById('statTotalVideos');
  if (statVideos) statVideos.textContent = totalVideos;

  const totalViva = allSubjects.reduce((sum, s) => sum + (s.vivaQuestions ? s.vivaQuestions.length : 0), 0);
  const statViva = document.getElementById('statTotalViva');
  if (statViva) statViva.textContent = totalViva;
}

// Render Subject Cards
function renderSubjects() {
  const grid = document.getElementById('subjectsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = allSubjects.filter(sub => {
    // Dept Filter
    const matchesDept = currentFilterDept === 'all' ||
      (sub.department && sub.department.toLowerCase().includes(currentFilterDept.toLowerCase())) ||
      (sub.category && sub.category.toLowerCase().includes(currentFilterDept.toLowerCase()));

    // Search Query
    const q = currentSearchQuery.toLowerCase().trim();
    if (!q) return matchesDept;

    const matchesSearch = sub.code.toLowerCase().includes(q) ||
      sub.title.toLowerCase().includes(q) ||
      (sub.shortDescription && sub.shortDescription.toLowerCase().includes(q)) ||
      (sub.department && sub.department.toLowerCase().includes(q)) ||
      (sub.units && sub.units.some(u => u.title.toLowerCase().includes(q) || (u.topics && u.topics.some(t => t.toLowerCase().includes(q)))));

    return matchesDept && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</p>
        <h3>No matching subjects found</h3>
        <p>Try refining your search terms or filter selection, or add a new subject.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card-subject';
    card.style.borderTop = `4px solid ${sub.themeColor || 'var(--primary)'}`;

    const progressPercent = typeof getSubjectProgressPercent === 'function' ? getSubjectProgressPercent(sub) : 0;

    const openDashText = typeof t === 'function' ? t('open_dashboard') : '🚀 Open Dashboard';
    const viewHubText = typeof t === 'function' ? t('view_hub') : '📖 View Hub';
    const pdfNotesText = typeof t === 'function' ? t('pdf_notes') : '📄 PDF Notes';
    const mdGuideText = typeof t === 'function' ? t('md_guide') : '📝 Markdown';
    const creditsLabel = typeof t === 'function' ? t('credits_label') : 'Credits';
    const unitsLabel = typeof t === 'function' ? t('units_label') : 'Units';
    const videosLabel = typeof t === 'function' ? t('videos_label') : 'Videos';

    card.innerHTML = `
      <div>
        <div class="card-header">
          <div class="card-icon-code">
            <div class="subject-icon-box">${sub.icon || '📚'}</div>
            <div>
              <div class="subject-code-tag">${sub.code}</div>
              <div class="subject-dept">${sub.department || 'Engineering'}</div>
            </div>
          </div>
          <span class="badge-pill">${sub.badge || 'Semester ' + (sub.semester || 1)}</span>
        </div>

        <h3 class="card-title">${sub.title}</h3>
        <p class="card-description">${sub.shortDescription || 'Comprehensive course syllabus, textbooks, video guides, and viva question bank.'}</p>
      </div>

      <div>
        <!-- Subject Topic Progress Bar -->
        <div style="margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem;">
            <span>Syllabus Mastery</span>
            <span id="prog_text_${sub.id}">${progressPercent}% Done</span>
          </div>
          <div style="background: var(--bg-card); height: 6px; border-radius: 9999px; overflow: hidden;">
            <div id="prog_bar_${sub.id}" style="width: ${progressPercent}%; height: 100%; background: ${sub.themeColor || 'var(--primary)'}; transition: width 0.3s;"></div>
          </div>
        </div>

        <div class="card-meta-row">
          <div class="meta-item"><span>⭐</span> ${sub.credits || 4} ${creditsLabel}</div>
          <div class="meta-item"><span>📖</span> ${(sub.units && sub.units.length) || 6} ${unitsLabel}</div>
          <div class="meta-item"><span>📺</span> ${(sub.videos && sub.videos.length) || 4} ${videosLabel}</div>
        </div>

        <div class="card-actions">
          <button class="btn btn-primary" onclick="openInPortalDashboard('${sub.assets ? sub.assets.dashboard : '#'}', '${sub.title.replace(/'/g, "\'")}', '${sub.code}')">
            ${typeof t === 'function' && t('view_in_portal') ? t('view_in_portal') : '💻 In-Portal View'}
          </button>
          <button class="btn btn-secondary" onclick="openSubjectDrawer('${sub.id}')">
            ${viewHubText}
          </button>
          <a href="${sub.assets ? sub.assets.dashboard : '#'}" target="_blank" class="btn btn-outline btn-sm" title="Open Full Screen Dashboard in New Tab">
            ↗️ Full Tab
          </a>
          <a href="${sub.assets ? sub.assets.guidePdf : '#'}" download class="btn btn-outline btn-sm">
            ${pdfNotesText}
          </a>
          <button class="btn btn-secondary btn-sm" onclick="openMarkdownReader('${sub.assets ? sub.assets.guideMd : '#'}', '${sub.code}')">
            ${mdGuideText}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filter and Search Setup
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderSubjects();
    });
  }

  document.querySelectorAll('.filter-pills .pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilterDept = pill.getAttribute('data-dept');
      renderSubjects();
    });
  });
}

// Global Keyboard Shortcuts
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === '/') {
      e.preventDefault();
      const input = document.getElementById('searchInput');
      if (input) input.focus();
    } else if (e.key === 't' || e.key === 'T') {
      toggleTheme();
    } else if (e.key === 'p' || e.key === 'P') {
      openPomodoroModal();
    } else if (e.key === 'f' || e.key === 'F') {
      openFlashcardModal();
    } else if (e.key === 'g' || e.key === 'G') {
      openGpaModal();
    } else if (e.key === 'Escape') {
      closeSubjectDrawer();
      closeAddSubjectModal();
      if (typeof closeFlashcardModal === 'function') closeFlashcardModal();
      if (typeof closePomodoroModal === 'function') closePomodoroModal();
      if (typeof closeGpaModal === 'function') closeGpaModal();
      if (typeof closeFormulaModal === 'function') closeFormulaModal();
      if (typeof closeNotesModal === 'function') closeNotesModal();
      if (typeof closeMarkdownReader === 'function') closeMarkdownReader();
    }
  });
}

// Open Subject Drawer with Multi-Tabbed Interface matching HTML Dashboard
function openSubjectDrawer(id) {
  const sub = allSubjects.find(s => s.id === id);
  if (!sub) return;

  activeDrawerSubjectId = id;
  const drawer = document.getElementById('subjectDrawer');
  document.getElementById('drawerTitle').textContent = `${sub.code}: ${sub.title}`;

  renderDrawerTabContent();
  drawer.classList.add('active');
}

function switchDrawerTab(tabName) {
  activeDrawerTabName = tabName;
  document.querySelectorAll('.drawer-tabs-bar .drawer-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabName)) {
      btn.classList.add('active');
    }
  });
  renderDrawerTabContent();
}

function renderDrawerTabContent() {
  const sub = allSubjects.find(s => s.id === activeDrawerSubjectId);
  if (!sub) return;

  const body = document.getElementById('drawerBody');
  let contentHtml = '';

  // 1. Top Quick Action Bar
  const topActionsHtml = `
    <div style="margin-bottom: 1.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <a href="${sub.assets ? sub.assets.dashboard : '#'}" target="_blank" class="btn btn-primary" style="flex: 1;">
        🚀 Open Full HTML Dashboard
      </a>
      <a href="${sub.assets ? sub.assets.guidePdf : '#'}" download class="btn btn-secondary">
        📄 Download PDF
      </a>
      <button class="btn btn-outline" onclick="openMarkdownReader('${sub.assets ? sub.assets.guideMd : '#'}', '${sub.code}')">
        📝 In-Portal Markdown
      </button>
    </div>
  `;

  if (activeDrawerTabName === 'tabStrategy') {
    // Strategy Matrix
    let rowsHtml = '';
    if (sub.strategyMatrix && sub.strategyMatrix.length > 0) {
      rowsHtml = sub.strategyMatrix.map(row => `
        <tr>
          <td style="font-weight: 700; color: var(--primary); white-space: nowrap;">${row.unit}</td>
          <td><strong>${row.what}</strong></td>
          <td style="color: var(--text-muted); font-size: 0.85rem;">${row.where}</td>
          <td style="white-space: pre-line;">${row.how}</td>
        </tr>
      `).join('');
    } else {
      rowsHtml = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Strategy matrix available in full dashboard.</td></tr>`;
    }

    contentHtml = `
      ${topActionsHtml}
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🗺️ "What, Where & How to Study" Master Strategy Matrix</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">
        Structured 3-step mastery formula mapping core syllabus concepts to standard textbook chapters and high-yield scoring execution.
      </p>
      <div style="overflow-x: auto;">
        <table class="strategy-table">
          <thead>
            <tr>
              <th>Unit</th>
              <th>What to Study (Core Mechanisms)</th>
              <th>Where to Study (Textbooks & Chapters)</th>
              <th>How to Study (Execution Strategy)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  } else if (activeDrawerTabName === 'tabFlowcharts') {
    // Visual Architecture Flowcharts
    let flowchartsHtml = '';
    if (sub.visualArchitecture && sub.visualArchitecture.length > 0) {
      flowchartsHtml = sub.visualArchitecture.map(diag => `
        <div style="margin-bottom: 1.5rem;">
          <h5 style="color: var(--text-bright); font-size: 0.95rem; margin-bottom: 0.35rem;">📊 ${diag.title}</h5>
          <div class="ascii-box">${diag.ascii}</div>
        </div>
      `).join('');
    } else {
      flowchartsHtml = `<p style="color: var(--text-muted);">Visual architecture schematics available in standalone dashboard.</p>`;
    }

    contentHtml = `
      ${topActionsHtml}
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🎨 Visual Architecture Flowcharts & Memory Invariants</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        High-contrast monospace architecture diagrams, state machines, and mathematical invariant trees designed for rapid visual recall during exams.
      </p>
      ${flowchartsHtml}
    `;
  } else if (activeDrawerTabName === 'tabScoring') {
    // 4-Tier Scoring Strategy
    const strat = sub.scoringStrategy || {};
    contentHtml = `
      ${topActionsHtml}
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🏆 100-Percentile 4-Tier Exam Scoring Strategy</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Rigorous answer structuring rubric to secure full marks (Grade 'O' 100/100) from university examiners.
      </p>
      <div class="tier-card" style="border-left: 4px solid #38bdf8;">
        <div class="tier-header">🛡️ Tier 1: Formula & Formal Definition Defense (Base 40%)</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${strat.tier1 || "State formal definitions, standard mathematical axioms, and governing physical laws before solving problems."}</p>
      </div>
      <div class="tier-card" style="border-left: 4px solid #34d399;">
        <div class="tier-header">📊 Tier 2: Visual Architecture Schematics (Tier 2: 70%)</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${strat.tier2 || "Draw neat, boxed ASCII flowcharts, state transitions, circuit loops, or 2D region sketches."}</p>
      </div>
      <div class="tier-card" style="border-left: 4px solid #fbbf24;">
        <div class="tier-header">⚖️ Tier 3: Comparative Invariant Tables (Tier 3: 90%)</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${strat.tier3 || "Tabulate contrastive parameters and verify boundary condition invariants."}</p>
      </div>
      <div class="tier-card" style="border-left: 4px solid #f43f5e;">
        <div class="tier-header">📦 Tier 4: Precision Code / CLI / SI Unit Boxing (Grade 'O' 100%)</div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${strat.tier4 || "Box all final answers, numerical results with explicit SI units, and syntax-perfect code snippets."}</p>
      </div>
    `;
  } else if (activeDrawerTabName === 'tabSyllabus') {
    // Syllabus Units & Topic Checklist
    let topicCounter = 0;
    let unitsHtml = '';
    if (sub.units && sub.units.length > 0) {
      unitsHtml = sub.units.map((u, i) => {
        const topicsListHtml = (u.topics || []).map(t => {
          const currentIndex = topicCounter++;
          const checked = typeof isTopicChecked === 'function' && isTopicChecked(sub.id, currentIndex) ? 'checked' : '';
          return `
            <li style="margin-bottom: 0.45rem; display: flex; align-items: center; gap: 0.5rem;">
              <input type="checkbox" id="topic_${sub.id}_${currentIndex}" ${checked} onchange="toggleTopicCheck('${sub.id}', ${currentIndex})" style="cursor: pointer;">
              <label for="topic_${sub.id}_${currentIndex}" style="cursor: pointer; font-size: 0.88rem;">${t}</label>
            </li>
          `;
        }).join('');

        return `
          <div class="accordion-item ${i === 0 ? 'active' : ''}">
            <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
              <span>${u.unit}: ${u.title}</span>
              <span>▼</span>
            </div>
            <div class="accordion-body">
              <ul style="list-style: none; padding-left: 0;">
                ${topicsListHtml}
              </ul>
            </div>
          </div>
        `;
      }).join('');
    }

    contentHtml = `
      ${topActionsHtml}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h4 style="color: var(--primary);">📖 Syllabus Units & Interactive Topic Checklist</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted);">Check topics to track progress</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">${sub.shortDescription}</p>
      ${unitsHtml}
    `;
  } else if (activeDrawerTabName === 'tabTextbooks') {
    // Reference Textbooks
    let textbooksHtml = '';
    if (sub.textbooks && sub.textbooks.length > 0) {
      textbooksHtml = sub.textbooks.map(tb => `
        <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 0.75rem;">
          <h5 style="color: var(--text-bright); font-size: 1rem; margin-bottom: 0.25rem;">📖 ${tb.title}</h5>
          <div style="color: var(--primary); font-size: 0.88rem; margin-bottom: 0.35rem;">Author(s): <strong>${tb.authors}</strong></div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">📌 Mapped Chapters: ${tb.chapters}</div>
        </div>
      `).join('');
    } else {
      textbooksHtml = `<p style="color: var(--text-muted);">Standard university textbook mappings available in PDF guide.</p>`;
    }

    contentHtml = `
      ${topActionsHtml}
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">📚 Standard Recommended Textbooks</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Prescribed reference volumes mapped directly to university examination rubrics.
      </p>
      ${textbooksHtml}
    `;
  } else if (activeDrawerTabName === 'tabVideos') {
    // Video Master Hub
    let videosHtml = '';
    if (sub.videos && sub.videos.length > 0) {
      videosHtml = sub.videos.map((v, vidx) => `
        <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1.15rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 0.85rem; box-shadow: var(--shadow-sm); transition: transform 0.2s, border-color 0.2s;" onmouseenter="this.style.borderColor='var(--primary)'" onmouseleave="this.style.borderColor='var(--border)'">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge-pill" style="font-size: 0.72rem; background: var(--primary-glow); color: var(--primary);">${v.unit || 'Core Video'}</span>
              <strong style="color: var(--text-bright); font-size: 1rem;">${v.title}</strong>
            </div>
            <a href="${v.url}" target="_blank" class="btn btn-primary btn-sm" style="background: #dc2626; border-color: #dc2626; color: white; display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 700;" title="Open YouTube Tutorial">
              <span>▶ Watch Video</span>
            </a>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.35rem;">
            📺 <strong>Channel / Creator:</strong> <span style="color: var(--text-secondary);">${v.channel || 'Curated Channel'}</span>
          </div>
          ${v.focus ? `<p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0; background: rgba(255,255,255,0.02); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--primary);">${v.focus}</p>` : ''}
        </div>
      `).join('');
    } else {
      videosHtml = `<p style="color: var(--text-muted); padding: 1.5rem; text-align: center;">Curated video tutorials available in master study hub.</p>`;
    }

    contentHtml = `
      ${topActionsHtml}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <h4 style="color: var(--primary); margin: 0;">📺 Curated Video Master Hub (${sub.videos ? sub.videos.length : 0} Tutorials)</h4>
        <span class="badge-pill" style="background: rgba(220, 38, 38, 0.15); color: #f87171; border-color: rgba(220, 38, 38, 0.3);">100% High-Yield Syllabus Coverage</span>
      </div>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        Complete library of handpicked YouTube engineering tutorials, numerical derivations, and animated walkthroughs for ${sub.code}.
      </p>
      ${videosHtml}
    `;
  } else if (activeDrawerTabName === 'tabViva') {
    // Viva Voce Q&A Bank
    let vivaHtml = '';
    if (sub.vivaQuestions && sub.vivaQuestions.length > 0) {
      vivaHtml = sub.vivaQuestions.map(vq => `
        <div class="accordion-item">
          <div class="accordion-header" onclick="this.parentElement.classList.toggle('active')">
            <span>❓ ${vq.q}</span>
            <span>▼</span>
          </div>
          <div class="accordion-body">
            <p style="color: #34d399; font-weight: 500; line-height: 1.5;">${vq.a}</p>
          </div>
        </div>
      `).join('');
    } else {
      vivaHtml = `<p style="color: var(--text-muted);">Viva Voce bank available in main study dossier.</p>`;
    }

    contentHtml = `
      ${topActionsHtml}
      <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🎯 Top Master Viva Voce & Exam Question Bank</h4>
      <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.25rem;">
        High-frequency lab viva and external examination questions with model Grade 'O' responses.
      </p>
      ${vivaHtml}
    `;
  }

  body.innerHTML = contentHtml;
}

function closeSubjectDrawer() {
  const drawer = document.getElementById('subjectDrawer');
  if (drawer) drawer.classList.remove('active');
}

// Add Subject Modal Controls
function openAddSubjectModal() {
  document.getElementById('addSubjectModal').classList.add('active');
}

function closeAddSubjectModal() {
  document.getElementById('addSubjectModal').classList.remove('active');
}

// Handle Add Subject Form Submit
function handleAddSubject(event) {
  event.preventDefault();

  const code = document.getElementById('newSubCode').value.trim().toUpperCase();
  const title = document.getElementById('newSubTitle').value.trim();
  const dept = document.getElementById('newSubDept').value.trim();
  const semester = Number(document.getElementById('newSubSem').value) || 1;
  const credits = Number(document.getElementById('newSubCredits').value) || 3;
  const icon = document.getElementById('newSubIcon').value.trim() || '📘';
  const themeColor = document.getElementById('newSubTheme').value || '#0ea5e9';
  const desc = document.getElementById('newSubDesc').value.trim();
  const unitsRaw = document.getElementById('newSubUnits').value.trim();

  const id = code.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Parse Units (Format: Unit I: Title | topic1, topic2)
  const units = [];
  if (unitsRaw) {
    const lines = unitsRaw.split('\n');
    lines.forEach((line, idx) => {
      if (line.trim()) {
        const parts = line.split('|');
        const unitTitle = parts[0].trim();
        const topics = parts[1] ? parts[1].split(',').map(t => t.trim()) : [];
        units.push({
          unit: `Unit ${idx + 1}`,
          title: unitTitle,
          topics: topics
        });
      }
    });
  }

  const newSubject = {
    id: id,
    code: code,
    title: title,
    department: dept,
    semester: semester,
    credits: credits,
    category: dept,
    icon: icon,
    themeColor: themeColor,
    badge: `Semester ${semester}`,
    shortDescription: desc,
    strategyMatrix: [
      {"unit": "Unit I", "what": "Core Fundamentals & Governing Laws", "where": "Standard Reference Book Ch 1-2", "how": "1. Master definitions\n2. Solve standard numericals"}
    ],
    visualArchitecture: [
      {"title": "Core Architecture", "ascii": `[ ${code} Input ] ──► [ Core Engine ] ──► [ Output ]`}
    ],
    scoringStrategy: {
      "tier1": "Formula & Definition Defense: State standard equations and boundary conditions.",
      "tier2": "Visual Architecture Schematics: Draw neat boxed flowcharts.",
      "tier3": "Comparative Tables: Contrast key parameters.",
      "tier4": "Precision Boxing: Box final numerical results with units."
    },
    textbooks: [],
    units: units.length > 0 ? units : [
      {"unit": "Unit I", "title": "Fundamentals & Core Principles", "topics": ["Introduction", "Standard Equations", "Real-World Applications"]}
    ],
    videos: [
      {"title": `${code} Complete Playlist`, "channel": "Engineering Hub", "url": `https://www.youtube.com/results?search_query=${encodeURIComponent(code + ' ' + title)}`}
    ],
    vivaQuestions: [
      {"q": `What is the core objective of ${code}?`, "a": `To provide comprehensive theoretical foundation and practical applications in ${title}.`}
    ],
    assets: {
      dashboard: `subjects/${code}_Ultimate_Master_Study_Dashboard.html`,
      guideMd: `subjects/${code}_Ultimate_Master_Study_Guide_and_Video_Hub.md`,
      guidePdf: `subjects/${code}_Ultimate_Master_Study_Guide_and_Video_Hub.pdf`
    }
  };

  // Add to in-memory list
  allSubjects.unshift(newSubject);

  // Save custom subjects to localStorage
  const savedCustom = JSON.parse(localStorage.getItem('apex_custom_subjects') || '[]');
  savedCustom.unshift(newSubject);
  localStorage.setItem('apex_custom_subjects', JSON.stringify(savedCustom));

  updateStats();
  renderSubjects();
  closeAddSubjectModal();
  document.getElementById('addSubjectForm').reset();
  alert(`✅ Subject "${code}: ${title}" successfully added to the portal!`);
}

// Export All Subjects as JSON
function exportSubjectsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allSubjects, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "apex_subjects_registry.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Import Subjects from JSON File
function triggerImportJSON() {
  const fileInput = document.getElementById('jsonFileInput');
  if (fileInput) fileInput.click();
}

function handleJSONFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        allSubjects = imported;
        localStorage.setItem('apex_custom_subjects', JSON.stringify(imported));
        updateStats();
        renderSubjects();
        alert(`✅ Successfully imported ${imported.length} subjects!`);
      } else {
        alert('❌ Invalid JSON format. Expected an array of subjects.');
      }
    } catch (err) {
      alert('❌ Error parsing JSON file: ' + err.message);
    }
  };
  reader.readAsText(file);
}


// In-Portal HTML Dashboard Viewer Functions
function openInPortalDashboard(url, title, code) {
  const modal = document.getElementById('htmlViewerModal');
  const frame = document.getElementById('htmlViewerFrame');
  const titleEl = document.getElementById('htmlViewerTitle');
  const badgeEl = document.getElementById('htmlViewerBadge');
  const newTabBtn = document.getElementById('htmlViewerNewTabBtn');

  if (titleEl) titleEl.textContent = `${code || 'Course'}: ${title || 'Master Study Dashboard'}`;
  if (badgeEl) badgeEl.textContent = code || 'Interactive';
  if (newTabBtn) newTabBtn.href = url || '#';
  if (frame) frame.src = url || 'about:blank';

  if (modal) modal.classList.add('active');
}

function closeHtmlViewerModal() {
  const modal = document.getElementById('htmlViewerModal');
  const frame = document.getElementById('htmlViewerFrame');
  if (frame) frame.src = 'about:blank';
  if (modal) modal.classList.remove('active');
}
