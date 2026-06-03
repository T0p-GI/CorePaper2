/* =========================================================================
   co6.js — Content Area 6: Emerging Technologies & Issues
   Source: ZigZag "Emerging Issues" Course Companion (used for the CO6 slot,
   per the learner's instruction). Teaching content only.
   ========================================================================= */
registerArea({
  id: 'co6', code: 'CO6', title: 'Emerging Technologies & Issues',
  blurb: 'How reliance on digital systems affects culture, work and society — plus the impact of emerging technologies.',
  units: [
  /* 6.1 */
  {
    id: 'co6-1', code: '6.1', title: 'Impact of Digital Technologies',
    learn: `
      <h2>Impact of increased reliance on digital systems</h2>
      <ul class="tight">
        <li><strong>Organisational culture</strong> — adoption can be resisted by staff (e.g. strikes over automation), but reshapes how the organisation works.</li>
        <li><strong>Changes in communication</strong> — email, instant messaging and video calls (Zoom/Teams) replace post and travel; faster but more informal.</li>
        <li><strong>Increased productivity &amp; availability expectations</strong> — tools speed work up, but staff are expected to deliver more and may face pressure/"always-on" stress.</li>
        <li><strong>Increase in staff monitoring</strong> — activity, browsing, keystrokes, idle time. Benefits (security, fairness) vs drawbacks (privacy, morale, stress).</li>
        <li><strong>New working practices</strong> — remote/hybrid/flexible working; agile methods (Scrum, Kanban). Risk: blurred work–life boundaries, burnout.</li>
        <li><strong>Automation of services (incl. AI)</strong> — fewer routine jobs, reskilling needed; some job displacement and rising minimum-wage roles.</li>
        <li><strong>Impacts on society</strong> — job losses &amp; shifting skills, privacy/digital footprint, changing behaviours, wider social networks, globalisation, more AI in daily life.</li>
      </ul>
      <h2>Importance of digital inclusion</h2>
      <p>Some people are excluded (~10% of UK adults rarely/never online). Address through: <strong>suitable technologies</strong> (affordable hardware/software, assistive tools), <strong>connectivity</strong> (rural broadband), <strong>checking for bias in datasets</strong>, <strong>codes of best practice</strong> and <strong>accessibility regulations</strong> (e.g. WCAG).</p>
      <h2>End-user characteristics</h2>
      <p>Adapt systems to: IT skill level, literacy levels, internal vs external audiences, cultural differences, bias (including AI bias from unrepresentative training data → needs anti-bias training + human oversight), and additional needs (e.g. voice recognition for sight loss).</p>
      <h2>Professional development (CPD)</h2>
      <p>Benefits: increased <strong>industry/sector competence</strong>, increased <strong>employability and job security</strong>, and <strong>knowledge of &amp; adherence to industry standards</strong> (ISO, data law, codes of ethics) — building trust and reducing risk.</p>`,
    like12: `
      <p>📱 As we rely on tech more, <strong>work changes</strong>. People email instead of posting letters, have meetings on Zoom, and bosses can <strong>monitor</strong> what you do on your work computer. That helps security but can feel like being watched.</p>
      <p>🤖 <strong>Automation/AI</strong> does boring repetitive jobs faster — great, but some people lose their jobs and have to learn new skills.</p>
      <p>🌍 For <strong>society</strong>: we're more connected (friends worldwide!), but there are worries about privacy, screen addiction, and fake online lives.</p>
      <p>🧓 <strong>Digital inclusion</strong> means making sure <em>everyone</em> can join in — not just people with the latest phone and good internet. So we provide affordable devices, accessibility tools, and avoid unfair "AI bias".</p>
      <p>📚 <strong>CPD</strong> (keeping your skills up to date) is like levelling up in a game — it keeps you good at your job and harder to "delete" (made redundant).</p>`,
    flashcards: [
      { front: 'Staff monitoring', back: 'Employers tracking activity (browsing, keystrokes, idle time). Benefits: security, fairness. Drawbacks: privacy, morale, stress.', k12: 'The boss\'s computer can watch what you do at work — good for safety, but can feel creepy.' },
      { front: 'Automation', back: 'Using machines/AI to do routine tasks; boosts productivity but can displace jobs and demands reskilling.', k12: 'Machines/AI doing the boring jobs — faster, but some people lose work and must learn new skills.' },
      { front: 'Digital inclusion', back: 'Ensuring everyone can access and use digital services regardless of income, skills, location or disability.', k12: 'Making sure everyone can join the digital world, not just people with money and good internet.' },
      { front: 'Digital footprint', back: 'The trail of data you leave online through browsing, social media and purchases.', k12: 'The data trail you leave everywhere online — like muddy footprints across the internet.' },
      { front: 'AI bias', back: 'When AI makes unfair decisions because its training data was unrepresentative or reflected past bias; needs anti-bias training + human oversight.', k12: 'When AI is unfair because it learned from biased examples — like only seeing one type of person.' },
      { front: 'Agile working', back: 'Flexible, iterative ways of working (Scrum, Kanban) with continuous feedback, vs rigid traditional methods.', k12: 'Working in small quick steps and adjusting as you go, instead of one big rigid plan.' },
      { front: 'CPD', back: 'Continuing Professional Development — keeping skills/knowledge up to date throughout your career.', k12: 'Levelling up your skills so you stay good at your job and don\'t fall behind.' },
      { front: 'Globalisation (digital)', back: 'Worldwide interconnection of people, cultures and economies via digital communication.', k12: 'The world feels smaller online — you can work with or watch people from anywhere.' }
    ],
    quiz: [
      { q: 'Which is an impact of digital systems on organisational culture?', opts: ['Faster cabling','Staff resistance to automation','More RAM','Lower latency'], a: 1, marks: 1, fb: 'Cultural impacts include resistance to change/automation.' },
      { q: 'A benefit to employers of monitoring staff activity is…', opts: ['Higher latency','Improved security and fairer investigations','More spam','Slower work'], a: 1, marks: 1, fb: 'Monitoring aids security and can clear staff of false allegations.' },
      { q: 'A drawback of staff monitoring is…', opts: ['Reduced privacy and morale','Faster broadband','Cheaper hardware','More storage'], a: 0, marks: 1, fb: 'It can feel like an invasion of privacy, harming morale.' },
      { q: 'Digital inclusion is mainly about…', opts: ['Faster CPUs','Ensuring everyone can access digital services','Selling more products','Reducing bandwidth'], a: 1, marks: 1, fb: 'Fair access for all, regardless of skills/income/location.' },
      { q: 'AI bias usually comes from…', opts: ['Too much RAM','Unrepresentative or biased training data','Fibre cabling','Strong passwords'], a: 1, marks: 1, fb: 'Bias in training data leads to biased AI decisions.' },
      { q: 'Scrum and Kanban are examples of…', opts: ['Network topologies','Agile working practices','Encryption types','Backup types'], a: 1, marks: 1, fb: 'Agile frameworks.' },
      { q: 'One impact of automation on society is…', opts: ['Guaranteed pay rises','Job displacement and a need to reskill','Lower electricity use','Slower communication'], a: 1, marks: 2, fb: 'Automation displaces routine jobs and shifts skill requirements.' },
      { q: 'CPD increases employment security because it…', opts: ['Hides your data','Keeps skills current and makes you more valuable','Reduces your salary','Removes monitoring'], a: 1, marks: 1, fb: 'Up-to-date skills make you more employable and less likely to be made redundant.' }
    ],
    practice: [
      { q: 'State two impacts an increased reliance on digital systems can have on organisational culture.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): changes in communication methods; increased productivity; increase in staff monitoring; new working practices; automation of services.'], model: 'Two impacts are <strong>changes in communication methods</strong> (e.g. video calls replacing meetings) and an <strong>increase in staff monitoring</strong>.' },
      { q: 'Explain one drawback to employees of increased staff monitoring.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Invasion of privacy (1) → lowers morale/trust and can cause stress, harming wellbeing and motivation (1).'], model: 'A drawback is that employees can feel their <strong>privacy is being invaded</strong> (1): being constantly tracked makes staff feel they are not trusted, which lowers morale and can lead to stress and friction with managers (1).' }
    ],
    test: {
      mcq: [
        { q: 'Remote and hybrid working are examples of…', opts: ['New working practices','Encryption','Topologies','Patents'], a: 0, marks: 1, fb: 'New working practices enabled by digital systems.' },
        { q: 'A risk of "always-on" digital tools is…', opts: ['Better cabling','Burnout / poor work–life balance','Lower fines','More RAM'], a: 1, marks: 1, fb: 'Blurred boundaries can cause stress/burnout.' },
        { q: 'Providing affordable devices and assistive tools supports…', opts: ['Audience exclusion','Digital inclusion','AI bias','Latency'], a: 1, marks: 1, fb: 'Digital inclusion.' },
        { q: 'To reduce AI bias, organisations should…', opts: ['Use less RAM','Apply anti-bias training and human oversight','Remove all data','Increase bandwidth'], a: 1, marks: 1, fb: 'Anti-bias training plus human oversight.' },
        { q: 'CPD helps adherence to…', opts: ['Industry standards','Cabling lengths','Topologies','Packet sizes'], a: 0, marks: 1, fb: 'Knowledge of and adherence to industry standards.' },
        { q: 'Adapting a website\'s language to the user\'s literacy level addresses which factor?', opts: ['Bandwidth','End-user characteristics','Latency','Redundancy'], a: 1, marks: 2, fb: 'End-user characteristics (literacy levels).' }
      ],
      structured: [
        { q: 'Identify two ways an organisation can improve digital inclusion.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): suitable/affordable technologies; better connectivity; checking datasets for bias; following codes of best practice; meeting accessibility regulations.'], model: 'Two ways are providing <strong>affordable, suitable technology (incl. assistive tools)</strong> and <strong>improving connectivity</strong> for rural users.' },
        { q: 'Explain one benefit to an individual of undertaking professional development.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Increased employability (1) — up-to-date skills make them more attractive to employers (1), so they are more likely to be promoted and less likely to be made redundant when changes happen (1).'], model: 'CPD increases an individual\'s <strong>employability and job security</strong> (1): keeping skills current makes them more attractive to employers (1), which means they are more likely to be considered for promotion and less likely to be made redundant when the organisation changes (1).' }
      ],
      nine: {
        scenario: 'A logistics company is rapidly introducing automation and AI (route optimisation, AI minute-taking, automated sorting). Some staff are worried about monitoring and job losses, while managers expect higher productivity.',
        q: 'Evaluate the impact of increased reliance on automation and AI on this company and its staff.',
        indicative: ['Positives: productivity, efficiency, better decisions, new higher-skill roles, route/cost savings.','Negatives: job displacement of routine roles, reskilling pressure, monitoring → privacy/morale/stress, over-reliance/failure risk.','Culture: resistance to change; need for communication/training.','Society angle: minimum-wage shift, unemployment.','Conclusion balancing efficiency gains vs human cost; mitigation via training/communication.'],
        model: 'Increased automation and AI has a <strong>mixed but significant impact</strong> on the company. On the positive side, automation raises <strong>productivity and efficiency</strong>: AI route optimisation cuts costs and delivery times, automated sorting speeds operations, and AI minute-taking frees staff for higher-value work, potentially creating new skilled roles. <br><br>However, the human cost is real. Routine roles face <strong>job displacement</strong>, forcing staff to reskill, and not all will move into the new higher-skilled jobs, which can push some into lower-paid work. Increased <strong>monitoring</strong> (a feature of these systems) risks invading privacy, lowering morale and increasing stress, and there is a danger of <strong>over-reliance</strong> — if the AI system fails, operations could stall. Culturally, anxious staff may <strong>resist</strong> the change. <br><br>These downsides can be reduced through clear <strong>communication</strong>, <strong>retraining</strong> and involving staff in the rollout. <br><br>Overall, automation and AI are likely to make the company more competitive and efficient, but the benefits come at a genuine human cost. The impact is positive for the business <em>if</em> it manages the change responsibly — communicating openly, retraining displaced staff and monitoring proportionately — otherwise it risks low morale and reputational harm. The judgement therefore depends on <em>how</em> the company implements the technology, not just whether it adopts it.'
      }
    }
  },
  /* 6.2 */
  {
    id: 'co6-2', code: '6.2', title: 'Emerging Technologies',
    learn: `
      <h2>Storage media</h2>
      <p>Storage has grown exponentially while prices fell, driving more data collection. Impacts: organisations gather big datasets/backups (but face indexing &amp; security costs); individuals get cheap cloud storage (but pay monthly fees); society stores vast personal data with environmental cost of data centres.</p>
      <h2>Processing technologies — incl. Quantum computing</h2>
      <p><strong>Quantum computing</strong> uses <strong>qubits</strong> (0, 1, or both at once) and entanglement, enabling huge speed-ups for some problems: drug discovery, <strong>cryptography/codebreaking</strong> (could break encryption in minutes), optimisation, climate modelling, larger AI. Still early: unstable, error-prone, needs near-absolute-zero. Other speed-ups: chip stacking, neuromorphic chips, optical chips.</p>
      <h2>Internet of Things (IoT) &amp; edge computing</h2>
      <p><strong>IoT</strong> connects everyday devices (watches, fridges, cars, heating) to the internet, enabled by 5G. Risks: privacy, hacking (weak default passwords), no global security standards. <strong>Edge computing</strong> processes data near where it\'s generated (less latency, less reliance on the internet) e.g. smart doorbells, factory sensors.</p>
      <h2>AI, generative AI &amp; machine learning</h2>
      <ul class="tight">
        <li><strong>AI</strong> — systems performing human-like tasks (pattern recognition, recommendations, fraud detection).</li>
        <li><strong>Generative AI</strong> — creates new content (text, image, video, audio, code): ChatGPT, Gemini, DALL·E. Risk: deepfakes, misinformation.</li>
        <li><strong>Machine learning / deep learning</strong> — systems that learn patterns and improve over time (image/speech recognition, diagnosis, spam filtering, self-driving).</li>
      </ul>
      <p>AI pros: efficiency, better decisions, cost savings, new products, accessibility, healthcare. Cons: job loss, high cost, privacy, over-reliance, bias, misinformation/deepfakes.</p>
      <h2>Other emerging tech</h2>
      <ul class="tight">
        <li><strong>AR</strong> (adds digital to real view, e.g. Pokémon Go) &amp; <strong>VR</strong> (full immersion; training, gaming). <strong>Metaverse</strong> — persistent virtual worlds.</li>
        <li><strong>Blockchain</strong> — decentralised, tamper-resistant ledger.</li>
        <li><strong>Open-source software</strong> — freely available source code.</li>
        <li><strong>Autonomous machines</strong> — self-driving vehicles, drones, robots.</li>
        <li><strong>Environmental impacts</strong> — e-waste, rare metals, data-centre energy use.</li>
      </ul>`,
    like12: `
      <p>💾 <strong>Storage</strong> keeps getting bigger and cheaper, so we save tons of photos and data (but it uses lots of energy in huge data centres).</p>
      <p>⚛️ <strong>Quantum computers</strong> use special "qubits" that can be 0 and 1 at the same time, so they could solve some puzzles incredibly fast — even cracking codes that normal computers couldn't. They're still experimental and need to be kept freezing cold.</p>
      <p>🏠 <strong>IoT</strong> = your fridge, watch and lights all connected to the internet. Handy, but if they have weak passwords, hackers can sneak in.</p>
      <p>🤖 <strong>AI</strong> spots patterns and makes decisions. <strong>Generative AI</strong> (like ChatGPT/DALL·E) <em>creates</em> new text and pictures. <strong>Machine learning</strong> means it gets better the more examples it sees. Watch out for <strong>deepfakes</strong> (fake videos).</p>
      <p>🕶️ <strong>AR</strong> adds digital stuff to the real world (Pokémon Go); <strong>VR</strong> puts you fully inside a digital world (headsets). <strong>Blockchain</strong> is a tamper-proof shared list.</p>`,
    flashcards: [
      { front: 'Quantum computing', back: 'Computing using qubits (0, 1 or both) and entanglement to solve some complex problems far faster than classical computers.', k12: 'Super-experimental computers with magic "qubits" that can be 0 and 1 at once — crazy fast at certain puzzles.' },
      { front: 'Qubit', back: 'A quantum bit that can represent 0, 1 or both simultaneously (superposition).', k12: 'A quantum "bit" that can be 0 AND 1 at the same time.' },
      { front: 'Internet of Things (IoT)', back: 'Everyday devices connected to the internet so they can be monitored/controlled remotely (watches, fridges, cars).', k12: 'When normal things like fridges and watches get connected to the internet.' },
      { front: 'Edge computing', back: 'Processing data close to where it is generated to reduce latency and reliance on the internet.', k12: 'The device does its own thinking nearby instead of sending everything to a far-away server.' },
      { front: 'Generative AI', back: 'AI that creates new content — text, images, video, audio, code (e.g. ChatGPT, DALL·E).', k12: 'AI that makes brand-new stuff: stories, pictures, even videos.' },
      { front: 'Machine learning', back: 'Systems that learn patterns from data and improve over time without explicit programming.', k12: 'AI that gets smarter the more examples it sees.' },
      { front: 'Deepfake', back: 'AI-generated fake video/audio of real people, used to mislead or spread misinformation.', k12: 'A fake video/voice made by AI that looks like a real person — used to trick people.' },
      { front: 'AR vs VR', back: 'AR adds digital elements to the real view (Pokémon Go); VR fully immerses you in a digital world (headset).', k12: 'AR = digital stuff on top of the real world; VR = fully inside a computer world.' }
    ],
    quiz: [
      { q: 'A qubit differs from a bit because it can be…', opts: ['Only 0','Only 1','0, 1 or both at once','Made of fibre'], a: 2, marks: 1, fb: 'Qubits use superposition: 0, 1 or both.' },
      { q: 'One way quantum computing could impact organisations is…', opts: ['Slower email','Breaking current encryption far faster','Cheaper cabling','More floppy disks'], a: 1, marks: 1, fb: 'It could break encryption in minutes, decreasing security.' },
      { q: 'IoT is largely enabled by which network technology?', opts: ['Floppy disks','5G broadband','Telegraph','Fax'], a: 1, marks: 1, fb: 'Faster 5G enabled widespread IoT.' },
      { q: 'A major security risk of IoT devices is…', opts: ['Too much RAM','Weak/default passwords','Fibre cabling','Strong encryption'], a: 1, marks: 1, fb: 'Weak default passwords and no global standards.' },
      { q: 'ChatGPT and DALL·E are examples of…', opts: ['Machine code','Generative AI','Blockchain','Topologies'], a: 1, marks: 1, fb: 'Generative AI creates new content.' },
      { q: 'Processing data on the device itself to cut latency is…', opts: ['Cloud computing','Edge computing','Quantum computing','Batch processing'], a: 1, marks: 1, fb: 'Edge computing.' },
      { q: 'Which is a CON of widespread AI use?', opts: ['Improved healthcare','Job displacement and bias','Better accessibility','New careers'], a: 1, marks: 2, fb: 'Cons include job loss, bias, privacy and misinformation.' },
      { q: 'Pokémon Go overlaying creatures on your camera view is…', opts: ['VR','AR','Blockchain','IoT'], a: 1, marks: 1, fb: 'Augmented reality (AR).' }
    ],
    practice: [
      { q: 'Explain one way quantum computing could impact an organisation.', marks: 2, cmd: 'Explain', points: ['1 mark identification + 1 mark linked justification.','Improve decision-making (1) by exploring complex solution spaces (1). OR decrease security (1) by breaking encryption far faster (1). OR develop advanced products (1) using fast processing (1).'], model: 'Quantum computing could <strong>decrease security</strong> for an organisation (1), because its huge processing speed could brute-force and break current encryption algorithms in minutes that would take a classical computer years, exposing previously secure data (1).' },
      { q: 'State one benefit and one drawback of an organisation using AI.', marks: 2, cmd: 'State', points: ['1 mark benefit + 1 mark drawback.','Benefit: efficiency/automation, better decisions, cost savings, new services. Drawback: job loss, high cost, privacy concerns, bias, over-reliance.'], model: 'Benefit: AI can <strong>automate repetitive tasks, improving efficiency</strong>. Drawback: it can <strong>cause job losses</strong> as roles are automated.' }
    ],
    test: {
      mcq: [
        { q: 'Which needs near-absolute-zero conditions and stable qubits?', opts: ['IoT','Quantum computing','Blockchain','VR'], a: 1, marks: 1, fb: 'Quantum computers need extreme cold and are error-prone.' },
        { q: 'A tamper-resistant decentralised ledger is…', opts: ['Blockchain','Edge computing','A KPI','A hypervisor'], a: 0, marks: 1, fb: 'Blockchain.' },
        { q: 'Self-driving cars and delivery drones are…', opts: ['Autonomous machines','Floppy disks','Open source','Topologies'], a: 0, marks: 1, fb: 'Autonomous machines.' },
        { q: 'A key environmental impact of emerging tech is…', opts: ['Lower e-waste','Data-centre energy use and e-waste','No rare metals','Zero emissions'], a: 1, marks: 1, fb: 'Data centres consume energy; devices create e-waste.' },
        { q: 'A risk of generative AI to society is…', opts: ['Cheaper RAM','Deepfakes and misinformation','Faster cabling','Lower latency'], a: 1, marks: 1, fb: 'Deepfakes/misinformation.' },
        { q: 'VR is best described as…', opts: ['Adding digital items to the real world','Full immersion in a digital world','A backup type','A firewall'], a: 1, marks: 2, fb: 'VR fully immerses the user in a digital world.' }
      ],
      structured: [
        { q: 'Identify two emerging technologies that could speed up data processing.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): quantum computing; chip stacking; neuromorphic chips; optical chips.'], model: 'Two are <strong>quantum computing</strong> and <strong>optical chips</strong> (which use light instead of electrons).' },
        { q: 'Explain one risk of an organisation deploying IoT devices on its network.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Security/hacking (1) — IoT devices often ship with weak default passwords (1), so a hacker could compromise one device and use it as a way into the wider network, risking a breach (1).'], model: 'A key risk is <strong>weak security</strong> (1): many IoT devices ship with weak or default passwords and no global security standard (1), so an attacker could hack one device and use it as an entry point into the organisation\'s wider network, leading to a data breach (1).' }
      ],
      nine: {
        scenario: 'A retail company is considering using AI to analyse its customers\' data — purchase history, demographics and online behaviour — to personalise marketing.',
        q: 'Evaluate the suitability of the company using AI to analyse its customer data.',
        indicative: ['Benefits: personalised services/recommendations, improved decision-making, efficiency in handling interactions, spotting patterns humans miss.','Risks: data privacy (sensitive personal data, GDPR), bias/discrimination from skewed data, security (attractive target), ethical/reputation (intrusive).','Application: diverse data helps spot patterns; using only current customers may bias toward existing base, less useful for attracting new customers.','Mitigations: data governance, encryption, transparency, ethical AI, human oversight.','Conclusion weighing benefits vs risks with conditions.'],
        model: 'Using AI to analyse customer data is <strong>suitable but conditional</strong>. The benefits are strong: AI can deliver <strong>personalised recommendations</strong> that improve customer satisfaction and loyalty, support <strong>better, data-driven decisions</strong>, and <strong>spot patterns across diverse data</strong> (purchases, demographics, behaviour) that a human could not, improving efficiency and marketing impact. <br><br>However, there are serious risks. The data is <strong>sensitive personal information</strong>, so misuse or a breach raises <strong>privacy and GDPR</strong> issues (fines, lost trust). AI trained on <strong>biased or only current-customer data</strong> could make unfair decisions or simply reinforce the existing customer base, making it <em>less</em> useful for attracting new customers. Holding large volumes of data also makes the company a <strong>target for cyberattacks</strong>, and overly intrusive use could be seen as <strong>unethical</strong>, damaging reputation. <br><br>These risks can be reduced with strong <strong>data governance, encryption, transparency, human oversight and ethical AI practices</strong>. <br><br>Overall, AI analysis offers real competitive advantages and is suitable <em>provided</em> the company manages privacy, bias and security responsibly. Without those safeguards the risks outweigh the gains; with them, the benefits clearly justify the approach — so suitability depends on how, not whether, it is implemented.'
      }
    }
  }
  ],
  nutshell: `
    <h2>CO6 — Everything in a Nutshell</h2>
    <h3>6.1 Impact of Digital Technologies</h3>
    <p>Reliance reshapes <strong>culture</strong> (resistance), <strong>communication</strong> (email/video), <strong>productivity</strong> (more output + pressure), <strong>monitoring</strong> (security vs privacy), <strong>working practices</strong> (remote/hybrid/agile) and <strong>automation</strong> (job loss + reskilling). Society: jobs, privacy/digital footprint, behaviour, globalisation, more AI. <strong>Digital inclusion</strong>: suitable tech, connectivity, dataset bias checks, accessibility regs. Adapt to <strong>end-user characteristics</strong>. <strong>CPD</strong> = competence + employability + standards.</p>
    <h3>6.2 Emerging Technologies</h3>
    <p><strong>Storage</strong> (cheaper/bigger, data-centre energy). <strong>Quantum computing</strong> (qubits, fast for codebreaking/optimisation, still early). <strong>IoT</strong> + <strong>edge computing</strong> (5G; weak-password risk). <strong>AI / generative AI / machine learning</strong> (efficiency &amp; new content vs bias, job loss, deepfakes). <strong>AR/VR/metaverse</strong>, <strong>blockchain</strong>, <strong>open source</strong>, <strong>autonomous machines</strong>, <strong>environmental impacts</strong>.</p>
    <div class="callout tip">Exam hooks: impacts on organisational culture, one way quantum computing impacts an organisation, AI benefit + drawback, IoT security risk.</div>`
});

