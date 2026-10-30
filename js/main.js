/* =========================================================================
   EDIT EVERYTHING HERE
   All text, photos, screenshots, projects and links live in this one object.
   You never need to touch the design code below it.

   - To change your photo: put your image in the assets folder and change
     profile.photo (for example 'assets/me.jpg').
   - To change screenshots: put your images in assets/projects/<project>/
     and change the file names in "screenshots" and in each module's "image".
     PNG, JPG, WEBP and SVG all work.
   - Empty links ('') hide their button.
   - Module icons you can use: user, users, shield, briefcase, folder, hammer,
     star, wallet, chat, bell, chart, dashboard, settings, book, calendar,
     clipboard, school, map, mic, headphones, repeat, globe, wifi, layers, target
   ========================================================================= */
const SITE = {
  profile: {
    name: 'Abdallah',
    location: 'Based in Somaliland',
    photo: 'assets/profile.jpg', // <-- CHANGE: your photo
    typing: ['WordPress Developer', 'Vibe Coder', 'AWS Cloud Computing (Coming Soon)'],
    intro: 'A developer and entrepreneur who builds real software for real problems.',
    about:
      'I am a developer and entrepreneur from Somaliland. I build WordPress plugins and websites, and I use AI-assisted ' +
      '"vibe coding" to ship full products fast: from a hiring and payments platform to a language-learning app. ' +
      'Right now I am learning AWS cloud computing so my products can scale.',
    skills: [
      { name: 'WordPress' },
      { name: 'PHP' },
      { name: 'MySQL' },
      { name: 'JavaScript' },
      { name: 'Vibe Coding' },
      { name: 'AWS (Learning)', learning: true },
    ],
  },

  contact: {
    whatsapp: '', // <-- ADD: your WhatsApp number with country code, digits only, e.g. '252634123456'
    email: '', // <-- ADD: your email, e.g. 'abdallah@example.com'
    github: 'https://github.com/ABDULLAAHI-DEVELOPER',
  },

  roadmap: [
    { label: 'Done', title: 'WordPress Developer', text: 'Building websites and custom plugins, including a full School CMS plugin.', state: 'done' },
    { label: 'Done', title: 'Vibe Coder', text: 'Shipping complete products with AI-assisted development: UNISCO and Sema Kenya.', state: 'done' },
    { label: 'In progress', title: 'AWS Cloud Computing', text: 'Learning cloud architecture, deployment and scaling on AWS. Coming soon.', state: 'now' },
    { label: 'Future', title: 'Cloud-native products for Africa', text: 'Scalable SaaS products that solve everyday problems in Somaliland, Somalia and East Africa.', state: 'future' },
  ],

  projects: [
    {
      id: 'unisco',
      name: 'UNISCO',
      short: 'A platform that connects project owners, engineers and verified workers, with staffing and mobile-money payments.',
      description:
        'UNISCO connects project owners, engineers and skilled workers. Owners post projects, positions are staffed with ' +
        'verified workers, and money moves through ZAAD and eDahab mobile money. It has a Flutter mobile app, a React ' +
        'admin portal and a NestJS backend.',
      tech: ['Flutter', 'NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Ant Design', 'AWS S3'],
      github: '', // <-- add a GitHub link if you make the repo public
      demo: '',
      screenshots: [
        'assets/projects/unisco/shot-1.webp', // admin portal dashboard
        'assets/projects/unisco/shot-2.webp', // mobile app: log in, jobs, verified profile
        'assets/projects/unisco/shot-3.webp', // portal: users
        'assets/projects/unisco/shot-4.webp', // portal: projects
        'assets/projects/unisco/shot-5.webp', // portal: verification queue
        'assets/projects/unisco/shot-6.webp', // mobile app: wallet, company profile, disputes (Somali)
        'assets/projects/unisco/shot-7.webp', // portal: withdrawals
      ],
      modules: [
        { icon: 'users', name: 'Accounts and Roles', text: 'Sign-up with phone or email. Separate roles for owners, engineers, workers, companies and admins.', image: 'assets/projects/unisco/module-1.webp' },
        { icon: 'user', name: 'Worker Profiles', text: 'Workers and companies show their photo, business details and verification status.', image: 'assets/projects/unisco/module-2.webp' },
        { icon: 'shield', name: 'Identity Verification', text: 'Admins check documents in a verification queue and approve trusted workers.', image: 'assets/projects/unisco/module-3.webp' },
        { icon: 'folder', name: 'Projects and Milestones', text: 'Engineers post projects split into milestones, with clear pay per worker type.', image: 'assets/projects/unisco/module-4.webp' },
        { icon: 'briefcase', name: 'Staffing and Hiring', text: 'Projects list the skills they need, and verified workers apply to fill the positions.', image: 'assets/projects/unisco/module-5.webp' },
        { icon: 'wallet', name: 'Mobile Money Payments', text: 'Owners fund milestones and workers withdraw to ZAAD or eDahab, with admin approval.', image: 'assets/projects/unisco/module-6.webp' },
        { icon: 'shield', name: 'Disputes and Holds', text: 'Problems with a milestone are raised as disputes, and the payment is held until resolved.', image: 'assets/projects/unisco/module-7.webp' },
        { icon: 'bell', name: 'Notifications and Integrations', text: 'WhatsApp sign-up codes, email, push notifications, file storage and payment providers.', image: 'assets/projects/unisco/module-8.webp' },
        { icon: 'dashboard', name: 'Admin Dashboard', text: 'One screen showing what needs attention: withdrawals, verifications, disputes and more.', image: 'assets/projects/unisco/module-9.webp' },
        { icon: 'hammer', name: 'Worker Types and Rates', text: 'Admins set worker types (like Kuuli and Wastaad) and their standard daily rates.', image: 'assets/projects/unisco/module-10.webp' },
      ],
    },
    {
      id: 'school-cms',
      name: 'School CMS Plugin',
      short: 'A WordPress plugin that runs a whole school: students, teachers, classes, results, fees and more.',
      description:
        'SchoolCore CMS is a complete school management system built as a WordPress plugin. Administrators, teachers, ' +
        'parents, students and cashiers each get their own dashboard to manage classes, timetables, attendance, ' +
        'results, assignments, announcements, reports and school fees.',
      tech: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      github: '',
      demo: '',
      screenshots: [
        'assets/projects/school-cms/shot-3.webp', // classes
        'assets/projects/school-cms/shot-2.webp', // students
        'assets/projects/school-cms/shot-4.webp', // timetable
        'assets/projects/school-cms/shot-5.webp', // finance
        'assets/projects/school-cms/shot-6.webp', // teachers
        'assets/projects/school-cms/shot-1.webp', // dashboard overview
      ],
      modules: [
        { icon: 'users', name: 'Students', text: 'Register students, search them and import many at once from a CSV file.', image: 'assets/projects/school-cms/module-1.webp' },
        { icon: 'user', name: 'Teachers', text: 'Teacher accounts with subject assignments, password resets and suspension.', image: 'assets/projects/school-cms/module-2.webp' },
        { icon: 'layers', name: 'Classes', text: 'Every class with its students, subjects and academic year at a glance.', image: 'assets/projects/school-cms/module-3.webp' },
        { icon: 'book', name: 'Subjects', text: 'Set the subjects taught in each grade and copy them to other grades.', image: 'assets/projects/school-cms/module-4.webp' },
        { icon: 'calendar', name: 'Timetable', text: 'School sessions and a weekly timetable for every class and teacher.', image: 'assets/projects/school-cms/module-5.webp' },
        { icon: 'clipboard', name: 'Attendance', text: 'Daily attendance by class and date, with a full attendance history.', image: 'assets/projects/school-cms/module-6.webp' },
        { icon: 'target', name: 'Results', text: 'Upload class results and view or correct them by class and exam.', image: 'assets/projects/school-cms/module-7.webp' },
        { icon: 'chart', name: 'Performance', text: 'Compare performance by year, grade and class.', image: 'assets/projects/school-cms/module-8.webp' },
        { icon: 'folder', name: 'Assignments', text: 'Teachers post assignments and track them per class.', image: 'assets/projects/school-cms/module-9.webp' },
        { icon: 'bell', name: 'Announcements', text: 'Publish announcements to students, parents and staff.', image: 'assets/projects/school-cms/module-10.webp' },
        { icon: 'chart', name: 'Reports', text: 'Run reports such as attendance summaries for any date range.', image: 'assets/projects/school-cms/module-11.webp' },
        { icon: 'wallet', name: 'Finance', text: 'Monthly fees, payments, unpaid balances and a class payment overview for cashiers.', image: 'assets/projects/school-cms/module-12.webp' },
        { icon: 'settings', name: 'Branding and Settings', text: 'School name, colours and logo, plus system settings.', image: 'assets/projects/school-cms/module-13.webp' },
      ],
    },
    {
      id: 'sema-kenya',
      name: 'Sema Kenya Platform',
      short: 'A Duolingo-style app for learning Kenyan Swahili, with English and Somali explanations and recorded audio.',
      description:
        'Sema Kenya teaches Kenyan Swahili the way Kenyans speak it, from beginner (A1) to upper intermediate (B2): 32 units, ' +
        '208 lessons and 1,176 words and phrases, with explanations in English or Somali and over 3,000 recorded audio clips.',
      tech: ['React', 'TypeScript', 'Vite', 'PWA', 'Python (audio)', 'GitHub Actions'],
      github: 'https://github.com/ABDULLAAHI-DEVELOPER/sema-kenya',
      demo: 'https://abdullaahi-developer.github.io/sema-kenya/',
      screenshots: [
        'assets/projects/sema-kenya/shot-1.webp', // welcome, learning path, new word
        'assets/projects/sema-kenya/shot-2.webp', // exercise, conversation, story
        'assets/projects/sema-kenya/shot-3.webp', // unit guide, Somali interface, settings
      ],
      modules: [
        { icon: 'map', name: 'Learning Path', text: '32 units in four levels, A1 to B2. Lessons unlock one after another.', image: 'assets/projects/sema-kenya/module-1.webp' },
        { icon: 'target', name: 'Lessons and Exercises', text: 'Word cards, multiple choice, matching, sentence building, typing and fill-the-gap.', image: 'assets/projects/sema-kenya/module-2.webp' },
        { icon: 'headphones', name: 'Recorded Kenyan Audio', text: 'Every word and sentence has a speaker button, with a man and a woman Kenyan voice and a slow mode.', image: 'assets/projects/sema-kenya/module-3.webp' },
        { icon: 'book', name: 'Stories', text: 'Short Kenyan stories, read aloud line by line, with questions after.', image: 'assets/projects/sema-kenya/module-4.webp' },
        { icon: 'chat', name: 'Conversations', text: 'Real-life Kenyan dialogues with a different voice for each speaker.', image: 'assets/projects/sema-kenya/module-5.webp' },
        { icon: 'star', name: 'Goals, XP and Streaks', text: 'Learners pick goals like travel or street Sheng, and earn XP and daily streaks.', image: 'assets/projects/sema-kenya/module-6.webp' },
        { icon: 'globe', name: 'English and Somali', text: 'The whole app works in English or Somali, with Kenyan, Sheng and coastal labels on every word.', image: 'assets/projects/sema-kenya/module-7.webp' },
        { icon: 'school', name: 'Unit Guides and Offline', text: 'Each unit has a guide with culture and grammar tips, and the app keeps working offline.', image: 'assets/projects/sema-kenya/module-8.webp' },
      ],
    },
  ],
};

