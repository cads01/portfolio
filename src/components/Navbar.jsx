import { useState, useEffect } from "react";
import { meta } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#e8c97a]">
        {meta.handle}.dev
      </span>

      <ul className="hidden md:flex gap-8 list-none">
        {["Work", "Stack", "About", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 hover:text-white/90 transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-emerald-400">
          {meta.availableFor}
        </span>
      </div>
    </nav>
  );
}
