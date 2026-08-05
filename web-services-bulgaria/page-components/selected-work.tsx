"use client";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    id: "project-1",
    title: "Проект Алфа",
    tag: "УЕБ",
    image: "/project-1.jpg",
    href: "#",
  },
  {
    id: "project-2",
    title: "Проект Бета",
    tag: "УЕБ",
    image: "/project-2.jpg",
    href: "#",
  },
  {
    id: "project-3",
    title: "Проект Гама",
    tag: "УЕБ",
    image: "/project-3.jpg",
    href: "#",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-primary py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading row */}
        <div className="flex items-end justify-between mb-14 border-t border-primary-content/10 pt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-content">
            Избрани проекти
          </h2>
          <Link
            href="#"
            className="text-primary-content/50 text-xs uppercase tracking-widest font-medium hover:text-primary-content transition-colors flex items-center gap-2 group"
          >
            Виж всички
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group relative block overflow-hidden rounded-2xl bg-primary-content/5 aspect-4/5"
            >
              {/* Image placeholder (replace with real images) */}
              <div className="absolute inset-0 bg-primary-content/10 group-hover:bg-primary-content/5 transition-colors duration-500" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Hide broken images gracefully
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Card info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-primary/90 to-transparent">
                <span className="text-primary-content/50 text-xs uppercase tracking-widest font-medium block mb-1">
                  {project.tag}
                </span>
                <h3 className="text-primary-content text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