/* =========================================================================
   DESIGN AND ANIMATION CODE (no need to edit below this line)
   ========================================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Small line icons (24x24)
const ICON_PATHS = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.8c2.4.6 4 2.3 4 5.2"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  hammer: '<path d="m14 6 4 4M3 21l9-9M12 8l3-3 4 4-3 3z"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  chat: '<path d="M4 5h16v11H8l-4 4z"/>',
  bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="5" rx="1.5"/><rect x="13" y="10" width="8" height="11" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3"/><path d="M20 4v14h-7"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 12l2 2 4-4"/>',
  school: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
  repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  whatsapp: '<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.4-1.9-1.3-2.3-2.3l1-1-1-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
};
const icon = (name, size = 22) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ICON_PATHS.layers}</svg>`;

/* ---------- Fill the page from SITE ---------- */
function renderPage() {
  const p = SITE.profile;
  $('#hero-name').textContent = p.name;
  $('#hero-location').textContent = p.location;
  $('#hero-intro').textContent = p.intro;
  $('#hero-photo').src = p.photo;
  $('#hero-photo').alt = `Photo of ${p.name}`;
  $('#about-text').textContent = p.about;
  $('#intro-letter').textContent = p.name.charAt(0);
  $('#logo').innerHTML = `${esc(p.name.charAt(0))}<span>.</span>`;
  $('#footer-name').textContent = p.name;
  $('#year').textContent = new Date().getFullYear();
  $('#skills').innerHTML = p.skills.map((s) => `<span class="chip ${s.learning ? 'learning' : ''}">${esc(s.name)}</span>`).join('');

  $('#project-grid').innerHTML = SITE.projects
    .map(
      (pr, i) => `
      <button class="glass project-card reveal" data-project="${esc(pr.id)}" style="transition-delay:${i * 90}ms" aria-label="Open ${esc(pr.name)} details">
        <div class="project-cover"><img src="${esc(pr.screenshots[0])}" alt="${esc(pr.name)} screenshot" loading="lazy" decoding="async" /></div>
        <div class="project-body">
          <h3>${esc(pr.name)}</h3>
          <p>${esc(pr.short)}</p>
          <div class="tags">${pr.tech.slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <div class="project-open">View details &rarr;</div>
        </div>
      </button>`,
    )
    .join('');

  $('#timeline').innerHTML = SITE.roadmap
    .map(
      (r) => `
      <li class="tl-item ${esc(r.state)} reveal">
        <span class="tl-dot"></span>
        <div class="glass tl-card">
          <span class="tl-label">${esc(r.label)}</span>
          <h3>${esc(r.title)}</h3>
          <p>${esc(r.text)}</p>
        </div>
      </li>`,
    )
    .join('');

  const c = SITE.contact;
  const links = [
    c.whatsapp && { href: `https://wa.me/${c.whatsapp}`, icon: 'whatsapp', title: 'WhatsApp', sub: `+${c.whatsapp}` },
    c.email && { href: `mailto:${c.email}`, icon: 'mail', title: 'Email', sub: c.email },
    c.github && { href: c.github, icon: 'github', title: 'GitHub', sub: c.github.replace('https://', '') },
  ].filter(Boolean);
  $('#contact-links').innerHTML = links
    .map(
      (l) => `
      <a class="glass contact-link" href="${esc(l.href)}" target="_blank" rel="noopener">
        <span class="icon">${icon(l.icon, 24)}</span>
        <span><strong>${esc(l.title)}</strong><small>${esc(l.sub)}</small></span>
      </a>`,
    )
    .join('');
}

