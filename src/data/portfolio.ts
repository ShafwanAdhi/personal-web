/**
 * EDIT THIS FILE TO PERSONALIZE THE ENTIRE WEBSITE.
 * All visible copy, links, image paths, SEO, and accessible labels live here.
 * Images go in public/assets/; reference them as /assets/your-file.webp.
 * Project content describes Shafwan's work; evaluation descriptions retain their measured scope.
 */

export type SocialIcon = 'gmail' | 'linkedin' | 'github'

export interface ProjectImage { src: string; alt: string; caption: string }
export interface Project {
  id: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  gallery: ProjectImage[]
  year: string
  role: string
  duration: string
  overview: string
  tools: string[]
  contributions: { title: string; description: string }[]
  achievements: { value: string; label: string; description: string }[]
}

export interface Certification {
  id: string
  title: string
  issuer: string
  issued: string
  credentialId?: string
  kind?: 'certificate' | 'course'
  fileUrl?: string
  skills: string[]
  image?: string
  credentialUrl?: string
}

export const portfolio = {
  meta: {
    titleSeparator: ' — ',
    title: 'Shafwan Adhi - AI, Machine Learning & Data Science',
    description: 'Shafwan Adhi is an undergraduate student exploring artificial intelligence, machine learning, data science, and AI agents. Discover his projects, experiments, and certifications.',
    language: 'en',
    themeColor: '#1e1e1e',
  },
  identity: {
    brand: 'Shafwanadhi',
    name: 'Shafwan Adhi',
    email: 'shafwan.adhi.dwi@gmail.com',
    portrait: '/assets/portrait-shafwan.png',
    portraitAlt: 'Portfolio owner wearing round glasses and a black collared shirt, with folded arms',
  },
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    greeting: "Hi, I'm Shafwan Adhi.",
    titleLines: ['Building Intelligent', 'Systems with AI', '& Data.'],
    description: 'An undergraduate student exploring AI, machine learning, and data science through research, experiments, and practical projects.',
    hireLabel: 'Explore My Work',
    workHref: '#portfolio',
    technologyLabels: { python: 'Python', pytorch: 'PyTorch', fastapi: 'FastAPI' },
  },
  socials: [
    { label: 'Gmail', icon: 'gmail' as SocialIcon, href: 'mailto:shafwan.adhi.dwi@gmail.com' },
    { label: 'LinkedIn', icon: 'linkedin' as SocialIcon, href: 'https://www.linkedin.com/in/shafwan-adhi-dwi-nugraha-b90943321/' },
    { label: 'GitHub', icon: 'github' as SocialIcon, href: 'https://github.com/ShafwanAdhi' },
  ],
  skills: ['Multi Agent System', 'AI Automation', 'Machine Learning', 'Data Science'],
  about: {
    title: 'A Little About Me',
    description: "I'm an undergraduate student focused on AI, machine learning, and data science, with a particular interest in AI agents and large language models. I enjoy exploring research, building intelligent systems, and evaluating how they work and can be improved.",
    experienceTitle: 'Experience & Involvement',
    experiences: [
      {
        id: 'experience-1',
        period: 'Jan 2025 – Present',
        title: 'Head of Programming — SAR Robot Division',
        company: 'Dewantara Research Team UM',
        location: 'Malang, Indonesia',
        description: 'Started as a Robot Program Engineer (Jan 2025 – Jan 2026) before taking on the Head of Programming role in February 2026, focusing on robotics software development for search and rescue systems.',
      },
      {
        id: 'experience-3',
        period: 'Sep – Dec 2025',
        title: 'Computer Mathematics Practicum Assistant',
        company: 'Universitas Negeri Malang',
        location: 'Malang, Indonesia',
        description: 'Supported computer mathematics practicum activities and assisted students with computational exercises and course materials.',
      },
      {
        id: 'experience-2',
        period: 'Jul – Aug 2026',
        title: 'Web Developer Intern',
        company: 'Mandiri Tunas Finance',
        location: 'West Jakarta, Indonesia · Hybrid',
        description: 'Gained industry experience in web development through a two-month internship at Mandiri Tunas Finance.',
      },
    ],
  },
  work: {
    allCategoryId: 'all',
    defaultCategoryId: 'all',
    featuredProjectIds: ['waspadai', 'numora-question-variants', 'siparih'],
    title: 'Selected Projects',
    description: 'A collection of projects and experiments where I explore ideas, build systems, and apply AI, machine learning, and data science to practical problems.',
    categories: [
      { id: 'all', label: 'All' },
      { id: 'ai-ml', label: 'AI / ML' },
      { id: 'software', label: 'Software Engineering' },
      { id: 'others', label: 'Others' },
    ],
    viewLabel: 'View Case Study',
    allLabel: 'Explore All Projects',
    pageTitle: 'Projects & Experiments',
    pageEyebrow: 'Work / Collection',
    pageDescription: 'Explore my work across artificial intelligence, machine learning, data science, and software development.',
    backLabel: 'Back to home',
    emptyTitle: 'More projects are on the way.',
    emptyDescription: "I'm always exploring new ideas and working on something new.",
    projects: [
  {
    "id": "waspadai",
    "category": "ai-ml",
    "title": "WaspadAI",
    "description": "An evidence-guided AI system that investigates suspicious messages, links, and screenshots through multimodal analysis, grounded retrieval, and clear, actionable explanations.",
    "image": "/assets/projects/waspadai/waspadai-cover.webp",
    "imageAlt": "Two Indonesian adults reviewing potentially suspicious information on a smartphone, representing WaspadAI's collaborative digital-safety use case.",
    "gallery": [
      {
        "src": "/assets/projects/waspadai/verification-architecture.webp",
        "alt": "WaspadAI verification architecture, from input normalization to evidence retrieval and verdict generation.",
        "caption": "The AI pipeline combines privacy filtering, rulebook-guided investigation, evidence retrieval, and conservative verdicts."
      },
      {
        "src": "/assets/projects/waspadai/technology-stack.webp",
        "alt": "WaspadAI architecture separating the external application from the AI verification service.",
        "caption": "A modular web and API stack keeps product authentication separate from the stateless verification service."
      },
      {
        "src": "/assets/projects/waspadai/server-integration.webp",
        "alt": "Source-derived architecture diagram connecting Android, the Product Backend, Supabase, and the separate AI fact-check API.",
        "caption": "Android authenticates through the Product Backend, which owns product records and calls the separate AI verification service."
      },
      {
        "src": "/assets/projects/waspadai/community-evidence.webp",
        "alt": "Source-derived diagram of community evidence selection, consent and moderation checks, payload limits, and text or image request transport.",
        "caption": "Community evidence passes consent, moderation, content-hash, and payload checks before AI-service transport. Development fixtures remain separate from real records."
      }
    ],
    "year": "2026",
    "role": "AI & Full-Stack Developer / Mobile Integration Contributor",
    "duration": "September 2026",
    "overview": "WaspadAI turns suspicious messages, links, and screenshots into structured investigations. I built the AI verification service and web demo, combining privacy filtering, rulebook-guided planning, bounded evidence retrieval, and conservative verdict generation. The system separates investigation rules from factual evidence and returns UNVERIFIED when the available sources cannot support a confident conclusion. I also contributed to the team-built Android application: authenticated API integration, screenshot cropping, community-evidence transport, and clearer result presentation. The AI service and mobile product have distinct responsibilities, connected through an explicit server-to-server contract.",
    "tools": [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Groq API",
      "Qwen",
      "GPT-OSS",
      "Tavily Search",
      "Tesseract OCR",
      "Kotlin",
      "Jetpack Compose",
      "Supabase",
      "PostgreSQL",
      "Docker Compose"
    ],
    "contributions": [
      {
        "title": "Designed the multimodal verification architecture",
        "description": "Shafwan built a shared text-and-image pipeline that validates input, applies URL sanitization and PII redaction, extracts risk signals, and produces one canonical response contract. This keeps modality-specific processing at the boundary while preserving consistent downstream verification behavior."
      },
      {
        "title": "Built a rulebook-guided investigation layer",
        "description": "Shafwan compiled three rulebook domains into 255 retrievable rule chunks with BM25, hashed-subword similarity, metadata scoring, phase-aware selection, and 17 deterministic safety triggers. The design keeps investigation policy separate from evidence so rules can guide checks and safe actions without deciding factual truth."
      },
      {
        "title": "Added evidence boundaries and deterministic guardrails",
        "description": "Shafwan integrated bounded Tavily search, a small verified official-reference corpus, and request-scoped community evidence. He also added claim-grounding repair, evidence-sufficiency checks, conflict handling, deterministic fallbacks, and final consistency rules to prevent weak evidence from becoming an unsupported definitive verdict."
      },
      {
        "title": "Delivered the web experience and reusable API contract",
        "description": "Shafwan implemented the Next.js interface, progressive result presentation, structured and narrative output modes, FastAPI public and server-to-server endpoints, OpenAPI synchronization, and an Android integration contract. Narrative output is derived locally from the canonical result and does not require an additional model call."
      },
      {
        "title": "Created evaluation, observability, and deployment workflows",
        "description": "Shafwan built privacy-filtered pipeline traces, planner and production benchmark runners, regression tests, Docker health checks, log rotation, Nginx routing, and VPS deployment documentation. Earlier planner failures were documented and used to motivate compact schemas, local validation, deterministic escalation, and recoverable fallbacks."
      },
      {
        "title": "Added overlay crop selection and capture fixes",
        "description": "Shafwan added region selection and bitmap cropping to the existing floating verification flow, then improved screen-size handling and bounded blank-frame retries. The crop lets users choose the screen area they intend to submit, while capture failures remain visible instead of being treated as usable images."
      },
      {
        "title": "Implemented community-evidence selection and transport",
        "description": "Shafwan added a backend evidence builder, database read policies, and adapter tests. The implementation joins community posts with consent, contribution, moderation, and source records, checks sanitized content hashes, ranks candidates, and bounds the payload before forwarding evidence to the AI API. Later fixture support and deployed-schema adaptation were added by teammates."
      }
    ],
    "achievements": [
      {
        "value": "98.15%",
        "label": "Critical-signal recall",
        "description": "Measured on 47 labeled signal cases in a 100-case synthetic, adversarial, and regression benchmark. This measures signal extraction, not real-world fact-checking accuracy."
      },
      {
        "value": "100%",
        "label": "Replay response validity",
        "description": "All replayed cases returned schema-valid responses using stubbed model and search providers. Twenty image fixtures were excluded from replay v1."
      },
      {
        "value": "255 rules",
        "label": "Investigation rulebook",
        "description": "A versioned corpus spans information integrity, public services, impersonation, phishing, and account takeover, with 17 deterministic safety triggers."
      },
      {
        "value": "11",
        "label": "Product API tests passed",
        "description": "Focused mobile-backend adapter and community-evidence tests passed with mocked upstream responses and database transactions."
      }
    ]
  },
  {
    "id": "numora-question-variants",
    "category": "software",
    "title": "Numora Assessment & Question Variants",
    "description": "A reproducible mathematics question engine and assessment workbench for Numora, connecting parameterized content, rigorous validation, and assessment-service integration.",
    "image": "/assets/projects/numora-question-variants/workbench-hero.webp",
    "imageAlt": "Numora local workbench showing a source mathematics question and a seeded variant side by side, with filters and answer keys.",
    "gallery": [
      {
        "src": "/assets/projects/numora-question-variants/workbench-hero.webp",
        "alt": "Numora local workbench showing a source mathematics question and a seeded variant side by side, with filters and answer keys.",
        "caption": "The operator workbench compares original questions with reproducible variants, including answer keys and version information."
      },
      {
        "src": "/assets/projects/numora-question-variants/original-vs-variant.webp",
        "alt": "Original and generated single-choice mean problems with answer options, keys, and worked explanations.",
        "caption": "Original and generated single-choice questions, with answer options and worked explanations."
      },
      {
        "src": "/assets/projects/numora-question-variants/multiple-answer.webp",
        "alt": "Two multiple-answer statistics questions displaying source data, generated data, statement-level correctness, and explanations.",
        "caption": "Multiple-answer variants update the dataset and statements together while retaining the required number of correct answers."
      },
      {
        "src": "/assets/projects/numora-question-variants/category-statements.webp",
        "alt": "Original and generated statistics statements labeled true or false in the Numora operator interface.",
        "caption": "Category-question previews expose statement keys and explanations for operator review."
      },
      {
        "src": "/assets/projects/numora-question-variants/architecture.webp",
        "alt": "Repository-derived diagram of versioned sources, deterministic generation, operator previews, and the separate Numora application and compute service sharing PostgreSQL.",
        "caption": "Source-derived architecture: versioned content, deterministic generation, operator review, and the separate Numora application and compute service."
      }
    ],
    "year": "2026",
    "role": "Assessment & Question Generation Developer",
    "duration": "October 2026",
    "overview": "Numora is a team-built mathematics practice platform for Indonesian Grade IX students. My work connects question generation, assessment data, and the main application. A deterministic Python engine turns versioned source questions and JSON configurations into reproducible variants, while an operator workbench makes originals, generated content, answer keys, and explanations easy to compare. I extended generator coverage, built inspection and validation tooling, and contributed persistence and service-handoff contracts. My responsibilities also cover IRT and self-adjustment, with the implemented work establishing the content and integration foundations for those assessment capabilities.",
    "tools": [
      "Python",
      "JSON configuration",
      "JavaScript",
      "HTML/CSS",
      "PostgreSQL",
      "SQL",
      "TypeScript",
      "Drizzle ORM",
      "NestJS",
      "unittest",
      "Playwright"
    ],
    "contributions": [
      {
        "title": "Reproducible question generation",
        "description": "Extended the deterministic Python engine with additional mathematics indicators and Tryout content. Parameterized questions, answer options, and explanations can be regenerated from a seed and versioned configuration."
      },
      {
        "title": "Operator workbench & mathematical validation",
        "description": "Built a browser workbench for comparing originals and variants. Added mathematical test oracles, generator audits, and source-revision workflows to make content review traceable."
      },
      {
        "title": "IRT data architecture",
        "description": "Contributed variant and IRT persistence schemas, versioned contracts, and assessment-data integration foundations. The architecture separates canonical application content from compute evidence."
      },
      {
        "title": "Controlled self-adjustment design",
        "description": "Defined a self-adjustment approach linking permitted generator settings, evaluation evidence, and acceptance checks while preserving original content and historical results."
      },
      {
        "title": "Main-service integration",
        "description": "Connected question-generation workflows with the Numora application through persistence and handoff contracts. Added scoped Drill content-acceptance rules and tests while preserving version lineage."
      }
    ],
    "achievements": [
      {
        "value": "746",
        "label": "Generator configurations",
        "description": "The team repository contains configurations for 746 of 820 original questions, covering 719 Drill and 27 Tryout items."
      },
      {
        "value": "186",
        "label": "Regression tests passed",
        "description": "The local Python regression suite passed during the October 2026 review, without a production database."
      },
      {
        "value": "1,600",
        "label": "Seed checks passed",
        "description": "An audit of 16 revised questions passed independent mathematical checks and generated 320 distinct candidates. This does not establish whole-bank accuracy or psychometric equivalence."
      },
      {
        "value": "215",
        "label": "Curated conceptual variants",
        "description": "The stock loader accepted 215 internally VERIFIED manual variants across 70 original questions. The status describes the repository workflow."
      }
    ]
  },
  {
    "id": "siparih",
    "category": "software",
    "title": "SIPARIH",
    "description": "A village document platform that connects resident submissions, neighborhood approvals, protected PDF delivery, and administrative archives in one streamlined workflow.",
    "image": "/assets/projects/siparih/login.webp",
    "imageAlt": "SIPARIH login page with green branding and an empty national identification number and password form.",
    "gallery": [
      {
        "src": "/assets/projects/siparih/login.webp",
        "alt": "Locally rendered SIPARIH login page with empty credentials fields and registration and password reset links.",
        "caption": "Actual login view captured from a local run of the repository on October 20, 2026. No account or resident data is displayed."
      },
      {
        "src": "/assets/projects/siparih/automated-testing.webp",
        "alt": "Existing repository test report visual listing passing feature tests and a total of 82 tests and 818 assertions.",
        "caption": "Archived test-output visual: 82 tests and 818 assertions passed in the recorded July 23, 2026 run. This is historical automated test evidence, not a current production benchmark."
      },
      {
        "src": "/assets/projects/siparih/approval-concurrency.webp",
        "alt": "Existing repository concurrency test visual showing one passing test with 12 assertions on MySQL or MariaDB.",
        "caption": "A separate recorded MySQL/MariaDB test used two PHP processes to check competing approvals. One approval succeeded and the other was rejected; this is a controlled test, not a traffic capacity measurement."
      }
    ],
    "year": "2026",
    "role": "Software Developer",
    "duration": "July 2026",
    "overview": "SIPARIH digitizes the introduction-letter workflow for Pasireurih village. Residents submit supporting documents and track requests, neighborhood leaders review and approve them, and administrators manage users and archives. My contributions strengthened the document pipeline: authorized private-file delivery, PDF normalization, same-origin previews, acceptance coverage, and competing-approval checks. The application combines Laravel role boundaries and transactional state changes with practical document handling, including image-to-PDF conversion and visual signature overlays. Automated testing provides concrete evidence for submission rules, access control, and approval consistency.",
    "tools": [
      "PHP",
      "Laravel 12",
      "Blade",
      "Tailwind CSS",
      "MySQL / MariaDB",
      "Redis",
      "Nginx",
      "PDF.js",
      "FPDF / FPDI",
      "Ghostscript",
      "PHPUnit"
    ],
    "contributions": [
      {
        "title": "Protected document delivery",
        "description": "Implemented protected document delivery with X-Accel-Redirect. Laravel checks authorization before Nginx serves the private file, keeping access behind application policies."
      },
      {
        "title": "PDF upload compatibility",
        "description": "Built a Ghostscript normalization service to make uploaded PDFs compatible with FPDI processing, with input validation, time limits, clear errors, and temporary-file cleanup."
      },
      {
        "title": "Same-origin preview requests",
        "description": "Reworked document previews to use same-origin URLs, keeping preview requests on the application's host and removing a fragile dependency on separately configured addresses."
      },
      {
        "title": "Acceptance coverage and access boundaries",
        "description": "Added structured acceptance tests and strengthened submission rules. The server derives the destination RW from the resident's account and rejects manipulated approval targets."
      },
      {
        "title": "Competing-approval verification",
        "description": "Built a two-process MySQL/MariaDB concurrency test to verify approval locking under competing requests, extending coverage beyond the standard SQLite test suite."
      }
    ],
    "achievements": [
      {
        "value": "82",
        "label": "Tests / 818 assertions",
        "description": "The recorded test run completed 818 assertions covering application and acceptance behavior. These are historical results for the documented test revision."
      },
      {
        "value": "1 approval",
        "label": "Two competing requests",
        "description": "A controlled MySQL/MariaDB concurrency test accepted one approval, rejected the competing request, and preserved one approval log."
      }
    ]
  }
] satisfies Project[],
  },
  projectDetail: {
    sectionNumbers: ['01', '02', '03'],
    backLabel: 'Back to projects',
    eyebrow: 'Selected work / Case study',
    overviewTitle: 'Overview',
    contributionsTitle: 'What I Did',
    achievementsTitle: 'Impact & Achievements',
    stackTitle: 'Tech Stack',
    roleLabel: 'Role',
    yearLabel: 'Year',
    durationLabel: 'Timeline',
    galleryLabel: 'Project gallery',
    galleryInstructions: 'Use left and right arrow keys, or swipe, to change the image',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    slideLabel: 'Show image',
    relatedTitle: 'Explore more work',
    nextLabel: 'Next case study',
    moreCategoriesLabel: 'From the full collection',
    nextAction: 'View Project',
  },
  certifications: {
    title: 'Certifications',
    description: 'Continuous learning, backed by hands-on practice.',
    allLabel: 'View All Courses',
    backLabel: 'Back to home',
    pageEyebrow: 'Learning / Credentials',
    pageDescription: 'A collection of courses and credentials across data, AI, engineering, and design.',
    demoNote: 'Professional certificates and completed courses from IBM, the University of Washington, and Kaggle.',
    certificatesTitle: 'Professional Certificates',
    coursesTitle: 'Courses',
    openDocumentLabel: 'Open Document',
    documentLabel: 'Certificate of completion',
    awardedLabel: 'Awarded to',
    credentialLabel: 'Credential ID',
    verifyLabel: 'View Credential',
    items: [
      {
            "id": "i9l9ohtfdrx7",
            "kind": "certificate",
            "title": "Machine Learning",
            "issuer": "University of Washington",
            "issued": "Aug 30, 2026",
            "credentialId": "I9L9OHTFDRX7",
            "skills": [],
            "image": "/assets/credentials/i9l9ohtfdrx7.webp",
            "fileUrl": "/assets/credentials/i9l9ohtfdrx7.pdf",
            "credentialUrl": "https://coursera.org/verify/specialization/I9L9OHTFDRX7"
      },
      {
            "id": "xljp90zey629",
            "kind": "certificate",
            "title": "IBM Data Science",
            "issuer": "IBM",
            "issued": "Apr 24, 2026",
            "credentialId": "XLJP90ZEY629",
            "skills": [],
            "image": "/assets/credentials/xljp90zey629.webp",
            "fileUrl": "/assets/credentials/xljp90zey629.pdf",
            "credentialUrl": "https://coursera.org/verify/professional-cert/XLJP90ZEY629"
      },
      {
            "id": "fd7wfqqc6o50",
            "kind": "course",
            "title": "Machine Learning: Classification",
            "issuer": "University of Washington",
            "issued": "Aug 30, 2026",
            "credentialId": "FD7WFQQC6O50",
            "skills": [],
            "image": "/assets/credentials/fd7wfqqc6o50.webp",
            "fileUrl": "/assets/credentials/fd7wfqqc6o50.pdf",
            "credentialUrl": "https://coursera.org/verify/FD7WFQQC6O50"
      },
      {
            "id": "pnux505ab1jb",
            "kind": "course",
            "title": "Machine Learning: Clustering & Retrieval",
            "issuer": "University of Washington",
            "issued": "Aug 30, 2026",
            "credentialId": "PNUX505AB1JB",
            "skills": [],
            "image": "/assets/credentials/pnux505ab1jb.webp",
            "fileUrl": "/assets/credentials/pnux505ab1jb.pdf",
            "credentialUrl": "https://coursera.org/verify/PNUX505AB1JB"
      },
      {
            "id": "l1kq4hb8pwy4",
            "kind": "course",
            "title": "Machine Learning: Regression",
            "issuer": "University of Washington",
            "issued": "Aug 28, 2026",
            "credentialId": "L1KQ4HB8PWY4",
            "skills": [],
            "image": "/assets/credentials/l1kq4hb8pwy4.webp",
            "fileUrl": "/assets/credentials/l1kq4hb8pwy4.pdf",
            "credentialUrl": "https://coursera.org/verify/L1KQ4HB8PWY4"
      },
      {
            "id": "h3myxdnuxqn4",
            "kind": "course",
            "title": "Machine Learning Foundations: A Case Study Approach",
            "issuer": "University of Washington",
            "issued": "Aug 27, 2026",
            "credentialId": "H3MYXDNUXQN4",
            "skills": [],
            "image": "/assets/credentials/h3myxdnuxqn4.webp",
            "fileUrl": "/assets/credentials/h3myxdnuxqn4.pdf",
            "credentialUrl": "https://coursera.org/verify/H3MYXDNUXQN4"
      },
      {
            "id": "fb6vqven016m",
            "kind": "course",
            "title": "Data Scientist Career Guide and Interview Preparation",
            "issuer": "IBM",
            "issued": "Apr 24, 2026",
            "credentialId": "FB6VQVEN016M",
            "skills": [],
            "image": "/assets/credentials/fb6vqven016m.webp",
            "fileUrl": "/assets/credentials/fb6vqven016m.pdf",
            "credentialUrl": "https://coursera.org/verify/FB6VQVEN016M"
      },
      {
            "id": "5lkr3bmk0jji",
            "kind": "course",
            "title": "Applied Data Science Capstone",
            "issuer": "IBM",
            "issued": "Apr 23, 2026",
            "credentialId": "5LKR3BMK0JJI",
            "skills": [],
            "image": "/assets/credentials/5lkr3bmk0jji.webp",
            "fileUrl": "/assets/credentials/5lkr3bmk0jji.pdf",
            "credentialUrl": "https://coursera.org/verify/5LKR3BMK0JJI"
      },
      {
            "id": "9ibvn38gb9jt",
            "kind": "course",
            "title": "Generative AI: Elevate Your Data Science Career",
            "issuer": "IBM",
            "issued": "Apr 23, 2026",
            "credentialId": "9IBVN38GB9JT",
            "skills": [],
            "image": "/assets/credentials/9ibvn38gb9jt.webp",
            "fileUrl": "/assets/credentials/9ibvn38gb9jt.pdf",
            "credentialUrl": "https://coursera.org/verify/9IBVN38GB9JT"
      },
      {
            "id": "923lbt63f4xx",
            "kind": "course",
            "title": "Machine Learning with Python",
            "issuer": "IBM",
            "issued": "Apr 22, 2026",
            "credentialId": "923LBT63F4XX",
            "skills": [],
            "image": "/assets/credentials/923lbt63f4xx.webp",
            "fileUrl": "/assets/credentials/923lbt63f4xx.pdf",
            "credentialUrl": "https://coursera.org/verify/923LBT63F4XX"
      },
      {
            "id": "8ou91rkbjpb2",
            "kind": "course",
            "title": "Data Visualization with Python",
            "issuer": "IBM",
            "issued": "Apr 18, 2026",
            "credentialId": "8OU91RKBJPB2",
            "skills": [],
            "image": "/assets/credentials/8ou91rkbjpb2.webp",
            "fileUrl": "/assets/credentials/8ou91rkbjpb2.pdf",
            "credentialUrl": "https://coursera.org/verify/8OU91RKBJPB2"
      },
      {
            "id": "qwmzpzre82m8",
            "kind": "course",
            "title": "Data Analysis with Python",
            "issuer": "IBM",
            "issued": "Apr 16, 2026",
            "credentialId": "QWMZPZRE82M8",
            "skills": [],
            "image": "/assets/credentials/qwmzpzre82m8.webp",
            "fileUrl": "/assets/credentials/qwmzpzre82m8.pdf",
            "credentialUrl": "https://coursera.org/verify/QWMZPZRE82M8"
      },
      {
            "id": "vjwvugu3y8fw",
            "kind": "course",
            "title": "Databases and SQL for Data Science with Python",
            "issuer": "IBM",
            "issued": "Apr 12, 2026",
            "credentialId": "VJWVUGU3Y8FW",
            "skills": [],
            "image": "/assets/credentials/vjwvugu3y8fw.webp",
            "fileUrl": "/assets/credentials/vjwvugu3y8fw.pdf",
            "credentialUrl": "https://coursera.org/verify/VJWVUGU3Y8FW"
      },
      {
            "id": "mqidx92kkz1v",
            "kind": "course",
            "title": "Python Project for Data Science",
            "issuer": "IBM",
            "issued": "Apr 8, 2026",
            "credentialId": "MQIDX92KKZ1V",
            "skills": [],
            "image": "/assets/credentials/mqidx92kkz1v.webp",
            "fileUrl": "/assets/credentials/mqidx92kkz1v.pdf",
            "credentialUrl": "https://coursera.org/verify/MQIDX92KKZ1V"
      },
      {
            "id": "f6rbljzenlso",
            "kind": "course",
            "title": "Python for Data Science, AI & Development",
            "issuer": "IBM",
            "issued": "Apr 7, 2026",
            "credentialId": "F6RBLJZENLSO",
            "skills": [],
            "image": "/assets/credentials/f6rbljzenlso.webp",
            "fileUrl": "/assets/credentials/f6rbljzenlso.pdf",
            "credentialUrl": "https://coursera.org/verify/F6RBLJZENLSO"
      },
      {
            "id": "j06fieux4z82",
            "kind": "course",
            "title": "Data Science Methodology",
            "issuer": "IBM",
            "issued": "Apr 6, 2026",
            "credentialId": "J06FIEUX4Z82",
            "skills": [],
            "image": "/assets/credentials/j06fieux4z82.webp",
            "fileUrl": "/assets/credentials/j06fieux4z82.pdf",
            "credentialUrl": "https://coursera.org/verify/J06FIEUX4Z82"
      },
      {
            "id": "nx0f7jhb15v5",
            "kind": "course",
            "title": "Tools for Data Science",
            "issuer": "IBM",
            "issued": "Apr 1, 2026",
            "credentialId": "NX0F7JHB15V5",
            "skills": [],
            "image": "/assets/credentials/nx0f7jhb15v5.webp",
            "fileUrl": "/assets/credentials/nx0f7jhb15v5.pdf",
            "credentialUrl": "https://coursera.org/verify/NX0F7JHB15V5"
      },
      {
            "id": "61vke4ix3dd9",
            "kind": "course",
            "title": "What is Data Science?",
            "issuer": "IBM",
            "issued": "Feb 1, 2026",
            "credentialId": "61VKE4IX3DD9",
            "skills": [],
            "image": "/assets/credentials/61vke4ix3dd9.webp",
            "fileUrl": "/assets/credentials/61vke4ix3dd9.pdf",
            "credentialUrl": "https://coursera.org/verify/61VKE4IX3DD9"
      },
      {
            "id": "kaggle-intro-machine-learning",
            "kind": "course",
            "title": "Intro to Machine Learning",
            "issuer": "Kaggle",
            "issued": "Jan 1, 2026",
            "skills": [],
            "image": "/assets/credentials/kaggle-intro-machine-learning.webp",
            "fileUrl": "/assets/credentials/kaggle-intro-machine-learning.png"
      }
] as Certification[],
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    description: 'This page may have moved. Explore the portfolio to find your next stop.',
    backLabel: 'Back to home',
  },
  cta: {
    title: "Let's Build Something\nMeaningful Together.",
    hireLabel: 'Get in Touch',
  },
  contact: {
    title: "Let's Connect",
    description: "I'm always open to discussing interesting ideas, collaborating on projects, and connecting with people who share an interest in AI and technology. Feel free to reach out.",
    emailLabel: 'shafwan.adhi.dwi@gmail.com',
  },
  ui: {
    skipLink: 'Skip to content',
    skillsMotionHint: 'Hover or focus to pause animation.',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navigation: 'Main navigation',
    socialNavigation: 'Social links',
    projectCategories: 'Project categories',
    projectList: 'Selected project results',

  },
}
