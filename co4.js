/* =========================================================================
   co4.js — Content Area 4: Legislation and Regulatory Requirements
   Source: ZigZag CO4 Course Companion. Content used for teaching only;
   question style mirrors official Pearson Paper 2.
   ========================================================================= */
registerArea({
  id: 'co4', code: 'CO4', title: 'Legislation & Regulatory Requirements',
  blurb: 'The laws and rules that govern digital work, and the guidelines/standards professionals follow.',
  units: [
  /* ----------------------------- 4.1 ---------------------------------- */
  {
    id: 'co4-1', code: '4.1', title: 'Legislation',
    learn: `
      <p><strong>Legislation</strong> = laws passed by Parliament. <strong>Regulation</strong> = making sure businesses uphold those laws. Several laws cover IT, your data and your safety.</p>
      <h2>Health &amp; safety legislation</h2>
      <ul class="tight">
        <li><strong>Health and Safety at Work Act 1974</strong> — employers must provide a safe environment, training, welfare, and information/supervision.</li>
        <li><strong>Health and Safety (Display Screen Equipment) Regulations 1992</strong> — DSE workstation assessments, screen breaks, eye tests on request, training. Screens must be adjustable/glare-free; keyboards tiltable; chairs/desks suitable.</li>
        <li><strong>Working at Height Regulations</strong> — protect workers above ground level (e.g. installing cabling in ceilings using ladders).</li>
      </ul>
      <h3>Health risks of DSE &amp; how to mitigate</h3>
      <p>Eye strain/headaches, back/neck/shoulder pain, RSI, stress. Mitigate with ergonomic equipment, adjustable lighting/brightness, breaks, DSE assessments, eye tests and training.</p>
      <h2>Data security &amp; protection — UK GDPR / Data Protection Act 2018</h2>
      <p>The <strong>UK Data Protection Act 2018</strong> implements <strong>UK GDPR</strong>. Key principles: lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity &amp; confidentiality (security), accountability, and rules on international transfers.</p>
      <ul class="tight">
        <li>A <strong>data controller</strong> decides how/why data is processed; a <strong>data processor</strong> processes it for them (needs a Data Processing Agreement).</li>
        <li>Your rights: be informed, get copies, get data corrected/erased, restrict/object to processing, data portability, object to profiling/direct marketing.</li>
        <li>Breaches must be reported within <strong>72 hours</strong>. Fines up to <strong>£17.5m or 4% of global turnover</strong>, issued by the <strong>ICO</strong>.</li>
      </ul>
      <h2>Computer Misuse Act 1990</h2>
      <p>Three core offences: (1) unauthorised access to programs/data; (2) unauthorised access <em>with intent</em> to commit a further offence; (3) unauthorised modification of programs/data (includes deliberately introducing a virus). Updated by the Police &amp; Justice Act 2006 and Serious Crime Act 2015 (made distributing malware an offence).</p>
      <table class="data"><tr><th>Offence</th><th>Max penalty</th></tr>
        <tr><td>Unauthorised access</td><td>6 months + £5,000 fine</td></tr>
        <tr><td>Access with intent / unauthorised modification</td><td>5 years + unlimited fine</td></tr>
        <tr><td>Making/supplying hacking tools</td><td>10 years + unlimited fine</td></tr>
        <tr><td>Damage to critical national infrastructure</td><td>up to life imprisonment</td></tr></table>
      <h2>Equality Act 2010</h2>
      <p>Protects against discrimination on <strong>nine protected characteristics</strong>: age, gender, gender reassignment, race, disability, sexual orientation, religion/belief, marriage/civil partnership, pregnancy/maternity. Four types of discrimination: <strong>direct, indirect, harassment, victimisation</strong>. IT professionals must avoid bias in hiring and in system/AI design.</p>
      <h2>Intellectual property</h2>
      <ul class="tight">
        <li><strong>Copyright</strong> (Copyright, Designs and Patents Act 1988) — automatic, no registration; protects code, websites, written/artistic work.</li>
        <li><strong>Patents</strong> — protect inventions (new, inventive step, industrial application); up to 20 years; cannot patent algorithms/computer programs.</li>
        <li><strong>Designs</strong> — registered designs protected 25 years; unregistered 15 years (UK). Intellectual Property Act 2014 added criminal penalties for copying registered designs.</li>
      </ul>
      <h2>International law</h2>
      <p>You must meet the law of every country you operate/license in. The <strong>Budapest Convention on Cybercrime (2001)</strong> supports cross-border cooperation on hacking, fraud and data interference. The <strong>ICCPR</strong> and <strong>ECHR Article 8</strong> protect privacy from arbitrary surveillance.</p>`,
    like12: `
      <p>🏥 <strong>Health &amp; safety laws</strong> are like the rules that stop you hurting yourself in PE — sit properly, take breaks, don't climb a wobbly ladder. At work, bosses must give you a comfy chair, a good screen and rest breaks so your eyes and back don't hurt.</p>
      <p>🔐 <strong>GDPR (data protection)</strong> is like a rule that says: if someone keeps a diary about <em>you</em>, they have to keep it locked up, only write true things, only keep it as long as needed, and let you read it or rip out a page. If they're careless and leave it lying around, they get a <em>huge</em> fine.</p>
      <p>💻 <strong>Computer Misuse Act</strong> = "don't sneak into computers that aren't yours." Even <em>trying</em> the door handle counts. Planting a virus is like spray-painting someone's house — serious trouble.</p>
      <p>⚖️ <strong>Equality Act</strong> = you can't treat someone worse because of who they are (their age, race, religion, disability and so on). Even computer programs must be fair.</p>
      <p>©️ <strong>Copyright/patents</strong> = if you invent or make something, copying it is like copying someone's homework and handing it in as your own — not allowed.</p>`,
    flashcards: [
      { front: 'Health and Safety at Work Act 1974', back: 'Law requiring employers to provide a safe working environment, training, welfare and supervision for all affected by the work.', k12: 'The big rule that says your boss must keep you safe at work — like a teacher keeping the classroom safe.' },
      { front: 'Display Screen Equipment (DSE) Regulations', back: 'Require workstation assessments, screen breaks, eye tests on request and adjustable equipment for screen users.', k12: 'Rules so staring at a screen all day doesn\'t wreck your eyes/back — adjustable chair, breaks, free eye tests.' },
      { front: 'UK GDPR / Data Protection Act 2018', back: 'Law controlling how personal data is collected, used and stored, based on principles like fairness, minimisation and security.', k12: 'The "look after people\'s private info properly" law — keep it safe, true, and only as long as you need it.' },
      { front: 'Data controller vs data processor', back: 'Controller decides why/how data is used; processor handles it on the controller\'s behalf (needs a Data Processing Agreement).', k12: 'Controller = the boss who owns the diary; processor = the helper allowed to write in it, but only with a signed deal.' },
      { front: 'Computer Misuse Act 1990', back: 'Makes unauthorised access, access with intent, and unauthorised modification (incl. planting viruses) criminal offences.', k12: 'Law that bans sneaking into computers that aren\'t yours — even just trying counts.' },
      { front: 'Equality Act 2010', back: 'Protects people from discrimination across nine protected characteristics in work, services and education.', k12: 'Says you can\'t treat someone worse for who they are — age, race, religion, disability, etc.' },
      { front: 'Copyright', back: 'Automatic legal protection for original work (code, text, art) — no registration needed; lasts decades.', k12: 'Automatically says "I made this, you can\'t just copy it" — like your name on your drawing.' },
      { front: 'Patent', back: 'Protects a new, non-obvious invention with industrial use for up to 20 years; cannot cover algorithms alone.', k12: 'A certificate that stops others making your invention without paying you, for a set number of years.' },
      { front: 'ICO', back: 'Information Commissioner\'s Office — the UK regulator that enforces data protection and issues fines (up to £17.5m / 4% turnover).', k12: 'The data police who fine companies that leak or misuse your private information.' }
    ],
    quiz: [
      { q: 'Which law requires employers to carry out workstation assessments and give screen breaks?', opts: ['Computer Misuse Act 1990','Display Screen Equipment Regulations 1992','Equality Act 2010','Patents Act'], a: 1, marks: 1, fb: 'DSE Regulations 1992 cover screen users\' health.' },
      { q: 'What is the maximum GDPR fine an organisation can face?', opts: ['£5,000','£1 million','£17.5m or 4% of global turnover','£250,000'], a: 2, marks: 1, fb: 'The ICO can fine up to £17.5m or 4% of annual global turnover.' },
      { q: 'Under the Computer Misuse Act, planting a virus on a system is an example of…', opts: ['Unauthorised access','Unauthorised modification of data','A health and safety breach','Copyright infringement'], a: 1, marks: 1, fb: 'Deliberately introducing a virus is unauthorised modification.' },
      { q: 'How many protected characteristics are there under the Equality Act 2010?', opts: ['5','7','9','11'], a: 2, marks: 1, fb: 'Nine protected characteristics.' },
      { q: 'Within how long must a serious personal data breach be reported?', opts: ['24 hours','72 hours','7 days','30 days'], a: 1, marks: 1, fb: 'UK GDPR requires reporting within 72 hours.' },
      { q: 'Which type of IP protection is automatic and needs no registration?', opts: ['Patent','Registered design','Copyright','Trademark'], a: 2, marks: 1, fb: 'Copyright is automatic on creation of original work.' },
      { q: 'A "data processor" must have which document in place with the controller?', opts: ['An AUP','A Data Processing Agreement','A patent','A whistleblowing policy'], a: 1, marks: 1, fb: 'Processors need a formal DPA with the controller.' },
      { q: 'Treating someone less favourably because of a protected characteristic is…', opts: ['Indirect discrimination','Direct discrimination','Victimisation','Harassment'], a: 1, marks: 2, fb: 'Direct discrimination = less favourable treatment because of the characteristic itself.' },
      { q: 'Which body issues data protection fines in the UK?', opts: ['NCSC','ICO','BCS','IETF'], a: 1, marks: 1, fb: 'The Information Commissioner\'s Office (ICO).' },
      { q: 'Which regulation protects workers installing cabling in ceilings using ladders?', opts: ['Working at Height Regulations','GDPR','Copyright Act','Equality Act'], a: 0, marks: 1, fb: 'Working at Height Regulations cover risks of working above ground level.' }
    ],
    practice: [
      { q: 'State two principles of UK GDPR.', marks: 2, cmd: 'State', points: ['1 mark each (max 2) for any principle, e.g.:','Lawfulness, fairness and transparency','Purpose limitation','Data minimisation','Accuracy','Storage limitation','Integrity and confidentiality (security)','Accountability'], model: 'Two principles are: (1) <strong>data minimisation</strong> — only collect data that is adequate, relevant and necessary; and (2) <strong>storage limitation</strong> — keep data no longer than is necessary.' },
      { q: 'Explain one offence under the Computer Misuse Act 1990.', marks: 2, cmd: 'Explain', points: ['1 mark for identifying an offence, 1 mark for a linked explanation.','Unauthorised access (1) — accessing a program/data you know you are not authorised to access (1).','Unauthorised modification (1) — altering/deleting data or planting a virus without permission (1).'], model: 'One offence is <strong>unauthorised access</strong> (1) — this is when a person knowingly accesses programs or data that they have no permission to access, such as logging into a colleague\'s account, which is illegal even if no damage is done (1).' },
      { q: 'A company is installing new server cabling in the ceilings of a busy, occupied office. Discuss the legislation that covers this installation.', marks: 6, cmd: 'Discuss', levels: '6',
        indicative: ['<strong>Health and Safety at Work Act 1974</strong> — employer must protect everyone affected; risk assessments before work; isolate electricity; safe practice in ceilings.','<strong>Working at Height Regulations</strong> — ladders/scaffold needed for ceiling work; training and correct equipment to prevent falls.','Protecting present staff from falling objects/trip hazards; cordoning off the work area.','Provision of information, instruction, supervision and PPE.'],
        model: 'The installation is mainly covered by the <strong>Health and Safety at Work Act 1974</strong>, which requires the employer to protect the health and safety of <em>all persons affected</em> by the work — not just the installer but the office staff still present. This means a <strong>risk assessment</strong> must be carried out first, electricity should be isolated when working in the ceiling, and the area cordoned off to protect staff from falling objects. Because the cabling runs through ceilings, the <strong>Working at Height Regulations</strong> also apply: ladders or scaffold must be used safely, and the worker needs appropriate training and equipment to prevent falls. Together these laws ensure the installer works safely while the duty to the surrounding staff is also met, so the busy workplace can keep operating without putting anyone at risk.' }
    ],
    test: {
      mcq: [
        { q: 'Which Act makes distributing malware a specific offence?', opts: ['Serious Crime Act 2015','Equality Act 2010','Patents Act','DSE Regulations'], a: 0, marks: 1, fb: 'The Serious Crime Act 2015 updated the Computer Misuse Act to cover malware distribution.' },
        { q: 'Keeping data "no longer than necessary" is which GDPR principle?', opts: ['Accuracy','Storage limitation','Accountability','Purpose limitation'], a: 1, marks: 1, fb: 'Storage limitation.' },
        { q: 'A registered design is protected in the UK for up to…', opts: ['5 years','15 years','25 years','Forever'], a: 2, marks: 1, fb: 'Registered designs: up to 25 years (renewed every 5).' },
        { q: 'Putting a rule in place that disadvantages a protected group is…', opts: ['Direct discrimination','Indirect discrimination','Victimisation','Harassment'], a: 1, marks: 2, fb: 'Indirect discrimination — a blanket rule that unfairly disadvantages a protected group.' },
        { q: 'Who is responsible for deciding why and how personal data is processed?', opts: ['Data processor','Data controller','Data subject','The ICO'], a: 1, marks: 1, fb: 'The data controller.' },
        { q: 'Which is NOT one of the nine protected characteristics?', opts: ['Disability','Religion or belief','Job title','Pregnancy and maternity'], a: 2, marks: 1, fb: 'Job title is not a protected characteristic.' }
      ],
      structured: [
        { q: 'Identify two rights individuals have under the Data Protection Act 2018.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): right to be informed; right of access (copies); right to rectification; right to erasure; right to restrict/object to processing; data portability.'], model: 'Two rights are: the right to <strong>get copies of your data</strong>, and the right to <strong>have inaccurate data corrected or erased</strong>.' },
        { q: 'Explain one reason an organisation must comply with the Equality Act 2010 when designing software.', marks: 2, cmd: 'Explain', points: ['1 mark identification + 1 mark linked justification.','Avoid bias/discrimination (1) so users with protected characteristics are not disadvantaged, e.g. accessible design or unbiased AI (1).'], model: 'They must avoid building in bias (1), because a system that, for example, makes hiring decisions could unfairly disadvantage people with a protected characteristic, which would be unlawful discrimination and damage the organisation\'s reputation (1).' }
      ],
      nine: {
        scenario: 'A small marketing agency stores clients\' personal contact data and credit-card details on its office server. Staff often work remotely from cafés on personal laptops, and the company has no formal data-protection training.',
        q: 'Evaluate the suitability of the agency\'s current approach to handling personal data, with reference to relevant legislation.',
        indicative: ['<strong>UK GDPR/DPA 2018</strong> principle of integrity &amp; confidentiality (security) is at risk — café Wi-Fi/personal laptops increase breach risk.','Lack of training breaches the expectation to have suitable procedures/training for staff handling personal data.','Risk of a reportable breach (72 hours) and ICO fines (up to £17.5m / 4% turnover); reputational damage and loss of client trust.','Storing card data also brings PCI DSS expectations.','Mitigations: encryption, VPNs, access control, staff training, minimising what is stored.','Conclusion weighing how unsuitable the current approach is vs simple, affordable fixes.'],
        model: 'The agency\'s current approach is <strong>largely unsuitable</strong> and exposes it to serious legal risk under the <strong>UK GDPR / Data Protection Act 2018</strong>. The principle of <em>integrity and confidentiality (security)</em> requires personal data to be protected against unauthorised access; yet staff use <strong>personal laptops on public café Wi-Fi</strong>, which is easily intercepted, and the storage of <strong>credit-card details</strong> raises the stakes further (PCI DSS). The absence of <strong>data-protection training</strong> means staff may not recognise risky behaviour, increasing the chance of a breach — which would have to be reported to the <strong>ICO within 72 hours</strong> and could attract fines of up to £17.5m or 4% of turnover, plus reputational damage and loss of client trust. <br><br>On the other hand, the fixes are realistic for a small firm: <strong>encrypting</strong> data and devices, requiring a <strong>VPN</strong> on public Wi-Fi, applying <strong>access controls</strong>, <strong>minimising</strong> the data stored (e.g. not retaining full card numbers), and running <strong>staff training</strong>. <br><br>Overall, the current setup is not compliant and carries a high risk of a costly breach, but because the agency is small the most effective response is low-cost, behaviour-based controls (training + VPN + encryption). Until those are in place, the approach should be judged unsuitable for handling sensitive client data.'
      }
    }
  },
  /* ----------------------------- 4.2 ---------------------------------- */
  {
    id: 'co4-2', code: '4.2', title: 'Guidelines & Industry Standards',
    learn: `
      <h2>Codes of conduct</h2>
      <p>A <strong>code of conduct</strong> is an internal guideline beyond the law — a reference for day-to-day decisions and a statement of values. Sources include:</p>
      <ul class="tight">
        <li><strong>Organisational</strong> codes — define expected behaviour inside a company.</li>
        <li><strong>Professional bodies</strong> — joining obliges you to follow their code: <strong>BCS</strong> (British Computer Society), <strong>IAP</strong> (Institution of Analysts &amp; Programmers), <strong>CIISec</strong> (Chartered Institute of Information Security).</li>
        <li><strong>Governmental</strong> — e.g. the Civil Service Code, NCSC Cyber Assessment Framework (CAF).</li>
      </ul>
      <h3>How codes influence professional behaviour</h3>
      <p>They reinforce: following legislation &amp; employer procedures; personal integrity/ethics; minimising risk to the public; competence (only doing work within your ability); meeting deadlines; effective communication; and maintaining confidentiality &amp; trust.</p>
      <h2>Digital industry standards</h2>
      <ul class="tight">
        <li><strong>ISO/IEC 27001</strong> — Information Security Management. <strong>ISO 27701</strong> — privacy extension (GDPR). <strong>ISO 27017</strong> — cloud security controls. <strong>ISO/IEC TS 25011</strong> — IT service quality. <strong>ISO/IEC 20000-1</strong> — IT service management.</li>
        <li><strong>WCAG 2.2</strong> (W3C) — web accessibility, four principles: <strong>Perceivable, Operable, Understandable, Robust (POUR)</strong>.</li>
        <li><strong>W3C</strong> (web standards), <strong>IETF</strong> (Internet protocols/RFCs), <strong>IEEE</strong> (networking/hardware standards), <strong>PCI DSS</strong> (card payment security).</li>
      </ul>
      <p><strong>Benefits of standards:</strong> improve internal processes &amp; reduce waste, meet compliance &amp; audit requirements, reduce costly breaches, win/keep customers who require them, and enter new markets.</p>
      <h2>Acceptable Use Policy (AUP)</h2>
      <p>An <strong>AUP</strong> sets the rules for users of a system: permitted activities, prohibited activities (e.g. don\'t connect unauthorised devices), working practices (don\'t share/write down passwords, lock screens, report suspicious activity), communication etiquette, and sanctions. AUPs also support the Computer Misuse Act by clearly defining what is "unauthorised".</p>
      <h2>Whistleblowing</h2>
      <p>A <strong>whistleblower</strong> reports wrongdoing in the public interest and is protected by law from unfair treatment. In software this could be: shipping known critical vulnerabilities, adding backdoors/spyware, selling user data without consent, or releasing biased AI. Concerns can be raised internally, to a regulator (e.g. ICO) or to the police.</p>
      <h2>Relationship between development &amp; guidelines</h2>
      <p>Codes, standards and AUPs all raise the quality and security of software: developers train and improve to meet codes, follow standards for interoperability/legal compliance (e.g. PCI DSS to take card payments), and AUPs raise internal security — ultimately producing better software for users.</p>`,
    like12: `
      <p>📜 A <strong>code of conduct</strong> is like a club's "how to behave" rulebook. If you join the BCS coding club, you promise to be honest, only take on jobs you can actually do, hit your deadlines and keep secrets safe — or you can lose your membership.</p>
      <p>🏅 <strong>Standards (ISO, WCAG)</strong> are like the official rules of a sport so everyone plays the same way. WCAG is the "make your website usable by everyone" rulebook — remember <strong>POUR</strong>: people must be able to <em>see/hear it, use it, understand it,</em> and it must keep working as tech changes.</p>
      <p>🪧 An <strong>AUP</strong> is the "rules for using the school computers" poster — don't share your password, don't plug in random USB sticks, lock your screen. Break them and there are consequences.</p>
      <p>🦸 A <strong>whistleblower</strong> is someone brave who tells on a company doing something dangerous or sneaky (like hiding a secret backdoor in an app). The law protects them so they don't get fired for doing the right thing.</p>`,
    flashcards: [
      { front: 'Code of conduct', back: 'A set of professional/ethical guidelines (beyond the law) defining expected behaviour for members or employees.', k12: 'A club rulebook for how to behave properly at work.' },
      { front: 'BCS / IAP / CIISec', back: 'Professional bodies for IT/computing whose codes of conduct members must follow to keep membership.', k12: 'Official "coding clubs" — join and you promise to behave by their rules.' },
      { front: 'ISO/IEC 27001', back: 'International standard for Information Security Management Systems.', k12: 'A gold-star certificate proving a company keeps information securely.' },
      { front: 'WCAG 2.2 (POUR)', back: 'Web accessibility standard: content must be Perceivable, Operable, Understandable and Robust.', k12: 'Rules so websites work for everyone — you can see/hear it, use it, understand it, and it keeps working.' },
      { front: 'Acceptable Use Policy (AUP)', back: 'Rules users must follow when using an organisation\'s digital systems (permitted/prohibited activities, password rules, sanctions).', k12: 'The "rules for using the computers" poster — no sharing passwords, no random USB sticks.' },
      { front: 'Whistleblowing', back: 'Reporting wrongdoing in the public interest; whistleblowers are legally protected from unfair treatment.', k12: 'Telling on a company doing something dangerous/sneaky — the law protects you for being honest.' },
      { front: 'PCI DSS', back: 'Payment Card Industry Data Security Standard — security rules for handling card payments.', k12: 'The rulebook shops must follow so your card details stay safe when you pay.' },
      { front: 'NCSC CAF', back: 'National Cyber Security Centre\'s Cyber Assessment Framework — indicators of good cyber-security practice.', k12: 'A government checklist of "are you doing cyber security properly?"' }
    ],
    quiz: [
      { q: 'Which professional body is the British Computer Society?', opts: ['IAP','BCS','CIISec','IEEE'], a: 1, marks: 1, fb: 'BCS = British Computer Society.' },
      { q: 'WCAG\'s four principles are summarised as…', opts: ['SMART','POUR','CIA','PEST'], a: 1, marks: 1, fb: 'Perceivable, Operable, Understandable, Robust.' },
      { q: 'Which standard specifically covers Information Security Management Systems?', opts: ['ISO 9001','ISO/IEC 27001','WCAG 2.2','PCI DSS'], a: 1, marks: 1, fb: 'ISO/IEC 27001.' },
      { q: 'Which document defines what counts as "unauthorised" use, supporting the Computer Misuse Act?', opts: ['Patent','Acceptable Use Policy','Data Processing Agreement','Risk assessment'], a: 1, marks: 1, fb: 'An AUP clearly defines authorised vs unauthorised activity.' },
      { q: 'A worker reporting that their company knowingly ships software with a backdoor is…', opts: ['Committing an offence','Whistleblowing','Breaching the AUP','Breaking copyright'], a: 1, marks: 1, fb: 'This is whistleblowing in the public interest, which is legally protected.' },
      { q: 'Which standard must be met to take credit-card payments securely?', opts: ['PCI DSS','ISO 14001','WCAG','GDPR'], a: 0, marks: 1, fb: 'PCI DSS governs card payment security.' },
      { q: 'Give one benefit to an organisation of following recognised standards.', opts: ['Guarantees zero cyberattacks','Helps win customers who require those standards','Removes the need for staff','Avoids paying tax'], a: 1, marks: 1, fb: 'Standards help win/keep customers, meet compliance and reduce breaches.' },
      { q: 'Which body publishes Internet protocol standards as RFCs?', opts: ['W3C','IETF','IEEE','ICO'], a: 1, marks: 1, fb: 'The IETF publishes RFCs.' },
      { q: 'Only undertaking work within your competence is a principle found in…', opts: ['Copyright law','Professional codes of conduct','The DSE Regulations','PCI DSS'], a: 1, marks: 2, fb: 'Professional codes (BCS/IAP/CIISec) require competence and integrity.' }
    ],
    practice: [
      { q: 'State two rules you would expect to find in an Acceptable Use Policy.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): don\'t share/write down passwords; lock screens when away; don\'t connect unauthorised devices; report suspicious activity; no downloading software without IT approval; professional communication.'], model: 'Two rules: (1) users must <strong>not share or write down their passwords</strong>; and (2) users must <strong>lock their screen</strong> whenever they leave their computer.' },
      { q: 'Explain one benefit to an organisation of following the WCAG 2.2 accessibility standard.', marks: 2, cmd: 'Explain', points: ['1 mark identification + 1 mark linked justification.','Wider audience/inclusion (1) — accessible sites can be used by people with disabilities, increasing reach and avoiding discrimination claims (1).'], model: 'Following WCAG widens the audience (1), because making content perceivable and operable means people with visual or motor impairments can still use the service, increasing the customer base and reducing the risk of discrimination claims (1).' }
    ],
    test: {
      mcq: [
        { q: 'Which is a privacy extension to ISO 27001 aimed at GDPR compliance?', opts: ['ISO 27701','ISO 9001','WCAG 2.2','ISO 14001'], a: 0, marks: 1, fb: 'ISO 27701 extends 27001 for privacy/GDPR.' },
        { q: 'The "R" in WCAG\'s POUR principles stands for…', opts: ['Reliable','Robust','Readable','Responsive'], a: 1, marks: 1, fb: 'Robust — works as technologies change.' },
        { q: 'Which body would a software whistleblower contact about a data misuse concern?', opts: ['IEEE','ICO','W3C','PCI SSC'], a: 1, marks: 1, fb: 'The ICO regulates data protection.' },
        { q: 'Meeting deadlines, competence and confidentiality are reinforced by…', opts: ['Patents','Professional codes of conduct','The Equality Act','Working at Height Regulations'], a: 1, marks: 1, fb: 'These are professional code-of-conduct principles.' },
        { q: 'An AUP sanction for serious misuse could be…', opts: ['A pay rise','Termination of employment','A patent','An eye test'], a: 1, marks: 1, fb: 'Sanctions range from warnings to dismissal/legal action.' },
        { q: 'Which standard helps with cloud-specific security controls?', opts: ['ISO 27017','WCAG','PCI DSS','ISO 25011'], a: 0, marks: 2, fb: 'ISO 27017 — security controls for cloud services.' }
      ],
      structured: [
        { q: 'Identify two professional bodies a software developer could join.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): BCS; IAP; CIISec.'], model: 'Two professional bodies are the <strong>BCS (British Computer Society)</strong> and <strong>CIISec (Chartered Institute of Information Security)</strong>.' },
        { q: 'Explain one way a professional code of conduct can benefit the wider public.', marks: 3, cmd: 'Explain with additional justification', points: ['1 mark identification + 1 mark justification + 1 mark further linked justification.','Minimising risk to the public (1) — members must avoid negligent work (1) which reduces the chance of unsafe or insecure software harming users (1).'], model: 'A code of conduct requires members to <strong>minimise risk to the public</strong> (1). Because members must not act negligently or take on work beyond their competence (1), the software they produce is more likely to be safe and secure, so the public is less likely to be harmed by faulty or insecure systems (1).' }
      ],
      nine: {
        scenario: 'A growing fintech start-up handles online card payments and is hiring junior developers quickly. It has no formal code of conduct, no AUP, and is not yet certified to any security standard. It wants to win contracts with larger banks.',
        q: 'Evaluate the suitability of the start-up adopting recognised codes of conduct and industry standards.',
        indicative: ['Codes of conduct (BCS/CIISec) promote competence, integrity, confidentiality — useful when hiring fast/junior staff.','PCI DSS is effectively required to handle card payments; ISO 27001 reassures banks.','AUP defines acceptable use and supports Computer Misuse Act enforcement internally.','Benefits: win bank contracts (many require certification), reduce breaches/fines, raise quality.','Drawbacks: cost, time, audit burden, ongoing maintenance for a small team.','Conclusion weighing cost vs the contracts/trust gained.'],
        model: 'Adopting recognised codes and standards is <strong>highly suitable</strong> for this start-up. Because it processes <strong>card payments</strong>, compliance with <strong>PCI DSS</strong> is effectively mandatory, and certification to <strong>ISO/IEC 27001</strong> would reassure the large banks it wants as clients — many will not sign a contract without it. A <strong>code of conduct</strong> (e.g. BCS or CIISec) is especially valuable while hiring junior developers quickly, as it reinforces competence, integrity and confidentiality, reducing the risk of poor or unethical work. An <strong>AUP</strong> would set clear internal rules (password handling, device use) and support enforcement under the Computer Misuse Act. <br><br>The main drawbacks are the <strong>cost, time and audit burden</strong>, which are significant for a small team, and standards require ongoing maintenance rather than a one-off effort. <br><br>On balance, the benefits clearly outweigh the costs here: the standards are essentially a gateway to the bank contracts the start-up is targeting, and they reduce the chance of a costly breach. The most sensible approach is to prioritise PCI DSS (legally needed for payments) and an internal code/AUP first, then work towards ISO 27001 as it scales — making adoption both suitable and strategically necessary.'
      }
    }
  }
  ],
  nutshell: `
    <h2>CO4 — Everything in a Nutshell</h2>
    <h3>4.1 Legislation</h3>
    <ul class="tight">
      <li><strong>Health &amp; Safety at Work Act 1974</strong> + <strong>DSE Regs 1992</strong> (assessments, breaks, eye tests) + <strong>Working at Height Regs</strong>.</li>
      <li><strong>UK GDPR / DPA 2018</strong>: principles (lawful/fair, purpose limit, minimisation, accuracy, storage limit, security, accountability). Controller vs processor (DPA agreement). Rights: informed, access, rectify, erase, restrict, portability, object. Breach reported in <strong>72h</strong>; fines up to <strong>£17.5m / 4%</strong> via the <strong>ICO</strong>.</li>
      <li><strong>Computer Misuse Act 1990</strong>: (1) unauthorised access, (2) access with intent, (3) unauthorised modification (incl. viruses).</li>
      <li><strong>Equality Act 2010</strong>: 9 protected characteristics; direct/indirect discrimination, harassment, victimisation.</li>
      <li><strong>IP</strong>: copyright (automatic), patents (20y, not algorithms), designs (registered 25y / unregistered 15y).</li>
      <li><strong>International</strong>: Budapest Convention on Cybercrime; ICCPR &amp; ECHR Art.8 (privacy).</li>
    </ul>
    <h3>4.2 Guidelines &amp; Standards</h3>
    <ul class="tight">
      <li><strong>Codes of conduct</strong>: organisational, professional (BCS, IAP, CIISec), governmental (Civil Service Code, NCSC CAF). Reinforce competence, integrity, confidentiality, deadlines, communication.</li>
      <li><strong>Standards</strong>: ISO 27001 (infosec), 27701 (privacy), 27017 (cloud), 25011 (IT quality); <strong>WCAG 2.2 = POUR</strong>; W3C, IETF, IEEE, PCI DSS.</li>
      <li><strong>AUP</strong>: permitted/prohibited use, password rules, sanctions; supports the Computer Misuse Act.</li>
      <li><strong>Whistleblowing</strong>: protected reporting of public-interest wrongdoing (backdoors, selling data, biased AI).</li>
    </ul>
    <div class="callout tip">Exam hooks: GDPR fines/breach time, the 3 Computer Misuse offences, 9 protected characteristics, POUR, and "what is an AUP for".</div>`
});

