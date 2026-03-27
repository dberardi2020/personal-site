export const personal = {
  name: 'Dimitri Berardi',
  initials: 'DB',
  title: 'Backend Software Engineer',
  tagline:
    'Backend software engineer with 5 years shipping production APIs. Building my first game and figuring out the rest as I go.',
  location: 'Ellington, CT',
  email: 'dimitri.berardi.career@gmail.com',
  github: 'https://github.com/dberardi2020',
  linkedin: 'https://linkedin.com/in/dberardiwpi',
  copyright: '2026 Dimitri Berardi',
};

export const about = {
  who: [
    "I'm a backend software engineer based in Ellington, CT with 5 years of experience designing and shipping RESTful APIs in C# and ASP.NET Core. I've worked across the full backend stack — greenfield system design, Elasticsearch-backed architectures, integration testing, and production delivery on small teams.",
    "I studied Computer Science at WPI and have spent my career working on things that actually ship. Outside of my day job, I'm developing my first game in Unity - early steps toward something bigger. I've also been playing piano for over 14 years.",
  ],
  mission: [
    'I believe everyone has something unique to offer. Most people get stuck before they find a way to act on it. With the right mindset and dedication, anything is achievable.',
    "Whether it's through the software I build, the games I'm making, or the people I work with — I want to help others move from where they are to where they want to be.",
  ],
};

export const skills = {
  languages: ['C#', 'SQL', 'TypeScript', 'Python', 'Go', 'Rust', 'Bash', 'PowerShell'],
  frameworks: ['.NET', 'ASP.NET Core', 'Entity Framework Core', 'React', 'Vue', 'xUnit', 'Moq'],
  tools: ['Git', 'Docker', 'Elasticsearch', 'Redis', 'Postman', 'Swagger / OpenAPI', 'Jira', 'Visual Studio', 'VSCode'],
  practices: ['RESTful API Design', 'Unit & Integration Testing', 'CI/CD', 'Agile', 'System Design', 'ADRs'],
};

export const experience = [
  {
    title: 'Software Engineer II',
    company: 'Kahuna Workforce Solutions',
    location: 'Remote',
    period: 'Dec 2024 – Present',
    current: true,
    promotion: 'Promoted from Software Engineer · Dec 2025',
    bullets: [
      'Designed and shipped the full backend API surface for Ladder in C# / ASP.NET Core — from greenfield through first customer launch, as one of three backend engineers.',
      'Implemented the core data layer — Elasticsearch for read performance, SQL as source of truth — using Entity Framework Core across the Ladder data domain.',
      'Designed the integration and unit test suite using xUnit and Moq, leveraging WebApplicationFactory to test against real ES/DB.',
      'Leading backend architecture for a major new feature — driving design reviews and cross-functional alignment across product, QA, and engineering.',
      'Established a documentation practice: feature specs, ADRs, and a shared technical blog.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Building36',
    location: 'Needham, MA (Hybrid)',
    period: 'Apr 2022 – Nov 2024',
    current: false,
    bullets: [
      'Led end-to-end delivery of a templated HTML email generation system — backend rendering layer, frontend templates, design docs, and PM/QA coordination through all milestones.',
      'Built full-stack HVAC monitoring features across backend services, data layer, and ASPX frontend.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Savant Systems, Energy and Lighting',
    location: 'Hyannis, MA (Hybrid)',
    period: 'Jan 2021 – Mar 2022',
    current: false,
    bullets: [
      'Implemented a CAN Bus communication layer in Rust and Go — parsing live device telemetry and enabling bidirectional control of the microgrid controller.',
      'Extended a Go RESTful API to enable full CRUD control over HVAC devices, including SQL-to-JSON serialization for downstream consumption.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Fidelity Investments',
    location: 'Merrimack, NH (Remote)',
    period: 'Jun – Aug 2020',
    current: false,
    bullets: [
      'Integrated a third-party vendor (Axway) to automate file transfers to a PostgreSQL database via FTPS, replacing a manual process.',
    ],
  },
  {
    title: 'Embedded Software Engineer Co-op',
    company: 'Bose Corporation',
    location: 'Framingham, MA (On-Site)',
    period: 'May 2019 – Jan 2020',
    current: false,
    bullets: [
      'Designed unit test infrastructure using Google Test Framework.',
      'Owned codebase migration from SVN to GitHub, updating build configuration across Make and CMake files.',
    ],
  },
];

export const education = {
  school: 'Worcester Polytechnic Institute',
  degree: 'Bachelor of Science, Computer Science',
  graduated: 'Dec 2020',
  gpa: '3.61',
  minors: 'Near-minor in Entrepreneurship and Music',
};

export const gameDev = {
  studio: 'Berardi Studio',
  description:
    "Aspiring indie developer, building my first game in Unity. This is where the engineering instincts meet creative work.",
  games: [
    {
      title: 'Pong',
      status: 'In Progress',
      description:
        'My first Unity project — a single-player Pong game with an AI opponent. More than it sounds: it\'s the foundation for learning game architecture, Unity workflows, and shipping something real.',
    },
  ],
};

export const hobbies = [
  { label: 'Fitness',     icon: '🏋️' },
  { label: 'Skiing',      icon: '⛷️' },
  { label: 'Music',       icon: '🎹' },
  { label: 'Racing',      icon: '🏎️' },
  { label: 'Photography', icon: '📷' },
  { label: 'Travel',      icon: '✈️' },
];