/* ---------- Typing and deleting title ---------- */
function startTyping() {
  const el = $('#typing');
  const words = SITE.profile.typing;
  if (reduceMotion) return void (el.textContent = words[0]);
  let w = 0, i = 0, deleting = false;
  const tick = () => {
    const word = words[w];
    i += deleting ? -1 : 1;
    el.textContent = word.slice(0, i);
    let delay = deleting ? 40 : 85;
    if (!deleting && i === word.length) { deleting = true; delay = 1600; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
    setTimeout(tick, delay);
  };
  tick();
}

/* ---------- Fade and slide in on scroll ---------- */
function startReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

/* ---------- Sticky navbar, active link and mobile menu ---------- */
function startNav() {
  const nav = $('#nav');
  const links = [...document.querySelectorAll('#nav-links a')];
  const menuBtn = $('#menu-btn');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    let current = '';
    for (const a of links) {
      const sec = document.querySelector(a.getAttribute('href'));
      if (sec && sec.getBoundingClientRect().top < window.innerHeight * 0.4) current = a.getAttribute('href');
    }
    links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === current));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(open));
    $('#nav-links').classList.toggle('open', open);
  });
  links.forEach((a) => a.addEventListener('click', () => { menuBtn.setAttribute('aria-expanded', 'false'); $('#nav-links').classList.remove('open'); }));
}

