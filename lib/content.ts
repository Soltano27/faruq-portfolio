import { postBodies } from "./posts";
export const site = {
  name: "Faruq Sosanya",
  fullName: "Faruq Olawale Sosanya",
  /** Set NEXT_PUBLIC_SITE_URL in Vercel to your live domain; used for canonical URLs, sitemap and social cards. */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://faruqsosanya.vercel.app"
  ).replace(/\/$/, ""),
  jobTitle: "Operations & Programme Coordinator",
  tagline: "Operations, programme coordination and founder support",
  /** Local wordmark, so the header no longer depends on the old Kite site. */
  logo: "/images/logo.svg",
  email: "faruqsosanya@gmail.com",
  phone: "+234 915 526 7860",
  linkedin: "https://www.linkedin.com/in/faruq-sosanya",
  github: "https://github.com/Soltano27",
  location: "Abeokuta, Ogun State, Nigeria (open to remote and hybrid roles)",
  /** Short version for search snippets (about 155 characters). */
  metaDescription:
    "Faruq Sosanya, operations and programme coordinator in Nigeria. Founder support and digital operations for health NGOs. Open to remote and hybrid roles.",
  description:
    "Faruq Olawale Sosanya is an operations and programme coordinator in Abeokuta, Nigeria. He supports founders and runs digital operations for health NGOs: trackers, stakeholder databases, newsletter systems, websites and meeting documentation. Open to remote and hybrid roles in operations, programme coordination, executive and founder support, and digital operations.",
  knowsAbout: [
    "Operations coordination",
    "Programme coordination",
    "Executive and founder support",
    "Project coordination",
    "Digital operations",
    "Stakeholder database management",
    "Wix CMS",
    "Workflow automation",
    "Google Workspace",
    "Meeting documentation and reporting",
    "Funding pipeline management",
    "Global health",
    "Claude AI",
    "Next.js",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export const milestones = [
  "Infectious Disease Alliance",
  "The EOS Foundation",
  "Ogun State Ministry of Health",
  "Independent National Electoral Commission",
  "Anambra State Polytechnic",
];

export type Post = { slug: string; title: string; date: string };

/** Every listed post has its full text on this site (lib/posts.ts). */
export const hasPage = (slug: string) => slug in postBodies;
export const postUrl = (slug: string) => `/blog/${slug}`;

/** "2026-10" -> "October 2026"; "2026-04-21" -> "21 April 2026". */
export function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  if (!y || !m) return d;
  const month = new Date(Date.UTC(y, m - 1, 1)).toLocaleString("en-GB", {
    month: "long",
    timeZone: "UTC",
  });
  return day ? `${day} ${month} ${y}` : `${month} ${y}`;
}

