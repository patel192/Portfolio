import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { WorkModal } from "./WorkModal";
export const TiltCard = ({ project, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false); // modal state

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -15;
    const rotateY = (x / rect.width - 0.5) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="relative group rounded-2xl overflow-hidden cursor-pointer 
                   bg-gray-800/30 border border-gray-700 transition-transform"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
          boxShadow:
            rotate.x !== 0 || rotate.y !== 0
              ? "0 20px 40px rgba(59,130,246,0.5), 0 0 25px rgba(59,130,246,0.7)"
              : "0 5px 15px rgba(0,0,0,0.4)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">{project.desc}</p>

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

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                         bg-gray-700/70 hover:bg-gray-700
                         text-white transition 
                         shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
            >
              <Github size={18} /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                         bg-blue-600 hover:bg-blue-700
                         text-white transition 
                         shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.9)]"
            >
              <ExternalLink size={18} /> Live Demo
            </a>

            {/* View More (Modal) */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                         bg-blue-500/20 hover:bg-blue-600/30
                         text-blue-400 transition"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <WorkModal open={open} onClose={() => setOpen(false)} project={project} />
    </>
  );
};
