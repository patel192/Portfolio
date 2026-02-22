import { Github, ExternalLink, Star } from "lucide-react";
import { useState } from "react";
import { WorkModal } from "./WorkModal";

export const TiltCard = ({ project }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -12;
    const rotateY = (x / rect.width - 0.5) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="relative group rounded-2xl overflow-hidden cursor-pointer 
        bg-white/5 backdrop-blur border border-white/10 
        hover:border-indigo-500/40 transition"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 
            bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            <Star size={14} /> Featured
          </div>
        )}

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover 
            group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-white 
            group-hover:text-indigo-400 transition">
            {project.title}
          </h3>

          <p className="text-slate-400 mb-5 line-clamp-2">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full 
                bg-indigo-500/10 text-indigo-300 border border-indigo-400/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">

            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-white/5 hover:bg-white/10 text-slate-200 transition"
              >
                <Github size={18} /> Frontend
              </a>
            )}

            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-white/5 hover:bg-white/10 text-slate-200 transition"
              >
                <Github size={18} /> Backend
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-indigo-600 hover:bg-indigo-700 text-white transition shadow"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <WorkModal
        open={open}
        onClose={() => setOpen(false)}
        project={project}
      />
    </>
  );
};