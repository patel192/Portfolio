import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
return ( <footer className="relative text-gray-400 pt-24 pb-12">


  {/* Soft Top Glow */}
  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
  >
    {/* Name / Branding */}
    <h2 className="text-3xl font-extrabold text-white">
      Muhammad Patel
    </h2>

    <p className="mt-2 text-blue-400 font-medium">
      Full-Stack MERN Developer
    </p>

    {/* Tagline */}
    <p className="mt-4 max-w-xl text-gray-400 leading-relaxed">
      I build scalable web applications with clean architecture,
      modern UI, and production-ready backend systems.
    </p>

    {/* Availability Badge */}
    <div className="mt-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
      ● Open to internships & full-time opportunities
    </div>

    {/* Social Links */}
    <div className="flex gap-5 mt-8">
      <a
        href="mailto:patelmuhammad192@gmail.com"
        className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
      >
        <Mail size={22} />
      </a>

      <a
        href="https://github.com/patel192"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
      >
        <Github size={22} />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
      >
        <Linkedin size={22} />
      </a>
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-gray-800 my-10" />

    {/* Bottom */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm text-gray-500 gap-4">
      <p>
        © {new Date().getFullYear()} Muhammad Patel. All rights reserved.
      </p>

      <p className="text-gray-600">
        Built with React • Tailwind • Framer Motion
      </p>
    </div>
  </motion.div>
</footer>


);
};