/* ---------- Floating particles (background) ---------- */
function startParticles() {
  if (reduceMotion) return;
  const cv = $('#particles');
  const ctx = cv.getContext('2d');
  let w, h, parts;
  const resize = () => {
    w = cv.width = window.innerWidth * devicePixelRatio;
    h = cv.height = window.innerHeight * devicePixelRatio;
    const n = Math.min(70, Math.floor(window.innerWidth / 18));
    parts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.6 + 0.6 }));
  };
  resize();
  window.addEventListener('resize', resize);
  const link = 120 * devicePixelRatio;
  const draw = () => {
    if (!document.hidden) {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(140, 220, 255, 0.55)';
        ctx.fill();
      }
      for (let i = 0; i < parts.length; i++)
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y, d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(120, 160, 255, ${0.12 * (1 - d / link)})`;
            ctx.beginPath(); ctx.moveTo(parts[i].x, parts[i].y); ctx.lineTo(parts[j].x, parts[j].y); ctx.stroke();
          }
        }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

/* ---------- Glowing cursor trail (mouse only) ---------- */
function startCursorTrail() {
  if (reduceMotion || !finePointer) return;
  const cv = $('#cursor-trail');
  const ctx = cv.getContext('2d');
  const pts = [];
  const resize = () => { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; };
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => pts.push({ x: e.clientX * devicePixelRatio, y: e.clientY * devicePixelRatio, life: 1 }), { passive: true });
  const draw = () => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (let i = pts.length - 1; i >= 0; i--) {
      const p = pts[i];
      p.life -= 0.035;
      if (p.life <= 0) { pts.splice(i, 1); continue; }
      const r = 10 * p.life * devicePixelRatio;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      g.addColorStop(0, `rgba(34, 211, 238, ${0.55 * p.life})`);
      g.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  };
  draw();
}

/* ---------- 3D tilt and mouse-follow glow on project cards ---------- */
function startTilt() {
  if (reduceMotion || !finePointer) return;
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      card.style.transform = `rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 12}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => (card.style.transform = ''));
  });
}

