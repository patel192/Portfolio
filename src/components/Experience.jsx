import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "Unified Mentor",
      duration: "Oct 2025 — Jan 2026",
      highlights: [
        "Delivered production-ready applications using JavaScript & Firebase",
        "Built role-based dashboards with real-time Firestore sync",
        "Implemented secure authentication & authorization guards",
        "Designed scalable modular architecture",
        "Reduced data inconsistencies via real-time validation",
      ],
    },
    {
      role: "MERN Stack Web Development Intern",
      company: "Grownited Pvt Ltd",
      duration: "Jan 2025 — Apr 2025",
      highlights: [
        "Developed full-stack expense tracking system",
        "Built secure REST APIs with user-specific data isolation",
        "Designed responsive mobile-optimized dashboards",
        "Implemented automated testing & coverage reporting",
        "Created CI/CD pipelines using GitHub Actions",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-indigo-400 mb-16"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-white/10 space-y-12">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-lg" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-400 transition shadow-lg">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Briefcase size={18} className="text-indigo-400" />
                    {exp.role}
                  </h3>

                  <span className="text-sm text-indigo-300 flex items-center gap-2">
                    <Calendar size={16} />
                    {exp.duration}
                  </span>
                </div>

                <p className="text-indigo-400 font-medium mb-4">
                  {exp.company}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-indigo-400">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};