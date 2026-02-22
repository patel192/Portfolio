import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 text-gray-400">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Closing Line */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Let’s build something great together
        </h2>

        <p className="mt-4 max-w-xl text-gray-400">
          Open to internships, freelance work, and full-time opportunities.
          Feel free to reach out if you have a project or role in mind.
        </p>

        {/* Contact Email */}
        <p className="mt-4 text-blue-400 font-medium">
          patelmuhammad192@gmail.com
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <a
            href="mailto:patelmuhammad192@gmail.com"
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            <Mail size={18} /> Contact Me
          </a>

          <a
            href="/Muhammad__Fullstack_developer_2026.pdf"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition"
          >
            <FileText size={18} /> View Resume
          </a>

        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-10">

          <a
            href="https://github.com/patel192"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="www.linkedin.com/in/patel-muhammad-658952355"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:patelmuhammad192@gmail.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition"
          >
            <Mail size={22} />
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