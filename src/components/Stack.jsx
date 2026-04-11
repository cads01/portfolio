import { stack } from "../data/portfolio";

export default function Stack() {
  return (
    <section id="stack" className="px-10 py-20 bg-[#141414]">
      <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#e8c97a] mb-10 flex items-center gap-4">
        Stack
        <span className="block w-12 h-px bg-[#e8c97a] opacity-40" />
      </p>

      <div
        className="grid border border-white/5 rounded-sm overflow-hidden"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "0.5px",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {stack.map((item) => (
          <div
            key={item.name}
            className="bg-[#141414] hover:bg-[#1c1c1c] flex flex-col items-center gap-2 py-5 px-3 transition-colors duration-200 cursor-default"
          >
            <span className="text-[22px] leading-none">{item.icon}</span>
            <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/35 text-center">
              {item.name}
            </span>
            <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-white/15 text-center">
              {item.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
