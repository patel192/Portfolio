import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_fe6iq6r",
        "template_1hbn9z5",
        formRef.current,
        "rffm0QIAXm2l6dM7o",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          toast.error("Something went wrong. Try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-2 text-white"
    >
      {" "}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
        {/* LEFT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-blue-400 mb-6">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            I’m currently open to internships and full-time opportunities. If
            you have a project, role, or collaboration in mind — feel free to
            reach out.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-blue-400" />
            <span className="text-gray-300">patelmuhammad192@gmail.com</span>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur border border-white/10
                 rounded-2xl p-8 shadow-xl flex flex-col gap-5"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
            Send a Message
          </h3>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-900 border border-gray-700
                   focus:border-blue-500 outline-none"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-900 border border-gray-700
                   focus:border-blue-500 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-gray-900 border border-gray-700
                   focus:border-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700
                   rounded-lg font-semibold transition
                   disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
