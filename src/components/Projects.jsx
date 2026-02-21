import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Operation Scheduler",
      desc:
        "Hospital OT management system with role-based dashboards, conflict detection, and real-time scheduling.",
      image: "/operation-scheduler.jpg",
      tech: ["JavaScript", "Tailwind", "Firebase", "Firestore"],
      frontendRepo:
        "https://github.com/patel192/Operation-Scheduler-System",
      backendRepo:
        "https://github.com/patel192/Operation-Scheduler-System",
      demo: "https://operation-scheduler-a44f8.web.app/",
      featured: true,
    },

    {
      id: 2,
      title: "SuperMall SaaS",
      desc:
        "Mall management platform for tenants, products, offers, and analytics with multi-role access control.",
      image: "/Supermall-web-app.jpg",
      tech: ["HTML", "Tailwind", "Firebase"],
      frontendRepo: "https://github.com/patel192/Super-mall-WebApp",
      backendRepo: "https://github.com/patel192/Super-mall-WebApp",
      demo: "https://supermall-web-app-ee373.web.app/",
      featured: true,
    },

    {
      id: 3,
      title: "SkillHub",
      desc:
        "E-learning platform with course management, progress tracking, and backend API integration.",
      image:
        "/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-teaching-concept-bright-vibrant-violet-135958890.webp",
      tech: ["React", "Express", "PostgreSQL"],
      frontendRepo: "https://github.com/patel192/SkillHub",
      backendRepo: "https://github.com/patel192/Skillhub-backend",
      demo: "https://skill-hub-lac.vercel.app",
    },

    {
      id: 4,
      title: "Expense Manager",
      desc:
        "Full-stack application to track expenses, visualize spending patterns, and manage budgets.",
      image: "/cost-management-rgb-color-icon-vector.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      frontendRepo:
        "https://github.com/patel192/Expense-Manager-Frontend",
      backendRepo: "https://github.com/patel192/Learn-25-node",
      demo: "https://expense-manager-frontend-topaz.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
      >
        Featured Projects
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-slate-400 max-w-2xl text-center mb-14"
      >
        A selection of real-world applications demonstrating full-stack
        development, system design, and production-ready deployment.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <TiltCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <motion.a
        href="https://github.com/patel192"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-14 px-8 py-3 border border-indigo-400 text-indigo-300 
        rounded-xl font-semibold hover:bg-indigo-500/10 transition"
      >
        View More on GitHub →
      </motion.a>
    </section>
  );
};