indexKB('CO6','Emerging Technologies & Issues','6.1 Impact of reliance on digital systems','Increased reliance on digital systems impacts organisational culture (resistance to change), communication methods (email, instant messaging, video calls), productivity and availability expectations, staff monitoring (browsing, keystrokes, idle time — benefits security but harms privacy and morale), new working practices (remote, hybrid, agile) and automation of services including AI which can displace jobs. Society impacts include job losses, shifting skills, privacy and digital footprint, changing behaviours, globalisation and increased use of AI.');
indexKB('CO6','Emerging Technologies & Issues','6.1 Digital inclusion & CPD','Digital inclusion ensures everyone can access digital services through suitable affordable technologies, connectivity, checking datasets for bias, codes of best practice and accessibility regulations. Systems should be adapted to end-user characteristics including IT skill, literacy, culture and additional needs. Professional development increases industry competence, employability and job security, and adherence to industry standards.');
indexKB('CO6','Emerging Technologies & Issues','6.2 Quantum computing & processing','Quantum computing uses qubits which can be 0, 1 or both at once, and entanglement, to solve complex problems much faster. Uses include drug discovery, cryptography and codebreaking (breaking encryption far faster), optimisation, climate modelling and larger AI models. It is still early, with unstable, error-prone qubits needing near absolute zero temperatures. Other speed-ups include chip stacking, neuromorphic chips and optical chips.');
indexKB('CO6','Emerging Technologies & Issues','6.2 IoT, AI and emerging tech','The Internet of Things connects everyday devices to the internet, enabled by 5G, with risks of privacy and hacking through weak default passwords. Edge computing processes data near where it is generated to reduce latency. AI performs human-like tasks; generative AI creates new content such as text, images and video (ChatGPT, DALL-E) with deepfake risks; machine learning learns patterns and improves over time. Other emerging tech includes AR and VR, the metaverse, blockchain, open-source software and autonomous machines, with environmental impacts from e-waste and data-centre energy.');
