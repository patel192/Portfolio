import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiGithubactions,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithubactions />, name: "Github Actions" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiPostman />, name: "Postman" },
  ];

  return (
    <section
      id="skills"
      className="py-24 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">
          Skills & Tech Stack
        </h2>

        <p className="text-slate-400 mb-16 max-w-2xl mx-auto">
          Technologies I use to design, build, and deploy scalable web
          applications from frontend to backend.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max gap-10 animate-scroll">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center gap-3 
        bg-white/5 border border-white/10 backdrop-blur 
        px-6 py-4 rounded-xl min-w-[120px]
        hover:border-indigo-400 hover:scale-105 transition"
              >
                <div className="text-3xl text-indigo-400">{skill.icon}</div>
                <span className="text-sm text-slate-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 22s linear infinite;
}
`}
      </style>
    </section>
  );
};
