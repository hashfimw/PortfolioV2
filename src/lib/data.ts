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
    id: "project-hlogger",
    title: "Hlogger | Blog Platform",
    description:
      "A content management system for creating and managing blog posts with markdown support and image uploads.",
    longDescription:
      "This simple blog platform offers a modern writing experience with markdown support, image uploads, and SEO optimization. It includes features like categories,share blog posts directly to various platforms and author profiles.",
    image:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744019179/Screenshot_2025-04-06_at_13.37.25_eybx4d.png",
    images: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744019179/Screenshot_2025-04-06_at_13.37.25_eybx4d.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744019175/Screenshot_2025-04-06_at_13.38.05_yxocmp.png",
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744019175/Screenshot_2025-04-06_at_13.39.22_neaeha.png",
    ],
    technologies: [
      "Next.js",
      "Contentfull (Headless CMS)",
      "Tailwind CSS",
      "TypeScript",
      "React Icons",
      "Cypress",
      "Husky",
    ],
    features: [
      "Markdown editor with preview",
      "Image uploads and management",
      "Categories and tags for organization",
      "SEO optimization for posts",
      "Cross-Platform Sharing",
      "Responsive design for all devices",
      "Author profiles and multiple contributors",
      "Analytics for content performance",
    ],
    githubUrl: "https://github.com/yourusername/blog-platform",
    liveUrl: "https://blog-platform-demo.com",
    featured: false,
    year: "2024",
    category: "Content Management",
  },
  {
    id: "project-washio",
    title: "Wash.io |  E-Commerce Laundry Web App",
    description:
      "Collaboration Project, a full-featured e-commerce platform with service pickup delivery, user authentication, and payment integration, developed by a team of three.",
    longDescription: `Developed a full-stack laundry management system using Next.js, TypeScript,
    Express.js, and Prisma to streamline operations. Implemented multi-role
    authentication (super admin, outlet admin, worker, driver) for secure access control.
    Built a real-time order tracking system with quality control and status updates.
    Designed an analytical dashboard for financial reporting and performance
    insights. Created a responsive UI optimized for different user roles, enhancing
    efficiency, staff coordination, and customer experience.`,
    image:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159486/Screenshot_2025-03-20_at_22.09.30_wjgrit.png",

    images: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1743159990/Screenshot_2025-03-28_at_18.03.07_uzb8tk.png",
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
      "CSS3",
      "Prisma ORM",
      "Supabase (PostgreSQL)",
      "Payment Gateway (Midtrans)",
      "Framer Motion",
      "Lucide Icons",
      "Leaflet Map",
    ],
    features: [
      "Responsive design for all devices",
      "Modern and professional UI/UX design",
      "User authentication with email verification and profile management",
      "Address book with primary address selection",
      "Pickup request with real-time order tracking",
      "Online payment integration via payment gateway",
      "Admin dashboard for managing outlets, employee, orders tracking, and laundry items",
      "Role-based access for Admin, Driver, and Worker",
      "Attendance tracking for drivers and workers",
      "Reports for sales and employee performance",
      "Order creation, item input, and status updates by workers",
      "Delivery management with one active order per driver",
    ],
    githubUrl: "https://github.com/hashfimw?tab=repositories",
    liveUrl: "https://washio.vercel.app/login-admin",
    featured: true,
    year: "2024",
    category: "E-Commerce",
  },
  {
    id: "project-festify",
    title: "Festify. | Event Ticketing Management Web",
    description:
      "A collaborative Event Management Platform created by a team of two, allowing organizers to create and promote events, while users can browse, register, and purchase tickets with a referral and reward system.",
    longDescription:
      "This Event Management Platform allows organizers to create and manage events, while attendees can browse, register, and purchase tickets. It features event discovery, ticket purchasing, user authentication, and a referral system offering points and discounts. Organizers can track event performance with visual stats, and the platform ensures a smooth experience across devices with responsive design and smart filtering. Transactions use IDR, and referral points expire after 3 months, redeemable for discounts.",
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
      "Tailwind CSS",
      "CSS3",
    ],
    features: [
      "Responsive and mobile-friendly layout",
      "Event discovery with filtering, search (debounced), and pagination",
      "Event detail pages with ticket purchase functionality",
      "Support for free and paid events with IDR currency",
      "Referral system with unique codes, point rewards, and 10% discount coupons",
      "Points system with 3-month expiration and redemption capability",
      "User authentication and role-based authorization (Participant & Organizer)",
      "Organizer dashboard with event list, registrations, and transaction history",
      "Graphical reports and analytics (by day, month, and year)",
      "Event reviews and rating system for attendee feedback",
      "Promotions with vouchers and date-based discounts",
    ],
    githubUrl: "https://github.com/hashfimw",
    liveUrl: "https://frontend-festify.vercel.app",
    featured: true,
    year: "2024",
    category: "Event Ticketing",
  },
  {
    id: "project-palseads",
    title: "Palse Advertising | Company Profile Website",
    description:
      "A responsive and modern Company Profile Website showcasing the company's identity, services, portfolio, and contact information.",
    longDescription:
      "This Company Profile Website is designed to professionally introduce a business to potential clients and partners. Built using modern technologies such as React, Next.js, and Tailwind CSS, the site provides a complete overview of the company, including the company profile, services offered, project portfolio, and a contact form integrated with email or WhatsApp. With a focus on clean and responsive UI/UX design, the website ensures a seamless user experience across all devices, from desktop to mobile. Smooth animations and subtle transitions enhance the professional and engaging look of the site.",
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
      "Modern and professional UI/UX design",
      "Responsive layout for desktop and mobile devices",
      "Company introduction with mission and vision",
      "Service section with detailed descriptions",
      "Interactive project gallery or portfolio",
      "Client testimonials for credibility",
      "Contact form with validation and integration",
      "Smooth animations and page transitions",
      "Social media integration",
      "Optimized performance and SEO-friendly structure",
    ],
    githubUrl: "https://github.com/hashfimw",
    liveUrl: "https://palse-advertising.vercel.app",
    featured: true,
    year: "2024",
    category: "Company Profile",
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
        level: 3,
        description:
          "Containerization for consistent development and deployment environments.",
      },
    ],
  },
  {
    name: "Others",
    icon: "🔧",
    skills: [
      {
        name: "Testing (Cypress)",
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
