/* =========================================================================
   app.js — CyberCore Paper 2 engine
   Routing, persistence, gamification, tabs, quizzes, locking topic tests,
   test feedback, Boss Mode exam generator, and the AI Study Bot.
   ========================================================================= */
'use strict';

/* ----------------------------- state ----------------------------------- */
const SAVE_KEY = 'cybercore_p2_v1';
const defaultState = () => ({
  xp: 0, level: 1, streak: 0, lastDay: null,
  testScores: {},        // unitId -> best fraction (0..1)
  unitsTouched: {},      // unitId -> true (visited learn)
  flashDone: {},         // unitId -> true
  bossBest: 0,           // best boss %
  badges: {},            // id -> true
});
let state = load();

function load() {
  try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); return s ? Object.assign(defaultState(), s) : defaultState(); }
  catch { return defaultState(); }
}
function save() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); }

function touchStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastDay === today) return;
  const yest = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  state.streak = (state.lastDay === yest) ? state.streak + 1 : 1;
  state.lastDay = today;
  if (state.streak >= 3) earn('streak-3');
  save();
}
function addXP(n) {
  state.xp += n;
  const need = lvl => 100 + (lvl - 1) * 120;
  while (state.xp >= need(state.level)) { state.xp -= need(state.level); state.level++; toast(`⬢ Level up! You reached Level ${state.level}`, true); }
  save(); renderHUD();
}
function earn(id) {
  if (state.badges[id]) return;
  state.badges[id] = true; save();
  const b = BADGES.find(x => x.id === id);
  if (b) toast(`${b.ico} Badge unlocked: ${b.nm}`, true);
}

/* --------------------------- unit helpers ------------------------------ */
function allUnits() { return CONTENT.areas.flatMap(a => a.units.map(u => ({ area: a, unit: u }))); }
function unitById(id) { return allUnits().find(x => x.unit.id === id); }

/* A topic test unlocks only if the PREVIOUS unit's test was passed (≥70%).
   The first unit of every area is always unlocked. Content is never locked. */
function isTestUnlocked(areaIdx, unitIdx) {
  if (unitIdx === 0) return true;
  const area = CONTENT.areas[areaIdx];
  const prev = area.units[unitIdx - 1];
  return (state.testScores[prev.id] || 0) >= PASS_MARK;
}
function areaCleared(area) { return area.units.every(u => (state.testScores[u.id] || 0) >= PASS_MARK); }

/* ------------------------------ HUD ------------------------------------ */
function renderHUD() {
  document.getElementById('statXP').textContent = state.xp;
  document.getElementById('statLevel').textContent = state.level;
  document.getElementById('statStreak').textContent = state.streak;
}

/* --------------------------- navigation -------------------------------- */
function buildNav() {
  const tree = document.getElementById('navTree');
  tree.innerHTML = '';
  CONTENT.areas.forEach((area, ai) => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-area';
    const cleared = area.units.length && area.units.every(u => (state.testScores[u.id] || 0) >= PASS_MARK);
    wrap.innerHTML = `<button class="nav-area-head">
        <span class="code">${area.code}</span><span>${area.title}</span>
        ${cleared ? '<span class="tick">✔</span>' : ''}<span class="chev">▸</span>
      </button><div class="nav-units"></div>`;
    const head = wrap.querySelector('.nav-area-head');
    const list = wrap.querySelector('.nav-units');
    head.onclick = () => wrap.classList.toggle('open');

    area.units.forEach((u, ui) => {
      const passed = (state.testScores[u.id] || 0) >= PASS_MARK;
      const locked = !isTestUnlocked(ai, ui);
      const btn = document.createElement('button');
      btn.className = 'nav-unit';
      btn.dataset.route = `unit:${u.id}`;
      btn.innerHTML = `<span>${u.code} ${u.title}</span>` +
        (passed ? '<span class="tick">✔</span>' : (locked ? '<span class="lock" title="Pass the previous topic test to unlock this test">🔒</span>' : ''));
      btn.onclick = () => go(`unit:${u.id}`);
      list.appendChild(btn);
    });
    // area summary link
    const sum = document.createElement('button');
    sum.className = 'nav-unit';
    sum.dataset.route = `nutshell:${area.id}`;
    sum.innerHTML = `<span>📝 ${area.code} Nutshell Summary</span>`;
    sum.onclick = () => go(`nutshell:${area.id}`);
    list.appendChild(sum);

    tree.appendChild(wrap);
  });
}
function markActiveNav(route) {
  document.querySelectorAll('.nav-unit').forEach(b => b.classList.toggle('active', b.dataset.route === route));
  // open the parent area of the active unit
  const active = document.querySelector('.nav-unit.active');
  if (active) { const area = active.closest('.nav-area'); if (area) area.classList.add('open'); }
}

