import { stats } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-10 py-28">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e8c97a] mb-14 flex items-center gap-4">
        About
        <span className="block w-12 h-px bg-[#e8c97a] opacity-40" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left — heading */}
        <div>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.025em]">
            I build products,
            <br />
            not just{" "}
            <em
              className="text-[#e8c97a]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              features.
            </em>
          </h2>
        </div>

        {/* Right — bio + stats */}
        <div>
          <p className="font-mono text-[13px] text-white/45 leading-[1.9] mb-8">
            I'm a full-stack engineer with 10+ years spanning software development,
            network infrastructure, and IT management. I take ownership from the first
            commit to production — thinking in systems, shipping in reality. Currently
            open to senior engineering or software management roles, fully remote.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#141414] border border-white/5 rounded-sm px-5 py-4 hover:border-white/12 transition-colors duration-200"
              >
                <div className="text-[2.2rem] font-extrabold text-[#e8c97a] leading-none mb-1">
                  {s.number}
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/35">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
