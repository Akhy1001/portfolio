export const personalInfo = {
  name: "Anas",
  username: "Akhy1001",
  title: "Développeur Web & Applications",
  subtitle: "TypeScript • Next.js • React • Swift • C++",
  tagline: "À la recherche d'une alternance en développement Web & Applications. Je conçois des applications web modernes, des outils de productivité réactifs et des logiciels haut de gamme.",
  bio: "Passionné par le développement d'applications performantes et l'architecture logicielle. Expérimenté dans l'écosystème TypeScript/Next.js/React pour le Web, Swift/React Native pour le Mobile, et C++/Qt pour les systèmes réseau.",
  location: "France / Remote",
  availability: "À la recherche d'une alternance",
  yearsExperience: "Bachelor 3iL",
  completedProjects: "15+",
  satisfiedClients: "100%",
  email: "anas.fz1001@gmail.com",
  github: "https://github.com/Akhy1001",
  linkedin: "https://www.linkedin.com/in/anas-faiz-b1a30535b",
  avatar: "https://avatars.githubusercontent.com/u/194927224?v=4",
};

export const techStack = [
  {
    category: "Frontend Web & Frameworks",
    skills: [
      { name: "TypeScript", level: 95, icon: "FileCode", description: "Typage strict, Generics, interfaces robustes" },
      { name: "Next.js 14", level: 92, icon: "Zap", description: "App Router, SSR/SSG, Server Actions" },
      { name: "React.js", level: 94, icon: "Code2", description: "Hooks avancés, architecture modulaire" },
      { name: "Tailwind CSS & Vite", level: 92, icon: "Palette", description: "Design systems réactifs, utilitaires & animations" },
      { name: "Angular", level: 80, icon: "Layers", description: "Applications d'entreprise modulaires" }
    ]
  },
  {
    category: "Mobile & Native",
    skills: [
      { name: "Swift & SwiftUI", level: 88, icon: "Smartphone", description: "Applications iOS natives performantes et fluides" },
      { name: "React Native & Expo", level: 90, icon: "Box", description: "Apps cross-platform iOS & Android" },
      { name: "Mobile UI / UX", level: 86, icon: "Layout", description: "Design responsive et gestes tactiles" }
    ]
  },
  {
    category: "Langages Système & Backend",
    skills: [
      { name: "C++ & Qt 6", level: 85, icon: "Cpu", description: "Applications système, GUI Qt et calculs réseau" },
      { name: "Node.js & Express", level: 88, icon: "Server", description: "APIs RESTful performantes et Microservices" },
      { name: "Supabase & PostgreSQL", level: 90, icon: "Database", description: "Bases de données relationnelles, Auth & Realtime" },
      { name: "Programmation Réseau", level: 84, icon: "GitBranch", description: "Sockets Client/Serveur, protocoles TCP/UDP" }
    ]
  },
  {
    category: "DevOps & Outils",
    skills: [
      { name: "Git & GitHub", level: 95, icon: "GitCommit", description: "Gestion de versioning, workflows collaboratifs" },
      { name: "Vercel & Cloud", level: 90, icon: "Globe", description: "Déploiement continu Jamstack, Serverless" },
      { name: "Tests & Qualité Code", level: 85, icon: "CheckCircle", description: "Clean Code, refactorisation et tests" }
    ]
  }
];

