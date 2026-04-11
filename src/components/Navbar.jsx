import { useState, useEffect } from "react";
import { meta } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = ["Work", "Stack", "About", "Experience", "Contact"];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id.toLowerCase());
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#080808]/95 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#e8c97a]">
          {meta.handle}.dev
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 hover:text-white/90 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop badge */}
        <div className="hidden md:flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-emerald-400">
            {meta.availableFor}
          </span>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-emerald-400">Open</span>
          </span>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="block h-px bg-white/70 transition-all duration-300 origin-center"
              style={{ width: "22px", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none" }} />
            <span className="block h-px bg-white/70 transition-all duration-300"
              style={{ width: "22px", opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px bg-white/70 transition-all duration-300 origin-center"
              style={{ width: "22px", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-8 bg-[#080808] transition-all duration-500 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <ul className="list-none flex flex-col gap-2 mb-12">
          {links.map((item, i) => (
            <li key={item} style={{
              transition: `opacity 0.4s ${i * 0.06 + 0.1}s, transform 0.4s ${i * 0.06 + 0.1}s`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
            }}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 hover:text-[#e8c97a] transition-colors duration-200 py-1 block"
              >
                <span className="text-[#e8c97a] mr-3 text-[9px]">0{i + 1}</span>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/5 pt-8"
          style={{
            transition: "opacity 0.4s 0.4s, transform 0.4s 0.4s",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(8px)",
          }}>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20 mb-3">Get in touch</p>
          <a href={`mailto:${meta.email}`}
            className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-white/80 hover:text-[#e8c97a] transition-colors duration-200 break-all">
            {meta.email}
          </a>
        </div>

        <div className="flex gap-6 mt-8"
          style={{ transition: "opacity 0.4s 0.5s", opacity: menuOpen ? 1 : 0 }}>
          {[
            { label: "GitHub", href: meta.github },
            { label: "LinkedIn", href: meta.linkedin },
            { label: "Twitter", href: meta.twitter },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
