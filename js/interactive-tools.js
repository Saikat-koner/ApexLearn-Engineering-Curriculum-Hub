/**
 * ApexLearn: Engineering Student Interactive Tools Suite
 * Seamlessly powering:
 * 1. 3D Viva Voce Flashcards & Quiz Simulator
 * 2. Pomodoro Focus Timer with Web Audio Chimes
 * 3. SGPA / CGPA Target Calculator
 * 4. Master Formula & Invariant Bank with Real-Time Search
 * 5. Syllabus Topic Checklist with LocalStorage Mastery Tracking
 * 6. Study Scratchpad Notes with Auto-Save & .txt Export
 * 7. In-Portal Markdown Dossier Reader
 */

// ==============================================================================
// ==============================================================================
// 1. 3D VIVA VOCE FLASHCARD MASTERY QUIZ ENGINE (ROBUST STATE TRACKING)
// ==============================================================================
let flashcardList = [];
let currentCardIndex = 0;
let masteredCardIndices = new Set();
let missedCardIndices = new Set();
let activeDeckSubId = 'all';

function populateFlashcardSubjects() {
  const sel = document.getElementById('fcSubjectSelect');
  if (!sel || !allSubjects) return;

  sel.innerHTML = '<option value="all">🌟 All Subjects Mixed</option>';
  allSubjects.forEach(sub => {
    const opt = document.createElement('option');
    opt.value = sub.id;
    opt.textContent = `${sub.code} - ${sub.title}`;
    sel.appendChild(opt);
  });
}

function loadFlashcardsForSubject(subId) {
  activeDeckSubId = subId;
  flashcardList = [];
  masteredCardIndices.clear();
  missedCardIndices.clear();

  const subs = subId === 'all' ? allSubjects : allSubjects.filter(s => s.id === subId);

  subs.forEach(sub => {
    if (sub.vivaQuestions && sub.vivaQuestions.length > 0) {
      sub.vivaQuestions.forEach((vq, idx) => {
        flashcardList.push({
          id: `${sub.code}_${idx}`,
          subjectCode: sub.code,
          subjectTitle: sub.title,
          themeColor: sub.themeColor || '#0ea5e9',
          question: vq.q,
          answer: vq.a
        });
      });
    }
  });

  if (flashcardList.length === 0) {
    flashcardList = [
      {
        id: "gen_1",
        subjectCode: "GENERAL",
        subjectTitle: "Engineering Fundamentals",
        themeColor: "#0ea5e9",
        question: "How do you achieve a Grade 'O' in university engineering courses?",
        answer: "Master the 4-Tier Strategy: State definitions, draw visual flowcharts, tabulate invariant comparisons, and box all numerical/code answers."
      }
    ];
  }

  currentCardIndex = 0;
  showCardActiveView();
  renderCurrentFlashcard();
}

function showCardActiveView() {
  const activeArea = document.getElementById('fcCardActiveArea');
  const completionView = document.getElementById('fcCompletionView');
  if (activeArea) activeArea.style.display = 'block';
  if (completionView) completionView.style.display = 'none';
}

function showDeckCompletionView() {
  const activeArea = document.getElementById('fcCardActiveArea');
  const completionView = document.getElementById('fcCompletionView');
  if (activeArea) activeArea.style.display = 'none';
  if (completionView) completionView.style.display = 'block';

  const finalMastered = document.getElementById('fcFinalMastered');
  const finalMissed = document.getElementById('fcFinalMissed');
  const finalScore = document.getElementById('fcFinalScore');
  const reviewMissedBtn = document.getElementById('fcReviewMissedBtn');

  const masteredCount = masteredCardIndices.size;
  const missedCount = missedCardIndices.size;
  const score = masteredCount * 10;

  if (finalMastered) finalMastered.textContent = `${masteredCount} / ${flashcardList.length}`;
  if (finalMissed) finalMissed.textContent = `${missedCount}`;
  if (finalScore) finalScore.textContent = `${score} pts`;

  if (reviewMissedBtn) {
    if (missedCount > 0) {
      reviewMissedBtn.style.display = 'inline-flex';
      reviewMissedBtn.textContent = `🔁 Practice Missed Cards (${missedCount})`;
    } else {
      reviewMissedBtn.style.display = 'none';
    }
  }
}