/* ------------------------------ router --------------------------------- */
let CURRENT = 'home';
function go(route) {
  CURRENT = route; window.scrollTo(0, 0);
  document.getElementById('sidebar').classList.remove('open');
  const [kind, arg] = route.split(':');
  const view = document.getElementById('view');
  if (kind === 'home') renderHome(view);
  else if (kind === 'unit') renderUnit(view, arg);
  else if (kind === 'nutshell') renderNutshell(view, arg);
  else if (kind === 'boss') renderBoss(view);
  else if (kind === 'dashboard') renderDashboard(view);
  else if (kind === 'glossary') renderGlossary(view);
  else if (kind === 'ai') { renderHome(view); openAI(); }
  markActiveNav(route);
}

/* ------------------------------ home ----------------------------------- */
function renderHome(view) {
  const totalUnits = allUnits().length;
  const passed = allUnits().filter(x => (state.testScores[x.unit.id] || 0) >= PASS_MARK).length;
  const bossReady = CONTENT.areas.every(a => areaCleared(a));
  view.innerHTML = `
    <div class="card">
      <div class="crumb">T Level Digital Support &amp; Security</div>
      <h1>Core <span class="accent">Paper 2</span> — Revision Arena</h1>
      <p>Learn, drill and battle your way through all five Paper 2 content areas. Everything here comes
      <strong>only</strong> from CO4–CO8; the questions copy the real Pearson Paper 2 style (1, 2, 3, 4, 6, 9 and 12-mark questions and levels-based mark schemes).</p>
      <div class="dots">${allUnits().map(x => `<i class="${(state.testScores[x.unit.id]||0)>=PASS_MARK?'done':''}"></i>`).join('')}</div>
      <p class="meta" style="color:var(--ink-faint)">${passed}/${totalUnits} topic tests passed · ${state.xp} XP · Level ${state.level} · 🔥 ${state.streak}-day streak</p>
      <div class="row" style="margin-top:8px">
        <button class="btn" onclick="go('boss')">👾 ${bossReady ? 'Enter Boss Mode' : 'Try Boss Mode (always open)'}</button>
        <button class="btn secondary" onclick="openAI()">🤖 Ask the Study Bot</button>
      </div>
    </div>

    <h2>Content Areas</h2>
    <div class="tiles">
      ${CONTENT.areas.map(a => {
        const ap = a.units.filter(u => (state.testScores[u.id]||0)>=PASS_MARK).length;
        return `<div class="tile" onclick="go('unit:${a.units[0].id}')">
          <div class="code">${a.code}</div>
          <h3>${a.title}</h3>
          <div class="meta">${a.units.length} units · ${ap}/${a.units.length} tests passed${areaCleared(a)?' · ✔ cleared':''}</div>
        </div>`;
      }).join('')}
    </div>

    <div class="card" style="margin-top:22px">
      <h2 style="margin-top:0">Badges</h2>
      <div class="badges">
        ${BADGES.map(b => `<div class="badge ${state.badges[b.id]?'earned':''}"><div class="ico">${b.ico}</div><div class="nm">${b.nm}</div></div>`).join('')}
      </div>
    </div>`;
}

/* ------------------------------ unit ----------------------------------- */
let unitTab = 'learn';
function renderUnit(view, unitId, tab) {
  const found = unitById(unitId); if (!found) { renderHome(view); return; }
  const { area, unit } = found;
  const ai = CONTENT.areas.indexOf(area), ui = area.units.indexOf(unit);
  unitTab = tab || 'learn';
  state.unitsTouched[unitId] = true; earn('first-steps'); touchStreak(); save();

  const tabs = ['learn','flashcards','quiz','practice','like12','research','test'];
  const label = { learn:'📖 Learn', flashcards:'🃏 Flashcards', quiz:'❓ Quiz', practice:'✍️ Practice', like12:"🧒 Like I'm 12", research:'🔬 Deep Research', test:'🧪 Topic Test' };

  view.innerHTML = `
    <div class="crumb">${area.code} · ${area.title}</div>
    <h1>${unit.code} ${unit.title}</h1>
    <div class="tabs">${tabs.map(t => `<button class="tab ${t===unitTab?'active':''}" data-t="${t}">${label[t]}</button>`).join('')}</div>
    <div id="tabBody"></div>`;
  view.querySelectorAll('.tab').forEach(b => b.onclick = () => renderUnit(view, unitId, b.dataset.t));

  const body = view.querySelector('#tabBody');
  if (unitTab === 'learn') {
    const plus = (typeof LEARN_PLUS !== 'undefined' && LEARN_PLUS[unitId]) ? LEARN_PLUS[unitId] : '';
    body.innerHTML = `<div class="card">${unit.learn}${plus}</div>`;
  }
  else if (unitTab === 'like12')body.innerHTML = `<div class="card"><div class="callout k12">🧒 <strong>Imagine you're 12…</strong></div>${unit.like12}</div>`;
  else if (unitTab === 'flashcards') renderFlashcards(body, unit);
  else if (unitTab === 'quiz')  renderQuiz(body, unit);
  else if (unitTab === 'practice') renderPractice(body, unit);
  else if (unitTab === 'research') {
    const r = (typeof RESEARCH !== 'undefined' && RESEARCH[unitId]) ? RESEARCH[unitId] : '<p>Deep-research notes for this unit are being added.</p>';
    body.innerHTML = `<div class="card">
      <div class="callout" style="border-color:var(--amber);background:rgba(255,179,71,0.08)">
        🔬 <strong>Deep Research — beyond the spec.</strong> This widens your understanding for real mastery.
        It is <strong>not examined</strong> and is <strong>never used in Boss Mode or the topic tests</strong> — those stay strictly CO4–CO8.
      </div>${r}</div>`;
  }
  else if (unitTab === 'test')  renderTest(body, area, unit, ai, ui);
}

