# CSE326: Internet & Web Technologies / Full-Stack Client-Side Web Development
## 100-Percentile Comprehensive Master Study Guide, Visual Flowcharts & Resource Dossier
**Author / Lead Student:** Saikat Koner (Black Hat Coders 108)
**Target:** 100/100 Marks | Grade 'O' | 100th Percentile
**Course Code:** CSE326 | L:1 T:0 P:2 Credits:2

---

## 📑 Table of Contents
1. [Gold-Standard Textbooks & Deep Chapter Context](#textbooks)
2. [Curated YouTube Video Channels & Direct Topic Links](#videos)
3. [Unit-by-Unit "What to Study & Where to Study" Matrix](#study-matrix)
4. [Unit I: HTML5 Fundamentals & Client-Server Architecture](#unit-i)
5. [Unit II: Semantic HTML, Accessibility & Advanced Forms](#unit-ii)
6. [Unit III: CSS3 Mastery, Specificity, Box Model, Flexbox & Grid](#unit-iii)
7. [Unit IV: JavaScript Fundamentals, Execution Context & Objects](#unit-iv)
8. [Unit V: Interactive Web, DOM, Events, Regex & Web APIs](#unit-v)
9. [Unit VI: Web App Architecture, Performance & GitHub Pages](#unit-vi)
10. [High-Yield Exam Scoring Blueprint & Practical Experiments](#exam-triggers)

---

<a name="textbooks"></a>
## 📚 1. Gold-Standard Textbooks & Deep-Dive Chapter Context

| Unit | Subject Area | Recommended Standard Textbook | Chapters, Core Main Concepts & Key Exam Takeaways |
| :--- | :--- | :--- | :--- |
| **Unit I & II** | **HTML5 & Semantic Web** | *Mastering HTML, CSS & JavaScript Web Publishing* — **Laura Lemay, Rafe Colburn, Jennifer Kyrnin** (BPB / Sams) | • **Ch 1 & 2 (Client-Server & HTML5 Structure):** HTTP request-response cycle, MIME types, DOCTYPE declarations, head metadata (`<meta charset="utf-8">`, viewport tags), block vs inline elements, nested lists, vector SVG vs raster images, semantic structuring (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).<br>• **Ch 5 & 6 (Forms & Accessibility):** Input controls (`email`, `tel`, `number`, `range`, `date`, `color`), form attributes (`action`, `method="POST/GET"`, `enctype`, `pattern`, `required`), ARIA attributes, semantic tables (`<thead>`, `<tbody>`, `<tfoot>`, `colspan`, `rowspan`). |
| **Unit III** | **CSS3, Layouts & Animations** | *HTML5 Black Book (Covers CSS3, JavaScript, XML, AJAX, jQuery)* — **DT Editorial Services** (Wiley) | • **Ch 7, 8 & 9 (CSS Engine & Selectors):** CSS cascade, Specificity math formula $(a,b,c,d)$, Combinators (` `, `>`, `+`, `~`), Pseudo-classes (`:hover`, `:focus`, `:nth-child()`, `:is()`), Pseudo-elements (`::before`, `::after`).<br>• **Ch 10 & 11 (Box Model, Flexbox & Grid):** Standard vs `border-box` model math, Positioning (`static`, `relative`, `absolute`, `fixed`, `sticky`), 1D Flexbox axis alignments (`justify-content`, `align-items`, `flex-grow`), 2D CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`, `grid-gap`), CSS custom properties (`var(--primary)`), Keyframe animations (`@keyframes`) & transitions. |
| **Unit IV & V** | **JavaScript, DOM & Web APIs** | *Eloquent JavaScript* (3rd/4th Ed) — **Marijn Haverbeke** / *MDN Web Docs* | • **Ch 2, 3 & 4 (JS Core Engine):** Execution Context, Call Stack, Scoping (`var` functional vs `let`/`const` block scope), Hoisting, Closures, Higher-Order functions (`.map()`, `.filter()`, `.reduce()`), Primitive vs Reference types, Object destructuring & Spread operator.<br>• **Ch 14 & 15 (DOM & Event Handling):** DOM Tree representation, DOM selection (`querySelector`, `getElementById`), Event Bubbling vs Capturing, Event Delegation, Regex validation (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`).<br>• **Ch 18 (Browser APIs & Async JS):** `localStorage` vs `sessionStorage` vs Cookies, `fetch()` API with `async/await`, JSON parsing (`JSON.stringify`/`JSON.parse`), Geolocation & Drag-and-Drop API. |
| **Unit VI** | **DevTools, Performance & CI/CD** | *Pro Git* (2nd Ed) — **Scott Chacon** & Chrome DevTools Official Docs | • Chrome DevTools (Console, Elements, Network waterfalls, Lighthouse performance audits), Memory leaks, GitHub Repository management, automated deployment using GitHub Pages (`gh-pages` branch / GitHub Actions workflow). |

---

<a name="videos"></a>
## 📺 2. Curated YouTube Video Channels & Direct Search Links

| Unit / Topic | Recommended Channel | Search Query / Direct Topic Link | Key Focus Area & Exam Takeaways |
| :--- | :--- | :--- | :--- |
| **Unit I & II: HTML5 Semantic & Forms** | **Dave Gray** / **freeCodeCamp** | [Dave Gray HTML Full Course for Beginners](https://www.youtube.com/results?search_query=Dave+Gray+HTML+Full+Course+for+Beginners) | Semantic elements, accessible form controls, input attributes, and SEO. |
| **Unit III: CSS Box Model & Specificity** | **Kevin Powell** | [Kevin Powell CSS Specificity and Box Model](https://www.youtube.com/results?search_query=Kevin+Powell+CSS+Specificity+and+Box+Model) | Specificity calculation $(a,b,c,d)$, `box-sizing: border-box`, margins. |
| **Unit III: Flexbox in 20 Minutes** | **Kevin Powell** / **Fireship** | [Kevin Powell Flexbox CSS Guide](https://www.youtube.com/results?search_query=Kevin+Powell+Flexbox+CSS+Guide) | Main axis vs Cross axis, `justify-content`, `align-items`, responsive navbars. |
| **Unit III: CSS Grid Masterclass** | **Kevin Powell** / **Web Dev Simplified** | [Web Dev Simplified CSS Grid Tutorial](https://www.youtube.com/results?search_query=Web+Dev+Simplified+CSS+Grid+Tutorial) | 2D layouts, `grid-template-columns`, `auto-fit` vs `auto-fill`, `minmax()`. |
| **Unit IV: JS Fundamentals & Scope** | **Namaste JavaScript (Akshay Saini)** | [Namaste JavaScript Akshay Saini Season 1](https://www.youtube.com/results?search_query=Namaste+JavaScript+Akshay+Saini+Season+1) | Execution context, call stack, hoisting, closures, lexical scope. |
| **Unit IV: Higher Order Functions** | **Akshay Saini** / **Traversy Media** | [Akshay Saini map filter reduce](https://www.youtube.com/results?search_query=Akshay+Saini+map+filter+reduce+JavaScript) | Deep-dive into `.map()`, `.filter()`, and `.reduce()` with array transformations. |
| **Unit V: DOM Manipulation & Events** | **Traversy Media** / **Dave Gray** | [Traversy Media JavaScript DOM Crash Course](https://www.youtube.com/results?search_query=Traversy+Media+JavaScript+DOM+Crash+Course) | `querySelector`, `addEventListener`, Event Bubbling, Delegation. |
| **Unit V: Fetch API, Async/Await & JSON** | **Web Dev Simplified** / **Fireship** | [Web Dev Simplified Fetch API JavaScript](https://www.youtube.com/results?search_query=Web+Dev+Simplified+Fetch+API+JavaScript) | `fetch()`, Promises, `async/await`, HTTP GET/POST, JSON parsing. |
| **Unit V: Web Storage API (LocalStorage)** | **dcode** / **Web Dev Simplified** | [Web Dev Simplified LocalStorage and SessionStorage](https://www.youtube.com/results?search_query=Web+Dev+Simplified+LocalStorage+and+SessionStorage) | `localStorage.setItem()`, `getItem()`, `clear()`, `JSON.stringify()`. |
| **Unit VI: GitHub Pages Deployment** | **Kevin Powell** / **Traversy Media** | [Deploy Website to GitHub Pages Traversy Media](https://www.youtube.com/results?search_query=Deploy+Website+to+GitHub+Pages+Traversy+Media) | Git repository init, commit, branch, and live GitHub Pages hosting. |

---

<a name="unit-i"></a>
## 🌐 UNIT I: HTML5 Fundamentals & Client-Server Architecture

### 1.1 Client-Server HTTP Request-Response & Browser Rendering Pipeline
```
[ CLIENT (Web Browser) ]                                              [ SERVER (Web Host / CDN) ]
       │                                                                           │
       │ 1. DNS Lookup (Resolves example.com -> 192.0.2.1)                         │
       ├──────────────────────────────────────────────────────────────────────────►│
       │                                                                           │
       │ 2. TCP 3-Way Handshake (SYN -> SYN-ACK -> ACK) + TLS Handshake            │
       ├──────────────────────────────────────────────────────────────────────────►│
       │                                                                           │
       │ 3. HTTP GET Request (Headers, Cookies, User-Agent)                        │
       ├──────────────────────────────────────────────────────────────────────────►│
       │                                                                           │
       │ 4. HTTP 200 OK Response (HTML Stream with Content-Type: text/html)        │
       │◄──────────────────────────────────────────────────────────────────────────┤
       │                                                                           │
       ▼
[ CRITICAL RENDERING PATH (Inside Browser Engine) ]
HTML Parsing ──► DOM Tree (Document Object Model)
                      │
                      ├────────► RENDER TREE ──► LAYOUT (Reflow) ──► PAINT (Rasterize)
                      │          (Computes exact  (Calculates x,y   (Draws pixels on
CSS Parsing  ──► CSSOM Tree      geometry/styles) dimensions)        screen)
```

---

### 1.2 Essential HTML5 Document Skeleton & Meta Tags
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding for worldwide UTF-8 symbols -->
    <meta charset="UTF-8">
    <!-- Responsive Viewport tag: essential for mobile scaling -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CSE326 Full-Stack Master Web Application">
    <title>CSE326: Master Web Application</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header><h1>Welcome to Modern Web Development</h1></header>
    <main>...</main>
    <script src="app.js" defer></script>
</body>
</html>
```

---

<a name="unit-ii"></a>
## 📝 UNIT II: Semantic HTML, Accessibility & Advanced Forms

### 2.1 Modern Semantic HTML5 Page Architecture
```
+-----------------------------------------------------------------------------------+
| <header> (Site branding, Logo, Main Title)                                       |
|  <nav> (Global Navigation Links: Home | Projects | Documentation | Contact)      |
+-----------------------------------------------------------------------------------+
| <main> (Primary unique page content)                                              |
|  +-----------------------------------------------------+  +--------------------+  |
|  | <section> (Thematic grouping of related content)   |  | <aside>            |  |
|  |  +-----------------------------------------------+  |  | (Sidebar, Related  |  |
|  |  | <article> (Self-contained, reusable entity:   |  |  |  links, Ads, Author|  |
|  |  |  Blog post, Product card, Comment item)       |  |  |  bio)              |  |
|  |  +-----------------------------------------------+  |  |                    |  |
|  +-----------------------------------------------------+  +--------------------+  |
+-----------------------------------------------------------------------------------+
| <footer> (Copyright, Legal notices, Privacy policy, Social links)                |
+-----------------------------------------------------------------------------------+
```

---

### 2.2 Advanced HTML5 Form with Strict Native Regex Validation
```html
<form action="/api/register" method="POST" class="registration-form" novalidate>
    <!-- Text input with min/max length -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required minlength="3" maxlength="20" placeholder="e.g. saikat108">

    <!-- Email input with strict regex pattern -->
    <label for="email">Institutional Email:</label>
    <input type="email" id="email" name="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">

    <!-- Password with complexity requirement -->
    <label for="password">Password (Min 8 chars, 1 number, 1 special):</label>
    <input type="password" id="password" name="password" required minlength="8">

    <!-- Numeric Range & Number Inputs -->
    <label for="experience">Years of Experience (0-50):</label>
    <input type="number" id="experience" name="experience" min="0" max="50" value="1">

    <button type="submit">Complete Registration</button>
</form>
```

---

<a name="unit-iii"></a>
## 🎨 UNIT III: CSS3 Mastery, Specificity, Box Model, Flexbox & Grid

### 3.1 CSS Specificity Calculation Formula: $(a, b, c, d)$
When conflicting CSS rules target the same element, the browser calculates specificity as a 4-part tuple $(a, b, c, d)$:

```
                                  SPECIFICITY TIER PYRAMID
                                             ▲
                                            / \  a: Inline Styles (style="...") [Weight: 1000]
                                           /───\ b: ID Selectors (#header) [Weight: 100]
                                          /─────\ c: Classes (.btn), Attribute ([type="text"]),
                                         /       \   Pseudo-classes (:hover, :focus) [Weight: 10]
                                        /─────────\ d: Element tags (h1, div), Pseudo-elements
                                       /           \   (::before, ::after) [Weight: 1]
```

#### Specificity Calculation Examples:
* `p` $\rightarrow (0, 0, 0, 1)$ [Score: 1]
* `.nav .nav-item` $\rightarrow (0, 0, 2, 0)$ [Score: 20]
* `#header .menu-link:hover` $\rightarrow (0, 1, 2, 0)$ [Score: 120]
* `<div style="color:red">` $\rightarrow (1, 0, 0, 0)$ [Score: 1000]
* `!important` overrides ALL cascade calculations (use sparingly for utilities).

---

### 3.2 CSS Box Model: Standard vs `box-sizing: border-box`
```
+---------------------------------------------------------------+
| MARGIN (Transparent space outside the border)                 |
|  +---------------------------------------------------------+  |
|  | BORDER (Visible boundary around padding and content)    |  |
|  |  +---------------------------------------------------+  |  |
|  |  | PADDING (Space between content and border)        |  |  |
|  |  |  +---------------------------------------------+  |  |  |
|  |  |  | CONTENT (Actual text, image, or child video)|  |  |  |
|  |  |  | Width x Height                              |  |  |  |
|  |  |  +---------------------------------------------+  |  |  |
|  |  +---------------------------------------------------+  |  |
|  +---------------------------------------------------------+  |
+---------------------------------------------------------------+

• content-box (Default): Total Rendered Width = width + padding_left + padding_right + border_left + border_right
• border-box (Universal Best Practice): Total Rendered Width = width (padding and border are absorbed inside!)
```

```css
/* Universal Box-Sizing Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

---

### 3.3 1D Flexbox vs 2D CSS Grid Layout Architecture
```
FLEXBOX: ONE-DIMENSIONAL (Row OR Column Axis)
         Main Axis (justify-content: flex-start | center | space-between | space-around)
  ────────────────────────────────────────────────────────────────────────►
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
  ┌───────────────┐        ┌───────────────┐        ┌───────────────┐   ▲
│ │ Flex Item 1   │        │ Flex Item 2   │        │ Flex Item 3   │   │ Cross Axis
  └───────────────┘        └───────────────┘        └───────────────┘   │ (align-items:
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   ▼  center | stretch)

CSS GRID: TWO-DIMENSIONAL (Rows AND Columns Simultaneously)
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
│ Grid Cell (Row 1, Col 1)│ Grid Cell (Row 1, Col 2)│ Grid Cell (Row 1, Col 3)│
├─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Grid Cell (Row 2, Col 1)│ Grid Cell (Row 2, Col 2)│ Grid Cell (Row 2, Col 3)│
└─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

<a name="unit-iv"></a>
## ⚙️ UNIT IV: JavaScript Fundamentals, Execution Context & Objects

### 4.1 JavaScript Engine Execution Context & Call Stack
JavaScript is a **single-threaded, synchronous language** that achieves asynchronous non-blocking I/O via the **Event Loop**.

```
                           JAVASCRIPT EXECUTION CONTEXT
                                        │
         ┌──────────────────────────────┴──────────────────────────────┐
         ▼                                                             ▼
[ 1. VARIABLE ENVIRONMENT (Memory Phase) ]            [ 2. THREAD OF EXECUTION (Code Phase) ]
• Allocates memory for variables & functions           • Executes code line-by-line synchronously
• Hoisting: var -> undefined; let/const -> TDZ        • Evaluates expressions, assigns values
• Functions -> Copied entirely into memory            • Pushes/Pops Execution Contexts on Call Stack
```

---

### 4.2 `var` vs `let` vs `const` Comparison
| Feature | `var` (ES5 Legacy) | `let` (ES6 Standard) | `const` (ES6 Standard) |
| :--- | :--- | :--- | :--- |
| **Scope** | Function / Global Scope | **Block Scope** `{ ... }` | **Block Scope** `{ ... }` |
| **Hoisting** | Hoisted, initialized to `undefined` | Hoisted, placed in **Temporal Dead Zone (TDZ)** | Hoisted, placed in **TDZ** |
| **Re-declaration** | Allowed in same scope | ❌ Syntax Error | ❌ Syntax Error |
| **Re-assignment** | Allowed | Allowed | ❌ TypeError (Immutable binding) |

---

### 4.3 Higher-Order Functions: `.map()`, `.filter()`, `.reduce()`
```javascript
const students = [
    { name: "Saikat", score: 98, active: true },
    { name: "Aman", score: 72, active: false },
    { name: "Rahul", score: 88, active: true }
];

// 1. FILTER: Returns subset matching predicate
const activeStudents = students.filter(s => s.active);

// 2. MAP: Transforms elements into new array
const honorRoll = activeStudents.map(s => `${s.name} (Grade: ${s.score})`);

// 3. REDUCE: Accumulates array into a single value
const totalScore = students.reduce((acc, curr) => acc + curr.score, 0);
const avgScore = totalScore / students.length;
```

---

<a name="unit-v"></a>
## ⚡ UNIT V: Interactive Web, DOM, Events, Regex & Web APIs

### 5.1 DOM Event Propagation: Capturing vs Bubbling & Delegation
```
                               DOCUMENT ROOT
                                     │
                 1. CAPTURING PHASE  │  3. BUBBLING PHASE (Default in addEventListener)
                 (Top-down dispatch) │  (Bottom-up propagation)
                                     ▼  ▲
                                  <BODY>
                                     │  │
                                     ▼  ▲
                                  <DIV>
                                     │  │
                                     ▼  ▲
                             [ BUTTON (TARGET) ]
                          2. TARGET PHASE (Event fires)
```

#### High-Performance Event Delegation Pattern:
```javascript
// Attach SINGLE listener to parent container instead of 1,000 child buttons
document.querySelector("#item-list").addEventListener("click", function(event) {
    if (event.target.matches(".delete-btn")) {
        const itemId = event.target.dataset.id;
        deleteItem(itemId);
    }
});
```

---

### 5.2 Browser Storage Comparison Matrix
| Storage Mechanism | Capacity | Expiration | Data Sent to Server? | Primary Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **`localStorage`** | $\approx 5\text{MB}$ | **Never** (Persists across restarts) | No | Dark mode theme, cached offline data |
| **`sessionStorage`** | $\approx 5\text{MB}$ | **On Tab Close** | No | Single-session multi-step wizard |
| **Cookies** | $\approx 4\text{KB}$ | Configurable (`Expires`/`Max-Age`) | **Yes** (Every HTTP Request) | Auth tokens, Session IDs (`HttpOnly`) |

---

### 5.3 Fetch API with Robust `async/await` & Error Handling
```javascript
async function fetchUserDashboard(userId) {
    const statusDiv = document.querySelector("#status");
    try {
        statusDiv.textContent = "Loading data...";
        const response = await fetch(`https://api.example.com/users/${userId}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        renderUserInterface(data);
        statusDiv.textContent = "Data loaded successfully!";
    } catch (error) {
        console.error("Network / API Error:", error);
        statusDiv.textContent = `Failed to fetch data: ${error.message}`;
    }
}
```

---

<a name="unit-vi"></a>
## 🚀 UNIT VI: Web App Architecture, Performance & GitHub Pages

### 6.1 GitHub Pages CI/CD Automated Deployment Flowchart
```
[ LOCAL DEVELOPMENT WORKSPACE ]
Edit HTML5 / CSS3 / JavaScript files
             │
             │ 1. git add . && git commit -m "feat: Complete interactive web app"
             ▼
[ LOCAL GIT REPOSITORY ]
Local committed SHA-1 DAG history
             │
             │ 2. git push origin main
             ▼
[ GITHUB CLOUD REPOSITORY (Remote) ]
Triggers GitHub Pages Build Engine (Jekyll / Static Container)
             │
             │ 3. Automated Static Assets Compilation
             ▼
[ GLOBAL CDN EDGE / GITHUB PAGES ]
Live accessible HTTPS URL: https://username.github.io/repository-name/
```

---

<a name="exam-triggers"></a>
## ⚡ 10. High-Yield Exam Questions & Guaranteed Scoring Blueprint

### The 4-Tier 100-Percentile Answer Presentation Formula:
```
+--------------------------------------------------------------------+
| 1. FORMAL DEFINITION (1-2 crisp lines with key technical terms)    |
| 2. LABELED ARCHITECTURAL DIAGRAM / DOM TREE (Neat boxed ASCII)     |
| 3. COMPARATIVE TABLE / SYNTAX BREAKDOWN (Bold keywords)            |
| 4. PRODUCTION-READY CODE SNIPPET (Demonstrates practical mastery)  |
+--------------------------------------------------------------------+
```

### Guaranteed Top 10 Exam Questions & Scoring Triggers:
1. **Explain the CSS Box Model and calculate total rendered width for both `content-box` and `border-box`.**
2. **Detail CSS Specificity calculation formula $(a,b,c,d)$ with 3 comparative selector examples.**
3. **Compare Flexbox and CSS Grid layouts with axis diagrams and appropriate use cases.**
4. **Explain JavaScript Execution Context, Hoisting, and the Temporal Dead Zone (TDZ).**
5. **Describe DOM Event Propagation (Capturing, Target, Bubbling) and demonstrate Event Delegation.**
6. **Compare `var`, `let`, and `const` in terms of scope, hoisting, and re-declaration.**
7. **Write an asynchronous Fetch API function with `async/await`, HTTP status checks, and `try/catch`.**
8. **Compare `localStorage`, `sessionStorage`, and Cookies with a structured comparison matrix.**
9. **Build a fully accessible HTML5 Registration Form with native regular expression pattern validation.**
10. **Explain the step-by-step workflow of deploying a static website to GitHub Pages via Git CLI.**

---
*Generated and Compiled for Saikat Koner (Black Hat Coders 108). All Rights Reserved.*