function renderCurrentFlashcard() {
  const inner = document.getElementById('flashcardInner');
  const tag = document.getElementById('fcSubjectTag');
  const qText = document.getElementById('fcQuestionText');
  const aText = document.getElementById('fcAnswerText');
  const progressText = document.getElementById('fcProgressText');
  const countIndicator = document.getElementById('fcCardCountIndicator');
  const scoreDisplay = document.getElementById('fcScoreDisplay');
  const progressBar = document.getElementById('fcProgressBar');
  const statusBadge = document.getElementById('fcCardStatusBadge');

  if (!inner || flashcardList.length === 0) return;

  // Unflip card
  inner.classList.remove('flipped');
  const card = flashcardList[currentCardIndex];

  if (tag) {
    tag.textContent = `${card.subjectCode}: ${card.subjectTitle}`;
    tag.style.color = card.themeColor;
    tag.style.borderColor = card.themeColor;
  }
  if (qText) qText.textContent = card.question;
  if (aText) aText.textContent = card.answer;

  const total = flashcardList.length;
  const currentNum = currentCardIndex + 1;
  const answeredCount = masteredCardIndices.size + missedCardIndices.size;
  const progressPercent = Math.min(100, Math.round((currentNum / total) * 100));

  if (progressText) progressText.textContent = `Card ${currentNum} of ${total}`;
  if (countIndicator) countIndicator.textContent = `Card ${currentNum} / ${total}`;
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  const totalScore = masteredCardIndices.size * 10;
  if (scoreDisplay) scoreDisplay.textContent = `${totalScore} pts (${masteredCardIndices.size}/${total} Mastered)`;

  // Update card status badge
  if (statusBadge) {
    if (masteredCardIndices.has(currentCardIndex)) {
      statusBadge.textContent = '✅ Mastered (+10)';
      statusBadge.className = 'fc-status-pill mastered';
    } else if (missedCardIndices.has(currentCardIndex)) {
      statusBadge.textContent = '❌ Needs Review';
      statusBadge.className = 'fc-status-pill missed';
    } else {
      statusBadge.textContent = '❓ Unanswered';
      statusBadge.className = 'fc-status-pill';
    }
  }
}

function flipFlashcard() {
  const inner = document.getElementById('flashcardInner');
  if (inner) inner.classList.toggle('flipped');
}

function rateCurrentCard(isMastered) {
  if (isMastered) {
    masteredCardIndices.add(currentCardIndex);
    missedCardIndices.delete(currentCardIndex);
  } else {
    missedCardIndices.add(currentCardIndex);
    masteredCardIndices.delete(currentCardIndex);
  }

  // If there are more cards, advance to next
  if (currentCardIndex < flashcardList.length - 1) {
    currentCardIndex++;
    renderCurrentFlashcard();
  } else {
    // Deck complete!
    renderCurrentFlashcard();
    setTimeout(() => {
      showDeckCompletionView();
    }, 400);
  }
}

function nextFlashcard() {
  if (currentCardIndex < flashcardList.length - 1) {
    currentCardIndex++;
    renderCurrentFlashcard();
  } else {
    // Prompt completion view if at end
    showDeckCompletionView();
  }
}

function prevFlashcard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    renderCurrentFlashcard();
  }
}

function restartCurrentDeck() {
  masteredCardIndices.clear();
  missedCardIndices.clear();
  currentCardIndex = 0;
  showCardActiveView();
  renderCurrentFlashcard();
}

function practiceMissedCards() {
  const missedList = [];
  missedCardIndices.forEach(idx => {
    if (flashcardList[idx]) missedList.push(flashcardList[idx]);
  });

  if (missedList.length > 0) {
    flashcardList = missedList;
    masteredCardIndices.clear();
    missedCardIndices.clear();
    currentCardIndex = 0;
    showCardActiveView();
    renderCurrentFlashcard();
  }
}

function shuffleFlashcards() {
  flashcardList.sort(() => Math.random() - 0.5);
  masteredCardIndices.clear();
  missedCardIndices.clear();
  currentCardIndex = 0;
  showCardActiveView();
  renderCurrentFlashcard();
}

function openFlashcardModal() {
  populateFlashcardSubjects();
  loadFlashcardsForSubject('all');
  document.getElementById('flashcardModal').classList.add('active');
}

function closeFlashcardModal() {
  document.getElementById('flashcardModal').classList.remove('active');
}


// ==============================================================================
// 2. POMODORO STUDY TIMER & WEB AUDIO CHIME
// ==============================================================================
let pomoTimerInterval = null;
let pomoSeconds = 25 * 60;
let pomoMode = 'work'; // 'work', 'shortBreak', 'longBreak'
let isPomoRunning = false;

function updatePomoDisplay() {
  const mins = Math.floor(pomoSeconds / 60).toString().padStart(2, '0');
  const secs = (pomoSeconds % 60).toString().padStart(2, '0');
  const display = document.getElementById('pomoTimeDisplay');
  if (display) display.textContent = `${mins}:${secs}`;
}

