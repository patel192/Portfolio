import { motion } from "framer-motion";
import { Code, Database, Palette, Globe } from "lucide-react";
export const About = () => {
  const skills = [
    {
      icon: <Code size={28} />,
      title: "Frontend",
      desc: "React, Tailwind, JavaScript",
    },
    {
      icon: <Database size={28} />,
      title: "Backend",
      desc: "Node.js, Express, MongoDB",
    },
    {
      icon: <Palette size={28} />,
      title: "UI/UX",
      desc: "Clean, Modern, Responsive Design",
    },
    {
      icon: <Globe size={28} />,
      title: "Deployment",
      desc: "Vercel, Netlify, Render",
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-6"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center text-gray-300 mb-12"
      >
        I’m a passionate developer who loves building{" "}
        <span className="text-blue-400">smooth, interactive web apps</span>.
        Always eager to learn new technologies and deliver
        <span className="text-blue-400"> high-quality work</span>.
      </motion.p>

      {/* Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-800/60 rounded-2xl shadow-lg hover:shadow-blue-500/40 border border-gray-700 hover:border-blue-400 transition cursor-pointer"
          >
            <div className="text-blue-400 mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
