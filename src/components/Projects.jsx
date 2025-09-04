import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
export const Projects = () => {
  const projects = [
    {
      title: "Expense Manager",
      desc: "A modern web app to track expenses, visualize spending, and manage budgets with ease.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourname/expense-manager",
      demo: "https://expense-manager-demo.com",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "SkillHub",
      desc: "An e-learning platform with courses, progress tracking, and certificates for learners.",
      tech: ["React", "Express", "PostgreSQL"],
      github: "https://github.com/yourname/skillhub",
      demo: "https://skillhub-demo.com",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
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