function togglePomoTimer() {
  const btn = document.getElementById('pomoStartBtn');
  if (isPomoRunning) {
    clearInterval(pomoTimerInterval);
    isPomoRunning = false;
    if (btn) btn.innerHTML = '▶ Start';
  } else {
    isPomoRunning = true;
    if (btn) btn.innerHTML = '⏸ Pause';
    pomoTimerInterval = setInterval(() => {
      if (pomoSeconds > 0) {
        pomoSeconds--;
        updatePomoDisplay();
      } else {
        clearInterval(pomoTimerInterval);
        isPomoRunning = false;
        playPomoChime();
        if (pomoMode === 'work') {
          alert('🎉 Excellent Study Sprint Completed! Take a 5-minute break.');
          setPomoMode('shortBreak');
        } else {
          alert('🔔 Break is over! Let\'s resume your 100-percentile focus.');
          setPomoMode('work');
        }
      }
    }, 1000);
  }
}

function resetPomoTimer() {
  clearInterval(pomoTimerInterval);
  isPomoRunning = false;
  const btn = document.getElementById('pomoStartBtn');
  if (btn) btn.innerHTML = '▶ Start';
  setPomoMode(pomoMode);
}

function setPomoMode(mode) {
  pomoMode = mode;
  clearInterval(pomoTimerInterval);
  isPomoRunning = false;

  const btn = document.getElementById('pomoStartBtn');
  if (btn) btn.innerHTML = '▶ Start';

  document.querySelectorAll('.pomo-mode-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.pomo-mode-btn[onclick*="${mode}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const status = document.getElementById('pomoStatusText');
  if (mode === 'work') {
    pomoSeconds = 25 * 60;
    if (status) status.textContent = 'Deep Focus Study Sprint (25m)';
  } else if (mode === 'shortBreak') {
    pomoSeconds = 5 * 60;
    if (status) status.textContent = 'Rest & Recharge Break (5m)';
  } else if (mode === 'longBreak') {
    pomoSeconds = 15 * 60;
    if (status) status.textContent = 'Extended Relaxation Break (15m)';
  }

  updatePomoDisplay();
}

function playPomoChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5

    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.2);
  } catch (e) {
    console.log('Audio chime not supported');
  }
}

function openPomodoroModal() {
  updatePomoDisplay();
  document.getElementById('pomodoroModal').classList.add('active');
}

function closePomodoroModal() {
  document.getElementById('pomodoroModal').classList.remove('active');
}

// ==============================================================================
// 3. SGPA / CGPA TARGET CALCULATOR
// ==============================================================================
const GPA_SCALE = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'D': 4,
  'F': 0
};

function openGpaModal() {
  const container = document.getElementById('gpaCoursesList');
  if (!container) return;
  container.innerHTML = '';

  allSubjects.forEach(sub => {
    const row = document.createElement('div');
    row.style.display = 'grid';
    row.style.gridTemplateColumns = '2fr 1fr 1.5fr';
    row.style.gap = '1rem';
    row.style.alignItems = 'center';
    row.style.marginBottom = '0.65rem';
    row.style.padding = '0.65rem 0.85rem';
    row.style.background = 'var(--bg-card)';
    row.style.borderRadius = 'var(--radius-sm)';
    row.style.border = '1px solid var(--border)';

    row.innerHTML = `
      <div>
        <strong style="color: var(--text-bright);">${sub.code}</strong>
        <div style="font-size: 0.75rem; color: var(--text-muted);">${sub.title}</div>
      </div>
      <div>
        <span class="badge-pill">${sub.credits || 4} Credits</span>
      </div>
      <div>
        <select class="form-control gpa-grade-select" data-credits="${sub.credits || 4}" onchange="calculateGpa()">
          <option value="O" selected>Grade O (10.0)</option>
          <option value="A+">Grade A+ (9.0)</option>
          <option value="A">Grade A (8.0)</option>
          <option value="B+">Grade B+ (7.0)</option>
          <option value="B">Grade B (6.0)</option>
          <option value="C">Grade C (5.0)</option>
          <option value="D">Grade D (4.0)</option>
          <option value="F">Grade F (0.0)</option>
        </select>
      </div>
    `;
    container.appendChild(row);
  });

  calculateGpa();
  document.getElementById('gpaModal').classList.add('active');
}

function closeGpaModal() {
  document.getElementById('gpaModal').classList.remove('active');
}

