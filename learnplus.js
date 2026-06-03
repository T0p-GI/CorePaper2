/* =========================================================================
   learnplus.js — DEEP-DIVE LEARN SUPPLEMENTS (appended under each unit's Learn)
   Pearson-style deeper explanation + technical detail + text diagrams +
   real-world scenarios + exam technique + common mistakes + top-mark
   sentence starters. Drawn from CO4–CO8.
   NOTE: teaching content for the Learn tab only. Boss Mode / topic tests use
   the question banks; this text is not parsed into questions.
   ========================================================================= */
const LEARN_PLUS = {
  /* ---------------- CO4 ---------------- */
  'co4-1': `
    <div class="deep-divider"><span class="tagline">Going deeper · 4.1</span><h2 style="margin-top:4px">Mastering Legislation</h2></div>
    <h3>How the data-protection pieces fit together</h3>
    <p>Students lose marks by blurring the laws. Keep this mental map:</p>
    <pre class="diagram">           ┌─────────────────────────────────────────────┐
           │   UK GDPR  (the principles + rights)          │
           │   sits INSIDE → Data Protection Act 2018      │
           └───────────────┬─────────────────────────────┘
                           │ enforced by
                           ▼
                 ICO  → fines up to £17.5m or 4% turnover
                       → breaches reported within 72 hours
   Roles:  DATA SUBJECT (you) — DATA CONTROLLER (decides why/how)
           — DATA PROCESSOR (acts for controller, under a DPA)</pre>
    <h3>The 7 principles — a memory hook</h3>
    <p><strong>"Lawful Purposes Mean Accurate Storage Includes Accountability"</strong> → Lawfulness/fairness/transparency · Purpose limitation · Minimisation · Accuracy · Storage limitation · Integrity &amp; confidentiality · Accountability.</p>
    <h3>The other Acts at a glance</h3>
    <ul class="tight">
      <li><strong>Computer Misuse Act 1990</strong>: (1) unauthorised access; (2) access with intent; (3) unauthorised modification (incl. viruses).</li>
      <li><strong>Equality Act 2010</strong>: 9 protected characteristics; direct/indirect discrimination, harassment, victimisation.</li>
      <li><strong>Health &amp; Safety at Work Act 1974</strong> + <strong>DSE Regs</strong> + <strong>Working at Height Regs</strong>.</li>
      <li><strong>IP</strong>: copyright (automatic) · patents (≤20y, not algorithms) · designs (registered 25y).</li>
    </ul>
    <h3>Real-world scenario</h3>
    <p>A gym keeps members' card details "just in case", emails ex-members marketing, and never deletes old records. That breaches <strong>storage limitation</strong> (kept too long), <strong>purpose limitation</strong> (used beyond the stated reason) and the right to <strong>object to direct marketing</strong>. One ICO complaint could trigger an investigation, fines and reputational damage.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight">
        <li><strong>"State two principles"</strong> (2) — just name two; no explanation.</li>
        <li><strong>"Discuss the legislation…"</strong> (6) — name the Act(s), apply each duty to the <em>specific</em> people in the scenario, give a consequence. For installations always pair <strong>H&amp;S at Work Act</strong> + <strong>Working at Height Regs</strong>.</li>
      </ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Calling a virus "hacking" — it's <em>unauthorised modification</em>.</li>
        <li>Saying "GDPR" alone — name the <em>UK</em> GDPR / Data Protection Act 2018.</li>
        <li>Confusing controller (decides) with processor (acts on instructions).</li>
        <li>Forgetting DSE duties cover home/hybrid workers too.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"Under the <em>[named Act]</em>, the organisation has a duty to…"</li>
        <li>"This applies to the scenario because…"</li>
        <li>"If they fail to do this, the consequence is… (fine / 72-hour report / legal action)."</li></ul></div>`,

  'co4-2': `
    <div class="deep-divider"><span class="tagline">Going deeper · 4.2</span><h2 style="margin-top:4px">Guidelines vs the Law</h2></div>
    <h3>The hierarchy of "rules"</h3>
    <pre class="diagram">  LAW (must obey)          →  GDPR, Computer Misuse, Equality, H&S
  STANDARDS (prove quality)→  ISO 27001/27701/27017, PCI DSS, WCAG
  CODES OF CONDUCT (behave)→  BCS, IAP, CIISec, Civil Service Code
  AUP (internal rules)     →  how users may use THIS org's systems</pre>
    <p>Laws are compulsory; standards/codes are voluntary but often <em>required by clients or to take payments</em> (PCI DSS). An AUP is internal and supports the Computer Misuse Act by defining "unauthorised".</p>
    <h3>Why standards win business</h3>
    <p>Banks/government frequently <strong>refuse to contract</strong> suppliers without ISO 27001, so a standard is a sales gateway as well as a risk reducer. WCAG = <strong>POUR</strong> (Perceivable, Operable, Understandable, Robust).</p>
    <h3>Real-world scenario</h3>
    <p>A start-up taking card payments without <strong>PCI DSS</strong> can be fined and barred from processing cards; adding an <strong>AUP</strong> (no password sharing, lock screens) plus an <strong>ISO 27001</strong> roadmap reassures bank clients and reduces insider risk.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Benefit of a code of conduct to the public" → minimising risk to the public / competence.</li>
        <li>"Purpose of an AUP" → define acceptable/unauthorised use and protect the organisation.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Calling an AUP a "law" — it's an internal policy.</li>
        <li>Mixing up standards: ISO 27001 = security management; PCI DSS = card payments; WCAG = accessibility.</li>
        <li>Listing a code body (BCS) when asked for a standard (ISO) — read the command word.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"Adopting <em>[standard]</em> benefits the organisation because… which means…"</li>
        <li>"This is especially important here because the firm handles…"</li></ul></div>`,

  /* ---------------- CO5 ---------------- */
  'co5-1': `
    <div class="deep-divider"><span class="tagline">Going deeper · 5.1</span><h2 style="margin-top:4px">Reading a Business Scenario</h2></div>
    <h3>Stakeholder map</h3>
    <pre class="diagram">          INTERNAL                 |        EXTERNAL
   owners · directors · employees  |  customers · suppliers
                                   |  shareholders · investors
        (inside, run it)           |  government · outsourced services
                                   |     (outside, affected by it)</pre>
    <p>Tip: "<em>other</em> external stakeholders" blocks the obvious answer (customers), so reach for suppliers, shareholders, investors or government.</p>
    <h3>Why sector matters</h3>
    <p><strong>Private</strong> chases profit, <strong>public</strong> delivers a service from taxes, <strong>third</strong> reinvests for a cause. This changes what "success" and "risk" mean for that organisation. Models: <strong>B2C / B2B / B2M</strong>.</p>
    <h3>Real-world scenario</h3>
    <p>Python Junction (a B2C SME) launching a loyalty app must please <strong>customers</strong> (adoption), train <strong>staff</strong> (delivery) and keep <strong>suppliers</strong> able to meet demand — ignoring any one risks a failed launch.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>2-mark "state two stakeholders" → list, don't explain.</li>
        <li>Classify the organisation (sector, size, B2B/B2C) early — it frames every later point.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Listing employees/owners when asked for <em>external</em> stakeholders.</li>
        <li>Confusing "shareholder" (external) with "stakeholder".</li>
        <li>Calling a charity "public sector" — it's third sector.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"As a <em>[sector/B2C]</em> organisation, its priority is…"</li>
        <li>"This stakeholder matters because the launch affects them by…"</li></ul></div>`,

  'co5-2': `
    <div class="deep-divider"><span class="tagline">Going deeper · 5.2</span><h2 style="margin-top:4px">Digital Value, Function by Function</h2></div>
    <p>Anchor each point to a <strong>named function</strong> and a <strong>consequence</strong>:</p>
    <table class="data"><tr><th>Function</th><th>System</th><th>Consequence (the mark)</th></tr>
      <tr><td>Marketing</td><td>Analytics + loyalty data</td><td>personalised offers → higher retention</td></tr>
      <tr><td>Logistics</td><td>Automatic stock control</td><td>fewer shortages → fewer lost sales</td></tr>
      <tr><td>Finance</td><td>Automated invoicing</td><td>faster payment → better cash flow</td></tr>
      <tr><td>HR</td><td>Self-service portal</td><td>less admin → managers focus on people</td></tr></table>
    <h3>User-need quality factors</h3>
    <p>Functionality · reduced pain points · accessibility · compatibility · 24/7 availability · effective support · ease of installation — each is a ready-made point for "how does this benefit users".</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Explain one way…" (2) = point + linked consequence ("…which means…").</li>
        <li>Name the function — vague answers ("computers help") score Level 1.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Describing the technology but never stating the <em>benefit/consequence</em>.</li>
        <li>Repeating the same point in different words for a "two ways" question.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"In the <em>[function]</em> area, a <em>[system]</em> allows the organisation to… which means…"</li></ul></div>`,

  'co5-3': `
    <div class="deep-divider"><span class="tagline">Going deeper · 5.3</span><h2 style="margin-top:4px">Risk → Impact chains</h2></div>
    <p>Connect a <strong>risk</strong> to its <strong>impact</strong>:</p>
    <pre class="diagram"> RISK                         →  IMPACT
 security/privacy breach      →  fines + reputational damage + loss of business
 regulatory non-compliance    →  legal action + loss of licence to practise
 audience exclusion           →  lost customers + discrimination claims
 technical failure/downtime   →  lost sales + loss of trust</pre>
    <p>Confidentiality = data kept private; <strong>Integrity</strong> = data not altered; <strong>Availability</strong> = service usable. Different incidents hit different ones (a DoS hits availability; a leak hits confidentiality).</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"State two impacts" (2) → fines, legal action, reputational damage, loss of business, loss of licence.</li>
        <li>"Explain one impact" → always end with a business consequence (lost sales/customers).</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Naming a <em>risk</em> when asked for an <em>impact</em> (a breach is a risk; a fine is the impact).</li>
        <li>Stopping at "they lose data" without the business consequence.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"One risk is… which could lead to… meaning the organisation…"</li></ul></div>`,

  'co5-4': `
    <div class="deep-divider"><span class="tagline">Going deeper · 5.4</span><h2 style="margin-top:4px">Managing Change Like a Pro</h2></div>
    <pre class="diagram"> TRIGGERS                         MANAGE IT                 CHECK IT
 internal: restructure/expand   plan (business case)      SMARTER objectives
 external: PESTLE               CAB prioritise/approve    monitor + review
 + new/obsolete tech, failures  communicate + train       feasibility (TELOS)</pre>
    <h3>The human side</h3>
    <p>Most change failures are about <strong>people, not technology</strong>: staff resist what they didn't choose and fear (e.g. job loss). Communication, involvement and training convert resistance into support — usually the strongest evaluation point.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"State two external factors" → PESTLE letters.</li>
        <li>"How should they manage this change" (6/9) → lead with communication + training, then CAB/SMARTER/phased rollout, then a conclusion balancing speed vs morale.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Listing internal factors when asked for external (PESTLE) and vice-versa.</li>
        <li>Only describing the tech change and ignoring the staff/communication side.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"To reduce resistance, the organisation should… because…"</li>
        <li>"Overall the change is most likely to succeed if… though this depends on…"</li></ul></div>`,

  /* ---------------- CO6 ---------------- */
  'co6-1': `
    <div class="deep-divider"><span class="tagline">Going deeper · 6.1</span><h2 style="margin-top:4px">Impact — Both Sides, Every Time</h2></div>
    <p>Impact questions are evaluation questions in disguise. For each impact, give upside AND downside:</p>
    <table class="data"><tr><th>Change</th><th>Upside</th><th>Downside</th></tr>
      <tr><td>Monitoring</td><td>security, fairness</td><td>privacy, morale, stress</td></tr>
      <tr><td>Automation/AI</td><td>productivity, new roles</td><td>job loss, reskilling</td></tr>
      <tr><td>Remote/hybrid</td><td>flexibility, no commute</td><td>"always on", burnout</td></tr></table>
    <h3>Digital inclusion</h3>
    <p>Exclusion isn't only about devices — <strong>skills, connectivity, bias and design</strong> all exclude. Fixes: affordable/assistive tech, rural connectivity, dataset-bias checks, accessibility regulations.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Two impacts on organisational culture" → communication change, monitoring, productivity pressure, new practices, automation.</li>
        <li>Top answers mention a <strong>mitigation</strong> (communicate, train, monitor proportionately).</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Only giving positives (or only negatives) in an impact answer.</li>
        <li>Vague "it's good for business" with no specific cultural/social effect.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"One positive impact is… however a negative impact is… which could be reduced by…"</li></ul></div>`,

  'co6-2': `
    <div class="deep-divider"><span class="tagline">Going deeper · 6.2</span><h2 style="margin-top:4px">Emerging Tech — Opportunity vs Risk</h2></div>
    <h3>Quantum, simply</h3>
    <pre class="diagram"> classic bit:  0  OR  1
 qubit:        0  AND 1  (superposition) + entanglement
 → massive parallelism for SOME problems
 → could BREAK today's encryption (security ↓)
 → still: unstable, error-prone, needs near-absolute-zero</pre>
    <p>Pattern for any emerging tech (AI, IoT, blockchain, AR/VR): state <strong>what it does</strong>, an <strong>organisational benefit</strong>, and a <strong>risk</strong> (security/privacy/bias/cost), then judge suitability.</p>
    <h3>Real-world scenario</h3>
    <p>A retailer using <strong>AI</strong> on customer data gains personalisation and pattern-spotting, but risks privacy breaches, bias from skewed data, and reputational harm if intrusive — mitigated by governance, transparency and human oversight.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"One way quantum computing could impact an organisation" → faster problem-solving OR decreased security (breaking encryption).</li>
        <li>"AI benefit + drawback" → efficiency/automation vs job loss/bias.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Describing what quantum/AI <em>is</em> without giving the <em>impact on the organisation</em>.</li>
        <li>Treating generative AI and machine learning as the same thing.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"This technology could benefit the organisation by… however a risk is…"</li></ul></div>`,

  /* ---------------- CO7 ---------------- */
  'co7-1': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.1</span><h2 style="margin-top:4px">Inside the Machine</h2></div>
    <pre class="diagram"> CPU  ── fetches/executes instructions (speed = clock GHz × cores, + cache)
  │
 RAM  ── fast, VOLATILE working memory (lost at power-off)
 ROM  ── non-volatile firmware (BIOS/UEFI) to boot
 Secondary storage (HDD/SSD) ── cheap, non-volatile, long-term</pre>
    <p>Servers differ from desktops by <strong>reliability engineering</strong>: dual PSUs, multiple NICs and RAID so they keep running through component failure.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Two differences RAM vs ROM" → volatile/non-volatile; read-write/read-only; working data/boot firmware.</li>
        <li>Justify hardware by the <strong>task</strong> (heavy graphics → desktop power; travel → laptop portability).</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Saying RAM "stores files permanently" — it's volatile.</li>
        <li>Confusing memory (RAM/ROM) with storage (HDD/SSD).</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"A server is more suitable than a desktop here because…"</li></ul></div>`,

  'co7-2': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.2</span><h2 style="margin-top:4px">Software Layers</h2></div>
    <pre class="diagram"> APPLICATIONS  (Word, browser, CAD)   ← what you use
 UTILITIES     (antivirus, backup)    ← keep it healthy
 OPERATING SYSTEM                     ← manages HW, memory, files, users, UI
 HARDWARE</pre>
    <p>Compiler (translates all code first) vs interpreter (line by line). Version control (Git) = save-history + safe teamwork + rollback. SaaS = software via the browser (no install) but internet-dependent.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Two OS functions" → manage memory / files / processes / users-security / UI.</li>
        <li>SaaS drawback = relies on internet + ongoing cost + less customisation.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Calling an application (Word) an "operating system".</li>
        <li>Listing "antivirus" as an OS function — it's utility software.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"The operating system is essential because it…"</li></ul></div>`,

  'co7-3': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.3</span><h2 style="margin-top:4px">Networks — the Big One</h2></div>
    <h3>Star topology</h3>
    <pre class="diagram">     [PC]   [PC]   [Printer]
        \\    |    /
         \\   |   /
          [ SWITCH ]   ← single point of failure
         /   |   \\
     [PC]  [Server] [PC]</pre>
    <h3>OSI (7) vs TCP/IP (4)</h3>
    <pre class="diagram"> OSI:  Application·Presentation·Session·Transport·Network·Data link·Physical
       ("A Penguin Said That Newts Drink Pepsi")
 TCP/IP: Application · Transport · Internet · Network access</pre>
    <h3>Packet anatomy</h3>
    <pre class="diagram"> [ HEADER: source · destination · TTL · checksum ][ PAYLOAD: data ][ FOOTER: CRC ]</pre>
    <p>Router = to the internet; switch = within the LAN. Bandwidth = capacity (bps); latency = delay (ms). Mail: SMTP sends, POP3 downloads to one device, IMAP syncs across devices.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Two mail protocols other than SMTP" → POP3 + IMAP, each with a use.</li>
        <li>Evaluate star topology: easy fault-finding/secure/scalable vs central single point of failure (add a backup switch).</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Swapping router and switch.</li>
        <li>Saying high bandwidth = low latency (they're different things).</li>
        <li>Listing SMTP when asked for protocols "other than SMTP".</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"A star topology is suitable here because… although a drawback is…"</li></ul></div>`,

  'co7-4': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.4</span><h2 style="margin-top:4px">Virtual Environments</h2></div>
    <pre class="diagram">  ┌── VM1 ──┐ ┌── VM2 ──┐ ┌── VM3 ──┐   each isolated (own OS/CPU share/disk)
  │  OS+app │ │  OS+app │ │  OS+app │
  └─────────┘ └─────────┘ └─────────┘
        ▲ HYPERVISOR (shares one host's CPU/RAM/storage)
        ▲ PHYSICAL HOST SERVER</pre>
    <p>Key wins: <strong>isolation</strong> (one VM's crash/virus doesn't spread), <strong>portability</strong> (move/restore whole machines), <strong>snapshots</strong> (fast disaster recovery), cost savings (many VMs per host). Risk: breach the hypervisor → all VMs exposed; plus high initial host cost.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>For "virtual vs physical machines" (the conflicting-versions scenario) → isolation removes version conflicts; conclude for VMs with conditions.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Forgetting the drawbacks (host cost, expertise, hypervisor as a single point of compromise).</li>
        <li>Confusing a VM with the cloud — a VM can be on-premises.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"Virtual environments suit this scenario because isolation means…"</li></ul></div>`,

  'co7-5': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.5</span><h2 style="margin-top:4px">Cloud Responsibility</h2></div>
    <pre class="diagram">           On-prem   IaaS    PaaS    SaaS
 Apps        you      you     you     PROVIDER
 Data        you      you     you     you*
 Runtime     you      you     PROV    PROV
 OS          you      you     PROV    PROV
 Servers     you      PROV    PROV    PROV
 (down the list → provider does more, you customise less)</pre>
    <p>Public cloud = shared, pay-as-you-go, elastic; private = dedicated, more control. <strong>Elasticity</strong> is the killer feature for spiky demand (scale up for Black Friday, down after).</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>Spiky/variable demand → argue cloud + elasticity + pay-as-you-go.</li>
        <li>Always raise GDPR/data-location as the condition on a "move to public cloud" answer.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Saying cloud is "always cheaper" — billing is variable and can grow.</li>
        <li>Mixing up IaaS/PaaS/SaaS responsibilities.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"A public cloud suits this business because its demand is… so elasticity means…"</li></ul></div>`,

  'co7-6': `
    <div class="deep-divider"><span class="tagline">Going deeper · 7.6</span><h2 style="margin-top:4px">Resilience &amp; Recovery</h2></div>
    <pre class="diagram"> KEEP RUNNING (redundancy)   |  RECOVER (backups)
 RAID, dual PSU, UPS, 2×NIC  |  full/incremental/differential
 mirrored data, >1 server    |  store OFF-SITE / cloud
                             |  TEST the recovery!
 SITES:  hot (instant) · warm (some work) · cold (set up later)</pre>
    <p>RAID protects against a <strong>drive</strong> failing — it does <em>not</em> protect against fire, theft or ransomware (drives are together), so RAID + off-site backups is the winning combo. Device hardening reduces the attack surface.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>RAID evaluation: redundancy + faster restore vs cost/expertise + "not off-site protection".</li>
        <li>"Benefit of device hardening" → reduces attack surface → harder unauthorised access.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Claiming RAID is a backup — it isn't (no protection from fire/ransomware).</li>
        <li>Forgetting to say backups must be <em>tested</em> and <em>off-site</em>.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"RAID improves resilience because… but it should be combined with… because…"</li></ul></div>`,

  /* ---------------- CO8 ---------------- */
  'co8-1': `
    <div class="deep-divider"><span class="tagline">Going deeper · 8.1</span><h2 style="margin-top:4px">What's Confidential &amp; Why</h2></div>
    <pre class="diagram"> CONFIDENTIAL DATA       WHY KEEP IT SECRET          IF LEAKED
 salaries/staff details  stop poaching/disputes      loss of trust
 IP / contracts          stop copying/competitor edge image damage
 client details          privacy / stop poaching      fines, legal action
 passwords/PINs/biometrics prevent unauthorised access financial loss / lost licence</pre>
    <p>The same breach can hit <strong>several</strong> impacts at once (trust + fines + lost business), which is how you build a strong 9-mark answer.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>The real paper's Q1 was exactly this: "state two other impacts of failing to maintain privacy/confidentiality" → non-compliance/loss of licence, image damage, financial loss, legal action, reduced security.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Giving the same impact twice (e.g. "fines" and "financial loss") for a "two impacts" question.</li>
        <li>Explaining <em>how</em> data leaks when the question asks for the <em>impact</em>.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"Failing to keep <em>[data]</em> confidential could lead to… because…"</li></ul></div>`,

  'co8-2': `
    <div class="deep-divider"><span class="tagline">Going deeper · 8.2</span><h2 style="margin-top:4px">Threats, Vulnerabilities &amp; Mitigations</h2></div>
    <pre class="diagram"> THREAT (the attack)        exploits  VULNERABILITY (the weakness)
 malware / DoS / hacking      ←──      out-of-date software, no MFA
 phishing/social engineering  ←──      untrained staff
 disguised criminal/tailgating←──      poor physical access control
 → IMPACT: data loss/leak · unauthorised access · corruption · downtime</pre>
    <p>Classify carefully: a <strong>threat</strong> is the danger; a <strong>vulnerability</strong> is the gap that lets it work. Social-engineering family by channel: phishing (email), smishing (SMS), vishing (voice), pharming, USB baiting.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Protect against poor cyber hygiene" → lock unattended machines / don't write passwords down.</li>
        <li>"Prevent a disguised criminal" → accompany visitors + check ID.</li>
        <li>"Mitigate a DoS" → firewall, IPS, rate limiting, load balancer/redundancy.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Calling a vulnerability a threat (no MFA = vulnerability; malware = threat).</li>
        <li>Naming an attack but not a <em>prevention/mitigation</em> when asked.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"One way to mitigate this is… which works because…"</li></ul></div>`,

  'co8-3': `
    <div class="deep-divider"><span class="tagline">Going deeper · 8.3</span><h2 style="margin-top:4px">Defence in Depth</h2></div>
    <pre class="diagram"> LAYERED MITIGATION
 ┌ network: firewall (IP/port/app/in-out rules), segregation, monitoring
 ├ data:    encryption (symmetric/asymmetric), hashing for passwords, backups
 ├ access:  MFA, password managers, least-privilege, access policies
 └ people:  staff training, vetting; + device hardening, patching, pen testing</pre>
    <p>No single control is enough — attackers exploit the weakest layer. <strong>Encryption</strong> protects confidentiality (unreadable if stolen); <strong>hashing</strong> is one-way for passwords; <strong>MFA</strong> means a stolen password alone fails.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"Two ways a firewall controls incoming traffic" → IP-address rules + traffic-type (port/protocol) rules.</li>
        <li>Best 9-mark security answers say <strong>layered/defence-in-depth</strong> and prioritise the highest-risk gap first.</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Saying hashing is "reversible" — it's one-way.</li>
        <li>Treating one control (e.g. antivirus) as total protection.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"A layered approach is most suitable: first… then… so that…"</li></ul></div>`,

  'co8-4': `
    <div class="deep-divider"><span class="tagline">Going deeper · 8.4</span><h2 style="margin-top:4px">CIA &amp; IAAA</h2></div>
    <pre class="diagram"> CIA TRIAD                IAAA (the login journey)
   Confidentiality        Identification  → "I'm Sam" (username)
        △                 Authentication  → "prove it" (password/biometric/MFA)
       / \\                Authorisation   → "what can Sam do?" (role/ACL)
 Integrity─Availability   Accountability  → audit logs trace what Sam did</pre>
    <p>CIA = the <em>goals</em>; IAAA = the <em>controls</em> that deliver them. They interrelate: confidentiality supports integrity, which supports availability.</p>
    <div class="exam-box"><h4>In the exam</h4>
      <ul class="tight"><li>"What is meant by confidentiality?" → keeping data private by controlling who can access it.</li>
        <li>Match an incident to the CIA goal it breaks (DoS → availability; leak → confidentiality; tampering → integrity).</li></ul></div>
    <div class="callout"><strong>⚠️ Common mistakes</strong>
      <ul class="tight"><li>Confusing authentication (prove identity) with authorisation (what you may do).</li>
        <li>Thinking CIA is about spies — it's Confidentiality, Integrity, Availability.</li></ul></div>
    <div class="callout k12"><strong>✍️ Top-mark sentence starters</strong>
      <ul class="tight"><li>"This measure supports <em>[CIA goal]</em> because…"</li></ul></div>`
};
