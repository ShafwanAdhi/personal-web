/**
 * EDIT THIS FILE TO PERSONALIZE THE ENTIRE WEBSITE.
 * All visible copy, links, image paths, SEO, and accessible labels live here.
 * Images go in public/assets/; reference them as /assets/your-file.webp.
 * Current names, experience, and projects are demonstration data.
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

const technicalGallery: ProjectImage[] = [
  { src: '/assets/analytics.svg', alt: 'Dark analytics workspace with a forecast chart and experiment results', caption: 'Experiment results and model performance.' },
  { src: '/assets/pipeline.svg', alt: 'Connected stages of a data and machine learning pipeline', caption: 'From raw data to a reproducible prediction pipeline.' },
  { src: '/assets/evaluation.svg', alt: 'Model evaluation matrix and comparison of experiment results', caption: 'Comparing experiments and understanding model behavior.' },
]
const designGallery: ProjectImage[] = [
  { src: '/assets/project-preview.svg', alt: 'Teal and white learning-platform interface', caption: 'The main product experience.' },
  { ...technicalGallery[1], caption: 'Planning the product flow and implementation.' },
  { ...technicalGallery[0], caption: 'Exploring product metrics and validation.' },
]

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
    featuredProjectIds: ['demand-forecast', 'vision-inspector', 'autonomous-rover'],
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
    projects: [{
  "id": "demand-forecast",
  "category": "others",
  "title": "Retail Demand Forecast",
  "description": "Turning historical sales into clear, actionable demand predictions.",
  "image": "/assets/analytics.svg",
  "imageAlt": "Forecast chart and model performance workspace",
  "gallery": technicalGallery,
  "year": "2025",
  "role": "Data Scientist",
  "duration": "8 weeks",
  "overview": "An end-to-end forecasting study using a sample retail dataset. The goal was to understand seasonal demand, reduce prediction error, and make model outputs useful for inventory planning. This case study demonstrates a reproducible workflow from exploratory analysis to evaluation.",
  "tools": [
    "Python",
    "Pandas",
    "Scikit-learn",
    "XGBoost",
    "Streamlit"
  ],
  "contributions": [
    {
      "title": "Understand the data",
      "description": "Cleaned transaction records, explored seasonality, and identified missing values and outliers before modeling."
    },
    {
      "title": "Build and compare models",
      "description": "Engineered calendar and lag features, compared a seasonal baseline with gradient boosting, and evaluated with time-based validation."
    },
    {
      "title": "Make results usable",
      "description": "Created an interactive dashboard for exploring forecasts, error distributions, and product-level trends."
    }
  ],
  "achievements": [
    {
      "value": "24%",
      "label": "Lower forecast error",
      "description": "Illustrative improvement against a seasonal baseline on a held-out sample."
    },
    {
      "value": "12k",
      "label": "Records analyzed",
      "description": "Sample sales records cleaned and transformed into modeling features."
    },
    {
      "value": "3",
      "label": "Models compared",
      "description": "Baseline, random forest, and gradient boosting evaluated on identical splits."
    }
  ]
},
{
  "id": "vision-inspector",
  "category": "ai-ml",
  "title": "AI Visual Inspection",
  "description": "A computer vision prototype that spots defects on the production line.",
  "image": "/assets/pipeline.svg",
  "imageAlt": "Connected machine learning training and inference stages",
  "gallery": technicalGallery,
  "year": "2025",
  "role": "ML Engineer",
  "duration": "6 weeks",
  "overview": "A prototype visual inspection system using a sample image dataset. The project explores how a lightweight neural network can identify surface defects and provide useful explanations for an operator. The focus is on balanced evaluation, dependable inference, and an approachable review workflow.",
  "tools": [
    "Python",
    "PyTorch",
    "OpenCV",
    "FastAPI",
    "Docker"
  ],
  "contributions": [
    {
      "title": "Prepare an image dataset",
      "description": "Organized sample images, designed augmentations, and separated training and evaluation data to prevent leakage."
    },
    {
      "title": "Train a vision model",
      "description": "Fine-tuned a compact classifier and tracked precision, recall, and failure cases across experiments."
    },
    {
      "title": "Connect inference to a workflow",
      "description": "Packaged a prediction endpoint and built an inspection view with confidence scores and review history."
    }
  ],
  "achievements": [
    {
      "value": "94%",
      "label": "Validation accuracy",
      "description": "Illustrative result on a balanced demonstration dataset."
    },
    {
      "value": "80ms",
      "label": "Inference time",
      "description": "Sample per-image latency measured in the local prototype."
    },
    {
      "value": "5",
      "label": "Defect categories",
      "description": "A small taxonomy designed for consistent operator review."
    }
  ]
},
{
  "id": "autonomous-rover",
  "category": "software",
  "title": "Autonomous Navigation Rover",
  "description": "A sensor-driven rover that maps its surroundings and finds a safe route.",
  "image": "/assets/robotics.svg",
  "imageAlt": "Autonomous rover and its sensor coverage",
  "gallery": [{ src: "/assets/robotics.svg", alt: "Autonomous rover and its sensor coverage", caption: "The simulated rover and its perception system." }, technicalGallery[1], technicalGallery[0]],
  "year": "2025",
  "role": "Robotics Engineer",
  "duration": "10 weeks",
  "overview": "A simulated autonomous rover built to explore perception, route planning, and control. The project combines sensor inputs with a modular navigation pipeline, then validates behavior in repeatable test environments before a hardware prototype.",
  "tools": [
    "ROS 2",
    "Python",
    "C++",
    "Gazebo",
    "OpenCV"
  ],
  "contributions": [
    {
      "title": "Design the navigation pipeline",
      "description": "Connected sensing, localization, planning, and control using independent ROS nodes."
    },
    {
      "title": "Build and tune the controller",
      "description": "Implemented waypoint tracking and obstacle avoidance, then tuned motion in simulation."
    },
    {
      "title": "Test realistic scenarios",
      "description": "Designed repeatable routes with varied obstacles and logged completion rate, path length, and recovery behavior."
    }
  ],
  "achievements": [
    {
      "value": "18/20",
      "label": "Routes completed",
      "description": "Illustrative outcome across simulated navigation scenarios."
    },
    {
      "value": "360°",
      "label": "Obstacle awareness",
      "description": "Sensor coverage used to inform local route planning."
    },
    {
      "value": "4",
      "label": "Modular ROS nodes",
      "description": "Separate perception, localization, planning, and control components."
    }
  ]
},
{
  "id": "web-01",
  "category": "software",
  "title": "Indonesiaku Landing Page",
  "role": "UI/UX Designer",
  "description": "An approachable learning experience, from discovery to measurable progress.",
  "image": "/assets/project-preview.svg",
  "imageAlt": "Teal and white learning-platform design",
  "gallery": designGallery,
  "year": "2024",
  "duration": "6 weeks",
  "overview": "A demonstration learning-platform project that makes course discovery simple and gives learners a clear path to progress. The work combines user research, a cohesive interface, and a practical delivery plan. This sample is ready to replace with your own case study.",
  "tools": [
    "Figma",
    "FigJam",
    "Notion"
  ],
  "contributions": [
    {
      "title": "Find the right problem",
      "description": "Mapped the learning journey, reviewed common friction points, and established a focused project brief."
    },
    {
      "title": "Create the experience",
      "description": "Built a reusable visual system and tested navigation, course discovery, and responsive layouts."
    },
    {
      "title": "Deliver and iterate",
      "description": "Documented decisions, coordinated handoff, and refined the experience from sample usability feedback."
    }
  ],
  "achievements": [
    {
      "value": "3",
      "label": "Core journeys",
      "description": "Course discovery, enrollment, and learning progress explored."
    },
    {
      "value": "12",
      "label": "Reusable components",
      "description": "A small, consistent foundation for future product work."
    },
    {
      "value": "100%",
      "label": "Responsive coverage",
      "description": "Sample layouts prepared for mobile, tablet, and desktop."
    }
  ]
},
{
  "id": "mobile-01",
  "category": "software",
  "title": "Indonesiaku Mobile App",
  "role": "Product Designer",
  "description": "An approachable learning experience, from discovery to measurable progress.",
  "image": "/assets/project-preview.svg",
  "imageAlt": "Teal and white learning-platform design",
  "gallery": designGallery,
  "year": "2024",
  "duration": "6 weeks",
  "overview": "A demonstration learning-platform project that makes course discovery simple and gives learners a clear path to progress. The work combines user research, a cohesive interface, and a practical delivery plan. This sample is ready to replace with your own case study.",
  "tools": [
    "Figma",
    "FigJam",
    "Notion"
  ],
  "contributions": [
    {
      "title": "Find the right problem",
      "description": "Mapped the learning journey, reviewed common friction points, and established a focused project brief."
    },
    {
      "title": "Create the experience",
      "description": "Built a reusable visual system and tested navigation, course discovery, and responsive layouts."
    },
    {
      "title": "Deliver and iterate",
      "description": "Documented decisions, coordinated handoff, and refined the experience from sample usability feedback."
    }
  ],
  "achievements": [
    {
      "value": "3",
      "label": "Core journeys",
      "description": "Course discovery, enrollment, and learning progress explored."
    },
    {
      "value": "12",
      "label": "Reusable components",
      "description": "A small, consistent foundation for future product work."
    },
    {
      "value": "100%",
      "label": "Responsive coverage",
      "description": "Sample layouts prepared for mobile, tablet, and desktop."
    }
  ]
},
{
  "id": "website-01",
  "category": "software",
  "title": "Indonesiaku Website",
  "role": "Full Stack Developer",
  "description": "An approachable learning experience, from discovery to measurable progress.",
  "image": "/assets/project-preview.svg",
  "imageAlt": "Teal and white learning-platform design",
  "gallery": designGallery,
  "year": "2024",
  "duration": "6 weeks",
  "overview": "A demonstration learning-platform project that makes course discovery simple and gives learners a clear path to progress. The work combines user research, a cohesive interface, and a practical delivery plan. This sample is ready to replace with your own case study.",
  "tools": [
    "React",
    "TypeScript",
    "CSS"
  ],
  "contributions": [
    {
      "title": "Find the right problem",
      "description": "Mapped the learning journey, reviewed common friction points, and established a focused project brief."
    },
    {
      "title": "Create the experience",
      "description": "Built a reusable visual system and tested navigation, course discovery, and responsive layouts."
    },
    {
      "title": "Deliver and iterate",
      "description": "Documented decisions, coordinated handoff, and refined the experience from sample usability feedback."
    }
  ],
  "achievements": [
    {
      "value": "3",
      "label": "Core journeys",
      "description": "Course discovery, enrollment, and learning progress explored."
    },
    {
      "value": "12",
      "label": "Reusable components",
      "description": "A small, consistent foundation for future product work."
    },
    {
      "value": "100%",
      "label": "Responsive coverage",
      "description": "Sample layouts prepared for mobile, tablet, and desktop."
    }
  ]
},
{
  "id": "management-01",
  "category": "software",
  "title": "Indonesiaku Product Launch",
  "role": "Project Manager",
  "description": "An approachable learning experience, from discovery to measurable progress.",
  "image": "/assets/project-preview.svg",
  "imageAlt": "Teal and white learning-platform design",
  "gallery": designGallery,
  "year": "2024",
  "duration": "6 weeks",
  "overview": "A demonstration learning-platform project that makes course discovery simple and gives learners a clear path to progress. The work combines user research, a cohesive interface, and a practical delivery plan. This sample is ready to replace with your own case study.",
  "tools": [
    "Figma",
    "FigJam",
    "Notion"
  ],
  "contributions": [
    {
      "title": "Find the right problem",
      "description": "Mapped the learning journey, reviewed common friction points, and established a focused project brief."
    },
    {
      "title": "Create the experience",
      "description": "Built a reusable visual system and tested navigation, course discovery, and responsive layouts."
    },
    {
      "title": "Deliver and iterate",
      "description": "Documented decisions, coordinated handoff, and refined the experience from sample usability feedback."
    }
  ],
  "achievements": [
    {
      "value": "3",
      "label": "Core journeys",
      "description": "Course discovery, enrollment, and learning progress explored."
    },
    {
      "value": "12",
      "label": "Reusable components",
      "description": "A small, consistent foundation for future product work."
    },
    {
      "value": "100%",
      "label": "Responsive coverage",
      "description": "Sample layouts prepared for mobile, tablet, and desktop."
    }
  ]
}] satisfies Project[],
  },
  projectDetail: {
    sectionNumbers: ['01', '02', '03'],
    backLabel: 'Back to projects',
    eyebrow: 'Selected work / Case study',
    demoNote: 'Demo case study. All results and metrics are illustrative.',
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