/* --------------------------- flashcards -------------------------------- */
function renderFlashcards(body, unit) {
  body.innerHTML = `<div class="card">
    <p>Tap a card to flip it. The green line is the “like I'm 12” explanation with an example.</p>
    <div class="fc-grid">${unit.flashcards.map((f, i) => `
      <div class="flashcard" data-i="${i}">
        <div class="flashcard-inner">
          <div class="fc-face fc-front">${f.front}<span class="fc-hint">click to flip</span></div>
          <div class="fc-face fc-back">
            <div class="lbl">Definition</div><div class="def">${f.back}</div>
            <div class="lbl">Like I'm 12</div><div class="k12">${f.k12}</div>
          </div>
        </div>
      </div>`).join('')}</div>
  </div>`;
  body.querySelectorAll('.flashcard').forEach(c => c.onclick = () => c.classList.toggle('flipped'));
  if (!state.flashDone[unit.id]) { state.flashDone[unit.id] = true; addXP(XP.flashSet); save(); }
}

/* ------------------------------ quiz ----------------------------------- */
function renderQuiz(body, unit) {
  body.innerHTML = `<div class="card">
    <p>${unit.quiz.length} multiple-choice questions (1–2 marks each). Pick an answer for each, then submit.</p>
    <div id="quizList"></div>
    <div class="row"><button class="btn" id="quizSubmit">Submit answers</button>
    <span id="quizScore" style="color:var(--ink-dim)"></span></div>
  </div>`;
  const list = body.querySelector('#quizList');
  unit.quiz.forEach((q, qi) => list.appendChild(mcqBlock(q, qi)));
  body.querySelector('#quizSubmit').onclick = () => {
    let correct = 0;
    unit.quiz.forEach((q, qi) => { if (gradeMCQ(q, qi)) correct++; });
    const pct = Math.round(100 * correct / unit.quiz.length);
    body.querySelector('#quizScore').textContent = `Score: ${correct}/${unit.quiz.length} (${pct}%)`;
    addXP(correct * XP.mcq);
  };
}
function mcqBlock(q, qi, prefix='q') {
  const el = document.createElement('div');
  el.className = 'q-block'; el.dataset.qi = qi;
  el.innerHTML = `<span class="q-marks">${q.marks} mark${q.marks>1?'s':''}</span>
    <div class="q-num">Question ${qi + 1}</div>
    <div class="q-text">${q.q}</div>
    <div class="opts">${q.opts.map((o, oi) => `
      <label class="opt"><input type="radio" name="${prefix}${qi}" value="${oi}"><span>${o}</span></label>`).join('')}</div>
    <div class="q-feedback"></div>`;
  el.querySelectorAll('.opt').forEach(opt => opt.onclick = () => {
    el.querySelectorAll('.opt').forEach(o => o.classList.remove('sel')); opt.classList.add('sel');
  });
  return el;
}
function gradeMCQ(q, qi, prefix='q') {
  const block = document.querySelector(`.q-block[data-qi="${qi}"]`);
  const picked = block.querySelector(`input[name="${prefix}${qi}"]:checked`);
  const opts = block.querySelectorAll('.opt');
  const fb = block.querySelector('.q-feedback');
  const chosen = picked ? +picked.value : -1;
  opts.forEach((o, oi) => { o.classList.remove('correct','wrong'); if (oi === q.a) o.classList.add('correct'); else if (oi === chosen) o.classList.add('wrong'); });
  const ok = chosen === q.a;
  fb.className = 'q-feedback show ' + (ok ? 'good' : 'bad');
  fb.innerHTML = ok
    ? `<span class="lbl">✔ Correct.</span> ${q.fb || ''}`
    : `<span class="lbl">✘ ${chosen === -1 ? 'Not answered.' : 'Not quite.'}</span> Correct answer: <strong>${q.opts[q.a]}</strong>.<br>${q.fb || ''}`;
  return ok;
}

