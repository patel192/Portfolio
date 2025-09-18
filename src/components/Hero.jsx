import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Briefcase, Code, Award } from "lucide-react";
export const Hero = () => {
    const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
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

      {/* Hero Content */}
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
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-4 text-lg md:text-xl text-gray-300 max-w-xl z-10"
      >
        A passionate <span className="font-semibold text-blue-400">Full Stack Developer</span>{" "}
        building smooth, modern, and interactive web experiences.
      </motion.p>

      {/* Modern Detail Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative mt-8 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 flex flex-col gap-6 md:flex-row md:gap-10 items-center shadow-lg z-10"
      >
        {/* Internship */}
        <div className="flex items-center gap-3 text-gray-300">
          <Briefcase className="text-blue-400" />
          <span>Internship: Built <span className="text-blue-400">Expense Manager</span></span>
        </div>

        {/* Personal Project */}
        <div className="flex items-center gap-3 text-gray-300">
          <Award className="text-blue-400" />
          <span>Personal Project: <span className="text-blue-400">SkillHub</span></span>
        </div>

        {/* Skills */}
        <div className="flex items-center gap-3 text-gray-300">
          <Code className="text-blue-400" />
          <span>
            Skills: React • Node.js • Express • MongoDB • Tailwind
          </span>
        </div>
      </motion.div>
    </section>
  )
}
