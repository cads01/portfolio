import { meta } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-10 py-5 flex justify-between items-center border-t border-white/5">
      <span className="font-mono text-[10px] tracking-[0.1em] text-white/15">
        © {year} {meta.handle} · All rights reserved
      </span>
      <span className="font-mono text-[10px] tracking-[0.1em] text-white/15">
        Built with React + Vite · Deployed on Vercel
      </span>
    </footer>
  );
}