/* ----------------------------- practice -------------------------------- */
function renderPractice(body, unit) {
  body.innerHTML = `<div class="card">
    <p>Written practice. Have a go in the box, then reveal the examiner model answer and mark scheme. Mark yourself honestly to bank XP.</p>
    <div class="callout tip">${LONG_ANSWER_FRAME}</div>
    <div id="pracList"></div>
  </div>`;
  const list = body.querySelector('#pracList');
  unit.practice.forEach((q, i) => list.appendChild(writtenBlock(q, i, 'prac')));
}
function writtenBlock(q, i, prefix, label) {
  const el = document.createElement('div');
  el.className = 'q-block';
  const cmds = detectCommandWords(q.q);
  el.innerHTML = `<span class="q-marks">${q.marks} mark${q.marks>1?'s':''}</span>
    <div class="q-num">${label || 'Practice'} ${i + 1}${q.cmd?` · <span style="color:var(--amber)">${q.cmd}</span>`:''}</div>
    ${q.scenario?`<div class="callout">${q.scenario}</div>`:''}
    <div class="q-text">${q.q}</div>
    <textarea class="ans" placeholder="Type your answer…"></textarea>
    <div class="row" style="margin-top:8px">
      <button class="btn sm reveal">Reveal model answer + mark scheme</button>
    </div>
    <div class="model" style="display:none">
      ${q.levels ? `<h4>Levels-based mark scheme (${q.marks} marks)</h4>${levelsHTML(q.levels)}
        <h4>Indicative content</h4><ul class="mark-points">${(q.indicative||[]).map(p=>`<li>${p}</li>`).join('')}</ul>` : ''}
      ${q.points ? `<h4>Mark scheme (${q.marks} mark${q.marks>1?'s':''})</h4><ul class="mark-points">${q.points.map(p=>`<li>${p}</li>`).join('')}</ul>` : ''}
      <h4>Examiner-style model answer</h4><div>${q.model}</div>
      ${cmds.length?`<div class="cmd" style="margin-top:8px">📌 ${cmds.join('<br>📌 ')}</div>`:''}
    </div>`;
  const reveal = el.querySelector('.reveal'), model = el.querySelector('.model');
  reveal.onclick = () => {
    const open = model.style.display === 'block';
    model.style.display = open ? 'none' : 'block';
    reveal.textContent = open ? 'Reveal model answer + mark scheme' : 'Hide model answer';
    if (!open && !el.dataset.scored) {
      el.dataset.scored = '1';
      addXP(q.marks >= 6 ? XP.practiceLong : XP.practiceShort);
    }
  };
  return el;
}
function levelsHTML(key) {
  return `<div class="levels">${LEVELS[key].map(l => `<div class="level-row"><span class="lv">${l.lv}</span><span>${l.range}</span><span>${l.desc}</span></div>`).join('')}</div>`;
}

