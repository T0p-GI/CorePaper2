/* =========================================================================
   co7.js — Content Area 7: Digital Environments
   Source: ZigZag CO7 Course Companion (teaching content only).
   ========================================================================= */
registerArea({
  id: 'co7', code: 'CO7', title: 'Digital Environments',
  blurb: 'Hardware, software, networks, virtual & cloud environments, and building resilience.',
  units: [
  /* 7.1 Hardware */
  {
    id: 'co7-1', code: '7.1', title: 'Hardware',
    learn: `
      <h2>Types of physical computer</h2>
      <ul class="tight">
        <li><strong>Desktop</strong> — fixed, powerful, expandable, mains-powered.</li>
        <li><strong>Laptop</strong> — portable, battery, lower-power CPU, built-in keyboard/trackpad.</li>
        <li><strong>Mobile devices</strong> (smartphone/tablet) — small, wireless, low-power/low-heat, touchscreen.</li>
        <li><strong>Server</strong> — powerful shared machine providing files/security/websites; redundant parts &amp; RAID.</li>
        <li><strong>Embedded devices</strong> — dedicated computers inside other things (cars, smartwatches, smart home).</li>
      </ul>
      <p>Differentiators: physical size, storage, processor speed, RAM, input/output methods, connectivity.</p>
      <h2>Hardware devices</h2>
      <ul class="tight">
        <li><strong>Input</strong> — keyboard, mouse, trackpad, touchscreen, scanner, camera/mic, sensors.</li>
        <li><strong>Output</strong> — monitor, printer, speakers/headphones, projector, actuators/motors.</li>
        <li><strong>Processor (CPU)</strong> — executes instructions; speed = clock speed (Hz) + number of cores; uses cache.</li>
        <li><strong>Memory</strong> — <strong>RAM</strong> (volatile, fast working memory) vs <strong>ROM</strong> (non-volatile, holds BIOS/UEFI firmware).</li>
        <li><strong>Secondary storage</strong> — cheaper, non-volatile (HDD/SSD) for long-term data.</li>
      </ul>`,
    like12: `
      <p>🖥️ <strong>Computers come in types</strong>: a desktop (the big powerful one on a desk), a laptop (portable, runs on battery), a phone/tablet (tiny, touchscreen), a server (a super-powerful shared computer for lots of people), and embedded ones (hidden inside cars, watches, fridges).</p>
      <p>🧠 The <strong>CPU</strong> is the brain — it does the thinking. More "cores" = more brains working at once. <strong>RAM</strong> is like your desk space while working (it empties when you switch off). <strong>ROM/storage</strong> is the drawer that keeps things even when the power's off.</p>
      <p>⌨️ <strong>Input</strong> devices put info in (keyboard, mouse, camera). <strong>Output</strong> devices show results (screen, speakers, printer).</p>`,
    flashcards: [
      { front: 'Server', back: 'A powerful computer providing shared resources/security to many users; often has redundant parts and RAID.', k12: 'A super-strong shared computer that lots of people connect to.' },
      { front: 'Embedded device', back: 'A computer built into another product to do a dedicated job (car braking, smartwatch).', k12: 'A tiny hidden computer inside things like cars, watches and fridges.' },
      { front: 'CPU', back: 'Central Processing Unit — executes instructions; speed depends on clock speed (Hz) and number of cores.', k12: 'The brain of the computer — more cores means more brains working at once.' },
      { front: 'RAM', back: 'Volatile working memory the CPU uses for current code/data; lost when power is off.', k12: 'Your desk space while working — wipe clean when you turn the computer off.' },
      { front: 'ROM', back: 'Non-volatile memory holding start-up firmware (BIOS/UEFI); kept when power is off.', k12: 'Permanent memory that remembers how to switch the computer on.' },
      { front: 'Clock speed', back: 'How many operations per second a CPU performs, measured in Hz (e.g. 4 GHz = 4 billion/sec).', k12: 'How fast the brain ticks — higher number, faster computer.' },
      { front: 'Secondary storage', back: 'Cheap, non-volatile long-term storage (HDD/SSD) for files when not in use.', k12: 'The drawer that keeps your files safe even with the power off.' },
      { front: 'Input vs output device', back: 'Input devices send data to the computer (keyboard); output devices present data from it (monitor).', k12: 'Input = put info in; output = get info out.' }
    ],
    quiz: [
      { q: 'Which memory is volatile (lost when power is off)?', opts: ['ROM','RAM','SSD','HDD'], a: 1, marks: 1, fb: 'RAM is volatile.' },
      { q: 'A computer built into a car\'s braking system is a(n)…', opts: ['Server','Embedded device','Mainframe','Router'], a: 1, marks: 1, fb: 'Embedded device.' },
      { q: 'CPU speed depends on clock speed and…', opts: ['Cable length','Number of cores','Screen size','Printer type'], a: 1, marks: 1, fb: 'Clock speed + number of cores.' },
      { q: 'Which holds the BIOS/UEFI start-up firmware?', opts: ['RAM','ROM','Cache','SSD'], a: 1, marks: 1, fb: 'ROM is non-volatile and stores firmware.' },
      { q: 'Which is an OUTPUT device?', opts: ['Scanner','Microphone','Projector','Keyboard'], a: 2, marks: 1, fb: 'A projector outputs data.' },
      { q: 'A defining feature of a server vs a desktop is…', opts: ['Smaller screen','Redundant parts and RAID','No CPU','No storage'], a: 1, marks: 1, fb: 'Servers add redundancy and RAID for reliability.' },
      { q: 'Why do mobile devices use low-power CPUs?', opts: ['To look nicer','To save battery and reduce heat','To increase weight','To add ports'], a: 1, marks: 2, fb: 'Battery life and limited cooling space.' },
      { q: 'A touchscreen is best described as…', opts: ['Input only','Output only','Both input and output','Neither'], a: 2, marks: 1, fb: 'Touchscreens both display and accept input.' }
    ],
    practice: [
      { q: 'State two differences between RAM and ROM.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): RAM is volatile / ROM non-volatile; RAM read-write / ROM read-only; RAM holds current data / ROM holds start-up firmware.'], model: 'RAM is <strong>volatile</strong> (data lost when powered off) and read/write, whereas ROM is <strong>non-volatile</strong> and holds the start-up firmware.' },
      { q: 'Explain one reason a business might choose a server rather than a desktop to store shared files.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Redundancy/reliability (1) — servers have redundant parts and RAID so they keep running and protect data if a component fails (1). OR shared access for many users (1)…'], model: 'A server offers <strong>redundancy and reliability</strong> (1): with two power supplies and RAID drives, it keeps running and protects the shared files even if a component fails, which a normal desktop could not guarantee (1).' }
    ],
    test: {
      mcq: [
        { q: 'Which is NOT typically an input device?', opts: ['Scanner','Sensor','Speaker','Microphone'], a: 2, marks: 1, fb: 'A speaker is an output device.' },
        { q: 'Cache memory is…', opts: ['Slow secondary storage','Small, very fast memory near the CPU','A type of printer','A network cable'], a: 1, marks: 1, fb: 'Cache is small/fast memory used by the CPU.' },
        { q: 'A laptop differs from a desktop mainly because it…', opts: ['Has no CPU','Is portable and battery-powered','Cannot run software','Has no RAM'], a: 1, marks: 1, fb: 'Portable, battery-powered, lower-power components.' },
        { q: 'A smartwatch is an example of a(n)…', opts: ['Server','Embedded device','Mainframe','Switch'], a: 1, marks: 1, fb: 'Embedded device.' },
        { q: 'More CPU cores generally allow…', opts: ['Slower processing','More tasks to run in parallel','Less RAM','Smaller screens'], a: 1, marks: 1, fb: 'Parallel processing across cores.' },
        { q: 'Which factor does NOT usually differentiate device types/price?', opts: ['Processor speed','RAM','Storage','The user\'s name'], a: 3, marks: 2, fb: 'Differentiators include size, storage, CPU, RAM, I/O and connectivity.' }
      ],
      structured: [
        { q: 'Identify two types of physical computer.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): desktop; laptop; mobile device (smartphone/tablet); server; embedded device.'], model: 'Two types are a <strong>server</strong> and a <strong>laptop</strong>.' },
        { q: 'Explain one reason RAM improves system performance.', marks: 2, cmd: 'Explain', points: ['1 + 1.','RAM is much faster than a hard drive (1), so data held in RAM can be read/written and processed quickly, speeding up the running program (1).'], model: 'RAM is far faster to read from and write to than a hard drive (1), so the data and code for the current program are processed much more quickly, making the system run faster (1).' }
      ],
      nine: {
        scenario: 'A small design studio needs to choose hardware for staff who run heavy graphics software and share large project files. It is deciding between high-spec desktops with a shared server, or laptops that rely mostly on cloud storage.',
        q: 'Evaluate the suitability of the studio choosing high-spec desktops with a shared server.',
        indicative: ['Desktops: more power/expandable/better cooling for heavy graphics; cheaper performance per £; not portable.','Server: redundancy/RAID, central backup, fast LAN access to large files; setup/maintenance cost & expertise.','Laptops+cloud: portability/flexibility, no local server upkeep; but cloud upload of large files is slow, ongoing fees, internet-dependent.','Context: heavy graphics + large shared files favour local power & fast LAN.','Conclusion with conditions (budget, remote working needs).'],
        model: 'High-spec desktops with a shared server are <strong>well suited</strong> to this studio. Heavy graphics software needs strong, <strong>expandable</strong> hardware with good cooling, which desktops provide more cheaply per pound of performance than laptops. A <strong>shared server</strong> gives fast LAN access to the large project files, plus <strong>RAID and redundancy</strong> for reliability and central backup — important when files are valuable. <br><br>The drawbacks are that desktops are <strong>not portable</strong> (a problem if staff need to work off-site), and the server brings <strong>setup, maintenance and expertise costs</strong> that are significant for a small studio. The alternative — laptops with cloud storage — offers portability and removes server upkeep, but uploading/downloading <strong>large graphics files over the internet is slow</strong>, depends on connectivity, and incurs ongoing fees. <br><br>On balance, because the priority is heavy graphics performance and fast access to large shared files, desktops + a server are the more suitable choice, <em>provided</em> staff mainly work on-site and the studio can support the server. If remote working were essential, a hybrid (powerful desktops for the heavy work plus some laptops/cloud for flexibility) would be the better compromise.'
      }
    }
  },
  /* 7.2 Software */
  {
    id: 'co7-2', code: '7.2', title: 'Software',
    learn: `
      <h2>Operating systems (7.2.1)</h2>
      <p>The OS manages hardware, memory, processes, files, users/security and provides the user interface (e.g. Windows, macOS, Linux, Android, iOS).</p>
      <h2>Common utilities (7.2.2)</h2>
      <p>Maintenance tools: antivirus, firewall, backup, disk defragmentation/cleanup, file compression, file management, encryption tools.</p>
      <h2>Code development tools (7.2.3)</h2>
      <p>Editors/IDEs, compilers/interpreters, debuggers, version control, and emulators/containers (e.g. Docker) for testing.</p>
      <h2>Common application software (7.2.4)</h2>
      <p>Productivity software (word processing, spreadsheets, presentations, databases), email/communication, browsers, and specialist apps (CAD, accounting). Software may be <strong>installed locally</strong> or run as <strong>SaaS</strong> in the cloud.</p>`,
    like12: `
      <p>⚙️ The <strong>operating system</strong> (Windows, macOS, Android) is the boss in charge of the whole computer — it runs the apps, manages memory and files, and lets you log in. Without it, the computer is just a lump of metal.</p>
      <p>🧰 <strong>Utilities</strong> are little helper tools that keep the computer healthy — antivirus, backup, disk clean-up — like a toolbox.</p>
      <p>👩‍💻 <strong>Code development tools</strong> are what programmers use to write and test apps (editors, debuggers, version control).</p>
      <p>📄 <strong>Application software</strong> is the stuff <em>you</em> actually use — Word, a browser, email, games. It can be installed on your computer or run online (SaaS).</p>`,
    flashcards: [
      { front: 'Operating system (OS)', back: 'Software that manages hardware, memory, processes, files, users/security and the user interface.', k12: 'The boss program that runs the whole computer and lets apps work.' },
      { front: 'Utility software', back: 'Tools that maintain/optimise the system: antivirus, backup, defrag, compression, encryption.', k12: 'Little helper tools that keep the computer tidy and healthy.' },
      { front: 'IDE', back: 'Integrated Development Environment — software for writing, testing and debugging code.', k12: 'A coder\'s workshop with everything to write and fix programs in one place.' },
      { front: 'Compiler vs interpreter', back: 'A compiler translates whole code to machine code first; an interpreter runs it line by line.', k12: 'Compiler = translate the whole book first; interpreter = translate one sentence at a time as you read.' },
      { front: 'Version control', back: 'Tracks changes to code/files so teams collaborate and can roll back (e.g. Git).', k12: 'A save-history for code so a team doesn\'t overwrite each other and can undo mistakes.' },
      { front: 'Application software', back: 'Programs end-users use for tasks: word processing, spreadsheets, browsers, email, CAD.', k12: 'The apps you actually use — Word, browsers, games.' },
      { front: 'SaaS', back: 'Software as a Service — applications run from the cloud via a browser instead of local install.', k12: 'Apps you use through the internet instead of installing them.' }
    ],
    quiz: [
      { q: 'Which manages memory, files, processes and the user interface?', opts: ['A browser','The operating system','A spreadsheet','A printer'], a: 1, marks: 1, fb: 'The OS manages the whole system.' },
      { q: 'Antivirus and disk clean-up are examples of…', opts: ['Application software','Utility software','Operating systems','Firmware'], a: 1, marks: 1, fb: 'Utility (maintenance) software.' },
      { q: 'An interpreter executes code…', opts: ['All at once after translating','Line by line','Only on servers','Without a CPU'], a: 1, marks: 1, fb: 'Line by line.' },
      { q: 'Which tool lets a team track changes and roll back code?', opts: ['Version control','A compiler','A scanner','A firewall'], a: 0, marks: 1, fb: 'Version control (e.g. Git).' },
      { q: 'Word processors and spreadsheets are…', opts: ['Operating systems','Application software','Utilities','Drivers'], a: 1, marks: 1, fb: 'Application software.' },
      { q: 'Running software via a browser without installing is…', opts: ['SaaS','RAM','BIOS','LAN'], a: 0, marks: 1, fb: 'Software as a Service.' },
      { q: 'Which is used to test code in a different OS on your machine?', opts: ['An emulator/container (e.g. Docker)','A printer driver','A spreadsheet','A keyboard'], a: 0, marks: 2, fb: 'Emulators/containers like Docker.' },
      { q: 'Android and iOS are examples of…', opts: ['Utilities','Operating systems','Browsers','Compilers'], a: 1, marks: 1, fb: 'Mobile operating systems.' }
    ],
    practice: [
      { q: 'State two functions of an operating system.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): manages hardware; manages memory; manages processes; manages files; manages users/security; provides the user interface.'], model: 'Two functions are <strong>managing memory</strong> and <strong>managing files and storage</strong>.' },
      { q: 'Explain one benefit of using utility software such as antivirus.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Detects/removes malware (1) protecting the system from infection and data loss/breach (1).'], model: 'Antivirus utility software <strong>detects and removes malware</strong> (1), which protects the system from infection that could steal or destroy data, keeping the organisation secure (1).' }
    ],
    test: {
      mcq: [
        { q: 'Which is NOT a function of the OS?', opts: ['Memory management','Designing a logo','File management','User/security management'], a: 1, marks: 1, fb: 'Designing a logo is an application task.' },
        { q: 'A compiler differs from an interpreter because it…', opts: ['Runs line by line','Translates the whole program first','Needs no CPU','Is a printer'], a: 1, marks: 1, fb: 'Compilers translate all code first.' },
        { q: 'File compression is provided by…', opts: ['Utility software','An OS only','Firmware','A monitor'], a: 0, marks: 1, fb: 'A utility tool.' },
        { q: 'CAD software is best classed as…', opts: ['Utility','Application software','Operating system','Driver'], a: 1, marks: 1, fb: 'Specialist application software.' },
        { q: 'A debugger is a…', opts: ['Code development tool','Backup utility','Network cable','Sensor'], a: 0, marks: 1, fb: 'A code development tool.' },
        { q: 'A drawback of SaaS vs installed software can be…', opts: ['No internet needed','Reliance on internet connection','It is always free','No updates ever'], a: 1, marks: 2, fb: 'SaaS depends on an internet connection.' }
      ],
      structured: [
        { q: 'Identify two examples of code development tools.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): editor/IDE; compiler/interpreter; debugger; version control; emulator/container.'], model: 'Two are an <strong>IDE (code editor)</strong> and a <strong>debugger</strong>.' },
        { q: 'Explain one benefit of using version control in a development team.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Tracks changes/rollback (1) so multiple developers can work without overwriting each other and mistakes can be undone (1).'], model: 'Version control <strong>tracks every change and allows rollback</strong> (1), so several developers can work on the same project at once without overwriting each other\'s work, and a faulty change can be reversed easily (1).' }
      ],
      nine: {
        scenario: 'A college\'s support team needs different versions of the same software for different courses. They are choosing whether to install everything locally on shared machines, or move to cloud-based (SaaS) applications.',
        q: 'Evaluate the suitability of the college using cloud-based (SaaS) applications instead of locally installed software.',
        indicative: ['SaaS pros: no local install/maintenance, central updates, access anywhere, scalable, fewer version conflicts.','SaaS cons: internet-dependent, ongoing subscription cost, less customisation, fewer features, data/GDPR concerns.','Local pros: works offline, full features/customisation, direct performance.','Local cons: version conflicts on shared machines, manual updates/maintenance.','Context: multiple versions/conflicts favour isolation; conclusion.'],
        model: 'Using SaaS is <strong>broadly suitable</strong> for the college\'s situation. The team currently struggles with <strong>different software versions on shared machines</strong>; SaaS removes much of this because applications run from the cloud, are <strong>centrally updated</strong>, and need <strong>no local installation or maintenance</strong>, while being accessible from any device and easy to scale. <br><br>However, SaaS has drawbacks: it is <strong>internet-dependent</strong> (an outage stops access), carries <strong>ongoing subscription costs</strong>, offers <strong>less customisation and sometimes fewer features</strong> than installed software, and raises <strong>data/GDPR</strong> questions about where data is stored. Locally installed software works offline with full features, but reintroduces the <strong>version-conflict and manual-update</strong> problems on shared machines. <br><br>Given that the core problem is conflicting versions on shared physical machines, SaaS (or virtualised environments) is the more suitable direction because it isolates and centralises software management. The judgement therefore favours SaaS, <em>provided</em> the college has reliable internet and is satisfied the provider meets data-protection requirements; otherwise a hybrid of SaaS plus some locally installed specialist tools would be the safest compromise.'
      }
    }
  },
  /* 7.3 Networks */
  {
    id: 'co7-3', code: '7.3', title: 'Networks',
    learn: `
      <h2>Benefits &amp; drawbacks of networks</h2>
      <p><strong>Benefits:</strong> share files/resources/printers, central storage &amp; backup, communication, cost savings on licences/Internet. <strong>Drawbacks:</strong> setup/maintenance cost, security risk (malware spreads, hackers target many), dependency on server/Internet.</p>
      <h2>Types of network</h2>
      <p><strong>PAN</strong> (personal, Bluetooth), <strong>LAN</strong> (a building/site), <strong>MAN</strong> (a city), <strong>WAN</strong> (countries/global), <strong>Internet</strong> (the biggest WAN), <strong>VPN</strong> (secure encrypted tunnel over the Internet).</p>
      <h2>Connectivity methods</h2>
      <p><strong>Wired</strong> (Ethernet Cat 6/6a/8, fibre-optic, USB) — fast, reliable, secure. <strong>Wireless</strong> (Wi-Fi, Bluetooth, NFC, 5G, Li-Fi) — convenient but slower, shorter range, interference, more security risk.</p>
      <h2>Topologies</h2>
      <p><strong>Star</strong> (central switch — easy to trace faults, no eavesdropping, scalable, but cable-heavy and central device is a single point of failure). <strong>Mesh</strong> (redundant, reliable, but costly/many links). <strong>Tree</strong> (hierarchical star — scalable, but a branch failure affects its sub-branches). Physical = layout; logical = how data flows.</p>
      <h2>Network models</h2>
      <p><strong>Client–server</strong> (central servers serve clients), <strong>thin client</strong> (minimal client, powerful server), <strong>peer-to-peer</strong> (devices share directly).</p>
      <h2>Components</h2>
      <p>Server, client, <strong>router</strong> (connects network to the Internet, directs traffic, often built-in firewall), <strong>switch</strong> (connects devices on a LAN, manages internal traffic), home hub, Internet backbone, ISPs (tiers 1–3).</p>
      <h2>OSI &amp; TCP/IP models</h2>
      <p><strong>OSI (7 layers):</strong> Application, Presentation, Session, Transport, Network, Data link, Physical. <strong>TCP/IP (4 layers):</strong> Application, Transport, Internet, Network access.</p>
      <h2>Data packets &amp; protocols</h2>
      <p>Data is split into <strong>packets</strong> (header: source/destination/TTL/checksum; payload; footer/CRC). Error checks: checksum &amp; CRC. Key protocols: HTTP/HTTPS, SMTP/POP3/IMAP4 (mail), FTP/SFTP, DHCP, DNS, RIP/OSPF (routing).</p>
      <h2>Bandwidth &amp; latency</h2>
      <p><strong>Bandwidth</strong> = max data per second (bps). <strong>Latency</strong> = delay for a bit to travel (ms). Max bandwidth = the slowest link; total latency = sum of all delays.</p>`,
    like12: `
      <p>🕸️ A <strong>network</strong> is computers joined together so they can share stuff (files, printers, internet). Sizes: <strong>PAN</strong> (your gadgets), <strong>LAN</strong> (a building), <strong>MAN</strong> (a city), <strong>WAN</strong> (the world), and the <strong>Internet</strong> is the giant one. A <strong>VPN</strong> is a secret secure tunnel.</p>
      <p>🔌 <strong>Wired</strong> (cables) = fast and safe but you can't walk around. <strong>Wi-Fi</strong> = convenient but slower and easier to snoop on.</p>
      <p>⭐ A <strong>star</strong> network plugs every computer into one central switch (easy to fix, but if the switch dies, everything stops). A <strong>mesh</strong> has lots of backup paths.</p>
      <p>📦 Messages are chopped into <strong>packets</strong> with an address label, sent separately, and rebuilt at the other end. <strong>Routers</strong> connect you to the internet; <strong>switches</strong> connect computers inside a building.</p>
      <p>🚿 <strong>Bandwidth</strong> = how wide the pipe is (how much can flow). <strong>Latency</strong> = how long the water takes to arrive (the delay).</p>`,
    flashcards: [
      { front: 'LAN vs WAN', back: 'LAN covers one building/site; WAN spans large areas/countries (the Internet is the biggest WAN).', k12: 'LAN = network in one building; WAN = network across the whole world.' },
      { front: 'VPN', back: 'Virtual Private Network — a secure encrypted tunnel over the Internet to a private network.', k12: 'A secret protected tunnel so you can use a work network safely from anywhere.' },
      { front: 'Star topology', back: 'All devices connect to a central switch. Easy fault-finding & secure, but the switch is a single point of failure.', k12: 'Everything plugs into one middle box — neat, but if that box breaks, all stops.' },
      { front: 'Router vs switch', back: 'A router connects a network to the Internet and directs external traffic; a switch connects devices within a LAN.', k12: 'Router = door to the internet; switch = the hallway connecting rooms inside.' },
      { front: 'Packet', back: 'A small unit of data with a header (source/destination/TTL/checksum), payload and footer (CRC).', k12: 'A message chopped into small labelled parcels sent separately and rebuilt at the end.' },
      { front: 'Bandwidth vs latency', back: 'Bandwidth = max data per second; latency = the delay before data arrives (ms).', k12: 'Bandwidth = how wide the pipe is; latency = how long the water takes to reach you.' },
      { front: 'OSI model (7 layers)', back: 'Application, Presentation, Session, Transport, Network, Data link, Physical.', k12: 'A 7-step ladder describing how data travels between computers.' },
      { front: 'DNS', back: 'Domain Name System — converts website names to/from IP addresses.', k12: 'The internet\'s phonebook — turns a website name into its number.' },
      { front: 'IMAP vs POP3', back: 'IMAP keeps mail on the server and syncs across devices; POP3 downloads mail to one device (often deleting it from the server).', k12: 'IMAP = leave mail on the server for all your devices; POP3 = download it to one device.' }
    ],
    quiz: [
      { q: 'Which network type covers a single building or site?', opts: ['WAN','LAN','MAN','PAN'], a: 1, marks: 1, fb: 'A LAN covers one building/site.' },
      { q: 'A VPN mainly provides…', opts: ['Faster CPUs','A secure encrypted connection over the Internet','More RAM','Bigger screens'], a: 1, marks: 1, fb: 'A secure encrypted tunnel.' },
      { q: 'In a star topology, the main weakness is…', opts: ['No scalability','The central switch is a single point of failure','No security','Too few cables'], a: 1, marks: 1, fb: 'If the central device fails, nothing communicates.' },
      { q: 'Which device connects a LAN to the Internet?', opts: ['Switch','Router','Scanner','Server'], a: 1, marks: 1, fb: 'A router connects the network to the Internet.' },
      { q: 'Which mail protocol keeps emails on the server and syncs across devices?', opts: ['SMTP','POP3','IMAP4','FTP'], a: 2, marks: 1, fb: 'IMAP4 syncs mail across devices.' },
      { q: 'Bandwidth is measured in…', opts: ['Milliseconds','Bits per second','Hertz','Pixels'], a: 1, marks: 1, fb: 'Bits per second (e.g. Mbps).' },
      { q: 'Which converts a website name to an IP address?', opts: ['DHCP','DNS','SMTP','RIP'], a: 1, marks: 1, fb: 'DNS.' },
      { q: 'Give one drawback of a wireless (Wi-Fi) connection vs wired.', opts: ['Always faster','Lower security and more interference','No mobility','Needs more cables'], a: 1, marks: 2, fb: 'Wi-Fi is slower, shorter-range and easier to intercept.' },
      { q: 'The OSI model has how many layers?', opts: ['4','5','7','9'], a: 2, marks: 1, fb: 'Seven layers.' }
    ],
    practice: [
      { q: 'State two benefits of connecting computers in a network.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): share files/resources/printers; central storage/backup; communication; cost savings on licences/Internet.'], model: 'Two benefits are <strong>sharing resources such as printers</strong> and <strong>storing/backing up files centrally</strong>.' },
      { q: 'Explain two mail protocols other than SMTP.', marks: 4, cmd: 'Explain', points: ['1 mark protocol + 1 mark explanation, ×2 (max 4).','POP3 (1) downloads emails from the server to the client, usually deleting from the server (1).','IMAP4 (1) keeps emails on the server and syncs them across multiple devices (1).'], model: '<strong>POP3 (Post Office Protocol)</strong> (1) downloads emails from the mail server to a single device, typically removing them from the server (1). <strong>IMAP4 (Internet Message Access Protocol)</strong> (1) leaves emails on the server and synchronises them across all the user\'s devices, so messages and folders stay consistent everywhere (1).' }
    ],
    test: {
      mcq: [
        { q: 'A network spanning a whole city is a…', opts: ['PAN','LAN','MAN','VPN'], a: 2, marks: 1, fb: 'MAN — metropolitan area network.' },
        { q: 'A switch is used to…', opts: ['Connect a LAN to the Internet','Connect and manage devices within a LAN','Convert names to IPs','Encrypt a tunnel'], a: 1, marks: 1, fb: 'Switches connect devices on a LAN.' },
        { q: 'Which protocol automatically assigns IP addresses?', opts: ['DNS','DHCP','HTTP','SMTP'], a: 1, marks: 1, fb: 'DHCP assigns IPs.' },
        { q: 'A CRC in a packet footer is used to…', opts: ['Speed up the packet','Detect data corruption','Encrypt the data','Route the packet'], a: 1, marks: 1, fb: 'Error detection.' },
        { q: 'Total latency across a connection is…', opts: ['The fastest link','The sum of all the delays','The widest pipe','Always zero'], a: 1, marks: 1, fb: 'Latency adds up across each hop.' },
        { q: 'A mesh topology\'s main advantage is…', opts: ['Fewest cables','High redundancy/reliability','No security','Single point of failure'], a: 1, marks: 2, fb: 'Multiple paths give redundancy and reliability.' }
      ],
      structured: [
        { q: 'Identify two common network protocols and their use.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): HTTPS (secure web), SMTP (send mail), DNS (name→IP), DHCP (assign IP), FTP (file transfer).'], model: 'Two protocols are <strong>HTTPS</strong> (securely transmitting web pages) and <strong>DNS</strong> (converting website names to IP addresses).' },
        { q: 'Explain one drawback of relying on a network for an organisation.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Security risk (1) — malware can spread across the network/hackers target many devices (1), so a single infected device could compromise the whole network and its data (1). OR dependency (1)…'], model: 'A key drawback is increased <strong>security risk</strong> (1): on a network, malware can spread rapidly and hackers can target many devices at once (1), so if one user downloads a malicious file the entire network and its shared data could be compromised, causing a major breach (1).' }
      ],
      nine: {
        scenario: 'A network technician is installing new Ethernet cabling across an office, connecting computers, printers and servers to a central switch. The company wants a reliable, secure and easily-maintained network as it grows.',
        q: 'Evaluate the suitability of using a star topology for this office network.',
        indicative: ['Star pros: easy fault-finding (own cable per device), one fault doesn\'t affect others, secure (direct comms, no eavesdropping), scalable if switch copes.','Star cons: lots of cabling/cost, central switch is a single point of failure.','Mitigation: redundant/backup switch; tree (hierarchical star) for growth.','Compare briefly to mesh (reliable but costly) / bus.','Conclusion on suitability for a growing office.'],
        model: 'A <strong>star topology is well suited</strong> to this growing office. Each device has its own cable to the central switch, which makes <strong>fault-finding easy</strong> and means a single cable or computer fault <strong>does not affect the rest</strong> of the network — important for reliability in a busy office. Communication is direct between device and switch, so it is relatively <strong>secure</strong> (no eavesdropping on a shared line), and it is <strong>scalable</strong>: new devices just plug into the switch, as long as the switch can cope. <br><br>The main drawbacks are the <strong>amount of cabling</strong> (raising installation cost) and that the <strong>central switch is a single point of failure</strong> — if it fails, the whole network goes down. <br><br>These weaknesses can be managed: a <strong>backup/redundant switch</strong> reduces the single-point-of-failure risk, and as the company grows it can move to a <strong>tree (hierarchical star)</strong> by linking additional switches. Compared with a <strong>mesh</strong> (very reliable but expensive with many links), the star gives a good balance of reliability, security and cost. <br><br>Overall, the star topology is a suitable choice for a reliable, secure, maintainable and scalable office network, provided the company protects against switch failure with redundancy.'
      }
    }
  },
  /* 7.4 Virtual environments */
  {
    id: 'co7-4', code: '7.4', title: 'Virtual Environments',
    learn: `
      <h2>What is a virtual machine?</h2>
      <p>A <strong>virtual machine (VM)</strong> is a software-based emulation of a physical computer, running its own OS/apps on a host machine, managed by a <strong>hypervisor</strong> (Type 1 = bare-metal; Type 2 = hosted). Reasons: run many VMs on one server (saves space/power/cost), run multiple OSes, test software.</p>
      <h2>Key features</h2>
      <ul class="tight">
        <li><strong>Increased security &amp; isolation</strong> — if one VM is compromised/crashes, others and the host are unaffected.</li>
        <li><strong>Managed execution</strong> — a VM manager controls VMs; automation/orchestration tools set up &amp; maintain them.</li>
        <li><strong>Sharing resources</strong> — CPU/RAM shared flexibly (cheaper) or dedicated (consistent performance); load balancers spread demand.</li>
        <li><strong>Aggregation</strong> — combine multiple servers into one larger VM.</li>
        <li><strong>Emulation</strong> — run another OS/environment (e.g. Docker on Windows to test a Linux server).</li>
        <li><strong>Portability</strong> — VMs can be backed up, moved and restored easily between hosts.</li>
      </ul>
      <h2>Benefits &amp; drawbacks</h2>
      <table class="data"><tr><th>Benefits</th><th>Drawbacks</th></tr>
        <tr><td>Lower hardware cost/maintenance; easy management &amp; scaling; lower carbon footprint; better disaster recovery (snapshots); easy testing/training environments; isolation.</td><td>High initial server cost; more technical knowledge needed; extra security risk if the VM manager is breached; performance overhead/latency.</td></tr></table>`,
    like12: `
      <p>💻➡️💻💻 A <strong>virtual machine</strong> is a pretend computer running <em>inside</em> a real one — like running a games console emulator on your laptop. One powerful computer can pretend to be lots of separate computers at once.</p>
      <p>The boss program that runs them is the <strong>hypervisor</strong>. Each VM is in its own <strong>bubble (isolation)</strong> — if one catches a virus or crashes, the others are fine, like separate sealed rooms.</p>
      <p>Good bits: cheaper (one machine instead of many), easy to copy/back up/move, great for safely testing things. Tricky bits: you need one expensive powerful host, more skill to set up, and if a hacker controls the hypervisor they control <em>all</em> the VMs.</p>`,
    flashcards: [
      { front: 'Virtual machine (VM)', back: 'A software emulation of a physical computer running its own OS/apps on a host, managed by a hypervisor.', k12: 'A pretend computer running inside a real one.' },
      { front: 'Hypervisor', back: 'Software that creates and manages VMs and shares the host\'s CPU/RAM/storage. Type 1 = bare-metal; Type 2 = hosted.', k12: 'The boss program that runs all the pretend computers.' },
      { front: 'Isolation', back: 'Each VM runs independently; if one crashes or is compromised, others and the host are unaffected.', k12: 'Each pretend computer is in its own sealed bubble — one breaking doesn\'t hurt the others.' },
      { front: 'Snapshot', back: 'A saved state of a whole VM that can be restored after failure or a breach.', k12: 'A save point for the whole computer you can jump back to.' },
      { front: 'Load balancer', back: 'Shares workload/resources across servers or VMs to handle demand spikes.', k12: 'Shares out the work so no single computer gets overwhelmed.' },
      { front: 'Portability (VM)', back: 'A VM is not tied to its host — it can be backed up, moved and restored on new hardware easily.', k12: 'You can pick up the whole pretend computer and move it to a new machine.' },
      { front: 'Emulation', back: 'Running a different OS/environment within a VM (e.g. Docker on Windows to test a Linux server).', k12: 'Making your computer pretend to be a different type so you can test or run other software.' }
    ],
    quiz: [
      { q: 'A virtual machine is managed by a…', opts: ['Router','Hypervisor','Switch','Firewall'], a: 1, marks: 1, fb: 'A hypervisor manages VMs.' },
      { q: 'Isolation means that if one VM is compromised…', opts: ['All VMs fail','Other VMs and the host are unaffected','The CPU melts','The internet stops'], a: 1, marks: 1, fb: 'Isolation contains the problem to that VM.' },
      { q: 'A Type 1 hypervisor runs…', opts: ['On top of a host OS','Directly on the physical hardware','Only in a browser','On a printer'], a: 1, marks: 1, fb: 'Type 1 = bare-metal, fastest.' },
      { q: 'A key benefit of virtualisation is…', opts: ['Higher hardware cost','Running many VMs on one server to cut cost','No backups','More cabling'], a: 1, marks: 1, fb: 'Consolidating onto fewer physical machines saves cost/power.' },
      { q: 'A snapshot is useful for…', opts: ['Faster Wi-Fi','Restoring a VM after failure','Encrypting email','Routing packets'], a: 1, marks: 1, fb: 'Disaster recovery — restore a saved state.' },
      { q: 'A drawback of virtual environments is…', opts: ['Easy scaling','Performance overhead/latency','Lower carbon footprint','Easy testing'], a: 1, marks: 1, fb: 'Virtualisation adds some overhead/latency.' },
      { q: 'Why is a breached VM manager a serious risk?', opts: ['It speeds up VMs','It could shut down all managed VMs','It adds RAM','It improves isolation'], a: 1, marks: 2, fb: 'Whoever controls the manager controls every VM it runs.' },
      { q: 'Running a Linux server inside Windows for testing uses…', opts: ['Aggregation','Emulation','A firewall','A switch'], a: 1, marks: 1, fb: 'Emulation (e.g. Docker).' }
    ],
    practice: [
      { q: 'State two benefits of using virtual environments.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): lower hardware cost/maintenance; easy management & scaling; isolation; better disaster recovery (snapshots); easy testing/training; lower carbon footprint.'], model: 'Two benefits are <strong>isolation</strong> (a problem in one VM doesn\'t affect others) and <strong>easy scaling</strong> (VMs can be added or removed quickly).' },
      { q: 'Explain one drawback of using virtual environments.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Higher initial cost / technical knowledge (1) — needs a powerful host server and skilled staff to set up and maintain (1). OR central security risk (1)…'], model: 'A drawback is the increased <strong>security risk if the hypervisor is breached</strong> (1): because one manager controls every VM, an attacker who gains access to it could shut down or compromise all the virtual servers at once (1).' }
    ],
    test: {
      mcq: [
        { q: 'Combining several servers into one larger VM is…', opts: ['Isolation','Aggregation','Emulation','Latency'], a: 1, marks: 1, fb: 'Aggregation.' },
        { q: 'Sharing flexible CPU/RAM between VMs is usually…', opts: ['More expensive than dedicated','Cheaper than dedicated resources','Impossible','Less reliable always'], a: 1, marks: 1, fb: 'Sharing flexible resources is cheaper.' },
        { q: 'A Type 2 hypervisor runs…', opts: ['On bare metal','On top of a host operating system','On a router','On ROM'], a: 1, marks: 1, fb: 'Type 2 = hosted.' },
        { q: 'VM portability means…', opts: ['VMs cannot move','VMs can be moved/restored on new hardware','VMs need no host','VMs are physical'], a: 1, marks: 1, fb: 'VMs aren\'t tied to one machine.' },
        { q: 'Snapshots support which resilience benefit?', opts: ['Disaster recovery','Higher latency','More cabling','Audience exclusion'], a: 0, marks: 1, fb: 'Quick restore = disaster recovery.' },
        { q: 'A reason a start-up might share VM resources is…', opts: ['Guaranteed peak performance','Lower cost with burst capacity when busy','No internet needed','To avoid backups'], a: 1, marks: 2, fb: 'Sharing is cheap and gives extra capacity at peak times.' }
      ],
      structured: [
        { q: 'Identify two key features of virtual environments.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): isolation; managed execution; sharing resources; aggregation; emulation; portability.'], model: 'Two features are <strong>isolation</strong> and <strong>portability</strong>.' },
        { q: 'Explain one benefit of isolation in a virtual environment.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Security/stability (1) — each VM runs independently (1), so if one is infected or crashes the others and the host keep running, limiting the damage of an attack (1).'], model: 'Isolation improves <strong>security and stability</strong> (1): because each VM runs independently with its own OS, CPU share and storage (1), a virus or crash in one VM is contained and does not spread to the others or the host, so the rest of the system keeps running (1).' }
      ],
      nine: {
        scenario: 'A college support team needs different versions of the same software without conflicts. They are choosing between using shared physical machines or virtual environments on a powerful server.',
        q: 'Evaluate the suitability of using virtual environments rather than shared physical machines for the college\'s support work.',
        indicative: ['VE pros: isolation (no version conflicts), flexibility (multiple OS/versions at once), easy maintenance/snapshots/restore, scalability, security.','VE cons: high initial server cost, technical expertise, performance overhead, central risk if hypervisor breached.','Shared physical pros: lower initial cost, simple if uniform setup, direct performance.','Shared physical cons: software conflicts, hard to isolate, maintenance disrupts others.','Context: conflicting versions → isolation wins; conclusion.'],
        model: 'Virtual environments are <strong>highly suitable</strong> for the college\'s needs. The core problem is <strong>conflicting software versions on shared machines</strong>; VMs solve this through <strong>isolation</strong> — each version runs in its own environment, so they cannot overwrite or conflict with one another. They also add <strong>flexibility</strong> (different OSes/versions running at once), <strong>easy maintenance</strong> (snapshots and templates let staff restore or redeploy quickly), <strong>scalability</strong>, and improved <strong>security</strong> through isolation. <br><br>Compared with <strong>shared physical machines</strong> — which are cheaper to start and fine if everyone needs identical software, but suffer exactly the version conflicts the college is experiencing — VMs directly address the problem. <br><br>The drawbacks of VMs are real: a <strong>higher initial server cost</strong>, the need for <strong>technical expertise</strong>, some <strong>performance overhead</strong>, and a central risk if the hypervisor is compromised. <br><br>On balance, because the college specifically needs multiple conflicting software versions, virtual environments are clearly the more suitable choice: the flexibility and isolation they provide outweigh the higher setup cost and complexity. Shared physical machines would only be preferable if the software setup were uniform and rarely changed — which is not the case here.'
      }
    }
  },
  /* 7.5 Cloud */
  {
    id: 'co7-5', code: '7.5', title: 'Cloud Environments',
    learn: `
      <h2>Public vs private cloud</h2>
      <p><strong>Public cloud</strong> — third-party provider (AWS, Azure, Google), shared resources, pay-as-you-go, provider manages infrastructure. <strong>Private cloud</strong> — dedicated to one organisation (on-prem or hosted), more control over security/compliance/performance.</p>
      <h2>Benefits of the cloud</h2>
      <ul class="tight">
        <li><strong>Portability</strong> — move applications between providers.</li>
        <li><strong>Elasticity</strong> — automatically scale resources up/down with demand.</li>
        <li><strong>Reduced storage limitations</strong> — pay for what you use; easy to expand.</li>
        <li><strong>Cost-effectiveness</strong> — pay-as-you-go; avoid big upfront hardware costs (but billing can be complex).</li>
      </ul>
      <h2>Cloud delivery models (who manages what)</h2>
      <table class="data"><tr><th>Model</th><th>Provider manages</th><th>Customer manages</th></tr>
        <tr><td><strong>IaaS</strong></td><td>Network, storage, servers, virtualisation</td><td>OS, middleware, runtime, apps, data, users</td></tr>
        <tr><td><strong>PaaS</strong></td><td>All of IaaS + OS, middleware, runtime</td><td>Apps, data, users</td></tr>
        <tr><td><strong>SaaS</strong></td><td>Everything (whole application)</td><td>Just user accounts + own data</td></tr></table>
      <p>Trade-off: more provider control = less management burden but less customisation/features and potential GDPR/data-location concerns.</p>`,
    like12: `
      <p>☁️ <strong>Cloud</strong> just means using someone else's powerful computers over the internet instead of your own. <strong>Public cloud</strong> = a shared one (like a public gym — cheap, shared). <strong>Private cloud</strong> = your own (more control, more cost).</p>
      <p>Why people love it: <strong>elasticity</strong> (grow or shrink instantly when busy/quiet — like getting extra tables on a busy night), pay only for what you use, and (almost) unlimited storage.</p>
      <p>🍕 The <strong>IaaS / PaaS / SaaS</strong> levels are like pizza: <strong>IaaS</strong> = they give you the kitchen, you cook; <strong>PaaS</strong> = they give the kitchen + ingredients, you make the pizza; <strong>SaaS</strong> = they hand you a finished pizza, you just eat. The more they do, the less work for you — but the less you can customise.</p>`,
    flashcards: [
      { front: 'Public cloud', back: 'Cloud run by a third-party provider with shared resources, pay-as-you-go (AWS, Azure, Google).', k12: 'Renting space on shared internet computers — cheap and shared, like a public gym.' },
      { front: 'Private cloud', back: 'Cloud dedicated to one organisation, giving more control over security, compliance and performance.', k12: 'Your own private set of internet computers — more control, more cost.' },
      { front: 'Elasticity', back: 'Automatically scaling cloud resources up or down to match changing demand.', k12: 'Getting more power when busy and less when quiet — automatically.' },
      { front: 'IaaS', back: 'Infrastructure as a Service — provider supplies network/storage/servers/virtualisation; you manage the OS upwards.', k12: 'They give you the empty kitchen; you bring and cook everything.' },
      { front: 'PaaS', back: 'Platform as a Service — provider also supplies OS/middleware/runtime; you just build/run your apps and data.', k12: 'They give you the kitchen + ingredients; you make the dish.' },
      { front: 'SaaS', back: 'Software as a Service — provider runs the whole application; you just manage accounts and your data.', k12: 'They hand you a finished meal; you just eat it.' },
      { front: 'Cloud cost-effectiveness', back: 'Pay-as-you-go avoids big upfront hardware costs, though billing for CPU/RAM/storage can be complex.', k12: 'Pay only for what you use instead of buying expensive machines up front.' }
    ],
    quiz: [
      { q: 'A public cloud is characterised by…', opts: ['Dedicated single-org hardware','Shared resources from a third-party provider','No internet needed','On-premises only'], a: 1, marks: 1, fb: 'Public cloud shares resources via a provider.' },
      { q: 'Automatically scaling resources with demand is…', opts: ['Latency','Elasticity','Aggregation','Redundancy'], a: 1, marks: 1, fb: 'Elasticity.' },
      { q: 'In SaaS, the customer is mainly responsible for…', opts: ['The servers','The OS','User accounts and their own data','The network'], a: 2, marks: 1, fb: 'SaaS leaves only accounts/data to the customer.' },
      { q: 'Which model gives the customer the MOST control?', opts: ['SaaS','PaaS','IaaS','None'], a: 2, marks: 1, fb: 'IaaS — customer manages OS upwards.' },
      { q: 'A private cloud is preferred when an organisation needs…', opts: ['The cheapest possible option','More control over security/compliance','No staff','Slower performance'], a: 1, marks: 1, fb: 'Private cloud = more control over security/compliance.' },
      { q: 'A benefit of pay-as-you-go cloud is…', opts: ['Large upfront hardware cost','Avoiding big upfront costs','No scalability','More cabling'], a: 1, marks: 1, fb: 'Avoids upfront capital cost.' },
      { q: 'A drawback of SaaS can be…', opts: ['Automatic updates','Limited customisation and GDPR/data-location concerns','No internet needed','Full control of servers'], a: 1, marks: 2, fb: 'Less customisation; data may sit with the provider.' },
      { q: 'PaaS additionally provides, over IaaS…', opts: ['Nothing','OS, middleware and runtime','Only storage','Only a network'], a: 1, marks: 1, fb: 'PaaS adds OS/middleware/runtime.' }
    ],
    practice: [
      { q: 'State two benefits of using cloud computing.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): elasticity/scalability; reduced storage limits; cost-effectiveness/pay-as-you-go; portability; provider manages hardware.'], model: 'Two benefits are <strong>elasticity</strong> (scale resources with demand) and <strong>cost-effectiveness</strong> (pay only for what you use).' },
      { q: 'Explain one difference between IaaS and SaaS.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Responsibility (1) — with IaaS the customer manages the OS, apps and data while the provider supplies infrastructure; with SaaS the provider manages the whole application and the customer only manages accounts/data (1).'], model: 'The difference is who manages what (1): with <strong>IaaS</strong> the provider supplies only the infrastructure and the customer manages the OS, applications and data, whereas with <strong>SaaS</strong> the provider runs the entire application and the customer only manages their user accounts and data (1).' }
    ],
    test: {
      mcq: [
        { q: 'AWS and Microsoft Azure are examples of…', opts: ['Private clouds','Public cloud providers','LANs','Hypervisors'], a: 1, marks: 1, fb: 'Public cloud providers.' },
        { q: 'Elasticity is most useful for a business that…', opts: ['Has constant steady demand','Has big seasonal demand spikes','Never uses the internet','Has no data'], a: 1, marks: 1, fb: 'Scaling handles spikes (e.g. Black Friday).' },
        { q: 'Which model means the provider manages the OS but not your apps?', opts: ['IaaS','PaaS','SaaS','On-premises'], a: 1, marks: 1, fb: 'PaaS.' },
        { q: 'A reason to choose a private cloud is…', opts: ['Lowest cost always','Customisable security/compliance','No staff needed','Slower speed'], a: 1, marks: 1, fb: 'Control over security/compliance.' },
        { q: 'Cloud portability refers to…', opts: ['Carrying a laptop','Moving an application between providers','Faster Wi-Fi','Bigger screens'], a: 1, marks: 1, fb: 'Moving apps between cloud providers.' },
        { q: 'A GDPR concern with public SaaS is…', opts: ['No data is stored','Uncertainty over where/who can access data','Too much control','No updates'], a: 1, marks: 2, fb: 'Data may be stored/accessed by the provider, raising compliance questions.' }
      ],
      structured: [
        { q: 'Identify the three common cloud delivery models.', marks: 2, cmd: 'Identify', points: ['1 mark for any two (max 2): IaaS; PaaS; SaaS.'], model: 'The three models are <strong>IaaS</strong>, <strong>PaaS</strong> and <strong>SaaS</strong>.' },
        { q: 'Explain one benefit to a start-up of using cloud services rather than buying its own servers.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Cost/cash flow (1) — pay-as-you-go avoids large upfront hardware costs (1), so a start-up keeps cash for other priorities and can still scale up as it grows (1).'], model: 'A key benefit is <strong>cost-effectiveness</strong> (1): cloud services are pay-as-you-go, so the start-up avoids the large upfront cost of buying and maintaining its own servers (1), freeing cash for other priorities while still being able to scale resources up instantly as the business grows (1).' }
      ],
      nine: {
        scenario: 'A small but growing online retailer experiences huge traffic spikes during sales events but quiet periods otherwise. It is deciding whether to move from its own on-premises servers to a public cloud service.',
        q: 'Evaluate the suitability of the retailer moving to a public cloud service.',
        indicative: ['Pros: elasticity for spikes (pay for peak only when needed), cost-effective vs idle owned servers, provider maintains hardware, scalable as it grows, reduced storage limits.','Cons: ongoing/variable bills (complex), internet dependency, less control, GDPR/data-location for customer data, vendor lock-in.','Context: spiky demand strongly favours elasticity.','Conclusion with conditions (security/compliance, reliable connectivity).'],
        model: 'Moving to a public cloud is <strong>well suited</strong> to this retailer because of its <strong>spiky demand</strong>. <strong>Elasticity</strong> lets it automatically scale resources up for sales events and back down afterwards, so it only pays for peak capacity when it actually needs it — far cheaper than buying powerful on-premises servers that sit idle most of the year. The provider also <strong>maintains the hardware</strong>, and the service <strong>scales</strong> easily as the business grows, with generous storage. <br><br>However, there are drawbacks: <strong>pay-as-you-go billing can be complex and variable</strong>, the retailer becomes <strong>dependent on its internet connection</strong> and the provider, has <strong>less direct control</strong>, and must address <strong>GDPR/data-location</strong> concerns for customer data, plus possible <strong>vendor lock-in</strong>. <br><br>On balance, because the defining feature is unpredictable, spiky demand, the cloud\'s elasticity and cost model make it the more suitable choice — owning servers sized for peak would waste money. The move is therefore suitable <em>provided</em> the retailer ensures reliable connectivity and chooses a provider that meets data-protection requirements. With those conditions met, the benefits clearly outweigh the drawbacks.'
      }
    }
  },
  /* 7.6 Resilience */
  {
    id: 'co7-6', code: '7.6', title: 'Resilient Digital Environments',
    learn: `
      <h2>Benefits of resilient environments</h2>
      <p>Resilience protects against data loss (disasters, failures, error, malpractice, cyberattacks) and enables recovery. Benefits: data stays secure (encryption, access control, updates), monitoring gives faster threat response, demonstrates trust/reputation to customers, and reduces downtime &amp; recovery time. It has a direct cost but acts like insurance.</p>
      <h2>Improving resilience</h2>
      <ul class="tight">
        <li><strong>Software updates/upgrades</strong> &amp; <strong>hardware replacement</strong> (rolling replacement; secure disposal/wiping).</li>
        <li><strong>Data &amp; system redundancy</strong> — two power supplies, UPS, two network cards, <strong>RAID</strong> (hot-swappable drives), data mirroring across locations, multiple servers.</li>
        <li><strong>Device hardening</strong> — updates, disable unused services/ports, encryption, unique logins, host antivirus, configured firewalls.</li>
        <li><strong>Backups</strong> — on-site copy, portable drive (off-site), tape (LTO), cloud/off-site. <strong>Recovery procedures</strong> must be tested.</li>
        <li><strong>Backup sites</strong> — <strong>hot</strong> (runs in parallel, instant), <strong>warm</strong> (facilities ready, some work to restore), <strong>cold</strong> (basic, set up after a disaster).</li>
        <li><strong>Standard operating procedures &amp; staff training</strong> — least privilege, MFA, logging, disaster-recovery practice.</li>
      </ul>`,
    like12: `
      <p>🛟 <strong>Resilience</strong> = making sure the system survives disasters and bounces back fast — like having a spare key, a backup phone charger and a fire escape plan.</p>
      <p>Ways to do it:</p>
      <ul class="tight">
        <li><strong>Redundancy</strong> — spare parts ready: two power supplies, <strong>RAID</strong> (extra hard drives so if one dies you swap it without switching off), backup network cards.</li>
        <li><strong>Backups</strong> — extra copies of your data kept somewhere safe (and ideally off-site, in case the building burns down). Test that you can actually restore them!</li>
        <li><strong>Device hardening</strong> — locking each device down (updates, encryption, turn off stuff you don't use, firewall on).</li>
        <li><strong>Backup sites</strong> — a spare building: <strong>hot</strong> (already running, instant), <strong>warm</strong> (nearly ready), <strong>cold</strong> (empty, takes time).</li>
      </ul>`,
    flashcards: [
      { front: 'Resilience', back: 'Designing systems/procedures to protect against data loss and recover quickly from failures or attacks.', k12: 'Making sure the system survives disasters and bounces back fast.' },
      { front: 'RAID', back: 'Redundant Array of Independent Disks — stores data across multiple drives for redundancy/performance; hot-swappable.', k12: 'Extra hard drives working together so if one dies you swap it without losing data.' },
      { front: 'Redundancy', back: 'Having spare/duplicate components (power supplies, UPS, network cards, mirrored drives) so the system keeps running if one fails.', k12: 'Spare parts ready to go so one breaking doesn\'t stop everything.' },
      { front: 'Device hardening', back: 'Securing a device by updating it, disabling unused services/ports, encrypting data, unique logins, antivirus and configured firewalls.', k12: 'Locking a device down tight so hackers can\'t get in easily.' },
      { front: 'Backup types', back: 'Full (everything), incremental (changes since last backup), differential (changes since last full backup); store some off-site.', k12: 'Different ways to save copies of your data so you never lose it.' },
      { front: 'Hot vs cold backup site', back: 'Hot = runs in parallel, takes over instantly; cold = basic location set up after a disaster (days/weeks). Warm = in between.', k12: 'Hot = a spare building already running; cold = an empty room you set up after disaster.' },
      { front: 'UPS', back: 'Uninterruptible Power Supply — battery that keeps a server running long enough to shut down safely if power fails.', k12: 'A backup battery that keeps the server alive long enough to save everything if the power cuts out.' }
    ],
    quiz: [
      { q: 'RAID mainly provides…', opts: ['Faster Wi-Fi','Redundancy against disk failure','More CPU cores','Bigger screens'], a: 1, marks: 1, fb: 'RAID protects against single-disk failure.' },
      { q: 'A UPS is used to…', opts: ['Encrypt email','Keep a server running long enough to shut down safely on power loss','Route packets','Scan documents'], a: 1, marks: 1, fb: 'Battery backup for safe shutdown.' },
      { q: 'Which is a device-hardening measure?', opts: ['Disable unused ports/services','Increase screen size','Add more cables','Lower the password strength'], a: 0, marks: 1, fb: 'Disabling unused services/ports reduces the attack surface.' },
      { q: 'A hot backup site…', opts: ['Takes weeks to set up','Runs in parallel and can take over instantly','Has no equipment','Is just a tape'], a: 1, marks: 1, fb: 'Hot site = always running, instant failover.' },
      { q: 'Storing backups off-site protects against…', opts: ['Slow Wi-Fi','Fire/theft destroying both data and backups','High latency','Low bandwidth'], a: 1, marks: 1, fb: 'Off-site copies survive a local disaster.' },
      { q: 'An incremental backup saves…', opts: ['Everything every time','Only changes since the last backup','Nothing','Only the OS'], a: 1, marks: 1, fb: 'Incremental = changes since last backup.' },
      { q: 'Why should recovery procedures be tested?', opts: ['To use more storage','To ensure data can actually be restored quickly','To slow the network','To delete backups'], a: 1, marks: 2, fb: 'Untested backups may fail when you really need them.' },
      { q: 'Mirroring data to another location means…', opts: ['Data is saved simultaneously to a second drive','Data is deleted','The CPU runs faster','Wi-Fi improves'], a: 0, marks: 1, fb: 'A mirror copy is written at the same time for redundancy.' }
    ],
    practice: [
      { q: 'State two ways an organisation can build redundancy into its servers.', marks: 2, cmd: 'State', points: ['1 mark each (max 2): two power supplies; UPS; two network cards; RAID drives; data mirroring; multiple servers.'], model: 'Two ways are using <strong>RAID hard drives</strong> and fitting <strong>two power supplies</strong> so the server keeps running if one fails.' },
      { q: 'Explain one benefit of device hardening as a threat-mitigation technique.', marks: 2, cmd: 'Explain', points: ['1 + 1.','Reduces the attack surface (1) which makes it more difficult for an attacker to gain unauthorised access (1).'], model: 'Device hardening <strong>reduces the attack surface</strong> (1): by disabling unused services and ports, encrypting data and configuring firewalls, there are fewer ways in, which makes it much more difficult for an attacker to gain unauthorised access (1).' }
    ],
    test: {
      mcq: [
        { q: 'A "cold" backup site…', opts: ['Runs in parallel instantly','Is basic and takes days/weeks to set up','Is a RAID array','Is a firewall'], a: 1, marks: 1, fb: 'Cold sites need setting up after a disaster.' },
        { q: 'Hot-swappable RAID drives can be replaced…', opts: ['Only when powered off','While the server is still running','Never','Only by the cloud'], a: 1, marks: 1, fb: 'Hot-swap = replace while running.' },
        { q: 'A differential backup saves changes since the last…', opts: ['Backup of any kind','Full backup','Reboot','Power cut'], a: 1, marks: 1, fb: 'Differential = changes since the last full backup.' },
        { q: 'Encrypting data on a device is part of…', opts: ['Device hardening','Bandwidth','Latency','Aggregation'], a: 0, marks: 1, fb: 'Device hardening.' },
        { q: 'A benefit of good resilience to customers is…', opts: ['More downtime','Increased trust/reputation','Lower security','Slower recovery'], a: 1, marks: 1, fb: 'Demonstrating resilience builds trust.' },
        { q: 'Why is securely wiping old drives before disposal important?', opts: ['To save power','To prevent data leakage','To speed up Wi-Fi','To add RAM'], a: 1, marks: 2, fb: 'Prevents recovery of sensitive data from disposed hardware.' }
      ],
      structured: [
        { q: 'Identify two methods of improving resilience in a digital environment.', marks: 2, cmd: 'Identify', points: ['1 mark each (max 2): software updates; hardware replacement; redundancy/RAID; device hardening; backups; backup sites; staff training.'], model: 'Two methods are using <strong>RAID for redundancy</strong> and taking <strong>regular off-site backups</strong>.' },
        { q: 'Explain one benefit to an organisation of having a tested backup and recovery procedure.', marks: 3, cmd: 'Explain with additional justification', points: ['1 + 1 + 1.','Fast recovery/reduced downtime (1) — a tested procedure means data can be restored quickly after a failure (1), so the business resumes trading sooner and avoids lost sales and reputational damage (1).'], model: 'A tested backup and recovery procedure gives <strong>fast recovery and reduced downtime</strong> (1): because the recovery has been practised, data can be restored quickly and reliably after a failure or attack (1), so the organisation resumes trading sooner, avoiding lost sales and the reputational damage that prolonged downtime would cause (1).' }
      ],
      nine: {
        scenario: 'A company with a small two-person IT team and a limited budget currently backs up to several external hard drives kept in the IT office. It has suffered slow backups and a drive failure causing partial data loss. It is considering switching to a RAID system.',
        q: 'Evaluate the suitability of the company using a RAID system for its backups.',
        indicative: ['Benefits: redundancy (RAID 1 mirrors so a single drive failure loses nothing), faster backup/restore, addresses the recent drive-failure issue.','Drawbacks: more expensive than external drives (limited budget), needs expertise to configure/maintain (only 2 staff), RAID alone doesn\'t protect against fire/theft/ransomware.','Mitigation: combine RAID with off-site/cloud backups + staff training.','Conclusion: suitable but should be part of a wider plan.'],
        model: 'A RAID system is <strong>suitable</strong> for this company and directly addresses its recent problems. RAID stores data across multiple drives, providing <strong>redundancy</strong>: for example, RAID 1 mirrors data across two drives, so if one drive fails the company still keeps all its files — exactly the failure that recently caused partial data loss. RAID can also improve <strong>backup and restore speeds</strong>, reducing the slow-backup issue and downtime. <br><br>However, there are drawbacks given the company\'s context. RAID is <strong>more expensive</strong> than external drives, which matters on a limited budget, and it requires <strong>technical expertise</strong> to configure and maintain — challenging for a two-person team. Crucially, <strong>RAID alone does not protect against fire, theft or ransomware</strong>, since all the drives are in the same place. <br><br>Therefore RAID should not be the whole solution: it ought to be <strong>combined with off-site or cloud backups</strong> and basic staff training so recovery is possible even if the building or system is lost. <br><br>Overall, switching to RAID is suitable because it increases reliability and reduces the risk of losing data to a single-drive failure, but to be a genuinely resilient backup strategy it must be paired with off-site backups rather than relied on by itself.'
      }
    }
  }
  ],
  nutshell: `
    <h2>CO7 — Everything in a Nutshell</h2>
    <h3>7.1 Hardware</h3><p>Desktop/laptop/mobile/server/embedded. CPU (clock speed + cores + cache), RAM (volatile) vs ROM (firmware), secondary storage. Input vs output devices.</p>
    <h3>7.2 Software</h3><p>OS (manages hardware/memory/files/users/UI), utilities (antivirus, backup), dev tools (IDE, compiler/interpreter, debugger, version control), applications (local or SaaS).</p>
    <h3>7.3 Networks</h3><p>PAN/LAN/MAN/WAN/Internet/VPN. Wired (fast/secure) vs wireless (convenient). Topologies: star (single point of failure), mesh (redundant), tree. Router (to Internet) vs switch (within LAN). OSI 7 layers; TCP/IP 4 layers. Packets (header/payload/footer, CRC). Protocols: HTTP(S), SMTP/POP3/IMAP, FTP/SFTP, DHCP, DNS. Bandwidth (capacity) vs latency (delay).</p>
    <h3>7.4 Virtual environments</h3><p>VM + hypervisor (Type 1/2). Isolation, managed execution, resource sharing, aggregation, emulation, portability. Cheaper/easier vs high initial cost + central risk.</p>
    <h3>7.5 Cloud</h3><p>Public vs private. Elasticity, portability, cost-effectiveness. IaaS/PaaS/SaaS (provider manages more going down the list).</p>
    <h3>7.6 Resilience</h3><p>Redundancy (RAID, two PSUs, UPS, mirroring), device hardening, backups (full/incremental/differential, off-site), hot/warm/cold sites, tested recovery + training.</p>
    <div class="callout tip">Exam hooks: firewall/device hardening, mail protocols, RAID for backups, virtual vs physical machines, star topology, bandwidth vs latency.</div>`
});

