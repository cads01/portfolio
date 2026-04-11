import { meta } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-10 pb-24 overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "rgba(232,201,122,0.08)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[50px] left-[-60px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "rgba(122,195,232,0.06)",
          filter: "blur(100px)",
        }}
      />

      {/* Content */}
      <p
        className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#e8c97a] mb-6"
        style={{ animation: "fadeUp 0.8s 0.2s ease both" }}
      >
        Full-Stack Engineer · {meta.location}
      </p>

      <h1
        className="text-[clamp(4rem,10vw,9rem)] font-extrabold leading-[0.92] tracking-[-0.03em] mb-5"
        style={{ animation: "fadeUp 0.8s 0.35s ease both" }}
      >
        Building things
        <br />
        that{" "}
        <em
          className="not-italic text-[#e8c97a]"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
        >
          actually work.
        </em>
      </h1>

      <p
        className="font-mono text-[13px] text-white/45 max-w-[420px] leading-[1.8] mb-10"
        style={{ animation: "fadeUp 0.8s 0.5s ease both" }}
      >
        I architect and ship full-stack products end-to-end — from database schema to
        polished UI — with a bias for clean code and measurable outcomes. 10+ years
        across software engineering, network management, and IT infrastructure.
      </p>

      <div
        className="flex items-center gap-6 flex-wrap"
        style={{ animation: "fadeUp 0.8s 0.65s ease both" }}
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-[#e8c97a] text-[#080808] font-mono text-[11px] tracking-[0.1em] uppercase px-7 py-3.5 rounded-sm hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5"
        >
          View my work →
        </a>
        <a
          href={meta.resume}
          className="font-mono text-[11px] text-white/45 tracking-[0.1em] uppercase border-b border-white/15 pb-0.5 hover:text-white/90 transition-colors duration-200"
        >
          Download résumé
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-10 flex flex-col items-center gap-2"
        style={{ animation: "fadeUp 1s 1s ease both" }}
      >
        <span
          className="font-mono text-[9px] text-white/25 tracking-[0.2em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, #e8c97a, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