/* ---------------------------- topic test ------------------------------- */
function renderTest(body, area, unit, ai, ui) {
  if (!isTestUnlocked(ai, ui)) {
    const prev = area.units[ui - 1];
    body.innerHTML = `<div class="card"><div class="lockmsg">
      <div class="big">🔒</div>
      <h3>Topic test locked</h3>
      <p>You need <strong>70%+</strong> on the <strong>${prev.code} ${prev.title}</strong> topic test to unlock this one.</p>
      <p style="color:var(--ink-faint)">All the Learn, Flashcards, Quiz, Practice and “Like I'm 12” tabs stay open — only the test is locked.</p>
      <button class="btn" onclick="go('unit:${prev.id}')">Go to ${prev.code} test</button>
    </div></div>`;
    return;
  }
  const t = unit.test;
  const best = state.testScores[unit.id];
  body.innerHTML = `<div class="card">
    ${best!=null?`<div class="callout">Your best on this test: <strong>${Math.round(best*100)}%</strong> ${best>=PASS_MARK?'✔ passed':'— keep going!'}</div>`:''}
    <p>Mix of MCQs and 1–9 mark written questions, ending with a Pearson-style 9-mark scenario. Score <strong>70%+</strong> to unlock the next topic test. Written questions are self-marked against the mark scheme.</p>
    <h3>Section A — Multiple choice (8 questions)</h3><div id="tMcq"></div>
    <h3>Section B — Short &amp; structured answers (1–6 marks)</h3><div id="tStruct"></div>
    <h3>Section C — Extended response (9 marks)</h3><div id="tNine"></div>
    <div class="row"><button class="btn" id="tSubmit">Submit &amp; mark MCQs</button></div>
    <div id="tResult"></div>
  </div>`;

  // Section A: draw 8 MCQs from a shuffled pool (the unit's quiz + dedicated test
  // MCQs) so a RETAKE shows a fresh set — satisfies "retake with new questions".
  const pool = shuffle([...(unit.quiz || []), ...(t.mcq || [])]);
  const mcqs = pool.slice(0, 8); // 8 MCQs per attempt
  const mcqWrap = body.querySelector('#tMcq');
  mcqs.forEach((q, qi) => mcqWrap.appendChild(mcqBlock(q, qi, 't')));

  // Section B: short/structured mix + a 6-mark scenario (so the test spans 1–6 marks)
  const structWrap = body.querySelector('#tStruct');
  t.structured.forEach((q, i) => structWrap.appendChild(writtenBlock(q, i, 'ts', 'Question')));
  const six = t.six || (typeof TEST_SIX !== 'undefined' && TEST_SIX[unit.id]);
  if (six) structWrap.appendChild(writtenBlock(
    { q: six.q, scenario: six.scenario, marks: 6, levels: '6', indicative: six.indicative, model: six.model, cmd: six.cmd || 'Discuss' }, t.structured.length, 'ts6', 'Question'));

  // Section C: the Pearson-style 9-mark scenario
  const n = t.nine;
  body.querySelector('#tNine').appendChild(writtenBlock(
    { q: n.q, scenario: n.scenario, marks: 9, levels: '9', indicative: n.indicative, model: n.model, cmd: 'evaluate' }, t.structured.length + 1, 'tn', 'Question'));

  body.querySelector('#tSubmit').onclick = () => {
    let correct = 0;
    mcqs.forEach((q, qi) => { if (gradeMCQ(q, qi, 't')) correct++; });
    const frac = correct / mcqs.length;          // MCQ section drives the unlock score
    const pct = Math.round(frac * 100);
    addXP(correct * XP.mcq);
    const passed = frac >= PASS_MARK;
    if (frac > (state.testScores[unit.id] || 0)) state.testScores[unit.id] = frac;
    if (correct === mcqs.length) earn('flawless');
    if (passed) { addXP(XP.testPass); checkAreaBadge(area); }
    save(); buildNav(); markActiveNav(CURRENT);

    const res = body.querySelector('#tResult');
    const wrongs = mcqs.map((q, qi) => ({ q, qi })).filter(({ q, qi }) => {
      const b = document.querySelector(`.q-block[data-qi="${qi}"]`);
      const picked = b.querySelector(`input[name="t${qi}"]:checked`);
      return !picked || +picked.value !== q.a;
    });
    res.innerHTML = `<div class="result ${passed?'pass':'fail'}">
        <div class="score">${pct}%</div>
        <div>${correct}/${mcqs.length} MCQs correct — ${passed?'PASSED ✔ next test unlocked!':'below 70%, retake (with new questions) to unlock the next test'}</div>
      </div>
      ${wrongs.length?`<h3>What went wrong</h3>${wrongs.map(({q})=>{
        const cmds = detectCommandWords(q.q);
        return `<div class="q-block">
          <div class="q-text">${q.q}</div>
          <div class="q-feedback show bad"><span class="lbl">Correct answer:</span> <strong>${q.opts[q.a]}</strong><br>
          <span class="lbl">Why:</span> ${q.fb||'Review the Learn tab for this point.'}
          ${cmds.length?`<div class="cmd">📌 ${cmds.join('<br>📌 ')}</div>`:''}</div>
        </div>`;}).join('')}`:'<p style="color:var(--green)">Perfect MCQ section — nothing wrong! 💯</p>'}
      <p style="color:var(--ink-faint)">Don't forget to self-mark your Section B &amp; C answers against the mark schemes above.</p>
      ${!passed?`<button class="btn" onclick="go('unit:${unit.id}')">Retake test</button>`:''}`;
    res.scrollIntoView({ behavior: 'smooth' });
  };
}
function checkAreaBadge(area) {
  if (areaCleared(area)) earn(area.id + '-clear');
}

/* ---------------------------- nutshell --------------------------------- */
function renderNutshell(view, areaId) {
  const area = CONTENT.areas.find(a => a.id === areaId); if (!area) { renderHome(view); return; }
  view.innerHTML = `<div class="crumb">${area.code} · Last-minute revision</div>
    <h1>📝 ${area.code} in a Nutshell</h1>
    <div class="card">${area.nutshell}</div>
    <div class="row"><button class="btn secondary" onclick="go('unit:${area.units[0].id}')">Back to ${area.code} units</button></div>`;
}

