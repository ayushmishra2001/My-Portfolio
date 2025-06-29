export const siteContent = {
  // Hero Section
  hero: {
    name: "Ayush Mishra",
    role: "Full-Stack Developer",
    description: "I craft digital experiences that blend beautiful design with powerful functionality. Passionate about creating solutions that make a difference.",
    profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    resumeUrl: "/resume.pdf",
    ctaButtons: [
      { text: "View My Work", href: "#projects", primary: true },
      { text: "Get In Touch", href: "#contact", primary: false }
    ]
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ],

  // Technology Stack - Updated with Lucide React icon names
  technologies: [
    { name: "React", icon: "Atom", color: "text-blue-500" },
    { name: "TypeScript", icon: "FileCode2", color: "text-blue-600" },
    { name: "Node.js", icon: "Server", color: "text-green-600" },
    { name: "Python", icon: "Code2", color: "text-yellow-500" },
    { name: "PostgreSQL", icon: "Database", color: "text-blue-700" },
    { name: "AWS", icon: "Cloud", color: "text-orange-500" },
    { name: "Docker", icon: "Container", color: "text-blue-400" },
    { name: "GraphQL", icon: "Network", color: "text-pink-500" },
    { name: "Git", icon: "GitBranch", color: "text-red-500" },
    { name: "MongoDB", icon: "Leaf", color: "text-green-500" },
    { name: "Vue.js", icon: "Triangle", color: "text-green-400" },
    { name: "Tailwind", icon: "Palette", color: "text-cyan-500" }
  ],

  // About Section
  about: {
    title: "About Me",
    description: "With over 2 years of experience in full-stack development, I specialize in building scalable web applications and creating intuitive user experiences. I'm passionate about clean code, modern technologies, and solving complex problems.",
    highlights: [
      "2 years of professional development experience",
      "Expert in React, Node.js, and modern web technologies",
      "Strong focus on performance and user experience",
      "Experience with cloud platforms and DevOps practices"
    ],
    skills: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
      { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL"] },
      { category: "DevOps", items: ["AWS", "Docker", "CI/CD", "Kubernetes"] },
      { category: "Tools", items: ["Git", "Figma", "VS Code", "Postman"] }
    ]
  },

  // Services Section
  services: [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates engaging and intuitive experiences.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices and architectural decisions.",
      icon: "💡",
      features: ["Code Review", "Architecture Planning", "Performance Audits", "Team Training"]
    }
  ],

  // Projects Section
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with React frontend and Node.js backend, featuring real-time inventory management and payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      image: "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, dark mode toggle, and content management system.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    }
  ],

  // Testimonials Section
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content: "Alex delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at StartupXYZ",
      content: "Working with Alex was a game-changer for our startup. He not only built our platform but also provided valuable insights on user experience and scalability.",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Davis",
      role: "Design Director at CreativeAgency",
      content: "Alex has an incredible ability to translate design concepts into functional, beautiful websites. His collaboration skills and technical knowledge are top-notch.",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ],

  // Blog Section
  blog: [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring and scaling React applications for long-term maintainability.",
      date: "2024-01-15",
      readTime: "8 min read",
      url: "https://medium.com/@alexjohnson/building-scalable-react-applications",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
      date: "2024-01-08",
      readTime: "6 min read",
      url: "https://medium.com/@alexjohnson/future-of-web-development",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Optimizing Web Performance",
      excerpt: "Practical techniques for improving website performance and user experience.",
      date: "2024-01-01",
      readTime: "10 min read",
      url: "https://medium.com/@alexjohnson/optimizing-web-performance",
      image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ],

  // Contact Section
  contact: {
    title: "Let's Work Together",
    description: "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.",
    email: "ayusmishra2001@gmail.com",
    phone: "+91 6207248129",
    location: "Patna, India"
  },

  // Social Links
  social: [
    { name: "GitHub", url: "https://github.com/ayushmishra2001", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ayush-m-095082321/", icon: "Linkedin" },
    { name: "Twitter", url: "https://x.com/AyushMishrazx", icon: "Twitter" },
    { name: "Email", url: "ayusmishra2001@gmail.com", icon: "Mail" }
  ]
};
