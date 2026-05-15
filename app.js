// ─── State ───────────────────────────────────────────────────
let questions = [];
let current   = 0;
let score     = 0;
let answered  = false;
let history   = [];   // { question, correct, chosen, explanation }

// ─── DOM refs ─────────────────────────────────────────────────
const screens = {
  home:    document.getElementById('screen-home'),
  quiz:    document.getElementById('screen-quiz'),
  results: document.getElementById('screen-results'),
};

const $ = id => document.getElementById(id);

// ─── Init ─────────────────────────────────────────────────────
function init() {
  $('quiz-title').textContent       = QUIZ_CONFIG.title;
  $('quiz-description').textContent = QUIZ_CONFIG.description;

  let pool = [...QUIZ_DATA];
  if (QUIZ_CONFIG.shuffle) pool = shuffle(pool);
  if (QUIZ_CONFIG.pickRandom) pool = pool.slice(0, QUIZ_CONFIG.pickRandom);
  questions = pool;

  $('total-questions-label').textContent = `${questions.length} question${questions.length > 1 ? 's' : ''}`;
  $('btn-start').addEventListener('click', startQuiz);
  $('btn-next').addEventListener('click', nextQuestion);
  $('btn-retry').addEventListener('click', restartQuiz);
  $('btn-home').addEventListener('click', () => showScreen('home'));
}

// ─── Quiz flow ────────────────────────────────────────────────
function startQuiz() {
  current  = 0;
  score    = 0;
  history  = [];
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  answered = false;

  // Progress
  const pct = (current / questions.length) * 100;
  $('progress-bar').style.width = pct + '%';
  $('question-counter').textContent = `Question ${current + 1} / ${questions.length}`;
  $('score-live').textContent = `Score : ${score}`;

  // Category
  $('question-category').textContent = q.category || '';

  // Question text
  $('question-text').textContent = q.question;

  // Answers
  const container = $('answers-container');
  container.innerHTML = '';
  const order = shuffle([...q.answers.keys()]);   // shuffle answer positions
  order.forEach(idx => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = q.answers[idx];
    btn.dataset.index = idx;
    btn.addEventListener('click', () => selectAnswer(btn, idx, q));
    container.appendChild(btn);
  });

  // Reset feedback
  const fb = $('feedback');
  fb.className = 'feedback hidden';
  fb.classList.remove('correct-fb', 'wrong-fb');
}

function selectAnswer(btn, idx, q) {
  if (answered) return;
  answered = true;

  const isCorrect = idx === q.correct;
  if (isCorrect) score++;

  // Highlight all buttons
  document.querySelectorAll('.answer-btn').forEach(b => {
    b.disabled = true;
    const i = parseInt(b.dataset.index);
    if (i === q.correct) b.classList.add('correct');
    else if (i === idx && !isCorrect) b.classList.add('wrong');
  });

  // Feedback
  const fb = $('feedback');
  fb.classList.remove('hidden', 'correct-fb', 'wrong-fb');
  fb.classList.add(isCorrect ? 'correct-fb' : 'wrong-fb');
  $('feedback-text').textContent = isCorrect ? '✅ Bonne réponse !' : `❌ Mauvaise réponse. La bonne réponse était : « ${q.answers[q.correct]} »`;
  $('explanation-text').textContent = q.explanation || '';

  history.push({ q, correct: isCorrect, chosen: idx });

  $('btn-next').textContent = current + 1 < questions.length ? 'Question suivante' : 'Voir les résultats';
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function restartQuiz() {
  let pool = [...QUIZ_DATA];
  if (QUIZ_CONFIG.shuffle) pool = shuffle(pool);
  if (QUIZ_CONFIG.pickRandom) pool = pool.slice(0, QUIZ_CONFIG.pickRandom);
  questions = pool;
  startQuiz();
}

// ─── Results ──────────────────────────────────────────────────
function showResults() {
  showScreen('results');
  $('progress-bar').style.width = '100%';

  const total = questions.length;
  const pct   = Math.round((score / total) * 100);

  $('result-score').textContent = `${score} / ${total} (${pct}%)`;

  let emoji, title, msg;
  if (pct === 100)      { emoji = '🏆'; title = 'Parfait !';          msg = 'Score parfait, bravo !'; }
  else if (pct >= 80)   { emoji = '🎉'; title = 'Excellent !';        msg = 'Très bon travail !'; }
  else if (pct >= 60)   { emoji = '👍'; title = 'Bien joué !';        msg = 'Encore quelques révisions et tu seras au top.'; }
  else if (pct >= 40)   { emoji = '📚'; title = 'Peut mieux faire.';  msg = 'Continue à réviser, tu vas y arriver !'; }
  else                  { emoji = '💪'; title = 'À retravailler.';    msg = 'Ne te décourage pas, relis tes notes et réessaie !'; }

  $('result-emoji').textContent   = emoji;
  $('result-title').textContent   = title;
  $('result-message').textContent = msg;

  // Review
  const list = $('review-list');
  list.innerHTML = '';
  history.forEach(({ q, correct, chosen }) => {
    const item = document.createElement('div');
    item.className = 'review-item' + (correct ? '' : ' wrong');
    item.innerHTML = `
      <div class="ri-q">${correct ? '✅' : '❌'} ${q.question}</div>
      ${!correct ? `<div class="ri-a">Ta réponse : ${q.answers[chosen]} — Bonne réponse : ${q.answers[q.correct]}</div>` : ''}
    `;
    list.appendChild(item);
  });
}

// ─── Helpers ──────────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