/* ---------------------------- dashboard -------------------------------- */
function masteryOf(area) {
  // mastery % = average of best topic-test scores across the area's units
  const scores = area.units.map(u => state.testScores[u.id] || 0);
  return Math.round(100 * scores.reduce((a, b) => a + b, 0) / area.units.length);
}
function renderDashboard(view) {
  const need = lvl => 100 + (lvl - 1) * 120;
  const xpInto = state.xp, xpNeed = need(state.level);
  const allU = allUnits();
  const passed = allU.filter(x => (state.testScores[x.unit.id] || 0) >= PASS_MARK).length;
  const overall = Math.round(100 * CONTENT.areas.reduce((s, a) => s + masteryOf(a), 0) / CONTENT.areas.length);
  const badgesEarned = Object.keys(state.badges).length;

  const bar = (pct, col) => `<div style="height:10px;background:rgba(255,255,255,0.07);border-radius:6px;overflow:hidden">
      <i style="display:block;height:100%;width:${pct}%;background:${col||'linear-gradient(90deg,var(--red-deep),var(--red))'};box-shadow:0 0 8px var(--red-glow)"></i></div>`;

  view.innerHTML = `
    <div class="crumb">Your progress</div>
    <h1>📊 Dashboard</h1>

    <div class="tiles">
      <div class="tile"><div class="code">EXPERIENCE</div><h3>${state.xp} XP · Level ${state.level}</h3>
        ${bar(Math.min(100, Math.round(100*xpInto/xpNeed)))}
        <div class="meta" style="margin-top:6px">${xpInto}/${xpNeed} XP to Level ${state.level+1}</div></div>
      <div class="tile"><div class="code">OVERALL MASTERY</div><h3>${overall}%</h3>${bar(overall)}
        <div class="meta" style="margin-top:6px">${passed}/${allU.length} topic tests passed</div></div>
      <div class="tile"><div class="code">STREAK</div><h3>🔥 ${state.streak} day${state.streak===1?'':'s'}</h3>
        <div class="meta">${badgesEarned}/${BADGES.length} badges earned</div></div>
      <div class="tile" onclick="go('boss')"><div class="code">BOSS MODE</div><h3>👾 Best ${state.bossBest}%</h3>
        ${bar(state.bossBest, 'linear-gradient(90deg,#7a0c16,var(--red))')}
        <div class="meta" style="margin-top:6px">${state.bossBest>=70?'Exam-ready pace!':'Aim for 70%+'} · click to play</div></div>
    </div>

    <div class="card">
      <h2 style="margin-top:0">Mastery by content area</h2>
      ${CONTENT.areas.map(a => {
        const m = masteryOf(a), ap = a.units.filter(u=>(state.testScores[u.id]||0)>=PASS_MARK).length;
        return `<div style="margin:12px 0">
          <div class="row" style="justify-content:space-between"><strong>${a.code} ${a.title}</strong>
            <span class="meta" style="color:var(--ink-faint)">${m}% · ${ap}/${a.units.length} passed ${areaCleared(a)?'✔':''}</span></div>
          ${bar(m)}
          <div class="row" style="margin-top:6px">${a.units.map(u=>{
            const s=state.testScores[u.id]||0; const st=s>=PASS_MARK?'✔':(s>0?Math.round(s*100)+'%':'—');
            return `<button class="btn sm secondary" onclick="go('unit:${u.id}')">${u.code} ${st}</button>`;}).join('')}
          <button class="btn sm" onclick="go('nutshell:${a.id}')">📝 ${a.code} Nutshell</button></div>
        </div>`;
      }).join('')}
    </div>

    <div class="card">
      <h2 style="margin-top:0">Topic tests — unlock status</h2>
      <table class="data"><tr><th>Unit</th><th>Status</th><th>Best</th></tr>
      ${CONTENT.areas.flatMap((a,aiX)=>a.units.map((u,uiX)=>{
        const s=state.testScores[u.id]||0; const unlocked=isTestUnlocked(aiX,uiX);
        const status = s>=PASS_MARK?'✔ Passed (next unlocked)':(unlocked?'🔓 Unlocked':'🔒 Locked');
        return `<tr><td>${a.code} ${u.code} ${u.title}</td><td>${status}</td><td>${s?Math.round(s*100)+'%':'–'}</td></tr>`;
      })).join('')}</table>
    </div>

    <div class="card">
      <h2 style="margin-top:0">Quick links</h2>
      <div class="row">
        ${CONTENT.areas.map(a=>`<button class="btn sm secondary" onclick="go('unit:${a.units[0].id}')">${a.code}</button>`).join('')}
        <button class="btn sm" onclick="go('boss')">👾 Boss Mode</button>
        <button class="btn sm secondary" onclick="go('glossary')">📚 Glossary</button>
        <button class="btn sm secondary" onclick="openAI()">🤖 Study Bot</button>
      </div>
      <h3>Badges</h3>
      <div class="badges">${BADGES.map(b=>`<div class="badge ${state.badges[b.id]?'earned':''}"><div class="ico">${b.ico}</div><div class="nm">${b.nm}</div></div>`).join('')}</div>
    </div>`;
}

/* ---------------------------- glossary --------------------------------- */
function renderGlossary(view) {
  const terms = (typeof GLOSSARY !== 'undefined') ? GLOSSARY : [];
  view.innerHTML = `
    <div class="crumb">Site-wide reference</div>
    <h1>📚 Glossary</h1>
    <div class="card">
      <p>Every key term across CO4–CO8: a definition, a deeper technical explanation, a real-world example, and why it matters in the exam.</p>
      <div class="row">
        <input id="glossSearch" placeholder="Search terms… (e.g. firewall, GDPR, RAID)" style="flex:1;min-width:220px;background:#0c0810;border:1px solid var(--line);border-radius:9px;padding:10px 12px;color:var(--ink)">
        <select id="glossArea" style="background:#0c0810;border:1px solid var(--line);border-radius:9px;padding:10px;color:var(--ink)">
          <option value="">All areas</option>
          ${CONTENT.areas.map(a=>`<option value="${a.code}">${a.code}</option>`).join('')}
        </select>
      </div>
      <div class="meta" id="glossCount" style="color:var(--ink-faint);margin-top:8px"></div>
    </div>
    <div id="glossList"></div>`;

  const list = view.querySelector('#glossList');
  const search = view.querySelector('#glossSearch');
  const areaSel = view.querySelector('#glossArea');
  const count = view.querySelector('#glossCount');

  function draw() {
    const q = search.value.toLowerCase().trim();
    const af = areaSel.value;
    const shown = terms.filter(t =>
      (!af || t.area === af) &&
      (!q || (t.term + ' ' + t.def + ' ' + (t.tech||'') + ' ' + (t.eg||'')).toLowerCase().includes(q)));
    count.textContent = `${shown.length} term${shown.length===1?'':'s'}`;
    list.innerHTML = shown.length ? shown.map(t => `
      <div class="q-block">
        <span class="q-marks">${t.area}</span>
        <h3 style="margin:0 0 6px">${t.term}</h3>
        <div><strong style="color:var(--red-soft)">Definition:</strong> ${t.def}</div>
        ${t.tech?`<div style="margin-top:6px"><strong style="color:var(--red-soft)">In depth:</strong> ${t.tech}</div>`:''}
        ${t.eg?`<div style="margin-top:6px"><strong style="color:var(--green)">Real-world example:</strong> ${t.eg}</div>`:''}
        ${t.exam?`<div class="callout" style="margin:8px 0 0">🎯 <strong>Exam relevance:</strong> ${t.exam}</div>`:''}
      </div>`).join('') : '<div class="card">No terms match your search.</div>';
  }
  search.oninput = draw; areaSel.onchange = draw; draw();
}

