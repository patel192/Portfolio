import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast,{Toaster} from "react-hot-toast";

export const Contact = () => {
   const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

   emailjs.sendForm("service_fe6iq6r", "template_1hbn9z5", formRef.current, "rffm0QIAXm2l6dM7o")
  .then(() => {
      toast.custom(<AnimatedToast message="Message sent successfully!" type="success" />);
      setLoading(false);
      formRef.current.reset();
  }, (error) => {
      console.error(error.text);
      toast.custom(<AnimatedToast message="Something went wrong. Try again." type="error" />);
      setLoading(false);
  });
;
  };
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

      {/* Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-lg flex flex-col gap-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 rounded-lg bg-gray-800 border border-gray-700 
                     focus:outline-none focus:border-blue-500 text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg 
                     text-white font-semibold transition 
                     shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.9)] disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="flex gap-6 mt-12">
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
      
    </section>
  )
}
const AnimatedToast = ({ message, type }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.4 }}
    className={`px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    }`}
  >
    {type === "success" ? "✅" : "❌"} {message}
  </motion.div>
);