import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 
                 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-6"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-2xl text-center mb-10"
      >
        Interested in working together or just want to say hi?  
        Drop me a message and I’ll get back to you!
      </motion.p>

      {/* Social Links */}
      <div className="flex gap-6 mb-12">
        <a
          href="mailto:youremail@example.com"
          className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition 
                     shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition 
                     shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition 
                     shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition 
                     shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
        >
          <Twitter size={24} />
        </a>
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-lg flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg 
                     text-white font-semibold transition 
                     shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.9)]"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  )
}
