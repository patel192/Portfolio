import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Briefcase } from "lucide-react";

const SkillCard = ({ name, icon, color }) => (
  <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-xl
                  bg-gray-900 border border-gray-700 hover:border-blue-500 transition">
    <div
      className="w-14 h-14"
      dangerouslySetInnerHTML={{
        __html: simpleIcons.get(icon).svg.replace(
          "<svg",
          `<svg fill="${color}" width="56" height="56"`
        ),
      }}
    />
    <span className="text-sm text-gray-300 font-semibold">{name}</span>
  </div>
);

export const Hero = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: "#60A5FA" },
            links: { enable: true, color: "#60A5FA", opacity: 0.3 },
            move: { enable: true, speed: 2 },
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
        Muhammad <span className="text-blue-400">Patel</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative mt-4 text-lg md:text-xl text-gray-300 z-10"
      >
        Full Stack Web Developer (MERN + Firebase)
      </motion.p>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative mt-6 flex items-center gap-2 text-gray-300 z-10"
      >
        <Briefcase className="text-blue-400" size={18} />
        Unified Mentor Intern – Operation Scheduler & SuperMall Projects
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="relative mt-10 w-full max-w-6xl px-6 z-10"
      >
        {/* Frontend */}
        <h3 className="text-xl font-bold text-blue-400 mb-4 text-left">
          Frontend Skills
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          <SkillCard name="HTML5" icon="html5" color="#E34F26" />
          <SkillCard name="CSS3" icon="css3" color="#1572B6" />
          <SkillCard name="JavaScript" icon="javascript" color="#F7DF1E" />
          <SkillCard name="React" icon="react" color="#61DAFB" />
          <SkillCard name="Tailwind CSS" icon="tailwindcss" color="#38BDF8" />
        </div>

        {/* Backend */}
        <h3 className="text-xl font-bold text-blue-400 mb-4 text-left">
          Backend & Tools
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <SkillCard name="Node.js" icon="nodedotjs" color="#339933" />
          <SkillCard name="Express" icon="express" color="#ffffff" />
          <SkillCard name="MongoDB" icon="mongodb" color="#47A248" />
          <SkillCard name="Firebase" icon="firebase" color="#FFCA28" />
          <SkillCard name="GitHub" icon="github" color="#ffffff" />
        </div>
      </motion.div>
    </section>
  );
};