export const projects = [
  {
    id: "my-planner",
    title: "Mon Planner Personnel",
    category: "web",
    tag: "Productivité & Web App",
    featured: true,
    image: "/projects/my-planner.jpg",
    shortDesc: "Planner personnel moderne pour suivre ses tâches, habitudes, objectifs, agenda et journal au quotidien.",
    longDesc: "Mon Planner est une application de productivité complète développée avec Next.js, Supabase et la police Geist. Elle centralise la gestion du temps, le suivi des habitudes quotidiennes, la fixation d'objectifs et un journal personnel sécurisé.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "React", "Geist Font"],
    metrics: ["100% Responsive", "Base de données Supabase Realtime", "Dark Mode Soigné"],
    demoUrl: "https://github.com/Akhy1001/my-planner",
    githubUrl: "https://github.com/Akhy1001/my-planner",
    highlights: [
      "Tableau de bord dynamique avec suivi visuel d'objectifs hebdomadaires",
      "Module d'agenda et calendrier interactif",
      "Authentification utilisateur sécurisée via Supabase Auth",
      "Persistance d'état et synchronisation en temps réel"
    ]
  },
  {
    id: "prestige-motors",
    title: "Prestige Motors - Concession Automobile",
    category: "web",
    tag: "Web App Vitrine Premium",
    featured: true,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Concession auto virtuelle haut de gamme avec design ultra-premium, scroll animations et mode sombre.",
    longDesc: "Vitrine web immersive pour véhicules de prestige. Conçue avec un haut niveau de détail esthétique, des effets de défilement fluides, des filtres de catalogue intelligents et un configurateur virtuel.",
    technologies: ["Vanilla JS", "HTML5", "CSS3 Custom Tokens", "ScrollAnimations", "Responsive Design"],
    metrics: ["Performance 100/100", "Design Dark Glassmorphism", "Micro-interactions 60fps"],
    demoUrl: "https://github.com/Akhy1001/Site-Web-Perso-Automobile",
    githubUrl: "https://github.com/Akhy1001/Site-Web-Perso-Automobile",
    highlights: [
      "Galerie haute définition de véhicules de luxe",
      "Animations interactives au survol et au défilement",
      "Formulaire de demande d'essai personnalisé",
      "Optimisation complète du temps de chargement sans framework lourd"
    ]
  },
  {
    id: "my-pomodoro",
    title: "My Pomodoro - Timer iOS Minimaliste",
    category: "mobile",
    tag: "Mobile App (iOS / Swift)",
    featured: true,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Timer Pomodoro iOS minimaliste avec horloge flip clock, modes de concentration et sons d'ambiance.",
    longDesc: "Application iOS native développée en Swift. Offre une expérience visuelle apaisante grâce à son animation Flip Clock rétro, ses sessions de travail personnalisables et ses ambiances sonores relaxantes.",
    technologies: ["Swift", "SwiftUI", "iOS Native", "AudioEngine", "AVFoundation"],
    metrics: ["100% Code Native Swift", "Consommation batterie optimisée", "Design iOS Human Interface"],
    demoUrl: "https://github.com/Akhy1001/my-pomodoro",
    githubUrl: "https://github.com/Akhy1001/my-pomodoro",
    highlights: [
      "Horloge Flip Clock animée en 60 FPS",
      "Gestion des cycles de travail / pauses courtes / pauses longues",
      "Sons d'ambiance intégrés (Pluie, Forêt, Café)",
      "Prise en charge du mode Sombre / Clair automatique"
    ]
  },
  {
    id: "app-my-task",
    title: "App My Task - Gestionnaire de Tâches",
    category: "web",
    tag: "Productivité & Web",
    featured: false,
    image: "/projects/app-my-task.jpg",
    shortDesc: "Task manager moderne et minimaliste en noir et blanc avec gestion d'état réactive sous Next.js & React.",
    longDesc: "Application d'organisation et de gestion de tâches développée avec une interface minimaliste en noir et blanc. Permet de structurer ses journées par catégories (Work, Personal, Development), de suivre l'avancement en temps réel et de valider ses objectifs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase"],
    metrics: ["Design Noir & Blanc Épuré", "Synchronisation instantanée", "Suivi d'avancement 100% réactif"],
    demoUrl: "https://github.com/Akhy1001/app-my-task",
    githubUrl: "https://github.com/Akhy1001/app-my-task",
    highlights: [
      "Organisation par catégories (Work, Personal, Development)",
      "Jauge de progression quotidienne et validation de tâches",
      "Interface épurée haute performance sans distraction"
    ]
  },
  {
    id: "site-patrimonia",
    title: "Patrimonia - Espace Gestion de Patrimoine",
    category: "fullstack",
    tag: "Fullstack & Dashboard",
    featured: false,
    image: "/projects/site-patrimonia.jpg",
    shortDesc: "Site web et dashboard administrateur pour l'agence de gestion de patrimoine premium Patrimonia.",
    longDesc: "Solution web fullstack combinant une vitrine d'agence de conseil financier haut de gamme et un espace d'administration pour la gestion des dossiers clients et simulations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "PostgreSQL"],
    metrics: ["Vitrine élégante & Simulateur", "Espace Administrateur sécurisé", "Visualisation ROI interactive"],
    demoUrl: "https://github.com/Akhy1001/site-patrimonia",
    githubUrl: "https://github.com/Akhy1001/site-patrimonia",
    highlights: [
      "Simulateur de rendement financier interactif avec curseurs dynamiques",
      "Tableau de bord administrateur avec métriques de performance",
      "Formulaire de prise de rendez-vous personnalisé"
    ]
  },
  {
    id: "chess-game",
    title: "Chess Game Interactive",
    category: "web",
    tag: "Jeu Web & Algorithmique",
    featured: false,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Jeu d'échecs interactif développé avec règles officielles, historique des coups et rendu réactif.",
    longDesc: "Application web d'échecs en Next.js et TypeScript. Intègre la validation dynamique des déplacements légaux, la prise en passant, le roque et la détection d'échec et mat.",
    technologies: ["Next.js", "TypeScript", "React", "State Management"],
    metrics: ["Règles FIDE intégrées", "UI Échiquier personnalisable"],
    demoUrl: "https://github.com/Akhy1001/chess-game",
    githubUrl: "https://github.com/Akhy1001/chess-game",
    highlights: [
      "Validation stricte des mouvements selon les règles des échecs",
      "Historique complet de la partie en notation algébrique",
      "Interface réactive sur Desktop et Mobile"
    ]
  },
  {
    id: "bingo-network",
    title: "Bingo Network - Jeu Multijoueur C++ & Qt 6",
    category: "fullstack",
    tag: "Système & Réseau C++",
    featured: false,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Jeu de Bingo en réseau basé sur une architecture Client/Serveur C++ avec interface graphique Qt 6.",
    longDesc: "Projet logiciel réseau robuste développé en C++ 17 et Qt 6. Permet à plusieurs utilisateurs distants de se connecter simultanément à une grille de jeu synchronisée par sockets TCP.",
    technologies: ["C++ 17", "Qt 6 Framework", "Sockets TCP/IP", "Client/Server Architecture"],
    metrics: ["Multijoueur temps réel", "Architecture réseau robuste"],
    demoUrl: "https://github.com/Akhy1001/Bingo-Network_Jeu_Multijoueur_C",
    githubUrl: "https://github.com/Akhy1001/Bingo-Network_Jeu_Multijoueur_C",
    highlights: [
      "Gestionnaire de serveur multithreadé capable de gérer plusieurs salons de jeu",
      "Interface graphique dynamique développée sous Qt Widgets",
      "Protocole de communication binaire personnalisé"
    ]
  }
];

