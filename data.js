/* =========================================================================
   data.js — Core registry + shared constants
   CyberCore Paper 2 — T Level Digital Support & Security (Core Paper 2)

   CONTENT MODEL
   -------------
   CONTENT.areas = [ areaObject, ... ]   (built up by co4.js … co8.js)

   areaObject = {
     id, code, title, blurb,
     units: [ unitObject, ... ],
     nutshell: "<html>"          // end-of-area "everything in a nutshell" page
   }

   unitObject = {
     id, code, title,
     learn:  "<html>",           // teaching content
     like12: "<html>",           // "Explain like I'm 12" tab content
     flashcards: [ {front, back, k12} ],
     quiz:   [ {q, opts:[], a:index, marks, fb} ],        // 8–10 MCQs (1–2 marks)
     practice: [ questionObject ],
     test:   { mcq:[…], structured:[…], nine: nineMarker }
   }

   A "questionObject" (practice / structured / boss) =
     { q, marks, cmd, model, points:[…] }              // points-based
   A long question may instead carry { levels:'9'|'6'|'12', indicative:[…], model }

   nineMarker = { scenario, q, marks:9, indicative:[…], model, markPoints:[…] }

   IMPORTANT: All content is drawn ONLY from CO4–CO8. The official Pearson
   Paper 2 question paper + mark scheme are used ONLY as a style/structure
   template (command words, mark distribution, levels-based grids).
   ========================================================================= */

const CONTENT = { areas: [] };

/* Each area module calls this to register itself, in order. */
function registerArea(area) { CONTENT.areas.push(area); }

/* ---- Command-word definitions (shown in test feedback) -------------------
   Wording mirrors how Pearson uses these command words in Paper 2.        */
const COMMAND_WORDS = {
  'state':        '“State” — give a short, simple fact or point. No explanation needed.',
  'identify':     '“Identify” — pick out or name something relevant. One or two words / a short phrase.',
  'give':         '“Give” — provide a short answer such as a fact, reason or example. “Give two…” means two separate valid points.',
  'name':         '“Name” — state the correct term only.',
  'describe':     '“Describe” — give a clear account of the main features/characteristics. More than just naming it.',
  'explain':      '“Explain” — make something clear by giving a point AND a linked reason/consequence (point → because → so that…).',
  'discuss':      '“Discuss” — explore the topic, considering different aspects or sides, and develop the points.',
  'evaluate':     '“Evaluate” — weigh up competing points (for/against), apply them to the scenario, and reach a supported conclusion/judgement.',
  'assess':       '“Assess” — weigh up the importance/quality of factors and give a reasoned judgement.',
  'analyse':      '“Analyse” — break the situation into parts and examine how they connect.',
  'what is meant':'“What is meant by…” — define the term in your own words.',
  'compare':      '“Compare” — identify similarities and/or differences between two things.',
  'justify':      '“Justify / with additional justification” — give a reason for your point, then a further linked reason that backs it up.'
};

/* Detect which command word(s) a question uses, for the feedback panel. */
function detectCommandWords(text) {
  const t = (text || '').toLowerCase();
  const hits = [];
  if (t.includes('what is meant')) hits.push('what is meant');
  ['state','identify','give','name','describe','explain','discuss','evaluate','assess','analyse','compare','justify']
    .forEach(w => { if (new RegExp('\\b' + w).test(t)) hits.push(w); });
  return [...new Set(hits)].map(k => COMMAND_WORDS[k]).filter(Boolean);
}

/* ---- Levels-based mark scheme descriptors --------------------------------
   Copied in style from the official Paper 2 mark scheme (AO3a / AO2b / AO3b).
   Used to mark every 6 / 9 / 12-mark question consistently.               */