indexKB('CO7','Digital Environments','7.1 Hardware','Physical computers include desktops, laptops, mobile devices, servers (powerful, shared, with redundant parts and RAID) and embedded devices (inside cars, smartwatches). The CPU executes instructions; its speed depends on clock speed in Hz and the number of cores, and it uses cache. RAM is volatile working memory; ROM is non-volatile and holds BIOS/UEFI firmware. Secondary storage is cheap non-volatile long-term storage. Input devices send data in; output devices present data out.');
indexKB('CO7','Digital Environments','7.2 Software','The operating system manages hardware, memory, processes, files, users and the user interface. Utility software includes antivirus, backup, defragmentation, compression and encryption. Code development tools include IDEs, compilers and interpreters, debuggers, version control and emulators or containers like Docker. Application software includes word processors, spreadsheets, browsers and CAD, run locally or as SaaS.');
indexKB('CO7','Digital Environments','7.3 Networks','Network types: PAN, LAN, MAN, WAN, the Internet (largest WAN) and VPN (a secure encrypted tunnel). Wired connections (Ethernet, fibre, USB) are fast, reliable and secure; wireless (Wi-Fi, Bluetooth, NFC, 5G) is convenient but slower and less secure. Topologies: star (central switch, single point of failure), mesh (redundant) and tree. A router connects a network to the Internet; a switch connects devices within a LAN. The OSI model has seven layers and TCP/IP has four. Data is sent in packets with a header, payload and footer; CRC and checksums detect errors. Protocols include HTTP, HTTPS, SMTP, POP3, IMAP, FTP, SFTP, DHCP and DNS. Bandwidth is maximum data per second; latency is the delay before data arrives.');
indexKB('CO7','Digital Environments','7.4 Virtual environments','A virtual machine is a software emulation of a physical computer running its own OS on a host, managed by a hypervisor (Type 1 bare-metal or Type 2 hosted). Key features are isolation (a compromised or crashed VM does not affect others or the host), managed execution, sharing resources, aggregation, emulation and portability. Benefits include lower hardware cost, easy management and scaling, better disaster recovery via snapshots and easy testing. Drawbacks include high initial cost, needing technical expertise, performance overhead, and a central risk if the hypervisor is breached.');
indexKB('CO7','Digital Environments','7.5 Cloud environments','A public cloud is run by a third-party provider with shared resources and pay-as-you-go pricing; a private cloud is dedicated to one organisation with more control over security and compliance. Benefits include portability, elasticity (auto-scaling with demand), reduced storage limits and cost-effectiveness. Delivery models: IaaS (provider supplies infrastructure, customer manages OS upwards), PaaS (adds OS, middleware and runtime), and SaaS (provider runs the whole application, customer manages only accounts and data).');
indexKB('CO7','Digital Environments','7.6 Resilient digital environments','Resilience protects against data loss and enables fast recovery. Methods include software and hardware updates, data and system redundancy (RAID, two power supplies, UPS, two network cards, data mirroring), device hardening (updates, disabling unused services and ports, encryption, unique logins, antivirus, configured firewalls), backups (full, incremental, differential, stored off-site), and hot, warm or cold backup sites. Recovery procedures must be tested and staff trained, applying least privilege, MFA and logging.');
