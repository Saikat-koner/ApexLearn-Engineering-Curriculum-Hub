/**
 * ApexLearn Portal - Default Core Subjects Data
 * Embedded directly for 100% offline and direct file:/// browser access compatibility.
 */
window.DEFAULT_SUBJECTS = [
  {
    "id": "cse111",
    "code": "CSE111",
    "title": "Computational Thinking, Systems & Professional Readiness",
    "department": "Computer Science & Engineering",
    "credits": 3,
    "semester": 1,
    "category": "Computer Science",
    "icon": "\ud83d\udcbb",
    "themeColor": "#0ea5e9",
    "badge": "Core Foundation",
    "shortDescription": "Comprehensive foundation covering Computational Thinking 4-Pillar pipeline, Dual-Mode CPU execution (Ring 3 vs Ring 0), Inode metadata, chmod octal bitmask, Network OSI/TCP layers, Cloud SPI models, Git 4-stage DAG, 7-class Malware Taxonomy, 3-Factor MFA, Agentic AI loops, and ATS Dream CV.",
    "strategyMatrix": [
      {
        "unit": "Unit I",
        "what": "Dual-Mode CPU execution (User Ring 3 vs Kernel Ring 0), Inode metadata & chmod octal bitmask (4-2-1), Mesh topology formula N(N-1)/2, Type-1 Bare-Metal vs Type-2 Hosted Hypervisors, Cloud SPI models.",
        "where": "Silberschatz Ch 1, 2, 13; Kurose & Ross Ch 1, 5; Thomas Erl Ch 4, 11",
        "how": "1. Draw Dual-Mode user/kernel ring transitions.\n2. Practice chmod octal bitmask calculations (755, 644).\n3. Compare bare-metal vs hosted hypervisor latencies."
      },
      {
        "unit": "Unit II",
        "what": "Git 4-stage state machine (Working Dir -> Staging -> Local Repo -> Remote), 3-Way Merge vs Fast-Forward, Malware Taxonomy (7 classes), 3-Factor MFA, Principle of Least Privilege (PoLP).",
        "where": "Scott Chacon (Pro Git) Ch 1-3; William Stallings Ch 1, 22, 23",
        "how": "1. Trace Git SHA-1 DAG commits & branch merges.\n2. Classify virus vs worm vs rootkit Ring 0 stealth.\n3. Categorize MFA factors: Knowledge, Possession, Inherence."
      },
      {
        "unit": "Unit III",
        "what": "Student-Centric Revenue Generation (SCRGM), Recognition of Prior Learning (RPL), Credit Exemption pathways, Grade 'O' Standing Committee guidelines.",
        "where": "Official University Academic Regulations Handbook",
        "how": "1. Review credit transfer and exemption criteria.\n2. Understand research paper Grade 'O' upgradation policies."
      },
      {
        "unit": "Unit IV",
        "what": "AI \u2283 ML \u2283 DL hierarchy, Supervised vs Unsupervised vs Reinforcement Learning, Generative AI vs Agentic AI (Perception-Tool-Action loop), Prompt Engineering (Zero-shot, Few-shot, CoT).",
        "where": "Russell & Norvig Ch 1, 19, 28; DeepLearning.AI (Andrew Ng)",
        "how": "1. Map AI \u2283 ML \u2283 DL Venn hierarchy.\n2. Trace Agentic AI autonomous tool-use cycles.\n3. Structure Chain-of-Thought prompts for complex reasoning."
      },
      {
        "unit": "Unit V & VI",
        "what": "Career Pathways Matrix (Product vs Service vs Research), 5-Step IDP, 1-page ATS Dream CV using STAR method with quantified metrics.",
        "where": "Gayle McDowell (CTCI) Ch 1, 2; Kunal Kushwaha",
        "how": "1. Formulate ATS bullets: Situation, Task, Action, Result.\n2. Calibrate bi-weekly milestones in 5-Step IDP."
      }
    ],
    "visualArchitecture": [
      {
        "title": "Computational Thinking 4-Pillar Pipeline",
        "ascii": "[ REAL-WORLD PROBLEM ]\n          \u2502\n          \u25bc\n[ 1. DECOMPOSITION ] \u2500\u2500\u25ba Break into isolated sub-problems (Auth, Cart, Payment)\n          \u2502\n          \u25bc\n[ 2. PATTERN RECOGNITION ] \u2500\u2500\u25ba Identify recurring patterns (OAuth2, Webhooks)\n          \u2502\n          \u25bc\n[ 3. ABSTRACTION ] \u2500\u2500\u25ba Filter out non-essential details, focus on invariants\n          \u2502\n          \u25bc\n[ 4. ALGORITHM DESIGN ] \u2500\u2500\u25ba Formulate deterministic step-by-step instructions"
      },
      {
        "title": "Dual-Mode CPU Execution Rings",
        "ascii": "+---------------------------------------------------+\n| USER MODE (Ring 3)                                |\n| - User Applications (Browser, Python, VS Code)    |\n| - Restricted CPU Instructions (No direct I/O)     |\n+---------------------------------------------------+\n          \u2502                                   \u25b2\n          \u2502 System Call Trap (INT 0x80 / SYS) \u2502 Return to User\n          \u25bc                                   \u2502\n+---------------------------------------------------+\n| KERNEL MODE (Ring 0)                              |\n| - Complete Hardware / Memory Control              |\n| - Privileged Instructions, Page Tables, Interrupts|\n+---------------------------------------------------+"
      },
      {
        "title": "Git 4-Stage State Machine",
        "ascii": "+-------------------+      git add       +-------------------+     git commit      +-------------------+\n| WORKING DIRECTORY | -----------------> |   STAGING AREA    | ------------------> | LOCAL REPOSITORY  |\n| (Untracked files) |                    | (Index Snapshot)  |                     | (Committed DAG)   |\n+-------------------+                    +-------------------+                     +-------------------+\n          ^                                        |                                         |\n          |               git checkout / restore   |                                         | git push\n          +----------------------------------------+                                         v\n                                              git pull / git fetch                 +-------------------+\n                                       <------------------------------------------ | REMOTE REPOSITORY |\n                                                                                   +-------------------+"
      },
      {
        "title": "Agentic AI Perception-Tool-Action Loop",
        "ascii": "                     [ USER GOAL / PROMPT ]\n                                \u2502\n                                \u25bc\n                     [ 1. PERCEPTION / LLM ]\n                   Ingest Context & System State\n                                \u2502\n                                \u25bc\n                     [ 2. REASONING ENGINE ]\n                 Formulate Multi-Step Plan (CoT)\n                                \u2502\n                                \u25bc\n                     [ 3. TOOL / API EXECUTION ]\n               Execute Bash / File Edit / Web Search\n                                \u2502\n                                \u25bc\n                     [ 4. SELF-REFLECTION ]\n              Did output solve task? (Yes -> Done / No -> Loop)"
      }
    ],
    "scoringStrategy": {
      "tier1": "Formula & Formal Definition Defense: State exact definitions (User Mode Ring 3 vs Kernel Mode Ring 0, Inode metadata, CIA Triad, Non-repudiation) before explaining mechanisms.",
      "tier2": "Visual Architecture Schematics: Draw boxed ASCII diagrams for Process 5-state lifecycle, Git state machine, or Type-1 vs Type-2 hypervisors.",
      "tier3": "Comparative Invariant Tables: Tabulate comparisons (Hub vs Switch vs Router with collision/broadcast domains; IaaS vs PaaS vs SaaS; Virus vs Worm vs Rootkit).",
      "tier4": "Precision Code / CLI Boxing: Provide exact Linux commands (chmod 755 script.sh, ps aux | grep python), Git sequences, or STAR metric bullets for 100/100 (Grade 'O')."
    },
    "textbooks": [
      {
        "title": "Operating System Concepts (10th Ed)",
        "authors": "Silberschatz, Galvin & Gagne",
        "chapters": "Ch 1 (Dual-Mode Ring 0 vs 3), Ch 2 (Batch/RTOS), Ch 13 (Inodes & chmod octal bitmask)"
      },
      {
        "title": "Computer Networking: A Top-Down Approach (8th Ed)",
        "authors": "Kurose & Ross / Forouzan",
        "chapters": "Ch 1 (Mesh Topology N(N-1)/2), Ch 5 & 6 (Collision/Broadcast domains, L1-L3 devices)"
      },
      {
        "title": "Cloud Computing: Concepts, Technology & Architecture",
        "authors": "Thomas Erl",
        "chapters": "Ch 4 & 5 (IaaS, PaaS, SaaS), Ch 11 (Type-1 Bare-Metal vs Type-2 Hosted Hypervisors)"
      },
      {
        "title": "Pro Git (2nd Ed, Open Access)",
        "authors": "Scott Chacon & Ben Straub",
        "chapters": "Ch 1-3 (4-Stage State Machine, DAG commits, 3-Way Merge vs Fast-Forward)"
      },
      {
        "title": "Cryptography and Network Security (7th Ed)",
        "authors": "William Stallings",
        "chapters": "Ch 1, 22, 23 (CIA Triad, 7 Malware Classes, 3-Factor MFA, PoLP)"
      },
      {
        "title": "Artificial Intelligence: A Modern Approach (4th Ed)",
        "authors": "Russell & Norvig",
        "chapters": "Ch 1, 19, 28 (AI \u2283 ML \u2283 DL hierarchy, Agentic AI Loops, Prompt Engineering)"
      }
    ],
    "units": [
      {
        "unit": "Unit I",
        "title": "Computational Thinking & Computing Environment",
        "topics": [
          "4 Pillars: Decomposition, Pattern Recognition, Abstraction, Algorithms",
          "Dual-Mode CPU execution (User Mode Ring 3 vs Kernel Mode Ring 0)",
          "Process 5-state lifecycle (New, Ready, Running, Waiting, Terminated)",
          "Inode metadata & chmod octal bitmask (4-2-1 math)",
          "Network topologies (Mesh formula N(N-1)/2, Star, Bus, Ring)",
          "Collision vs Broadcast domains, Layer 1-3 devices",
          "Cloud SPI tiers (IaaS, PaaS, SaaS) & Hypervisors (Type-1 vs Type-2)"
        ]
      },
      {
        "unit": "Unit II",
        "title": "Version Control & Cyber Security Architecture",
        "topics": [
          "Git 4-stage state machine (Working, Staging, Local, Remote)",
          "3-Way Merge vs Fast-Forward merge conflict resolution",
          "CIA Triad (Confidentiality, Integrity, Availability)",
          "Malware taxonomy: Virus, Worm, Trojan, Ransomware, Spyware, Rootkit, Botnet",
          "3-Factor MFA: Knowledge (Password), Possession (OTP/Key), Inherence (Biometric)",
          "Principle of Least Privilege (PoLP) and Defense in Depth"
        ]
      },
      {
        "unit": "Unit III",
        "title": "University Academic Framework & Policy Systems",
        "topics": [
          "Student-Centric Revenue Generation Model (SCRGM)",
          "Recognition of Prior Learning (RPL) & Credit Exemptions",
          "Grade 'O' Standing Committee policy guidelines & research publications"
        ]
      },
      {
        "unit": "Unit IV",
        "title": "Artificial Intelligence, ML & Emerging Tech",
        "topics": [
          "AI \u2283 ML \u2283 DL Venn hierarchy",
          "Supervised (labeled) vs Unsupervised (unlabeled) vs Reinforcement Learning",
          "Generative AI vs Agentic AI (Perception-Tool-Action loop)",
          "Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought (CoT), System Personas"
        ]
      },
      {
        "unit": "Unit V & VI",
        "title": "Career Pathways, IDP & ATS Dream CV",
        "topics": [
          "Career Pathways Matrix (Product vs Service vs Research vs Higher Studies)",
          "5-Step Individual Development Plan (IDP) with bi-weekly milestones",
          "1-Page ATS Dream CV formatting using STAR Method (Situation, Task, Action, Result)"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I: Computational Thinking & 4 Pillars",
        "title": "CS50 Computational Thinking",
        "channel": "CS50 (Harvard)",
        "focus": "Decomposition, Pattern Recognition, Abstraction, Algorithm Design.",
        "url": "https://www.youtube.com/results?search_query=CS50+Computational+Thinking",
        "duration": "20 mins",
        "timeline": "Week 1 \u2022 Orientation",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit I: OS Types & Kernel Modes",
        "title": "Gate Smashers Types of OS",
        "channel": "Gate Smashers",
        "focus": "Batch, Time-sharing, RTOS (Hard vs Soft), and Distributed OS.",
        "url": "https://www.youtube.com/results?search_query=Gate+Smashers+Types+of+Operating+System",
        "duration": "25 mins",
        "timeline": "Week 2 \u2022 Unit I Foundation",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Linux CLI & Hierarchy",
        "title": "freeCodeCamp Linux for Beginners",
        "channel": "freeCodeCamp / NetworkChuck",
        "focus": "Linux root `/` hierarchy, `chmod 755`, `grep -rn`, `mkdir -p`, `ps aux`.",
        "url": "https://www.youtube.com/results?search_query=freeCodeCamp+Linux+Command+Line+for+Beginners",
        "duration": "35 mins",
        "timeline": "Week 2 \u2022 Lab & CLI",
        "priority": "\u26a1 Practical Mastery"
      },
      {
        "unit": "Unit I: Network Devices & Topologies",
        "title": "PowerCert Network Devices Hub Switch Router",
        "channel": "PowerCert Animated Videos",
        "focus": "Animated walkthrough of Layer 1 Hubs, Layer 2 Switches, Layer 3 Routers, Gateways.",
        "url": "https://www.youtube.com/results?search_query=PowerCert+Network+Devices+Hub+Switch+Router",
        "duration": "22 mins",
        "timeline": "Week 3 \u2022 Unit I Networks",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Hypervisors Type-1 vs Type-2",
        "title": "NetworkChuck Hypervisor Type 1 and Type 2",
        "channel": "NetworkChuck",
        "focus": "Bare-Metal (ESXi) vs Hosted (VirtualBox) with clear architectural visuals.",
        "url": "https://www.youtube.com/results?search_query=NetworkChuck+Hypervisor+Type+1+Type+2",
        "duration": "18 mins",
        "timeline": "Week 3 \u2022 Unit I Cloud",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit I: Cloud Models (IaaS, PaaS, SaaS)",
        "title": "Fireship Cloud Computing in 100 Seconds",
        "channel": "Fireship",
        "focus": "Fast, intuitive breakdown of SPI tiers and Cloud Deployment Models.",
        "url": "https://www.youtube.com/results?search_query=Fireship+Cloud+Computing+in+100+Seconds",
        "duration": "10 mins",
        "timeline": "Week 4 \u2022 Unit I Cloud SPI",
        "priority": "\u26a1 Fast Concept Booster"
      },
      {
        "unit": "Unit II: Git & GitHub Masterclass",
        "title": "Kunal Kushwaha Git and GitHub",
        "channel": "Kunal Kushwaha",
        "focus": "Practical end-to-end walkthrough of Git 4 stages, branch merging, pull requests.",
        "url": "https://www.youtube.com/results?search_query=Kunal+Kushwaha+Git+GitHub+Tutorial",
        "duration": "45 mins",
        "timeline": "Week 5 \u2022 Mid-Term Lab Core",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit II: Malware Taxonomy & Cyber Threats",
        "title": "Simplilearn Cyber Security Full Course",
        "channel": "Simplilearn / John Hammond",
        "focus": "Viruses, Worms, Trojans, Ransomware, Rootkits, Spyware, Botnets, and MFA.",
        "url": "https://www.youtube.com/results?search_query=Cyber+Security+Full+Course+Simplilearn",
        "duration": "30 mins",
        "timeline": "Week 6 \u2022 Mid-Term Security",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Machine Learning Paradigms",
        "title": "StatQuest Machine Learning Basics",
        "channel": "StatQuest (Josh Starmer)",
        "focus": "Visual, jargon-free breakdown of Supervised vs Unsupervised vs Reinforcement Learning.",
        "url": "https://www.youtube.com/results?search_query=StatQuest+Machine+Learning+Basics",
        "duration": "20 mins",
        "timeline": "Week 8 \u2022 Unit IV AI/ML",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Neural Networks & Deep Learning",
        "title": "3Blue1Brown Neural Networks",
        "channel": "3Blue1Brown",
        "focus": "Weights, biases, activation functions, and deep representations.",
        "url": "https://www.youtube.com/results?search_query=3Blue1Brown+Neural+Networks",
        "duration": "25 mins",
        "timeline": "Week 9 \u2022 Unit IV Deep Tech",
        "priority": "\u26a1 Visual 3D Intuition"
      },
      {
        "unit": "Unit IV: Generative AI vs Agentic AI",
        "title": "Fireship AI Agents in 100 Seconds",
        "channel": "Fireship / Andrew Ng",
        "focus": "Why Agentic AI (perception-tool-action loop) differs from static GenAI.",
        "url": "https://www.youtube.com/results?search_query=Fireship+AI+Agents+in+100+Seconds",
        "duration": "12 mins",
        "timeline": "Week 10 \u2022 Unit IV Agentic AI",
        "priority": "\ud83c\udfc6 100-Percentile Booster"
      },
      {
        "unit": "Unit IV: Prompt Engineering Masterclass",
        "title": "ChatGPT Prompt Engineering DeepLearning.AI",
        "channel": "DeepLearning.AI (Andrew Ng)",
        "focus": "Zero-shot, Few-shot, Chain-of-Thought (CoT), System Personas.",
        "url": "https://www.youtube.com/results?search_query=ChatGPT+Prompt+Engineering+for+Developers+Andrew+Ng",
        "duration": "28 mins",
        "timeline": "Week 11 \u2022 Unit IV Prompting",
        "priority": "\u26a1 Practical Industry Skill"
      },
      {
        "unit": "Unit V & VI: ATS Resume & STAR Method",
        "title": "Kunal Kushwaha Resume Review",
        "channel": "Kunal Kushwaha / Jeff Su",
        "focus": "1-page ATS-beating resume design, STAR bullet formula with quantified metrics.",
        "url": "https://www.youtube.com/results?search_query=Kunal+Kushwaha+Resume+Review",
        "duration": "25 mins",
        "timeline": "Week 13 \u2022 Unit V & VI Career",
        "priority": "\ud83c\udfc6 Placement & Portfolio"
      }
    ],
    "vivaQuestions": [
      {
        "q": "What is the primary difference between User Mode (Ring 3) and Kernel Mode (Ring 0)?",
        "a": "User Mode (Ring 3) runs applications with restricted CPU instructions and cannot directly touch hardware/memory. Kernel Mode (Ring 0) has unrestricted hardware access, executes privileged CPU instructions, handles page tables and device interrupts."
      },
      {
        "q": "Explain the chmod octal permission bitmask calculation for chmod 754.",
        "a": "Read (r)=4, Write (w)=2, Execute (x)=1. 7 (4+2+1 = rwx for Owner), 5 (4+0+1 = r-x for Group), 4 (4+0+0 = r-- for Others)."
      },
      {
        "q": "What is the difference between Type-1 Bare-Metal and Type-2 Hosted Hypervisors?",
        "a": "Type-1 (ESXi, Hyper-V) installs directly on physical silicon/hardware with near-native performance. Type-2 (VirtualBox, VMware Workstation) runs on top of a host OS with additional virtualization overhead."
      },
      {
        "q": "What is the formula for physical duplex links in a Mesh Topology with N nodes?",
        "a": "Number of duplex physical links = N(N - 1) / 2. For N=6, links = 6(5)/2 = 15 links."
      },
      {
        "q": "What is the Git 4-Stage State Machine pipeline?",
        "a": "1) Working Directory (untracked/modified files) -> git add -> 2) Staging Area (Index snapshot) -> git commit -> 3) Local Repository (committed DAG history) -> git push -> 4) Remote Repository (GitHub)."
      },
      {
        "q": "Name the 7 core classes in the Modern Malware Taxonomy.",
        "a": "1) Virus (requires host execution), 2) Worm (self-replicating network propagation), 3) Trojan (disguised payload), 4) Ransomware (crypto-extortion), 5) Spyware (keystroke logging), 6) Rootkit (Ring 0 stealth hook), 7) Botnet (C2 zombie network for DDoS)."
      },
      {
        "q": "What are the 3 authentication factors in Multi-Factor Authentication (MFA)?",
        "a": "1) Knowledge Factor (something you know: Password, PIN), 2) Possession Factor (something you have: TOTP token, Hardware Key, SMS OTP), 3) Inherence Factor (something you are: Biometrics, Fingerprint, Retina)."
      },
      {
        "q": "How does Agentic AI differ from traditional Generative AI?",
        "a": "Generative AI produces static text/code in a single turn. Agentic AI operates in an autonomous loop: Perception -> Multi-Step Planning (Chain-of-Thought) -> External Tool/API Execution (Bash, Browser, DB) -> Self-Reflection and Error Correction."
      },
      {
        "q": "What is the STAR Method for resume bullet crafting?",
        "a": "S (Situation) - context; T (Task) - specific problem; A (Action) - tools, algorithms and leadership applied; R (Result) - quantified business/system outcome (e.g., 'reduced API latency by 42%')."
      },
      {
        "q": "What is the Principle of Least Privilege (PoLP)?",
        "a": "A security paradigm dictating that every module, user, and process must access only the minimum necessary privileges, capabilities, and data required to complete its valid task."
      },
      {
        "q": "What does an Inode in Unix/Linux file systems contain?",
        "a": "An Inode stores file metadata: file type, size, owner UID, group GID, permissions bitmask, timestamps (atime, mtime, ctime), and direct/indirect block pointers. It does NOT store the file name or file contents."
      },
      {
        "q": "What is the difference between Collision Domain and Broadcast Domain across L1/L2/L3 devices?",
        "a": "Hub (L1) has 1 collision domain and 1 broadcast domain. Switch (L2) creates separate collision domains per port but shares 1 broadcast domain. Router (L3) breaks both collision and broadcast domains per interface."
      }
    ],
    "assets": {
      "dashboard": "subjects/CSE111_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/CSE111_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "che110",
    "code": "CHE110",
    "title": "Environmental Studies & Sustainability",
    "department": "Chemistry & Environmental Sciences",
    "credits": 2,
    "semester": 1,
    "category": "Chemistry",
    "icon": "\ud83c\udf31",
    "themeColor": "#10b981",
    "badge": "Mandatory Science",
    "shortDescription": "Multidisciplinary exploration of ecosystem dynamics, 10% Lindeman trophic transfer, 4 Indian biodiversity hotspots, pollution chemistry (BOD/COD, smog), disaster frameworks, and environmental legislation.",
    "strategyMatrix": [
      {
        "unit": "Unit I & II",
        "what": "4 Spheres, Brundtland 1987, 17 SDGs, Lindeman's 10% rule, Ecological Pyramids (Energy upright vs inverted aquatic biomass), Hydrosere vs Xerosere succession.",
        "where": "Kaushik & Kaushik Ch 1-4; Erach Bharucha Ch 2, 3",
        "how": "1. Draw 10% energy pyramid.\n2. Trace stages of primary ecological succession.\n3. Memorize 17 SDG targets."
      },
      {
        "unit": "Unit III",
        "what": "3 Levels of biodiversity, 4 Indian Hotspots (Western Ghats, Himalayas, Indo-Burma, Sundaland), HIPPO threats, IUCN Red List categories, In-situ vs Ex-situ.",
        "where": "Erach Bharucha Ch 4",
        "how": "1. Map 4 Indian hotspots.\n2. Compare In-situ vs Ex-situ conservation protocols."
      },
      {
        "unit": "Unit IV",
        "what": "Photochemical vs Classical Smog, BOD vs COD math, Eutrophication lifecycle, Chapman Ozone catalytic cycle, 4Rs solid waste hierarchy.",
        "where": "Dave & Katewa Ch 5; Kaushik & Kaushik Ch 5",
        "how": "1. Write BOD vs COD chemical equations.\n2. Trace 5 stages of cultural eutrophication.\n3. Outline Chapman CFC ozone breakdown."
      },
      {
        "unit": "Unit V & VI",
        "what": "NDMA 3-tier hierarchy (NDMA/SDMA/DDMA), 6 Indian Environmental Acts (Wildlife 1972 to NGT 2010), Historic movements (Bishnoi 1730, Chipko 1973, Appiko, Silent Valley, NBA).",
        "where": "Kaushik & Kaushik Ch 6, 7; Erach Bharucha Ch 6-8",
        "how": "1. Draw NDMA command hierarchy.\n2. Memorize key Environmental Acts timeline.\n3. Detail Chipko & Narmada Bachao movements."
      }
    ],
    "visualArchitecture": [
      {
        "title": "10% Lindeman's Trophic Energy Flow",
        "ascii": "[ SUNLIGHT: 1,000,000 J of Radiant Energy ]\n                     \u2502  (1% captured by plants)\n                     \u25bc\n[ PRIMARY PRODUCERS (Phytoplankton/Trees) ]: 10,000 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ PRIMARY CONSUMERS (Herbivores/Zooplankton) ]: 1,000 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ SECONDARY CONSUMERS (Carnivores) ]: 100 J\n                     \u2502  (10% energy transferred)\n                     \u25bc\n[ TERTIARY APEX CONSUMERS (Hawks/Tigers) ]: 10 J\n(90% of energy is lost at each step as metabolic heat)"
      },
      {
        "title": "Eutrophication Lifecycle Flowchart",
        "ascii": "[ Agricultural Runoff (Excess Nitrates & Phosphates) ]\n                         \u2502\n                         \u25bc\n[ Rapid Algal Bloom on Lake Surface (Dense Green Mat) ]\n                         \u2502\n                         \u25bc\n[ Sunlight Blocked -> Submerged Plants Die & Decay ]\n                         \u2502\n                         \u25bc\n[ Aerobic Decomposers Multiply -> High BOD & Dissolved Oxygen Depletion ]\n                         \u2502\n                         \u25bc\n[ Asphyxiation of Aquatic Fish -> Complete Ecosystem Collapse ]"
      }
    ],
    "scoringStrategy": {
      "tier1": "Scientific Definition & Parameter Defense: Define BOD, COD, Carrying Capacity, and Biomagnification with exact units (BOD < 1 mg/L for drinking water).",
      "tier2": "Ecological Flowcharts & Cycles: Draw neat flowcharts for Eutrophication, 10% Trophic Energy pyramids, or Chapman Ozone Cycles.",
      "tier3": "Legislative Act & Year Invariants: State exact statutory names and years (Wildlife Act 1972, Water Act 1974, Air Act 1981, EPA 1986, NGT Act 2010).",
      "tier4": "Case Study & Quantitative Impact Boxing: Box historical case studies (Bhopal 1984 MIC leak, Minamata mercury poisoning, Chipko 1973) for Grade 'O'."
    },
    "textbooks": [
      {
        "title": "Perspectives in Environmental Studies",
        "authors": "Anubha Kaushik & C.P. Kaushik",
        "chapters": "Ch 1-4 (Ecosystems & Energy), Ch 5 (Pollution & BOD/COD), Ch 6-7 (Acts & Movements)"
      },
      {
        "title": "Textbook of Environmental Studies for Undergraduate Courses",
        "authors": "Erach Bharucha",
        "chapters": "Ch 2-3 (Ecosystem Dynamics), Ch 4 (4 Indian Hotspots & Conservation), Ch 6-8 (Disasters & Ethics)"
      }
    ],
    "units": [
      {
        "unit": "Unit I & II",
        "title": "Ecology, Ecosystems & Resources",
        "topics": [
          "4 Spheres: Lithosphere, Hydrosphere, Atmosphere, Biosphere",
          "Lindeman's 10% energy rule",
          "Ecological succession (Hydrosere vs Xerosere)",
          "17 UN SDGs",
          "Brundtland Report 1987"
        ]
      },
      {
        "unit": "Unit III",
        "title": "Biodiversity & Conservation",
        "topics": [
          "3 Levels of biodiversity (Genetic, Species, Ecosystem)",
          "4 Indian Hotspots (Western Ghats, Himalayas, Indo-Burma, Sundaland)",
          "In-situ (Sanctuaries, Biosphere Reserves) vs Ex-situ (Gene banks, Zoos)",
          "IUCN Red List"
        ]
      },
      {
        "unit": "Unit IV",
        "title": "Pollution Chemistry & Waste",
        "topics": [
          "Photochemical vs Classical Smog",
          "BOD vs COD math",
          "Eutrophication 5 stages",
          "Chapman CFC ozone breakdown cycle",
          "4Rs solid waste hierarchy (Reduce, Reuse, Recycle, Recover)"
        ]
      },
      {
        "unit": "Unit V & VI",
        "title": "Disasters, Acts & Movements",
        "topics": [
          "NDMA 3-tier hierarchy (NDMA/SDMA/DDMA)",
          "6 Major Environmental Acts (Wildlife 1972 to NGT 2010)",
          "Bishnoi (1730), Chipko (1973), Appiko, Silent Valley, NBA"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I: Sustainability & 17 SDGs",
        "title": "CrashCourse Sustainable Development Goals",
        "channel": "UN Sustainable Development / CrashCourse",
        "focus": "17 SDGs breakdown, Brundtland definition, Carrying capacity.",
        "url": "https://www.youtube.com/results?search_query=CrashCourse+Sustainable+Development+Goals",
        "duration": "15 mins",
        "timeline": "Week 1 \u2022 Unit I Foundation",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit I: 4 Spheres of Earth",
        "title": "National Geographic Spheres of the Earth",
        "channel": "National Geographic / Amoeba Sisters",
        "focus": "Atmosphere, Hydrosphere, Lithosphere, Biosphere interactions.",
        "url": "https://www.youtube.com/results?search_query=National+Geographic+Spheres+of+the+Earth",
        "duration": "18 mins",
        "timeline": "Week 2 \u2022 Unit I Ecology",
        "priority": "\u26a1 Visual Earth Systems"
      },
      {
        "unit": "Unit II: Ecosystem Structure & Energy Flow",
        "title": "Amoeba Sisters Ecological Succession and Energy Flow",
        "channel": "Khan Academy / Amoeba Sisters",
        "focus": "10% Lindeman's Rule, Food Chains vs Webs, Hydrosere vs Xerosere.",
        "url": "https://www.youtube.com/results?search_query=Amoeba+Sisters+Ecological+Succession+Energy+Flow",
        "duration": "22 mins",
        "timeline": "Week 3 \u2022 Unit II Ecosystems",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit II: Ecological Pyramids",
        "title": "Ecological Pyramids Biomass Energy Number",
        "channel": "Unacademy NEET / Gate Smashers",
        "focus": "Why Energy Pyramids are always upright; inverted aquatic biomass.",
        "url": "https://www.youtube.com/results?search_query=Ecological+Pyramids+Number+Biomass+Energy+Explained",
        "duration": "20 mins",
        "timeline": "Week 4 \u2022 Unit II Pyramids",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit III: Biodiversity Hotspots & IUCN",
        "title": "StudyIQ Biodiversity Hotspots in India",
        "channel": "StudyIQ IAS",
        "focus": "4 Indian Hotspots (Western Ghats, Himalayas, etc.), IUCN Red List.",
        "url": "https://www.youtube.com/results?search_query=StudyIQ+Biodiversity+Hotspots+in+India",
        "duration": "25 mins",
        "timeline": "Week 5 \u2022 Mid-Term Biodiversity",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit III: In-situ vs Ex-situ Conservation",
        "title": "Amit Sengupta In situ and Ex situ Conservation",
        "channel": "Amit Sengupta",
        "focus": "National Parks vs Sanctuaries vs Biosphere Reserves vs Seed Banks.",
        "url": "https://www.youtube.com/results?search_query=Amit+Sengupta+In+situ+and+Ex+situ+Conservation",
        "duration": "18 mins",
        "timeline": "Week 6 \u2022 Mid-Term Conservation",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Air & Water Pollution, Smog",
        "title": "Photochemical Smog vs Classical Smog StudyIQ",
        "channel": "CrashCourse Ecology / StudyIQ",
        "focus": "Primary/Secondary pollutants, Eutrophication, BOD/COD.",
        "url": "https://www.youtube.com/results?search_query=Photochemical+Smog+vs+Classical+Smog+StudyIQ",
        "duration": "30 mins",
        "timeline": "Week 8 \u2022 Unit IV Pollution",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Ozone Depletion & Montreal Protocol",
        "title": "TED Ed Ozone Layer Depletion",
        "channel": "TED-Ed / SciShow",
        "focus": "CFC catalytic chlorine cycle, Polar Stratospheric Clouds.",
        "url": "https://www.youtube.com/results?search_query=TED+Ed+Ozone+Layer+Depletion",
        "duration": "16 mins",
        "timeline": "Week 9 \u2022 Unit IV Ozone Layer",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Disaster Management Framework",
        "title": "National Disaster Management Authority NDMA India",
        "channel": "StudyIQ IAS",
        "focus": "NDMA, SDMA, DDMA structure, Disaster Lifecycle.",
        "url": "https://www.youtube.com/results?search_query=National+Disaster+Management+Authority+NDMA+India+StudyIQ",
        "duration": "20 mins",
        "timeline": "Week 11 \u2022 Unit V Disaster Mgmt",
        "priority": "\u26a1 Policy & Framework"
      },
      {
        "unit": "Unit VI: Environmental Movements in India",
        "title": "Environmental Movements in India Chipko Appiko Narmada StudyIQ",
        "channel": "StudyIQ IAS / Drishti IAS",
        "focus": "Bishnoi (1730), Chipko (1973), Appiko, Silent Valley, NBA.",
        "url": "https://www.youtube.com/results?search_query=Environmental+Movements+in+India+Chipko+Narmada+StudyIQ",
        "duration": "22 mins",
        "timeline": "Week 12 \u2022 Unit VI Movements",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit VI: Major Environmental Acts in India",
        "title": "Important Environmental Acts in India EPA 1986 StudyIQ",
        "channel": "StudyIQ IAS",
        "focus": "Wildlife Act 1972, Water 1974, Forest 1980, Air 1981, EPA 1986, NGT 2010.",
        "url": "https://www.youtube.com/results?search_query=Important+Environmental+Acts+in+India+EPA+1986+StudyIQ",
        "duration": "28 mins",
        "timeline": "Week 13 \u2022 Unit VI Legislation",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      }
    ],
    "vivaQuestions": [
      {
        "q": "What is the fundamental difference between BOD and COD?",
        "a": "BOD (Biochemical Oxygen Demand) measures dissolved oxygen consumed by aerobic microorganisms to decompose biodegradable organic matter over 5 days at 20\u00b0C. COD (Chemical Oxygen Demand) measures total oxygen required to chemically oxidize both biodegradable and non-biodegradable organics using strong K2Cr2O7 in acid; COD is always greater than BOD."
      },
      {
        "q": "How is total hardness of water determined using the EDTA Titration method?",
        "a": "Water is buffered at pH 10 using NH4Cl + NH4OH buffer. Eriochrome Black T (EBT) indicator forms an unstable wine-red complex with Ca2+/Mg2+. Titration with standard Na2-EDTA sequesters ions into a stable colorless complex, releasing free EBT which turns steel blue at the endpoint."
      },
      {
        "q": "Name the 4 Biodiversity Hotspots located in India.",
        "a": "1) Western Ghats & Sri Lanka, 2) Himalayas (North-East & Alpine), 3) Indo-Burma (North-Eastern borders), 4) Sundaland (including Nicobar group of Islands)."
      },
      {
        "q": "What is the primary chemical cause of Acid Rain and what is its threshold pH?",
        "a": "Acid Rain occurs when SO2 and NOx from fossil fuels react with atmospheric water vapor to form H2SO4 and HNO3. Precipitation with a pH lower than 5.6 is classified as Acid Rain."
      },
      {
        "q": "Distinguish between the Montreal Protocol and the Kyoto Protocol.",
        "a": "Montreal Protocol (1987) mandates phasing out Ozone Depleting Substances (ODS) such as CFCs and Halons to protect the stratospheric ozone layer. Kyoto Protocol (1997) / Paris Agreement (2015) mandates reducing Greenhouse Gases (CO2, CH4, N2O, HFCs) to combat global climate change."
      },
      {
        "q": "State 3 foundational principles of the 12 Principles of Green Chemistry (Anastas & Warner).",
        "a": "1) Prevention of waste instead of treating it, 2) Atom Economy (maximizing incorporation of all raw materials into final product), 3) Safer solvents and reaction conditions."
      },
      {
        "q": "What is Eutrophication and what are its primary triggers?",
        "a": "Eutrophication is the nutrient enrichment (excess Nitrates and Phosphates from fertilizers and detergents) in aquatic ecosystems, causing rapid algal blooms, sunlight blockage, dissolved oxygen depletion, and aquatic death."
      },
      {
        "q": "Why is E-waste management critical in modern electronics?",
        "a": "E-waste contains hazardous heavy metals like Lead (in solder/CRTs causing neural damage), Cadmium (in semiconductors/batteries causing kidney damage), and Mercury (in switches/displays), requiring certified recycling."
      },
      {
        "q": "What is Global Warming Potential (GWP) and why is Methane critical?",
        "a": "GWP measures how much heat a greenhouse gas traps relative to CO2 (GWP of CO2 = 1). Methane (CH4) has a GWP of 28-36 over a 100-year timescale, making it much more potent per molecule than CO2."
      },
      {
        "q": "Explain the difference between Temporary and Permanent Hardness of water.",
        "a": "Temporary Hardness is caused by dissolved Bicarbonates of Calcium and Magnesium [Ca(HCO3)2, Mg(HCO3)2] and can be removed by simple boiling. Permanent Hardness is caused by Chlorides and Sulfates (CaCl2, MgSO4) and requires chemical softening (Ion Exchange / Zeolite)."
      }
    ],
    "assets": {
      "dashboard": "subjects/CHE110_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/CHE110_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "cse326",
    "code": "CSE326",
    "title": "Client-Side Web Development",
    "department": "Computer Science & Engineering",
    "credits": 2,
    "semester": 2,
    "category": "Computer Science",
    "icon": "\ud83c\udf10",
    "themeColor": "#3b82f6",
    "badge": "Full-Stack Track",
    "shortDescription": "Modern frontend engineering encompassing semantic HTML5, CSS3 Box Model, Flexbox/Grid layouts, Specificity math, JavaScript DOM execution context, async/await Fetch API, and GitHub Pages CI/CD.",
    "strategyMatrix": [
      {
        "unit": "Unit I & II",
        "what": "Browser Critical Rendering Path (DOM+CSSOM -> Render Tree -> Layout -> Paint), Semantic HTML5 tags, Form validation regex.",
        "where": "Lemay, Colburn & Kyrnin Ch 1, 2, 5, 6",
        "how": "1. Trace browser DOM parsing.\n2. Master semantic structuring (<header>, <nav>, <main>).\n3. Implement regex input validation."
      },
      {
        "unit": "Unit III",
        "what": "CSS Specificity math (a,b,c,d), border-box model, 1D Flexbox axis alignments, 2D CSS Grid repeat(auto-fit, minmax).",
        "where": "HTML5 Black Book Ch 7-11; Kevin Powell",
        "how": "1. Calculate specificity scores.\n2. Build responsive Flexbox navbars.\n3. Design 2D CSS Grid card layouts."
      },
      {
        "unit": "Unit IV & V",
        "what": "Execution Context & Call Stack, Closures, Event Bubbling vs Capturing vs Delegation, fetch() API async/await, LocalStorage.",
        "where": "Marijn Haverbeke (Eloquent JS); MDN",
        "how": "1. Trace JS event loop & microtask queue.\n2. Handle DOM events via delegation.\n3. Fetch JSON data asynchronously."
      },
      {
        "unit": "Unit VI",
        "what": "All 6 University Lab Experiments (Validation, Dynamic DOM, Product Filter, Todo App, GitHub Pages automated hosting).",
        "where": "Pro Git Ch 1-3; Chrome DevTools",
        "how": "1. Write clean executable code for all 6 labs.\n2. Deploy static web apps to GitHub Pages."
      }
    ],
    "visualArchitecture": [
      {
        "title": "Browser Critical Rendering Path",
        "ascii": "[ HTML Bytes ] \u2500\u2500\u25ba [ Tokens ] \u2500\u2500\u25ba [ Nodes ] \u2500\u2500\u25ba [ DOM Tree ]\n                                                      \u2502\n                                                      \u25bc\n[ CSS Bytes ]  \u2500\u2500\u25ba [ Tokens ] \u2500\u2500\u25ba [ Nodes ] \u2500\u2500\u25ba [ CSSOM Tree ]\n                                                      \u2502\n                                                      \u25bc\n                                              [ RENDER TREE ] (Computed Styles)\n                                                      \u2502\n                                                      \u25bc\n                                              [ LAYOUT ENGINE ] (Geometry & Box Model)\n                                                      \u2502\n                                                      \u25bc\n                                              [ PAINT & COMPOSITE ] (Pixels to GPU Screen)"
      },
      {
        "title": "JavaScript Event Loop Architecture",
        "ascii": "[ CALL STACK ] (LIFO execution)\n       \u2502 (Async API Call)\n       \u25bc\n[ WEB APIS (Browser) ] (Timer, DOM Events, fetch())\n       \u2502 (Task completes)\n       \u25bc\n+-------------------------------------------------------------+\n| [ MICROTASK QUEUE ] (Promises, MutationObserver - High Pri) |\n| [ MACROTASK QUEUE ] (setTimeout, setInterval, I/O - Low Pri)|\n+-------------------------------------------------------------+\n       \u2502\n       \u25bc (Event Loop checks when Call Stack is empty)\n[ CALL STACK ]"
      }
    ],
    "scoringStrategy": {
      "tier1": "W3C Semantic Syntax Defense: Write valid HTML5 semantic tags and CSS declarations with exact attribute names (pattern, required, box-sizing: border-box).",
      "tier2": "DOM Tree & Box Model Diagrams: Draw hierarchical DOM node trees or CSS box model layers (Content -> Padding -> Border -> Margin).",
      "tier3": "Specificity & Event Delegation Checks: Calculate exact CSS specificity tuples (inline, ID, Class, Element) and explain event bubbling prevention.",
      "tier4": "Clean Runnable Code Boxing: Box complete, indentation-perfect JavaScript functions with try-catch and async/await error handling."
    },
    "textbooks": [
      {
        "title": "Mastering HTML, CSS & JavaScript Web Publishing",
        "authors": "Lemay, Colburn & Kyrnin",
        "chapters": "Ch 1, 2, 5, 6 (DOM, Semantic Tags, Forms)"
      },
      {
        "title": "HTML5 Black Book",
        "authors": "Kogent Learning Solutions",
        "chapters": "Ch 7-11 (Flexbox, Grid, Canvas, Web Storage)"
      },
      {
        "title": "Eloquent JavaScript (3rd Ed)",
        "authors": "Marijn Haverbeke",
        "chapters": "Ch 13-15 (DOM manipulation, Event Loop, Async/Promises)"
      }
    ],
    "units": [
      {
        "unit": "Unit I & II",
        "title": "HTML5 Semantics & Form Controls",
        "topics": [
          "Critical Rendering Path (DOM+CSSOM -> Render Tree)",
          "Semantic tags (<article>, <aside>, <nav>, <main>)",
          "Regex form validation attributes"
        ]
      },
      {
        "unit": "Unit III",
        "title": "CSS3 Styling, Flexbox & Grid",
        "topics": [
          "CSS Specificity formula (a,b,c,d)",
          "box-sizing: border-box",
          "1D Flexbox axis alignments (justify-content, align-items)",
          "2D CSS Grid repeat(auto-fit, minmax)"
        ]
      },
      {
        "unit": "Unit IV & V",
        "title": "JavaScript DOM & Web APIs",
        "topics": [
          "Execution Context & Call Stack",
          "Event Bubbling vs Capturing vs Delegation",
          "fetch() API with async/await",
          "localStorage vs sessionStorage"
        ]
      },
      {
        "unit": "Unit VI",
        "title": "Practicals & CI/CD Deployment",
        "topics": [
          "Lab 1-6 executable projects",
          "DOM dynamic filtering",
          "Async Todo application",
          "GitHub Pages static deployment"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I & II: HTML5 Semantic & Forms",
        "title": "Dave Gray HTML Full Course for Beginners",
        "channel": "Dave Gray / freeCodeCamp",
        "focus": "Semantic elements, accessible form controls, input attributes, and SEO.",
        "url": "https://www.youtube.com/results?search_query=Dave+Gray+HTML+Full+Course+for+Beginners",
        "duration": "40 mins",
        "timeline": "Week 1\u20132 \u2022 HTML5 Semantics",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit III: CSS Box Model & Specificity",
        "title": "Kevin Powell CSS Specificity and Box Model",
        "channel": "Kevin Powell",
        "focus": "Specificity calculation $(a,b,c,d)$, `box-sizing: border-box`, margins.",
        "url": "https://www.youtube.com/results?search_query=Kevin+Powell+CSS+Specificity+and+Box+Model",
        "duration": "25 mins",
        "timeline": "Week 3 \u2022 CSS Specificity",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit III: Flexbox in 20 Minutes",
        "title": "Kevin Powell Flexbox CSS Guide",
        "channel": "Kevin Powell / Fireship",
        "focus": "Main axis vs Cross axis, `justify-content`, `align-items`, responsive navbars.",
        "url": "https://www.youtube.com/results?search_query=Kevin+Powell+Flexbox+CSS+Guide",
        "duration": "20 mins",
        "timeline": "Week 4 \u2022 Flexbox 1D Layouts",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit III: CSS Grid Masterclass",
        "title": "Web Dev Simplified CSS Grid Tutorial",
        "channel": "Kevin Powell / Web Dev Simplified",
        "focus": "2D layouts, `grid-template-columns`, `auto-fit` vs `auto-fill`, `minmax()`.",
        "url": "https://www.youtube.com/results?search_query=Web+Dev+Simplified+CSS+Grid+Tutorial",
        "duration": "30 mins",
        "timeline": "Week 5 \u2022 CSS Grid 2D Macro",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: JS Fundamentals & Scope",
        "title": "Namaste JavaScript Akshay Saini Season 1",
        "channel": "Namaste JavaScript (Akshay Saini)",
        "focus": "Execution context, call stack, hoisting, closures, lexical scope.",
        "url": "https://www.youtube.com/results?search_query=Namaste+JavaScript+Akshay+Saini+Season+1",
        "duration": "45 mins",
        "timeline": "Week 7 \u2022 JS Execution & Scope",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Higher Order Functions",
        "title": "Akshay Saini map filter reduce",
        "channel": "Akshay Saini / Traversy Media",
        "focus": "Deep-dive into `.map()`, `.filter()`, and `.reduce()` with array transformations.",
        "url": "https://www.youtube.com/results?search_query=Akshay+Saini+map+filter+reduce+JavaScript",
        "duration": "25 mins",
        "timeline": "Week 8 \u2022 Functional JS",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: DOM Manipulation & Events",
        "title": "Traversy Media JavaScript DOM Crash Course",
        "channel": "Traversy Media / Dave Gray",
        "focus": "`querySelector`, `addEventListener`, Event Bubbling, Delegation.",
        "url": "https://www.youtube.com/results?search_query=Traversy+Media+JavaScript+DOM+Crash+Course",
        "duration": "35 mins",
        "timeline": "Week 9 \u2022 DOM & Event Bubbling",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit V: Fetch API, Async/Await & JSON",
        "title": "Web Dev Simplified Fetch API JavaScript",
        "channel": "Web Dev Simplified / Fireship",
        "focus": "`fetch()`, Promises, `async/await`, HTTP GET/POST, JSON parsing.",
        "url": "https://www.youtube.com/results?search_query=Web+Dev+Simplified+Fetch+API+JavaScript",
        "duration": "28 mins",
        "timeline": "Week 10 \u2022 Async/Await & APIs",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Web Storage API (LocalStorage)",
        "title": "Web Dev Simplified LocalStorage and SessionStorage",
        "channel": "dcode / Web Dev Simplified",
        "focus": "`localStorage.setItem()`, `getItem()`, `clear()`, `JSON.stringify()`.",
        "url": "https://www.youtube.com/results?search_query=Web+Dev+Simplified+LocalStorage+and+SessionStorage",
        "duration": "18 mins",
        "timeline": "Week 11 \u2022 Web Storage API",
        "priority": "\u26a1 Practical Web Mastery"
      },
      {
        "unit": "Unit VI: GitHub Pages Deployment",
        "title": "Deploy Website to GitHub Pages Traversy Media",
        "channel": "Kevin Powell / Traversy Media",
        "focus": "Git repository init, commit, branch, and live GitHub Pages hosting.",
        "url": "https://www.youtube.com/results?search_query=Deploy+Website+to+GitHub+Pages+Traversy+Media",
        "duration": "20 mins",
        "timeline": "Week 13 \u2022 GitHub Deployment",
        "priority": "\ud83c\udfc6 Project Hosting Mastery"
      }
    ],
    "vivaQuestions": [
      {
        "q": "Explain the standard CSS Box Model and the effect of box-sizing: border-box.",
        "a": "The Box Model consists of Content -> Padding -> Border -> Margin. With default content-box, total width = width + padding + border. With box-sizing: border-box, the defined width includes content, padding, and border, preventing layout breakage."
      },
      {
        "q": "What is Event Delegation in JavaScript and why is it performance-critical?",
        "a": "Event Delegation attaches a single event listener to a common parent element instead of hundreds of child listeners. It leverages Event Bubbling to catch events at the parent and access the triggering child via event.target, saving memory and handling dynamic elements."
      },
      {
        "q": "What is the difference between Event Bubbling and Event Capturing (Trickling)?",
        "a": "In Event Capturing (Phase 1), the event travels from window/document down to the target element. In Event Bubbling (Phase 3), the event bubbles upwards from the target element back up to window. Standard listeners capture in bubbling phase unless {capture: true} is set."
      },
      {
        "q": "Explain JavaScript Closures with a practical use case.",
        "a": "A Closure is the combination of a function bundled together with references to its surrounding lexical state (lexical environment). Even after the outer function returns, the inner function retains access to outer variables. Used in data privacy, module patterns, and factory functions."
      },
      {
        "q": "What is the difference between localStorage, sessionStorage, and Cookies?",
        "a": "localStorage persists indefinitely with ~5MB quota per origin. sessionStorage clears when the tab/browser window closes (~5MB quota). Cookies have ~4KB limit, include expiration timestamps, and are transmitted with every HTTP request header."
      },
      {
        "q": "How does CSS Flexbox differ fundamentally from CSS Grid?",
        "a": "Flexbox is 1-Dimensional (deals with either rows OR columns at a time, ideal for component layout). CSS Grid is 2-Dimensional (controls simultaneous rows AND columns, ideal for full-page macro scaffolding)."
      },
      {
        "q": "What is the difference between synchronous code and async/await in JavaScript?",
        "a": "Synchronous code blocks the single JavaScript thread. async/await provides clean syntax over Promises, pausing function execution without blocking the browser event loop, allowing I/O and user events to process concurrently."
      },
      {
        "q": "Name 5 essential HTML5 semantic elements and their structural purpose.",
        "a": "1) <header> (navigational banners), 2) <nav> (navigation links), 3) <main> (primary document content), 4) <article> (self-contained distributable content), 5) <section> (thematic grouping of content)."
      },
      {
        "q": "What is a CSS Media Query and how does Mobile-First design work?",
        "a": "Media Queries (@media (min-width: 768px)) apply CSS rules conditionally based on device viewport/resolution. Mobile-First design authors base styles for small screens first, then progressively layers enhancements with min-width queries."
      },
      {
        "q": "What is the Difference between == (Abstract Equality) and === (Strict Equality) in JS?",
        "a": "== performs implicit type coercion before comparison (e.g., '5' == 5 is true). === compares both value and type without coercion ('5' === 5 is false). Strict equality should always be preferred."
      }
    ],
    "assets": {
      "dashboard": "subjects/CSE326_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/CSE326_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "ece120",
    "code": "ECE120",
    "title": "Basic Electrical, Electronics & IoT Lab",
    "department": "Electronics & Communication Engineering",
    "credits": 1,
    "semester": 1,
    "category": "Electronics",
    "icon": "\u26a1",
    "themeColor": "#f59e0b",
    "badge": "Hardware Lab",
    "shortDescription": "Hands-on electrical laws (KVL/KCL, Thevenin), semiconductor diodes, bridge rectifiers, BJT CE mode, universal NAND/NOR digital logic synthesis, Full Adders, breadboard wiring protocols, and Arduino Uno sensor interfacing.",
    "strategyMatrix": [
      {
        "unit": "Module 1",
        "what": "KVL, KCL, Thevenin's & Norton's theorems, Maximum Power Transfer (R_L = R_th, \u03b7 = 50%), Voltage/Current division rules.",
        "where": "Kothari & Nagrath Ch 1, 2",
        "how": "1. Solve Thevenin equivalent V_th and R_th circuits.\n2. Apply node voltage equations."
      },
      {
        "unit": "Module 2",
        "what": "P-N junction barrier potential, Shockley diode equation, Half-Wave (\u03b7=40.6%) vs Full-Wave Bridge Rectifier (\u03b7=81.2%), PIV ratings.",
        "where": "Boylestad & Nashelsky Ch 1, 2",
        "how": "1. Derive rectifier efficiency and ripple factor.\n2. Calculate PIV requirements for diodes."
      },
      {
        "unit": "Module 3",
        "what": "BJT operation in CE mode, input/output characteristics, active/cutoff/saturation regions, current gain relations (\u03b2 = \u03b1 / (1 - \u03b1)).",
        "where": "Boylestad & Nashelsky Ch 3, 4",
        "how": "1. Plot CE output curves.\n2. Calculate Q-point in voltage divider bias."
      },
      {
        "unit": "Module 4 & 5",
        "what": "Universal NAND/NOR realization, De Morgan's laws, 4-variable K-Maps, Full Adder via 2 HAs + OR gate.",
        "where": "Morris Mano Ch 1-4",
        "how": "1. Synthesize all gates using NAND IC 7400.\n2. Draw Full Adder logic diagram with 2 HAs."
      },
      {
        "unit": "Module 6",
        "what": "ATmega328P pinout, 10-bit ADC (4.88 mV), IR sensor active-LOW comparator logic (LM393), Breadboard practicals 1-5.",
        "where": "Raj Kamal (IoT Architecture)",
        "how": "1. Wire ICs on breadboard with VCC/GND decoupling.\n2. Write Arduino C++ active-LOW detection code."
      }
    ],
    "visualArchitecture": [
      {
        "title": "Full-Wave Bridge Rectifier Circuit",
        "ascii": "           AC INPUT SECONDARY\n                 (~) A\n                  |\n        +---------+---------+\n        |                   |\n        v D1                v D2\n     +-----+             +-----+\n     |     |             |     |\n  +--+     +--+       +--+     +--+\n  |           |       |           |\n  |   +-------+-------+-------+   |\n  |   |                       |   |\n  |   |       [ LOAD RL ]     |   |\n  |   |        +       -      |   |\n  |   +-------+-------+-------+   |\n  |           |       |           |\n  |   +--+    |       |    +--+   |\n  +---|  |----+       +----|  |---+\n      +--+                 +--+\n        ^ D4                ^ D3\n        |                   |\n        +---------+---------+\n                  |\n                 (~) B"
      },
      {
        "title": "Full Adder Circuit (2 HAs + 1 OR)",
        "ascii": "A \u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n       \u2502     [XOR 1]\u2500\u2500\u2500\u25ba A \u2295 B \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\nB \u2500\u2500\u252c\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                     \u2502     [XOR 2]\u2500\u2500\u2500\u25ba SUM = A \u2295 B \u2295 C_in\n    \u2502  \u2502                           C_in \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510                     \u2502\n    \u2502        [AND 1]\u2500\u2500\u25ba A\u00b7B \u2500\u2500\u2500\u2500\u2500\u2510    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                \u2502          [AND 2]\u2500\u2500\u25ba C_in\u00b7(A \u2295 B)\n                                 \u2502             \u2502\n                                 \u2514\u2500\u2500\u25ba[ OR ]\u25c4\u2500\u2500\u2500\u2518\n                                       \u2502\n                                       \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba C_out = A\u00b7B + C_in\u00b7(A \u2295 B)"
      }
    ],
    "scoringStrategy": {
      "tier1": "Circuit Law & Formal Theorem Defense: State network theorems (Thevenin, Norton, KVL, KCL) with complete algebraic equations before solving numericals.",
      "tier2": "Labeled Circuit & Gate Schematics: Draw neat circuit schematics with labeled current loops, diode polarity arrows, or IC pinout numbers.",
      "tier3": "Ripple Factor & Invariant Verification: Verify bridge rectifier ripple factor is exactly 0.482, efficiency is 81.2%, and BJT current relation I_E = I_B + I_C holds true.",
      "tier4": "Precision SI Unit Boxing: Box final electrical parameters with explicit standard SI units (V, A, mA, k\u03a9, \u03bcF, Hz)."
    },
    "textbooks": [
      {
        "title": "Basic Electrical Engineering",
        "authors": "D.P. Kothari & I.J. Nagrath",
        "chapters": "Ch 1, 2 (DC Theorems, Thevenin, Norton)"
      },
      {
        "title": "Electronic Devices and Circuit Theory",
        "authors": "Robert L. Boylestad & Louis Nashelsky",
        "chapters": "Ch 1-4 (Diodes, Rectifiers, BJT CE characteristics)"
      },
      {
        "title": "Digital Logic and Computer Design",
        "authors": "M. Morris Mano",
        "chapters": "Ch 1-4 (Universal Gates, Full Adder design, K-Maps)"
      }
    ],
    "units": [
      {
        "unit": "Module 1",
        "title": "DC Circuit Analysis & Theorems",
        "topics": [
          "KVL & KCL node/mesh loops",
          "Thevenin's & Norton's equivalent circuits",
          "Maximum Power Transfer Theorem (R_L = R_th, \u03b7 = 50%)"
        ]
      },
      {
        "unit": "Module 2",
        "title": "Diode Physics & Rectifiers",
        "topics": [
          "P-N junction barrier potential",
          "Shockley equation",
          "Half-wave (\u03b7=40.6%) vs Full-wave bridge rectifier (\u03b7=81.2%, PIV=V_m, \u03b3=0.482)"
        ]
      },
      {
        "unit": "Module 3",
        "title": "BJT Transistors & Amplifiers",
        "topics": [
          "BJT CE mode input/output characteristics",
          "Active, Cutoff, Saturation regions",
          "Current gain relations (\u03b2 = \u03b1 / (1 - \u03b1))"
        ]
      },
      {
        "unit": "Module 4 & 5",
        "title": "Digital Logic & Adder Circuits",
        "topics": [
          "Universal NAND/NOR gate realization",
          "De Morgan's laws",
          "Full Adder using 2 Half Adders and 1 OR gate"
        ]
      },
      {
        "unit": "Module 6",
        "title": "Breadboard Practicals & Arduino IoT",
        "topics": [
          "IC 7400/7402/7408/7432/7486 pinouts & decoupling",
          "ATmega328P architecture",
          "LM393 IR sensor active-LOW interfacing"
        ]
      }
    ],
    "videos": [
      {
        "unit": "DC Circuit Analysis & Network Theorems",
        "title": "Neso Academy Network Theory KVL KCL Thevenin",
        "channel": "Neso Academy / Gate Smashers",
        "focus": "Node Voltage Analysis, Mesh Current Analysis, Thevenin & Norton equivalent derivations with solved numericals.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Network+Theory+KVL+KCL",
        "duration": "35 mins",
        "timeline": "Week 1\u20132 \u2022 DC Theorems",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "AC Circuits & Phasors",
        "title": "All About Electronics AC Circuit Analysis Phasors",
        "channel": "All About Electronics",
        "focus": "RMS, Average, Form factor, Impedance triangle ($R-L-C$ series/parallel resonance).",
        "url": "https://www.youtube.com/results?search_query=All+About+Electronics+AC+Circuit+Analysis+Phasors",
        "duration": "30 mins",
        "timeline": "Week 3\u20134 \u2022 AC Phasors & RLC",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "PN Junction Diodes & V-I Curve",
        "title": "All About Electronics PN Junction Diode V-I Characteristics",
        "channel": "All About Electronics / Neso Academy",
        "focus": "Barrier potential derivation, forward/reverse bias, dynamic resistance, Zener diode breakdown.",
        "url": "https://www.youtube.com/results?search_query=All+About+Electronics+PN+Junction+Diode+Characteristics",
        "duration": "28 mins",
        "timeline": "Week 5 \u2022 Diodes & V-I Curve",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Half-Wave & Full-Wave Rectifiers",
        "title": "All About Electronics Half Wave and Full Wave Rectifier",
        "channel": "All About Electronics",
        "focus": "Circuit diagrams, derivation of efficiency ($\\eta$), Ripple factor ($\\gamma$), and PIV ratings.",
        "url": "https://www.youtube.com/results?search_query=All+About+Electronics+Half+Wave+and+Full+Wave+Rectifier",
        "duration": "32 mins",
        "timeline": "Week 6 \u2022 Rectifier Efficiency",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "BJT Configurations & Biasing",
        "title": "Neso Academy BJT Transistor Characteristics and Biasing",
        "channel": "Neso Academy",
        "focus": "CE/CB input/output curves, DC load line, Q-point stability, Voltage Divider Biasing.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+BJT+Transistor+Biasing",
        "duration": "30 mins",
        "timeline": "Week 8 \u2022 BJT Transistors",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Logic Gates & Universal NAND/NOR",
        "title": "Neso Academy Logic Gates and Universal Gates Realization",
        "channel": "Neso Academy",
        "focus": "Truth tables, De Morgan's theorems, implementing NOT, AND, OR, XOR, XNOR using NAND/NOR only.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Logic+Gates+Universal+Gates",
        "duration": "25 mins",
        "timeline": "Week 9 \u2022 Universal Logic Gates",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Adders, Subtractors & K-Maps",
        "title": "Gate Smashers Half Adder and Full Adder",
        "channel": "Gate Smashers / Neso Academy",
        "focus": "2, 3, 4-variable K-maps, Half/Full adder logic diagrams, Ripple carry adders.",
        "url": "https://www.youtube.com/results?search_query=Gate+Smashers+Half+Adder+and+Full+Adder",
        "duration": "28 mins",
        "timeline": "Week 10 \u2022 Adders & K-Maps",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Breadboard Lab Practicals (Exp 1-5)",
        "title": "All About Electronics Breadboard Multimeter Diode Practical",
        "channel": "All About Electronics",
        "focus": "Physical hardware wiring, DMM voltage/current measurement, IC 74xx testing on trainer kit.",
        "url": "https://www.youtube.com/results?search_query=All+About+Electronics+Breadboard+Practical+Experiments",
        "duration": "25 mins",
        "timeline": "Week 11 \u2022 Breadboard Hardware",
        "priority": "\u26a1 Lab Practical Guide"
      },
      {
        "unit": "Arduino Uno + IR Sensor Interfacing",
        "title": "Arduino Uno IR Sensor Interfacing Circuit Digest",
        "channel": "Circuit Digest",
        "focus": "Complete wiring, active-LOW `digitalRead()` logic, Serial monitor debugging, buzzer alerts.",
        "url": "https://www.youtube.com/results?search_query=Arduino+Uno+IR+Sensor+Interfacing+Circuit+Digest",
        "duration": "22 mins",
        "timeline": "Week 12 \u2022 Arduino Sensor I/O",
        "priority": "\u26a1 IoT Lab Practical"
      },
      {
        "unit": "Master Viva Voce Preparation",
        "title": "Digital Electronics & Basic Electrical Viva Questions Gate Smashers",
        "channel": "Gate Smashers",
        "focus": "50+ examiner questions, troubleshooting breadboard errors, IC pinout traps.",
        "url": "https://www.youtube.com/results?search_query=Digital+Electronics+Viva+Questions+Gate+Smashers",
        "duration": "30 mins",
        "timeline": "Week 13 \u2022 Master Viva Voce",
        "priority": "\ud83c\udfc6 100-Percentile Viva"
      }
    ],
    "vivaQuestions": [
      {
        "q": "State Kirchhoff's Current Law (KCL) and Kirchhoff's Voltage Law (KVL).",
        "a": "KCL (Conservation of Charge): The algebraic sum of currents entering any node equals the sum of currents leaving (\u03a3I = 0). KVL (Conservation of Energy): The algebraic sum of all potential differences around any closed loop in a circuit equals zero (\u03a3V = 0)."
      },
      {
        "q": "State Thevenin's Theorem and Norton's Theorem.",
        "a": "Thevenin: Any linear two-terminal DC network can be replaced by an equivalent circuit of an independent voltage source (Vth) in series with resistance (Rth). Norton: Any linear two-terminal DC network can be replaced by an independent current source (In) in parallel with resistance (Rn), where In = Vth / Rth and Rn = Rth."
      },
      {
        "q": "State the Maximum Power Transfer Theorem for DC resistive circuits.",
        "a": "Maximum power is transferred from a source to a load resistance (RL) when the load resistance equals the internal Thevenin resistance of the source (RL = Rth). The maximum efficiency at this state is 50%."
      },
      {
        "q": "Explain the working and characteristics of a P-N Junction Diode under Forward and Reverse Bias.",
        "a": "Forward Bias (P connected to +, N to -): Depletion layer narrows, barrier potential is overcome (~0.7V for Si, 0.3V for Ge), producing exponential forward current. Reverse Bias: Depletion layer widens, only tiny reverse saturation current (Is) flows until avalanche/zener breakdown."
      },
      {
        "q": "Compare Half-Wave Rectifier vs Full-Wave Center-Tapped / Bridge Rectifier.",
        "a": "Half-Wave: 1 diode, efficiency \u03b7 = 40.6%, ripple factor \u03b3 = 1.21. Full-Wave Bridge: 4 diodes, efficiency \u03b7 = 81.2%, ripple factor \u03b3 = 0.48, requires no bulky center-tapped transformer."
      },
      {
        "q": "What are the 3 operating regions of a Bipolar Junction Transistor (BJT)?",
        "a": "1) Cut-off Region: Both E-B and C-B junctions reverse biased (transistor is OFF / open switch). 2) Active Region: E-B forward biased, C-B reverse biased (amplification). 3) Saturation Region: Both E-B and C-B forward biased (transistor is ON / closed switch)."
      },
      {
        "q": "Explain the concept of 'Virtual Ground' in an ideal Operational Amplifier (Op-Amp).",
        "a": "With infinite open-loop gain (Aol = \u221e) and negative feedback, the voltage difference between inverting and non-inverting inputs approaches zero (V+ - V- \u2248 0). If the non-inverting terminal is grounded (V+ = 0V), the inverting terminal is held at virtual ground potential (V- \u2248 0V) without direct connection to ground."
      },
      {
        "q": "What is the formula for RMS and Average value of a sinusoidal AC waveform?",
        "a": "Vrms = Vpeak / \u221a2 \u2248 0.707 Vpeak. Vavg = (2 / \u03c0) Vpeak \u2248 0.637 Vpeak. Form Factor = Vrms / Vavg \u2248 1.11."
      },
      {
        "q": "What are the core losses in a transformer and how are they minimized?",
        "a": "1) Hysteresis Loss: Energy lost in reversing magnetic domains (minimized using high-permeability Silicon Steel). 2) Eddy Current Loss: Induced circulating currents in core (minimized using thin, varnished laminated sheets)."
      },
      {
        "q": "What is the difference between an Intrinsic and Extrinsic Semiconductor?",
        "a": "Intrinsic is pure semiconductor (Si, Ge) with equal electron and hole concentrations (n = p = ni). Extrinsic is doped: N-type (doped with pentavalent donors like P, As, majority electrons) or P-type (doped with trivalent acceptors like B, Ga, majority holes)."
      }
    ],
    "assets": {
      "dashboard": "subjects/ECE120_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/ECE120_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "int108",
    "code": "INT108",
    "title": "Python Programming & Problem Solving",
    "department": "Computer Science & Engineering",
    "credits": 4,
    "semester": 1,
    "category": "Computer Science",
    "icon": "\ud83d\udc0d",
    "themeColor": "#10b981",
    "badge": "Core Programming",
    "shortDescription": "Mastery of Python language mechanics, CPython compilation pipeline, PVM bytecode execution, Garbage Collection, LEGB scoping, C3 MRO inheritance, Pickle serialization, 15 University Lab Practicals, and Top 75 Viva Voce Bank.",
    "strategyMatrix": [
      {
        "unit": "Unit I & II",
        "what": "CPython compilation (AST -> Bytecode -> PVM), Reference counting, Generational GC, GIL, Small Integer caching [-5, 256], Loop-else invariant.",
        "where": "Kenneth A. Lambert Ch 1-3; Reema Thareja Ch 1-3",
        "how": "1. Trace bytecode execution in ceval.c.\n2. Understand loop-else execution rules.\n3. Master PEMDAS right-associative exponentiation."
      },
      {
        "unit": "Unit III",
        "what": "PEP 393 string representations, slicing math s[start:stop:step], dynamic array overallocation, shallow vs deep copy, O(1) SipHash dict lookup.",
        "where": "Reema Thareja Ch 5-7",
        "how": "1. Calculate step slicing boundaries.\n2. Differentiate copy.copy() vs copy.deepcopy().\n3. Represent sparse matrices via tuple keys."
      },
      {
        "unit": "Unit IV & V",
        "what": "LEGB variable scope resolution, Mutable default argument trap, Closures, Decorators, C3 MRO Linearization, __slots__ memory optimization, Dunder methods.",
        "where": "Reema Thareja Ch 8, 10, 11",
        "how": "1. Trace LEGB scope lookups.\n2. Compute C3 MRO linearization order.\n3. Implement __str__, __repr__, __add__ operator overloading."
      },
      {
        "unit": "Unit VI & Labs",
        "what": "Context managers (with open()), pickle serialization & security warnings, try-except-else-finally lifecycle, regex tokens, Complete 15 Lab Practicals.",
        "where": "Lambert Ch 9; Python Official Docs",
        "how": "1. Write context managers with __enter__/__exit__.\n2. Memorize complete code for all 15 university practicals.\n3. Test regex token extractions."
      }
    ],
    "visualArchitecture": [
      {
        "title": "CPython Compilation & PVM Pipeline",
        "ascii": "[ Source Code: script.py ]\n            \u2502\n            \u25bc (Lexer / Tokenizer)\n[ Tokens Stream ]\n            \u2502\n            \u25bc (Parser)\n[ Abstract Syntax Tree (AST) ]\n            \u2502\n            \u25bc (Bytecode Compiler)\n[ Bytecode Object: script.pyc (.pyc cache) ]\n            \u2502\n            \u25bc (Python Virtual Machine - ceval.c Loop)\n[ PVM Instruction Execution / Machine Code ]"
      },
      {
        "title": "LEGB Scope Resolution Hierarchy",
        "ascii": "[ LOCAL (L) ] (Names assigned inside current function)\n       \u2502 (Not found?)\n       \u25bc\n[ ENCLOSING (E) ] (Names in outer enclosing function closures)\n       \u2502 (Not found?)\n       \u25bc\n[ GLOBAL (G) ] (Module-level top names, or global keyword)\n       \u2502 (Not found?)\n       \u25bc\n[ BUILT-IN (B) ] (Pre-loaded built-ins: len, range, print, open)\n       \u2502 (Not found?)\n       \u25bc\n[ NameError: name 'x' is not defined ]"
      }
    ],
    "scoringStrategy": {
      "tier1": "Formal Pythonic Concept & Complexity Defense: Define Python mechanisms (CPython bytecode, GIL, Call-by-sharing, LEGB) with time and space complexity (O(1) dictionary lookup).",
      "tier2": "CPython Heap & Pointer Diagrams: Draw variable-to-heap object pointer arrows, illustrating immutable object caching and mutable list reallocations.",
      "tier3": "Trap & Invariant Cross-Checks: Avoid the mutable default argument trap and verify loop else execution conditions.",
      "tier4": "PEP 8 Clean Code Boxing: Box complete, indentation-perfect Python scripts with type hints and docstrings for 100/100 (Grade 'O')."
    },
    "textbooks": [
      {
        "title": "Fundamentals of Python: First Programs",
        "authors": "Kenneth A. Lambert",
        "chapters": "Ch 1-9 (PVM, Slicing, OOP, Files)"
      },
      {
        "title": "Python Programming: Using Problem Solving Approach",
        "authors": "Reema Thareja",
        "chapters": "Ch 1-11 (Data structures, Functions, Exceptions, Classes, MRO)"
      }
    ],
    "units": [
      {
        "unit": "Unit I & II",
        "title": "CPython Compilation & Control Flow",
        "topics": [
          "AST -> Bytecode (.pyc) -> PVM (ceval.c)",
          "Ref Counting + Generational GC",
          "Small integer caching [-5, 256]",
          "Loop-else invariant"
        ]
      },
      {
        "unit": "Unit III",
        "title": "Sequences, Dicts & Hash Maps",
        "topics": [
          "PEP 393 string representations",
          "Slicing math s[start:stop:step]",
          "O(1) SipHash dict lookup",
          "Shallow vs Deep copy"
        ]
      },
      {
        "unit": "Unit IV & V",
        "title": "Functions, OOP & C3 MRO",
        "topics": [
          "LEGB scope resolution",
          "Mutable default argument trap",
          "Decorators & closures",
          "C3 Linearization (MRO)",
          "__slots__ memory optimization"
        ]
      },
      {
        "unit": "Unit VI & Labs",
        "title": "File I/O, Pickling & 15 Lab Practicals",
        "topics": [
          "Context managers (__enter__/__exit__)",
          "Pickle security warnings",
          "Complete 15 University Lab Practical codes",
          "Top 75 Viva Voce bank"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I & II: Python Setup & Flow Control",
        "title": "Corey Schafer Python Programming Tutorial",
        "channel": "Corey Schafer / Telusko",
        "focus": "Python environment setup, PVM model, conditionals, `while`/`for` loops, loop `else` clauses.",
        "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Tutorial+Beginners",
        "duration": "35 mins",
        "timeline": "Week 1\u20132 \u2022 PVM & Control Flow",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit III: Strings, Lists, Tuples & Dicts",
        "title": "Corey Schafer Python Lists Tuples and Dictionaries",
        "channel": "Corey Schafer / Chai aur Code",
        "focus": "Slicing tricks, list comprehensions, dictionary hashing, and shallow vs deep copying.",
        "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Lists+Tuples+and+Dictionaries",
        "duration": "40 mins",
        "timeline": "Week 3\u20134 \u2022 Lists & Mutability",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Functions, LEGB Scope & Recursion",
        "title": "Telusko Python Functions and Recursion",
        "channel": "Telusko (Navin Reddy)",
        "focus": "`*args`, `kwargs`, LEGB variable scoping, closures, decorators, and call stack visualization for recursive algorithms.",
        "url": "https://www.youtube.com/results?search_query=Telusko+Python+Functions+Arguments+Recursion",
        "duration": "35 mins",
        "timeline": "Week 5\u20136 \u2022 Functions & Scopes",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit V: Object-Oriented Programming (OOP)",
        "title": "Corey Schafer Python OOP Tutorials",
        "channel": "Corey Schafer / FreeCodeCamp",
        "focus": "Classes, instances, inheritance, method overriding, `super()`, MRO C3 linearization, and magic/dunder methods.",
        "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+OOP+Tutorials",
        "duration": "45 mins",
        "timeline": "Week 8\u20139 \u2022 Python OOP & MRO",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit VI: File Handling & Object Pickling",
        "title": "Corey Schafer Python File Objects Reading and Writing",
        "channel": "Telusko / Corey Schafer",
        "focus": "`with open()` context managers, binary files, serialization using `pickle.dump()` and `pickle.load()`.",
        "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+File+Objects+Reading+Writing",
        "duration": "30 mins",
        "timeline": "Week 10 \u2022 File I/O & Pickling",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit VI: Exception Handling & Regex",
        "title": "Corey Schafer Python Regular Expressions Regex",
        "channel": "Corey Schafer / Tech With Tim",
        "focus": "`try-except-else-finally` execution blocks, regex tokenization, pattern extraction with `re.findall()`.",
        "url": "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Regular+Expressions",
        "duration": "28 mins",
        "timeline": "Week 11 \u2022 Exceptions & Regex",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Complete 15 Lab Practicals Walkthrough",
        "title": "Python Programming Lab Practicals Gate Smashers",
        "channel": "Gate Smashers / Jenny's Lectures",
        "focus": "Step-by-step code demonstrations of all 15 university practical lab programs.",
        "url": "https://www.youtube.com/results?search_query=Python+Programming+Lab+Practicals+Gate+Smashers",
        "duration": "50 mins",
        "timeline": "Week 12 \u2022 15 Lab Programs",
        "priority": "\u26a1 Full Lab Practical Guide"
      },
      {
        "unit": "Master Viva Voce Preparation",
        "title": "Python Programming Viva Voce Questions Gate Smashers",
        "channel": "Gate Smashers / Knowledge Gate",
        "focus": "Top 75 external examiner interview questions, tricky syntax pitfalls, and output predictions.",
        "url": "https://www.youtube.com/results?search_query=Python+Programming+Viva+Voce+Questions+Gate+Smashers",
        "duration": "35 mins",
        "timeline": "Week 13 \u2022 Top 75 Viva Q&A",
        "priority": "\ud83c\udfc6 Grade 'O' Viva Prep"
      }
    ],
    "vivaQuestions": [
      {
        "q": "What are mutable vs immutable data types in Python?",
        "a": "Mutable (can be modified in-place without changing object id): list, dict, set, bytearray. Immutable (cannot be modified after creation; operations return a new object): int, float, str, tuple, frozenset, bool, bytes."
      },
      {
        "q": "Explain the 'Mutable Default Argument Trap' in Python functions.",
        "a": "Default parameter values are evaluated once at function definition time, NOT at invocation time. If a mutable default is used (e.g., def f(val, acc=[]): acc.append(val)), subsequent calls share and mutate the same list object across invocations. Fix: def f(val, acc=None): if acc is None: acc = []"
      },
      {
        "q": "What is the Python Global Interpreter Lock (GIL)?",
        "a": "The GIL is a mutex in CPython that prevents multiple native OS threads from executing Python bytecode simultaneously, ensuring thread-safe reference counting. For CPU-bound parallel workloads, use multiprocessing rather than multithreading."
      },
      {
        "q": "What is the difference between 'is' and '==' in Python?",
        "a": "'==' checks for value equality (invoking __eq__), verifying whether two objects hold equivalent contents. 'is' checks for identity (memory address equality), verifying whether id(a) == id(b)."
      },
      {
        "q": "Explain List Comprehensions vs Generator Expressions in Python.",
        "a": "List Comprehension [x**2 for x in data] builds and stores the entire list in memory immediately. Generator Expression (x**2 for x in data) returns a lazy generator object yielding values one-by-one via next(), conserving memory for large streams."
      },
      {
        "q": "What are *args and **kwargs in Python function headers?",
        "a": "*args packs arbitrary positional arguments into a tuple. **kwargs packs arbitrary keyword arguments into a dictionary."
      },
      {
        "q": "How do Python Decorators work under the hood?",
        "a": "A decorator is a callable that takes a function as an argument, wraps it with pre/post execution logic, and returns the modified wrapper function. @decorator syntax is syntactic sugar for f = decorator(f)."
      },
      {
        "q": "Explain the difference between shallow copy and deep copy in Python.",
        "a": "A shallow copy (copy.copy()) constructs a new compound object but inserts references to the child objects found in the original. A deep copy (copy.deepcopy()) recursively clones all nested objects, completely isolating the new structure."
      },
      {
        "q": "What is the purpose of the 'finally' clause in Python exception handling?",
        "a": "The finally block executes unconditionally after try/except blocks regardless of whether an exception was raised, handled, or caused an early return. Essential for resource cleanup (closing DB connections, file handles)."
      },
      {
        "q": "What are Python Dunder (Magic) methods like __init__, __str__, and __repr__?",
        "a": "__init__ is the instance initializer called upon object instantiation. __repr__ returns an unambiguous official string representation for developers. __str__ returns a readable string for end users."
      }
    ],
    "assets": {
      "dashboard": "subjects/INT108_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/INT108_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/INT108_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "mth165",
    "code": "MTH165",
    "title": "Mathematics for Engineers",
    "department": "Mathematics",
    "credits": 4,
    "semester": 1,
    "category": "Mathematics",
    "icon": "\ud83d\udcd0",
    "themeColor": "#818cf8",
    "badge": "Core Mathematics",
    "shortDescription": "Rigorous engineering mathematics spanning Matrix Rank, Rouch\u00e9-Capelli system consistency, Leibniz n-th derivative rule, Mean Value Theorems, King's Integral Rule, Two-variable extrema (rt-s^2), Change of Order multiple integration, and Fourier series expansions.",
    "strategyMatrix": [
      {
        "unit": "Unit I",
        "what": "Rank via Row Echelon & Normal forms [I_r 0; 0 0], Rouch\u00e9-Capelli consistency for AX=B, Eigenvalue Trace/Det invariants, Cayley-Hamilton inverse A^-1.",
        "where": "B.S. Grewal Ch 2; Jain & Iyengar Ch 2",
        "how": "1. Transform to Upper Triangular form.\n2. Apply augmented matrix [A|B] test.\n3. Verify CHT: A^3 - c1 A^2 + c2 A - c3 I = 0."
      },
      {
        "unit": "Unit II",
        "what": "Parametric (d^2y/dx^2), Implicit (-F_x/F_y), Leibniz's n-th derivative formula (uv)_n, Rolle's/LMVT/Taylor series, L'H\u00f4pital across 7 forms.",
        "where": "B.S. Grewal Ch 4, 5; NCERT XII Part I",
        "how": "1. Memorize Leibniz n-th derivative formula.\n2. Master 1^inf to L'H\u00f4pital log transformation.\n3. State continuity and differentiability conditions."
      },
      {
        "unit": "Unit III",
        "what": "King's Property \u222bf(a+b-x)dx, Even/Odd symmetry, Wallis & Gamma reduction formula \u222b sin^m x cos^n x dx = \u0393((m+1)/2)\u0393((n+1)/2) / [2\u0393((m+n+2)/2)].",
        "where": "NCERT XII Part II; B.S. Grewal Ch 6",
        "how": "1. Add I and King's transformed I equations.\n2. Solve trig products via Gamma reductions."
      },
      {
        "unit": "Unit IV",
        "what": "Path test for limits, Composite Euler's theorem x u_x + y u_y = n F(u)/F'(u), Two-variable extrema (rt - s^2), Lagrange multipliers.",
        "where": "Jain & Iyengar Ch 5; B.S. Grewal Ch 5",
        "how": "1. Prove limit non-existence via parabolic paths.\n2. Construct stationary point discriminant table.\n3. Form auxiliary function F = f + \u03bbg."
      },
      {
        "unit": "Unit V",
        "what": "Double integrals change of order (switching vertical strips to horizontal strips with sketches), Jacobians in Polar & Spherical, 2D Area & 3D Volume.",
        "where": "B.S. Grewal Ch 7",
        "how": "1. Sketch 2D region R and mark vertices.\n2. Reverse vertical strip dy dx to horizontal dx dy.\n3. Convert to Polar/Spherical Jacobians."
      },
      {
        "unit": "Unit VI",
        "what": "Dirichlet conditions, Euler formulas (a0, an, bn), Discontinuity jump convergence [f(x0+)+f(x0-)]/2, Half-range Sine/Cosine series, Parseval deductions.",
        "where": "Jain & Iyengar Ch 10; B.S. Grewal Ch 10",
        "how": "1. Check Even/Odd symmetry to zero out an/bn.\n2. Integrate by parts using [cos(n pi) = (-1)^n].\n3. Deduce sum(1/n^2) = pi^2 / 6."
      }
    ],
    "visualArchitecture": [
      {
        "title": "Matrix Linear System (AX = B) Consistency Pipeline",
        "ascii": "[ System AX = B ] \u2500\u2500\u25ba Form Augmented Matrix [ A | B ]\n                             \u2502\n                             \u25bc Apply Elementary Row Operations\n                 [ Row Echelon Form of [ A | B ] ]\n                             \u2502\n         +-------------------+-------------------+\n         \u2502                                       \u2502\n         \u25bc                                       \u25bc\n  rank(A) != rank([A|B])                  rank(A) == rank([A|B]) = r\n         \u2502                                       \u2502\n         \u25bc                               +-------+-------+\n  INCONSISTENT                           \u2502               \u2502\n  (No Solution)                          \u25bc               \u25bc\n                                       r == n          r < n\n                                         \u2502               \u2502\n                                         \u25bc               \u25bc\n                                     CONSISTENT      CONSISTENT\n                                  (Unique Soln)   (Infinite Solns)\n                                                  (n-r Free Vars)"
      },
      {
        "title": "Two-Variable Extrema Decision Matrix (rt - s\u00b2)",
        "ascii": "Stationary Points: Solve f_x = 0 and f_y = 0 for (a, b)\nCalculate at (a, b): r = f_xx, s = f_xy, t = f_yy\nEvaluate: Discriminant \u0394 = r\u00b7t - s\u00b2\n                 \u2502\n         +-------+-------+\n         \u2502               \u2502\n         \u25bc               \u25bc\n      \u0394 > 0            \u0394 < 0 \u2500\u2500\u25ba SADDLE POINT (Neither max nor min)\n         \u2502               \u2502\n     +---+---+           \u25bc\n     \u2502       \u2502         \u0394 = 0 \u2500\u2500\u25ba INCONCLUSIVE (Higher tests needed)\n     \u25bc       \u25bc\n   r > 0   r < 0\n     \u2502       \u2502\n     \u25bc       \u25bc\n   LOCAL   LOCAL\n  MINIMUM MAXIMUM"
      }
    ],
    "scoringStrategy": {
      "tier1": "Formula & Precondition Defense: State standard equations (Leibniz, Euler, King's rule, Fourier coefficients) and explicit preconditions (continuity on [a,b], differentiability on (a,b)).",
      "tier2": "Visual 2D Region Sketches & Strips: Draw clear 2D Cartesian region diagrams for Change of Order double integration, labeling boundary curves and strip arrows.",
      "tier3": "Invariant Cross-Checks: Verify eigenvalue trace sum (\u03a3 \u03bb_i = tr(A)) and determinant product (\u03a0 \u03bb_i = det(A)); check even/odd symmetry before calculating Fourier coefficients.",
      "tier4": "Answer & Deduction Series Boxing: Box final numerical solutions with units and write explicit deduction lines (\u03a3 1/n\u00b2 = \u03c0\u00b2/6)."
    },
    "textbooks": [
      {
        "title": "Higher Engineering Mathematics",
        "authors": "B.S. Grewal",
        "chapters": "Ch 2, 4, 5, 6, 7, 10 (Matrices, Calculus, Multiple Integrals, Fourier)"
      },
      {
        "title": "Advanced Engineering Mathematics",
        "authors": "R.K. Jain & S.R.K. Iyengar",
        "chapters": "Ch 2, 5, 10 (Linear systems, Homogeneous functions, Extrema)"
      }
    ],
    "units": [
      {
        "unit": "Unit I",
        "title": "Matrix Methods & Linear Systems",
        "topics": [
          "Rank via Row Echelon and Normal form [I_r 0; 0 0]",
          "Rouch\u00e9-Capelli consistency for AX=B",
          "Eigenvalue Trace and Determinant invariants",
          "Cayley-Hamilton inverse A^-1"
        ]
      },
      {
        "unit": "Unit II",
        "title": "Differential Calculus & Applications",
        "topics": [
          "Parametric & Implicit derivatives",
          "Leibniz's n-th derivative formula (uv)_n",
          "Rolle's & LMVT theorems",
          "L'H\u00f4pital across 7 indeterminate forms"
        ]
      },
      {
        "unit": "Unit III",
        "title": "Fundamentals of Integral Calculus",
        "topics": [
          "King's Rule \u222bf(a+b-x)dx",
          "Wallis & Gamma reduction formula \u222b sin^m x cos^n x dx",
          "Definite integral symmetry"
        ]
      },
      {
        "unit": "Unit IV",
        "title": "Multivariate Differentiation",
        "topics": [
          "Composite Euler's theorem for homogeneous functions",
          "Two-variable extrema discriminant (rt - s^2)",
          "Lagrange multipliers \u2207f + \u03bb\u2207g = 0"
        ]
      },
      {
        "unit": "Unit V",
        "title": "Multivariable Integration",
        "topics": [
          "Double integral Change of Order (switching vertical/horizontal strips)",
          "Jacobians in Polar (r dr d\u03b8) and Spherical coordinates",
          "Area and Volume applications"
        ]
      },
      {
        "unit": "Unit VI",
        "title": "Fourier Series",
        "topics": [
          "Euler's formulae (a0, an, bn)",
          "Discontinuity jump convergence [f(x0+)+f(x0-)]/2",
          "Half-range Sine/Cosine series",
          "Parseval's identity deductions"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I: Matrix Methods, Linear Systems & Eigenvalues",
        "title": "Rank of Matrix (Echelon Form & Normal Form)",
        "channel": "Dr. Gajendra Purohit",
        "focus": "How to apply elementary row operations without altering the matrix rank; transforming to Row Echelon form ($a_{ij} = 0$ for $i > j$); counting non-zero rows; transforming to Normal Form $[I_r\\ 0; 0\\ 0]$ using both row and column operations.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Rank+of+Matrix+Echelon+Form+Normal+Form",
        "duration": "30 mins",
        "timeline": "Week 1 \u2022 Rank & Echelon",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Matrix Methods, Linear Systems & Eigenvalues",
        "title": "System of Linear Equations ($AX = B$) & Consistency Tests",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Augmented matrix $[A|B]$ construction; Rouch\u00e9-Capelli consistency conditions; determining conditions for $\\lambda$ and $\\mu$ to yield (i) No solution, (ii) Unique solution, (iii) Infinite solutions.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+System+of+Linear+Equations+Consistency+Rouche+Capelli",
        "duration": "32 mins",
        "timeline": "Week 2 \u2022 System Consistency",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Matrix Methods, Linear Systems & Eigenvalues",
        "title": "Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Characteristic equation shortcut $\\lambda^3 - \\text{tr}(A)\\lambda^2 + (M_{11}+M_{22}+M_{33})\\lambda - |A| = 0$; finding orthogonal eigenvectors for repeated eigenvalues; verifying $P(A) = 0$; computing $A^{-1}$ and $A^4$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Eigenvalues+Eigenvectors+Cayley+Hamilton+Theorem",
        "duration": "35 mins",
        "timeline": "Week 2 \u2022 Eigenvalues & Inverse",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Matrix Methods, Linear Systems & Eigenvalues",
        "title": "Essence of Linear Algebra: 3D Visual Transformations",
        "channel": "3Blue1Brown",
        "focus": "Visualizing determinants as volume scaling factors, eigenvectors as directional invariants under linear transforms, and column spaces as spans.",
        "url": "https://www.youtube.com/results?search_query=3Blue1Brown+Essence+of+Linear+Algebra",
        "duration": "20 mins",
        "timeline": "Week 3 \u2022 3D Linear Algebra",
        "priority": "\u26a1 Visual Geometric Intuition"
      },
      {
        "unit": "Unit II: Differential Calculus, Leibniz's Theorem & Mean Value Theorems",
        "title": "Leibniz's Theorem for $n$-th Derivative of a Product",
        "channel": "Bhagwan Singh Vishwakarma (BSV Maths)",
        "focus": "$(uv)_n = \\sum_{r=0}^n \\binom{n}{r} u_{n-r} v_r$; choosing $v$ such that higher derivatives terminate; standard university proofs like proving $(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2+m^2)y_n = 0$ for $y = \\sin(m \\sin^{-1} x)$ or $y = (x^2-1)^n$.",
        "url": "https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Leibniz+Theorem+nth+derivative",
        "duration": "38 mins",
        "timeline": "Week 4 \u2022 Leibniz n-th Rule",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit II: Differential Calculus, Leibniz's Theorem & Mean Value Theorems",
        "title": "Mean Value Theorems (Rolle's, LMVT, Cauchy's MVT)",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Verifying continuity and differentiability conditions; algebraic and trigonometric functions; finding exact point $c \\in (a, b)$; Cauchy's theorem ratio $\\frac{f'(c)}{g'(c)} = \\frac{f(b)-f(a)}{g(b)-g(a)}$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Rolle+Theorem+LMVT+Cauchy+Mean+Value+Theorem",
        "duration": "28 mins",
        "timeline": "Week 4 \u2022 Mean Value Theorems",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit II: Differential Calculus, Leibniz's Theorem & Mean Value Theorems",
        "title": "Taylor's & Maclaurin's Series Expansions",
        "channel": "Bhagwan Singh Vishwakarma",
        "focus": "Expansion in powers of $(x - a)$ vs powers of $x$; Lagrange remainder term; expanding $\\ln(1+x), e^x, \\sin x, \\tan^{-1} x$.",
        "url": "https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Taylor+Maclaurin+Series+Expansion",
        "duration": "25 mins",
        "timeline": "Week 5 \u2022 Taylor & Maclaurin",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit II: Differential Calculus, Leibniz's Theorem & Mean Value Theorems",
        "title": "Indeterminate Forms & Multi-Stage L'H\u00f4pital's Rule",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Solving $0/0$ and $\\infty/\\infty$; converting $0 \\cdot \\infty$ and $\\infty - \\infty$; logarithmic conversion of exponential indeterminate forms $1^\\infty, 0^0, \\infty^0$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Indeterminate+Forms+L+Hospital+Rule+Shortcuts",
        "duration": "22 mins",
        "timeline": "Week 5 \u2022 L'H\u00f4pital Limits",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit III: Fundamentals of Integral Calculus & Reduction Formulas",
        "title": "Definite Integrals & King's Property",
        "channel": "Dr. Gajendra Purohit",
        "focus": "$\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$; evaluating $I = \\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx = \\frac{\\pi}{4}$; proving $\\int_0^{\\pi/2} \\ln(\\sin x) dx = -\\frac{\\pi}{2}\\ln 2$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Definite+Integrals+Properties+King+Rule",
        "duration": "30 mins",
        "timeline": "Week 6 \u2022 King's Rule Integrals",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit III: Fundamentals of Integral Calculus & Reduction Formulas",
        "title": "Wallis' Formula & Beta-Gamma Reductions",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Solving $\\int_0^{\\pi/2} \\sin^m x \\cos^n x dx$; integer numerator/denominator countdown rules; Gamma function relation $\\Gamma(n) = (n-1)!$ and $\\Gamma(1/2) = \\sqrt{\\pi}$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Wallis+Formula+Beta+Gamma+Function",
        "duration": "25 mins",
        "timeline": "Week 6 \u2022 Wallis & Gamma",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema",
        "title": "Limits & Path Tests of Two Variables",
        "channel": "Dr. Gajendra Purohit",
        "focus": "$\\epsilon-\\delta$ limit definitions; testing paths $y = mx, y = mx^2, y = mx^3, y = mx - x^2$; proving non-existence of limits when the resulting value depends on slope $m$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Limits+and+Continuity+of+Two+Variables+Path+Test",
        "duration": "24 mins",
        "timeline": "Week 8 \u2022 2-Variable Limits",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema",
        "title": "Euler's Theorem on Homogeneous Functions & Composite Extensions",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Identifying homogeneous degree $n$; proving $x u_x + y u_y = nu$; second order $x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = n(n-1)u$; solving composite inverse trig functions $u = \\sin^{-1}(\\dots)$ via $x u_x + y u_y = n \\frac{F(u)}{F'(u)}$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Euler+Theorem+on+Homogeneous+Functions",
        "duration": "35 mins",
        "timeline": "Week 8 \u2022 Euler's Homogeneous",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema",
        "title": "Maxima & Minima of Two Variables ($rt - s^2$)",
        "channel": "Bhagwan Singh Vishwakarma",
        "focus": "Solving $f_x = 0$ and $f_y = 0$; calculating $r = f_{xx}, s = f_{xy}, t = f_{yy}$; constructing the discriminant table; distinguishing local minimum ($r > 0$), local maximum ($r < 0$), and saddle points ($\\Delta < 0$).",
        "url": "https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Maxima+and+Minima+Two+Variables+rt-s2",
        "duration": "30 mins",
        "timeline": "Week 9 \u2022 Maxima/Minima rt-s\u00b2",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Multivariate Differentiation, Euler's Theorem & Extrema",
        "title": "Lagrange's Method of Undetermined Multipliers",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Auxiliary function $F = f + \\lambda g$; setting partial derivatives to 0; optimizing rectangular box volume inside an ellipsoid $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Lagrange+Method+of+Undetermined+Multipliers",
        "duration": "28 mins",
        "timeline": "Week 9 \u2022 Lagrange Multipliers",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Multivariable Integration, Change of Order & Jacobians",
        "title": "Change of Order of Integration in Double Integrals",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Sketching boundary curves $y = f_1(x), y = f_2(x), x=a, x=b$; identifying bounded region $R$; changing vertical strip $(dy dx)$ to horizontal strip $(dx dy)$ for integrands like $\\int e^{-y^2} dy$ or $\\int \\frac{\\sin y}{y} dy$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Change+of+Order+of+Integration+Double+Integral",
        "duration": "35 mins",
        "timeline": "Week 10 \u2022 Change of Order",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit V: Multivariable Integration, Change of Order & Jacobians",
        "title": "Jacobians & Coordinate Transformations (Polar, Cylindrical, Spherical)",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Jacobian determinant calculation; $J \\cdot J' = 1$; composite chain rule for Jacobians; differential area elements ($dx dy = r dr d\\theta$) and volume elements ($dV = \\rho^2 \\sin\\phi d\\rho d\\phi d\\theta$).",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Jacobians+Properties+Coordinate+Transformation",
        "duration": "28 mins",
        "timeline": "Week 11 \u2022 Jacobians & Polar",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Multivariable Integration, Change of Order & Jacobians",
        "title": "Double & Triple Integrals for Area and Volume Calculation",
        "channel": "Bhagwan Singh Vishwakarma",
        "focus": "Calculating area between parabolas $y^2 = 4ax$ and $x^2 = 4ay$; volume of sphere $x^2 + y^2 + z^2 = a^2$ via spherical coordinates.",
        "url": "https://www.youtube.com/results?search_query=Bhagwan+Singh+Vishwakarma+Area+and+Volume+Multiple+Integrals",
        "duration": "32 mins",
        "timeline": "Week 11 \u2022 Area & Volume",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit VI: Fourier Series, Dirichlet Conditions & Half-Range Expansions",
        "title": "Fourier Series Full Concept & Euler's Formulas",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Periodic functions; Dirichlet conditions; integration by parts with $\\cos(n\\pi) = (-1)^n$ and $\\sin(n\\pi) = 0$; evaluating coefficients $a_0, a_n, b_n$ in $[-\\pi, \\pi]$ and $[-L, L]$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Fourier+Series+Euler+Formula+Full+Concept",
        "duration": "40 mins",
        "timeline": "Week 12 \u2022 Fourier Series Euler",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit VI: Fourier Series, Dirichlet Conditions & Half-Range Expansions",
        "title": "Even & Odd Functions in Fourier Series (Cosine vs Sine Series)",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Symmetry reduction: Even function $\\implies b_n = 0$; Odd function $\\implies a_0 = a_n = 0$; expanding $f(x) = x^2$ or $f(x) = |x|$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Fourier+Series+Even+Odd+Functions",
        "duration": "30 mins",
        "timeline": "Week 12 \u2022 Even/Odd Shortcuts",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit VI: Fourier Series, Dirichlet Conditions & Half-Range Expansions",
        "title": "Half-Range Fourier Sine and Cosine Series & Parseval's Identity",
        "channel": "Dr. Gajendra Purohit",
        "focus": "Half-range Sine series ($b_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}dx$); Half-range Cosine series; Parseval's formula $\\frac{1}{L}\\int [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum(a_n^2+b_n^2)$; deducing $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$, $\\sum \\frac{1}{n^4} = \\frac{\\pi^4}{90}$.",
        "url": "https://www.youtube.com/results?search_query=Dr+Gajendra+Purohit+Half+Range+Fourier+Series+Parseval+Identity",
        "duration": "35 mins",
        "timeline": "Week 13 \u2022 Half-Range Series",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      }
    ],
    "vivaQuestions": [
      {
        "q": "State the Cayley-Hamilton Theorem and its direct application.",
        "a": "Every square matrix A satisfies its own characteristic equation: det(A - \u03bbI) = 0. If \u03bb^n + c_{n-1}\u03bb^{n-1} + ... + c0 = 0, then A^n + c_{n-1}A^{n-1} + ... + c0\u00b7I = 0. Multiplying by A^{-1} allows direct computation of matrix inverse and high matrix powers."
      },
      {
        "q": "State the Rouche-Capelli Theorem for consistency of a system AX = B.",
        "a": "Let [A|B] be the augmented matrix. 1) If rank(A) = rank([A|B]) = n (number of variables), the system is consistent with a UNIQUE solution. 2) If rank(A) = rank([A|B]) < n, the system has INFINITELY MANY solutions. 3) If rank(A) < rank([A|B]), the system is INCONSISTENT (No solution)."
      },
      {
        "q": "What are the fundamental properties of Eigenvalues regarding Trace and Determinant?",
        "a": "1) Sum of eigenvalues of A = Trace of matrix A (sum of main diagonal elements: \u03a3\u03bb_i = Tr(A)). 2) Product of eigenvalues of A = Determinant of matrix A (\u03a0\u03bb_i = det(A)). 3) Eigenvalues of A^T are identical to eigenvalues of A."
      },
      {
        "q": "State Rolle's Theorem and its geometrical interpretation.",
        "a": "If f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then there exists at least one point c \u2208 (a, b) such that f'(c) = 0. Geometrically, there is at least one point where the tangent line is horizontal (parallel to x-axis)."
      },
      {
        "q": "State Euler's Theorem for Homogeneous Functions of degree n.",
        "a": "If u = f(x, y) is a homogeneous function of degree n in x and y, then: x\u00b7(\u2202u/\u2202x) + y\u00b7(\u2202u/\u2202y) = n\u00b7u. For second derivatives: x\u00b2\u00b7(\u2202\u00b2u/\u2202x\u00b2) + 2xy\u00b7(\u2202\u00b2u/\u2202x\u2202y) + y\u00b2\u00b7(\u2202\u00b2u/\u2202y\u00b2) = n(n-1)\u00b7u."
      },
      {
        "q": "Explain Lagrange's Method of Multipliers for constrained optimization.",
        "a": "To find extrema of f(x, y, z) subject to constraint g(x, y, z) = c, formulate the auxiliary function L(x, y, z, \u03bb) = f(x, y, z) - \u03bb(g(x, y, z) - c). Solve the system of simultaneous equations: \u2207f = \u03bb\u2207g along with g(x, y, z) = c."
      },
      {
        "q": "What is the Jacobian transformation rule for changing Cartesian to Polar coordinates in double integrals?",
        "a": "For x = r cos \u03b8, y = r sin \u03b8, the Jacobian is J = \u2202(x,y)/\u2202(r,\u03b8) = r. Hence, the differential area element dx dy transforms to r dr d\u03b8, so \u222c f(x,y) dx dy = \u222c f(r cos \u03b8, r sin \u03b8) r dr d\u03b8."
      },
      {
        "q": "State the Dirichlet Conditions for the existence of a valid Fourier Series expansion.",
        "a": "f(x) can be expanded into a Fourier Series if on interval (-L, L): 1) f(x) is periodic, single-valued, and bounded; 2) f(x) has a finite number of finite discontinuities; 3) f(x) has a finite number of local maxima and minima."
      },
      {
        "q": "What happens to the Fourier coefficients for an Even function vs an Odd function?",
        "a": "Even function f(-x) = f(x): Fourier Sine coefficient bn = 0, expansion contains only cosine terms (Half-range Cosine series). Odd function f(-x) = -f(x): Fourier Cosine coefficients a0 = 0 and an = 0, expansion contains only sine terms (Half-range Sine series)."
      },
      {
        "q": "State King's Property of Definite Integrals.",
        "a": "\u222b[a to b] f(x) dx = \u222b[a to b] f(a + b - x) dx. For interval [0, a]: \u222b[0 to a] f(x) dx = \u222b[0 to a] f(a - x) dx."
      }
    ],
    "assets": {
      "dashboard": "subjects/MTH165_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/MTH165_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  },
  {
    "id": "phy175",
    "code": "PHY175",
    "title": "Physics for Engineers & Electronics",
    "department": "Physics & Electronics",
    "credits": 3,
    "semester": 1,
    "category": "Physics",
    "icon": "\ud83d\udd2c",
    "themeColor": "#06b6d4",
    "badge": "Core Physics",
    "shortDescription": "Comprehensive engineering physics and digital hardware syllabus covering Solid State Physics, Hall Effect derivation, BJT CE modes, CMOS inverters, Optical Fiber NA, 4-variable K-Maps, Full Adders, Master-Slave JK Flip-Flops, Shift Registers, and Arduino Sensors.",
    "strategyMatrix": [
      {
        "unit": "Unit I",
        "what": "Free electron theory, Fermi energy, Fermi-Dirac distribution f(E), Band theory, Effective mass, Hall effect derivation (V_H = BI/net, R_H = 1/ne), Solar cell Fill Factor & efficiency.",
        "where": "V.K. Mehta Ch 1; S.O. Pillai Ch 6",
        "how": "1. Memorize Fermi-Dirac f(E) equation.\n2. Draw 3D slab for V_H = BI / (n e t).\n3. Contrast Direct vs Indirect bandgaps."
      },
      {
        "unit": "Unit II",
        "what": "KCL, KVL, Voltage/Current division, PN Diode characteristics, Rectifier efficiency (40.6% vs 81.2%), BJT CE modes, CMOS inverter, Optical fiber NA = \u221a(n1^2 - n2^2), CPU vs GPU.",
        "where": "Robert L. Boylestad Ch 1-4",
        "how": "1. Practice bridge rectifier PIV & efficiency.\n2. Master CMOS zero static power operation.\n3. Derive Fiber NA = sqrt(n1^2 - n2^2)."
      },
      {
        "unit": "Unit III",
        "what": "Radix conversions, 2's complement subtraction & overflow, Binary-Gray conversion, Universal NAND/NOR gate synthesis, Boolean algebra, 4-variable K-Maps with Don't Cares ('X').",
        "where": "Thomas L. Floyd Ch 2-4; M. Morris Mano",
        "how": "1. Perform 2's comp subtraction + overflow.\n2. Master 4-variable K-Map rolling grouping.\n3. Apply Don't Care ('X') for max reduction."
      },
      {
        "unit": "Unit IV",
        "what": "Half/Full Adders (Sum = A\u2295B\u2295C_in, C_out = AB + C_in(A\u2295B)) via 2 HAs + OR, Subtractors, 4:1 / 8:1 MUX logic generators, Decoders, Priority Encoders, 2-bit Comparators.",
        "where": "Thomas L. Floyd Ch 5, 6",
        "how": "1. Draw Full Adder with 2 HAs + 1 OR gate.\n2. Implement logic functions using MUX tables.\n3. Derive 2-bit Magnitude Comparator equations."
      },
      {
        "unit": "Unit V",
        "what": "Latches vs Flip-Flops (SR, JK, D, T), Master-Slave JK race-around fix, Flip-Flop conversion tables, Shift registers (SISO, SIPO, PISO, PIPO), Mod-N counters (f_max = 1/n*t_pd).",
        "where": "Thomas L. Floyd Ch 7, 8; R.P. Jain",
        "how": "1. Master Master-Slave JK race-around fix.\n2. Use excitation tables for FF conversions.\n3. Connect NAND to CLR for Mod-N counter."
      },
      {
        "unit": "Unit VI",
        "what": "ATmega328P architecture, 10-bit ADC resolution (4.88 mV), Ultrasonic HC-SR04 distance formula (d = T/58 cm), LDR voltage divider, DHT11 40-bit protocol.",
        "where": "Richard Blum; Tero Karvinen",
        "how": "1. Calculate ADC resolution V_ref / 1023.\n2. Memorize distance = (Time * 0.034) / 2.\n3. Explain 40-bit DHT11 single-bus packet."
      }
    ],
    "visualArchitecture": [
      {
        "title": "Hall Effect 3D Slab & Force Balance",
        "ascii": "                       Magnetic Field B (z-axis)\n                                  ^\n                                  |\n           +--------------------------------------+\n          /                                      /|\n         +--------------------------------------+ |\n         |  - - - - - - - - - - - - - - - - - - | |  Thickness t\nCurrent I|   F_e = e\u00b7E_H  (downward)            | |\n =======>|   F_m = e\u00b7v_d\u00b7B (upward)             | +\n         |  + + + + + + + + + + + + + + + + + + |/\n         +--------------------------------------+\n                     Width w\n\n1. Force Balance:     e \u00b7 E_H = e \u00b7 v_d \u00b7 B  ===>  E_H = v_d \u00b7 B\n2. Current Density:   J = n\u00b7e\u00b7v_d = I / (w\u00b7t) ===> v_d = I / (n\u00b7e\u00b7w\u00b7t)\n3. Hall Voltage:      V_H = E_H \u00b7 w = (B \u00b7 I) / (n \u00b7 e \u00b7 t)\n4. Hall Coefficient:  R_H = 1 / (n \u00b7 e)  ===>  V_H = (R_H \u00b7 B \u00b7 I) / t\n5. Carrier Mobility:  \u03bc = \u03c3 \u00b7 R_H"
      },
      {
        "title": "4-Variable K-Map Grouping Architecture",
        "ascii": "                  CD      00          01          11          10\n             AB      +-----------+-----------+-----------+-----------+\n             00      |    m0     |    m1     |    m3     |    m2     |\n                     +-----------+-----------+-----------+-----------+\n             01      |    m4     |    m5     |    m7     |    m6     |\n                     +-----------+-----------+-----------+-----------+\n             11      |    m12    |    m13    |    m15    |    m14    |\n                     +-----------+-----------+-----------+-----------+\n             10      |    m8     |    m9     |    m11    |    m10    |\n                     +-----------+-----------+-----------+-----------+\n\nGrouping Rules: Octet (8 cells -> -3 vars) > Quad (4 cells -> -2 vars)\n                > Pair (2 cells -> -1 var) > Single (1 cell)\nCorner Quad: (m0, m2, m8, m10) -> Product Term: B'D'"
      }
    ],
    "scoringStrategy": {
      "tier1": "Physical Formula & Definition Defense: Write standard physics equations with definitions (V_H = BI / net, NA = \u221a(n1^2 - n2^2)) and state boundary conditions.",
      "tier2": "Labeled 3D Slabs & Gate Schematics: Draw 3D Hall effect slabs showing B, I, and field directions; draw clean gate-level schematics for Adders, MUX, and Flip-Flops.",
      "tier3": "K-Map & Excitation Cross-Checks: Verify K-Map grouping with Don't Cares ('X') and double check Flip-Flop excitation transitions.",
      "tier4": "Numerical Precision & Unit Boxing: Box final numerical solutions with explicit standard SI units (m^3/C, cm, mV, \u03bcs)."
    },
    "textbooks": [
      {
        "title": "Principles of Electronics",
        "authors": "V.K. Mehta & Rohit Mehta",
        "chapters": "Ch 1, 3, 4, 8 (Semiconductors, Diodes, BJTs)"
      },
      {
        "title": "Electronic Devices and Circuit Theory",
        "authors": "Robert L. Boylestad & Louis Nashelsky",
        "chapters": "Ch 1, 3, 5, 13 (Rectifiers, BJT, CMOS)"
      },
      {
        "title": "Digital Fundamentals (11th Ed)",
        "authors": "Thomas L. Floyd",
        "chapters": "Ch 2-8 (K-Maps, Combinational Circuits, Flip-Flops, Shift Registers, Counters)"
      }
    ],
    "units": [
      {
        "unit": "Unit I",
        "title": "Solid State Physics & Band Theory",
        "topics": [
          "Free electron theory & Fermi energy",
          "Fermi-Dirac distribution f(E)",
          "Effective mass m*",
          "Hall effect derivation (V_H = BI/net, R_H = 1/ne)",
          "Solar cell Fill Factor"
        ]
      },
      {
        "unit": "Unit II",
        "title": "Electricity & Electronic Devices",
        "topics": [
          "PN junction diode Shockley equation",
          "Bridge rectifier efficiency (81.2%)",
          "BJT CE mode (\u03b1, \u03b2)",
          "CMOS zero static power",
          "Optical fiber NA = \u221a(n1^2 - n2^2)"
        ]
      },
      {
        "unit": "Unit III",
        "title": "Number Systems & Logic Gates",
        "topics": [
          "2's complement arithmetic & overflow",
          "Binary-to-Gray conversion",
          "Universal NAND/NOR synthesis",
          "4-variable K-Maps with Don't Cares ('X')"
        ]
      },
      {
        "unit": "Unit IV",
        "title": "Combinational Logic Circuits",
        "topics": [
          "Full Adder (2 HAs + OR)",
          "Subtractors",
          "Multiplexers (4:1, 8:1)",
          "3-to-8 Decoders",
          "2-bit Magnitude Comparators"
        ]
      },
      {
        "unit": "Unit V",
        "title": "Sequential Logic Circuits",
        "topics": [
          "Latches vs Flip-Flops",
          "Master-Slave JK race-around fix",
          "Flip-Flop conversions",
          "Shift Registers (SISO/SIPO/PISO/PIPO)",
          "Mod-N asynchronous counters"
        ]
      },
      {
        "unit": "Unit VI",
        "title": "Arduino & Sensors Interfacing",
        "topics": [
          "ATmega328P pinout & 10-bit ADC (4.88 mV)",
          "Ultrasonic HC-SR04 distance (d = T/58 cm)",
          "LDR voltage divider",
          "DHT11 40-bit protocol"
        ]
      }
    ],
    "videos": [
      {
        "unit": "Unit I: Solid State Physics, Energy Bands & Hall Effect",
        "title": "Hall Effect Full Mathematical Derivation & Concept",
        "channel": "Dr. Gajendra Purohit / NPTEL Physics",
        "focus": "Cross-product magnetic Lorentz force $\\vec{F}_m = -e(\\vec{v}_d \\times \\vec{B})$ balancing electric force $e E_H$; establishing $E_H = v_d B$; substituting drift velocity $v_d = \\frac{J}{ne} = \\frac{I}{ne A} = \\frac{I}{ne w t}$; deriving Hall Voltage $V_H = E_H w = \\frac{B I}{n e t}$; defining Hall Coefficient $R_H = \\frac{1}{ne}$; determining majority carrier concentration $n$, carrier sign (n-type vs p-type), and Hall mobility $\\mu = \\sigma R_H$.",
        "url": "https://www.youtube.com/results?search_query=Hall+Effect+Derivation+Engineering+Physics+Dr+Gajendra+Purohit",
        "duration": "35 mins",
        "timeline": "Week 1 \u2022 Hall Effect Proof",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit I: Solid State Physics, Energy Bands & Hall Effect",
        "title": "Fermi Energy, Fermi-Dirac Distribution & Band Theory",
        "channel": "Gate Smashers / Dr. P. Suresh",
        "focus": "Fermi-Dirac function $f(E) = \\frac{1}{1 + e^{(E-E_F)/kT}}$; behavior at $T = 0\\text{ K}$ (step function) vs $T > 0\\text{ K}$; Fermi level location for intrinsic semiconductors ($E_F \\approx \\frac{E_c+E_v}{2}$) and temperature dependence; Direct vs Indirect bandgap semiconductors (photon emission vs phonon scattering in LEDs/solar cells).",
        "url": "https://www.youtube.com/results?search_query=Fermi+Dirac+Distribution+Band+Theory+of+Solids+Gate+Smashers",
        "duration": "28 mins",
        "timeline": "Week 2 \u2022 Fermi Energy",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit I: Solid State Physics, Energy Bands & Hall Effect",
        "title": "Solar Cell Working Principle & $I-V$ Characteristics",
        "channel": "NPTEL IIT Kharagpur / Physics Galaxy",
        "focus": "Three fundamental steps: (1) Electron-hole pair generation via photon absorption ($h\\nu \\ge E_g$), (2) Separation by built-in electric field in the depletion region, (3) Collection at front/back contacts; Open Circuit Voltage ($V_{oc}$), Short Circuit Current ($I_{sc}$), Fill Factor ($FF = \\frac{V_{mp} I_{mp}}{V_{oc} I_{sc}}$), and overall power conversion efficiency $\\eta = \\frac{P_{max}}{P_{in}} = \\frac{V_{oc} I_{sc} FF}{P_{in}}$.",
        "url": "https://www.youtube.com/results?search_query=Solar+Cell+Working+Principle+IV+Characteristics+Engineering+Physics",
        "duration": "22 mins",
        "timeline": "Week 2 \u2022 Solar Cell IV Curve",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit II: Electricity Fundamentals, PN Diodes, BJT, CMOS & Hardware",
        "title": "PN Junction Diode Working, Characteristics & Rectifiers",
        "channel": "All About Electronics",
        "focus": "Barrier potential formation (0.7V for Si, 0.3V for Ge); forward and reverse bias drift/diffusion balance; Shockley equation $I = I_0(e^{V/\\eta V_T}-1)$; Half-wave rectifier ($\\eta = 40.6\\%$, PIV $= V_m$), Full-wave center-tapped ($\\eta = 81.2\\%$, PIV $= 2V_m$), and Full-wave Bridge rectifier ($\\eta = 81.2\\%$, PIV $= V_m$).",
        "url": "https://www.youtube.com/results?search_query=All+About+Electronics+PN+Junction+Diode+Characteristics+Rectifiers",
        "duration": "30 mins",
        "timeline": "Week 3 \u2022 Diode & Rectifiers",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit II: Electricity Fundamentals, PN Diodes, BJT, CMOS & Hardware",
        "title": "BJT Operation, CE Configuration & CMOS Inverter",
        "channel": "Gate Smashers / Neso Academy",
        "focus": "BJT current relations $I_E = I_B + I_C$, $\\alpha = \\frac{I_C}{I_E}$, $\\beta = \\frac{I_C}{I_B}$, $\\beta = \\frac{\\alpha}{1-\\alpha}$; CE input/output characteristics (Cutoff, Active, Saturation); CMOS Inverter: PMOS pull-up connected to $V_{DD}$ and NMOS pull-down connected to GND; why static power dissipation is virtually zero.",
        "url": "https://www.youtube.com/results?search_query=BJT+Working+Principle+CE+Configuration+CMOS+Inverter+Neso+Academy",
        "duration": "32 mins",
        "timeline": "Week 4 \u2022 BJT & CMOS Inverter",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit II: Electricity Fundamentals, PN Diodes, BJT, CMOS & Hardware",
        "title": "Optical Fiber: Numerical Aperture & Acceptance Angle",
        "channel": "Dr. Gajendra Purohit / Engineering Physics",
        "focus": "Total Internal Reflection (TIR) condition ($\\theta > \\theta_c = \\sin^{-1}(n_2/n_1)$); Snell's law at air-core interface; deriving $\\sin\\theta_a = \\sqrt{n_1^2 - n_2^2}$; defining $\\text{NA} = \\sin\\theta_a = n_1 \\sqrt{2\\Delta}$ where $\\Delta = \\frac{n_1 - n_2}{n_1}$; fractional index change.",
        "url": "https://www.youtube.com/results?search_query=Optical+Fiber+Numerical+Aperture+Acceptance+Angle+Derivation",
        "duration": "25 mins",
        "timeline": "Week 5 \u2022 Optical Fiber NA",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit II: Electricity Fundamentals, PN Diodes, BJT, CMOS & Hardware",
        "title": "CPU vs GPU Architecture & AI Accelerator Chips",
        "channel": "Computerphile / ByteByteGo",
        "focus": "CPU: latency-optimized, heavy branch prediction, massive L1/L2/L3 caches, few powerful cores; GPU: throughput-optimized, thousands of ALU cores, SIMT/SIMD execution model; AI Accelerators (TPU/NPU): systolic arrays for $O(1)$ matrix multiplication accumulation without repeated memory bus access.",
        "url": "https://www.youtube.com/results?search_query=CPU+vs+GPU+vs+TPU+Architecture+Explained",
        "duration": "20 mins",
        "timeline": "Week 6 \u2022 CPU/GPU/TPU Chips",
        "priority": "\u26a1 Visual Computer Architecture"
      },
      {
        "unit": "Unit III: Number Systems, Boolean Algebra & K-Maps",
        "title": "Number System Conversions, 2's Complement Arithmetic & Codes",
        "channel": "Neso Academy",
        "focus": "Base-r conversions; 2's complement subtraction: if end-around carry occurs, drop carry and result is positive; if no carry, take 2's complement and result is negative; Binary-to-Gray conversion ($G_i = B_{i+1} \\oplus B_i$); BCD to Excess-3 conversion (+0011).",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Number+Systems+2s+Complement+Arithmetic+Gray+Code",
        "duration": "28 mins",
        "timeline": "Week 7 \u2022 2's Complement Math",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit III: Number Systems, Boolean Algebra & K-Maps",
        "title": "Boolean Algebra Theorems & K-Map Minimization (up to 4 Variables)",
        "channel": "Neso Academy",
        "focus": "Gray code sequencing in K-Maps ($00, 01, 11, 10$); Minterm ($\\Sigma m$) vs Maxterm ($\\Pi M$) grouping; forming largest possible powers-of-two groups (octets $\\to$ quads $\\to$ pairs); rolling map wrap-around rules; optimal inclusion of Don't Care ('X') conditions.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+K+Map+Minimization+4+Variables+Dont+Care",
        "duration": "35 mins",
        "timeline": "Week 8 \u2022 4-Variable K-Maps",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Combinational Logic Circuits (Adders, MUX, Decoders, Comparators)",
        "title": "Half Adder, Full Adder & Subtractor Design",
        "channel": "Neso Academy",
        "focus": "Full Adder truth table; Karnaugh map derivation: $S = A \\oplus B \\oplus C_{in}$, $C_{out} = AB + B C_{in} + A C_{in} = AB + C_{in}(A \\oplus B)$; implementing Full Adder using exactly two 2-input XOR gates, two AND gates, and one OR gate.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Half+Adder+Full+Adder+Subtractor+Logic+Circuit",
        "duration": "30 mins",
        "timeline": "Week 9 \u2022 Half/Full Adders",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit IV: Combinational Logic Circuits (Adders, MUX, Decoders, Comparators)",
        "title": "Multiplexers (MUX 2:1, 4:1, 8:1) & Implementing Boolean Functions",
        "channel": "Neso Academy",
        "focus": "Multiplexer truth tables and selection line equations $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$; implementation of any $n$-variable boolean function using a $2^{n-1}:1$ MUX via input assignment table.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Multiplexer+4+to+1+MUX+Boolean+Function+Implementation",
        "duration": "28 mins",
        "timeline": "Week 10 \u2022 Multiplexers 8:1",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit IV: Combinational Logic Circuits (Adders, MUX, Decoders, Comparators)",
        "title": "Decoders, Priority Encoders & 2-Bit Magnitude Comparators",
        "channel": "Neso Academy",
        "focus": "3-to-8 active-LOW decoder with Enable pin; 8-to-3 Priority Encoder ($V$ valid bit, handling simultaneous active inputs); 2-bit Magnitude Comparator: equations for $A > B$, $A = B$ ($x_1 x_0 = \\overline{A_1 \\oplus B_1} \\cdot \\overline{A_0 \\oplus B_0}$), and $A < B$.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Decoder+3+to+8+Priority+Encoder+Magnitude+Comparator",
        "duration": "30 mins",
        "timeline": "Week 10 \u2022 Decoders & Encoders",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Sequential Logic Circuits (Flip-Flops, Registers & Counters)",
        "title": "SR, JK, D, T Flip-Flops & Master-Slave JK Resolution",
        "channel": "Neso Academy",
        "focus": "Latches vs edge-triggered flip-flops; characteristic and excitation tables; **Race-around condition:** occurs in level-triggered JK flip-flops when $J=1, K=1$ and pulse width $t_p > t_{pd}$; **Master-Slave JK solution:** Master triggers on rising clock edge ($CLK=1$), Slave triggers on falling clock edge ($\\overline{CLK}=1$), isolating output from input during clock pulse.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+SR+JK+D+T+Flip+Flop+Master+Slave+Race+Around",
        "duration": "38 mins",
        "timeline": "Week 11 \u2022 Master-Slave JK",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit V: Sequential Logic Circuits (Flip-Flops, Registers & Counters)",
        "title": "Flip-Flop Conversion Systematic Method",
        "channel": "Neso Academy",
        "focus": "Conversion procedure: (1) Identify Required FF and Available FF, (2) Construct Truth Table of Required FF with excitation entries for Available FF, (3) Draw K-Maps for Available FF inputs, (4) Draw the completed logic circuit.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Flip+Flop+Conversion+Step+by+Step",
        "duration": "32 mins",
        "timeline": "Week 11 \u2022 Flip-Flop Conversion",
        "priority": "\u2b50 High-Yield Core Topic"
      },
      {
        "unit": "Unit V: Sequential Logic Circuits (Flip-Flops, Registers & Counters)",
        "title": "Shift Registers (SISO, SIPO, PISO, PIPO) & Asynchronous Counters",
        "channel": "Neso Academy",
        "focus": "Shift register configurations; Asynchronous 3-bit/4-bit Ripple UP/DOWN counter using T / JK flip-flops in toggle mode; Mod-N Counter: using an active-LOW NAND gate connected to asynchronous $\\overline{CLR}$ inputs to reset at state $N$.",
        "url": "https://www.youtube.com/results?search_query=Neso+Academy+Shift+Registers+SISO+SIPO+Asynchronous+Counter",
        "duration": "35 mins",
        "timeline": "Week 12 \u2022 Shift Registers",
        "priority": "\ud83d\udd25 Mandatory Exam Question"
      },
      {
        "unit": "Unit VI: Arduino Microcontroller Architecture & Sensor Interfacing",
        "title": "Arduino Board Architecture & Pinout Masterclass",
        "channel": "Programming Electronics Academy",
        "focus": "ATmega328P microcontroller internals; 14 digital I/O pins (pins 3, 5, 6, 9, 10, 11 supporting 8-bit PWM via `analogWrite(pin, val)`); 6 analog inputs (A0\u2013A5) with 10-bit Successive Approximation ADC (`analogRead(pin)`); 16 MHz quartz crystal clock; power regulation (5V, 3.3V, VIN).",
        "url": "https://www.youtube.com/results?search_query=Arduino+UNO+Architecture+Pinout+ATmega328P+Explained",
        "duration": "25 mins",
        "timeline": "Week 13 \u2022 Arduino Board Pinout",
        "priority": "\u26a1 Hardware Lab Practical"
      },
      {
        "unit": "Unit VI: Arduino Microcontroller Architecture & Sensor Interfacing",
        "title": "Sensor Interfacing: Ultrasonic HC-SR04, IR, LDR & DHT11",
        "channel": "How To Mechatronics",
        "focus": "",
        "url": "https://www.youtube.com/results?search_query=Arduino+Sensors+Interfacing+HC-SR04+LDR+DHT11+How+To+Mechatronics",
        "duration": "30 mins",
        "timeline": "Week 13 \u2022 Ultrasonic & Sensors",
        "priority": "\u26a1 Hardware Lab Practical"
      }
    ],
    "vivaQuestions": [
      {
        "q": "State the Hall Effect and write the formula for the Hall Coefficient (R_H).",
        "a": "When a current-carrying conductor/semiconductor is placed in a transverse magnetic field, a potential difference (Hall Voltage V_H) is developed across the opposite faces perpendicular to both current and magnetic field. Hall Coefficient R_H = 1 / (n\u00b7e) for electrons, and R_H = +1 / (p\u00b7e) for holes."
      },
      {
        "q": "Explain the Fermi-Dirac Distribution Function and the physical meaning of Fermi Energy (E_F).",
        "a": "f(E) = 1 / [1 + exp((E - E_F) / (k_B\u00b7T))]. It represents the probability that an electron occupies an available quantum energy state E at temperature T. At absolute zero (T = 0 K), all states below E_F are completely filled (probability = 1) and all states above E_F are empty (probability = 0)."
      },
      {
        "q": "What is the difference between Direct Bandgap and Indirect Bandgap semiconductors?",
        "a": "Direct Bandgap (e.g., GaAs, InP): Conduction band minimum and valence band maximum align at the same crystal momentum (k=0). Electron transitions emit photons directly (efficient for LEDs and Lasers). Indirect Bandgap (e.g., Si, Ge): Extrema do not align in k-space, requiring a phonon (lattice vibration) for momentum conservation, dissipating energy as heat."
      },
      {
        "q": "Why are NAND and NOR gates called Universal Logic Gates?",
        "a": "Any fundamental boolean logic gate (AND, OR, NOT) and any complex digital combinational/sequential logic circuit can be synthesized exclusively using only NAND gates or only NOR gates."
      },
      {
        "q": "What is the Race-Around Condition in a JK Flip-Flop and how is it eliminated?",
        "a": "When J = 1, K = 1, and clock pulse duration tp > propagation delay tpd, the output toggles repeatedly and unpredictably during the active clock pulse. Eliminated using: 1) Master-Slave JK Flip-Flop architecture, or 2) Edge-triggered Flip-Flops."
      },
      {
        "q": "What are the 4 fundamental shift register configurations?",
        "a": "1) SISO (Serial-In Serial-Out), 2) SIPO (Serial-In Parallel-Out), 3) PISO (Parallel-In Serial-Out), 4) PIPO (Parallel-In Parallel-Out)."
      },
      {
        "q": "Explain the working principle of an Ultrasonic Distance Sensor (HC-SR04).",
        "a": "The sensor emits an ultrasonic sound burst (40 kHz) via the Trigger pin, which travels through air, reflects off an obstacle, and returns to the Echo pin. Distance is calculated as: Distance = (Echo High Time \u00d7 Speed of Sound 340 m/s) / 2."
      },
      {
        "q": "Compare the power consumption and speed of CMOS vs TTL logic families.",
        "a": "CMOS (Complementary MOSFET) exhibits near-zero static power dissipation, high noise immunity, and wide supply voltage tolerance. TTL (Transistor-Transistor Logic / BJT) draws significant continuous supply current and has lower noise margins."
      },
      {
        "q": "State De Morgan's First and Second Laws in Boolean Algebra.",
        "a": "1) (A \u00b7 B)' = A' + B' (The complement of a product equals the sum of the complements). 2) (A + B)' = A' \u00b7 B' (The complement of a sum equals the product of the complements)."
      },
      {
        "q": "What is Pulse Width Modulation (PWM) on an Arduino board and what are its standard pins?",
        "a": "PWM simulates analog output voltages by rapidly switching a digital output pin between HIGH (5V) and LOW (0V) at varying duty cycles using analogWrite(pin, 0-255). Standard Arduino Uno PWM pins are 3, 5, 6, 9, 10, 11 (marked with ~)."
      }
    ],
    "assets": {
      "dashboard": "subjects/PHY175_Ultimate_Master_Study_Dashboard.html",
      "guideMd": "subjects/PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.md",
      "guidePdf": "subjects/PHY175_Ultimate_Master_Study_Guide_and_Video_Hub.pdf"
    }
  }
];
