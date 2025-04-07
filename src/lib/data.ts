//data.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
  category: string;
}

// export interface Experience {
//   company: string;
//   position: string;
//   period: string;
//   description: string;
//   responsibilities?: string[];
//   technologies?: string[];
//   companyUrl?: string;
//   logo?: string;
// }

export interface Skill {
  name: string;
  level: number; // 1-5 scale
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: string; // You can use emoji as icon
  skills: Skill[];
}

// Projects data
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Wash.io | Laundry Web App",
    description:
      "Collaboration Project, A full-featured e-commerce platform with service pickup delivery, user authentication, and payment integration.",
    longDescription: `Developed a full-stack laundry management system using Next.js, TypeScript,
Express.js, and Prisma to streamline operations. Implemented multi-role
authentication (super admin, outlet admin, worker, driver) for secure access control.
Built a real-time order tracking system with quality control and status updates.
Designed an analytical dashboard for financial reporting and performance
insights. Created a responsive UI optimized for different user roles, enhancing
efficiency, staff coordination, and customer experience.`,
    image:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159990/Screenshot_2025-03-28_at_18.03.07_uzb8tk.png",
    images: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743160473/Screenshot_2025-03-28_at_18.14.16_a3ifqu.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159486/Screenshot_2025-03-20_at_22.09.30_wjgrit.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159502/Screenshot_2025-03-20_at_22.08.16_zhdj2q.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743161444/Screenshot_2025-03-28_at_18.29.55_ba50wd.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159738/Screenshot_2025-03-28_at_17.59.57_vpor1l.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159737/Screenshot_2025-03-28_at_18.00.57_y09kyl.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "Supabase (PostgreSQL)",
      "Payment Gateway (Midtrans)",
      "Framer Motion",
    ],
    features: [
      "Responsive design for all devices",
      "Product catalog with categories and filters",
      "Shopping cart and checkout process",
      "User authentication and accounts",
      "Payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
    ],
    githubUrl: "https://github.com/hashfimw?tab=repositories",
    liveUrl: "https://washio.vercel.app/login-admin",
    featured: true,
    year: "2024",
    category: "E-Commerce",
  },
  {
    id: "project-2",
    title: "Festify. | Event Ticketing Management Web",
    description:
      "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    longDescription:
      "This task management tool helps teams organize work efficiently with features like task creation, assignment, due dates, priority levels, comments, and real-time status updates. It includes board, list, and calendar views for versatile project management.",
    image:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1742499803/Screenshot_2025-03-21_at_02.42.28_naregm.png",
    images: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1742486155/Macbook-Air-frontend-festify.vercel.app_6_y8cdky.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1742486027/Macbook-Air-frontend-festify.vercel.app_4_dfk6f9.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1742485382/Screenshot_2025-03-20_at_22.33.53_j6nurw.png",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Prisma ORM",
      "Express",
      "Supabase(PostgreSQL)",
      "JWT",
      "Payment Gateway(Midtrans)",
    ],
    features: [
      "Kanban board, list, and calendar views",
      "Task creation with descriptions, due dates, and priorities",
      "Task assignment and team collaboration",
      "Real-time updates with Socket.io",
      "Comments and file attachments",
      "Progress tracking and reporting",
      "Email notifications for task updates",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://frontend-festify.vercel.app",
    featured: true,
    year: "2024",
    category: "Productivity",
  },
  {
    id: "project-3",
    title: "Palse Advertising | Company Profile Website",
    description:
      "A responsive portfolio website with smooth animations and a Spotify-inspired design.",
    longDescription:
      "This personal portfolio website showcases my projects, skills, and experience in a visually appealing interface inspired by Spotify's design language. It features dark mode, smooth transitions, responsive layout, and optimized performance.",
    image:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743171230/Screenshot_2025-03-28_at_21.12.16_yjcdqx.png",
    images: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743171219/Screenshot_2025-03-28_at_19.13.09_wkm86s.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743171222/Screenshot_2025-03-28_at_21.11.43_s6mkoq.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743171217/Screenshot_2025-03-28_at_21.12.43_lfmkp3.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Contentfull (Content Management System)",
    ],
    features: [
      "Spotify-inspired UI/UX design",
      "Responsive layout for all devices",
      "Project showcase with detailed pages",
      "Skills and experience sections",
      "Contact form with validation",
      "Smooth animations and transitions",
      "Optimized performance and SEO",
    ],
    githubUrl: "https://github.com/hashfimw",
    liveUrl: "https://palse-advertising.vercel.app",
    featured: true,
    year: "2023",
    category: "Portfolio",
  },
  {
    id: "project-4",
    title: "Weather Dashboard",
    description:
      "A weather forecast application with location search, daily and hourly forecasts, and interactive maps.",
    longDescription:
      "This weather application provides detailed weather information with current conditions, hourly forecasts, 7-day predictions, and interactive maps. It features location search, weather alerts, and customizable units.",
    image: "/project-4.jpg",
    technologies: [
      "React",
      "TypeScript",
      "OpenWeather API",
      "Mapbox",
      "Chart.js",
    ],
    features: [
      "Current weather conditions display",
      "Hourly and 7-day forecasts",
      "Location search and geolocation",
      "Interactive weather maps",
      "Weather alerts and notifications",
      "Temperature, wind, and precipitation charts",
      "Customizable units (metric/imperial)",
    ],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app-demo.com",
    featured: false,
    year: "2022",
    category: "Utility",
  },
  {
    id: "project-5",
    title: "Blog Platform",
    description:
      "A content management system for creating and managing blog posts with markdown support and image uploads.",
    longDescription:
      "This blog platform offers a modern writing experience with markdown support, image uploads, and SEO optimization. It includes features like categories, tags, comments, author profiles, and analytics.",
    image: "/project-5.jpg",
    technologies: [
      "Next.js",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
      "TypeScript",
    ],
    features: [
      "Markdown editor with preview",
      "Image uploads and management",
      "Categories and tags for organization",
      "Comment system with moderation",
      "SEO optimization for posts",
      "Author profiles and multiple contributors",
      "Analytics for content performance",
    ],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.com",
    featured: false,
    year: "2023",
    category: "Content Management",
  },
  {
    id: "project-6",
    title: "Fitness Tracker",
    description:
      "A mobile-first web application for tracking workouts, progress, and setting fitness goals.",
    longDescription:
      "This fitness application helps users track workouts, monitor progress, and achieve fitness goals. It includes workout logging, progress charts, goal setting, and nutritional tracking to provide a comprehensive fitness experience.",
    image: "/project-6.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo"],
    features: [
      "Workout logging and exercise database",
      "Progress tracking with charts and graphs",
      "Goal setting and achievement tracking",
      "Nutritional information and meal logging",
      "Custom workout plans",
      "Social sharing and challenges",
      "Reminders and notifications",
    ],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.com",
    featured: false,
    year: "2022",
    category: "Health & Fitness",
  },
];

