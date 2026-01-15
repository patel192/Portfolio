import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  Briefcase,
  Code2,
  Database,
  Server,
  Layers,
  Cpu
} from "lucide-react";

export const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* Particle Background */}
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
            links: { color: "#60A5FA", distance: 150, enable: true, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, outModes: { default: "bounce" } },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-5xl md:text-6xl font-extrabold text-white z-10"
      >
        Hi, I'm <span className="text-blue-400">Muhammad Patel</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-2xl z-10"
      >
        A <span className="font-semibold text-blue-400">Full Stack Developer</span> specializing in building
        scalable web applications, real-time systems, and modern UI experiences.
      </motion.p>

      {/* Skills + Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative mt-10 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 w-full max-w-5xl shadow-xl z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-gray-300 text-sm">

          {/* Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Briefcase size={18} /> Experience
            </div>
            <p>Internship Projects:</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Operation Scheduler (Healthcare System)</li>
              <li>SuperMall E-commerce Platform</li>
            </ul>
            <p>Major Projects:</p>
            <ul className="list-disc list-inside text-gray-400">
              <li>Expense Manager</li>
              <li>SkillHub LMS Platform</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Layers size={18} /> Frontend
            </div>
            <ul className="space-y-1 text-gray-400">
              <li className="flex items-center gap-2"><Code2 size={14}/> React.js</li>
              <li className="flex items-center gap-2"><Code2 size={14}/> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><Code2 size={14}/> HTML5 & CSS3</li>
              <li className="flex items-center gap-2"><Code2 size={14}/> Tailwind CSS</li>
              <li className="flex items-center gap-2"><Code2 size={14}/> Responsive UI/UX</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <Server size={18} /> Backend & Tools
            </div>
            <ul className="space-y-1 text-gray-400">
              <li className="flex items-center gap-2"><Database size={14}/> MongoDB</li>
              <li className="flex items-center gap-2"><Database size={14}/> Firebase (Auth, Firestore, Hosting)</li>
              <li className="flex items-center gap-2"><Server size={14}/> Node.js & Express</li>
              <li className="flex items-center gap-2"><Cpu size={14}/> REST APIs</li>
              <li className="flex items-center gap-2"><Cpu size={14}/> Git & GitHub</li>
              <li className="flex items-center gap-2"><Cpu size={14}/> Vercel & Firebase Deployment</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