function calculateGpa() {
  const selects = document.querySelectorAll('.gpa-grade-select');
  let totalCredits = 0;
  let totalWeightedPoints = 0;

  selects.forEach(sel => {
    const credits = parseFloat(sel.getAttribute('data-credits')) || 4;
    const grade = sel.value;
    const points = GPA_SCALE[grade] !== undefined ? GPA_SCALE[grade] : 10;

    totalCredits += credits;
    totalWeightedPoints += credits * points;
  });

  const sgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '10.00';
  const gpaDisplay = document.getElementById('calculatedGpaDisplay');
  if (gpaDisplay) gpaDisplay.textContent = sgpa;

  let honorsText = "Grade 'O' (Outstanding 100-Percentile)";
  if (sgpa < 7.0) honorsText = "Needs Revision Focus";
  else if (sgpa < 8.5) honorsText = "Grade 'A' (First Class Standing)";
  else if (sgpa < 9.5) honorsText = "Grade 'A+' (Distinction Merit)";

  const honorsEl = document.getElementById('gpaHonorsText');
  if (honorsEl) honorsEl.textContent = honorsText;
}

// ==============================================================================
// 4. MASTER FORMULA & INVARIANT BANK
// ==============================================================================
const MASTER_FORMULAS = [
  {
    subject: "MTH165",
    topic: "Matrix Consistency (Rouché-Capelli)",
    formula: "rank(A) == rank([A|B]) ===> Consistent (Unique if rank = n; Infinite if rank < n). Inconsistent if rank(A) != rank([A|B])."
  },
  {
    subject: "MTH165",
    topic: "Eigenvalue Invariants",
    formula: "1) Σ λ_i = Trace(A) = Σ a_ii\n2) Π λ_i = Det(A) = |A|"
  },
  {
    subject: "MTH165",
    topic: "Leibniz's n-th Derivative Formula",
    formula: "(u·v)_n = Σ C(n, r) · u_(n-r) · v_r"
  },
  {
    subject: "MTH165",
    topic: "Two-Variable Extrema (rt - s²)",
    formula: "Δ = r·t - s²  where r = f_xx, s = f_xy, t = f_yy.\nΔ > 0 and r > 0 -> Min; Δ > 0 and r < 0 -> Max; Δ < 0 -> Saddle Point."
  },
  {
    subject: "MTH165",
    topic: "Wallis & Gamma Reduction Integral",
    formula: "∫[0 to π/2] sin^m(x) cos^n(x) dx = [ Γ((m+1)/2) · Γ((n+1)/2) ] / [ 2 · Γ((m+n+2)/2) ]"
  },
  {
    subject: "PHY175",
    topic: "Hall Effect Derivation",
    formula: "V_H = (B · I) / (n · e · t) | Hall Coefficient R_H = 1 / (n·e) | Carrier Mobility μ = σ · R_H"
  },
  {
    subject: "PHY175",
    topic: "Optical Fiber Numerical Aperture",
    formula: "NA = √(n1² - n2²) = n1 · √(2Δ) | Acceptance Angle θ_a = sin⁻¹(NA)"
  },
  {
    subject: "PHY175",
    topic: "Ultrasonic Distance (HC-SR04)",
    formula: "Distance (cm) = (Echo Time (μs) × 0.034 cm/μs) / 2 = (Time in μs) / 58"
  },
  {
    subject: "ECE120",
    topic: "Bridge Rectifier Invariants",
    formula: "Efficiency η = 81.2% | Ripple Factor γ = 0.482 | PIV = V_m (Peak secondary voltage)"
  },
  {
    subject: "ECE120",
    topic: "Full Adder Boolean Logic",
    formula: "Sum = A ⊕ B ⊕ C_in\nCarry_Out = A·B + C_in·(A ⊕ B)"
  },
  {
    subject: "INT108",
    topic: "CPython Scope Hierarchy (LEGB)",
    formula: "Local (L) ──► Enclosing (E) ──► Global (G) ──► Built-in (B)"
  },
  {
    subject: "CSE326",
    topic: "CSS Specificity Tuple",
    formula: "Specificity = (Inline, ID, Class/Attribute/Pseudo-class, Element/Pseudo-element) ===> (a, b, c, d)"
  },
  {
    subject: "CSE111",
    topic: "Linux chmod Octal Bitmask",
    formula: "Read = 4, Write = 2, Execute = 1.\nchmod 755 ===> User(rwx: 7), Group(r-x: 5), Others(r-x: 5)"
  },
  {
    subject: "CHE110",
    topic: "10% Lindeman's Trophic Energy Transfer",
    formula: "Trophic Efficiency = (Energy at Level N+1 / Energy at Level N) × 100 ≈ 10% (90% lost as metabolic heat)"
  }
];

