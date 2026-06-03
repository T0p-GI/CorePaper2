# CyberCore — Paper 2 Revision Arena

An interactive, gamified revision website for the **T Level Digital Support & Security – Core Paper 2** exam.
Black + red-glow theme. No build step, no dependencies — just open it in a browser.

## What it covers (CO4–CO8 only)
All content comes **strictly from the five Paper 2 content areas**. The official Pearson Paper 2
question paper + mark scheme were used **only** as a style/structure template (command words,
mark distribution, levels-based grids) — not as a source of new topics.

| Area | Title | Units |
|------|-------|-------|
| CO4 | Legislation & Regulatory Requirements | 4.1 Legislation · 4.2 Guidelines & Standards |
| CO5 | Business Context | 5.1 Environment · 5.2 Digital Value · 5.3 Risks · 5.4 Change Management |
| CO6 | Emerging Technologies & Issues | 6.1 Impact of Digital Tech · 6.2 Emerging Technologies |
| CO7 | Digital Environments | 7.1 Hardware · 7.2 Software · 7.3 Networks · 7.4 Virtual · 7.5 Cloud · 7.6 Resilience |
| CO8 | Security | 8.1 Risks · 8.2 Threats & Vulnerabilities · 8.3 Mitigation · 8.4 CIA & IAAA |

## Features
- **Per-unit tabs:** Learn · Flashcards · Quiz · Practice · **Like I'm 12** (separate tab) · Topic Test.
- **8–10 MCQs per unit** (1–2 marks each) in the Quiz tab.
- **Flashcards** with front / definition / "like I'm 12" example.
- **Topic tests** mix MCQs + 1–9 mark written questions and always include a **Pearson-style 9-mark scenario** with a full mark scheme + **Level 3 model answer**.
- **Locking:** only topic tests lock — score **70%+** on a unit's MCQ section to unlock the next unit's test. Learning content and Boss Mode are **never** locked.
- **Feedback after tests:** "what went wrong", the correct answer, examiner model answers, and **command-word definitions** (state / identify / give two reasons / what is meant by…).
- **Boss Mode:** generates a fresh **~90-mark Paper-2-style mock every time** (≥1×12, ≥2×9, ≥4×6 + short questions, ~50% long / 50% short) with full mark schemes and Level 3 model answers.
- **Nutshell summary** page for every content area (last-minute revision).
- **AI Study Bot:** answers **only** from CO4–CO8 and cites the content area/section. Refuses off-syllabus questions.
- **Gamification:** XP, levels, daily streak, badges, progress bars. Saved in `localStorage`.

## How to run
**Easiest:** double-click `index.html`.

**Recommended (avoids browser file restrictions):** serve the folder, e.g.
```
cd tlevel-paper2
python -m http.server 8000      # then open http://localhost:8000
```
> ⚠️ Don't open the `.js` files directly via Windows Run — only ever open **index.html** (or serve the folder). Running a `.js` file directly uses Windows Script Host and will error.

## File structure
```
tlevel-paper2/
├── index.html
├── css/styles.css
├── js/
│   ├── data.js     ← registry + command words + levels grids + AI index
│   ├── co4.js … co8.js   ← one content area each (self-registering)
│   ├── boss.js     ← Boss Mode question bank
│   └── app.js      ← engine (routing, tabs, marking, locking, Boss Mode, AI bot)
└── README.md
```

## Extending it
- Add/adjust content by editing the relevant `coX.js` — each unit object follows the schema documented at the top of `js/data.js`. The nav, quizzes, tests and Boss Mode pick it up automatically.
- To add Boss Mode questions, push to `BOSS.short / six / nine / twelve` in `js/boss.js`.

## Accuracy note
Teaching content was generated from your ZigZag CO4/CO5/CO6/CO7 companions and the CO8 specification text.
Always cross-check against the official Pearson specification and your awarding-body materials before relying on it for assessment.
