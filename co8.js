/* =========================================================================
   co8.js — Content Area 8: Security
   Source: official Pearson specification text (8.1–8.4) supplied by the
   learner. Teaching content is written to the spec scope only.
   ========================================================================= */
registerArea({
  id: 'co8', code: 'CO8', title: 'Security',
  blurb: 'Confidential information, threats & vulnerabilities, threat mitigation, and the CIA/IAAA models.',
  units: [
  /* 8.1 */
  {
    id: 'co8-1', code: '8.1', title: 'Security Risks',
    learn: `
      <h2>Types of confidential information (8.1.1)</h2>
      <ul class="tight">
        <li><strong>HR</strong> — salaries &amp; benefits, staff personal details.</li>
        <li><strong>Commercially sensitive</strong> — client &amp; stakeholder details, intellectual property, sales numbers, contracts.</li>
        <li><strong>Access information</strong> — usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data.</li>
      </ul>
      <h2>Why information must be kept confidential (8.1.2)</h2>
      <ul class="tight">
        <li><strong>Salary/benefits</strong> — stop competitors poaching staff with higher offers; stop pay disputes.</li>
        <li><strong>Staff details</strong> — protect privacy; stop competitors contacting them directly.</li>
        <li><strong>Intellectual property</strong> — stop competitors copying designs.</li>
        <li><strong>Client details</strong> — stop competitors contacting clients; protect client privacy.</li>
        <li><strong>Access information</strong> — prevent unauthorised access.</li>
      </ul>
      <h2>Impact of failing to maintain privacy &amp; confidentiality (8.1.3)</h2>
      <ul class="tight">
        <li><strong>Non-compliance with regulations</strong> — incl. loss of licence to practise.</li>
        <li><strong>Loss of trust</strong> and <strong>damage to the organisation\'s image</strong>.</li>
        <li><strong>Financial loss</strong> — fines, refunds, lost earnings/terminated contracts.</li>
        <li><strong>Legal action</strong> and <strong>reduced security</strong>.</li>
      </ul>`,
    like12: `
      <p>🤫 Companies hold lots of <strong>secret info</strong>: how much people are paid, staff details, clever inventions (IP), customer lists, and all the <strong>passwords/PINs</strong>. This is "confidential information".</p>
      <p>Why keep it secret? So rivals can't <strong>steal your staff</strong> by offering more money, can't <strong>copy your inventions</strong>, can't <strong>pinch your customers</strong>, and so hackers can't get your passwords.</p>
      <p>💥 If a company <strong>leaks</strong> this info, bad things happen: people <strong>stop trusting</strong> them, their reputation is <strong>ruined</strong>, they get <strong>fined</strong> or <strong>sued</strong>, they lose money, and they might even <strong>lose their licence</strong> to operate.</p>`,
    flashcards: [
      { front: 'Confidential information', back: 'Sensitive data an organisation must protect: HR (salaries, staff details), commercial (IP, clients, contracts), and access info (passwords, PINs, biometrics).', k12: 'Secret company info — pay, inventions, customer lists, and all the passwords.' },
      { front: 'Access information', back: 'Credentials like usernames, passwords, MFA details, PINs, passphrases and biometric data.', k12: 'The keys to get in — passwords, PINs, fingerprints.' },
      { front: 'Intellectual property (IP)', back: 'Designs, inventions and creations kept confidential to stop competitors copying them.', k12: 'Your clever ideas/designs you don\'t want rivals to steal.' },
      { front: 'Why keep salaries confidential', back: 'To stop competitors poaching staff with higher pay and to prevent internal pay disputes.', k12: 'So rivals can\'t lure your staff away with bigger pay and staff don\'t argue about who earns more.' },
      { front: 'Loss of trust', back: 'An impact of a breach — customers/partners lose confidence in the organisation.', k12: 'People stop believing you can keep their info safe.' },
      { front: 'Reputational/image damage', back: 'A breach harms how the organisation is seen, often losing customers and business.', k12: 'Your good name gets trashed and people leave.' },
      { front: 'Loss of licence to practise', back: 'A possible regulatory consequence: a regulated firm can be shut down for non-compliance.', k12: 'Some businesses need a permit — break the rules and they can\'t operate anymore.' },
      { front: 'Reduced security (impact)', back: 'A breach can weaken overall security (e.g. leaked credentials enabling more attacks).', k12: 'One leak makes it easier for attackers to get in again.' }
    ],
    quiz: [
      { q: 'Which is an example of "access information"?', opts: ['Sales numbers','A password','A contract','A salary'], a: 1, marks: 1, fb: 'Passwords/PINs/biometrics are access information.' },
      { q: 'Why is intellectual property kept confidential?', opts: ['To raise prices','To stop competitors copying designs','To reduce latency','To increase RAM'], a: 1, marks: 1, fb: 'To prevent competitors copying it.' },
      { q: 'Keeping salaries confidential helps to…', opts: ['Increase bandwidth','Stop competitors poaching staff','Speed up backups','Improve Wi-Fi'], a: 1, marks: 1, fb: 'Prevents rivals offering higher wages / internal disputes.' },
      { q: 'Which is an impact of failing to maintain confidentiality?', opts: ['Faster CPU','Loss of trust','More storage','Lower latency'], a: 1, marks: 1, fb: 'Loss of trust is a key impact.' },
      { q: 'A regulated firm that breaches the rules could face…', opts: ['A pay rise','Loss of licence to practise','Free advertising','More clients'], a: 1, marks: 1, fb: 'Loss of licence to practise.' },
      { q: 'Client details are kept confidential mainly to…', opts: ['Reduce file size','Stop competitors contacting clients and protect privacy','Increase sales tax','Improve cabling'], a: 1, marks: 1, fb: 'Protect client privacy and stop poaching.' },
      { q: 'Which is a FINANCIAL impact of a confidentiality breach?', opts: ['Fines and refunds','Faster broadband','More RAM','A new logo'], a: 0, marks: 2, fb: 'Fines, refunds and lost earnings are financial impacts.' },
      { q: 'Biometric data is best classed as…', opts: ['Commercial info','Access information','A network protocol','A topology'], a: 1, marks: 1, fb: 'Biometrics are access information.' }
    ],
    practice: [
      { q: 'State two types of confidential information an organisation might hold.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): salaries/benefits; staff personal details; client/stakeholder details; intellectual property; sales numbers; contracts; passwords/PINs/MFA/biometrics.'], model: 'Two types are <strong>staff salary and benefits information</strong> and <strong>access information such as passwords and PINs</strong>.' },
      { q: 'One impact on an organisation that fails to maintain privacy and confidentiality is the loss of trust. State two other potential impacts.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): non-compliance with regulations / loss of licence; damage to image; financial loss (fines/refunds); legal action; reduced security.'], model: 'Two other impacts are <strong>financial loss (such as fines)</strong> and <strong>legal action</strong>.' }
    ],
    test: {
      mcq: [
        { q: 'Which is commercially sensitive information?', opts: ['A password','Sales numbers and contracts','A keyboard','A fingerprint'], a: 1, marks: 1, fb: 'Sales numbers, contracts, IP and client details are commercial.' },
        { q: 'Protecting staff personal details helps to…', opts: ['Increase latency','Protect privacy and stop competitor contact','Add RAM','Speed up backups'], a: 1, marks: 1, fb: 'Privacy + stopping competitors contacting them.' },
        { q: 'Damage to an organisation\'s image is a(n)…', opts: ['Type of malware','Impact of a confidentiality breach','Network topology','Backup type'], a: 1, marks: 1, fb: 'A reputational impact.' },
        { q: 'MFA details are an example of…', opts: ['Commercial info','Access information','A contract','Sales data'], a: 1, marks: 1, fb: 'Access information.' },
        { q: 'Refunds to affected customers after a breach are a(n)…', opts: ['Financial impact','Network protocol','Topology','Utility'], a: 0, marks: 1, fb: 'A financial impact.' },
        { q: 'Which best explains why access information must stay confidential?', opts: ['To improve Wi-Fi','To prevent unauthorised access','To raise prices','To reduce storage'], a: 1, marks: 2, fb: 'Leaked credentials allow unauthorised access.' }
      ],
      structured: [
        { q: 'Identify two reasons an organisation keeps client details confidential.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): prevent competitors contacting clients; protect client privacy.'], model: 'Two reasons are to <strong>stop competitors contacting its clients</strong> and to <strong>protect client privacy</strong>.' },
        { q: 'Explain one impact on an organisation of failing to keep customer data confidential.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Financial loss (1) — the ICO can issue large fines and customers may demand refunds (1), reducing profit and possibly threatening the survival of the business (1). OR loss of trust → lost customers…'], model: 'A key impact is <strong>financial loss</strong> (1): a serious breach can result in large regulatory fines and refunds to affected customers (1), which reduces profit and, combined with lost business from damaged trust, could threaten the organisation\'s survival (1).' }
      ],
      nine: {
        scenario: 'A recruitment agency stores candidates\' personal details, client company contracts and staff salary records on one shared system with weak access controls and no encryption.',
        q: 'Evaluate the risks to the agency of failing to keep this confidential information secure.',
        indicative: ['Types at risk: HR (salaries, staff details), commercial (client contracts), candidate personal data.','Why confidentiality matters: poaching, privacy, competitor advantage, unauthorised access.','Impacts if breached: loss of trust, image damage, fines/legal action (GDPR), financial loss, possible loss of licence, reduced security.','Weak controls + no encryption magnify likelihood.','Mitigation: access control, encryption, MFA, training; conclusion on seriousness.'],
        model: 'The risks to the agency are <strong>serious</strong> because it holds several types of highly confidential information on a poorly-secured system. <strong>HR data</strong> (salaries, staff details), <strong>commercial data</strong> (client contracts) and <strong>candidate personal data</strong> are all at risk. This matters because leaked salary data could let competitors <strong>poach staff</strong>, exposed client contracts hand rivals a <strong>competitive advantage</strong> and breach client privacy, and candidate data is personal data protected by law. <br><br>The <strong>weak access controls and lack of encryption</strong> greatly increase the likelihood of a breach, since anyone gaining access could read everything. If a breach occurred, the impacts would be severe: <strong>loss of trust</strong> and <strong>image damage</strong> losing clients and candidates, <strong>fines and legal action</strong> under data-protection law, direct <strong>financial loss</strong> (fines, refunds, lost contracts), and even <strong>loss of licence</strong> if the agency is regulated — plus <strong>reduced security</strong> going forward if credentials leak. <br><br>These risks could be cut dramatically with basic measures: <strong>access controls (least privilege), encryption, MFA and staff training</strong>. <br><br>Overall, the agency\'s current approach is highly risky given the sensitivity of the data and the weak controls; the potential impacts are severe enough to threaten the business, so addressing confidentiality should be an urgent priority rather than optional.'
      }
    }
  },
  /* 8.2 */
  {
    id: 'co8-2', code: '8.2', title: 'Threats & Vulnerabilities',
    learn: `
      <h2>Technical threats (8.2.1)</h2>
      <ul class="tight">
        <li><strong>Botnets</strong>; <strong>DoS/DDoS</strong> (flooding a service so it goes down).</li>
        <li><strong>Malicious hacking</strong> — hacktivists/nation states/organised crime/individuals; password cracking/brute force, cross-site scripting (XSS), SQL injection, buffer overflow.</li>
        <li><strong>Malware</strong> — viruses, worms, keyloggers, ransomware, spyware, remote-access trojans (RATs).</li>
        <li><strong>Social engineering</strong> — phishing, spear phishing, smishing (SMS), vishing (voice), pharming, watering-hole attacks, USB baiting.</li>
        <li><strong>DNS attack / traffic redirection</strong>; <strong>open/unsecured Wi-Fi</strong>.</li>
      </ul>
      <h2>Technical vulnerabilities (8.2.2)</h2>
      <p><strong>Inadequate security processes</strong> (weak encryption, weak password policy, no MFA) and <strong>out-of-date components</strong> (hardware, software — legacy/zero-day bugs, firmware).</p>
      <h2>Human threats (8.2.3)</h2>
      <ul class="tight">
        <li><strong>Human error</strong> — mitigate with file properties, confirmation boxes, staff training.</li>
        <li><strong>Malicious employee</strong> — remove from premises immediately; suspend accounts.</li>
        <li><strong>Disguised criminal</strong> — accompany all visitors; check ID.</li>
        <li><strong>Poor cyber hygiene</strong> — lock unattended machines; don\'t write passwords down; good password management.</li>
      </ul>
      <h2>Physical vulnerabilities (8.2.4)</h2>
      <p>Lack/poor access control (entry systems, no tailgating, complex codes changed regularly, monitoring/audits), nature of location (shoulder surfing, environment, vandalism), poor robustness (rugged machines), natural disasters.</p>
      <h2>Impacts of threats &amp; vulnerabilities (8.2.5)</h2>
      <p>Loss/leaking of sensitive data, unauthorised access to systems, data corruption, disruption of service, unauthorised access to restricted physical areas.</p>`,
    like12: `
      <p>🦠 <strong>Threats</strong> are the bad guys and their tricks:</p>
      <ul class="tight">
        <li><strong>Malware</strong> — nasty software: viruses, worms, <strong>ransomware</strong> (locks your files for money), <strong>keyloggers</strong> (record what you type), spyware.</li>
        <li><strong>DoS/DDoS</strong> — flooding a website with so much traffic it crashes (like 1,000 people jamming a doorway).</li>
        <li><strong>Social engineering</strong> — tricking <em>people</em>: <strong>phishing</strong> (fake emails), <strong>smishing</strong> (fake texts), <strong>vishing</strong> (fake phone calls).</li>
      </ul>
      <p>🕳️ <strong>Vulnerabilities</strong> are the weak spots that let them in: weak passwords, no extra login check (MFA), out-of-date software, or people being careless (<strong>poor cyber hygiene</strong> = leaving your computer unlocked, writing passwords on a sticky note).</p>
      <p>🚪 Physical ones too: letting a stranger <strong>tailgate</strong> through a door, or someone <strong>shoulder surfing</strong> (peeking at your screen).</p>`,
    flashcards: [
      { front: 'DoS / DDoS attack', back: 'Flooding a system/website with traffic so it can\'t cope and becomes unavailable (DDoS = from many machines/botnet).', k12: 'Jamming a website with so much fake traffic it crashes — like a mob blocking a doorway.' },
      { front: 'Malware', back: 'Malicious software: viruses, worms, keyloggers, ransomware, spyware, remote-access trojans.', k12: 'Nasty software designed to damage, spy on, or hold your data hostage.' },
      { front: 'Ransomware', back: 'Malware that encrypts your files and demands payment to unlock them.', k12: 'Software that locks your files and demands money for the key.' },
      { front: 'Phishing (and variants)', back: 'Social engineering via fake messages: phishing (email), spear phishing (targeted), smishing (SMS), vishing (voice), pharming.', k12: 'Tricking people with fake emails/texts/calls to hand over passwords or money.' },
      { front: 'SQL injection', back: 'Inserting malicious SQL into an input field to access or damage a database.', k12: 'Typing sneaky code into a website box to trick its database into spilling secrets.' },
      { front: 'Poor cyber hygiene', back: 'Careless user habits (unlocked machines, written-down passwords, poor password management) that create vulnerabilities.', k12: 'Sloppy habits like leaving your computer unlocked or writing your password on a sticky note.' },
      { front: 'Tailgating', back: 'An unauthorised person following an authorised one through a secure door; prevented by access control + not letting people in.', k12: 'Sneaking through a locked door right behind someone who has a pass.' },
      { front: 'Shoulder surfing', back: 'Watching someone enter passwords/data over their shoulder; countered by privacy screens and awareness.', k12: 'Someone peeking over your shoulder to steal your password.' },
      { front: 'Zero-day bug', back: 'A software flaw exploited before the vendor has released a patch.', k12: 'A secret weakness hackers find before the fix exists.' }
    ],
    quiz: [
      { q: 'Flooding a website so it becomes unavailable is a…', opts: ['Phishing attack','Denial of Service (DoS) attack','Backup','Firewall'], a: 1, marks: 1, fb: 'DoS/DDoS overwhelms a service.' },
      { q: 'Malware that encrypts files and demands payment is…', opts: ['A worm','Ransomware','A keylogger','Spyware'], a: 1, marks: 1, fb: 'Ransomware.' },
      { q: 'A fake text message trying to steal details is…', opts: ['Phishing','Smishing','Vishing','Pharming'], a: 1, marks: 1, fb: 'Smishing = SMS phishing.' },
      { q: 'Leaving a machine unlocked and writing passwords down is…', opts: ['Good practice','Poor cyber hygiene','Encryption','A firewall'], a: 1, marks: 1, fb: 'Poor cyber hygiene.' },
      { q: 'Inserting malicious code into a database input field is…', opts: ['SQL injection','A DDoS','A backup','Tailgating'], a: 0, marks: 1, fb: 'SQL injection.' },
      { q: 'Which is a technical VULNERABILITY (not a threat)?', opts: ['A virus','Weak password policy / no MFA','A hacker','A botnet'], a: 1, marks: 1, fb: 'Inadequate security processes are vulnerabilities.' },
      { q: 'Give one way to mitigate the threat of a disguised criminal entering a building.', opts: ['Open all doors','Accompany all visitors and check ID','Disable the firewall','Share passwords'], a: 1, marks: 2, fb: 'Accompany visitors at all times and check identification.' },
      { q: 'An unauthorised person following staff through a secure door is…', opts: ['Tailgating','Encryption','A worm','A patch'], a: 0, marks: 1, fb: 'Tailgating.' }
    ],
    practice: [
      { q: 'Explain one way of protecting data against poor cyber hygiene.', marks: 2, cmd: 'Explain', points: ['1 mark way + 1 mark linked justification.','Lock unattended machines (1) to prevent unauthorised access (1). Not writing passwords down (1) to prevent disclosure (1). Improve password management (1) to protect against brute force (1).'], model: 'One way is to <strong>lock all unattended machines</strong> (1), which prevents unauthorised access by anyone who walks past while the user is away from their desk (1).' },
      { q: 'Explain one way of preventing a disguised criminal causing damage to an organisation\'s digital system.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Accompany at all times (1) to prevent them wandering freely around the organisation (1). Check identification (1) to make it harder to pose as staff/contractors (1).'], model: 'One way is to <strong>check the identification</strong> of all visitors (1), which makes it much harder for a criminal to pose as a contractor or member of staff and gain access to systems (1).' }
    ],
    test: {
      mcq: [
        { q: 'A program that secretly records keystrokes is a…', opts: ['Keylogger','Firewall','Switch','Backup'], a: 0, marks: 1, fb: 'Keylogger.' },
        { q: 'A fake phone call to extract information is…', opts: ['Smishing','Vishing','Pharming','Phishing'], a: 1, marks: 1, fb: 'Vishing = voice phishing.' },
        { q: 'Using an open/unsecured Wi-Fi network is a…', opts: ['Strong control','Technical threat/vulnerability','Backup type','Topology'], a: 1, marks: 1, fb: 'Open Wi-Fi exposes traffic to attackers.' },
        { q: 'Mitigating human error is best done with…', opts: ['Confirmation boxes and staff training','Removing all backups','Opening all ports','Sharing passwords'], a: 0, marks: 1, fb: 'Confirmation boxes, file properties and training.' },
        { q: 'A malicious employee should be…', opts: ['Given more access','Removed from premises and accounts suspended','Ignored','Promoted'], a: 1, marks: 1, fb: 'Immediate removal + suspend accounts.' },
        { q: 'Which is a PHYSICAL vulnerability?', opts: ['SQL injection','Lack of access control / shoulder surfing','A worm','Weak encryption'], a: 1, marks: 2, fb: 'Physical: access control, shoulder surfing, environment, vandalism, disasters.' }
      ],
      structured: [
        { q: 'Identify two types of malware.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): virus; worm; keylogger; ransomware; spyware; remote-access trojan.'], model: 'Two types of malware are <strong>ransomware</strong> and a <strong>keylogger</strong>.' },
        { q: 'Explain one way to mitigate the threat of a malicious employee.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Suspend accounts immediately (1) so they can no longer log in (1), preventing them from deleting, stealing or modifying data once their intent is known (1). OR remove from premises…'], model: 'One way is to <strong>suspend the employee\'s user accounts immediately</strong> (1): this removes their ability to log into systems (1), so once their malicious intent is suspected they cannot delete, steal or modify company data, limiting the damage they can do (1).' }
      ],
      nine: {
        scenario: 'GEM Corporation\'s cloud system has recently suffered a Denial of Service (DoS) attack that took its management system offline. It is worried about future technical threats and how exposed it is.',
        q: 'Evaluate the technical threats GEM Corporation faces and how it could mitigate them.',
        indicative: ['DoS/DDoS: flooding → downtime; mitigate with firewall filtering, IPS, rate limiting, load balancer/redundancy.','Malware (ransomware/spyware): anti-malware, updates, backups.','Social engineering (phishing): staff training, MFA.','Vulnerabilities enabling these: weak passwords/no MFA, out-of-date components/zero-days → patching, MFA, strong password policy.','Impacts: downtime, data loss/leak, unauthorised access.','Conclusion weighing seriousness vs achievable mitigations.'],
        model: 'GEM Corporation faces several serious technical threats. The most immediate, given the recent attack, is <strong>DoS/DDoS</strong>: flooding the system with traffic causes <strong>downtime</strong> and disruption of service. This can be mitigated with a <strong>firewall</strong> to filter suspicious traffic, an <strong>intrusion prevention system</strong>, a <strong>rate limiter</strong> to cap requests per IP, and a <strong>load balancer or redundancy</strong> to absorb spikes. <br><br>Beyond DoS, GEM is exposed to <strong>malware</strong> such as ransomware and spyware — mitigated with <strong>anti-malware, regular updates and backups</strong> — and to <strong>social engineering</strong> like phishing, best countered by <strong>staff training and MFA</strong>. These threats often succeed because of <strong>vulnerabilities</strong>: weak passwords, no MFA, or out-of-date components with zero-day bugs, so a strong <strong>password policy, MFA and patching</strong> reduce the attack surface. <br><br>The potential <strong>impacts</strong> are significant — service disruption (as already experienced), data loss or leakage, and unauthorised access — which could harm operations and reputation. <br><br>Overall, GEM faces real and varied technical threats, but they are <strong>manageable</strong>: a layered approach (firewall + IPS + rate limiting/redundancy for DoS, anti-malware and backups for malware, and MFA + training + patching to close vulnerabilities) would substantially reduce both the likelihood and impact of future attacks. The threats are serious, but with sensible, affordable mitigations GEM can protect itself effectively rather than remaining as exposed as it was during the DoS attack.'
      }
    }
  },
  /* 8.3 */
  {
    id: 'co8-3', code: '8.3', title: 'Threat Mitigation',
    learn: `
      <h2>Common mitigation techniques (8.3.1)</h2>
      <ul class="tight">
        <li><strong>Security settings</strong> (hardware &amp; software), <strong>anti-malware</strong>, <strong>intrusion detection</strong>.</li>
        <li><strong>Encryption</strong> — hashing, symmetric (one shared key), asymmetric (public/private key pair).</li>
        <li><strong>User access policies</strong>, <strong>staff vetting</strong>, <strong>staff training</strong>, <strong>software-based access control</strong>.</li>
        <li><strong>Device hardening</strong>, <strong>backups</strong> (full/incremental/differential + safe storage), <strong>software &amp; firmware/driver updates</strong>.</li>
        <li><strong>Air gaps</strong>, <strong>certification of APIs</strong>, <strong>VPNs</strong>, <strong>MFA</strong>, <strong>password managers</strong>.</li>
        <li><strong>Port scanning</strong>, <strong>penetration testing</strong> (ethical vs unethical hacking).</li>
      </ul>
      <h2>Internet security &amp; firewalls (8.3.2)</h2>
      <ul class="tight">
        <li><strong>Firewall configuration</strong> — rules for inbound/outbound traffic, <strong>traffic-type rules</strong> (ports/protocols), <strong>application rules</strong>, <strong>IP address rules</strong>.</li>
        <li><strong>Network segregation</strong> — virtual, physical, or an offline network.</li>
        <li><strong>Network monitoring</strong> and <strong>port scanning</strong>.</li>
      </ul>
      <div class="callout tip">Encryption quick facts: <strong>symmetric</strong> = same key both ends (fast); <strong>asymmetric</strong> = public key encrypts, private key decrypts; <strong>hashing</strong> = one-way, used to store/verify passwords (not reversible).</div>`,
    like12: `
      <p>🛡️ <strong>Threat mitigation</strong> = all the ways to stop the bad guys:</p>
      <ul class="tight">
        <li><strong>Anti-malware &amp; firewalls</strong> — a guard dog and a wall that block nasties. A <strong>firewall</strong> has rules about what traffic to let in/out.</li>
        <li><strong>Encryption</strong> — scrambling data so only the right person can read it (like a secret code). <strong>Hashing</strong> scrambles passwords one-way so even the company can't un-scramble them.</li>
        <li><strong>MFA</strong> — needing a second proof (a code on your phone) as well as a password.</li>
        <li><strong>Backups &amp; updates</strong> — keep spare copies and fix weak spots.</li>
        <li><strong>Penetration testing</strong> — paying "good hackers" to try to break in so you can fix the holes first.</li>
      </ul>
      <p>🧱 You can also <strong>separate networks</strong> (network segregation) or fully cut one off (an <strong>air gap</strong>) so the most secret stuff isn't even connected to the internet.</p>`,
    flashcards: [
      { front: 'Firewall', back: 'Controls network traffic using rules (inbound/outbound, traffic type/ports, application and IP-address rules) to block unwanted traffic.', k12: 'A guarded wall with rules deciding which internet traffic is allowed in or out.' },
      { front: 'Encryption (symmetric vs asymmetric)', back: 'Symmetric uses one shared key (fast); asymmetric uses a public key to encrypt and a private key to decrypt.', k12: 'Scrambling data. Symmetric = same key both ends; asymmetric = a public lock and a private key.' },
      { front: 'Hashing', back: 'A one-way function turning data into a fixed value; used to store/verify passwords without storing them in plain text.', k12: 'A one-way scrambler for passwords — you can\'t unscramble it back.' },
      { front: 'Multi-factor authentication (MFA)', back: 'Requiring two or more proofs of identity (e.g. password + phone code) to log in.', k12: 'Needing two keys to get in — your password AND a code on your phone.' },
      { front: 'Device hardening', back: 'Securing a device: updates, disabling unused services/ports, encryption, unique logins, antivirus, configured firewalls.', k12: 'Locking a device down tight so attackers can\'t get in.' },
      { front: 'Penetration testing', back: 'Authorised (ethical) hacking to find vulnerabilities before attackers do; unethical hacking is malicious/illegal.', k12: 'Paying good-guy hackers to break in first so you can fix the holes.' },
      { front: 'Air gap', back: 'Physically isolating a system from other networks/the internet so it cannot be remotely attacked.', k12: 'Keeping the most secret computer totally unplugged from the internet.' },
      { front: 'Network segregation', back: 'Splitting a network (virtually, physically, or offline) so a breach in one part cannot reach the rest.', k12: 'Splitting the network into separate sections so a break-in in one doesn\'t reach everything.' }
    ],
    quiz: [
      { q: 'A firewall controls traffic using…', opts: ['Clock speed','Rules (IP, ports, application, inbound/outbound)','RAM size','Cable colour'], a: 1, marks: 1, fb: 'Firewalls apply rules to traffic.' },
      { q: 'Encryption that uses one shared key is…', opts: ['Asymmetric','Symmetric','Hashing','Port scanning'], a: 1, marks: 1, fb: 'Symmetric = same key both ends.' },
      { q: 'Storing passwords using a one-way function is…', opts: ['Hashing','Symmetric encryption','A firewall','A backup'], a: 0, marks: 1, fb: 'Hashing is one-way.' },
      { q: 'MFA improves security by…', opts: ['Removing passwords','Requiring a second proof of identity','Disabling the firewall','Opening ports'], a: 1, marks: 1, fb: 'Adds a second factor (e.g. phone code).' },
      { q: 'Authorised hacking to find weaknesses first is…', opts: ['Unethical hacking','Penetration testing','A DoS','Phishing'], a: 1, marks: 1, fb: 'Penetration testing (ethical hacking).' },
      { q: 'Completely isolating a system from networks is an…', opts: ['Air gap','API','IMAP','ISP'], a: 0, marks: 1, fb: 'An air gap.' },
      { q: 'Give two things a firewall can use to filter traffic.', opts: ['Cable length and colour','IP addresses and ports/protocols','RAM and CPU','Screen size and weight'], a: 1, marks: 2, fb: 'IP-address rules and traffic-type (port/protocol) rules.' },
      { q: 'Asymmetric encryption uses…', opts: ['One shared key','A public key to encrypt and a private key to decrypt','No keys','Only hashing'], a: 1, marks: 1, fb: 'Public/private key pair.' }
    ],
    practice: [
      { q: 'Explain two ways a firewall can be configured to control incoming network traffic.', marks: 4, cmd: 'Explain', points: ['1 mark identification + 1 mark linked justification, ×2 (max 4).','IP address rules (1) to block traffic from specific sources (1).','Traffic-type rules (1) based on ports/protocols (1).','Application rules (1) to block unsafe packets/apps (1).'], model: 'A firewall can be configured with <strong>IP-address rules</strong> (1) to block traffic coming from specific, untrusted source addresses (1). It can also use <strong>traffic-type rules</strong> (1) that allow or block traffic based on the ports and protocols being used, so only expected services are permitted (1).' },
      { q: 'Explain one benefit of using multi-factor authentication.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Stronger access control (1) — even if a password is stolen, the attacker still needs the second factor, preventing unauthorised access (1).'], model: 'MFA provides stronger protection against unauthorised access (1): even if an attacker steals or guesses a user\'s password, they still cannot log in without the second factor such as a code on the user\'s phone, so the account stays secure (1).' }
    ],
    test: {
      mcq: [
        { q: 'Anti-malware software primarily…', opts: ['Speeds up Wi-Fi','Detects and removes malicious software','Routes packets','Adds RAM'], a: 1, marks: 1, fb: 'Detects/removes malware.' },
        { q: 'Splitting a network so a breach can\'t spread is…', opts: ['Network segregation','Hashing','A DoS','Tailgating'], a: 0, marks: 1, fb: 'Network segregation.' },
        { q: 'A password manager helps by…', opts: ['Writing passwords on paper','Securely storing strong unique passwords','Disabling MFA','Sharing passwords'], a: 1, marks: 1, fb: 'Stores strong, unique credentials securely.' },
        { q: 'Differential backups store changes since the last…', opts: ['Backup of any type','Full backup','Reboot','Login'], a: 1, marks: 1, fb: 'Differential = since last full backup.' },
        { q: 'Port scanning is used to…', opts: ['Encrypt files','Identify open ports/potential weaknesses','Send email','Add storage'], a: 1, marks: 1, fb: 'Finds open ports that may be exploitable.' },
        { q: 'A drawback of strong encryption for an organisation is…', opts: ['It is illegal','Lost keys can make data unrecoverable / management overhead','It speeds attacks','It deletes data'], a: 1, marks: 2, fb: 'Key management is critical; lost keys lock you out.' }
      ],
      structured: [
        { q: 'Identify two threat-mitigation techniques an organisation could use.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): anti-malware; firewall; encryption; MFA; backups; device hardening; staff training; intrusion detection; VPN; pen testing.'], model: 'Two techniques are <strong>multi-factor authentication (MFA)</strong> and <strong>anti-malware software</strong>.' },
        { q: 'Explain one benefit of an organisation carrying out penetration testing.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Finds vulnerabilities first (1) — ethical hackers identify weaknesses before criminals do (1), so they can be fixed/patched, reducing the chance of a real breach (1).'], model: 'Penetration testing lets an organisation <strong>find its vulnerabilities first</strong> (1): authorised ethical hackers deliberately try to break in and identify weaknesses before real attackers do (1), so those holes can be patched, greatly reducing the chance of a successful breach later (1).' }
      ],
      nine: {
        scenario: 'A wireless card reader in a coffee shop uses an unencrypted Wi-Fi connection to process customer card payments, and staff often reuse simple passwords. The owner wants to improve security.',
        q: 'Evaluate the most suitable threat-mitigation techniques the coffee shop should introduce.',
        indicative: ['Encrypt the connection (WPA2/3) / use HTTPS so card data can\'t be intercepted (data theft, malware risk).','Strong password policy + password manager + MFA to fix weak/reused passwords.','Device hardening + firewall config (IP/port/application rules) + updates.','Network segregation so the payment system is isolated from public Wi-Fi.','Staff training (cyber hygiene, phishing).','Conclusion prioritising encryption + access controls as most impactful, cost vs benefit.'],
        model: 'The coffee shop should prioritise the mitigations that address its two biggest weaknesses: the <strong>unencrypted payment connection</strong> and <strong>weak, reused passwords</strong>. The most important step is <strong>encryption</strong> — enabling WPA2/WPA3 on the Wi-Fi and ensuring card data is transmitted over an encrypted (HTTPS) connection — because an unencrypted link lets criminals intercept card details (data theft) or inject malware. <br><br>Second, the password problem should be fixed with a <strong>strong password policy</strong>, a <strong>password manager</strong> for unique credentials, and <strong>MFA</strong>, so that even a guessed password cannot be used alone. The shop should also <strong>segregate</strong> the payment system from the public customer Wi-Fi, configure a <strong>firewall</strong> (IP/port/application rules), keep devices updated (<strong>device hardening</strong>), and provide basic <strong>staff training</strong> on cyber hygiene and phishing. <br><br>Weighing these up, <strong>encryption and access controls (MFA + strong passwords)</strong> give the biggest security improvement for the lowest cost and should come first; network segregation and firewall tuning add valuable defence-in-depth but need a little more expertise. <br><br>Overall, the most suitable approach is a layered one led by encrypting the payment connection and strengthening authentication, which directly removes the shop\'s current high-risk weaknesses while remaining realistic for a small business to implement.'
      }
    }
  },
  /* 8.4 */
  {
    id: 'co8-4', code: '8.4', title: 'CIA Triad & IAAA Model',
    learn: `
      <h2>The CIA triad (8.4.1)</h2>
      <ul class="tight">
        <li><strong>Confidentiality</strong> — keeping data private by controlling who can access it.</li>
        <li><strong>Integrity</strong> — ensuring data hasn\'t been tampered with (supported by maintaining confidentiality).</li>
        <li><strong>Availability</strong> — ensuring data is available and usable when needed (supported by ensuring integrity).</li>
      </ul>
      <p>The three interrelate: protecting confidentiality helps protect integrity, which in turn helps availability — all three are needed for genuine security.</p>
      <h2>The IAAA model (8.4.2)</h2>
      <ul class="tight">
        <li><strong>Identification</strong> — recognising who the user claims to be (e.g. username; knowledge-, possession- or biometric-based).</li>
        <li><strong>Authentication</strong> — verifying that claimed identity (passwords/passphrases, biometrics, MFA).</li>
        <li><strong>Authorisation</strong> — ensuring authenticated users can only access what they\'re permitted to (role-based access, access control lists).</li>
        <li><strong>Accountability</strong> — ensuring actions can be traced to the responsible user (audit logs, user-activity monitoring).</li>
      </ul>
      <div class="callout tip">Identification = "who do you say you are?" · Authentication = "prove it" · Authorisation = "what are you allowed to do?" · Accountability = "we can trace what you did".</div>`,
    like12: `
      <p>🔺 The <strong>CIA triad</strong> is the three big goals of security (nothing to do with spies!):</p>
      <ul class="tight">
        <li><strong>Confidentiality</strong> — only the right people can see the data (keep secrets secret).</li>
        <li><strong>Integrity</strong> — the data hasn't been changed or messed with (it's correct and trustworthy).</li>
        <li><strong>Availability</strong> — the data is there when you need it (the system isn't down).</li>
      </ul>
      <p>🚪 The <strong>IAAA</strong> model is the four steps of letting someone in — like a club door:</p>
      <ul class="tight">
        <li><strong>Identification</strong> — "I'm Sam" (give your name/username).</li>
        <li><strong>Authentication</strong> — "prove it" (password, fingerprint, phone code).</li>
        <li><strong>Authorisation</strong> — "okay, you can go in the main room but not the staff office" (what you're allowed to do).</li>
        <li><strong>Accountability</strong> — the CCTV/logbook records what you did so it can be traced back to you.</li>
      </ul>`,
    flashcards: [
      { front: 'CIA triad', back: 'The three core security goals: Confidentiality, Integrity and Availability.', k12: 'The 3 big security goals: keep it secret, keep it correct, keep it available.' },
      { front: 'Confidentiality', back: 'Keeping data private by controlling who has access to it.', k12: 'Only the right people can see the data.' },
      { front: 'Integrity', back: 'Ensuring data has not been tampered with or altered, so it stays accurate and trustworthy.', k12: 'The data hasn\'t been changed or messed with — it\'s still correct.' },
      { front: 'Availability', back: 'Ensuring data and systems are available and usable when needed.', k12: 'The system is up and the data is there when you need it.' },
      { front: 'Identification (IAAA)', back: 'Recognising who a user claims to be, e.g. via a username (knowledge/possession/biometric).', k12: 'Saying who you are — like giving your name or username.' },
      { front: 'Authentication (IAAA)', back: 'Verifying the claimed identity using passwords/passphrases, biometrics or MFA.', k12: 'Proving you really are who you said — password, fingerprint or phone code.' },
      { front: 'Authorisation (IAAA)', back: 'Ensuring authenticated users can only access resources they\'re permitted to (role-based access, ACLs).', k12: 'Deciding what you\'re actually allowed to do once you\'re in.' },
      { front: 'Accountability (IAAA)', back: 'Ensuring actions can be traced to the responsible user via audit logs and activity monitoring.', k12: 'Keeping a record of what everyone did, so it can be traced back to them.' }
    ],
    quiz: [
      { q: 'What do the letters in the CIA triad stand for?', opts: ['Control, Identity, Access','Confidentiality, Integrity, Availability','Cyber, Internet, Access','Confidentiality, Identity, Authorisation'], a: 1, marks: 1, fb: 'Confidentiality, Integrity, Availability.' },
      { q: 'Ensuring data has not been tampered with is…', opts: ['Confidentiality','Integrity','Availability','Authorisation'], a: 1, marks: 1, fb: 'Integrity.' },
      { q: 'A DoS attack mainly harms which CIA goal?', opts: ['Confidentiality','Integrity','Availability','Identification'], a: 2, marks: 1, fb: 'It makes the service unavailable.' },
      { q: 'Entering a username is part of which IAAA stage?', opts: ['Identification','Authentication','Authorisation','Accountability'], a: 0, marks: 1, fb: 'Identification.' },
      { q: 'Proving identity with a password + phone code is…', opts: ['Identification','Authentication','Authorisation','Accountability'], a: 1, marks: 1, fb: 'Authentication (MFA).' },
      { q: 'Role-based access controlling what a user can do is…', opts: ['Authorisation','Identification','Availability','Integrity'], a: 0, marks: 1, fb: 'Authorisation.' },
      { q: 'Audit logs tracing actions to a user provide…', opts: ['Accountability','Confidentiality','Availability','Identification'], a: 0, marks: 2, fb: 'Accountability.' },
      { q: 'A data leak primarily breaks which CIA goal?', opts: ['Confidentiality','Integrity','Availability','None'], a: 0, marks: 1, fb: 'Confidentiality (data exposed to the wrong people).' }
    ],
    practice: [
      { q: 'State what is meant by the "confidentiality" element of the CIA triad.', marks: 2, cmd: 'What is meant by', points: ['1 + 1.','Keeping data private (1) by controlling who has access to it (1).'], model: 'Confidentiality means <strong>keeping data private</strong> (1) by <strong>controlling who is allowed to access it</strong>, so only authorised people can see it (1).' },
      { q: 'Explain how the elements of the IAAA model work together to secure a system.', marks: 4, cmd: 'Explain', points: ['1 mark each element correctly explained (max 4).','Identification — the user states who they are (username).','Authentication — they prove it (password/biometric/MFA).','Authorisation — the system limits them to permitted resources (role-based/ACL).','Accountability — actions are logged so they can be traced to the user.'], model: 'First, <strong>identification</strong> recognises who the user claims to be, e.g. via a username (1). <strong>Authentication</strong> then verifies that claim, e.g. with a password and an MFA code (1). Once verified, <strong>authorisation</strong> ensures the user can only access the resources their role permits, using role-based access or access control lists (1). Finally, <strong>accountability</strong> records actions in audit logs so any activity can be traced back to the responsible user (1). Together they ensure only the right people get in, do only what they should, and can be held responsible.' }
    ],
    test: {
      mcq: [
        { q: 'Which CIA goal does encryption most directly protect?', opts: ['Confidentiality','Availability','Accountability','Identification'], a: 0, marks: 1, fb: 'Encryption keeps data private (confidentiality).' },
        { q: 'A backup/redundancy mainly supports which CIA goal?', opts: ['Confidentiality','Availability','Identification','Authorisation'], a: 1, marks: 1, fb: 'Keeps data available after failure.' },
        { q: 'Verifying a fingerprint at login is…', opts: ['Authorisation','Authentication','Identification','Accountability'], a: 1, marks: 1, fb: 'Authentication.' },
        { q: 'An access control list (ACL) is used for…', opts: ['Authorisation','Availability','Integrity','Identification'], a: 0, marks: 1, fb: 'Controls what a user may access (authorisation).' },
        { q: 'Data being altered by an attacker breaks…', opts: ['Integrity','Availability only','Identification','Authentication'], a: 0, marks: 1, fb: 'Integrity.' },
        { q: 'Which statement about the CIA triad is correct?', opts: ['The goals are unrelated','Maintaining confidentiality helps protect integrity, which helps availability','Only availability matters','It only applies to spies'], a: 1, marks: 2, fb: 'The three goals interrelate and all are needed.' }
      ],
      structured: [
        { q: 'Identify the three elements of the CIA triad.', marks: 2, cmd: 'Identify', points: ['1 mark for any two (max 2): Confidentiality; Integrity; Availability.'], model: 'The three elements are <strong>Confidentiality</strong>, <strong>Integrity</strong> and <strong>Availability</strong>.' },
        { q: 'Explain the difference between authentication and authorisation.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Authentication verifies identity (proving who you are) (1); authorisation controls what that verified user is allowed to access/do (1).'], model: '<strong>Authentication</strong> verifies that a user really is who they claim to be, e.g. by checking a password or biometric (1). <strong>Authorisation</strong> then controls what that authenticated user is actually allowed to access or do, e.g. through role-based permissions (1).' }
      ],
      nine: {
        scenario: 'A hospital stores confidential patient records on a digital system used by many staff. It must ensure records stay private, accurate and always available to clinicians, and that any access can be traced.',
        q: 'Evaluate how the CIA triad and IAAA model can help the hospital secure its patient records.',
        indicative: ['Confidentiality: access control + encryption keeps records private (legal/ethical duty).','Integrity: prevent tampering so clinical decisions use accurate data; supported by controlled access.','Availability: records must be there in emergencies → redundancy/backups/resilience.','IAAA: identification (staff IDs), authentication (MFA/biometrics), authorisation (role-based — nurse vs admin), accountability (audit logs trace who viewed records).','Tension: strong security vs fast access in emergencies.','Conclusion: combined models give balanced, traceable security.'],
        model: 'The CIA triad and IAAA model together give the hospital a strong framework for securing patient records. Under the <strong>CIA triad</strong>, <strong>confidentiality</strong> is critical because records are highly sensitive — access controls and encryption ensure only authorised clinicians can read them, meeting legal and ethical duties. <strong>Integrity</strong> matters because clinical decisions depend on accurate data, so the system must prevent tampering (helped by the same access controls). <strong>Availability</strong> is vital in emergencies, so backups and redundancy must keep records accessible at all times. <br><br>The <strong>IAAA model</strong> controls who gets in and what they do: <strong>identification</strong> (each staff member has a unique ID), <strong>authentication</strong> (verified with MFA or biometrics so a stolen password isn\'t enough), <strong>authorisation</strong> (role-based access so a receptionist cannot see clinical notes a doctor can), and <strong>accountability</strong> (audit logs trace exactly who accessed each record). <br><br>There is a tension: very strict security could slow clinicians down in an emergency, where fast access can be life-critical — so the hospital must balance protection with usability (e.g. break-glass access that is still logged). <br><br>Overall, applying CIA and IAAA together is highly suitable: CIA defines the goals (private, accurate, available) and IAAA provides the controls (identify, authenticate, authorise, hold accountable). Used in combination, they give the hospital strong, traceable security — provided it balances tight control with the clinicians\' need for rapid access.'
      }
    }
  }
  ],
  nutshell: `
    <h2>CO8 — Everything in a Nutshell</h2>
    <h3>8.1 Security Risks</h3><p>Confidential info: HR (salaries, staff details), commercial (IP, clients, contracts, sales), access info (passwords, PINs, MFA, biometrics). Keep it secret to stop poaching, copying, client loss and unauthorised access. Failing → non-compliance/loss of licence, loss of trust, image damage, financial loss (fines/refunds), legal action, reduced security.</p>
    <h3>8.2 Threats &amp; Vulnerabilities</h3><p>Technical threats: botnets, DoS/DDoS, hacking (brute force, XSS, SQL injection, buffer overflow), malware (virus, worm, keylogger, ransomware, spyware, RAT), social engineering (phishing/spear/smishing/vishing/pharming/USB baiting), DNS attacks, open Wi-Fi. Vulnerabilities: weak encryption/passwords, no MFA, out-of-date components/zero-days. Human: error, malicious employee, disguised criminal, poor cyber hygiene. Physical: poor access control, tailgating, shoulder surfing, disasters. Impacts: data loss/leak, unauthorised access, corruption, disruption.</p>
    <h3>8.3 Threat Mitigation</h3><p>Anti-malware, firewalls (IP/port/application/in-out rules), encryption (symmetric/asymmetric/hashing), MFA, access policies, vetting, training, device hardening, backups, updates, air gaps, VPNs, password managers, port scanning, penetration testing. Internet security: firewall config, network segregation (virtual/physical/offline), monitoring.</p>
    <h3>8.4 CIA &amp; IAAA</h3><p><strong>CIA</strong> = Confidentiality, Integrity, Availability (interrelated). <strong>IAAA</strong> = Identification → Authentication → Authorisation → Accountability.</p>
    <div class="callout tip">Exam hooks: protect against poor cyber hygiene, firewall configuration, device hardening benefit, prevent disguised criminals, CIA triad meaning, mitigate a DoS attack.</div>`
});