function populateFormulaBank() {
  filterFormulas('');
}

function filterFormulas(query) {
  const container = document.getElementById('formulasList');
  if (!container) return;
  container.innerHTML = '';

  const q = query.toLowerCase().trim();
  const filtered = MASTER_FORMULAS.filter(f =>
    !q || f.subject.toLowerCase().includes(q) || f.topic.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No matching formulas found.</p>';
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.style.background = 'var(--bg-card)';
    card.style.border = '1px solid var(--border)';
    card.style.borderRadius = 'var(--radius-sm)';
    card.style.padding = '0.85rem 1rem';

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span class="badge-pill">${item.subject}</span>
        <strong style="color: var(--text-bright); font-size: 0.95rem;">${item.topic}</strong>
      </div>
      <div class="ascii-box" style="margin: 0.25rem 0 0; padding: 0.75rem 1rem; font-size: 0.85rem;">${item.formula}</div>
    `;
    container.appendChild(card);
  });
}

function openFormulaModal() {
  filterFormulas('');
  document.getElementById('formulaModal').classList.add('active');
}

function closeFormulaModal() {
  document.getElementById('formulaModal').classList.remove('active');
}

// ==============================================================================
// 5. TOPIC CHECKLIST & MASTERY TRACKING
// ==============================================================================
function getTopicProgressKey(subjectId) {
  return `apex_progress_${subjectId}`;
}

function isTopicChecked(subjectId, topicIndex) {
  const saved = JSON.parse(localStorage.getItem(getTopicProgressKey(subjectId)) || '{}');
  return !!saved[topicIndex];
}

function toggleTopicCheck(subjectId, topicIndex) {
  const key = getTopicProgressKey(subjectId);
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  saved[topicIndex] = !saved[topicIndex];
  localStorage.setItem(key, JSON.stringify(saved));
  updateSubjectProgressBadge(subjectId);
}

function getSubjectProgressPercent(subject) {
  if (!subject.units) return 0;
  let totalTopics = 0;
  let checkedTopics = 0;
  const saved = JSON.parse(localStorage.getItem(getTopicProgressKey(subject.id)) || '{}');

  let indexCounter = 0;
  subject.units.forEach(u => {
    (u.topics || []).forEach(() => {
      totalTopics++;
      if (saved[indexCounter]) checkedTopics++;
      indexCounter++;
    });
  });

  return totalTopics > 0 ? Math.round((checkedTopics / totalTopics) * 100) : 0;
}

function updateSubjectProgressBadge(subjectId) {
  const sub = allSubjects.find(s => s.id === subjectId);
  if (!sub) return;
  const percent = getSubjectProgressPercent(sub);
  const bar = document.getElementById(`prog_bar_${subjectId}`);
  const text = document.getElementById(`prog_text_${subjectId}`);
  if (bar) bar.style.width = `${percent}%`;
  if (text) text.textContent = `${percent}% Done`;
}

// ==============================================================================
// 6. STUDY SCRATCHPAD NOTES
// ==============================================================================
function openNotesModal() {
  const textarea = document.getElementById('studyNotesTextarea');
  const savedNotes = localStorage.getItem('apex_student_notes') || '';
  if (textarea) textarea.value = savedNotes;
  document.getElementById('notesModal').classList.add('active');
}

function closeNotesModal() {
  document.getElementById('notesModal').classList.remove('active');
}

function saveStudyNotes() {
  const textarea = document.getElementById('studyNotesTextarea');
  if (textarea) {
    localStorage.setItem('apex_student_notes', textarea.value);
    const indicator = document.getElementById('notesSavedIndicator');
    if (indicator) {
      indicator.textContent = '✓ Saved to Local Storage';
      indicator.style.opacity = '1';
    }
  }
}

function exportNotesFile() {
  const notes = localStorage.getItem('apex_student_notes') || '';
  const blob = new Blob([notes], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ApexLearn_Study_Notes.txt';
  a.click();
}

// ==============================================================================
// 7. IN-PORTAL MARKDOWN DOSSIER READER
// ==============================================================================
// 7. IN-PORTAL HIGH-FIDELITY MARKDOWN READER ENGINE
// ==============================================================================
let currentRawMarkdown = '';
let currentMdBaseFontSize = 0.95;

async function openMarkdownReader(mdFilePath, subjectCode) {
  const modal = document.getElementById('markdownReaderModal');
  const titleEl = document.getElementById('mdReaderTitle');
  const badgeEl = document.getElementById('mdViewerBadge');
  const statsEl = document.getElementById('mdReadingStats');
  const contentBox = document.getElementById('mdReaderContent');
  const tocNav = document.getElementById('mdTocNav');
  const downloadBtn = document.getElementById('mdDownloadBtn');
  const pdfBtn = document.getElementById('mdPdfDownloadBtn');
  const searchInput = document.getElementById('mdSearchInput');
  const searchCount = document.getElementById('mdSearchCount');

  if (searchInput) searchInput.value = '';
  if (searchCount) searchCount.textContent = '';

  const codeKey = (subjectCode || '').toLowerCase().trim();
  const subObj = typeof allSubjects !== 'undefined' ? allSubjects.find(s => s.code.toLowerCase() === codeKey || s.id.toLowerCase() === codeKey) : null;

  const displayCode = subObj ? subObj.code : (subjectCode || 'COURSE');
  const displayTitle = subObj ? subObj.title : 'Master Study Dossier';
  const pdfPath = subObj && subObj.assets ? subObj.assets.guidePdf : `${mdFilePath.replace('.md', '.pdf')}`;

  if (badgeEl) badgeEl.textContent = displayCode;
  if (titleEl) titleEl.textContent = `${displayCode}: ${displayTitle}`;
  if (downloadBtn) {
    downloadBtn.href = mdFilePath || '#';
    downloadBtn.download = `${displayCode}_Master_Study_Guide.md`;
  }
  if (pdfBtn) {
    pdfBtn.href = pdfPath || '#';
    pdfBtn.download = `${displayCode}_Master_Study_Guide.pdf`;
  }

  contentBox.innerHTML = '<div style="text-align: center; padding: 4rem;"><p style="font-size: 2rem;">⏳</p><p style="color: var(--text-muted);">Rendering high-fidelity study dossier...</p></div>';
  if (tocNav) tocNav.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem; padding: 0.5rem 0.75rem;">Loading outline...</span>';
  modal.classList.add('active');

  let mdText = '';

  // 1. Try instant offline load from window.SUBJECT_MARKDOWNS
  if (typeof window.SUBJECT_MARKDOWNS !== 'undefined' && window.SUBJECT_MARKDOWNS[codeKey]) {
    mdText = window.SUBJECT_MARKDOWNS[codeKey].content;
  }

  // 2. If not found in memory, try fetching
  if (!mdText) {
    try {
      const res = await fetch(mdFilePath);
      if (res.ok) {
        mdText = await res.text();
      }
    } catch (e) {
      console.log('Fetching markdown from disk');
    }
  }

  // 3. Fallback text if still empty
  if (!mdText) {
    mdText = `# ${displayCode}: ${displayTitle}\n\n## Comprehensive Study Guide\nComplete study dossier available in repository at \`${mdFilePath}\`.`;
  }

  currentRawMarkdown = mdText;

  // Calculate reading stats
  const wordCount = mdText.split(/\s+/).filter(Boolean).length;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 200));
  if (statsEl) statsEl.textContent = `📖 ~${readTimeMin} min read | ${wordCount.toLocaleString()} words`;

  // Render Markdown with rich table, code, callout, and TOC parser
  renderRichMarkdown(mdText);
}

