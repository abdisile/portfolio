export const profile = {
  name: "Abdi Sileshi",
  fullName: "Abdi Sileshi Worku",
  title: "Full-Stack Software Engineer",
  role: "Full-Stack Engineer",
  company: "ZeroHunger.ai",
  location: "Addis Ababa, Ethiopia",
  email: "abdisileshi123@gmail.com",
  phone: "+251 988 734 632",
  phoneHref: "tel:+251988734632",
  github: "https://github.com/abdisile",
  githubLabel: "github.com/abdisile",
  githubPrevious: "https://github.com/Ketoransile",
  githubPreviousLabel: "github.com/Ketoransile",
  linkedin: "https://www.linkedin.com/in/abdi-sileshi-56710a2a6",
  linkedinLabel: "linkedin.com/in/abdi-sileshi-56710a2a6",
  telegram: "https://t.me/Kehtoran",
  telegramLabel: "t.me/Kehtoran",
  resume:
    "https://drive.google.com/file/d/1vyVSSzdA8AiZHYo01h7nQmyw6aLwD8Dn/view?usp=sharing",
  site: "https://www.abdisileshi.dev",
};

export const highlights = [
  { value: "4+", label: "Years shipping" },
  { value: "15+", label: "Products shipped" },
];

export const projects = [
  {
    title: "SEPMS",
    subtitle: "Startup–investor platform",
    summary:
      "Team lead for five engineers. Connects founders and investors with Gemini summaries, voice narration, and live English/Amharic translation.",
    stack: ["Next.js", "Node.js", "MongoDB", "Gemini"],
    live: "https://smart-entrepreneurial-pitching-matc-alpha.vercel.app/",
    code: "https://github.com/Mafiv/Smart-Entrepreneurial-Pitching-Matching-System",
  },
  {
    title: "Reveal",
    subtitle: "AI conversion analyzer",
    summary:
      "Scores a landing page on copy and UX, then returns concrete fixes in under 10 seconds.",
    stack: ["Next.js", "TypeScript", "OpenAI"],
    live: "https://reveal-analysis.vercel.app/",
    code: "https://github.com/Ketoransile/Reveal",
  },
  {
    title: "Resume Analyzer",
    subtitle: "Resume-to-job scoring",
    summary:
      "Scores how well a resume matches a job description. Scoring lives in its own API, tested on 50+ pairs.",
    stack: ["Next.js", "TypeScript", "MongoDB", "OpenAI"],
    live: "https://elevatcv.vercel.app/",
    code: "https://github.com/Ketoransile/ResumeAnalyzerFrontend",
    extra: {
      label: "API",
      href: "https://github.com/Ketoransile/ResumeAnalyzerBackend",
    },
  },
  {
    title: "Ethio Shop",
    subtitle: "Ecommerce",
    summary: "Storefront with product browsing and Stripe checkout.",
    stack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    live: "https://ethio-shop.vercel.app/",
    code: "https://github.com/Ketoransile/EthioShop",
  },
  {
    title: "Drivezy",
    subtitle: "Car rental",
    summary: "Browse, filter, and book vehicles through a React app and Express API.",
    stack: ["React", "Express", "MongoDB"],
    live: "https://drivezy-car-rental.vercel.app/",
    code: "https://github.com/Ketoransile/CarRental",
  },
  {
    title: "NextJobs",
    subtitle: "Job board",
    summary: "Search roles by category and location, then apply.",
    stack: ["Next.js", "Express", "MongoDB"],
    live: "https://job-portal-omega-flame.vercel.app/",
    code: "https://github.com/Ketoransile/JobPortal",
  },
  {
    title: "Bet",
    subtitle: "Real estate",
    summary: "Property listings, search, and a way to reach agents.",
    stack: ["React", "Express", "MongoDB"],
    live: "https://bet-real-estate.vercel.app/",
    code: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    title: "Product",
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Vite"],
  },
  {
    title: "Backend & data",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "OpenAI",
      "Gemini",
    ],
  },
  {
    title: "Delivery",
    items: ["Git", "GitHub", "Vercel", "Netlify", "Stripe", "Figma"],
  },
];

export const experience = [
  {
    role: "Full-Stack Engineer",
    org: "ZeroHunger.ai",
    place: "Remote · Part-time",
    dates: "Sep 2026 – Present",
    points: [
      "Ship features from database schema and API through to the screen, including operator onboarding.",
      "Review AI-written code before it deploys, and keep personal data out of blockchain integrations.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Freelance for local businesses",
    place: "Addis Ababa",
    dates: "2022 – Present",
    points: [
      "Design, build, and deploy custom web apps for local business owners, from requirements through delivery.",
    ],
  },
  {
    role: "Software Engineer",
    org: "AfterQuery",
    place: "Remote · Part-time",
    dates: "Jun 2026 – Aug 2026",
    points: [
      "Wrote SWE-bench-style coding tasks and benchmarks for a Y Combinator-backed AI lab.",
      "Reviewed unfamiliar code and added tests before the work was accepted.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Information Network Security Agency",
    place: "Addis Ababa · On-site",
    dates: "Jul 2025 – Sep 2025",
    points: [
      "Built React dashboards for an internal inventory system tracking 10,000+ assets.",
      "Cut redundant API calls by changing how the screens fetched data.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Ministry of Innovation and Technology",
    place: "Addis Ababa · On-site",
    dates: "Jul 2024 – Sep 2024",
    points: [
      "Built a MERN real estate platform with listings, search, and agent dashboards.",
      "Improved database query performance by 20%.",
    ],
  },
];
