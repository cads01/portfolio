import { projects } from "../data/portfolio";
import { useState } from "react";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#0d0d0d] hover:bg-[#141414] p-8 transition-colors duration-300 cursor-pointer group ${
        project.featured ? "col-span-2" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          background: "rgba(232,201,122,0.1)",
          filter: "blur(50px)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Arrow */}
      <span
        className="absolute top-7 right-7 text-white/20 group-hover:text-[#e8c97a] text-base transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>

      <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#e8c97a] mb-4">
        {project.tag}
      </p>
      <h3
        className={`font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 ${
          project.featured ? "text-[2.5rem]" : "text-[1.5rem]"
        }`}
      >
        {project.name}
      </h3>
      <p className="font-mono text-[12px] text-white/40 leading-[1.7] mb-5 max-w-[540px]">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.pills.map((pill) => (
          <span
            key={pill}
            className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/30 border border-white/10 px-2.5 py-1 rounded-sm"
          >
            {pill}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/30 hover:text-[#e8c97a] transition-colors border-b border-white/10 pb-px"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub →
          </a>
        )}
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/30 hover:text-[#e8c97a] transition-colors border-b border-white/10 pb-px"
            onClick={(e) => e.stopPropagation()}
          >
            Live demo →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-10 py-28">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e8c97a] mb-10 flex items-center gap-4">
        Work
        <span className="block w-12 h-px bg-[#e8c97a] opacity-40" />
      </p>

      <div
        className="grid border border-white/5 rounded-sm overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0.5px",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