/* ============================ BOSS MODE ================================= */
/* Generates a fresh Paper-2-style 90-mark paper each time, drawn ONLY from
   the CO4–CO8 question bank: ≥1×12, ≥2×9, ≥4×6, the rest short (1–4).      */
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[a[i],a[j]]=[a[j],a[i]];}return a;}
function pick(arr, n){return shuffle(arr).slice(0, n);}

function generateBossPaper() {
  const twelve = pick(BOSS.twelve, 1);
  const nine   = pick(BOSS.nine, 2);
  const six    = pick(BOSS.six, 4);
  // short questions to fill ~ the rest of 90 marks (target ≈ 45 short marks)
  const longMarks = 12 + 9*2 + 6*4; // 54
  let shortTarget = 90 - longMarks;  // 36
  const shortPool = shuffle(BOSS.short); const shorts = []; let acc = 0;
  for (const q of shortPool) { if (acc >= shortTarget) break; shorts.push(q); acc += q.marks; }
  const sectionA = shuffle([...shorts]);                 // short answers
  const sectionB = shuffle([...six, ...nine, ...twelve]); // scenario / extended
  const total = sectionA.reduce((s,q)=>s+q.marks,0) + sectionB.reduce((s,q)=>s+q.marks,0);
  return { sectionA, sectionB, total };
}

let BOSS_PAPER = null;
function renderBoss(view) {
  touchStreak();
  BOSS_PAPER = generateBossPaper();
  const p = BOSS_PAPER;
  view.innerHTML = `
    <div class="crumb">Final challenge · always open</div>
    <h1>👾 BOSS MODE — Full Paper 2 Mock</h1>
    <div class="card">
      <p><strong>${p.total} marks.</strong> A freshly generated, Pearson-style Paper 2: short answers in Section A, then 6, 9 and 12-mark scenario questions in Section B. A brand-new paper is generated <strong>every time</strong> you enter — all strictly from CO4–CO8.</p>
      <p style="color:var(--ink-faint)">Best so far: ${state.bossBest}%. ${CONTENT.areas.every(areaCleared)?'✔ All areas cleared — you\'re exam ready!':'Tip: clear all topic tests for the full experience (Boss Mode is never locked though).'}</p>
      <div class="callout tip">${LONG_ANSWER_FRAME}</div>
      <div class="row"><button class="btn" onclick="go('boss')">🔄 Generate a new paper</button></div>
    </div>

    <h2>Section A — Short answer</h2><div id="bA"></div>
    <h2>Section B — Scenario &amp; extended response</h2><div id="bB"></div>

    <div class="card">
      <button class="btn" id="bMark">Mark MCQs &amp; reveal full mark scheme</button>
      <div id="bResult"></div>
    </div>`;

  const A = view.querySelector('#bA');
  p.sectionA.forEach((q, i) => {
    if (q.opts) A.appendChild(mcqBlock(q, i, 'b'));
    else A.appendChild(writtenBlock(q, i, 'ba', 'Question'));
  });
  const B = view.querySelector('#bB');
  p.sectionB.forEach((q, i) => B.appendChild(writtenBlock(
    { q: q.q, scenario: q.scenario, marks: q.marks, levels: String(q.marks), indicative: q.indicative, model: q.model, cmd: q.cmd }, i, 'bb', 'Question')));

  view.querySelector('#bMark').onclick = () => {
    let correct = 0, mcqCount = 0;
    p.sectionA.forEach((q, i) => { if (q.opts) { mcqCount++; if (gradeMCQ(q, i, 'b')) correct++; } });
    const pct = mcqCount ? Math.round(100*correct/mcqCount) : 0;
    if (pct > state.bossBest) state.bossBest = pct;
    earn('boss-slain'); addXP(XP.boss); save();
    view.querySelector('#bResult').innerHTML =
      `<div class="result ${pct>=70?'pass':'fail'}" style="margin-top:14px"><div class="score">${pct}%</div>
        <div>${correct}/${mcqCount} MCQs correct. Self-mark your written answers using the model answers and levels grids revealed above.</div></div>`;
  };
}