const LEVELS = {
  '6': [
    { lv: 'Level 0', range: '0',   desc: 'No rewardable material.' },
    { lv: 'Level 1', range: '1–2', desc: 'Basic analysis — superficially breaks the situation into parts (AO3a). Basic application that is only partly relevant to the context (AO2b).' },
    { lv: 'Level 2', range: '3–4', desc: 'Good analysis — breaks the situation into component parts (AO3a). Good application that is relevant to the context (AO2b).' },
    { lv: 'Level 3', range: '5–6', desc: 'Thorough analysis — comprehensively breaks the situation into its parts (AO3a). Comprehensive application that is consistently relevant to the context (AO2b).' }
  ],
  '9': [
    { lv: 'Level 0', range: '0',   desc: 'No rewardable material.' },
    { lv: 'Level 1', range: '1–3', desc: 'Basic analysis (AO3a), basic application partly relevant to context (AO2b), and a basic evaluation leading to a superficial/unsupported conclusion (AO3b).' },
    { lv: 'Level 2', range: '4–6', desc: 'Good analysis (AO3a), good application relevant to context (AO2b), and a good evaluation of competing points leading to a partially-supported conclusion (AO3b).' },
    { lv: 'Level 3', range: '7–9', desc: 'Thorough analysis (AO3a), comprehensive application consistently relevant to context (AO2b), and a thorough evaluation of competing points leading to a well-supported conclusion (AO3b).' }
  ],
  '12': [
    { lv: 'Level 0', range: '0',    desc: 'No rewardable material.' },
    { lv: 'Level 1', range: '1–4',  desc: 'Basic analysis (AO3a), basic application partly relevant (AO2b), basic evaluation → superficial/unsupported conclusion (AO3b).' },
    { lv: 'Level 2', range: '5–8',  desc: 'Good analysis (AO3a), good application relevant to context (AO2b — weighted ×2, so a range of relevant factors is considered), good evaluation → partially-supported conclusion (AO3b).' },
    { lv: 'Level 3', range: '9–12', desc: 'Thorough analysis (AO3a), comprehensive application consistently relevant (AO2b ×2), thorough evaluation of competing points → well-supported conclusion (AO3b).' }
  ]
};

/* How to write a top-level long answer (shown beside model answers). */
const LONG_ANSWER_FRAME =
  'Structure → make a point, <strong>explain</strong> it (because…), <strong>apply</strong> it to the scenario, ' +
  'give a <strong>consequence</strong> (so that…). For evaluate questions, cover <strong>both sides</strong>, use ' +
  '<strong>examples & comparisons</strong>, then give a <strong>supported conclusion/judgement</strong> that links back to the scenario.';

/* Gamification config */
const XP = { mcq: 10, practiceShort: 25, practiceLong: 60, testPass: 150, boss: 400, flashSet: 20 };
const PASS_MARK = 0.70; // 70% required to unlock the next topic test

/* Badges (id, icon, name, hidden check done in app.js) */
const BADGES = [
  { id: 'first-steps', ico: '🥾', nm: 'First Steps' },
  { id: 'co4-clear',   ico: '⚖️', nm: 'Law Maker' },
  { id: 'co5-clear',   ico: '🏢', nm: 'Boardroom' },
  { id: 'co6-clear',   ico: '🚀', nm: 'Futurist' },
  { id: 'co7-clear',   ico: '🖧',  nm: 'Net Runner' },
  { id: 'co8-clear',   ico: '🛡️', nm: 'Blue Team' },
  { id: 'boss-slain',  ico: '👾', nm: 'Boss Slayer' },
  { id: 'streak-3',    ico: '🔥', nm: '3-Day Streak' },
  { id: 'flawless',    ico: '💯', nm: 'Flawless Test' }
];

/* ---- AI Study Bot knowledge base ----------------------------------------
   Each area module pushes indexed passages here so the bot can answer ONLY
   from CO4–CO8 and quote/cite the relevant section.                        */
const AI_INDEX = [];
function indexKB(areaCode, areaTitle, section, text) {
  AI_INDEX.push({ areaCode, areaTitle, section, text });
}