export const themes = [
  {
    title: "Building systems for health NGOs",
    summary:
      "Notes from building the newsletters, trackers, websites and onboarding behind a global health network and a growing foundation.",
    quotes: [
      {
        text: "At one point I had a test email called ihopeitworksthisnight@gmail.com because it was past midnight and I refused to stop until it worked.",
        slug: "dont-box-yourself-in",
      },
      {
        text: "Onboarding is the first deliverable. If it's clean, everything downstream compounds.",
        slug: "i-onboarded-a-volunteer-before-hr-finished-the-paperwork",
      },
    ],
    posts: [
      {
        slug: "dont-box-yourself-in",
        title:
          "“Don't box yourself in”: rebuilding a newsletter system across Wix, Brevo and Google Sheets",
        date: "2026-06",
      },
      {
        slug: "three-weeks-ago-i-joined-a-nonprofit",
        title:
          "Three weeks ago, I joined a nonprofit as an Operations Coordinator",
        date: "2026-06",
      },
      {
        slug: "what-actually-happened-with-the-ida-newsletter",
        title: "What actually happened when we built the IDA newsletter",
        date: "2026-05",
      },
      {
        slug: "most-operations-dont-break-loudly",
        title:
          "Most operations don't break loudly: recovering a journal system with no handover",
        date: "2026-05",
      },
      {
        slug: "ever-sent-out-emails-and-noticed-no-responses-coming-in",
        title: "Ever sent out emails and noticed no responses coming in?",
        date: "2026-04-21",
      },
      {
        slug: "i-onboarded-a-volunteer-before-hr-finished-the-paperwork",
        title: "I onboarded a volunteer before HR finished the paperwork",
        date: "2026-04",
      },
      {
        slug: "a-broken-hiring-pipeline-isnt-always-a-people-problem",
        title: "A broken hiring pipeline isn't always a people problem",
        date: "2026-04",
      },
      {
        slug: "a-recent-conversation-with-tue-ingemann-paarup-pushed-me-to-rethink-how-i-approa",
        title:
          "Rethinking how people find information across 13 committee pages",
        date: "2026-04-04",
      },
      {
        slug: "most-campaign-pages-don-t-fail-because-of-bad-design",
        title: "Most campaign pages don't fail because of bad design",
        date: "2026-03-26",
      },
    ] as Post[],
  },
  {
    title: "Programme work in the field",
    summary:
      "Secretariat, outreach and election work: keeping records accurate when the room is full and the plan changes.",
    quotes: [
      {
        text: "A working group's real output isn't the meeting. It's the record that lets everyone pick up exactly where they stopped three months later.",
        slug: "laboratory-working-group-q3-follow-through",
      },
      {
        text: "Small operational misses become data integrity risks very quickly in healthcare environments.",
        slug: "most-public-health-work-doesnt-happen-in-conference-rooms",
      },
    ],
    posts: [
      {
        slug: "laboratory-working-group-q3-follow-through",
        title:
          "Back as rapporteur: follow-through at the laboratory working group's Q3 meeting",
        date: "2026-10",
      },
      {
        slug: "most-public-health-work-doesnt-happen-in-conference-rooms",
        title: "Most public health work doesn't happen in conference rooms",
        date: "2026-05",
      },
      {
        slug: "two-days-with-who-and-the-ministries-of-health",
        title:
          "Two days with WHO and the Ministries of Health: secretariat work at a working group's inauguration",
        date: "2026-03",
      },
      {
        slug: "when-people-talk-about-elections",
        title:
          "Running an understaffed polling unit without losing control of the process",
        date: "2026-03",
      },
    ] as Post[],
  },
  {
    title: "Job search systems for graduates in Africa",
    summary:
      "What I learned turning months of silent applications into interviews: clear positioning, tailored evidence and a repeatable system.",
    quotes: [
      {
        text: "What changed was not the work. It was the structure used to communicate it.",
        slug: "this-cv-looked-strong",
      },
      {
        text: "The official route is often the cheapest one. It just isn't the most advertised.",
        slug: "asked-to-submit-an-affidavit-for-a-job-application",
      },
    ],
    posts: [
      {
        slug: "asked-to-submit-an-affidavit-for-a-job-application",
        title:
          "Asked to submit an affidavit for a job application? The official route costs far less",
        date: "2026-10",
      },
      {
        slug: "most-people-think-effort-gets-you-hired",
        title: "Most people think effort gets you hired",
        date: "2026-04-11",
      },
      {
        slug: "this-cv-looked-strong",
        title:
          "This CV looked strong. It would probably get rejected in 10 seconds",
        date: "2026-03",
      },
      {
        slug: "one-uncomfortable-truth-about-entry-level-hiring",
        title: "One uncomfortable truth about entry-level hiring",
        date: "2026-03",
      },
    ] as Post[],
  },
];

export const featuredPosts: Post[] = [
  themes[0].posts[0],
  themes[1].posts[0],
  themes[2].posts[2],
];

export type LiveSite = {
  name: string;
  url: string;
  description: string;
  image?: string;
};

