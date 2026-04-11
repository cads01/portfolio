import { meta } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-10 py-36 text-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,201,122,0.06) 0%, transparent 70%)",
        }}
      />

      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e8c97a] mb-8 relative">
        Contact
      </p>

      <h2 className="relative text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[1] tracking-[-0.03em] mb-5">
        Let's build
        <br />
        <em
          className="text-[#e8c97a]"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          something real.
        </em>
      </h2>

      <p className="font-mono text-[12px] text-white/35 mb-12 tracking-[0.05em] relative">
        Open to senior full-stack, software management, and remote-first engineering roles
      </p>

      <div className="relative flex justify-center flex-wrap gap-8">
        <a
          href={`mailto:${meta.email}`}
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 border-b border-white/15 pb-px hover:text-[#e8c97a] hover:border-[#e8c97a] transition-all duration-200"
        >
          Email
        </a>
        <a
          href={meta.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 border-b border-white/15 pb-px hover:text-[#e8c97a] hover:border-[#e8c97a] transition-all duration-200"
        >
          GitHub
        </a>
        <a
          href={meta.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 border-b border-white/15 pb-px hover:text-[#e8c97a] hover:border-[#e8c97a] transition-all duration-200"
        >
          LinkedIn
        </a>
        <a
          href={meta.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 border-b border-white/15 pb-px hover:text-[#e8c97a] hover:border-[#e8c97a] transition-all duration-200"
        >
          Twitter / X
        </a>
      </div>
    </section>
  );
}
