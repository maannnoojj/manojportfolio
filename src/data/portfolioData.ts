import { Project, ExperienceItem, Certification, SkillCategory, Education } from '../types';

export const personalInfo = {
  name: "Manoj M S",
  title: "Full Stack, AI Developer & Cybersecurity Student",
  subtitles: [
    "Full Stack Web Developer",
    "AI & Machine Learning Developer",
    "Cybersecurity Student & Analyst",
    "Python & Cloud Systems Engineer"
  ],
  email: "iammanojms2006@gmail.com",
  phone: "9241357135",
  linkedin: "https://linkedin.com/in/manojsrinivasanms",
  github: "https://github.com/manojsrinivasanms",
  location: "SNS College of Engineering • Anna University, India",
  bio: "Dedicated Computer Science and Engineering student specializing in Full Stack Web Development, Artificial Intelligence, Machine Learning, and Cybersecurity. Passionate about building secure, intelligent, end-to-end applications that deliver real-world impact.",
  aboutDetailed: "I am a Computer Science Engineering student (2024–2028) at SNS College of Engineering, affiliated with Anna University, India with an 8.0 CGPA. My passion lies at the intersection of Full Stack Web Development, Artificial Intelligence, Machine Learning, and Cybersecurity. I specialize in building intelligent automation solutions, OCR digitization tools, secure API systems, and web applications using React, Node.js, Express, Python, Google Gemini API, and OpenAI.",
  cgpa: "8.0 / 10",
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Certifications", value: "10+" },
    { label: "Hackathons", value: "5+" },
    { label: "Internships", value: "4" }
  ],
  languages: [
    { name: "Tamil", level: "Native" },
    { name: "Kannada", level: "Fluent" },
    { name: "English", level: "Intermediate" },
    { name: "Hindi", level: "Intermediate" }
  ]
};

export const educationList: Education[] = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "SNS College of Engineering",
    period: "2024 - 2028",
    grade: "CGPA: 8.0 / 10 (80%)",
    details: "Affiliated to Anna University, India. Core subjects: Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Database Management, Computer Networks, Operating Systems, Web Security."
  },
  {
    degree: "Bachelor of Engineering (Affiliation)",
    institution: "Anna University, India",
    period: "2024 - 2028",
    grade: "Premier Technical University",
    details: "State technical university curriculum covering advanced computer engineering, software system design, and algorithmic problem-solving."
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "codex-technologies",
    role: "Software & AI Engineering Intern",
    company: "Codex Technologies",
    period: "July 2026",
    location: "Remote",
    type: "Internship",
    description: "Developed AI automation algorithms, integrated Gemini API features into enterprise workflows, and optimized back-end data pipelines.",
    responsibilities: [
      "Engineered generative AI workflows using Gemini API and Python backend services.",
      "Optimized database queries and API response times for data-heavy application routes.",
      "Collaborated on building secure cloud automation scripts and automated testing modules."
    ],
    skills: ["Python", "Google Gemini API", "AI Automation", "REST APIs", "Node.js"]
  },
  {
    id: "thirenex",
    role: "Cyber Security Intern",
    company: "Thirenex",
    period: "June 2026",
    location: "Remote",
    type: "Internship",
    description: "Specialized in cybersecurity protocols, web application vulnerability analysis, threat detection, and secure system auditing.",
    responsibilities: [
      "Conducted web application security audits and vulnerability risk assessments.",
      "Analyzed network logs, HTTP requests, and encryption standards for security compliance.",
      "Implemented OWASP Top 10 mitigation strategies including XSS and SQL injection prevention."
    ],
    skills: ["Cybersecurity", "Network Security", "OWASP Top 10", "Linux", "Web Security"]
  },
  {
    id: "prodigy-infotech",
    role: "Full Stack Web Development Intern",
    company: "Prodigy InfoTech",
    period: "December 2025",
    location: "Remote",
    type: "Internship",
    description: "Engineered scalable full-stack web applications, custom API endpoints, and responsive client-side UI systems.",
    responsibilities: [
      "Built interactive full-stack web modules using React, Node.js, and Express.",
      "Created structured REST API interfaces for dynamic front-end data handling.",
      "Designed responsive layouts with Tailwind CSS, ensuring mobile-first cross-browser support."
    ],
    skills: ["React", "Node.js", "Express", "JavaScript", "Tailwind CSS", "REST API"]
  },
  {
    id: "internpe",
    role: "Web Development Intern",
    company: "InternPE",
    period: "July 2025",
    location: "Remote",
    type: "Internship",
    description: "Developed modern front-end interfaces, responsive landing pages, and interactive web tools adhering to web standards.",
    responsibilities: [
      "Built responsive, mobile-optimized user interface components and landing pages.",
      "Utilized modern JavaScript ES6+ features for dynamic DOM updates and state management.",
      "Improved client-side rendering efficiency and cross-device performance."
    ],
    skills: ["Web Development", "HTML5", "CSS3", "JavaScript", "React"]
  }
];

