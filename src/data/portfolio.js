// ─── Projects ───
export const projects = [
    {
        id: 1,
        title: "PokeCards",
        description: "A Java-based card game project.",
        tech: ["Java"],
        category: "GAME",
        link: "https://github.com/ahmadxhashmi/PokeCards",
        featured: true,
    },
    {
        id: 2,
        title: "Handwritten Digits Recognition",
        description: "Digit recognition using MNIST dataset with Python and machine learning.",
        tech: ["Python", "TensorFlow", "MNIST"],
        category: "AI / ML",
        link: "https://github.com/ahmadxhashmi/Hand‑written‑digits‑recognition‑using‑MNIST‑dataset",
        featured: true,
    },
    {
        id: 3,
        title: "Calculator",
        description: "A simple C++ calculator supporting basic arithmetic operations.",
        tech: ["Dart","C++"],
        category: "DESKTOP APP",
        link: "https://github.com/ahmadxhashmi/calculator",
        featured: true,
    },
    {
        id: 4,
        title: "Lottery App",
        description: "C++ project simulating lottery number generation and checks.",
        tech: ["Dart","C++"],
        category: "DESKTOP APP",
        link: "https://github.com/ahmadxhashmi/Lottery‑App‑",
        featured: true,
    },
    {
        id: 5,
        title: "Multi-Role Based Login System",
        description: "C++ login system with multiple roles and authentication logic.",
        tech: ["Dart","C++"],
        category: "SECURITY / SYSTEM",
        link: "https://github.com/ahmadxhashmi/Multi‑Role‑Based‑Login‑System",
        featured: true,
    },
];

// ─── All Projects for count ───
export const allProjects = [
    ...projects,
    { id: 6, title: "Other GitHub Projects", link: "https://github.com/ahmadxhashmi" },
];

// ─── Skills / Stack ───
export const skills = [
    "C++", "Java", "Python", "Flutter", "Dart",
    "HTML/CSS", "JavaScript", "Node.js", "MongoDB", "SQL"
];

export const stack = [
    { name: "C++", proficiency: 95, category: "Desktop & Algorithms" },
    { name: "Python", proficiency: 90, category: "AI / ML" },
    { name: "Java", proficiency: 85, category: "Game & Desktop" },
    { name: "Flutter & Dart", proficiency: 80, category: "Mobile Development" },
    { name: "Web & JS", proficiency: 75, category: "Frontend / Backend" },
];

// ─── Experience ───
export const experience = [
    {
        company: "Freelance & Personal Projects",
        role: "Developer",
        period: "2023 – Present",
        description: "Building AI, desktop, and web projects, contributing to personal and open-source repositories on GitHub.",
    },
];

// ─── Services ───
export const services = [
    {
        title: "Desktop & Console Apps",
        description: "C++ and Java based desktop applications and command-line tools.",
        price: "$1,000",
        features: ["C++ Projects", "Java Projects", "Console Utilities"],
        featured: true,
    },
    {
        title: "AI / ML Solutions",
        description: "Python-based projects using AI, ML, and deep learning frameworks.",
        price: "$2,000",
        features: ["MNIST Digit Recognition", "Data Processing Pipelines"],
    },
    {
        title: "Mobile Development",
        description: "Cross-platform apps using Flutter & Dart.",
        price: "$2,500",
        features: ["UI/UX Design", "API Integration", "Notifications"],
    },
];

// ─── Process Steps ───
export const processSteps = [
    {
        number: "01",
        title: "Project Planning",
        description: "Define requirements, scope, and technologies for each project.",
        bullets: ["Requirement Analysis", "Tech Stack Selection", "Timeline Planning"],
    },
    {
        number: "02",
        title: "Development",
        description: "Implement projects in C++, Python, Java, or Flutter.",
        bullets: ["Code Implementation", "Testing & Debugging", "Documentation"],
    },
    {
        number: "03",
        title: "Deployment & Sharing",
        description: "Publish projects to GitHub and provide access for review and collaboration.",
        bullets: ["GitHub Repository Setup", "Version Control", "Project Sharing"],
    },
];

// ─── FAQ ───
export const faqItems = [
    {
        question: "Where can I find your projects?",
        answer: "All my public projects are available on my GitHub profile: https://github.com/ahmadxhashmi",
    },
    {
        question: "What languages and tech do you use?",
        answer: "I work mainly with C++, Java, Python, Flutter/Dart, and web technologies like HTML/CSS and JavaScript.",
    },
];

// ─── Stats ───
export const stats = [
    { number: "2+", label: "Years of Development" },
    { number: "10+", label: "GitHub Repositories" },
    { number: "5+", label: "Featured Projects" },
    { number: "4+", label: "Programming Languages Used" },
];