indexKB('CO8','Security','8.1 Confidential information','Organisations hold confidential information including HR data (salaries, benefits, staff personal details), commercially sensitive information (client and stakeholder details, intellectual property, sales numbers, contracts) and access information (usernames, passwords, MFA details, PINs, access codes, passphrases, biometric data). It is kept confidential to stop competitors poaching staff, copying designs or contacting clients, to protect privacy, and to prevent unauthorised access. Failing to maintain confidentiality leads to non-compliance and loss of licence, loss of trust, damage to image, financial loss (fines, refunds, lost contracts), legal action and reduced security.');
indexKB('CO8','Security','8.2 Threats and vulnerabilities','Technical threats include botnets, denial of service and distributed denial of service, malicious hacking (password cracking and brute force, cross-site scripting, SQL injection, buffer overflow), malware (viruses, worms, keyloggers, ransomware, spyware, remote-access trojans), social engineering (phishing, spear phishing, smishing, vishing, pharming, watering hole attacks, USB baiting), DNS attacks and open unsecured Wi-Fi. Vulnerabilities include weak encryption, weak password policy, no multi-factor authentication and out-of-date hardware, software or firmware with zero-day bugs. Human threats: human error, malicious employees, disguised criminals and poor cyber hygiene (locking unattended machines, not writing passwords down). Physical vulnerabilities: poor access control, tailgating, shoulder surfing, vandalism and natural disasters. Impacts include data loss or leaking, unauthorised access, data corruption and disruption of service.');
indexKB('CO8','Security','8.3 Threat mitigation','Mitigation techniques include security settings, anti-malware, intrusion detection, encryption (hashing, symmetric and asymmetric), user access policies, staff vetting and training, software-based access control, device hardening, backups (full, incremental, differential, stored safely), software and firmware updates, air gaps, API certification, VPNs, multi-factor authentication, password managers, port scanning and penetration testing (ethical hacking). Internet security uses firewall configuration with rules for inbound and outbound traffic, traffic type (ports and protocols), application rules and IP address rules, plus network segregation (virtual, physical or offline) and network monitoring.');
indexKB('CO8','Security','8.4 CIA triad and IAAA model','The CIA triad is Confidentiality (keeping data private by controlling access), Integrity (ensuring data has not been tampered with) and Availability (ensuring data is available and usable). They interrelate: confidentiality supports integrity which supports availability. The IAAA model is Identification (recognising who a user claims to be, e.g. username), Authentication (verifying that identity with passwords, biometrics or MFA), Authorisation (ensuring users only access what they are permitted, via role-based access or access control lists) and Accountability (tracing actions to the responsible user with audit logs and activity monitoring).');
