import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
export const WorkModal = ({ open, onClose, project }) => {
   const [index, setIndex] = useState(0);

  if (!project) return null;

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
            >
              <X size={24} />
            </button>

            {/* Image Carousel */}
            <div className="relative w-full h-72 flex items-center justify-center mb-6 overflow-hidden rounded-lg">
              <motion.img
                key={index}
                src={project.images[index]}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              />

              {/* Prev/Next Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 bg-black/50 p-2 rounded-full hover:bg-black/70"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 bg-black/50 p-2 rounded-full hover:bg-black/70"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Project Info */}
            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4">{project.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gray-700/70 hover:bg-gray-700 text-white"
                >
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
