import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Manager",
      desc: "A full-stack app to track daily expenses with charts.",
      image: "/cost-management-rgb-color-icon-vector.jpg", // ✅ fixed path
      tech: ["React", "Node.js", "MongoDB"],
      frontendRepo: "https://github.com/patel192/Expense-Manager-Frontend",
      backendRepo: "https://github.com/patel192/Learn-25-node",
      demo: "https://expense-manager-frontend-topaz.vercel.app",
    },
    {
      id: 2,
      title: "SkillHub",
      desc: "An e-learning platform with progress tracking.",
      image:
        "/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-teaching-concept-bright-vibrant-violet-135958890.webp",
      tech: ["React", "Express", "PostgreSQL"],
      frontendRepo: "https://github.com/patel192/SkillHub",
      backendRepo: "https://github.com/patel192/Skillhub-backend",
      demo: "https://skill-hub-lac.vercel.app",
    },
    {
      id: 2,
      title: "Operation Scheduler",
      desc: "Hospital OT scheduling system with Admin, Doctor & OT Staff dashboards.",
      image: "/operation-scheduler.jpg",
      tech: ["JavaScript", "Tailwind", "Firebase", "Firestore"],
      frontendRepo: "https://github.com/patel192/Operation-Scheduler-System",
      backendRepo: "https://github.com/patel192/Operation-Scheduler-System",
      demo: "https://operation-scheduler-a44f8.web.app/",
    },
    {
      id: 2,
      title: "Supermall Web Application",
      desc: "Multi-role e-commerce platform with merchants, admins, offers & analytics.",
      image: "/Supermall-web-app.jpg",
      tech: ["HTML", "Tailwind", "Firebase"],
      frontendRepo: "https://github.com/patel192/Super-mall-WebApp",
      backendRepo: "https://github.com/patel192/Super-mall-WebApp",
      demo: "https://supermall-web-app-ee373.web.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 
                 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <TiltCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
