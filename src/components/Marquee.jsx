import { marqueeItems } from "../data/portfolio";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-t border-b border-white/5 py-3.5 bg-[#141414]">
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 flex-shrink-0">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
              {item}
            </span>
            <span className="text-[#e8c97a] text-[10px]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