function closeMarkdownReader() {
  const modal = document.getElementById('markdownReaderModal');
  if (modal) modal.classList.remove('active');
}

function adjustMdFontSize(delta) {
  currentMdBaseFontSize = Math.max(0.75, Math.min(1.4, currentMdBaseFontSize + (delta * 0.08)));
  const contentBox = document.getElementById('mdReaderContent');
  if (contentBox) {
    contentBox.style.fontSize = `${currentMdBaseFontSize}rem`;
  }
}

function copyCurrentMarkdown() {
  if (!currentRawMarkdown) return;
  navigator.clipboard.writeText(currentRawMarkdown).then(() => {
    alert('📋 Full Markdown document copied to clipboard!');
  }).catch(() => {
    alert('Could not copy markdown text.');
  });
}

function copyCodeSnippet(btn) {
  const codeEl = btn.closest('.md-code-wrap').querySelector('pre code');
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const originalText = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.color = '#34d399';
    btn.style.borderColor = '#34d399';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
}

function searchInsideMarkdown(query) {
  const searchCount = document.getElementById('mdSearchCount');
  if (!query || !query.trim()) {
    if (searchCount) searchCount.textContent = '';
    renderRichMarkdown(currentRawMarkdown);
    return;
  }

  const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${q})`, 'gi');

  renderRichMarkdown(currentRawMarkdown, regex);

  const matches = document.querySelectorAll('#mdReaderContent .md-highlight-match');
  if (searchCount) {
    searchCount.textContent = matches.length > 0 ? `${matches.length} found` : '0 found';
  }

  if (matches.length > 0) {
    matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function renderRichMarkdown(md, highlightRegex = null) {
  const contentBox = document.getElementById('mdReaderContent');
  const tocNav = document.getElementById('mdTocNav');
  if (!contentBox) return;

  const tocItems = [];
  const lines = md.split('\n');
  let htmlOutput = '';
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockContent = [];
  let inTable = false;
  let tableRows = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Fenced Code Block Detection
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        const fullCode = codeBlockContent.join('\n');
        const escapedCode = escapeHtml(fullCode);
        htmlOutput += `
          <div class="md-code-wrap">
            <div class="md-code-header">
              <span>${codeBlockLang || 'CODE / CONFIG'}</span>
              <button class="md-code-copy-btn" onclick="copyCodeSnippet(this)">📋 Copy Code</button>
            </div>
            <pre class="md-code-body"><code>${escapedCode}</code></pre>
          </div>
        `;
        inCodeBlock = false;
        codeBlockContent = [];
        codeBlockLang = '';
      } else {
        // Start of code block
        inCodeBlock = true;
        codeBlockLang = line.trim().replace('```', '').trim() || 'plaintext';
        codeBlockContent = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Markdown Table Detection
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableRows = [];
      }
      tableRows.push(line.trim());
      continue;
    } else if (inTable) {
      // Process accumulated table
      htmlOutput += parseMarkdownTable(tableRows, highlightRegex);
      inTable = false;
      tableRows = [];
    }

    // List item
    if (/^\s*[-*+]\s+(.*)/.test(line)) {
      if (!inList) {
        htmlOutput += '<ul style="margin: 0.75rem 0 0.75rem 1.5rem; line-height: 1.7;">';
        inList = true;
      }
      const itemText = line.replace(/^\s*[-*+]\s+/, '');
      htmlOutput += `<li>${formatInlineMarkdown(itemText, highlightRegex)}</li>`;
      continue;
    } else if (inList && !/^\s*[-*+]\s+/.test(line)) {
      htmlOutput += '</ul>';
      inList = false;
    }

    // Horizontal Rule
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(line.trim())) {
      htmlOutput += '<hr>';
      continue;
    }

    // Headers
    if (line.startsWith('#')) {
      const match = line.match(/^(#{1,4})\s+(.*)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const anchorId = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        if (level === 2 || level === 3) {
          tocItems.push({ level, text, anchorId });
        }

        const formattedText = formatInlineMarkdown(text, highlightRegex);
        if (level === 1) {
          htmlOutput += `<h1 id="${anchorId}">${formattedText}</h1>`;
        } else if (level === 2) {
          htmlOutput += `<h2 id="${anchorId}">${formattedText}</h2>`;
        } else if (level === 3) {
          htmlOutput += `<h3 id="${anchorId}">${formattedText}</h3>`;
        } else {
          htmlOutput += `<h4 id="${anchorId}">${formattedText}</h4>`;
        }
        continue;
      }
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      const quoteText = line.replace(/^>\s?/, '');
      htmlOutput += `<blockquote>${formatInlineMarkdown(quoteText, highlightRegex)}</blockquote>`;
      continue;
    }

    // Paragraph
    if (line.trim().length > 0) {
      htmlOutput += `<p style="margin-bottom: 0.85rem;">${formatInlineMarkdown(line, highlightRegex)}</p>`;
    }
  }

  // Close lingering tags
  if (inTable && tableRows.length > 0) {
    htmlOutput += parseMarkdownTable(tableRows, highlightRegex);
  }
  if (inList) {
    htmlOutput += '</ul>';
  }

  contentBox.innerHTML = htmlOutput;

  // Render Table of Contents
  if (tocNav) {
    if (tocItems.length === 0) {
      tocNav.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem; padding: 0.5rem 0.75rem;">No sections found</span>';
    } else {
      tocNav.innerHTML = tocItems.map(item => `
        <a href="#${item.anchorId}" class="md-toc-link" style="padding-left: ${item.level === 3 ? '1.5rem' : '0.75rem'};" onclick="event.preventDefault(); document.getElementById('${item.anchorId}')?.scrollIntoView({behavior: 'smooth'});">
          ${item.text}
        </a>
      `).join('');
    }
  }
}

