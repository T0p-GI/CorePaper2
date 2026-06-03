/* =========================================================================
   co5.js — Content Area 5: Business Context
   Source: ZigZag CO5 Course Companion (teaching content only).
   ========================================================================= */
registerArea({
  id: 'co5', code: 'CO5', title: 'Business Context',
  blurb: 'How organisations are structured, how digital systems add value, the risks they bring, and managing change.',
  units: [
  /* 5.1 */
  {
    id: 'co5-1', code: '5.1', title: 'Business Environment',
    learn: `
      <h2>Types of organisation</h2>
      <p>Organisations provide <strong>products</strong> (tangible, e.g. a laptop) and/or <strong>services</strong> (intangible, e.g. IT support).</p>
      <ul class="tight">
        <li><strong>Private sector</strong> — owned by individuals/other firms: <strong>SMEs</strong> (&lt;250 staff) and <strong>large enterprises</strong>.</li>
        <li><strong>Public sector</strong> — government-owned, tax-funded (e.g. NHS, state schools, police).</li>
        <li><strong>Third sector</strong> — non-profits: charities, community groups, social enterprises.</li>
      </ul>
      <h2>Business models</h2>
      <ul class="tight">
        <li><strong>B2C</strong> (Business to Customer) — sells directly to consumers.</li>
        <li><strong>B2B</strong> (Business to Business) — sells to other businesses (e.g. Intel chips).</li>
        <li><strong>B2M</strong> (Business to Many) — sells to both.</li>
      </ul>
      <h2>Stakeholders</h2>
      <p>Anyone with an interest in the organisation.</p>
      <table class="data"><tr><th>Internal</th><th>External</th></tr>
        <tr><td>Owners, directors, employees</td><td>Customers, suppliers, shareholders, investors/funders, government, outsourced services</td></tr></table>
      <p>Internal stakeholders are inside and directly involved; external stakeholders are outside but affected by the organisation.</p>`,
    like12: `
      <p>🏬 An <strong>organisation</strong> is any group set up to do something — a shop (products), a window cleaner (a service), a charity, or the NHS.</p>
      <p>Types are like teams in different leagues: <strong>private</strong> (owned by people, wants profit — small "SME" or big), <strong>public</strong> (owned by the government, paid by taxes, like your school), and <strong>third sector</strong> (charities — profit goes back into helping).</p>
      <p>🤝 <strong>Stakeholders</strong> are everyone who cares about the business. <strong>Internal</strong> = the players on the team (owners, staff). <strong>External</strong> = the fans, suppliers and refs outside (customers, suppliers, government).</p>
      <p><strong>B2C/B2B/B2M</strong> = who you sell to: people (B2C), other businesses (B2B), or both (B2M).</p>`,
    flashcards: [
      { front: 'Product vs service', back: 'A product is tangible (can be touched, e.g. a phone); a service is intangible and bought for its benefit (e.g. training).', k12: 'Product = a thing you can hold. Service = something done for you, like a haircut.' },
      { front: 'SME', back: 'Small or Medium-sized Enterprise — fewer than 250 staff (and turnover/balance-sheet limits).', k12: 'A smaller company — fewer than 250 workers.' },
      { front: 'Public sector', back: 'Organisations owned/funded by government and paid for through taxes (NHS, schools, police).', k12: 'Run by the government and paid for by taxes — like your school or the NHS.' },
      { front: 'Third sector', back: 'Non-profit organisations: charities, community groups and social enterprises.', k12: 'Charities and good-cause groups — money goes back into helping, not profit.' },
      { front: 'B2B', back: 'Business to Business — selling to other businesses rather than directly to consumers.', k12: 'A company that sells to other companies, not to you directly (like Intel selling chips to laptop makers).' },
      { front: 'Internal stakeholder', back: 'Someone inside the organisation directly involved in operations: owners, directors, employees.', k12: 'People on the team — the owners and staff.' },
      { front: 'External stakeholder', back: 'People/groups outside the organisation affected by it: customers, suppliers, shareholders, investors, government.', k12: 'People outside who still care — customers, suppliers, the government.' },
      { front: 'Shareholder', back: 'An external stakeholder who owns shares in a company and is affected by its performance.', k12: 'Someone who owns a slice of the company and wants it to do well.' }
    ],
    quiz: [
      { q: 'Which is an example of a service rather than a product?', opts: ['A laptop','IT support','A textbook','A vaccine'], a: 1, marks: 1, fb: 'Services are intangible — IT support is a service.' },
      { q: 'An organisation with fewer than 250 staff is best described as…', opts: ['A large enterprise','An SME','A public-sector body','An NGO'], a: 1, marks: 1, fb: 'SME = small/medium enterprise.' },
      { q: 'Which sector is funded by taxes?', opts: ['Private','Public','Third','B2B'], a: 1, marks: 1, fb: 'Public sector is government/tax-funded.' },
      { q: 'Intel selling processors to laptop makers is an example of…', opts: ['B2C','B2B','Third sector','Public sector'], a: 1, marks: 1, fb: 'Business to Business.' },
      { q: 'Which is an INTERNAL stakeholder?', opts: ['A customer','A supplier','An employee','The government'], a: 2, marks: 1, fb: 'Employees are internal stakeholders.' },
      { q: 'A charity that reinvests all profits to help a cause is a…', opts: ['Sole trader','Social enterprise','Large enterprise','B2C retailer'], a: 1, marks: 1, fb: 'Social enterprises run like businesses but reinvest profit for a cause.' },
      { q: 'Identify two external stakeholders of a coffee-shop chain.', opts: ['Directors and employees','Customers and suppliers','Owners and managers','CEO and board'], a: 1, marks: 2, fb: 'Customers and suppliers are external; owners/directors/employees are internal.' },
      { q: 'A business that sells to both consumers and other businesses uses which model?', opts: ['B2C','B2B','B2M','SME'], a: 2, marks: 1, fb: 'B2M = Business to Many.' }
    ],
    practice: [
      { q: 'State two examples of internal stakeholders.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): owners; directors; employees.'], model: 'Two internal stakeholders are <strong>employees</strong> and <strong>directors</strong>.' },
      { q: 'Explain one reason a supplier is considered a stakeholder in an organisation.', marks: 2, cmd: 'Explain', points: ['1 mark + linked justification.','They have a financial interest (1) because they make a profit selling goods/services to the organisation, so its success affects them (1).'], model: 'A supplier is a stakeholder because they have a financial interest in the organisation (1): they earn money by selling goods or services to it, so if the organisation grows or fails it directly affects the supplier\'s own income (1).' }
    ],
    test: {
      mcq: [
        { q: 'Which is NOT part of the third sector?', opts: ['Charity','Community group','Social enterprise','Multinational PLC'], a: 3, marks: 1, fb: 'A multinational PLC is a large private-sector enterprise.' },
        { q: 'The NHS is part of which sector?', opts: ['Private','Public','Third','B2B'], a: 1, marks: 1, fb: 'Public sector.' },
        { q: 'Which describes a tangible offering?', opts: ['Consultancy','A product','Training','Streaming subscription'], a: 1, marks: 1, fb: 'A product is tangible.' },
        { q: 'Shareholders are…', opts: ['Internal stakeholders','External stakeholders','Suppliers only','Employees'], a: 1, marks: 1, fb: 'Shareholders are external stakeholders.' },
        { q: 'A sole trader plumber is part of the…', opts: ['Public sector','Private sector','Third sector','Government'], a: 1, marks: 1, fb: 'Private sector (an SME/self-employed).' },
        { q: 'A business selling directly to the public via a website uses…', opts: ['B2B','B2C','Public funding','Outsourcing'], a: 1, marks: 2, fb: 'B2C — Business to Customer.' }
      ],
      structured: [
        { q: 'Identify two external stakeholders other than customers.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): suppliers; shareholders; investors/funders; government; outsourced services.'], model: 'Two external stakeholders are <strong>suppliers</strong> and <strong>the government</strong>.' },
        { q: 'Explain one difference between the private and public sectors.', marks: 2, cmd: 'Explain', points: ['1 mark identification + 1 mark justification.','Ownership/funding (1): private sector is owned by individuals/firms and aims for profit, whereas the public sector is government-owned and tax-funded to provide services (1).'], model: 'One difference is ownership and funding (1): private-sector organisations are owned by individuals or other firms and aim to make a profit, while public-sector organisations are owned by government and funded through taxes to provide a service to the population (1).' }
      ],
      nine: {
        scenario: 'Python Junction is a small chain of coffee shops offering free Wi-Fi and a new customer loyalty scheme. It is deciding how much to involve its different stakeholders when launching the scheme.',
        q: 'Evaluate the importance of considering both internal and external stakeholders when Python Junction launches its loyalty scheme.',
        indicative: ['Internal (employees, owners): staff must operate the scheme, need training; owners want profit/ROI.','External (customers): the scheme exists to attract/retain them — their feedback drives success.','External (suppliers/investors): increased demand affects suppliers; investors want returns.','Ignoring stakeholders → poor adoption, staff resistance, supply issues, reputational risk.','Balance: customers and staff are most critical to launch success vs longer-term investor interest.'],
        model: 'Considering stakeholders is <strong>very important</strong> to the launch. <strong>External customers</strong> are the most critical group, because the loyalty scheme exists to attract and retain them; gathering their feedback (e.g. via the app or social media) shapes whether the rewards actually appeal, so ignoring them risks poor sign-up. <strong>Internal employees</strong> are equally important at launch: staff have to explain and operate the scheme at the till, so without training they may give a poor customer experience and resist the change. <strong>Suppliers</strong> (external) matter because a successful scheme increases demand, so they must be able to scale up, while <strong>owners/investors</strong> want a return and need evidence the scheme will pay off. <br><br>If Python Junction ignored these groups, it could face staff resistance, stock shortages and weak customer uptake, damaging both reputation and profit. <br><br>Overall, while all stakeholders matter, the <strong>customers and front-line staff are most important for a successful launch</strong>, with suppliers and investors more significant for sustaining it afterwards. Python Junction should therefore prioritise customer feedback and staff training first, making stakeholder consideration central to the launch.'
      }
    }
  },
  /* 5.2 */
  {
    id: 'co5-2', code: '5.2', title: 'Digital Value to Organisations',
    learn: `
      <h2>How digital systems support key organisational areas</h2>
      <table class="data"><tr><th>Area</th><th>How digital systems help</th></tr>
        <tr><td>Sales &amp; marketing</td><td>Online selling 24/7, social media promotion, market research/surveys, analytics, loyalty schemes, personalisation.</td></tr>
        <tr><td>R&amp;D</td><td>CAD design, 3D-printed prototypes, AI brainstorming, online research and review feedback.</td></tr>
        <tr><td>HR</td><td>Self-service portals (payslips, holidays), performance &amp; training records, faster approvals.</td></tr>
        <tr><td>Operations</td><td>Tools like Teams/Slack/Zoom, automation, remote working, intranet/shared storage with version control.</td></tr>
        <tr><td>Management</td><td>Real-time KPI dashboards (sales, productivity, retention) and asset tracking.</td></tr>
        <tr><td>Logistics</td><td>Automatic stock control, barcode scanning, drone/route optimisation.</td></tr>
        <tr><td>Finance</td><td>Automated invoicing/chasing, electronic payments, credit checks, cash-flow forecasting.</td></tr></table>
      <h2>How digital systems support user needs &amp; quality</h2>
      <ul class="tight">
        <li><strong>Functionality</strong> — users can do all required tasks to the required quality (scanners/robots improve QA precision).</li>
        <li><strong>Reducing pain points</strong> — chatbots/FAQs, clearer error messages, real-time order tracking.</li>
        <li><strong>Accessibility</strong> — colour settings, voice recognition, dedicated apps for users with disabilities.</li>
        <li><strong>Compatibility</strong> — works with users\' devices/OS; thorough testing removes bugs.</li>
        <li><strong>Availability</strong> — 24/7 access suits diverse schedules.</li>
        <li><strong>Effective end-user support</strong> — reviews/feedback (often more honest online) pinpoint issues quickly.</li>
        <li><strong>Ease of installation</strong> — cloud needs none; one-click installers / video tutorials for the rest.</li>
      </ul>`,
    like12: `
      <p>🏢 A business has different <strong>departments</strong> — like rooms in a house. Computers make each room work better:</p>
      <ul class="tight">
        <li><strong>Sales/marketing</strong> — sell online any time, advertise on social media, see what customers like.</li>
        <li><strong>HR</strong> (the people room) — book holidays and see your payslip from your phone.</li>
        <li><strong>Finance</strong> (the money room) — send bills and get paid automatically.</li>
        <li><strong>Logistics</strong> (the delivery room) — know exactly what's in stock and the fastest delivery route.</li>
      </ul>
      <p>For <strong>users</strong>, digital systems are good when they: do the job, are easy (chatbots, clear messages), work for everyone (voice control, big text), work on your device, and are open 24/7 — like a shop that never closes.</p>`,
    flashcards: [
      { front: 'KPI', back: 'Key Performance Indicator — a measurable value (e.g. sales, retention rate) used to monitor performance.', k12: 'A score that shows how well something is doing, like marks on a report card.' },
      { front: 'Automatic stock control', back: 'System that updates stock automatically as items are ordered, received and sold.', k12: 'The shop\'s computer keeps count of what\'s left and reorders by itself.' },
      { front: 'Personalisation (marketing)', back: 'Using customer data (e.g. loyalty cards) to tailor offers and recommendations.', k12: 'The shop remembers what you like and shows you deals just for you.' },
      { front: 'Pain point', back: 'A specific problem users experience; fixing it (chatbots, clearer errors, tracking) improves the service.', k12: 'An annoying bit that frustrates users — you fix it to make them happy.' },
      { front: 'Accessibility', back: 'Designing systems so people with disabilities can use them (voice control, colour settings, apps).', k12: 'Making sure everyone can use it, including people who can\'t see or use a mouse well.' },
      { front: 'Availability of service', back: 'Systems available 24/7 so users interact whenever suits them.', k12: 'Open all day and night — like an online shop that never closes.' },
      { front: 'CAD', back: 'Computer-Aided Design software used to design products/prototypes quickly and accurately.', k12: 'Design software that draws products on a computer super accurately.' },
      { front: 'Version control', back: 'Keeps track of document/file versions so staff can collaborate without overwriting work.', k12: 'Saves every version so two people editing don\'t wreck each other\'s work.' }
    ],
    quiz: [
      { q: 'Which digital tool best supports the FINANCE function?', opts: ['CAD software','Automated invoicing and credit checks','VR headsets','Loyalty cards'], a: 1, marks: 1, fb: 'Finance uses automated invoicing, payments and credit checks.' },
      { q: 'A 24/7 chatbot answering common queries reduces…', opts: ['Bandwidth','A pain point','Latency','Stock'], a: 1, marks: 1, fb: 'It reduces a support pain point.' },
      { q: 'Which supports accessibility for a user who cannot use a mouse?', opts: ['Voice recognition','A faster CPU','A loyalty card','A KPI dashboard'], a: 0, marks: 1, fb: 'Voice recognition aids users who can\'t use a mouse/keyboard.' },
      { q: 'Real-time KPI dashboards mainly support which area?', opts: ['Logistics','Management','R&D','HR'], a: 1, marks: 1, fb: 'Management uses KPI dashboards to monitor performance.' },
      { q: 'CAD and 3D printing primarily support…', opts: ['Finance','Research, design & development','HR','Marketing'], a: 1, marks: 1, fb: 'R&D uses CAD and prototyping.' },
      { q: 'Which is a benefit of 24/7 availability to users?', opts: ['Lower CPU use','Users interact whenever is convenient','Cheaper hardware','Less data'], a: 1, marks: 1, fb: 'Users can engage at any time that suits them.' },
      { q: 'Loyalty cards collecting purchase data enable…', opts: ['Personalised offers','Faster Wi-Fi','Better cabling','Lower latency'], a: 0, marks: 2, fb: 'They enable personalisation and trend analysis.' },
      { q: 'Self-service portals for payslips/holidays support which area?', opts: ['HR','Logistics','Finance','R&D'], a: 0, marks: 1, fb: 'HR self-service portals.' }
    ],
    practice: [
      { q: 'State two ways digital systems can support the sales and marketing function.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): online selling; social media promotion; market research/surveys; analytics; loyalty schemes; personalisation.'], model: 'Two ways are: <strong>online selling 24/7</strong> and <strong>using social media to promote the brand</strong>.' },
      { q: 'Explain one way social media engagement could benefit a coffee-shop business.', marks: 2, cmd: 'Explain', points: ['1 mark identification + 1 mark justification.','Gather customer feedback (1) using comments/polls to understand preferences and improve products/promotions (1).'], model: 'Social media lets the business <strong>gather customer feedback and insights</strong> (1): through comments, polls and messages it can understand what customers want and adjust its products and promotions to better meet their needs, increasing loyalty (1).' }
    ],
    test: {
      mcq: [
        { q: 'Automatic route optimisation and barcode scanning support…', opts: ['HR','Logistics','Finance','Marketing'], a: 1, marks: 1, fb: 'Logistics.' },
        { q: 'Which improves quality assurance precision in manufacturing?', opts: ['Loyalty cards','Scanners and robots','Email','Social media'], a: 1, marks: 1, fb: 'Scanners/robots detect tiny defects fast.' },
        { q: 'Clearer error-message wording is an example of…', opts: ['Reducing a pain point','Increasing latency','Adding redundancy','A KPI'], a: 0, marks: 1, fb: 'It reduces a usability pain point.' },
        { q: 'Cloud-based systems help ease of installation because…', opts: ['They need no local installation','They use more RAM','They need cabling','They reduce availability'], a: 0, marks: 1, fb: 'Cloud apps require no local install.' },
        { q: 'Tools like Teams and Zoom mainly support…', opts: ['Operations/communication','Patents','Copyright','Logistics only'], a: 0, marks: 1, fb: 'Operations and internal communication.' },
        { q: 'Online reviews are valuable because users are often…', opts: ['Less honest online','More honest online','Anonymous to each other','Unable to comment'], a: 1, marks: 2, fb: 'People are often more honest in online feedback, making it valuable.' }
      ],
      structured: [
        { q: 'Identify two functional areas of an organisation that digital systems can support.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): sales & marketing; R&D; HR; operations; management; logistics; finance.'], model: 'Two functional areas are <strong>finance</strong> and <strong>human resources (HR)</strong>.' },
        { q: 'Explain one way a digital system can improve a user\'s quality of experience.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Accessibility features (1) such as voice control (1) let users with disabilities complete tasks they otherwise couldn\'t, widening the user base (1).'], model: 'A digital system can improve experience through <strong>accessibility features</strong> (1), such as voice recognition (1), which means a user who cannot use a keyboard or mouse can still complete tasks independently, making the service usable by a much wider range of people (1).' }
      ],
      nine: {
        scenario: 'A medium-sized retailer currently relies on manual stock counts and phone-based customer support. It is considering investing in digital systems (automatic stock control, an e-commerce site and a chatbot) to improve operations and customer experience.',
        q: 'Evaluate the suitability of the retailer investing in these digital systems.',
        indicative: ['Stock control: real-time accuracy, fewer shortages/overstock, supports logistics & finance.','E-commerce: 24/7 selling, wider reach, more sales, personalisation/analytics.','Chatbot: reduces support pain points, faster answers, frees staff.','Drawbacks: cost, training, technical support, reliance/system failure risk, accessibility for some customers.','Balance against retailer size/budget; conclusion on suitability.'],
        model: 'Investing in these digital systems is <strong>largely suitable</strong> for the retailer. <strong>Automatic stock control</strong> would replace error-prone manual counts with real-time data, reducing both shortages and overstock and improving cash flow — directly supporting logistics and finance. An <strong>e-commerce site</strong> enables <strong>24/7 selling</strong> to a wider audience and generates analytics that allow personalised offers, likely increasing sales. A <strong>chatbot</strong> reduces a key support pain point by answering common questions instantly, freeing staff for complex issues. <br><br>However, there are real drawbacks: the <strong>upfront cost</strong> and ongoing technical support, the need to <strong>train staff</strong>, increased <strong>reliance</strong> on systems (a failure could halt sales), and the risk of <strong>excluding</strong> less digitally-confident customers if phone support disappears entirely. <br><br>On balance, for a medium-sized retailer the benefits — efficiency, wider reach and better customer experience — outweigh the costs, provided it phases the rollout, trains staff, and keeps a support option for less digital customers. The investment is therefore suitable, but should be managed carefully rather than rushed.'
      }
    }
  },
  /* 5.3 */
  {
    id: 'co5-3', code: '5.3', title: 'Risks of Using Digital Systems',
    learn: `
      <h2>Potential risks (5.3.1)</h2>
      <ul class="tight">
        <li><strong>Security breaches</strong> — virus/malware/hacker/bot causing loss of <em>confidentiality, integrity or availability</em>.</li>
        <li><strong>Privacy breaches</strong> — exposure of personal info (bank, passwords, biometrics) or business info (IP, contracts) → fraud/blackmail.</li>
        <li><strong>Regulatory/legal non-compliance</strong> — must register with the ICO; fines + reputational harm if cyber security is poor.</li>
        <li><strong>Audience exclusion</strong> — some users excluded (no internet/skills/devices), or by biased systems and poor UX.</li>
        <li><strong>Emerging rival services</strong> — competitors using newer channels (apps, streaming, cloud, AI).</li>
        <li><strong>Technical issues</strong> — system failure or unreliability (sites timing out, double bookings).</li>
      </ul>
      <h2>Potential impacts of risks (5.3.2)</h2>
      <ul class="tight">
        <li><strong>Legal action</strong> — proceedings/legal fees even if you win (e.g. Post Office Horizon settlement).</li>
        <li><strong>Fines</strong> — e.g. ICO fined British Airways £20m for a data breach.</li>
        <li><strong>Reputational damage</strong> — amplified by social media; lost customers and share price falls.</li>
        <li><strong>Withdrawal of licence to practise</strong> — for regulated firms (lawyers, banks).</li>
        <li><strong>Loss of business</strong> — e.g. a cyberattack forcing closure (Carpetright contributing factor).</li>
      </ul>`,
    like12: `
      <p>⚠️ Using computers for everything is handy, but it comes with <strong>risks</strong> — like riding a bike is fun but you can fall off:</p>
      <ul class="tight">
        <li><strong>Security breach</strong> — a hacker/virus breaks in and steals or wrecks data.</li>
        <li><strong>Privacy breach</strong> — your private info leaks out (passwords, bank details).</li>
        <li><strong>Breaking the rules</strong> — not following data laws → fines.</li>
        <li><strong>Leaving people out</strong> — if everything's online, people with no internet or skills get excluded.</li>
        <li><strong>System crashing</strong> — the website goes down and nobody can buy anything.</li>
      </ul>
      <p>If these go wrong the <strong>damage</strong> can be: big fines, getting sued, a ruined reputation (everyone posts about it!), losing your licence to operate, or even going out of business.</p>`,
    flashcards: [
      { front: 'Security breach', back: 'Unauthorised access/damage to a system (via virus, malware, hacker or bot) harming confidentiality, integrity or availability.', k12: 'When a baddie or virus breaks into the system and steals or breaks data.' },
      { front: 'Privacy breach', back: 'Exposure of personal or business data (passwords, bank details, IP), risking fraud or blackmail.', k12: 'When private info leaks out — like your diary being read by strangers.' },
      { front: 'Audience exclusion', back: 'When some users are shut out of a digital service due to lack of internet/skills/devices, bias or poor UX.', k12: 'When going "online only" leaves out people who can\'t get online or struggle with tech.' },
      { front: 'Regulatory non-compliance', back: 'Failing to follow rules (e.g. registering with the ICO / GDPR), risking fines and reputational damage.', k12: 'Not following the data rules — gets you fined.' },
      { front: 'Reputational damage', back: 'Loss of public trust after a failure/breach, often amplified by social media; causes lost customers.', k12: 'Everyone hears you messed up (especially online) and stops trusting you.' },
      { front: 'Licence to practise (withdrawal)', back: 'Regulated firms (banks, lawyers) can be shut down if they lose their operating licence.', k12: 'Some businesses need a permit to operate — lose it and they\'re finished.' },
      { front: 'Loss of integrity (data)', back: 'When data is corrupted/altered so it can no longer be trusted.', k12: 'When you can\'t trust the data because it might have been messed with.' },
      { front: 'Emerging rival service', back: 'A competitor offering the service through a newer channel (app, streaming, cloud, AI).', k12: 'A rival with a cooler, newer way of doing it (like streaming beating CDs).' }
    ],
    quiz: [
      { q: 'A virus deleting files harms which security property?', opts: ['Availability only','Integrity','Bandwidth','Latency'], a: 1, marks: 1, fb: 'Corrupted/deleted data = loss of integrity (and possibly availability).' },
      { q: 'Closing all physical bank branches risks…', opts: ['Audience exclusion','Lower latency','Better cabling','More RAM'], a: 0, marks: 1, fb: 'Excludes customers without digital access/skills.' },
      { q: 'Which is a likely IMPACT of a serious data breach?', opts: ['A pay rise','An ICO fine','Faster broadband','More stock'], a: 1, marks: 1, fb: 'Fines from the ICO are a key impact.' },
      { q: 'A website timing out during a sales spike is an example of…', opts: ['A privacy breach','A technical/reliability issue','Audience exclusion','Non-compliance'], a: 1, marks: 1, fb: 'Unreliability/system failure.' },
      { q: 'Public trust collapsing after a breach, amplified on social media, is…', opts: ['Reputational damage','A patent','A KPI','Version control'], a: 0, marks: 1, fb: 'Reputational damage.' },
      { q: 'Which organisation must businesses register with for data protection?', opts: ['IEEE','ICO','W3C','NCSC'], a: 1, marks: 1, fb: 'The ICO.' },
      { q: 'Identify one consequence a regulated bank faces for serious non-compliance.', opts: ['A new patent','Loss of licence to practise','Free advertising','Lower latency'], a: 1, marks: 2, fb: 'Regulated firms can lose their licence to operate.' },
      { q: 'AI hiring tools favouring one group is an example of…', opts: ['Reliability','Bias / audience exclusion','Redundancy','Compatibility'], a: 1, marks: 1, fb: 'Biased systems can exclude/disadvantage groups.' }
    ],
    practice: [
      { q: 'State two potential impacts on an organisation of failing to keep data secure.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): fines; legal action; reputational damage; loss of business; loss of licence to practise.'], model: 'Two impacts are <strong>financial fines</strong> and <strong>reputational damage</strong>.' },
      { q: 'A retailer is moving entirely online and closing its phone line. Explain one risk this creates for the organisation.', marks: 2, cmd: 'Explain', points: ['1 mark + linked justification.','Audience exclusion (1) — customers without internet access or digital skills can no longer use the service, losing those customers (1).'], model: 'It risks <strong>audience exclusion</strong> (1): customers who lack internet access or digital confidence (for example, some older customers) will no longer be able to get support or buy, so the retailer loses that segment of its market (1).' }
    ],
    test: {
      mcq: [
        { q: 'Stolen customer records is an example of a loss of…', opts: ['Availability','Confidentiality','Latency','Bandwidth'], a: 1, marks: 1, fb: 'Confidentiality is compromised.' },
        { q: 'Which is a RISK (not an impact) of digital systems?', opts: ['Fines','Reputational damage','Security breach','Loss of licence'], a: 2, marks: 1, fb: 'A security breach is a risk; the others are impacts.' },
        { q: 'Spotify replacing CDs is an example of…', opts: ['A privacy breach','An emerging rival service','Non-compliance','A KPI'], a: 1, marks: 1, fb: 'An emerging rival service using a newer channel.' },
        { q: 'British Airways being fined £20m by the ICO illustrates…', opts: ['A fine impact','A patent','Audience exclusion','Version control'], a: 0, marks: 1, fb: 'A fine is a direct impact.' },
        { q: 'Worry that data may still contain malware is a loss of…', opts: ['Integrity/trust','Bandwidth','Latency','Availability'], a: 0, marks: 1, fb: 'Loss of integrity/trust in the data.' },
        { q: 'Which best reduces audience exclusion when digitising a service?', opts: ['Remove all phone support','Keep alternative access channels','Increase prices','Collect more data'], a: 1, marks: 2, fb: 'Keeping alternative channels avoids excluding non-digital users.' }
      ],
      structured: [
        { q: 'Identify two risks to an organisation of relying on digital systems.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): security breach; privacy breach; regulatory non-compliance; audience exclusion; technical failure; emerging rivals.'], model: 'Two risks are a <strong>security breach</strong> and <strong>audience exclusion</strong>.' },
        { q: 'Explain one impact on an organisation of a denial-of-service attack taking its system offline.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Loss of availability/business (1) — customers can\'t access the service (1), so the organisation loses sales and may suffer reputational damage as customers complain (1).'], model: 'A DoS attack causes <strong>loss of availability</strong> (1): while the system is down, customers cannot place orders or access the service (1), so the organisation loses sales directly and may suffer reputational damage as frustrated customers complain publicly, costing future business too (1).' }
      ],
      nine: {
        scenario: 'GEM Corporation has just moved employee and client data to a new cloud system. Management knows the move could introduce risks but wants to reassure stakeholders.',
        q: 'Evaluate the main risks GEM Corporation faces from relying on its new digital system, and how serious they are.',
        indicative: ['Security breach: cloud is an attractive target; loss of confidentiality/integrity/availability.','Privacy breach + regulatory non-compliance: personal data → GDPR/ICO duties, 72h reporting, fines.','Technical failure/availability: downtime stops operations.','Audience/skills: staff/clients may need access skills.','Impacts: fines, legal action, reputational damage, loss of business.','Mitigations exist (encryption, access control, monitoring); conclusion on overall seriousness.'],
        model: 'GEM Corporation faces several significant risks. The most serious is a <strong>security breach</strong>: storing employee and client data in the cloud makes it an attractive target, and a breach would cause loss of <strong>confidentiality</strong> (data stolen), <strong>integrity</strong> (data altered) or <strong>availability</strong> (system down). Because the data is personal, this is also a <strong>privacy breach and regulatory risk</strong> — under UK GDPR a breach must be reported to the ICO within 72 hours, with fines up to £17.5m or 4% of turnover. There is also a <strong>technical/availability risk</strong>: if the cloud system fails, day-to-day operations stop. <br><br>The potential <strong>impacts</strong> are therefore severe — fines, legal action, reputational damage amplified on social media, and loss of business. <br><br>However, the seriousness can be reduced: the move is sensible <em>if</em> GEM applies strong <strong>encryption, access controls and monitoring</strong>, chooses a compliant provider, and trains staff. <br><br>Overall, the risks are real and potentially serious — a major breach could threaten the business — but they are also manageable with good security governance. The decision to use the cloud is acceptable provided GEM treats security and compliance as a priority rather than an afterthought.'
      }
    }
  },
  /* 5.4 */
  {
    id: 'co5-4', code: '5.4', title: 'Technical Change Management',
    learn: `
      <h2>What triggers change</h2>
      <p><strong>Internal factors (5.4.1):</strong> restructuring, expansion, downsizing, new strategic objectives (diversification, rebranding, adding features).</p>
      <p><strong>External factors (5.4.2) — PESTLE:</strong> Political, Economic, Social, Technological, Legal, Environmental. Also: emergence of new tech, retirement of obsolete tech, system failures, zero-day vulnerabilities, pandemics, natural disasters.</p>
      <h2>How organisations respond (5.4.3)</h2>
      <ul class="tight">
        <li>New/amended <strong>policies</strong> (sustainability, data protection, hybrid working).</li>
        <li>New/amended <strong>business processes</strong> (staffing, delivery schedules, opening hours).</li>
        <li>New/improved <strong>products/services</strong> and <strong>digital systems</strong> (backend &amp; customer-facing).</li>
        <li><strong>Improved training</strong> and <strong>restructuring</strong>.</li>
      </ul>
      <h2>Change management process (5.4.4)</h2>
      <ul class="tight">
        <li><strong>Change Advisory Board (CAB)</strong> — stakeholders prioritise, review, approve in stages, monitor and feed back on changes.</li>
        <li><strong>SMARTER objectives</strong>: Specific, Measurable, Achievable, Realistic, Time-bound, Evaluate, Revise.</li>
        <li><strong>Business case</strong> — assess costs, benefits, risks; impact analysis.</li>
        <li>People often <strong>resist change</strong> unless involved/prepared — communication is key.</li>
      </ul>
      <h2>Feasibility of digital projects (5.4.5)</h2>
      <p>Judged on: <strong>technical</strong> (can it be built?), <strong>economic</strong> (cost vs benefit/ROI), <strong>legal</strong> (compliant?), <strong>operational</strong> (fits how the org works?), and <strong>schedule</strong> (can it be done in time?) feasibility.</p>`,
    like12: `
      <p>🔄 Businesses have to <strong>change</strong> to survive — like updating your phone so apps still work. Change comes from <strong>inside</strong> (the company grows, shrinks or rebrands) or <strong>outside</strong> (new laws, new tech, the economy, a pandemic). Remember the outside ones with <strong>PESTLE</strong>.</p>
      <p>📋 To manage change well you <strong>plan it</strong>. A <strong>CAB</strong> (a panel of important people) decides which changes are worth it, checks progress, and learns from mistakes. Goals should be <strong>SMARTER</strong> (clear, measurable, doable, on a deadline, then reviewed).</p>
      <p>🧐 Before doing a project you check it's <strong>feasible</strong> — basically "is this actually a good idea?": Can we build it? Can we afford it? Is it legal? Does it fit how we work? Can we finish in time?</p>
      <p>People often <strong>hate change</strong> unless you explain it and involve them — so good communication matters a lot.</p>`,
    flashcards: [
      { front: 'PESTLE', back: 'External change factors: Political, Economic, Social, Technological, Legal, Environmental.', k12: 'A checklist of outside things that force a business to change.' },
      { front: 'Change Advisory Board (CAB)', back: 'A group of stakeholders that prioritises, reviews, approves, monitors and feeds back on changes.', k12: 'A panel of important people who decide and check on big changes.' },
      { front: 'SMARTER objectives', back: 'Specific, Measurable, Achievable, Realistic, Time-bound, Evaluate, Revise.', k12: 'A way to set good goals — clear, measurable, doable, with a deadline, then reviewed.' },
      { front: 'Business case', back: 'A justification for a change assessing its costs, benefits and risks (with impact analysis).', k12: 'The "why this is worth doing" report — costs vs benefits vs risks.' },
      { front: 'Diversification', back: 'Branching into a totally new product/market to spread risk (e.g. Dyson making hairdryers).', k12: 'Selling something completely new so you don\'t rely on one product.' },
      { front: 'Zero-day vulnerability', back: 'A flaw known to hackers before the vendor, with no patch yet — forces urgent unplanned change.', k12: 'A secret hole hackers find before the maker does, so there\'s no fix yet — panic stations!' },
      { front: 'Feasibility (TELOS)', back: 'Technical, Economic, Legal, Operational and Schedule feasibility of a project.', k12: 'Checking if a project is doable: can we build/afford it, is it legal, does it fit, can we finish in time?' },
      { front: 'Resistance to change', back: 'People often resist change unless involved or prepared; clear communication reduces it.', k12: 'People dislike surprises — tell them early and involve them so they don\'t push back.' }
    ],
    quiz: [
      { q: 'PESTLE is used to analyse…', opts: ['Internal restructuring','External change factors','Network topologies','Mark schemes'], a: 1, marks: 1, fb: 'PESTLE = external factors.' },
      { q: 'Which is an INTERNAL trigger for change?', opts: ['New legislation','A recession','Company expansion','A pandemic'], a: 2, marks: 1, fb: 'Expansion is internal.' },
      { q: 'The "M" in SMARTER stands for…', opts: ['Manageable','Measurable','Marketable','Mandatory'], a: 1, marks: 1, fb: 'Measurable.' },
      { q: 'A CAB is responsible for…', opts: ['Writing code','Prioritising and reviewing change requests','Cleaning servers','Paying invoices'], a: 1, marks: 1, fb: 'The Change Advisory Board manages change.' },
      { q: 'Checking "can we afford this and is the ROI worth it?" is which feasibility?', opts: ['Technical','Economic','Legal','Schedule'], a: 1, marks: 1, fb: 'Economic feasibility.' },
      { q: 'A flaw exploited before any patch exists is a…', opts: ['Firewall','Zero-day vulnerability','KPI','Backup'], a: 1, marks: 1, fb: 'Zero-day vulnerability.' },
      { q: 'Why do organisations communicate change clearly to staff?', opts: ['To increase latency','To reduce resistance and uncertainty','To avoid paying tax','To delete data'], a: 1, marks: 2, fb: 'Clear communication reduces resistance, rumours and uncertainty.' },
      { q: 'Dyson launching hairdryers alongside vacuums is an example of…', opts: ['Downsizing','Diversification','Non-compliance','A zero-day'], a: 1, marks: 1, fb: 'Diversification into a new market.' }
    ],
    practice: [
      { q: 'State two external factors (PESTLE) that could trigger change in an organisation.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): Political; Economic; Social; Technological; Legal; Environmental.'], model: 'Two external factors are <strong>technological change</strong> (e.g. new AI tools) and <strong>legal change</strong> (e.g. new data-protection law).' },
      { q: 'A company is introducing new business processes after a sudden rise in demand. Explain with additional justification one way it could respond to this change.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Recruit/train staff (1) to handle increased workload (1) so service quality is maintained and customers stay satisfied (1). OR scale IT systems (1)…'], model: 'The company could <strong>recruit and train additional staff</strong> (1) to cope with the higher workload created by the rise in demand (1), which means orders are still fulfilled on time and service quality is maintained, keeping customers satisfied and protecting the company\'s reputation (1).' }
    ],
    test: {
      mcq: [
        { q: 'Downsizing is usually triggered by…', opts: ['Rapid growth','Financial difficulty/cost-cutting','New legislation only','A pandemic only'], a: 1, marks: 1, fb: 'Downsizing cuts costs/staff, often in financial difficulty.' },
        { q: 'The "E" letters in SMARTER stand for Evaluate and…', opts: ['Expand','Revise','Encrypt','Estimate'], a: 1, marks: 1, fb: 'Evaluate and Revise.' },
        { q: 'Which is an EXTERNAL change trigger?', opts: ['Rebranding','A new competitor (economic)','Restructuring','Adding a feature'], a: 1, marks: 1, fb: 'Competitor action is external (economic).' },
        { q: 'Operational feasibility asks…', opts: ['Is it legal?','Does it fit how the organisation works?','Can we build it technically?','Can we finish in time?'], a: 1, marks: 1, fb: 'Operational = fits the organisation\'s ways of working.' },
        { q: 'A business case mainly assesses…', opts: ['Costs, benefits and risks','Cable lengths','OSI layers','Protected characteristics'], a: 0, marks: 1, fb: 'Costs, benefits and risks.' },
        { q: 'A sensible first step when planning a major change is to…', opts: ['Tell no one','Set SMARTER objectives and a business case','Delete backups','Ignore stakeholders'], a: 1, marks: 2, fb: 'Define SMARTER objectives and justify with a business case.' }
      ],
      structured: [
        { q: 'Identify two ways an organisation can respond to change.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): new/amended policies; new processes; new products/services; improved/new digital systems; training; restructuring.'], model: 'Two responses are <strong>introducing improved training</strong> and <strong>updating its digital systems</strong>.' },
        { q: 'Explain one benefit of using a Change Advisory Board (CAB) when managing a technical change.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Prioritises/reviews changes (1) so resources go to the most valuable/lowest-risk changes and problems are caught early (1).'], model: 'A CAB <strong>prioritises and reviews change requests</strong> (1), which means resources are spent on the changes that deliver the most value and risks are assessed and caught at approval stages before they become costly problems (1).' }
      ],
      nine: {
        scenario: 'A company wants to introduce new business processes following a recent surge in customers, but staff are anxious about the changes and some fear losing their jobs.',
        q: 'Evaluate how the company should manage this change to make it successful.',
        indicative: ['Clear communication to reduce uncertainty/rumours and resistance.','Involve/consult staff and provide training/support (reskilling, recruitment partnerships).','Use SMARTER objectives + business case + CAB to plan and monitor.','Phased rollout, review and revise; feedback loops.','Balance speed of meeting demand vs staff morale; conclusion.'],
        model: 'To make this change successful the company must manage <strong>both the technical and the human side</strong>. Because staff are anxious and fear redundancy, the priority is <strong>clear communication</strong> — explaining why the change is needed (to cope with the surge in customers) reduces uncertainty, rumours and resistance. Pairing this with <strong>involvement and training</strong> (consulting staff, reskilling them for new processes, and offering support) turns potential opponents into participants and protects morale. <br><br>On the planning side, the company should set <strong>SMARTER objectives</strong>, justify the change with a <strong>business case</strong>, and use a <strong>CAB</strong> to prioritise, approve in stages and monitor progress, with a <strong>phased rollout</strong> so problems are fixed before full launch. <br><br>There is a tension between moving fast to meet rising demand and going slowly enough to keep staff onside; rushing risks resistance and mistakes, while moving too slowly risks losing the new customers. <br><br>Overall, the change is most likely to succeed if the company communicates early, involves and trains staff, and follows a structured, monitored process. Managing people\'s fears is as important as the technical change itself — so a balanced, well-communicated, phased approach is the most suitable.'
      }
    }
  }
  ],
  nutshell: `
    <h2>CO5 — Everything in a Nutshell</h2>
    <h3>5.1 Business Environment</h3>
    <p>Products (tangible) vs services (intangible). Sectors: <strong>private</strong> (SME/large), <strong>public</strong> (tax-funded), <strong>third</strong> (non-profit). Models: <strong>B2C, B2B, B2M</strong>. Stakeholders: <strong>internal</strong> (owners, directors, employees) vs <strong>external</strong> (customers, suppliers, shareholders, investors, government, outsourced services).</p>
    <h3>5.2 Digital Value</h3>
    <p>Digital systems support sales/marketing, R&amp;D, HR, operations, management, logistics, finance. They support users via functionality, fewer pain points, accessibility, compatibility, 24/7 availability, support and easy installation.</p>
    <h3>5.3 Risks &amp; Impacts</h3>
    <p>Risks: security breach, privacy breach, regulatory non-compliance, audience exclusion, emerging rivals, technical failure. Impacts: legal action, fines, reputational damage, loss of licence, loss of business.</p>
    <h3>5.4 Technical Change Management</h3>
    <p>Triggers: internal (restructure, expand, downsize, new strategy) &amp; external (<strong>PESTLE</strong>). Respond via policies, processes, products, systems, training, restructuring. Manage with <strong>CAB</strong>, <strong>SMARTER</strong> objectives, a business case. Feasibility = technical, economic, legal, operational, schedule. Communicate to reduce resistance.</p>
    <div class="callout tip">Exam hooks: name 2 stakeholders, PESTLE factors, how digital supports an org area, a risk + its impact, and "how to respond to change".</div>`
});