export const liveSites: { group: string; sites: LiveSite[] }[] = [
  {
    group: "Built with Claude as coding partner",
    sites: [
      {
        name: "The EOS Foundation",
        url: "https://theeosfoundation.org",
        image: "/images/site-eos.jpg",
        description:
          "Organisation website in Next.js, deployed on Vercel with GitHub version control. I add articles and build new sections as the organisation grows.",
      },
      {
        name: "Neuro Champions Fellowship LMS",
        url: "https://ncf-lms.vercel.app",
        description:
          "Learning platform for a youth brain-health fellowship: Next.js, Supabase, and Google sign-in, with admin and fellow dashboards, attendance, and submissions. Login required beyond the landing page.",
        image: "/images/site-ncf-lms-admin.jpg",
      },
    ],
  },
  {
    group: "Infectious Disease Alliance coalition sites",
    sites: [
      {
        name: "Global Health Finance Coalition",
        url: "https://ghf-coalition.org",
        image: "/images/portfolio-ghfc-1.jpg",
        description:
          "Led delivery end to end: architecture and redesign document, membership pathways, homepage and navigation, domain launch and ongoing CMS updates.",
      },
      {
        name: "Primary Healthcare Coalition",
        url: "https://phc-coalition.org",
        image: "/images/portfolio-ghfc-2.jpg",
        description:
          "Led delivery from a 23-page architecture proposal through design review, build and domain launch, working with a remote designer.",
      },
    ],
  },
  {
    group: "Business and client websites",
    sites: [
      {
        name: "Sosanya Upholsteries & Furnitures",
        url: "https://sosanyafurnitures.com",
        image: "/images/site-sosanya.jpg",
        description:
          "Website for my own custom-furniture workshop in Abeokuta.",
      },
      {
        name: "MUHAB Furnitures",
        url: "https://muhabfurnitures.com.ng",
        image: "/images/site-muhab.jpg",
        description: "Client website for a furniture business in Ogun State.",
      },
      {
        name: "GoGadgets",
        url: "https://gogadgets.com.ng",
        image: "/images/site-gogadgets.jpg",
        description: "Client website for a gadget store in Abeokuta.",
      },
    ],
  },
];

export type Role = {
  org: string;
  title: string;
  date: string;
  tag?: string;
  logo?: string;
  points: string[];
  photo?: string;
  caption?: string;
};