function parseMarkdownTable(rows, highlightRegex) {
  if (rows.length < 2) return '';
  let html = '<table>';

  const parseRow = (rowStr) => {
    return rowStr
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map(c => c.trim());
  };

  const headerCells = parseRow(rows[0]);
  html += '<thead><tr>';
  headerCells.forEach(cell => {
    html += `<th>${formatInlineMarkdown(cell, highlightRegex)}</th>`;
  });
  html += '</tr></thead><tbody>';

  for (let r = 1; r < rows.length; r++) {
    // Skip separator line (e.g. |:---|:---|)
    if (/^[|:\s-]+$/.test(rows[r])) continue;

    const cells = parseRow(rows[r]);
    html += '<tr>';
    cells.forEach(cell => {
      html += `<td>${formatInlineMarkdown(cell, highlightRegex)}</td>`;
    });
    html += '</tr>';
  }

  html += '</tbody></table>';
  return html;
}

function formatInlineMarkdown(text, highlightRegex) {
  let str = text;

  // Escape basic HTML except intentional tags
  str = str.replace(/<br\s*\/?>/gi, '<br>');

  // Bold + Italic
  str = str.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  // Bold
  str = str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  str = str.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Inline Code
  str = str.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Markdown Links [text](url)
  str = str.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" target="_blank" style="color: var(--primary); text-decoration: underline;">$1</a>');

  // Highlights for Search
  if (highlightRegex) {
    str = str.replace(highlightRegex, '<span class="md-highlight-match">$1</span>');
  }

  return str;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}