/* ---- AI knowledge base ---- */
indexKB('CO4','Legislation & Regulatory Requirements','4.1 Health & safety','The Health and Safety at Work Act 1974 requires employers to provide a safe environment, training and supervision. The Display Screen Equipment Regulations 1992 require workstation assessments, screen breaks and eye tests on request. Working at Height Regulations protect workers using ladders or scaffold, for example installing cabling in ceilings.');
indexKB('CO4','Legislation & Regulatory Requirements','4.1 Data protection (UK GDPR)','The UK Data Protection Act 2018 implements UK GDPR. Principles include lawfulness fairness and transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity and confidentiality (security) and accountability. A data controller decides why and how data is processed; a data processor processes it for them under a data processing agreement. Breaches must be reported within 72 hours. Fines can reach 17.5 million pounds or 4 percent of global turnover, issued by the ICO.');
indexKB('CO4','Legislation & Regulatory Requirements','4.1 Computer Misuse Act 1990','The Computer Misuse Act 1990 creates three offences: unauthorised access to programs or data, unauthorised access with intent to commit a further offence, and unauthorised modification of programs or data which includes deliberately introducing a virus.');
indexKB('CO4','Legislation & Regulatory Requirements','4.1 Equality Act 2010','The Equality Act 2010 protects nine protected characteristics including age, race, disability, religion and pregnancy. Types of discrimination are direct discrimination, indirect discrimination, harassment and victimisation. IT professionals must avoid bias in hiring and in system or AI design.');
indexKB('CO4','Legislation & Regulatory Requirements','4.1 Intellectual property','Copyright is automatic and protects original work such as code and websites. Patents protect new inventions for up to 20 years but cannot cover algorithms or computer programs alone. Registered designs are protected for up to 25 years.');
indexKB('CO4','Legislation & Regulatory Requirements','4.2 Codes of conduct','Codes of conduct are guidelines beyond the law. Professional bodies include the BCS, IAP and CIISec, and members must follow their code to keep membership. Codes reinforce competence, integrity, confidentiality, meeting deadlines and minimising risk to the public.');
indexKB('CO4','Legislation & Regulatory Requirements','4.2 Industry standards','ISO 27001 covers information security management, ISO 27701 covers privacy/GDPR, ISO 27017 covers cloud security and ISO 25011 covers IT service quality. WCAG 2.2 makes websites accessible based on four principles: perceivable, operable, understandable and robust (POUR). PCI DSS governs secure card payments.');
indexKB('CO4','Legislation & Regulatory Requirements','4.2 Acceptable use policy and whistleblowing','An acceptable use policy sets rules for users of a system such as not sharing passwords, locking screens, not connecting unauthorised devices and reporting suspicious activity, and it supports the Computer Misuse Act by defining unauthorised use. A whistleblower reports wrongdoing in the public interest and is protected by law.');
