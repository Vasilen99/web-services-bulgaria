"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";
import {
  NextIcon,
  ReactIcon,
  ShadcnIcon,
  Tailwind,
  TypescriptIcon,
  ZustandIcon,
} from "@/components/icons";

const TECHNOLOGIES_DATA = {
  nextjs: {
    name: "Next.js",
    icon: NextIcon,
    shortDescription: "The React framework for production",
    description:
      "Next.js is a powerful React framework that enables developers to build fast, scalable web applications with ease. It provides built-in features like server-side rendering, static site generation, and automatic code splitting.",
    whyWeChose: [
      "Server-Side Rendering (SSR) for better SEO and performance",
      "Built-in API routes for backend functionality",
      "Automatic code splitting and optimization",
      "Excellent developer experience with hot module replacement",
      "Seamless deployment with Vercel",
    ],
    benefits: [
      "Faster page load times with automatic optimizations",
      "Better SEO with server-side rendering capabilities",
      "Full-stack development in a single framework",
      "Scalable architecture for growing applications",
      "Strong community support and extensive documentation",
    ],
    useCases: [
      "E-commerce platforms",
      "Content management systems",
      "Real-time applications",
      "Single-page applications with SEO requirements",
    ],
  },
  typescript: {
    name: "TypeScript",
    icon: TypescriptIcon,
    shortDescription: "JavaScript with syntax for types",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to clean, readable JavaScript code. It provides optional static typing, which helps catch errors during development and improves code maintainability.",
    whyWeChose: [
      "Static type checking reduces runtime errors",
      "Better IDE support and autocompletion",
      "Improved code documentation through type definitions",
      "Easier refactoring with compile-time error detection",
      "Growing adoption in modern web development",
    ],
    benefits: [
      "Catch errors before runtime",
      "Enhanced code readability and maintainability",
      "Better team collaboration with clear type contracts",
      "Reduced debugging time",
      "Excellent tooling and developer experience",
    ],
    useCases: [
      "Large-scale applications",
      "Team projects with multiple developers",
      "Complex business logic",
      "Long-term maintenance projects",
    ],
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: Tailwind,
    shortDescription: "A utility-first CSS framework",
    description:
      "Tailwind CSS is a utility-first CSS framework for building modern, responsive user interfaces quickly. Instead of predefined components, it provides low-level utility classes that let you build custom designs.",
    whyWeChose: [
      "Rapid UI development with utility classes",
      "Consistent design system implementation",
      "Minimal CSS bundle size with purging",
      "Highly customizable through configuration",
      "Great responsive design capabilities",
    ],
    benefits: [
      "Faster development cycle",
      "Consistent styling across the application",
      "Smaller production CSS files",
      "Easy to maintain and scale",
      "Built-in dark mode support",
    ],
    useCases: [
      "Responsive web applications",
      "Design system implementation",
      "Rapid prototyping",
      "Custom UI components",
    ],
  },
  react: {
    name: "React",
    icon: ReactIcon,
    shortDescription: "A JavaScript library for building UIs",
    description:
      "React is a JavaScript library for building user interfaces with reusable components. Its component-based architecture, virtual DOM, and one-way data flow make it ideal for building dynamic, interactive applications.",
    whyWeChose: [
      "Component reusability and modularity",
      "Virtual DOM for efficient updates",
      "Large ecosystem and community support",
      "One-way data binding prevents bugs",
      "Great developer tools and debugging capabilities",
    ],
    benefits: [
      "Faster development with reusable components",
      "Improved performance with virtual DOM",
      "Easier testing of components",
      "Scalable for large applications",
      "Rich ecosystem of libraries and tools",
    ],
    useCases: [
      "Single-page applications",
      "Complex user interfaces",
      "Real-time applications",
      "Progressive web apps",
    ],
  },
  shadcn: {
    name: "Shadcn UI",
    icon: ShadcnIcon,
    shortDescription: "Beautifully designed components",
    description:
      "Shadcn UI is a collection of high-quality, accessible components built with React and Tailwind CSS. It provides beautiful, ready-to-use components that can be easily customized to match your design system.",
    whyWeChose: [
      "Pre-built, accessible components",
      "Built on Radix UI primitives for reliability",
      "Tailwind CSS integration for consistency",
      "Copy-paste components for customization",
      "Great documentation and examples",
    ],
    benefits: [
      "Faster component development",
      "Consistent design across the application",
      "Accessibility built-in",
      "Easy customization and theming",
      "Regular updates and improvements",
    ],
    useCases: [
      "Admin dashboards",
      "Business applications",
      "Complex UI components",
      "Design system implementation",
    ],
  },
  zustand: {
    name: "Zustand",
    icon: ZustandIcon,
    shortDescription: "A small, fast and scalable bearbones state-management",
    description:
      "Zustand is a lightweight state management library for React that provides a simple and intuitive API. It uses hooks and doesn't require providers, making it easy to integrate and use in React applications.",
    whyWeChose: [
      "Minimal and lightweight (2KB)",
      "Simple API without boilerplate",
      "No provider wrapper needed",
      "Great TypeScript support",
      "Performance optimized with built-in selectors",
    ],
    benefits: [
      "Easy to learn and implement",
      "Reduced bundle size",
      "Better performance than Redux",
      "Flexible and unopinionated",
      "Great for small to medium-sized applications",
    ],
    useCases: [
      "Global state management",
      "Theme and UI state",
      "Authentication state",
      "Application-wide settings",
    ],
  },
};

export default function TechnologyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const tech = TECHNOLOGIES_DATA[slug as keyof typeof TECHNOLOGIES_DATA];

  if (!tech) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Technology Not Found</h1>
        <p className="text-xl mb-8">
          The technology you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="text-primary hover:underline text-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = tech.icon;

  return (
    <div className="min-h-screen bg-background mt-28 py-12">
      {/* Header with Back Link */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title & Icon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-start gap-8"
        >
          <div className="shrink-0">
            <div className="w-24 h-24 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center">
              <Icon className="w-14 h-14 fill-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-3 text-foreground">
              {tech.name}
            </h1>
            <p className="text-lg text-foreground/70">
              {tech.shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Overview
            </h2>
            <p className="text-base leading-relaxed text-foreground/80">
              {tech.description}
            </p>
          </motion.section>

          {/* Right Column: Why We Chose */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Why We Chose It
            </h2>
            <ul className="space-y-3">
              {tech.whyWeChose.map((reason, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ·
                  </span>
                  <span className="text-sm text-foreground/75">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* Second Row: Benefits & Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Benefits */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Key Benefits
            </h2>
            <ul className="space-y-3">
              {tech.benefits.map((benefit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm text-foreground/75">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Right Column: Use Cases */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
              Common Use Cases
            </h2>
            <ul className="space-y-3">
              {tech.useCases.map((useCase, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-primary font-bold shrink-0 mt-0.5">
                    →
                  </span>
                  <span className="text-sm text-foreground/75">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-foreground/0 via-foreground/10 to-foreground/0 mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-3 justify-center items-center py-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">
            Ready to build with {tech.name}?
          </h3>
          <p className="text-foreground/60 text-center">
            Let&apos;s discuss how this technology can power your project.
          </p>
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
