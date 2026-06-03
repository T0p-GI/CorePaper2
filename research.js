/* =========================================================================
   research.js — DEEP RESEARCH (beyond-spec enrichment), per unit
   Purpose: widen the learner's understanding of each unit's topic.
   IMPORTANT: this content is BEYOND the CO4–CO8 spec. It is deliberately
   NOT added to AI_INDEX and is NOT referenced by Boss Mode or the topic
   tests — those stay strictly within CO4–CO8. Sources named are real,
   well-known authorities to explore (start at their official sites).
   ========================================================================= */
const RESEARCH = {
  /* ---------------- CO4 ---------------- */
  'co4-1': `
    <h2>Wider context: how data law actually works</h2>
    <p>The spec covers the core Acts; here's the richer picture that makes them click.</p>
    <h3>Lawful bases for processing</h3>
    <p>UK GDPR doesn't just say "get consent" — there are <strong>six lawful bases</strong>: consent, contract, legal obligation, vital interests, public task, and legitimate interests. Real organisations pick the right basis per activity (e.g. payroll uses "contract/legal obligation", not consent).</p>
    <h3>DPIAs and "privacy by design"</h3>
    <p>For high-risk processing (e.g. large-scale profiling, biometrics) organisations must run a <strong>Data Protection Impact Assessment (DPIA)</strong> and build privacy in from the start ("data protection by design and by default"). This is how the principles become day-to-day engineering decisions.</p>
    <h3>Beyond the UK</h3>
    <p>The EU GDPR, and laws like California's CCPA, mean global products must handle <strong>cross-border transfers</strong> carefully — a key reason cloud providers offer regional data centres.</p>
    <ul class="src-list">
      <li><span class="who">ICO</span> — UK regulator: guides on lawful bases, DPIAs, breach reporting (ico.org.uk).</li>
      <li><span class="who">legislation.gov.uk</span> — the actual text of the DPA 2018, Computer Misuse Act, Equality Act.</li>
      <li><span class="who">HSE</span> — Health and Safety Executive: DSE and working-at-height guidance (hse.gov.uk).</li>
      <li><span class="who">Intellectual Property Office</span> — copyright, patents and designs (gov.uk/ipo).</li>
    </ul>`,

  'co4-2': `
    <h2>Wider context: professional frameworks</h2>
    <h3>The full ISO 27000 family</h3>
    <p>ISO 27001 is the management standard, but it sits in a family: <strong>27002</strong> (control catalogue), <strong>27005</strong> (risk management), <strong>27017/27018</strong> (cloud &amp; cloud-PII). Certification involves an external audit and continual improvement (Plan-Do-Check-Act).</p>
    <h3>NIST &amp; Cyber Essentials</h3>
    <p>Beyond ISO, the <strong>NIST Cybersecurity Framework</strong> (Identify, Protect, Detect, Respond, Recover) is hugely influential, and the UK's <strong>Cyber Essentials</strong> scheme is a practical baseline many contracts now require.</p>
    <h3>Accessibility in practice</h3>
    <p>WCAG defines testable success criteria at levels A, AA, AAA. Public-sector sites in the UK must meet <strong>WCAG 2.x AA</strong> by law — a real example of a "standard" becoming effectively mandatory.</p>
    <ul class="src-list">
      <li><span class="who">ISO</span> — standards catalogue (iso.org).</li>
      <li><span class="who">NCSC</span> — Cyber Essentials, Cyber Assessment Framework (ncsc.gov.uk).</li>
      <li><span class="who">NIST</span> — Cybersecurity Framework (nist.gov).</li>
      <li><span class="who">W3C / WAI</span> — WCAG and accessibility (w3.org/WAI).</li>
      <li><span class="who">BCS</span> — the Chartered Institute for IT: code of conduct (bcs.org).</li>
    </ul>`,

  /* ---------------- CO5 ---------------- */
  'co5-1': `
    <h2>Wider context: strategy tools</h2>
    <p>Analysts read organisations with named frameworks you can borrow in evaluation answers.</p>
    <h3>Porter's Five Forces</h3>
    <p>Why an industry is competitive: threat of new entrants, supplier power, buyer power, threat of substitutes, and rivalry. Digital disruption usually changes one of these (e.g. low entry barriers online).</p>
    <h3>Stakeholder power/interest grid</h3>
    <p>Real organisations map stakeholders by <strong>power × interest</strong> (manage closely / keep satisfied / keep informed / monitor) to decide who to prioritise — a more sophisticated version of "internal vs external".</p>
    <ul class="src-list">
      <li><span class="who">Harvard Business Review</span> — strategy explainers (hbr.org).</li>
      <li><span class="who">gov.uk / Companies House</span> — how UK organisations are structured and registered.</li>
      <li><span class="who">FCA</span> — why some sectors (finance) need a licence to operate (fca.org.uk).</li>
    </ul>`,

  'co5-2': `
    <h2>Wider context: the systems behind the value</h2>
    <h3>ERP, CRM and BI</h3>
    <p>The "digital systems" the spec mentions usually have names: <strong>ERP</strong> (e.g. SAP) ties together finance/operations/HR; <strong>CRM</strong> (e.g. Salesforce) manages customers; <strong>Business Intelligence</strong> tools (Power BI, Tableau) turn data into the KPI dashboards managers use.</p>
    <h3>UX and the "pain point"</h3>
    <p>Reducing pain points is a whole discipline — <strong>user experience (UX) research</strong>: usability testing, analytics funnels and accessibility audits identify exactly where users struggle.</p>
    <ul class="src-list">
      <li><span class="who">Nielsen Norman Group</span> — UX research and usability heuristics (nngroup.com).</li>
      <li><span class="who">GOV.UK Service Manual</span> — world-class guidance on user-centred digital services.</li>
      <li><span class="who">W3C / WAI</span> — accessibility techniques.</li>
    </ul>`,

  'co5-3': `
    <h2>Wider context: risk management</h2>
    <h3>Risk = likelihood × impact</h3>
    <p>Organisations don't treat all risks equally — they score each on a <strong>risk matrix</strong> and choose to <strong>treat, tolerate, transfer (insurance) or terminate</strong> it. This is the professional version of "risks and impacts".</p>
    <h3>Business continuity &amp; ISO 22301</h3>
    <p>Recovering from a digital failure is governed by <strong>business continuity</strong> planning (ISO 22301), including measurable targets: <strong>RTO</strong> (how fast you must recover) and <strong>RPO</strong> (how much data you can afford to lose).</p>
    <ul class="src-list">
      <li><span class="who">ICO</span> — enforcement actions and real fines to study (ico.org.uk/action-weve-taken).</li>
      <li><span class="who">NCSC</span> — risk management guidance for organisations.</li>
      <li><span class="who">ISO 22301</span> — business continuity management.</li>
    </ul>`,

  'co5-4': `
    <h2>Wider context: change frameworks</h2>
    <h3>ITIL change management</h3>
    <p>The CAB in the spec comes from <strong>ITIL</strong> (the IT Service Management framework), which formalises change as normal / standard / emergency changes, each with its own approval path.</p>
    <h3>Kotter &amp; ADKAR</h3>
    <p>Two famous people-focused change models: <strong>Kotter's 8 steps</strong> (start with urgency, build a coalition…) and <strong>ADKAR</strong> (Awareness, Desire, Knowledge, Ability, Reinforcement) — both reinforce why communication and training beat just "flipping the switch".</p>
    <ul class="src-list">
      <li><span class="who">AXELOS / ITIL</span> — IT service &amp; change management.</li>
      <li><span class="who">Prosci</span> — the ADKAR change model (prosci.com).</li>
      <li><span class="who">Agile Alliance</span> — Scrum/Kanban background (agilealliance.org).</li>
    </ul>`,

  /* ---------------- CO6 ---------------- */
  'co6-1': `
    <h2>Wider context: the future of work &amp; ethics</h2>
    <h3>Automation economics</h3>
    <p>Bodies like the <strong>World Economic Forum</strong> publish "Future of Jobs" research estimating which roles automation displaces vs creates — useful, real evidence for evaluation answers about job impact.</p>
    <h3>Lawful monitoring</h3>
    <p>Employee monitoring isn't unlimited: in the UK it must be <strong>proportionate, necessary and transparent</strong>, and the ICO publishes an Employment Practices code on exactly this — the legal backbone behind the "privacy vs security" debate.</p>
    <h3>The digital divide</h3>
    <p>Ofcom and ONS track UK connectivity and digital-skills gaps — real data behind "digital inclusion".</p>
    <ul class="src-list">
      <li><span class="who">World Economic Forum</span> — Future of Jobs reports (weforum.org).</li>
      <li><span class="who">ICO</span> — employee monitoring guidance.</li>
      <li><span class="who">Ofcom / ONS</span> — UK connectivity and digital-inclusion statistics.</li>
    </ul>`,

  'co6-2': `
    <h2>Wider context: how the tech really works</h2>
    <h3>"Post-quantum" cryptography</h3>
    <p>Because quantum computers could break today's encryption (RSA/ECC), NIST has been <strong>standardising post-quantum algorithms</strong> designed to resist them — a live, real-world response to the threat the spec hints at.</p>
    <h3>How modern AI learns</h3>
    <p>Today's generative AI uses <strong>transformer neural networks</strong> trained on huge datasets; "machine learning" splits into supervised, unsupervised and reinforcement learning. Knowing these terms deepens AI evaluation answers.</p>
    <h3>IoT security standards</h3>
    <p>The UK's <strong>PSTI Act</strong> now bans default passwords on consumer IoT — a direct fix to the "weak default password" risk.</p>
    <ul class="src-list">
      <li><span class="who">NIST</span> — Post-Quantum Cryptography project (nist.gov).</li>
      <li><span class="who">NCSC</span> — AI and machine-learning security guidance.</li>
      <li><span class="who">DSIT / gov.uk</span> — Product Security (PSTI) regime for IoT.</li>
    </ul>`,

  /* ---------------- CO7 ---------------- */
  'co7-1': `
    <h2>Wider context: hardware architecture</h2>
    <h3>Von Neumann &amp; the fetch–decode–execute cycle</h3>
    <p>Under the "CPU executes instructions" line is the <strong>fetch–decode–execute cycle</strong> and the von Neumann architecture (shared memory for data + instructions). Pipelining and multiple cores increase throughput.</p>
    <h3>SSD vs HDD</h3>
    <p>SSDs (flash, no moving parts) hugely outperform spinning HDDs on latency — why modern servers boot from SSD/NVMe but may still use large HDDs for bulk storage.</p>
    <ul class="src-list">
      <li><span class="who">CrashCourse Computer Science</span> — excellent free video series on architecture.</li>
      <li><span class="who">Intel / AMD</span> — technical docs on cores, cache and big.LITTLE designs.</li>
    </ul>`,

  'co7-2': `
    <h2>Wider context: under the OS</h2>
    <h3>Kernel, processes and scheduling</h3>
    <p>The OS "manages processes" via a <strong>kernel</strong> that schedules CPU time, handles interrupts and manages virtual memory (paging) — the machinery behind multitasking.</p>
    <h3>Containers vs VMs</h3>
    <p>Modern software ships in <strong>containers</strong> (Docker) orchestrated by <strong>Kubernetes</strong> — lighter than full VMs because they share the host kernel. This is where "code development tools" and "virtual environments" meet in industry.</p>
    <ul class="src-list">
      <li><span class="who">Docker / Kubernetes</span> — official docs (docker.com, kubernetes.io).</li>
      <li><span class="who">The Linux Foundation</span> — open-source OS and tooling.</li>
    </ul>`,

  'co7-3': `
    <h2>Wider context: networking in depth</h2>
    <h3>IP addressing, subnets and NAT</h3>
    <p>Beyond "router/switch": devices have <strong>IPv4/IPv6 addresses</strong>, grouped by <strong>subnets</strong>, and home networks use <strong>NAT</strong> to share one public IP. <strong>VLANs</strong> segment a switch logically — directly relevant to CO8 network segregation.</p>
    <h3>TCP vs UDP</h3>
    <p>TCP is reliable/ordered (web, email); UDP is fast/connectionless (streaming, gaming, VoIP) — the trade-off behind the transport layer.</p>
    <ul class="src-list">
      <li><span class="who">IETF</span> — the RFCs that define internet protocols (ietf.org/rfc).</li>
      <li><span class="who">Cisco Networking Academy</span> — free networking fundamentals.</li>
      <li><span class="who">Cloudflare Learning Center</span> — clear protocol/DNS explainers.</li>
    </ul>`,

  'co7-4': `
    <h2>Wider context: virtualisation at scale</h2>
    <h3>Hyperscale data centres</h3>
    <p>Providers run millions of VMs across <strong>hypervisors</strong> (VMware ESXi, KVM, Hyper-V) with <strong>live migration</strong> moving running VMs between hosts with near-zero downtime — the industrial version of "portability".</p>
    <h3>Snapshots, templates &amp; IaC</h3>
    <p>Environments are increasingly defined as code (<strong>Infrastructure as Code</strong>, e.g. Terraform), so a whole virtual environment can be rebuilt automatically — powerful for disaster recovery.</p>
    <ul class="src-list">
      <li><span class="who">VMware / Microsoft Hyper-V</span> — virtualisation docs.</li>
      <li><span class="who">HashiCorp</span> — Terraform / Infrastructure as Code.</li>
    </ul>`,

  'co7-5': `
    <h2>Wider context: real cloud architecture</h2>
    <h3>The shared responsibility model</h3>
    <p>Every major provider publishes a <strong>shared responsibility model</strong> — the cloud secures the infrastructure ("security <em>of</em> the cloud"), you secure your data/config ("security <em>in</em> the cloud"). Most breaches are customer misconfiguration, not provider failure.</p>
    <h3>Serverless &amp; auto-scaling</h3>
    <p>Beyond IaaS/PaaS/SaaS, <strong>serverless</strong> (AWS Lambda) runs code on demand and bills per execution — the purest form of "elasticity".</p>
    <ul class="src-list">
      <li><span class="who">AWS / Microsoft Azure / Google Cloud</span> — well-architected frameworks &amp; responsibility models.</li>
      <li><span class="who">ICO</span> — using cloud services and GDPR.</li>
    </ul>`,

  'co7-6': `
    <h2>Wider context: resilience engineering</h2>
    <h3>RAID levels &amp; the 3-2-1 rule</h3>
    <p>RAID has levels (0 stripe/speed, 1 mirror, 5/6 parity, 10 mirror+stripe). For backups the industry standard is <strong>3-2-1</strong>: 3 copies, on 2 media types, 1 off-site — directly answering "RAID isn't enough on its own".</p>
    <h3>High availability &amp; chaos engineering</h3>
    <p>Big services design for "five nines" (99.999%) uptime with clustering and failover, and even practise <strong>chaos engineering</strong> (deliberately breaking things, e.g. Netflix's Chaos Monkey) to prove recovery works — the pro version of "test your recovery".</p>
    <ul class="src-list">
      <li><span class="who">NCSC</span> — backup and resilience guidance (incl. ransomware).</li>
      <li><span class="who">Backblaze</span> — public drive-failure statistics and RAID explainers.</li>
    </ul>`,

  /* ---------------- CO8 ---------------- */
  'co8-1': `
    <h2>Wider context: data classification</h2>
    <h3>Classifying information</h3>
    <p>Real organisations formally <strong>classify</strong> data (e.g. Public / Internal / Confidential / Restricted) and apply controls to match — the structured version of "types of confidential information". Government uses OFFICIAL / SECRET / TOP SECRET.</p>
    <h3>Data breach economics</h3>
    <p>IBM's annual <strong>Cost of a Data Breach</strong> report quantifies the real-world impact (detection time, cost per record) — strong evidence for "impact of failing confidentiality".</p>
    <ul class="src-list">
      <li><span class="who">IBM / Ponemon</span> — Cost of a Data Breach report.</li>
      <li><span class="who">NCSC</span> — protecting bulk personal data.</li>
    </ul>`,

  'co8-2': `
    <h2>Wider context: the attacker's playbook</h2>
    <h3>MITRE ATT&amp;CK &amp; the kill chain</h3>
    <p>Defenders map real attacks to <strong>MITRE ATT&amp;CK</strong> (a catalogue of attacker tactics &amp; techniques) and the <strong>Cyber Kill Chain</strong> (recon → weaponise → deliver → exploit → install → command → act). This explains <em>how</em> threats chain together.</p>
    <h3>OWASP Top 10</h3>
    <p>Web threats like SQL injection and XSS come from the <strong>OWASP Top 10</strong> — the industry's reference list of the most critical web-app vulnerabilities, with prevention for each.</p>
    <ul class="src-list">
      <li><span class="who">MITRE ATT&amp;CK</span> — attacker techniques (attack.mitre.org).</li>
      <li><span class="who">OWASP</span> — Top 10 web vulnerabilities (owasp.org).</li>
      <li><span class="who">NCSC</span> — threat reports &amp; phishing guidance.</li>
    </ul>`,

  'co8-3': `
    <h2>Wider context: how the defences work</h2>
    <h3>Public-key cryptography &amp; TLS</h3>
    <p>HTTPS uses <strong>asymmetric</strong> keys to exchange a <strong>symmetric</strong> session key, then encrypts with the fast symmetric cipher — and <strong>digital certificates</strong> (PKI) prove identity. Salted hashing (bcrypt) protects stored passwords.</p>
    <h3>Zero Trust</h3>
    <p>Modern security is moving to <strong>Zero Trust</strong> ("never trust, always verify"): no implicit trust by network location, continuous verification, least privilege — the strategic home of MFA, segregation and device hardening.</p>
    <ul class="src-list">
      <li><span class="who">NIST</span> — SP 800-207 Zero Trust Architecture.</li>
      <li><span class="who">OWASP</span> — cryptographic storage &amp; auth cheat sheets.</li>
      <li><span class="who">NCSC</span> — Cyber Essentials technical controls.</li>
    </ul>`,

  'co8-4': `
    <h2>Wider context: security models</h2>
    <h3>Beyond CIA: the extended goals</h3>
    <p>Some models add <strong>non-repudiation</strong> (you can't deny you did it — via digital signatures) and <strong>authenticity</strong> to the CIA triad. The <strong>Parkerian Hexad</strong> extends it further (possession, utility).</p>
    <h3>Access-control models</h3>
    <p>Authorisation in the IAAA model is implemented with real models: <strong>RBAC</strong> (role-based), <strong>ABAC</strong> (attribute-based) and the <strong>principle of least privilege</strong> — the same idea CO7 resilience relies on.</p>
    <ul class="src-list">
      <li><span class="who">NIST</span> — access control (RBAC/ABAC) and the IAAA concepts.</li>
      <li><span class="who">NCSC</span> — identity and access management guidance.</li>
      <li><span class="who">SANS</span> — security awareness &amp; fundamentals (sans.org).</li>
    </ul>`
};