/* ============================ AI STUDY BOT ============================== */
const STOP = new Set('the a an of to and or in on for is are be with that this it as by at from into your you their our can will may also which what why how when who'.split(' '));
function tokens(s){return (s.toLowerCase().match(/[a-z0-9]+/g)||[]).filter(w=>w.length>2&&!STOP.has(w));}

function aiAnswer(query) {
  const qt = tokens(query);
  if (!qt.length) return { text: 'Ask me about anything in CO4–CO8 — for example “What is device hardening?” or “Explain the CIA triad.”' };
  // score each indexed passage by keyword overlap
  let best = null, bestScore = 0;
  for (const e of AI_INDEX) {
    const et = tokens(e.section + ' ' + e.text);
    const set = new Set(et);
    let score = 0; qt.forEach(w => { if (set.has(w)) score++; });
    // light boost if the query word appears in the section title
    qt.forEach(w => { if (e.section.toLowerCase().includes(w)) score += 1.5; });
    if (score > bestScore) { bestScore = score; best = e; }
  }
  if (!best || bestScore < 1) {
    return { text: "I can only help with content from this course (CO4–CO8 of T Level DSS Core Paper 2). I couldn't find that in the material — try rephrasing using a topic from the syllabus (e.g. firewalls, GDPR, RAID, stakeholders, quantum computing)." };
  }
  // trim passage to ~2 sentences around the first matched keyword
  const sentences = best.text.split(/(?<=[.!?])\s+/);
  let lead = sentences.filter(s => { const st = new Set(tokens(s)); return qt.some(w => st.has(w)); }).slice(0, 3).join(' ');
  if (!lead) lead = sentences.slice(0, 2).join(' ');
  return { text: lead, ref: `${best.areaCode} — ${best.areaTitle}, ${best.section}` };
}

function openAI() { document.getElementById('aiPanel').classList.add('open'); document.getElementById('aiText').focus(); }
function buildAIPanel() {
  const panel = document.createElement('div');
  panel.id = 'aiPanel'; panel.className = 'ai-panel';
  panel.innerHTML = `
    <div class="ai-head">🤖 <b>STUDY BOT</b> <span style="color:var(--ink-faint);font-size:11px">CO4–CO8 only</span>
      <button class="x" id="aiClose">✕</button></div>
    <div class="ai-log" id="aiLog">
      <div class="ai-msg bot">Hi! I'm restricted to your Paper 2 course content (CO4–CO8). Ask me to explain a term or topic and I'll point you to the exact content area.</div>
    </div>
    <div class="ai-suggest" id="aiSuggest"></div>
    <div class="ai-input"><input id="aiText" placeholder="Ask about CO4–CO8…" autocomplete="off"><button id="aiSend">Ask</button></div>`;
  document.body.appendChild(panel);
  document.getElementById('aiClose').onclick = () => panel.classList.remove('open');
  const send = () => {
    const inp = document.getElementById('aiText'); const q = inp.value.trim(); if (!q) return;
    const log = document.getElementById('aiLog');
    log.insertAdjacentHTML('beforeend', `<div class="ai-msg user">${escapeHTML(q)}</div>`);
    const a = aiAnswer(q);
    log.insertAdjacentHTML('beforeend', `<div class="ai-msg bot">${a.text}${a.ref?`<span class="ref">📚 Source: ${a.ref}</span>`:''}</div>`);
    inp.value = ''; log.scrollTop = log.scrollHeight;
  };
  document.getElementById('aiSend').onclick = send;
  document.getElementById('aiText').addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  const sugg = ['What is device hardening?','Explain the CIA triad','What is a stakeholder?','Benefits of virtual environments','What is phishing?','Quantum computing impact'];
  document.getElementById('aiSuggest').innerHTML = sugg.map(s => `<button>${s}</button>`).join('');
  document.querySelectorAll('#aiSuggest button').forEach(b => b.onclick = () => { document.getElementById('aiText').value = b.textContent; send(); });
}
function escapeHTML(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

/* ------------------------------ boot ----------------------------------- */
function boot() {
  renderHUD(); buildNav(); buildAIPanel();
  document.getElementById('aiFab').onclick = openAI;
  document.getElementById('navToggle').onclick = () => document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('resetBtn').onclick = () => {
    if (confirm('Reset ALL progress, XP, badges and unlocked tests?')) { localStorage.removeItem(SAVE_KEY); state = defaultState(); save(); renderHUD(); buildNav(); go('home'); toast('Progress reset.'); }
  };
  document.querySelectorAll('.nav-special').forEach(b => b.onclick = () => go(b.dataset.route));
  go('home');
}
function toast(msg, gold) {
  const t = document.createElement('div'); t.className = 'toast' + (gold ? ' gold' : ''); t.textContent = msg;
  document.getElementById('toasts').appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .4s'; setTimeout(() => t.remove(), 400); }, 2600);
}
document.addEventListener('DOMContentLoaded', boot);
