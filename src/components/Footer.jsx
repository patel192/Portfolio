import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-400 pt-20 pb-10">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.29,22.24,104.05,29.26,158,17.39,70.88-15.48,136.34-57.74,207-59.15,72.86-1.45,136.69,39.73,209.55,45.87,60.13,5.11,113.37-17.91,172-31.34,66.46-15.21,130.16-8.46,196,7.5,52.7,13.21,103.13,31.69,155,38.77V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V15.81C43,36.49,100.29,56,167,59.41c89.09,4.73,171.75-34.21,260-38.53,57.26-2.79,112.48,12.52,169,28.08,54.25,15,108.07,24.49,164,20.22,66.86-5.08,130.44-33.74,197-44.43V0Z"
            opacity=".5"
            fill="currentColor"
          ></path>
          <path
            d="M0,0V5.63C150.82,32.82,333.15,55.67,500,44.53,685.71,32,833.64-7.76,1000,1.29c80.44,4.66,159.16,22.25,238,38.91V0Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto flex flex-col items-center gap-6 text-center"
      >
        {/* Role / Branding */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Full-Stack Web Developer
        </h2>
        <p className="text-gray-400 text-sm">
          Turning ideas into scalable apps with clean code & creative UIs
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="mailto:patelmuhammad192@gmail.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition 
                       shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/patel192"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition 
                       shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition 
                       shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition 
                       shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          >
            <Twitter size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Patel Muhammad. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