export const experience: Role[] = [
  {
    org: "The EOS Foundation",
    title: "Programme Operations Coordinator",
    tag: "Part-time",
    date: "May 2026 to Present",
    logo: "/images/logo-eos.png",
    points: [
      "Work directly with the founder on operations, administration and programme delivery: correspondence in her voice, scheduling with invites and reminders, grant materials and weekly follow-through.",
      "Rebuilt the foundation's operating systems for its relaunch within 48 hours of joining: Drive architecture, task tracker and funding pipeline.",
      "Built and maintain a funding pipeline of 35+ opportunities with automated alerts for deadlines within 7 days.",
      "Built the foundation's website and the Neuro Champions Fellowship learning platform from scratch, using Claude as coding partner.",
      "Reviewed two major funding applications before submission, flagging contradictory figures, an unverifiable statistic and a misaligned funding category.",
    ],
  },
  {
    org: "Infectious Disease Alliance (IDA)",
    title: "Digital Operations & Systems Specialist",
    tag: "Contract",
    date: "January 2026 to Present",
    logo: "/images/logo-ida.png",
    points: [
      "Built the stakeholder records behind 13 committees and 2 coalitions: 2,800+ records consolidated from scattered spreadsheets into structured CMS collections.",
      "Built the newsletter system now averaging about 50% opens and 20% clicks across 4,500+ recipients (June to August 2026), after merging 5,100+ contacts into one list.",
      "Rebuilt a recruitment workflow that had been broken for 4+ months and recorded a self-service guide so HR could run it.",
      "Led delivery of the Global Health Finance Coalition and Primary Healthcare Coalition websites, from architecture proposals through build and domain launch, with membership workflows and CMS collections.",
      "Coordinated the website redesign across 10+ contributors in 6 time zones and onboarded new team members, including 4 web developers.",
    ],
  },
  {
    org: "Ogun State Laboratory Technical Working Group, Ogun State Ministry of Health",
    title: "Secretariat Support (Rapporteur)",
    tag: "Contract",
    date: "March 2026 to Present",
    logo: "/images/logo-sltwg.jpg",
    photo: "/images/sltwg.jpg",
    caption: "Ogun State Laboratory Technical Working Group meeting, 2026",
    points: [
      "Secretariat support for the inaugural two-day meeting with WHO, Federal and State Ministries of Health, academic institutions and professional bodies: attendance, logistics, transcription, minutes, resolutions and action points.",
      "Rapporteur for the Q3 2026 quarterly meeting: drafted the Day 2 report, compiled the merged report, photographed the sessions and prepared the Q3 presentation.",
    ],
  },
  {
    org: "Independent National Electoral Commission (INEC)",
    title: "Registration Officer and Presiding Officer",
    date: "June 2025 to November 2025",
    logo: "/images/logo-inec.png",
    photo: "/images/inec.jpg",
    caption: "Presiding Officer, Anambra State gubernatorial election, 2025",
    points: [
      "Registered and verified 1,200+ voters during Continuous Voter Registration with zero data errors.",
      "Presiding Officer at two elections, including a unit of 206 voters: zero spoilt ballots, and BVAS result uploads completed without outside support.",
      "Trained and supervised assistant presiding officers and police officers at each unit; moved the polling point when sunlight disabled the BVAS.",
    ],
  },
  {
    org: "Anambra State Polytechnic (ANSPOLY)",
    title: "Graduate Assistant Librarian (NYSC)",
    date: "February 2025 to December 2025",
    logo: "/images/logo-anspoly.png",
    points: [
      "Catalogued and digitised 1,600+ library records using structured classification and retrieval.",
      "Kept daily circulation logs and file movement records.",
      "Commended in writing by the Rector, the Registrar and the NYSC Anambra State Coordinator.",
    ],
  },
  {
    org: "Muslim Corpers Association of Nigeria (MCAN)",
    title: "Vice President, Anambra State Chapter",
    date: "February 2025 to November 2025",
    logo: "/images/logo-mcan.png",
    points: [
      "Oversaw state-level governance and chaired the EXCO selection committee.",
      "Mediated executive disputes and coordinated community programmes statewide.",
    ],
  },
  {
    org: "Faruq Digital Solutions",
    title: "Founder, Digital Operations",
    date: "June 2023 to Present",
    points: [
      "Websites, CMS management and documentation support for small businesses in Ogun State, including client furniture and gadget stores.",
    ],
  },
  {
    org: "Maison AMEEABLE LTD",
    title: "Strategy & Market Research Associate (project-based)",
    date: "January 2026 to April 2026",
    logo: "/images/logo-maison-ameeable.png",
    points: [
      "Ran buyer research and competitor analysis for an artisan-led B2B brand's positioning.",
      "Co-authored Strategic Buyer Insights for Artisan-Led B2B Brands (2026) with Promise Amiolemen.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tools?: string;
  outcomes: string[];
  link?: { href: string; label: string };
  images?: string[];
  narrow?: boolean;
  /** Typographic cover for work with no screenshot (books, guides). */
  cover?: { title: string; subtitle: string; meta: string };
};

export const projects: Project[] = [
  {
    title: "Recruitment Automation Repair: Infectious Disease Alliance",
    description:
      "The Wix → Google Sheets recruitment automation had been broken for 4+ months, leaving HR unsure which applications had arrived. I traced the root cause to unsaved manual edits breaking column-header matching, then fixed the system rather than the symptom.",
    tools: "Wix Automations · Google Sheets · Loom",
    outcomes: [
      "Remapped the automation, corrected timestamp columns, and built a filtered applicants tab HR could act on immediately",
      "Added cell-level formula protections and a source/working-tab split so the break could not recur",
      "Recorded a Loom walkthrough so HR could self-serve",
    ],
  },
  {
    title: "Newsletter & Subscriber Automation: Infectious Disease Alliance",
    description:
      "Moved the newsletter from Canva designs and subscribers split across two platforms to a database-anchored setup on Brevo, with subscriber changes syncing across every tool in real time.",
    tools: "Brevo · Wix Velo · Google Sheets · Webhooks",
    outcomes: [
      "Deduplicated 5,100+ contacts across Wix and Brevo into one master list",
      "Built real-time subscribe automation plus an unsubscribe webhook syncing Brevo → Google Sheets → Wix",
      "20.4% open rate on the first send to 5,000+ stakeholders; about 50% opens and 20% clicks on the monthly digest by mid-2026",
    ],
  },
  {
    title: "Relaunch Operating System: The EOS Foundation",
    description:
      "When the foundation relaunched, I rebuilt its operating systems from one onboarding call, then built its website and fellowship learning platform from scratch.",
    tools: "Google Drive · Google Sheets · Calendar automation",
    images: ["/images/portfolio-eos-drive.jpg", "/images/site-eos.jpg"],
    outcomes: [
      "Within 48 hours: a 5-area Drive architecture with a naming convention, task tracker, meeting notes, and funding tracker",
      "A funding pipeline of 35+ opportunities with automated flags for deadlines within 7 days, tagging internal vs third-party applications",
      "Draft correspondence, calendar invites, and reminders handled for the founder",
    ],
  },
  {
    title: "Fellowship Learning Platform: Neuro Champions Fellowship",
    description:
      "Built the learning platform that runs the Neuro Champions Fellowship from recruitment to monitoring, with separate dashboards for programme staff and fellows.",
    tools: "Next.js · Supabase · Google sign-in · Vercel",
    outcomes: [
      "Admin dashboard covering every programme phase: recruitment, fellows, attendance, submissions, curriculum, assessment, deployment, execution, monitoring and budget",
      "Fellow hub that tracks bootcamp completion across attendance, the simulation task and the final assessment, then issues certificates",
      "Running Cohort 2, with review queues for simulation tasks and weekly attendance marking",
    ],
    images: [
      "/images/site-ncf-lms-admin.jpg",
      "/images/site-ncf-lms-fellow.jpg",
    ],
    link: { href: "https://ncf-lms.vercel.app", label: "Visit Platform" },
  },
  {
    title: "Workflow & Operations Dashboard Stack",
    description:
      "Built a complete operations system using Google Workspace to track initiatives, manage execution, and maintain visibility across ongoing work.",
    outcomes: [
      "Reduced task ambiguity through structured intake and priority tagging",
      "Created end-to-end workflow from capture to execution",
      "Built to be copied by other remote teams",
    ],
    link: {
      href: "https://docs.google.com/spreadsheets/d/1uo4gULl9PfYrXoQ05gxA6MkFSBFH0cVRgBO7O7ALyyA/view?usp=sharing",
      label: "View Work",
    },
    images: ["/images/portfolio-dashboard.jpg"],
  },
  {
    title: "Operations Task Intake & Execution Tracker",
    description:
      "Daily task log for capturing incoming work, assigning ownership, and ensuring follow-through with priority tagging and escalation notes.",
    outcomes: [
      "Prevented missed deadlines through structured tracking",
      "Introduced blocker visibility across active work",
      "Maintained audit trail of all task movements",
    ],
    link: {
      href: "https://docs.google.com/spreadsheets/d/1jfx-_b2m8uExFXdrl6vSsZVOOEg2gQOS-3LrAztKvzA/preview",
      label: "View Work",
    },
    images: ["/images/portfolio-tracker.jpg"],
  },
  {
    title: "Multi-Channel Content Operations System",
    description:
      "Planned and ran three 15-day content series across LinkedIn, X and Facebook, tracked from draft to publish in one calendar.",
    tools: "Buffer · LinkedIn scheduling · Google Sheets · Canva",
    outcomes: [
      "45 posts planned: 27 published and 8 scheduled through Buffer and native LinkedIn scheduling, with the rest queued for the next batch",
      "Every post checked for asset readiness, accessibility and alt text before it was scheduled",
      "My LinkedIn content has reached 12,000+ impressions on a single post",
    ],
    link: {
      href: "https://docs.google.com/spreadsheets/d/1n9bi9pJedqHuHevkvG0gqprObeI_Qt_-OHrjWTBS71E/view?usp=sharing",
      label: "View Work",
    },
    images: ["/images/portfolio-calendar.jpg"],
  },
  {
    title: "Medical Outreach Operations: IMAN Ogun State",
    description:
      "Supported large-scale community health screening operations at OGMA 2026 in collaboration with the Islamic Medical Association of Nigeria (IMAN), Ogun State.",
    outcomes: [
      "Coordinated participant registration and patient flow for 100+ screenings per session",
      "Supported urinalysis and blood glucose screening and recorded results accurately",
      "Maintained documentation integrity across full screening workflow from intake to consultation",
    ],
    images: ["/images/portfolio-iman.jpg"],
    narrow: true,
  },
  {
    title: "Blood Screening & Donation Outreach: Rotary Club Oke-Ona Egba",
    description:
      "Programme operations and field coordination for a two-day blood screening and donation outreach with healthcare professionals, run from the Public Health Laboratory in Abeokuta to a ministry site in Oke-Mosan so civil servants could take part without leaving work.",
    outcomes: [
      "Turned the supplies checklist into a full workflow review: screening flow, movement logistics, documentation and contingency gaps",
      "Ran participant intake and result records across screening stations, and supported blood pressure checks",
      "Restored documentation flow when result forms were left behind, and integrated HIV and hepatitis screening once kits arrived on day two",
    ],
    images: [
      "/images/portfolio-rotary-1.jpg",
      "/images/portfolio-rotary-2.jpg",
      "/images/portfolio-rotary-3.jpg",
    ],
  },
  {
    title: "Lead Sourcing & Data Research System",
    description:
      "Built a repeatable workflow to identify, verify, and organize publicly available professional contact data using advanced search operators — mirroring real recruiting and partnerships operations.",
    outcomes: [
      "Turned ad-hoc research into a documented, repeatable workflow",
      "Maintained ethical sourcing with full data traceability",
      "Produced a structured tracker ready for outreach teams",
    ],
    link: {
      href: "https://docs.google.com/spreadsheets/d/1RB70al18W7HCaiEl-IWvUjVYPa-HvZ-Vx-vmpqwvxPE/edit?usp=sharing",
      label: "View Work",
    },
    images: ["/images/portfolio-leads.jpg"],
  },
  {
    title: "Content Systems Library",
    description:
      "Organized Google Drive workspace housing all content assets — graphics, caption drafts, approved copy, and working files — structured to support a full idea-to-publishing workflow.",
    outcomes: [
      "Demonstrated complete end-to-end content operations",
      "Enabled version control and cross-platform asset management",
      "Integrated with content calendar and Buffer scheduling",
    ],
    link: {
      href: "https://drive.google.com/drive/folders/1KnNjxNtiYTRbaiArJb8CSLDiJO6lUAWu?usp=drive_link",
      label: "View Work",
    },
    images: ["/images/portfolio-library.jpg"],
  },
  {
    title: "IDA Newsletter Vol. 1 No. 1: “News from IDA”",
    description:
      "Designed and built the Infectious Disease Alliance's inaugural newsletter from scratch using Wix Email Marketing, resolving mobile rendering issues by engineering a custom pure inline HTML/table layout after discovering Wix strips all CSS style tags entirely.",
    tools:
      "Wix Email Marketing · Inline HTML · CSS · Email rendering troubleshooting",
    outcomes: [
      "Built IDA's first ever newsletter end-to-end — content architecture, layout, and technical execution",
      "Independently diagnosed and solved cross-platform rendering failure that would have broken mobile display",
      "Delivered a production-ready email adopted into IDA's official communications strategy",
    ],
    images: ["/images/portfolio-newsletter.jpg"],
    narrow: true,
  },
  {
    title: "Coalition Websites: GHFC and PHCC, Infectious Disease Alliance",
    description:
      "Led delivery of two coalition websites in Wix CMS, from architecture documents through build, stakeholder review and domain launch.",
    outcomes: [
      "PHCC: wrote a 23-page architecture proposal turning the coalition's strategic plan into a phased roadmap, then led design, build and launch with a remote designer",
      "GHFC: defined site structure and Full, Associate and Junior membership pathways, built the homepage and navigation, and resolved domain issues for launch",
      "Set up CMS collections for governance, membership, team profiles and events that the team still updates",
    ],
    images: ["/images/portfolio-ghfc-1.jpg", "/images/portfolio-ghfc-2.jpg"],
  },
  {
    title: "Community Infrastructure Financial Reconciliation",
    description:
      "Converted fragmented handwritten committee worksheets into a structured, audit-ready financial record reconciling ₦18.7M in shared costs across a community electricity project using a 60/40 cost-sharing model.",
    tools:
      "Microsoft Excel · Data structuring · Financial documentation · Reporting workflows",
    outcomes: [
      "Reconciled ₦18.7M total project cost across 16 expense categories and multiple estimates",
      "Designed and applied a 60/40 cost-sharing allocation framework between two communities",
      "Delivered committee-ready financial documentation from fragmented handwritten records",
    ],
    images: ["/images/portfolio-reconciliation.jpg"],
    narrow: true,
  },
  {
    title:
      "Working Group Secretariat: Ogun State Laboratory Technical Working Group",
    description:
      "Secretariat and rapporteur for a state laboratory working group convened by the Ogun State Ministry of Health, with WHO, Federal and State Ministries of Health, academia and professional bodies.",
    outcomes: [
      "Inaugural two-day meeting: attendance, logistics, transcription, minutes, resolutions and action points",
      "Built a shared working document and tracking sheet for follow-up between meetings",
      "Q3 2026: drafted the Day 2 report, compiled the merged report and prepared the Q3 presentation",
    ],
    images: ["/images/sltwg.jpg", "/images/portfolio-sltwg-2.jpg"],
  },
  {
    title: "Field Operations & Documentation: INEC",
    description:
      "Managed high-compliance electoral operations across three INEC deployments (Continuous Voter Registration, a senatorial election and a gubernatorial election), covering biometric data capture, result documentation, and BVAS system troubleshooting.",
    outcomes: [
      "Registered and verified 1,200+ voters with zero data errors",
      "Ran polling units of up to 206 voters with zero spoilt ballots",
      "Completed BVAS result uploads to IReV without outside support, after moving the polling point when sunlight disabled the device",
    ],
    images: [
      "/images/portfolio-inec-1.jpg",
      "/images/inec.jpg",
      "/images/portfolio-inec-3.jpg",
    ],
  },
  {
    title: "Land The Role: The Complete AI-Powered Job Search System",
    description:
      "A self-authored, 15-chapter job search system for African professionals, NYSC completers, and career switchers, written after my own post-NYSC applications met silence. Each chapter is a system with defined inputs, decision rules, and outputs, tested in Nigerian and African job markets.",
    tools: "Book · April 2026 · 2026 Edition",
    outcomes: [
      "One positioning formula reused across the LinkedIn headline, CV summary, cover letter, and interview introduction",
      "A 5-filter role assessment with a fixed verdict rule, plus ATS-safe CV and five-part cover letter systems",
      "A follow-up timeline, interview frameworks, and an AI pipeline that gives each tool a defined role",
    ],
    link: {
      href: "https://drive.google.com/file/d/1AfAtYfyM-3_PSS8DNqMam46yAVEZvO8Y/view?usp=drive_link",
      label: "View the Book",
    },
    images: ["/images/portfolio-land-the-role.jpg"],
    narrow: true,
  },
  {
    title: "CV AI Operation Guide: Model-Agnostic System Prompt",
    description:
      "A reusable operating guide that turns any large language model (Claude, ChatGPT, Gemini, Perplexity, or Manus) into a consistent job-application assistant working from the same data, rules, and quality checks.",
    tools: "System prompt · v1 March 2026 · v3 September 2026",
    outcomes: [
      "Ten-section architecture: verified source data, a 5-filter decision layer, production rules, and a live application tracker",
      "Guardrails designed in: no fabrication, flag conflicts before proceeding, and the human makes the final call",
      "Later versions embed the full verified work history and writing rules, so outputs stopped varying between tools",
    ],
    link: {
      href: "https://drive.google.com/drive/folders/11ek8bUTX-OBfNz6INJLq-1k6XUoZC-m-",
      label: "View the Guide",
    },
    images: ["/images/portfolio-cv-ai-guide.jpg"],
    narrow: true,
  },
  {
    title: "Formal Commendations: NYSC & Public Sector",
    description:
      "Three independent formal commendation letters issued by three separate institutional authorities during the same service year — the NYSC Anambra State Coordinator, the Acting Registrar of ANSPOLY, and the Acting Rector of ANSPOLY — recognising operational excellence, records management, and institutional initiative.",
    outcomes: [
      "Commended by NYSC State Coordinator (Mrs. Pauline Ojisua) for discipline, dedication, and commitment",
      "Commended by Acting Registrar Dr. Edith Nkechi Udalla for diligence and contribution to academic record management in the Library Unit",
      "Commended by Acting Rector Dr. Njideka Rita Chiekezie for exemplary service, initiative, and outstanding contributions including 3D directional signage installation and cross-departmental support",
    ],
    link: {
      href: "https://drive.google.com/file/d/1rOZldmvESJUpGywMR3iG3LzaSgPQdsdE/view?usp=sharing",
      label: "View Commendations",
    },
    images: ["/images/portfolio-commendations.jpg"],
  },
];

export const testimonials = [
  {
    name: "Rodrigo Scotini",
    role: "Executive Director, Infectious Disease Alliance · managed Faruq directly",
    quote:
      "He takes ownership of his work, responds well to feedback, and continuously looks for ways to improve processes and strengthen operational efficiency.",
  },
  {
    name: "Tue Ingemann Paarup",
    role: "Former Communications Director, Infectious Disease Alliance · managed Faruq directly",
    quote:
      "If you're looking for someone who finds solutions to problems and not the other way around, Faruq is your guy.",
  },
  {
    name: "Gaspare Tocci",
    role: "Junior Web Developer, IDA web team · onboarded by Faruq",
    quote:
      "He is one of those rare people who combines technical ability, organisation, patience and a genuine willingness to help others.",
  },
  {
    name: "Carl Aryan",
    role: "Infectious Disease Policy Journal & coalition websites, IDA",
    quote:
      "What stood out most was his ability to diagnose problems quickly, communicate clearly at every step, and deliver working solutions without needing hand-holding.",
  },
  {
    name: "Shivani Kapila",
    role: "UI/UX & Web Designer · PHCC and GHFC websites, IDA",
    quote:
      "What stood out most was Faruq’s ability to manage detailed content workflows while collaborating effectively in a remote, cross-functional environment.",
  },
  {
    name: "Lindsay Simpson",
    role: "Global Health Professional · Primary Healthcare Coalition, IDA",
    quote:
      "Faruq consistently demonstrated strong initiative and coordination skills — managing CMS content, working across international contributors, quickly resolving issues, and maintaining clear communication throughout the process.",
  },
  {
    name: "Nadia Petean",
    role: "Human Resources - Global Mobility, IDA",
    quote:
      "Faruq’s support turned months of workflow confusion into a reliable, structured process.",
  },
  {
    name: "Emad Zahran",
    role: "Project & Community Manager / Scrum Master, IDA",
    quote:
      "He approaches digital operations with a reliable, solutions-oriented mindset, and it was a pleasure collaborating with him.",
  },
  {
    name: "Smita Singh",
    role: "HR Professional, People and Culture, IDA",
    quote:
      "Faruq demonstrated reliability, strong attention to detail, and a proactive approach in resolving operational issues while maintaining accurate documentation.",
  },
  {
    name: "Vasundhra Dalal",
    role: "Programme Management, UNDRR · worked together at IDA",
    quote:
      "Faruq brought strong attention to detail, reliability, and a thoughtful operational approach to the digital work supporting our initiatives.",
  },
  {
    name: "Adebayo Waliyullah Kehinde",
    role: "Graduate Assistant Librarian · worked together during NYSC",
    quote:
      "What stood out most was his ability to take initiative, quickly adapt to new systems, and deliver accurate results with minimal supervision.",
  },
];
