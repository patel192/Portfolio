import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Expense Manager",
      desc: "A modern web app to track expenses, visualize spending, and manage budgets with ease.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourname/expense-manager",
      demo: "https://expense-manager-demo.com",
      image: "https://source.unsplash.com/600x400/?finance,app", // replace with your screenshot
    },
    {
      title: "SkillHub",
      desc: "An e-learning platform with courses, progress tracking, and certificates for learners.",
      tech: ["React", "Express", "PostgreSQL"],
      github: "https://github.com/yourname/skillhub",
      demo: "https://skillhub-demo.com",
      image: "https://source.unsplash.com/600x400/?education,app", // replace with your screenshot
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-800/30 border border-gray-700 hover:border-blue-500 transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-700/70 hover:bg-gray-600 rounded-lg transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