indexKB('CO5','Business Context','5.1 Types of organisation & stakeholders','Organisations provide products (tangible) or services (intangible). Sectors are private (SMEs and large enterprises), public (government and tax funded such as the NHS and schools) and third sector (charities, community groups and social enterprises). Business models are B2C, B2B and B2M. Internal stakeholders include owners, directors and employees; external stakeholders include customers, suppliers, shareholders, investors, government and outsourced services.');
indexKB('CO5','Business Context','5.2 Digital value to organisations','Digital systems support sales and marketing (online selling, social media, analytics, loyalty schemes), R&D (CAD, 3D printing), HR (self-service portals), operations (Teams, Slack, automation, remote working), management (KPI dashboards), logistics (automatic stock control, route optimisation) and finance (automated invoicing, payments, credit checks). They support user needs through functionality, reduced pain points, accessibility, compatibility, 24/7 availability, support and ease of installation.');
indexKB('CO5','Business Context','5.3 Risks and impacts of digital systems','Risks of using digital systems include security breaches, privacy breaches, regulatory and legal non-compliance, audience exclusion, emerging rival services and technical failure. Impacts include legal action, fines, reputational damage, withdrawal of licence to practise and loss of business.');
indexKB('CO5','Business Context','5.4 Technical change management','Change is triggered by internal factors (restructuring, expansion, downsizing, new strategic objectives) and external factors summarised as PESTLE: Political, Economic, Social, Technological, Legal, Environmental. Organisations respond with new policies, processes, products, digital systems, training and restructuring. Change is managed with a Change Advisory Board, SMARTER objectives and a business case. Feasibility covers technical, economic, legal, operational and schedule. Clear communication reduces resistance to change.');
