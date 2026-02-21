import { motion } from "framer-motion";
import { Rocket, Brain, ShieldCheck, Users } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Rocket size={28} />,
      title: "Product Builder Mindset",
      desc: "I focus on building real-world applications that solve practical problems, not just demo projects.",
    },
    {
      icon: <Brain size={28} />,
      title: "Strong Problem Solving",
      desc: "Comfortable designing systems, debugging complex issues, and optimizing performance.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Clean Architecture",
      desc: "Emphasis on maintainable code, scalable backend structure, and best practices.",
    },
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      desc: "Experience working on guided projects and collaborating with mentors during internship.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 
      bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white mb-6"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center text-slate-300 mb-14 text-lg leading-relaxed"
      >
        I'm a <span className="text-indigo-400 font-semibold">Full-Stack Developer</span> specializing in the MERN stack,
        passionate about building scalable web applications with strong backend
        architecture and clean user experiences.

        <br /><br />

        I enjoy turning complex ideas into reliable products — from system design
        and API development to intuitive front-end interfaces. My goal is to
        contribute to impactful software while continuously improving as an engineer.
      </motion.p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-7 bg-white/5 backdrop-blur border border-white/10 
            rounded-2xl shadow hover:border-indigo-500/40 hover:shadow-indigo-500/20 
            transition"
          >
            <div className="text-indigo-400 mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};