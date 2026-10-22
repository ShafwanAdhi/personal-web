/**
 * EDIT THIS FILE TO PERSONALIZE THE ENTIRE WEBSITE.
 * All visible copy, links, image paths, SEO, and accessible labels live here.
 * Images go in public/assets/; reference them as /assets/your-file.webp.
 * Project content describes Shafwan's work; evaluation descriptions retain their measured scope.
 */

export type SocialIcon = 'gmail' | 'linkedin' | 'github'

export interface ProjectImage { src: string; alt: string; caption: string }
export type ProjectResultKind = 'evaluation' | 'verification' | 'scope' | 'capability'
export interface Project {
  id: string
  websiteUrl?: string
  websiteLabel?: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  galleryLayout?: 'portrait'
  gallery: ProjectImage[]
  year: string
  role: string
  duration: string
  overview: string
  tools: string[]
  contributions: { title: string; description: string }[]
  achievements: { kind: ProjectResultKind; value: string; label: string; description: string }[]
  evaluation?: { methodology: string; limitations: string[] }
  artifacts?: { label: string; href: string }[]
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
  skills: ['LLM Applications', 'Retrieval-Augmented Generation', 'AI Automation', 'Software Engineering'],
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
    featuredProjectIds: ['waspadai', 'sisdas-rag-assistant', 'numora-question-variants'],
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
    "description": "For people facing suspicious messages, I built an evidence-guided AI investigation pipeline and web demo, combining safety rules, retrieved sources, and explicit uncertainty when verification cannot be completed.",
    "image": "/assets/projects/waspadai/learning-app-showcase.webp",
    "imageAlt": "WaspadAI mobile app showcase displaying the verification chat and digital-literacy learning screens.",
    "galleryLayout": "portrait",
    "gallery": [
      {
        "src": "/assets/projects/waspadai/verification-chat.webp",
        "alt": "WaspadAI mobile app: verification chat.",
        "caption": "The mobile home screen accepts messages, images, and documents for verification. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/verification-result.webp",
        "alt": "WaspadAI mobile app: verification result.",
        "caption": "The investigation presents a verdict, supporting reasons, and practical safety guidance. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/screenshot-selection.webp",
        "alt": "WaspadAI mobile app: screenshot area selection.",
        "caption": "Select the relevant area of a screenshot before sending it for analysis. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/floating-assistant.webp",
        "alt": "WaspadAI mobile app: floating verification assistant.",
        "caption": "The floating assistant checks suspicious messages while another application remains open. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/learning-dashboard.webp",
        "alt": "WaspadAI mobile app: learning dashboard.",
        "caption": "Daily missions and learning progress support digital-literacy practice. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/learning-module.webp",
        "alt": "WaspadAI mobile app: digital-literacy learning module.",
        "caption": "Structured lessons explain phishing, OTP safety, and PIN protection. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/quiz-review.webp",
        "alt": "WaspadAI mobile app: quiz answer review.",
        "caption": "Answer reviews explain safe responses to common digital-fraud scenarios. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/community-feed.webp",
        "alt": "WaspadAI mobile app: community connections feed.",
        "caption": "Community posts share suspicious messages and experiences for discussion. Team-built Android product; my scope is the AI service and selected integration work."
      },
      {
        "src": "/assets/projects/waspadai/profile.webp",
        "alt": "WaspadAI mobile app: profile and activity.",
        "caption": "The profile brings verification history, community activity, and learning progress together. Team-built Android product; my scope is the AI service and selected integration work."
      }
    ],
    "year": "2026",
    "role": "AI pipeline & web developer; mobile integration contributor",
    "duration": "September 2026",
    "overview": "Suspicious messages mix factual claims with urgent requests, so a single true-or-false label can miss the immediate risk. I built a pipeline that separates safety signals from factual investigation, retrieves supporting material, and returns reasons and next steps. My scope covers the AI service and web demo, with selected integration work in the team-built Android product.",
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
        "title": "Separate risk from factual certainty",
        "description": "I combined deterministic safety triggers with rulebook-guided investigation so a request for an OTP can prompt protective advice even when the identity or factual claim remains unverified."
      },
      {
        "title": "Ground explanations in retrieved evidence",
        "description": "I connected bounded web search and a versioned investigation corpus, keeping procedural guidance separate from evidence for a verdict. I added conflict handling and conservative fallback responses for missing support."
      },
      {
        "title": "Expose failures instead of trusting valid JSON",
        "description": "I audited offline and live behavior separately. The frozen challenge exposed request-versus-action mistakes; live traces revealed verifier errors hidden behind schema-valid fallback responses."
      },
      {
        "title": "Connect the product through explicit contracts",
        "description": "I built the web/API flow and contributed authenticated Android requests, screenshot cropping, and community-evidence transport. The Android UI shown here belongs to the team product; device end-to-end testing remains pending."
      }
    ],
    "achievements": [
      {
        "kind": "evaluation",
        "value": "76.92%",
        "label": "Critical-signal precision & recall",
        "description": "I measured 10 true positives, 3 false positives and 3 misses on 18 frozen synthetic cases. Six use OCR/vision fixtures; this does not measure real-world verdict accuracy."
      },
      {
        "kind": "verification",
        "value": "92 + 32",
        "label": "Two offline suites passed",
        "description": "I ran 92 AI-service tests and 32 selected product-backend tests with provider or transaction fixtures. These establish bounded behavior, not live provider quality."
      },
      {
        "kind": "evaluation",
        "value": "6 / 6",
        "label": "Live verifier fallbacks",
        "description": "I observed verifier HTTP 404 errors in all six live text cases. The pipeline returned fallbacks; this run is degraded, despite valid response schemas."
      }
    ],
    "websiteUrl": "https://waspadai.shafwan.digital/",
    "websiteLabel": "Visit Demo",
    "evaluation": {
      "methodology": "Evaluated 21 October 2026 against a pinned source snapshot. I froze 18 synthetic challenge cases before scoring; labels came from one AI reviewer familiar with the code. I separately inspected six live text responses and provider traces.",
      "limitations": [
        "The development recall of 53/54 (98.15%) uses 47 partially labelled cases from a different 100-case set; it is not comparable field accuracy.",
        "The new challenge uses fixture OCR/vision output, not image-pixel extraction. Android tests were blocked during dependency resolution; mobile end-to-end behavior remains unverified.",
        "Live factual resolution and citation support need improvement. Cost was not measured."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/waspadai.md"
      }
    ]
  },
  {
    "id": "numora-question-variants",
    "category": "software",
    "title": "Numora Assessment & Question Variants",
    "description": "For assessment authors reviewing mathematics questions, I extended deterministic generators and a review workbench, making seeded variants reproducible while keeping local content coverage separate from publication and psychometric calibration.",
    "image": "/assets/projects/numora-question-variants/student-home.webp",
    "imageAlt": "Numora student dashboard showing daily practice, learning progress, and weekly Tryout access.",
    "gallery": [
      {
        "src": "/assets/projects/numora-question-variants/student-home.webp",
        "alt": "Numora student dashboard interface.",
        "caption": "The student dashboard brings daily practice, learning progress, and weekly Tryout access together. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      },
      {
        "src": "/assets/projects/numora-question-variants/material-catalog.webp",
        "alt": "Numora learning material catalog interface.",
        "caption": "The material catalog organizes mathematics topics into clear learning paths. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      },
      {
        "src": "/assets/projects/numora-question-variants/drill-session.webp",
        "alt": "Numora drill practice session interface.",
        "caption": "The Drill workspace presents mathematics questions, answer choices, and session navigation. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      },
      {
        "src": "/assets/projects/numora-question-variants/weekly-tryout.webp",
        "alt": "Numora weekly tryout interface.",
        "caption": "The Tryout page introduces the weekly mathematics assessment and its available package. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      },
      {
        "src": "/assets/projects/numora-question-variants/admin-question-bank.webp",
        "alt": "Numora admin question bank interface.",
        "caption": "The admin question bank displays question versions and content-management actions. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      },
      {
        "src": "/assets/projects/numora-question-variants/admin-irt-monitoring.webp",
        "alt": "Numora admin irt monitoring interface.",
        "caption": "The IRT monitoring view displays batch status, processing history, and item-parameter records. Team product UI with synthetic demo data and intercepted requests; not evidence of live backend or IRT behavior."
      }
    ],
    "year": "2026",
    "role": "Question generator & review-workbench contributor",
    "duration": "October 2026",
    "overview": "Assessment authors need variants whose answers and explanations remain consistent as parameters change. I extended a team-built deterministic generator and developed review workflows around versioned originals, configurations and seeds. My contribution covers generator content, workbench tooling and integration foundations; the student/admin application shown in the gallery is the wider team product.",
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
        "title": "Version the inputs that determine each variant",
        "description": "I extended mathematics indicators and Tryout generators with source/configuration pins. The same seed and configuration reproduce the same question content; different seeds are not guaranteed to produce unique variants."
      },
      {
        "title": "Make content review a repeatable workflow",
        "description": "I built a browser workbench for comparing originals, generated questions and explanations, supported by mathematical checks and revision audits. I verified one rendered example independently with rational arithmetic instead of reusing the configuration formula."
      },
      {
        "title": "Separate generated content from publication",
        "description": "I contributed variant persistence contracts and integration foundations while preserving preview and DRAFT review boundaries. Local catalogue availability does not imply that content is imported, approved or published in the main application."
      },
      {
        "title": "Keep calibration behind its actual implementation boundary",
        "description": "I contributed assessment-data and IRT orchestration foundations. Scientific IRT calibration and active self-adjustment were not established in the verified service; I present them as unfinished work rather than delivered adaptive learning."
      }
    ],
    "achievements": [
      {
        "kind": "scope",
        "value": "1,078",
        "label": "Generator-backed originals",
        "description": "I recounted the team workspace: 1,180 originals, including 1,078 generator-backed, 86 conceptual and 16 HOLD. These are local catalogue counts, not questions I authored alone."
      },
      {
        "kind": "verification",
        "value": "294 tests",
        "label": "Local generator suite passed",
        "description": "I ran the Python generator/workbench suite on a byte-pinned source copy. The main application and connected service/database workflow were not retested."
      },
      {
        "kind": "verification",
        "value": "16 / 16",
        "label": "Revised families passed audit",
        "description": "I checked 20 distinct candidates per family, 320 total, plus 1,600 additional seed checks using the repository oracle. This does not establish equal difficulty or learning gains."
      }
    ],
    "evaluation": {
      "methodology": "Verified 22 October 2026 against generator revision b9d25a7 and application revision 8d27bed. I recounted the actual loader/catalogue, ran the local suite and audited 16 revised families. I also checked a rendered mean-value question independently using exact rational arithmetic.",
      "limitations": [
        "The 248 conceptual variants marked VERIFIED are local stock, not independent academic approval. Numerical generation is deterministic, not LLM generation.",
        "Connected application acceptance requires the specified Node/pnpm runtime and isolated database/Redis; that run remains pending.",
        "Gallery captures use synthetic UI fixtures and request interception. IRT calibration, deployed self-adjustment and educational outcomes remain unverified."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/numora-question-variants.md"
      }
    ]
  },
  {
    "id": "siparih",
    "websiteUrl": "https://siparih.shafwan.digital",
    "category": "software",
    "title": "SIPARIH",
    "description": "For neighborhood administrators handling resident documents, I implemented private file access and guarded approval decisions, then tested competing workers to check that one request produces one approval and audit record.",
    "image": "/assets/projects/siparih/letter-submission.webp?v=c6723338f2",
    "imageAlt": "SIPARIH introduction-letter submission form with supporting-document upload.",
    "gallery": [
      {
        "src": "/assets/projects/siparih/letter-submission.webp?v=c6723338f2",
        "alt": "SIPARIH introduction-letter submission form with supporting-document upload.",
        "caption": "Residents submit introduction-letter requests and upload the documents required for review."
      },
      {
        "src": "/assets/projects/siparih/resident-management.webp?v=d5ff43a1d7",
        "alt": "SIPARIH resident-management table using demonstration records.",
        "caption": "Resident management organizes demonstration accounts and the information supporting village services."
      },
      {
        "src": "/assets/projects/siparih/submission-history.webp?v=5a2e64953a",
        "alt": "SIPARIH resident submission history with request status and review notes.",
        "caption": "Submission history shows progress, status, and review notes for each resident request."
      },
      {
        "src": "/assets/projects/siparih/incoming-documents.webp?v=1fab5e46dd",
        "alt": "SIPARIH incoming document requests awaiting neighborhood review.",
        "caption": "Neighborhood leaders review incoming requests through a dedicated document queue."
      },
      {
        "src": "/assets/projects/siparih/document-review.webp?v=0aba72c67c",
        "alt": "SIPARIH document review with a PDF preview and approval controls.",
        "caption": "Document review combines the submitted PDF, request details, and review actions in one workspace."
      }
    ],
    "year": "2026",
    "role": "Software developer",
    "duration": "July 2026",
    "overview": "Resident documents need controlled access and a consistent approval decision when requests overlap. I implemented ownership and RW-based access checks, private document delivery, and an approval path that rechecks authorization while holding a database row lock. The gallery uses fictional demonstration records rather than resident data.",
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
        "title": "Authorize before delivering private files",
        "description": "I kept uploads on private storage and checked ownership, role and target RW before preview or download. I connected protected delivery to Nginx internal routing; the VPS configuration itself was not exercised in the local audit."
      },
      {
        "title": "Treat approval as a state transition",
        "description": "I guarded approval with a row lock and a second authorization check so a competing worker cannot approve a document whose state has already changed. I verified the decision and audit-log count together."
      },
      {
        "title": "Handle document conversion and cleanup",
        "description": "I added PDF compatibility and failure cleanup around document processing. The signature is an image overlay, not cryptographic signing; actual Ghostscript normalization remains outside the completed local checks."
      }
    ],
    "achievements": [
      {
        "kind": "verification",
          "value": "One decision",
          "label": "Consistent approval under competing requests",
          "description": "I verified that two competing workers produced exactly one approval and one audit record. The second worker was rejected after the first committed, preserving a single authoritative decision."
      },
      {
        "kind": "verification",
          "value": "818 assertions",
          "label": "82 tests passed in the regression suite",
          "description": "I verified the implementation with 82 passing tests and 818 assertions, supported by a separate MariaDB concurrency check. The suite provides a repeatable baseline for checking future changes."
      },
      {
        "kind": "capability",
          "value": "Private files",
          "label": "Document access follows ownership and responsibility",
          "description": "I kept resident uploads behind authorization checks, with previews and downloads scoped by ownership, role and target RW. Document access is enforced by the application before file delivery."
      }
    ],
    "evaluation": {
        "methodology": "Verified 22 October 2026 against revision 2ee3eeb: 82 tests and 818 assertions passed on SQLite. A separate two-worker scenario passed 12 assertions on MariaDB; an observed repeat confirmed lock contention while retaining one approval and one audit record.",
      "limitations": [
          "These are local engineering checks: the concurrency scenario uses synthetic controller requests, and the standard suite includes framework examples. Production load and comprehensive security testing remain outside this evaluation.",
          "Ghostscript normalization and production Nginx delivery were not exercised. Signatures use an image overlay; the gallery uses fictional demo records."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/siparih.md"
      }
    ]
  },
  {
    "id": "sisdas-rag-assistant",
    "category": "ai-ml",
    "title": "UM RAG Assistant",
    "description": "For students navigating university documents, I built a source-linked campus assistant with structured facts and retrieval, then compared retrieval strategies and inspected failures rather than treating citations as proof.",
    "image": "/assets/projects/sisdas-rag-assistant/chat-home.webp",
    "imageAlt": "UM RAG Assistant chat interface with a centered question field, example prompts, and a subtle document-network background.",
    "gallery": [
      {
        "src": "/assets/projects/sisdas-rag-assistant/chat-home.webp",
        "alt": "Desktop chat interface for searching Universitas Negeri Malang documents.",
        "caption": "The primary chat experience, captured from the live deployment."
      },
      {
        "src": "/assets/projects/sisdas-rag-assistant/grounded-answer.webp",
        "alt": "A generated answer with a process summary and two cited document contexts.",
        "caption": "A structured-fact response showing the answer, routing summary, and source context used by the system."
      },
      {
        "src": "/assets/projects/sisdas-rag-assistant/document-library.webp",
        "alt": "The document library with the academic administration collection expanded.",
        "caption": "The source-document browser exposes the materials used by retrieval and links to the underlying PDFs."
      },
      {
        "src": "/assets/projects/sisdas-rag-assistant/document-domains.webp",
        "alt": "Five collapsed document domains for academic administration, campus services, university profile, finance, and graduation.",
        "caption": "The corpus is organized into five retrieval collections aligned with common campus-information needs."
      }
    ],
    "year": "2026",
    "role": "AI application & full-stack developer",
    "duration": "September 2026",
    "overview": "University answers are spread across policies, forms and dated documents. I built a campus assistant that routes questions to structured facts or document retrieval and presents source links alongside streamed responses. I evaluated the retrieval component separately from answer generation to identify where ranking, routing and incomplete source extraction undermine otherwise plausible answers.",
    "tools": [
      "Python",
      "FastAPI",
      "ChromaDB",
      "Voyage AI embeddings",
      "Groq API",
      "LangChain",
      "Tesseract OCR",
      "React",
      "TanStack Start",
      "TypeScript",
      "Docker",
      "Nginx"
    ],
    "contributions": [
      {
        "title": "Use structured facts for bounded questions",
        "description": "I added a fact-first route for institutional lookups and document retrieval for procedural questions. The local registry contains 38 campus PDFs plus one developer-profile PDF; the latter is not a university source."
      },
      {
        "title": "Compare ranking against a simpler baseline",
        "description": "I compared dense retrieval with the current fallback, heuristic reranking and neighbor expansion on identical frozen embeddings and filters. The simpler baseline found more expected sources on this sample; I retained that result rather than claiming the added complexity improved quality."
      },
      {
        "title": "Make evaluation failures inspectable",
        "description": "I corrected scoring for structured sources and empty labels, preserved per-case errors, and separated any-source retrieval hits from answer completeness. I identified dated-document ranking, truncated facts and missing cross-source details as distinct failure modes."
      },
      {
        "title": "Deliver a source-focused interface",
        "description": "I connected ingestion, a streaming API and a React interface so users can inspect supporting documents. The live audit called the answer pipeline directly; it did not verify browser streaming latency or production reliability."
      }
    ],
    "achievements": [
      {
        "kind": "evaluation",
        "value": "12/13 vs 11/13",
        "label": "Dense vs current source hit@1",
        "description": "I compared the first returned chunk against expected source files on 13 answerable questions. Dense scored 12/13; the current pipeline scored 11/13. This is any-source hit rate, not passage recall."
      },
      {
        "kind": "evaluation",
        "value": "5 / 13",
        "label": "Complete answers in manual review",
        "description": "I found five complete answers among 13 answerable cases using a single-reviewer rubric. The full 16-case run had 13 provider-error cases and 12 extractive fallbacks."
      },
      {
        "kind": "verification",
        "value": "60 tests",
        "label": "Evaluation and API suite passed",
        "description": "I ran 48 existing tests plus 12 evaluation regressions offline. This verifies scorer and API behavior with fixtures, independently of the degraded live run."
      }
    ],
    "websiteUrl": "https://ragcampus.shafwan.digital/",
    "evaluation": {
      "methodology": "Evaluated 21 October 2026 on a frozen 16-question synthetic challenge. The retrieval comparison uses 13 answerable questions, shared query embeddings, gold domain filters and the same corpus. Three questions without source labels are excluded from retrieval scoring, but remain in answer review.",
      "limitations": [
        "Labels and answer review came from one AI reviewer familiar with the corpus; this is not a blind or field benchmark.",
        "Current source hit@3 was 11/13 versus dense 13/13. An any-source hit does not establish that every required source or fact was retrieved.",
        "The live run was degraded by provider errors. Cost and streaming time-to-first-token were not measured; structured facts include extraction defects."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/sisdas-rag-assistant.md"
      }
    ]
  },
  {
    "id": "bonjermgu",
    "category": "software",
    "title": "Bonjermgu Financing Portal",
    "description": "For financing staff and customers comparing vehicle loans, I built a shared simulation engine and role-specific workflows, with explicit pricing rules, reference calculations, and database-backed regression checks for financial edge cases.",
    "image": "/assets/projects/bonjermgu/dashboard-preview.webp",
    "imageAlt": "Bonjermgu administrative dashboard with financing summaries and lending charts.",
    "gallery": [
      {
        "src": "/assets/projects/bonjermgu/admin-dashboard.webp",
        "alt": "Bonjermgu administrative dashboard with financing summaries and lending charts.",
        "caption": "Administrative overview with financing summaries, account-officer activity, and lending charts."
      },
      {
        "src": "/assets/projects/bonjermgu/officer-simulation.webp",
        "alt": "Bonjermgu account-officer financing simulation form.",
        "caption": "Financing simulation brings vehicle information, product rules, insurance, and estimated payments into one workflow."
      },
      {
        "src": "/assets/projects/bonjermgu/application-tracking.webp",
        "alt": "Bonjermgu application-tracking screen with progress stages and document status.",
        "caption": "Application tracking records stage progress and document status across the financing workflow."
      },
      {
        "src": "/assets/projects/bonjermgu/product-configuration.webp",
        "alt": "Bonjermgu product configuration with rates, fees, and insurance parameters.",
        "caption": "Product configuration manages the business rules used by the financing calculations."
      },
      {
        "src": "/assets/projects/bonjermgu/vehicle-master.webp",
        "alt": "Bonjermgu vehicle master-data management screen.",
        "caption": "Vehicle master data supplies the reference values used when preparing financing estimates."
      },
      {
        "src": "/assets/projects/bonjermgu/lending-report.webp",
        "alt": "Bonjermgu lending report grouped by account officer.",
        "caption": "Lending reports summarize account-officer activity and aggregate financing totals."
      }
    ],
    "year": "2026",
    "role": "Full-stack developer",
    "duration": "August 2026",
    "overview": "A financing quote combines rates, insurance, fees and rounding rules that must agree across interfaces. I separated those calculations into a shared PHP domain and connected them to customer and staff workflows. My verification focuses on calculation rules and selected database-backed features; it does not imply lender approval or measured business impact.",
    "tools": [
      "PHP",
      "Laravel 11",
      "Livewire 3",
      "Blade",
      "Alpine.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Pest",
      "Vite"
    ],
    "contributions": [
      {
        "title": "Keep calculation rules outside the interface",
        "description": "I built a shared simulation engine so cash and used-car financing paths can reuse explicit pricing and rounding rules instead of duplicating arithmetic in views."
      },
      {
        "title": "Distinguish cash flows that look similar",
        "description": "I kept commission refunds separate from disbursement and applied published flat rates before effective-rate fallback. I inspected missing-rate behavior rather than assuming every unavailable input fails safely."
      },
      {
        "title": "Check figures against a reference",
        "description": "I tested calculation scenarios and compared a selected used-car example with independent high-precision decimal arithmetic. The reference checks each rounding stage, not just a final total."
      },
      {
        "title": "Connect pricing and vehicle data to workflows",
        "description": "I built role-specific interfaces and configurable data paths, then checked selected pricing, vehicle-master and scenario features on a disposable PostgreSQL database. The vehicle CSV was counted independently of historical extraction notes."
      }
    ],
    "achievements": [
      {
        "kind": "verification",
        "value": "76 tests",
        "label": "714 assertions across two suites",
        "description": "I ran 50 calculation tests with 386 assertions and 26 selected feature tests with 328 assertions. Both passed on isolated fixtures; this is one combined verification summary."
      },
      {
        "kind": "verification",
        "value": "Rp8,953,000",
        "label": "Reference instalment matched",
        "description": "I reproduced the selected S2 scenario with independent Decimal arithmetic, including Rp90,870,000 disbursement and a separate Rp438,000 refund. This is a reference scenario, not a quote guarantee."
      },
      {
        "kind": "scope",
        "value": "26,791",
        "label": "Vehicle source rows",
        "description": "I recounted the CSV as 26,791 rows representing 4,678 models and 26,791 model-year entries. This describes source inventory, not customers or imported production records."
      }
    ],
    "websiteUrl": "https://bonjermgu.com/",
    "evaluation": {
      "methodology": "Verified 22 October 2026 against revision 0ae8dbd. I ran calculation units and three selected feature files on a pinned source copy with a fresh PostgreSQL 16.11 test cluster. A separate Decimal check used precision 40 for the S2 reference calculation.",
      "limitations": [
        "Selected tests do not cover every workflow, lender rule or production deployment. The calculation engine uses PHP floating point with explicit rounding.",
        "Some missing lookups default to zero; do not infer universal fail-closed pricing. The original workbook was not recounted.",
        "No conversion, adoption, processing-time or financing-approval benefit has been measured."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/bonjermgu.md"
      }
    ]
  },
  {
    "id": "sidika",
    "category": "software",
    "title": "SiDiKa Camera Retail Management",
    "description": "For a camera retailer managing stock and sales, I contributed backend account, catalog and QC workflows, correcting reporting filters while preserving the distinction between my changes and the wider team application.",
    "image": "/assets/projects/sidika/dashboard.webp",
    "imageAlt": "SiDiKa dashboard with revenue summaries, transaction charts, and best-selling products.",
    "gallery": [
      {
        "src": "/assets/projects/sidika/dashboard.webp",
        "alt": "SiDiKa dashboard with revenue summaries, transaction charts, and best-selling products.",
        "caption": "Dashboard overview with sales summaries, transaction breakdowns, and product performance."
      },
      {
        "src": "/assets/projects/sidika/products.webp",
        "alt": "SiDiKa product management table with categories, stock, pricing, and row actions.",
        "caption": "Product management with searchable inventory, stock information, and administrative actions."
      },
      {
        "src": "/assets/projects/sidika/add-product.webp",
        "alt": "SiDiKa product creation form with product details, stock, pricing, and image uploads.",
        "caption": "Product creation brings catalog details, pricing, stock, and media into one form."
      },
      {
        "src": "/assets/projects/sidika/sales-catalog.webp",
        "alt": "SiDiKa sales catalog with a product-details dialog open.",
        "caption": "The sales catalog exposes product information before adding items to a transaction."
      },
      {
        "src": "/assets/projects/sidika/sales-transaction.webp",
        "alt": "SiDiKa sales transaction screen with selected products and an order summary.",
        "caption": "Sales entry combines item selection, quantities, pricing, and the transaction total."
      },
      {
        "src": "/assets/projects/sidika/sale-details.webp",
        "alt": "SiDiKa sale details showing purchased items and a financial summary.",
        "caption": "A completed transaction view brings item details and totals together for review."
      },
      {
        "src": "/assets/projects/sidika/purchase.webp",
        "alt": "SiDiKa purchase-entry dialog with supplier and product information.",
        "caption": "Purchase entry records supplier details, product quantities, and purchase costs."
      },
      {
        "src": "/assets/projects/sidika/catalog-settings.webp",
        "alt": "SiDiKa catalog settings with identity, banners, contact details, and partner logos.",
        "caption": "Catalog configuration manages the public identity, banners, and partner content."
      }
    ],
    "year": "2025",
    "role": "Backend developer; team contributor",
    "duration": "November - December 2025",
    "overview": "Retail staff need editable storefront content, navigable quality-control records and reports that reflect their selected filters. I contributed targeted backend changes to the team-built SiDiKa application. My scope is supported by personal commits across account management, catalog persistence, QC navigation and dashboard fixes, rather than ownership of the entire product or its prediction features.",
    "tools": [
      "PHP",
      "Laravel 10",
      "MySQL",
      "Eloquent ORM",
      "Blade",
      "Bootstrap 5",
      "Vite",
      "Cloudflare R2",
      "Laravel Excel",
      "Dompdf"
    ],
    "contributions": [
      {
        "title": "Connect staff accounts to employee records",
        "description": "I linked user accounts to employee identities and implemented management operations with supporting migrations and seed data. I later added pending activation and expiry-based tokens; delivery and revocation still require integration verification."
      },
      {
        "title": "Use one persisted catalog for admin and public pages",
        "description": "I connected catalog settings, banners and partner records to public-page consumers so edited content comes from stored data rather than duplicated page values."
      },
      {
        "title": "Preserve context through archived QC records",
        "description": "I added category filtering, search and sorting while retaining the selected parameters across pagination. I also implemented profile password changes that check the current password and reject reuse."
      },
      {
        "title": "Correct reporting behavior without overstating current scope",
        "description": "I changed an earlier branch comparison from revenue to profit, hid the comparison for a selected branch, and removed the default current-month filter. The team later replaced branch ranking with revenue growth; the historical correction is not the current algorithm."
      }
    ],
    "achievements": [
      {
        "kind": "verification",
        "value": "33 checks",
        "label": "Isolated controller contracts passed",
        "description": "I checked selected password, catalog, QC and calendar behavior using actual methods with explicit framework/model doubles. Twelve PHP files also passed syntax checks; Laravel/SQL integration remains pending."
      },
      {
        "kind": "capability",
        "value": "Persistent state",
        "label": "QC filters and public catalog",
        "description": "I connected stored catalog fields to public pages and retained QC search/category/sort state across pagination. These are scoped backend capabilities, not measured productivity gains."
      }
    ],
    "websiteUrl": "",
    "evaluation": {
      "methodology": "Reviewed 22 October 2026 against revision 9c1890b and five personal commits from November–December 2025. I traced the before/after changes and ran 33 isolated contract assertions using real controller methods with explicit doubles.",
      "limitations": [
        "No Laravel vendor installation was available. SQL, validator enforcement, generated pagination URLs, middleware, uploads and email were not exercised.",
        "Account recovery and input-validation findings remain open; the checks do not establish authentication readiness or a comprehensive security audit.",
        "The gallery shows the team application. I do not claim authorship of the full product or its ML features."
      ]
    },
    "artifacts": [
      {
        "label": "Read the technical verification report",
        "href": "/reports/projects/sidika.md"
      }
    ]
  }
] satisfies Project[],
  },
  projectDetail: {
    websiteLabel: 'Visit Website',
    sectionNumbers: ['01', '02', '03'],
    backLabel: 'Back to projects',
    eyebrow: 'Selected work / Case study',
    overviewTitle: 'Problem & Approach',
    contributionsTitle: 'Key Decisions & Contributions',
    achievementsTitle: 'Results & Evaluation',
    evaluationTitle: 'Methodology & Limitations',
    resourcesTitle: 'Technical Resources',
    resultKinds: { evaluation: 'Quality Evaluation', verification: 'Engineering Verification', scope: 'Project Scope', capability: 'Delivered Capability' },
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