// Skills data
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "💻",
    skills: [
      {
        name: "React & Next.js",
        level: 5,
        description:
          "Building dynamic and responsive user interfaces with React and server-side rendering with Next.js.",
      },
      {
        name: "TypeScript",
        level: 5,
        description:
          "Writing type-safe code to improve development experience and reduce bugs.",
      },
      {
        name: "HTML5 & CSS3",
        level: 4,
        description:
          "Creating semantic markup and modern CSS layouts with Flexbox and Grid.",
      },
      {
        name: "Tailwind CSS",
        level: 5,
        description: "Using utility-first CSS for rapid UI development.",
      },
      {
        name: "JavaScript",
        level: 4,
        description:
          "Modern JavaScript with latest features and best practices.",
      },
      {
        name: "UI/UX Design",
        level: 3,
        description:
          "Designing intuitive user interfaces and enhancing user experience.",
      },
    ],
  },
  {
    name: "Backend Development",
    icon: "🛠️",
    skills: [
      {
        name: "Node.js & Express",
        level: 4,
        description: "Building server-side applications and APIs with Node.js.",
      },
      {
        name: "RESTful APIs",
        level: 5,
        description:
          "Designing and implementing RESTful APIs following best practices.",
      },
      {
        name: "Authentication & Security",
        level: 4,
        description:
          "Implementing secure authentication systems and best security practices.",
      },
    ],
  },
  {
    name: "Database Management",
    icon: "🗄️",
    skills: [
      {
        name: "Supabase",
        level: 4,
        description:
          "Backend-as-a-Service built on PostgreSQL with authentication, realtime, and RESTful API support.",
      },
      {
        name: "PostgreSQL",
        level: 4,
        description: "Relational database design and optimization.",
      },
      {
        name: "Prisma ORM",
        level: 4,
        description: "Type-safe database access with modern ORM.",
      },
      {
        name: "Database Design",
        level: 4,
        description: "Designing efficient database schemas and relationships.",
      },
    ],
  },
  {
    name: "DevOps & Deployment",
    icon: "🚀",
    skills: [
      {
        name: "Git & GitHub",
        level: 5,
        description: "Version control and collaborative development.",
      },
      {
        name: "Vercel",
        level: 5,
        description: "Deploying and hosting applications on cloud platforms.",
      },
      {
        name: "CI/CD",
        level: 4,
        description:
          "Setting up continuous integration and deployment pipelines.",
      },
      {
        name: "Docker",
        level: 2,
        description:
          "Containerization for consistent development and deployment environments.",
      },
    ],
  },
  {
    name: "Tools & Others",
    icon: "🔧",
    skills: [
      {
        name: "Testing (Jest, React Testing Library)",
        level: 4,
        description:
          "Writing unit and integration tests for robust applications.",
      },
      {
        name: "Performance Optimization",
        level: 4,
        description: "Improving application performance and load times.",
      },
      {
        name: "Responsive Design",
        level: 5,
        description:
          "Creating layouts that work well across all devices and screen sizes.",
      },
      {
        name: "Agile Development",
        level: 4,
        description:
          "Working in agile teams with sprints and iterative development.",
      },
      {
        name: "Technical Writing",
        level: 3,
        description: "Documenting code and creating technical guides.",
      },
    ],
  },
];
