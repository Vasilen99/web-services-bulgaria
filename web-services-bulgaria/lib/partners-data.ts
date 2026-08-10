// Partners data structure for the gallery inner pages
export const PARTNERS_DATA = {
  bft: {
    id: "bft",
    name: "BFT Results",
    shortDescription: "Results tracking and analytics platform",
    description:
      "BFT Results is a comprehensive web platform designed to track, analyze, and visualize results across various competitions and events. The platform provides real-time data updates, advanced filtering capabilities, and intuitive dashboards for event organizers and participants.",
    longDescription:
      "Built with modern web technologies, BFT Results delivers a fast, responsive, and user-friendly experience. The platform handles complex data aggregation, real-time updates, and sophisticated reporting features. It serves as a central hub for event management, result publication, and participant engagement.",
    website: "https://bft-results.vercel.app/",
    logo: "/logos/logo-bfs.png",
    whatItDoes: [
      "Real-time results tracking and publishing",
      "Advanced filtering and search capabilities",
      "Detailed analytics and statistics",
      "Event management and organization",
      "Participant leaderboards and rankings",
      "Export data in multiple formats",
      "Mobile-responsive interface",
    ],
    technologies: ["nextjs", "react", "typescript", "tailwind", "zustand"],
    carouselImages: [
      {
        src: "/projects/bft-1.png",
        alt: "BFT Results Homepage",
      },
      {
        src: "/projects/bft-2.png",
        alt: "BFT Results Display",
      },
      {
        src: "/projects/bft-3.png",
        alt: "BFT Analytics Dashboard",
      },
    ],
    timeline: {
      started: "2023",
      completed: "2024",
      description: "Development and launch of the full platform",
    },
    achievements: [
      "Handles thousands of concurrent users",
      "Real-time data synchronization",
      "Mobile-first responsive design",
      "SEO-optimized for better discoverability",
    ],
  },
  servify: {
    id: "servify",
    name: "Servify",
    shortDescription: "Service management and booking platform",
    description:
      "Servify is an innovative service management platform that connects service providers with customers. It streamlines the booking process, provides service tracking, and facilitates seamless communication between providers and clients.",
    longDescription:
      "Servify leverages modern web technologies to create a smooth, reliable platform for service management. The application provides both providers and customers with intuitive interfaces for managing bookings, tracking services, and maintaining communication. Built with scalability in mind, Servify can handle growing user bases and complex service workflows.",
    website: "https://servify.bg/",
    logo: "/logos/servify-logo.svg",
    whatItDoes: [
      "Service booking and scheduling",
      "Provider and customer management",
      "Real-time service tracking",
      "Payment integration and processing",
      "Review and rating system",
      "Notification and communication system",
      "Service history and analytics",
      "Admin dashboard for oversight",
    ],
    technologies: ["nextjs", "react", "typescript", "tailwind", "shadcn"],
    carouselImages: [
      {
        src: "/partners/servify-home.png",
        alt: "Servify Homepage",
      },
      {
        src: "/partners/servify-booking.png",
        alt: "Servify Booking Interface",
      },
      {
        src: "/partners/servify-dashboard.png",
        alt: "Servify Dashboard",
      },
    ],
    timeline: {
      started: "2023",
      completed: "2024",
      description: "Full-stack development and deployment",
    },
    achievements: [
      "Seamless booking experience",
      "Secure payment processing",
      "High user satisfaction ratings",
      "Scalable architecture for growth",
    ],
  },
};

export type PartnerId = keyof typeof PARTNERS_DATA;
export type PartnerData = (typeof PARTNERS_DATA)[PartnerId];
