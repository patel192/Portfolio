import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import {
  Briefcase,
  Award,
  Code2,
  Monitor,
  Server,
  Database,
  GitBranch,
  Cloud,
  Cpu,
  Layers,
} from "lucide-react";

export const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center 
      bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden px-6 py-20"
    >
      {/* Background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#60A5FA" },
            links: {
              color: "#60A5FA",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 2, outModes: { default: "bounce" } },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-6xl font-extrabold text-white z-10"
      >
        Hi, I'm <span className="text-blue-400">Muhammad Patel</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative mt-5 text-lg md:text-xl text-gray-300 max-w-2xl z-10"
      >
        Full Stack Developer focused on building scalable, modern web applications
        with strong backend architecture and clean UI experiences.
      </motion.p>

      {/* Experience Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative mt-10 bg-gray-800/50 backdrop-blur border border-gray-700 
        rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-xl z-10"
      >
        <div className="flex items-center gap-3 text-gray-300">
          <Briefcase className="text-blue-400" />
          Unified Mentor Internship Projects
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <Award className="text-blue-400" />
          MERN Applications & Dashboards
        </div>

        <div className="flex items-center gap-3 text-gray-300">
          <Code2 className="text-blue-400" />
          Strong Focus on Architecture & UI
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9 }}
        className="relative mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 z-10"
      >
        {/* Frontend */}
        <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 text-left">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <Monitor /> Frontend
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex gap-2 items-center"><Layers size={18}/> React.js</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> Tailwind CSS</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> HTML5 / CSS3</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> JavaScript (ES6+)</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> Responsive UI</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 text-left">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <Server /> Backend
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex gap-2 items-center"><Cpu size={18}/> Node.js</li>
            <li className="flex gap-2 items-center"><Cpu size={18}/> Express.js</li>
            <li className="flex gap-2 items-center"><Database size={18}/> MongoDB</li>
            <li className="flex gap-2 items-center"><Database size={18}/> PostgreSQL</li>
            <li className="flex gap-2 items-center"><Cpu size={18}/> REST APIs</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 text-left">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
            <GitBranch /> Tools
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            <li className="flex gap-2 items-center"><GitBranch size={18}/> Git & GitHub</li>
            <li className="flex gap-2 items-center"><Cloud size={18}/> Vercel Deployment</li>
            <li className="flex gap-2 items-center"><Cloud size={18}/> Firebase</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> Postman</li>
            <li className="flex gap-2 items-center"><Layers size={18}/> Clean Architecture</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