/* ---------- Magnetic buttons ---------- */
function startMagnetic(root = document) {
  if (reduceMotion || !finePointer) return;
  root.querySelectorAll('.magnetic').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener('mouseleave', () => (b.style.transform = ''));
  });
}

/* ---------- Project detail modal, gallery and zoom ---------- */
const modal = $('#modal');
const panel = $('#modal-panel');
let gallery = { shots: [], i: 0 };
let lastFocus = null;

function openProject(id, push = true) {
  const pr = SITE.projects.find((p) => p.id === id);
  if (!pr) return;
  lastFocus = document.activeElement;
  gallery = { shots: pr.screenshots, i: 0 };
  const btn = (href, label, primary) => (href ? `<a class="btn ${primary ? 'btn-primary' : 'btn-ghost'} btn-small magnetic" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>` : '');
  panel.innerHTML = `
    <div class="modal-top">
      <button class="btn btn-ghost btn-small magnetic" data-close>&larr; Back to Projects</button>
    </div>
    <div class="modal-head">
      <h2 id="modal-title" class="name-gradient">${esc(pr.name)}</h2>
      <p>${esc(pr.description)}</p>
      <div class="tags">${pr.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
    </div>
    <div class="modal-actions" style="margin-top:1.2rem">
      ${btn(pr.demo, 'Live Demo', true)}${btn(pr.github, `${icon('github', 18)} View on GitHub`, !pr.demo)}
    </div>
    <h3><span>Screenshots</span></h3>
    <div class="gallery-main">
      <img id="gal-img" src="${esc(pr.screenshots[0])}" alt="${esc(pr.name)} screenshot 1" />
      <button class="gal-btn gal-prev" aria-label="Previous screenshot">&#8249;</button>
      <button class="gal-btn gal-next" aria-label="Next screenshot">&#8250;</button>
      <span class="gal-count" id="gal-count">1 / ${pr.screenshots.length}</span>
    </div>
    <div class="thumbs" id="thumbs">
      ${pr.screenshots.map((s, i) => `<button class="${i === 0 ? 'active' : ''}" data-shot="${i}" aria-label="Show screenshot ${i + 1}"><img src="${esc(s)}" alt="" loading="lazy" decoding="async" /></button>`).join('')}
    </div>
    <h3>Modules and <span>Features</span></h3>
    <div class="modules">
      ${pr.modules
        .map(
          (m, i) => `
        <div class="glass module" style="--i:${i}">
          <div>
            <div class="module-icon">${icon(m.icon)}</div>
            <h4>${esc(m.name)}</h4>
            <p>${esc(m.text)}</p>
          </div>
          <img src="${esc(m.image)}" alt="${esc(m.name)} screenshot" loading="lazy" decoding="async" data-zoom />
        </div>`,
        )
        .join('')}
    </div>
    <div class="modal-top" style="margin-top:2rem">
      <button class="btn btn-ghost btn-small magnetic" data-close>&larr; Back to Projects</button>
      <div class="modal-actions" style="margin:0">${btn(pr.demo, 'Live Demo', true)}${btn(pr.github, 'View on GitHub', !pr.demo)}</div>
    </div>`;
  modal.hidden = false;
  document.body.classList.add('locked');
  panel.scrollTop = 0;
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('open')));
  startMagnetic(panel);
  panel.querySelector('[data-close]').focus();
  if (push) history.pushState({ project: id }, '', `#project/${id}`);
}

