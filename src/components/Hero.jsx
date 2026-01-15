import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Briefcase, User, Layers } from "lucide-react";

// Skill Icons
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiPostman, SiVercel
} from "react-icons/si";

const Skill = ({ name, icon, color }) => (
  <div
    className="flex items-center gap-4 px-6 py-5 text-lg font-semibold rounded-2xl 
               bg-gray-900 border border-gray-700 
               hover:border-blue-500 transition"
  >
    <span className="text-3xl" style={{ color }}>
      {icon}
    </span>
    <span className="text-white">{name}</span>
  </div>
);

export const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#60A5FA" },
            links: { enable: true, color: "#60A5FA", opacity: 0.3 },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Muhammad <span className="text-blue-400">Patel</span>
          </h1>

          <p className="text-2xl text-gray-300">
            Full Stack Web Developer (MERN • Firebase)
          </p>

          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            I am a Full Stack Web Developer focused on building scalable, real-world
            web applications with modern technologies. I have developed complex
            systems like hospital operation scheduling platforms and multi-role
            e-commerce platforms, with strong emphasis on clean UI, architecture,
            and maintainable code.
          </p>
        </motion.div>

        {/* EXPERIENCE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 space-y-3">
            <User className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Professional Focus</h3>
            <p className="text-gray-400">
              Strong focus on frontend architecture, backend logic, and real-world
              system building.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 space-y-3">
            <Briefcase className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Internship Experience</h3>
            <p className="text-gray-400">
              Unified Mentor Internship – Built production-level applications:
              Operation Scheduler & SuperMall Web App.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 space-y-3">
            <Layers className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Project Approach</h3>
            <p className="text-gray-400">
              Focused on building structured, modular, and scalable systems.
            </p>
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-16"
        >
          <h2 className="text-4xl font-bold text-center text-blue-400">
            Technical Skills
          </h2>

          {/* Frontend */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Frontend Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Skill name="HTML5" icon={<FaHtml5 />} color="#E34F26" />
              <Skill name="CSS3" icon={<FaCss3Alt />} color="#1572B6" />
              <Skill name="JavaScript" icon={<FaJs />} color="#F7DF1E" />
              <Skill name="React.js" icon={<FaReact />} color="#61DAFB" />
              <Skill name="Tailwind CSS" icon={<SiTailwindcss />} color="#38BDF8" />
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Backend & Database</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Skill name="Node.js" icon={<FaNodeJs />} color="#3C873A" />
              <Skill name="MongoDB" icon={<SiMongodb />} color="#47A248" />
              <Skill name="Firebase" icon={<SiFirebase />} color="#FFCA28" />
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Tools & Workflow</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Skill name="Git & GitHub" icon={<FaGitAlt />} color="#F05032" />
              <Skill name="Postman" icon={<SiPostman />} color="#FF6C37" />
              <Skill name="Vercel" icon={<SiVercel />} color="#ffffff" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