export const education = [
  {
    period: "Dès Septembre 2026",
    degree: "Bachelor Concepteur Développeur Web Full Stack",
    institution: "3iL Ingénieurs",
    option: "Reconnu par l'État • Certification RNCP39608 (Niveau 6)",
    description: "Formation supérieure axée sur la conception d'interfaces Front-End adaptatives (UX/UI, SEO, AJAX), l'architecture Back-End avancée (POO, MVC, NoSQL), l'architecture Cloud et la gestion de projets Agiles.",
    skills: ["Front-End & UX/UI", "Back-End POO & MVC", "Bases NoSQL & SQL", "Architectures Cloud", "Gestion de Projet Agile", "Certification RNCP39608"]
  },
  {
    period: "Depuis septembre 2024 - Présent",
    degree: "BTS CIEL – Cybersécurité, Informatique et Réseaux Électroniques",
    institution: "Cité scolaire Mirepoix",
    option: "Option Informatique et Réseaux",
    description: "Formation axée sur le développement, les réseaux, la cybersécurité et l'électronique.",
    skills: ["Développement Web/App", "Réseaux & TCP/IP", "Cybersécurité", "Électronique", "C++ / Systems"]
  },
  {
    period: "2023 – 2024",
    degree: "Baccalauréat Technologique STI2D",
    institution: "Lycée International Victor Hugo, Colomiers",
    option: "Option Systèmes d'information et informatique (SIN)",
    description: "Spécialisation en informatique et développement de systèmes numériques.",
    skills: ["Systèmes d'Information", "Informatique", "Développement Numérique", "Algorithmique"]
  }
];

export const simulatorApps = [
  {
    id: "sim-web",
    title: "Aperçu Mon Planner (Next.js 14)",
    type: "web",
    previewUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Tableau de bord dynamique de productivité",
      "Synchronisation Supabase Realtime",
      "Design Dark Mode Soigné"
    ]
  },
  {
    id: "sim-mobile",
    title: "Aperçu My Pomodoro (iOS / Swift)",
    type: "mobile",
    previewUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Flip Clock rétro animée en 60 FPS",
      "Sons d'ambiance interactifs",
      "Interface minimale et apaisante"
    ]
  }
];