function closeProject(push = true) {
  if (modal.hidden) return;
  modal.classList.remove('open');
  document.body.classList.remove('locked');
  setTimeout(() => { modal.hidden = true; panel.innerHTML = ''; }, 420);
  if (push) history.pushState(null, '', '#projects');
  lastFocus?.focus();
}

function showShot(i) {
  const n = gallery.shots.length;
  gallery.i = (i + n) % n;
  const img = $('#gal-img');
  img.classList.add('fading');
  setTimeout(() => {
    img.src = gallery.shots[gallery.i];
    img.alt = `Screenshot ${gallery.i + 1}`;
    img.classList.remove('fading');
  }, 180);
  $('#gal-count').textContent = `${gallery.i + 1} / ${n}`;
  document.querySelectorAll('#thumbs button').forEach((b, k) => b.classList.toggle('active', k === gallery.i));
}

function zoom(src, alt) {
  const lb = $('#lightbox');
  $('#lightbox-img').src = src;
  $('#lightbox-img').alt = alt || '';
  lb.hidden = false;
}

function startModal() {
  $('#project-grid').addEventListener('click', (e) => {
    const card = e.target.closest('[data-project]');
    if (card) openProject(card.dataset.project);
  });
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) return closeProject();
    if (e.target.closest('.gal-prev')) return showShot(gallery.i - 1);
    if (e.target.closest('.gal-next')) return showShot(gallery.i + 1);
    const th = e.target.closest('[data-shot]');
    if (th) return showShot(Number(th.dataset.shot));
    if (e.target.id === 'gal-img' || e.target.matches('[data-zoom]')) return zoom(e.target.src, e.target.alt);
  });
  $('#lightbox').addEventListener('click', () => ($('#lightbox').hidden = true));
  document.addEventListener('keydown', (e) => {
    if (!$('#lightbox').hidden) { if (e.key === 'Escape') $('#lightbox').hidden = true; return; }
    if (modal.hidden) return;
    if (e.key === 'Escape') closeProject();
    if (e.key === 'ArrowRight') showShot(gallery.i + 1);
    if (e.key === 'ArrowLeft') showShot(gallery.i - 1);
  });
  // Browser back button closes the project view; a #project/<id> link opens it directly
  window.addEventListener('popstate', () => {
    const m = location.hash.match(/^#project\/(.+)$/);
    if (m) openProject(m[1], false);
    else closeProject(false);
  });
  const m = location.hash.match(/^#project\/(.+)$/);
  if (m) openProject(m[1], false);
}

/* ---------- Contact form: opens WhatsApp or email with the message ---------- */
function startContact() {
  const form = $('#contact-form');
  // Only show the ways of sending that are filled in at the top of this file
  form.querySelector('[value="whatsapp"]').hidden = !SITE.contact.whatsapp;
  form.querySelector('[value="email"]').hidden = !SITE.contact.email;
  if (!SITE.contact.whatsapp && !SITE.contact.email) form.hidden = true;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = String(d.get('name') || '').trim();
    const message = String(d.get('message') || '').trim();
    if (!name || !message) { $('#form-note').textContent = 'Please write your name and a message.'; return; }
    const from = String(d.get('email') || '').trim();
    const text = `Hi ${SITE.profile.name}, I'm ${name}${from ? ` (${from})` : ''}.\n\n${message}`;
    const via = e.submitter?.value === 'email' ? 'email' : 'whatsapp';
    if (via === 'whatsapp') window.open(`https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    else location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(text)}`;
    $('#form-note').textContent = via === 'whatsapp' ? 'Opening WhatsApp...' : 'Opening your email app...';
  });
}

/* ---------- Start ---------- */
renderPage();
startNav();
startReveal();
startTilt();
startMagnetic();
startModal();
startContact();
startParticles();
startCursorTrail();
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#intro').classList.add('done');
    document.body.classList.add('loaded');
    startTyping();
  }, reduceMotion ? 0 : 1100);
});
