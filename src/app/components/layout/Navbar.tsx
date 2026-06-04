import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "O Escritório", href: "#escritorio" },
    { label: "Nossa Atuação", href: "#atuacao" },
    { label: "Advogados", href: "#advogados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[2286px] mx-auto px-6 md:px-[120px] flex items-center justify-between h-[100px] md:h-[160px]">
        <Logo className="w-[100px] md:w-[140px] h-auto" color="#1A1A1A" />
        <div className="hidden md:flex gap-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-['Inter',sans-serif] text-[#1A1A1A] hover:opacity-70 transition-opacity text-nav ${i === 0 ? "border-b border-black pb-1" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-[6px]">
            <span className={`block w-[28px] h-[1px] bg-black transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[28px] h-[1px] bg-black transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-[28px] h-[1px] bg-black transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block py-3 font-['Inter',sans-serif] text-[#32353A]" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
