import { useState } from "react";
import svgPaths from "../imports/svg-ttosx3q9hh";

// Proejct images
import imgHeroBg from "../assets/images/hero-bg-pattern.png";
import imgOffice from "../assets/images/office-building.png";
import imgGabriela from "../assets/images/gabriela-nepomuceno.png";
import imgPaulo from "../assets/images/paulo-waterloo.png";
import imgAtalita from "../assets/images/atalita-yamamoto.png";
import imgFooterBg from "../assets/images/footer-bg.png";


const COLORS = {
  dark: "#1A1A1A",
  darkAlt: "#262626",
  gold: "#A07C3D",
  light: "#DADAD7",
  accent: "#5B728E",
  blue: "#5D7B93",
  cardBg: "#1E293B",
};

function Logo({ color = "#33363B", className = "" }: { color?: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 99 61" fill="none">
      <g clipPath="url(#logoClip)">
        <g>
          <path d={svgPaths.p20d3ee80} fill={color} />
          <path d={svgPaths.p1f763f00} fill={color} />
          <path d={svgPaths.p1bfcac00} fill={color} />
          <path d={svgPaths.pe80f900} fill={color} />
          <path d={svgPaths.p23583a00} fill={color} />
          <path d={svgPaths.p2df23480} fill={color} />
          <g>
            <path d={svgPaths.p16c29c00} fill={color} />
            <path d={svgPaths.pde9d880} fill={color} />
          </g>
        </g>
        <path d={svgPaths.p32dc8b00} fill="#928F61" />
        <path d={svgPaths.p1334c400} fill={color} />
        <g>
          <path d={svgPaths.p34c0a400} fill={color} />
          <path d={svgPaths.p16ca0600} fill={color} />
          <path d={svgPaths.p2e29b200} fill={color} />
          <path d={svgPaths.p1458bd80} fill={color} />
          <path d={svgPaths.p304f1f40} fill={color} />
          <path d={svgPaths.p7a28a00} fill={color} />
          <path d={svgPaths.pbe70800} fill={color} />
          <path d={svgPaths.p4add570} fill={color} />
          <path d={svgPaths.p21727000} fill={color} />
        </g>
      </g>
      <defs>
        <clipPath id="logoClip">
          <rect width="99" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function NWWatermark({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden absolute inset-0 flex items-center justify-center opacity-[0.03] ${className}`}>
      <svg viewBox="0 0 200 120" fill="none" className="w-[150%] h-auto min-w-[1000px] scale-[1.3] -rotate-12">
        <path d={svgPaths.p20d3ee80} fill="currentColor" />
        <path d={svgPaths.p1f763f00} fill="currentColor" />
        <path d={svgPaths.p1bfcac00} fill="currentColor" />
        <path d={svgPaths.pe80f900} fill="currentColor" />
        <path d={svgPaths.p23583a00} fill="currentColor" />
        <path d={svgPaths.p2df23480} fill="currentColor" />
        <path d={svgPaths.p32dc8b00} fill="currentColor" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "O Escritório", href: "#escritorio" },
    { label: "Nossa Atuação", href: "#atuacao" },
    { label: "Advogados", href: "#advogados" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-[70px] md:h-[80px]">
        <Logo className="w-[70px] md:w-[80px] h-auto" />
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-['Inter',sans-serif] font-medium text-[#1A1A1A] hover:text-[#5D7B93] transition-colors" style={{ fontSize: 15 }}>
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

function Hero() {
  return (
    <>
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-white z-10">
        <NWWatermark className="text-[#000]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full py-[120px] md:py-[150px]">
          <div className="max-w-[340px] md:max-w-[700px] md:ml-auto">
            <h1 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A]" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1.05 }}>
              Condução jurídica de casos que exigem estruturação estratégica e responsabilidade na tomada de decisões.
            </h1>
            <p className="mt-5 md:mt-8 font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80" style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.6 }}>
              Prática construída a partir de experiência sólida em contextos que exigem responsabilidade, planejamento e tomada de decisões conscientes.
            </p>
            <a href="#contato" className="inline-block mt-8 md:mt-10 font-['Inter',sans-serif] text-[#1A1A1A] border-b-[3px] border-[#A07C3D] pb-1 hover:opacity-70 transition font-semibold" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Transition Bars (Figma Sync) */}
      <div className="w-full flex flex-col z-0">
        {/* Band 1: Charcoal Dark */}
        <div className="w-full h-[60px] md:h-[90px]" style={{ background: COLORS.darkAlt }} />
        {/* Band 2: Deep Gold */}
        <div className="w-full h-[70px] md:h-[100px]" style={{ background: COLORS.gold }} />
        {/* Band 3: Dark Overlay with Congress Background and Blue Accent Strip */}
        <div className="relative w-full h-[200px] md:h-[280px] flex items-center" style={{ background: COLORS.dark }}>
          <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 mix-blend-overlay" />
          <div className="relative z-10 w-full h-[25px] md:h-[35px]" style={{ background: COLORS.accent, opacity: 0.9 }} />
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <section id="escritorio" className="relative overflow-hidden pt-[80px] md:pt-[120px] pb-[80px] md:pb-[120px] bg-white">
      {/* Mobile layout */}
      <div className="block lg:hidden" style={{ background: COLORS.light }}>
        <div className="px-4 pt-10 pb-10">
          <div className="relative mb-8">
            <div className="absolute right-0 top-0 bottom-0 w-[4px]" style={{ background: COLORS.gold }} />
            <img src={imgOffice} alt="Escritório" className="w-full h-[300px] object-cover" />
          </div>
          <p className="font-['Cormorant_Garamond',serif] text-[#1A1A1A]" style={{ fontSize: 24, lineHeight: 1.5 }}>
            Estruturação da prática para atuação independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
          </p>
          <p className="font-['Cormorant_Garamond',serif] font-semibold text-[#1A1A1A] mt-6" style={{ fontSize: 24, lineHeight: 1.5 }}>
            Análise de cenários, definição de estratégias e condução de cada demanda com clareza e controle.
          </p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block relative bg-white">
        <div className="max-w-7xl mx-auto px-6 flex gap-16 items-center">
          <div className="w-1/2 relative">
            <div className="absolute -left-[10px] top-6 bottom-6 w-[6px]" style={{ background: COLORS.gold }} />
            <div className="absolute -right-[10px] top-6 bottom-6 w-[6px]" style={{ background: COLORS.gold }} />
            <img src={imgOffice} alt="Escritório" className="w-full h-[550px] object-cover shadow-xl" />
          </div>
          <div className="w-1/2">
            <div className="p-12 pl-6 bg-transparent">
              <p className="font-['Cormorant_Garamond',serif] text-[#1A1A1A]" style={{ fontSize: 30, lineHeight: 1.5 }}>
                Estruturação da prática para atuação independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
              </p>
              <p className="font-['Cormorant_Garamond',serif] font-semibold text-[#1A1A1A] mt-8" style={{ fontSize: 30, lineHeight: 1.5 }}>
                Análise de cenários, definição de estratégias e condução de cada demanda com clareza e controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const practiceAreas = [
  { title: "Direito\nMilitar", desc: "Defesa em processos administrativos e judiciais na esfera militar, incluindo sindicâncias, inquéritos policiais militares, conselhos de disciplina e de justificação, além de atuação em ações penais militares." },
  { title: "Direito\nPrevidenciário", desc: "Assessoria e condução jurídica em matéria previdenciária, incluindo benefícios, aposentadorias e demandas correlatas, nas esferas administrativa e judicial." },
  { title: "Direito\nAdministrativo", desc: "Atuação em demandas envolvendo a Administração Pública, atos administrativos, processos administrativos e relações jurídicas com o poder público." },
  { title: "Direito Civil", desc: "Atuação em demandas cíveis estratégicas, incluindo responsabilidade civil, obrigações, contratos, relações de consumo e litígios patrimoniais." },
  { title: "Direito Penal", desc: "Atuação em demandas criminais, tanto na fase investigativa quanto processual, incluindo acompanhamento de inquéritos, ações penais e medidas cautelares." },
  { title: "Proteção aos Direitos\nda Mulher", desc: "Atuação jurídica na proteção dos direitos da mulher, com abordagem técnica e humanizada, orientada pela perspectiva de gênero, abrangendo medidas protetivas de urgência, demandas de violência doméstica e familiar, acompanhamento criminal, ações cíveis e de família." },
  { title: "Consultivo Jurídico", desc: "Atuação preventiva e estratégica, com análise de riscos, orientação jurídica e suporte à tomada de decisões." },
  { title: "Demandas Complexas", desc: "Condução jurídica de casos que exigem estruturação estratégica e responsabilidade na tomada de decisões." },
];

function PracticeAreas() {
  return (
    <section id="atuacao" className="relative py-[80px] md:py-[120px] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black/60">
        <img src={imgHeroBg} alt="" className="w-full h-full object-cover grayscale opacity-20 mix-blend-overlay" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-white" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.2 }}>
          Atuamos em diferentes áreas do Direito, com foco em demandas que exigem leitura de cenário, responsabilidade decisória e condução técnica consistente.
        </h2>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {practiceAreas.map((area) => (
          <div key={area.title} className="p-8 md:p-10 flex flex-col shadow-lg transition-transform hover:-translate-y-1" style={{ background: COLORS.cardBg }}>
            <div className="h-[4px] w-[60px] mb-6" style={{ background: COLORS.blue }} />
            <h3 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.01em] text-[#d9d9d9] whitespace-pre-line" style={{ fontSize: "clamp(24px, 2.5vw, 28px)", lineHeight: 1.2 }}>
              {area.title}
            </h3>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9]/80 mt-6" style={{ fontSize: "clamp(14px, 1.3vw, 15px)", lineHeight: 1.6 }}>
              {area.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Methodology() {
  const steps = [
    { title: "Análise", desc: "Leitura aprofundada do caso, do contexto jurídico e dos riscos envolvidos." },
    { title: "Estratégia", desc: "Definição do caminho jurídico mais adequado, considerando objetivos, cenários possíveis e impactos de curto, médio e longo prazo." },
    { title: "Condução", desc: "Condução técnica das medidas necessárias, com acompanhamento responsável e comunicação clara ao longo de todo o processo." },
  ];

  return (
    <section className="relative overflow-hidden py-[80px] md:py-[120px]" style={{ background: COLORS.dark }}>
      <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover grayscale opacity-10 mix-blend-overlay" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Title */}
        <div className="lg:w-1/2 w-full">
          <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.01em] text-white" style={{ fontSize: "clamp(34px, 4vw, 44px)", lineHeight: 1.25 }}>
            Nossa atuação jurídica é estruturada a partir de três eixos fundamentais:
          </h2>
          <div className="h-[4px] w-full max-w-[320px] mt-6" style={{ background: "#A2CCFF" }} />
        </div>

        {/* Right Side: Vertical Stacked Cards */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 md:gap-8 relative">
          {/* Vertical Gold Bar Background */}
          <div className="absolute top-[-60px] bottom-[-60px] left-[20%] w-[120px] md:w-[140px] z-0" style={{ background: COLORS.gold }} />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10 px-8 py-10 md:px-12 md:py-10 shadow-xl" style={{ background: COLORS.accent }}>
              <h3 className="font-['Cormorant_Garamond',serif] font-semibold text-white tracking-wide" style={{ fontSize: "clamp(26px, 3vw, 32px)" }}>
                {step.title}
              </h3>
              <div className="h-[3px] w-full my-5" style={{ background: COLORS.darkAlt }} />
              <p className="font-['Inter',sans-serif] font-medium text-white/90" style={{ fontSize: "clamp(15px, 1.5vw, 16px)", lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const lawyers = [
  {
    name: "Gabriela Nepomuceno",
    oab: "OAB 76383 - DF",
    photo: imgGabriela,
    bio: "Lorem ipsum dolor sit amet consectetur. Velit penatibus lectus nec turpis. Mattis semper lorem sociis nec eget arcu sed lectus aliquam.",
  },
  {
    name: "Paulo Waterloo",
    oab: "OAB 76383 - DF",
    photo: imgPaulo,
    bio: "Especialista em Direito Militar e Administração Pública, com sólida experiência em demandas administrativas e judiciais envolvendo a União perante o TRF-1 e em procedimentos conduzidos pelo Ministério Público Federal.\n\nAtuação consistente no assessoramento em Inquéritos Policiais Militares, Conselhos de Justificação e de Disciplina, além de procedimentos administrativos no âmbito das Forças Armadas e das forças auxiliares, bem como em ações penais perante a Justiça Militar.\nExperiência na defesa em Comissões Parlamentares de Inquérito.\n\nAtuação em demandas de Direito Administrativo, Penal, Civil e Previdenciário.",
  },
  {
    name: "Atalita Yamamoto",
    oab: "OAB 76383 - DF",
    photo: imgAtalita,
    bio: "Lorem ipsum dolor sit amet consectetur. Velit penatibus lectus nec turpis. Mattis semper lorem sociis nec eget arcu sed lectus aliquam.",
  },
];

function Lawyers() {
  return (
    <section id="advogados" style={{ background: COLORS.light }} className="relative py-[80px] md:py-[120px] overflow-hidden">
      <NWWatermark className="text-[#000]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-12 md:mb-16" style={{ fontSize: "clamp(36px, 4vw, 46px)", lineHeight: 1.15 }}>
          Advogados
        </h2>

        {/* Desktop: all 3 lawyers */}
        <div className="hidden md:grid grid-cols-3 gap-12">
          {lawyers.map((l) => (
            <div key={l.name}>
              <div className="relative overflow-hidden group">
                <img src={l.photo} alt={l.name} className="w-full h-[450px] object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" />
              </div>
              <div className="h-[4px] w-[60px] mt-6" style={{ background: COLORS.blue }} />
              <h3 className="font-['Cormorant_Garamond',serif] font-semibold tracking-tight text-[#1A1A1A] mt-4" style={{ fontSize: 32, lineHeight: 1.1 }}>
                {l.name}
              </h3>
              <p className="font-['Cormorant_Garamond',serif] text-[#A07C3D] mt-1 italic" style={{ fontSize: 20 }}>
                {l.oab}
              </p>
              <p className="font-['Inter',sans-serif] text-[#1A1A1A]/80 mt-6 whitespace-pre-line" style={{ fontSize: 15, lineHeight: 1.7 }}>
                {l.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: featured lawyer (Paulo Waterloo) */}
        <div className="md:hidden">
          <img src={lawyers[1].photo} alt={lawyers[1].name} className="w-full h-[360px] object-cover grayscale" />
          <div className="h-[3px] w-[60px] mt-4" style={{ background: COLORS.blue }} />
          <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] mt-3" style={{ fontSize: 28, lineHeight: "26px" }}>
            {lawyers[1].name}
          </h3>
          <p className="font-['Cormorant_Garamond',serif] text-[#949060] mt-1" style={{ fontSize: 18 }}>
            {lawyers[1].oab}
          </p>
          <p className="font-['Inter',sans-serif] text-[#32353A] mt-4 whitespace-pre-line" style={{ fontSize: 13, lineHeight: 1.6 }}>
            {lawyers[1].bio}
          </p>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.dark }}>
      <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0" style={{ background: COLORS.gold, opacity: 0.1 }} />
      <div className="relative max-w-[800px] mx-auto px-6 py-[80px] md:py-[120px] text-center">
        <p className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4 }}>
          Comunicamos pouco, mas dizemos muito.<br />
          Não gritamos autoridade. Sustentamos.
        </p>
        <p className="font-['Cormorant_Garamond',serif] text-[#d9d9d9] mt-5 md:mt-6" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4 }}>
          Atuamos com postura segura, estratégica, discreta e precisa.<br className="hidden md:inline" />
          {" "}Não utilizamos o medo como argumento nem a urgência como ferramenta.
        </p>
        <p className="font-['Cormorant_Garamond',serif] text-[#d9d9d9] mt-5 md:mt-6" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4 }}>
          Preferimos clareza, precisão e direção.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  return (
    <section id="contato" style={{ background: COLORS.light }} className="py-[80px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-12 md:gap-16">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-2 md:mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
            Contato
          </h2>
          <p className="font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80 mb-5 md:mb-8" style={{ fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: 1.5 }}>
            Para informações ou agendamento de conversa inicial, preencha o formulário abaixo.
          </p>
          <div className="flex flex-col gap-2 md:gap-3">
            {(["nome", "email", "assunto"] as const).map((f) => (
              <input
                key={f}
                type={f === "email" ? "email" : "text"}
                placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
                value={form[f]}
                onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="h-[36px] md:h-[50px] px-3 md:px-4 font-['Inter',sans-serif] text-[#dadad7] placeholder-[#dadad7]"
                style={{ background: "#ABB1B9", fontSize: "clamp(12px, 1.3vw, 16px)", border: "none", outline: "none" }}
              />
            ))}
            <textarea
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="h-[130px] md:h-[180px] px-3 md:px-4 py-2 md:py-3 font-['Inter',sans-serif] text-[#dadad7] placeholder-[#dadad7] resize-none"
              style={{ background: "#ABB1B9", fontSize: "clamp(12px, 1.3vw, 16px)", border: "none", outline: "none" }}
            />
          </div>
          <div className="flex justify-end mt-4 md:mt-6">
            <button className="font-['Cormorant_Garamond',serif] font-semibold text-[#1A1A1A] border-b-2 border-black pb-1 hover:opacity-70 transition" style={{ fontSize: "clamp(18px, 2vw, 26px)" }}>
              Enviar
            </button>
          </div>
        </div>

        {/* Where we are */}
        <div className="lg:w-1/2">
          <div className="flex items-start gap-0">
            <div className="w-[2px] lg:w-[3px] self-stretch hidden lg:block" style={{ background: COLORS.darkAlt }} />
            <div className="w-full lg:pl-8">
              {/* Mobile: separator line */}
              <div className="lg:hidden h-[2px] w-full mb-6" style={{ background: COLORS.darkAlt }} />
              <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-3 md:mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
                Onde Estamos
              </h2>
              <div className="font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80 space-y-1" style={{ fontSize: "clamp(13px, 1.5vw, 16px)" }}>
                <p>Shopping Conjunto Nacional, Torre Vermelha, sala 5026</p>
                <p>Brasília - DF</p>
                <p className="mt-2 text-[#A07C3D]">61 9 9882 7844</p>
              </div>
              <div className="relative mt-5 md:mt-6 w-full h-[250px] md:h-[350px] overflow-hidden border border-[#32353A]/10 rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.123230485966!2d-47.893178!3d-15.791280999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3c2a6e99f3%3A0x82609d19eae687e1!2sShopping%20Conjunto%20Nacional!5e0!3m2!1spt-BR!2sbr!4v1744530606061!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização NWY Advocacia"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: COLORS.dark }} className="relative overflow-hidden py-[60px] md:py-[100px]">
      <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: COLORS.gold }} />
      <img src={imgFooterBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 justify-between">
        <div className="lg:w-1/3">
          <Logo color="#A07C3D" className="w-[100px] md:w-[120px] h-auto" />
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 justify-end">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#A07C3D] mb-2" style={{ fontSize: 20 }}>Escritório</h4>
            {["O Escritório", "Nossa Atuação", "Advogados", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "O Escritório" ? "escritorio" : l === "Nossa Atuação" ? "atuacao" : l.toLowerCase()}`}
                className="font-['Inter',sans-serif] font-medium text-white/80 hover:text-[#5D7B93] transition"
                style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:ml-12 border-l border-white/10 pl-0 md:pl-12">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#A07C3D] mb-2" style={{ fontSize: 20 }}>Visite</h4>
            <p className="font-['Inter',sans-serif] font-medium text-white/80" style={{ fontSize: "clamp(14px, 1.5vw, 15px)", lineHeight: 1.6 }}>
              Shopping Conjunto Nacional,<br />Torre Vermelha, sala 5026<br />Brasília - DF
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white mt-4" style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}>61 9 9882 7844</p>
            <p className="font-['Inter',sans-serif] font-medium text-white/80 mt-1" style={{ fontSize: "clamp(14px, 1.5vw, 15px)" }}>contato@nwyadvocacia.com.br</p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-white/40 text-[13px]">
        <span>© {new Date().getFullYear()} NWY Advocacia.</span>
        <span>Desenvolvido por Férteles</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="w-full min-h-screen font-['Inter',sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Methodology />
      <Lawyers />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}