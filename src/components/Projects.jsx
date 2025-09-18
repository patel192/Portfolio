import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
export const Projects = () => {
  const projects = [
  {
    id: 1,
    title: "Expense Manager",
    desc: "A full-stack app to track daily expenses with charts.",
    images: ["public/cost-management-rgb-color-icon-vector.jpg"
      
    ],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/expense-manager",
    demo: "https://expense-manager-frontend-sw2e.vercel.app"
  },
  {
    id: 2,
    title: "SkillHub",
    desc: "An e-learning platform with progress tracking.",
    images: [
      "public/students-using-e-learning-platform-video-laptop-graduation-cap-online-education-teaching-concept-bright-vibrant-violet-135958890.webp"
    ],
    tech: ["React", "Express", "PostgreSQL"],
    github: "https://github.com/yourname/skillhub",
    demo: "https://skill-hub-aq91.vercel.app"
  }
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
