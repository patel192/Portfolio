import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
export const WorkModal = ({ open, onClose, project }) => {
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400"
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-56 object-cover mb-4"
            />

            {/* Project Title */}
            <h2 className="text-2xl font-bold text-blue-400 mb-2">
              {project.title}
            </h2>

            {/* Project Description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Project Link */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Visit Project
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
