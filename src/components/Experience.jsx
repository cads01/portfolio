import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="px-10 py-28 bg-[#141414]">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e8c97a] mb-10 flex items-center gap-4">
        Experience
        <span className="block w-12 h-px bg-[#e8c97a] opacity-40" />
      </p>

      <div className="flex flex-col">
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`grid grid-cols-[140px_1fr] gap-12 py-10 border-b border-white/5 group ${
              exp.highlight ? "relative" : ""
            }`}
          >
            {exp.highlight && (
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#e8c97a] opacity-60"
                style={{ borderRadius: "2px" }}
              />
            )}

            {/* Year */}
            <div className="pt-1">
              <span className="font-mono text-[11px] tracking-[0.1em] text-white/30">
                {exp.period}
              </span>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-[1.05rem] font-bold tracking-[-0.01em] leading-tight">
                  {exp.role}
                </h3>
                {exp.highlight && (
                  <span className="flex-shrink-0 font-mono text-[9px] tracking-[0.12em] uppercase text-emerald-400 border border-emerald-400/25 px-2.5 py-1 rounded-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to remote
                  </span>
                )}
              </div>
              <p className="font-mono text-[11px] text-[#e8c97a] tracking-[0.08em] mb-3">
                {exp.company}
              </p>
              <p className="font-mono text-[12px] text-white/40 leading-[1.75] max-w-[540px] mb-4">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-[0.08em] uppercase text-white/25 border border-white/8 px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
