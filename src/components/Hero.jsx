import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6"
    >
      {/* Background particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#6366F1" },
            links: {
              color: "#6366F1",
              distance: 140,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: { enable: true, speed: 1.5 },
            number: { value: 50 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 rounded-full 
          bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6"
        >
          MERN Stack Developer • Full-Stack Engineer
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            Muhammad Patel
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          I build scalable full-stack web applications with clean architecture,
          robust backend systems, and modern user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold
            shadow hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 border border-indigo-400 text-indigo-300 
            rounded-xl font-semibold hover:bg-indigo-500/10 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 text-slate-300 
            rounded-xl font-semibold hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
        >
          <div>✔ MERN Applications</div>
          <div>✔ Production-Ready Projects</div>
          <div>✔ Internship Experience</div>
          <div>✔ Clean Architecture</div>
        </motion.div>
      </div>
    </section>
  );
};