export const projectsList: Project[] = [
  {
    id: "lilly-ai",
    title: "Lilly AI Chatbot",
    subtitle: "AI Healthcare Assistant",
    description: "Intelligent healthcare conversational assistant providing patient guidance, symptomatic breakdown, and medical Q&A with natural interaction.",
    longDescription: "Lilly AI is a specialized conversational healthcare assistant engineered to assist users with health queries, lifestyle recommendations, and symptom checks. Built with React and Node.js, it leverages OpenAI's API to deliver empathetic, context-aware responses while strictly adhering to medical disclaimer protocols.",
    category: "AI & ML",
    tags: ["React", "OpenAI", "Node.js", "Healthcare AI", "Tailwind CSS"],
    features: [
      "Intelligent healthcare conversation flow and empathetic dialogue",
      "Symptom contextualization with disclaimer safeguards",
      "Instant response streaming with low-latency backend proxy",
      "Clean, calm UI designed for emergency clarity"
    ],
    githubUrl: "https://github.com/maannnoojj/lillyaidomain.git",
    demoUrl: "https://lillyaidomain.lovable.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    metrics: "200ms avg response • 98% intent accuracy"
  },
  {
    id: "dex-ai",
    title: "Dex AI Chatbot",
    subtitle: "Productivity & Automation Assistant",
    description: "AI-powered conversational assistant built for productivity, workflow automation, and natural high-throughput task assistance.",
    longDescription: "Dex AI is a high-performance productivity companion built using Google Gemini API and React. It serves as an intelligent agent for summarizing documents, drafting code, organizing schedules, and executing step-by-step reasoning for technical tasks.",
    category: "AI & ML",
    tags: ["React", "Gemini API", "JavaScript", "Automation", "Tailwind"],
    features: [
      "Powered by Google Gemini API for fast multi-turn reasoning",
      "Smart task breakdown and automated draft generation",
      "Code snippet formatting with syntax highlighting",
      "Persistent chat history and prompt preset library"
    ],
    githubUrl: "https://github.com/Vikramg007/dexaibot01.git",
    demoUrl: "http://dexaibot01-main.vercel.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    metrics: "Gemini 1.5 Pro integration • Instant streaming"
  },
  {
    id: "smart-notes",
    title: "Handwritten Notes to Smart Notes",
    subtitle: "OCR Digitization & Note Organizer",
    description: "OCR-powered handwritten note digitization system that converts raw camera uploads into structured, searchable digital documents.",
    longDescription: "Smart Notes bridges the gap between traditional paper note-taking and digital knowledge bases. Users capture or upload images of handwritten notebooks, which pass through an advanced OCR and NLP engine to format structured text, generate summaries, and enable instant full-text search.",
    category: "AI & ML",
    tags: ["Python", "OCR", "NLP", "Machine Learning", "React"],
    features: [
      "High-accuracy Optical Character Recognition for cursive & block handwriting",
      "Automatic markdown formatting and bullet point abstraction",
      "Key concept extraction and automated study card generation",
      "Searchable document store with tagging system"
    ],
    githubUrl: "https://github.com/maannnoojj/textify.git",
    demoUrl: "https://benevolent-axolotl-efa12d.netlify.app/",
    featured: true,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
    metrics: "92%+ OCR accuracy on handwriting"
  },
  {
    id: "ai-buddy",
    title: "AI Buddy",
    subtitle: "Time Management Assistant",
    description: "AI-driven schedule optimizer and habit assistant helping users maximize daily focus, track goals, and avoid burnout.",
    longDescription: "AI Buddy is a personal productivity assistant designed to turn chaotic task lists into optimal daily routines. Using predictive time-boxing and AI insights, it analyzes workload pressure, schedules micro-breaks, and sends smart ambient reminders.",
    category: "AI & ML",
    tags: ["React", "TypeScript", "Node.js", "AI Scheduling", "Tailwind CSS"],
    features: [
      "Dynamic task scheduling with priority matrix algorithms",
      "Smart adaptive reminders based on energy levels and focus blocks",
      "Productivity analytics and week-over-week completion insights",
      "Calendar syncing & quick voice command capture"
    ],
    githubUrl: "https://github.com/maannnoojj/JARVIS.git",
    demoUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    metrics: "40% increase in daily task completion"
  },
  {
    id: "farmer-query",
    title: "Farmer Query Assistant",
    subtitle: "Agricultural Advisory Chatbot",
    description: "Multilingual AI assistant providing localized crop recommendations, pest diagnosis, weather insights, and agricultural guidance.",
    longDescription: "Built specifically to empower agrarian communities, the Farmer Query Assistant delivers critical agricultural knowledge in regional languages. It assists farmers with soil health advice, pest identification, government scheme information, and real-time market price updates.",
    category: "AI & ML",
    tags: ["Python", "NLP", "Multilingual AI", "React", "OpenAI"],
    features: [
      "Multilingual natural language translation and speech input support",
      "Crop disease symptom analyzer and remedy suggestions",
      "Real-time weather alerts and seasonal planting advice",
      "Offline-first caching for remote agricultural zones"
    ],
    githubUrl: "https://github.com/maannnoojj/Agriassistai.git",
    demoUrl: "https://agri-grow-sense-40-main.vercel.app/",
    featured: false,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    metrics: "Supports 4 regional Indian languages"
  },
  {
    id: "collab-campus",
    title: "Collab Campus",
    subtitle: "Student Collaboration Platform",
    description: "AI-augmented peer collaboration hub for university students to share resources, coordinate study groups, and showcase projects.",
    longDescription: "Collab Campus connects engineering students across departments. It uses AI algorithms to match team members based on complementary skill sets for hackathons and academic projects, while providing real-time code sharing and discussion channels.",
    category: "Web Apps",
    tags: ["React", "Node.js", "Supabase", "Tailwind", "WebSockets"],
    features: [
      "AI skill-matching algorithm for hackathons and group projects",
      "Integrated resource repository with peer rating system",
      "Real-time chat, study group lobbies, and event notifications",
      "Campus project showcase with upvoting & mentor feedback"
    ],
    githubUrl: "https://github.com/manojsrinivasanms/collab-campus",
    demoUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    metrics: "500+ student group matches"
  },
  {
    id: "vehicle-management",
    title: "Vehicle Management System",
    subtitle: "Sensor-Based Monitoring System",
    description: "IoT and sensor-integrated telemetry system for real-time tracking of vehicle diagnostics, engine metrics, and route safety.",
    longDescription: "A comprehensive hardware-to-software telemetry platform built to monitor vehicle health in real time. It processes sensor signals (temperature, speed, fuel, GPS) and alerts operators of potential mechanical faults or hazardous driving behaviors.",
    category: "IoT / Sensors",
    tags: ["C++", "C", "Microcontrollers", "Sensors", "Dashboard"],
    features: [
      "Real-time sensor telemetry acquisition (Speed, Temp, Oil Pressure)",
      "Threshold alert notifications for emergency mechanical failures",
      "GPS tracking and route optimization data logging",
      "Interactive status dashboard with graphical diagnostics"
    ],
    githubUrl: "https://github.com/manojsrinivasanms/vehicle-management-system",
    demoUrl: "#",
    featured: false,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    metrics: "Sub-second sensor latency"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Java", level: 90, icon: "Coffee", description: "OOP, Data Structures, Multithreading, Algorithms" },
      { name: "Python", level: 88, icon: "Py", description: "NumPy, Pandas, PyTorch, Scripting, Automation" },
      { name: "C", level: 85, icon: "FileCode", description: "Memory Management, Pointers, Embedded C" },
      { name: "C++", level: 82, icon: "Cpu", description: "STL, System Design, High-Performance Logic" }
    ]
  },
  {
    category: "Web Development",
    iconName: "Globe",
    skills: [
      { name: "React", level: 88, icon: "Component", description: "Hooks, Context, Custom UI, Motion" },
      { name: "Tailwind CSS", level: 92, icon: "Palette", description: "Responsive layouts, Glassmorphism, Modern UI" },
      { name: "JavaScript", level: 86, icon: "Braces", description: "ES6+, Async/Await, DOM manipulation" },
      { name: "HTML & CSS", level: 95, icon: "Layout", description: "Semantic markup, Flexbox, Grid, Animations" }
    ]
  },
  {
    category: "AI & Machine Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", level: 85, icon: "Brain", description: "Supervised & Unsupervised Learning, Regression" },
      { name: "Deep Learning", level: 80, icon: "Layers", description: "Neural Networks, Model Training, Fine-tuning" },
      { name: "NLP", level: 84, icon: "MessageSquareText", description: "Text Tokenization, Intent Analysis, Embeddings" },
      { name: "OCR", level: 86, icon: "ScanText", description: "Tesseract, Image Preprocessing, Text Extraction" },
      { name: "OpenAI API", level: 90, icon: "Sparkles", description: "Prompt Engineering, Function Calling, Assistants" },
      { name: "Google Gemini API", level: 90, icon: "Zap", description: "Multi-modal AI, Multilingual reasoning, Streaming" }
    ]
  },
  {
    category: "Cybersecurity",
    iconName: "ShieldCheck",
    skills: [
      { name: "Network Security", level: 78, icon: "Network", description: "TCP/IP, Wireshark, Packet Analysis" },
      { name: "Linux Administration", level: 84, icon: "Terminal", description: "Bash Scripting, Permissions, File Systems" },
      { name: "OWASP Top 10 Basics", level: 80, icon: "Lock", description: "XSS, SQL Injection prevention, Web Security" },
      { name: "TryHackMe", level: 82, icon: "Target", description: "CTF Challenges, Penetration Testing Labs" }
    ]
  },
  {
    category: "Databases",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 85, icon: "Table", description: "Relational Queries, Joins, Schema Design" },
      { name: "SQLite", level: 88, icon: "HardDrive", description: "Lightweight local DB, Embedded storage" },
      { name: "Supabase", level: 82, icon: "Cloud", description: "PostgreSQL, Realtime DB, Auth integration" }
    ]
  },
  {
    category: "Tools & Platforms",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch", description: "Version Control, Branching, CI/CD" },
      { name: "VS Code", level: 95, icon: "Laptop", description: "Primary IDE, Extensions, Debugging" },
      { name: "Vercel & Netlify", level: 88, icon: "Send", description: "Deployment, Serverless functions" },
      { name: "Figma", level: 80, icon: "Figma", description: "UI/UX Prototyping, Wireframing" }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "azure-ai-cert",
    title: "Microsoft Azure AI Certification",
    issuer: "Microsoft",
    date: "Issued 2024",
    credentialId: "MSFT-AZ900-AI-88392",
    category: "Certification",
    description: "Certified proficiency in Azure AI Fundamentals, Machine Learning workload management, Cognitive Services, and cloud-native AI solution deployment.",
    keyHighlights: [
      "Mastery of Microsoft Azure Cognitive Services (Vision, Speech, Language)",
      "Understanding responsible AI principles and enterprise governance",
      "Model deployment on Azure ML studio and automated pipeline triggers",
      "Integration of natural language bots and custom vision models"
    ],
    skills: ["Azure AI", "Cognitive Services", "Machine Learning", "Bot Framework", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30"
  },
  {
    id: "databricks-edge-401",
    title: "Digital Edge 401 Certificate",
    issuer: "Databricks",
    date: "Issued 2024",
    credentialId: "DBX-DE401-99201",
    category: "Certification",
    description: "Advanced certification covering Lakehouse architecture, large-scale data engineering workflows, PySpark transformations, and enterprise AI/ML processing pipelines.",
    keyHighlights: [
      "Lakehouse architecture design & Delta Lake optimization",
      "Large-scale distributed data processing using PySpark and SQL",
      "MLflow lifecycle management and automated model tracking",
      "ETL pipeline construction for real-time analytics streaming"
    ],
    skills: ["Databricks", "Apache Spark", "PySpark", "Delta Lake", "MLflow", "Data Engineering"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30"
  },
  {
    id: "prepinsta-10",
    title: "10+ Courses Completed on PrepInsta",
    issuer: "PrepInsta Learning Platform",
    date: "2023 - 2024",
    credentialId: "PREP-ACADEMY-10PLUS",
    category: "Coursework",
    description: "Successfully mastered 10+ advanced technical tracks spanning Algorithms, Data Structures, Java OOP, Competitive Coding, and Quantitative Logic.",
    keyHighlights: [
      "Deep dive into Data Structures & Algorithms (Trees, Graphs, Dynamic Programming)",
      "Java & C++ Object-Oriented Software Architecture",
      "Aptitude, logical reasoning, and algorithmic problem-solving excellence",
      "Systematic competitive coding drills with high accuracy rate"
    ],
    skills: ["Data Structures", "Algorithms", "Java OOP", "C++", "System Architecture"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30"
  },
  {
    id: "cicada-25",
    title: "CICADA'25 Hackathon",
    issuer: "National Technical Fest",
    date: "2025",
    category: "Hackathon",
    description: "Built an innovative AI-driven prototype under intense 24-hour time constraints, demonstrating rapid engineering, clean UI design, and team collaboration.",
    keyHighlights: [
      "Engineered functional AI prototype within strict 24-hour deadline",
      "Integrated real-time language model processing and intuitive dashboard",
      "Presented live live product pitch to hackathon judges and industry leaders",
      "Awarded top track recognition for innovation and software architecture"
    ],
    skills: ["Rapid Prototyping", "Full Stack AI", "React", "Node.js", "Pitch Deck Presentation"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30"
  },
  {
    id: "code-oclock",
    title: "Code O'Clock Hackathon",
    issuer: "Engineering Innovation Event",
    date: "2024",
    category: "Hackathon",
    description: "Engineered real-time automated solutions and presented technical pitch deck to industry mentors in timed algorithmic competition.",
    keyHighlights: [
      "Solved complex real-world automation problem statement under time pressure",
      "Developed high-concurrency backend API with responsive frontend",
      "Recognized for clean code structure and robust error handling",
      "Mentored peer participants on state management and API integration"
    ],
    skills: ["Competitive Hackathon", "TypeScript", "REST APIs", "UI Design", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30"
  },
  {
    id: "neoverse-26",
    title: "Neoverse'26 Hackathon",
    issuer: "Next-Gen Tech Summit",
    date: "2026",
    category: "Hackathon",
    description: "Developed and showcased next-generation AI automation and cybersecurity prototypes to an expert panel of senior software architects.",
    keyHighlights: [
      "Designed secure, zero-trust AI workflow prototype",
      "Implemented encrypted data transmission and threat monitoring UI",
      "Received outstanding praise for UI polish and practical domain application",
      "Featured in tech summit project showcase"
    ],
    skills: ["Cybersecurity", "AI Automation", "React", "Threat Analytics", "Full Stack"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    badgeColor: "from-violet-500/20 to-fuchsia-500/20 text-violet-300 border-violet-500/30"
  }
];