// ==============================================================================
// ==============================================================================
// 8. VIDEO MASTER HUB COMPLETION TRACKER ENGINE
// ==============================================================================
function toggleVideoCompleted(subCode, vidId, checkboxEl, cardElId, vidMins) {
  let watchedSet = new Set();
  const storageKey = `apex_watched_vids_${subCode}`;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) watchedSet = new Set(JSON.parse(stored));
  } catch (e) {}

  if (checkboxEl.checked) {
    watchedSet.add(vidId);
  } else {
    watchedSet.delete(vidId);
  }

  localStorage.setItem(storageKey, JSON.stringify(Array.from(watchedSet)));

  // Update card visual state
  const cardEl = document.getElementById(cardElId);
  if (cardEl) {
    if (checkboxEl.checked) {
      cardEl.classList.add('watched');
    } else {
      cardEl.classList.remove('watched');
    }
  }

  // Update checkbox label
  const labelSpan = checkboxEl.parentElement.querySelector('span');
  if (labelSpan) {
    const mins = vidMins || 25;
    labelSpan.textContent = checkboxEl.checked ? `✅ Completed (${mins} mins counted)` : `Mark Lecture Completed (${mins} mins)`;
    labelSpan.style.color = checkboxEl.checked ? '#10b981' : 'var(--text-muted)';
  }

  // Update subject video progress header & bar
  const sub = typeof allSubjects !== 'undefined' ? allSubjects.find(s => s.code === subCode || s.id.toLowerCase() === subCode.toLowerCase()) : null;
  if (sub && sub.videos) {
    const totalVids = sub.videos.length;
    const count = watchedSet.size;
    let watchedMinutes = 0;
    let totalMinutes = 0;

    sub.videos.forEach(v => {
      const vm = v.fixedMinutes || 25;
      totalMinutes += vm;
      if (watchedSet.has(v.url || v.title)) {
        watchedMinutes += vm;
      }
    });

    const percent = totalMinutes > 0 ? Math.round((watchedMinutes / totalMinutes) * 100) : 0;
    const watchedH = Math.floor(watchedMinutes / 60);
    const watchedM = watchedMinutes % 60;
    const watchedStr = watchedH > 0 ? `${watchedH}h ${watchedM}m` : `${watchedM}m`;

    const totalH = Math.floor(totalMinutes / 60);
    const totalM = totalMinutes % 60;
    const totalStr = totalH > 0 ? `${totalH}h ${totalM}m` : `${totalM}m`;

    const progressHeader = document.getElementById(`vidProgressHeader_${subCode}`);
    const progressBar = document.getElementById(`vidProgressBar_${subCode}`);

    if (progressHeader) progressHeader.textContent = `${count} / ${totalVids} Lectures (${watchedStr} / ${totalStr} • ${percent}%)`;
    if (progressBar) progressBar.style.width = `${percent}%`;
  }
}

function resetVideoProgress(subCode) {
  if (confirm(`Reset all playlist watch progress for ${subCode}?`)) {
    localStorage.removeItem(`apex_watched_vids_${subCode}`);
    if (typeof openSubjectDrawer === 'function') {
      const sub = typeof allSubjects !== 'undefined' ? allSubjects.find(s => s.code === subCode || s.id.toLowerCase() === subCode.toLowerCase()) : null;
      if (sub) openSubjectDrawer(sub.id);
    }
  }
}
