import { useState } from "react";
import svgPaths from "../imports/svg-ttosx3q9hh";

// Project images
import videoHero from "../assets/images/hero1920x1080-converter.mp4";
import imgOffice from "../assets/images/office-building.png";
import imgPaulo from "../assets/images/paulo-waterloo.png";
import imgFooterBg from "../assets/images/footer-bg.png";
import imgFundoComunicamos from "../assets/images/fundo comunicamos.png";
import imgFundoAtuacao from "../assets/images/fundo-atuacao.png";


const COLORS = {
  dark: "#1A1A1A",
  darkAlt: "#262626",
  gold: "#949060",
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
    <div className={`pointer-events-none select-none overflow-hidden absolute inset-0 opacity-[0.08] ${className}`}>
      <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto min-w-[1400px] absolute top-1/2 left-[-10%] -translate-y-1/2 scale-[1.8] md:scale-[2.4]">
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
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] flex items-center justify-between h-[100px] md:h-[160px]">
        <Logo className="w-[100px] md:w-[140px] h-auto" color="#1A1A1A" />
        <div className="hidden md:flex gap-10">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-['Inter',sans-serif] text-[#1A1A1A] hover:opacity-70 transition-opacity ${i === 0 ? "border-b border-black pb-1" : ""}`}
              style={{ fontSize: 18, fontWeight: 400 }}
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

function WatermarkHero() {
  return (
    <div className="absolute top-0 left-[-5%] w-[110%] h-[120%] overflow-hidden pointer-events-none z-0 opacity-10 flex items-start justify-center pt-10">
      <svg className="w-full min-w-[1200px] h-auto" fill="none" viewBox="0 0 1648 708">
        <path d={svgPaths.p10a4400} fill={COLORS.dark} />
        <path d={svgPaths.p160b7800} fill={COLORS.dark} />
        <path d={svgPaths.p14415570} fill={COLORS.dark} />
        <path d={svgPaths.p2db37200} fill={COLORS.dark} />
        <path d={svgPaths.p2d8b55c0} fill={COLORS.dark} />
        <path d={svgPaths.p1052f500} fill={COLORS.dark} />
        <path d={svgPaths.p36f495b8} fill={COLORS.dark} />
        <path d={svgPaths.p9a69900} fill={COLORS.dark} />
      </svg>
    </div>
  );
}

function WatermarkFooter() {
  return (
    <div className="absolute bottom-0 right-[-10%] w-[120%] h-[150%] overflow-hidden pointer-events-none z-0 opacity-[0.03] flex items-end justify-center pb-0">
      <svg className="w-full min-w-[1500px] h-auto grayscale" fill="none" viewBox="0 0 1648 708">
        <path d={svgPaths.p10a4400} fill={COLORS.dark} />
        <path d={svgPaths.p160b7800} fill={COLORS.dark} />
        <path d={svgPaths.p14415570} fill={COLORS.dark} />
        <path d={svgPaths.p2db37200} fill={COLORS.dark} />
        <path d={svgPaths.p2d8b55c0} fill={COLORS.dark} />
        <path d={svgPaths.p1052f500} fill={COLORS.dark} />
        <path d={svgPaths.p36f495b8} fill={COLORS.dark} />
        <path d={svgPaths.p9a69900} fill={COLORS.dark} />
      </svg>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Fundo Único com o Vídeo MP4 para todo o bloco Hero */}
      <video
        src={videoHero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden z-10">
        <WatermarkHero />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-[120px] w-full pt-[120px] md:pt-[160px]">
          <div className="max-w-[400px] md:max-w-[750px] ml-auto">
            <h1 className="font-['Cormorant_Garamond',serif] text-[#1A1A1A]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.1, fontWeight: 400 }}>
              Condução jurídica de casos que exigem estruturação estratégica e responsabilidade na tomada de decisões.
            </h1>
            <p className="mt-6 md:mt-8 font-['Inter',sans-serif] text-[#1A1A1A]/80" style={{ fontSize: "clamp(16px, 1.8vw, 22px)", lineHeight: 1.6 }}>
              Prática construída a partir de experiência sólida em contextos que exigem responsabilidade, planejamento e tomada de decisões conscientes.
            </p>
            <a href="#contato" className="inline-block mt-8 md:mt-10 font-['Inter',sans-serif] text-[#1A1A1A] border-b-2 border-black pb-1 hover:opacity-70 transition" style={{ fontSize: "clamp(18px, 1.8vw, 24px)" }}>
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Transition Bars (Exactly like Screenshot) */}
      <div className="w-full flex flex-col relative z-10">
        {/* Dark area with GIF (implicit from wrapper) */}
        <div className="w-full h-[100px] md:h-[150px]" /> 
        {/* Gold Band */}
        <div className="w-full h-[75px] md:h-[105px] opacity-40" style={{ background: COLORS.gold }} />
        {/* Blue Strip */}
        <div className="w-full h-[30px] md:h-[45px] opacity-50" style={{ background: COLORS.accent }} />
        <div className="w-full h-[60px] md:h-[100px] opacity-80" style={{ background: COLORS.cardBg }} />
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="escritorio" className="relative overflow-hidden">
      {/* Mobile layout */}
      <div className="block lg:hidden" style={{ background: COLORS.light }}>
        <div className="px-4 pt-8 pb-0">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: COLORS.gold }} />
            <img src={imgOffice} alt="Escritório" className="w-full h-[300px] object-cover" />
          </div>
        </div>
      </div>
      <div className="block lg:hidden" style={{ background: COLORS.cardBg }}>
        <div className="px-4 py-10">
          <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: 22, lineHeight: 1.5 }}>
            Estruturação da prática para atuação independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
          </p>
          <p className="font-['Inter',sans-serif] text-[#dadad7] mt-4" style={{ fontSize: 22, lineHeight: 1.5 }}>
            Análise de cenários, definição de estratégias e condução de cada demanda com clareza e controle.
          </p>
        </div>
      </div>

      {/* Desktop — banda escura full-width cruza a imagem (fiel ao Figma) */}
      <div className="hidden lg:block relative" style={{ background: COLORS.light }}>
        {/* Banda escura: começa 250px do topo, altura 460px */}
        <div className="absolute left-0 right-0" style={{ top: 250, height: 460, background: COLORS.cardBg }} />
        <div className="relative max-w-[1440px] mx-auto" style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 120, paddingRight: 120 }}>
          <div className="flex items-start">
            {/* Imagem: inicia em y=120, 130px acima da banda escura */}
            <div className="relative flex-shrink-0" style={{ width: '40%', zIndex: 1 }}>
              <div className="absolute left-0 top-0 bottom-0 w-[40px]" style={{ background: COLORS.gold, zIndex: 2 }} />
              <img src={imgOffice} alt="Escritório" className="w-full object-cover relative" style={{ height: 640 }} />
            </div>
            {/* Texto: inicia em y=120+220=340 → 90px dentro da banda escura */}
            <div className="flex-1 relative" style={{ zIndex: 1, paddingTop: 220, paddingLeft: 64 }}>
              <p className="font-['Inter',sans-serif] text-[#dadad7]" style={{ fontSize: "clamp(18px, 1.7vw, 24px)", lineHeight: 1.6 }}>
                Estruturação da prática para atuação independente, técnica e estratégica, respeitando regras, procedimentos e o impacto real das decisões jurídicas.
              </p>
              <p className="font-['Inter',sans-serif] text-[#dadad7] mt-6" style={{ fontSize: "clamp(18px, 1.7vw, 24px)", lineHeight: 1.6 }}>
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
    <section id="atuacao" style={{ background: COLORS.light }} className="pb-10 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] pt-10 md:pt-14 pb-8 md:pb-12">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e]" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}>
          Atuamos em diferentes áreas do Direito, com foco em demandas que exigem leitura de cenário, responsabilidade decisória e condução técnica consistente.
        </h2>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
        {practiceAreas.map((area, i) => (
          <div
            key={area.title}
            className={`p-6 md:p-8 flex flex-col md:col-span-1 ${i < 6 ? "lg:col-span-4" : "lg:col-span-6"}`}
            style={{ background: COLORS.cardBg }}
          >
            <div className="h-[3px] md:h-[4px] w-full mb-3 md:mb-4" style={{ background: COLORS.gold }} />
            <h3 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9] whitespace-pre-line" style={{ fontSize: "clamp(26px, 2.5vw, 32px)", lineHeight: "30px" }}>
              {area.title}
            </h3>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-3 md:mt-4" style={{ fontSize: "clamp(13px, 1.3vw, 16px)", lineHeight: 1.6 }}>
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
    <section className="relative overflow-hidden" style={{ background: COLORS.cardBg }}>
      <img
        src={imgFundoAtuacao}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12" style={{ zIndex: 1 }}>
        <div className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}>
            Nossa atuação jurídica é estruturada a partir de três eixos fundamentais:
          </h2>
          <div className="h-[3px] w-full max-w-[312px] md:max-w-[430px] mt-4 md:mt-6" style={{ background: COLORS.gold }} />
        </div>

        {/* Right Side: Vertical Stacked Cards */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 md:gap-8 relative overflow-hidden">
          {/* Vertical Gold Bar Background */}
          <div className="absolute top-0 bottom-0 left-[20%] w-[120px] md:w-[140px] z-0" style={{ background: COLORS.gold }} />

          {steps.map((step) => (
            <div key={step.title} className="relative z-10 p-6 md:p-8" style={{ background: COLORS.accent }}>
              <div className="h-[3px] w-full mb-4 md:mb-5" style={{ background: COLORS.gold }} />
              <h3 className="font-['Cormorant_Garamond',serif] text-[#d9d9d9]" style={{ fontSize: "clamp(28px, 3vw, 35px)" }}>
                {step.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-3" style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: 1.6 }}>
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
    name: "Paulo Waterloo",
    oab: "OAB 76383 - DF",
    photo: imgPaulo,
    bio: "Especialista em Direito Militar e Administração Pública, com sólida experiência em demandas administrativas e judiciais envolvendo a União perante o TRF-1 e em procedimentos conduzidos pelo Ministério Público Federal.\n\nAtuação consistente no assessoramento em Inquéritos Policiais Militares, Conselhos de Justificação e de Disciplina, além de procedimentos administrativos no âmbito das Forças Armadas e das forças auxiliares, bem como em ações penais perante a Justiça Militar.\nExperiência na defesa em Comissões Parlamentares de Inquérito.\n\nAtuação em demandas de Direito Administrativo, Penal, Civil e Previdenciário.",
  },
];

function Lawyers() {
  return (
    <section id="advogados" style={{ background: "white" }} className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h2 className="font-['Cormorant_Garamond',serif] text-[#1e1e1e] mb-8 md:mb-12" style={{ fontSize: "clamp(34px, 4vw, 40px)", lineHeight: 1.15 }}>
          Advogados
        </h2>

        {/* Desktop: center the lawyer card */}
        <div className="hidden md:flex justify-center">
          <div className="max-w-[400px]">
            {lawyers.map((l) => (
              <div key={l.name}>
                <img src={l.photo} alt={l.name} className="w-full h-[400px] object-cover grayscale" />
                <div className="h-[3px] w-full mt-4" style={{ background: COLORS.gold }} />
                <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] mt-3" style={{ fontSize: 32, lineHeight: "30px" }}>
                  {l.name}
                </h3>
                <p className="font-['Inter',sans-serif] text-[#32353A] mt-1" style={{ fontSize: 20 }}>
                  {l.oab}
                </p>
                <p className="font-['Inter',sans-serif] text-[#1A1A1A]/80 mt-6 whitespace-pre-line" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: featured lawyer (Paulo Waterloo) */}
        <div className="md:hidden">
          <img src={lawyers[0].photo} alt={lawyers[0].name} className="w-full h-[360px] object-cover grayscale" />
          <div className="h-[3px] w-full mt-4" style={{ background: COLORS.gold }} />
          <h3 className="font-['Cormorant_Garamond',serif] text-[#32353A] mt-3" style={{ fontSize: 28, lineHeight: "26px" }}>
            {lawyers[0].name}
          </h3>
          <p className="font-['Inter',sans-serif] text-[#32353A] mt-1" style={{ fontSize: 18 }}>
            {lawyers[0].oab}
          </p>
          <p className="font-['Inter',sans-serif] text-[#32353A] mt-4 whitespace-pre-line" style={{ fontSize: 13, lineHeight: 1.6 }}>
            {lawyers[0].bio}
          </p>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.light }}>
      {/* Faixa dourada full-width que cruza toda a seção (~45% da altura) */}
      <div
        className="absolute left-0 right-0"
        style={{ top: "42%", height: 102, background: COLORS.gold, zIndex: 0 }}
      />
      {/* Caixa escura centralizada com margens laterais */}
      <div
        className="relative mx-auto"
        style={{
          marginLeft: "clamp(52px, 7vw, 130px)",
          marginRight: "clamp(52px, 7vw, 130px)",
          marginTop: 72,
          marginBottom: 72,
          zIndex: 3,
        }}
      >
        <div className="relative overflow-hidden" style={{ background: "rgb(30, 41, 59)" }}>
          <img
            src={imgFundoComunicamos}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.35, zIndex: 0 }}
          />
          <div className="relative px-10 md:px-16 py-14 md:py-20 text-center" style={{ zIndex: 4 }}>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9]" style={{ fontSize: "clamp(15px, 1.6vw, 20px)", lineHeight: 1.7 }}>
              Comunicamos pouco, mas dizemos muito.<br />
              Não gritamos autoridade. Sustentamos.
            </p>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-6 md:mt-8" style={{ fontSize: "clamp(15px, 1.6vw, 20px)", lineHeight: 1.7 }}>
              Atuamos com postura segura, estratégica, discreta e precisa.<br />
              Não utilizamos o medo como argumento nem a urgência como ferramenta.
            </p>
            <p className="font-['Inter',sans-serif] text-[#d9d9d9] mt-6 md:mt-8" style={{ fontSize: "clamp(15px, 1.6vw, 20px)", lineHeight: 1.7 }}>
              Preferimos clareza, precisão e direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  return (
    <section id="contato" style={{ background: COLORS.light }} className="py-12 md:py-20 relative overflow-hidden">
      <WatermarkFooter />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 md:gap-12 z-10">
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
                <p className="mt-2 text-[#949060]">61 9 9882 7844</p>
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
    <footer style={{ background: COLORS.cardBg }} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: COLORS.gold, zIndex: 10 }} />
      <img src={imgFooterBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 rotate-180 mix-blend-overlay opacity-10"><WatermarkFooter /></div>
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16 flex flex-col lg:flex-row gap-8 md:gap-12 z-10">
        <div className="lg:w-1/3">
          <Logo color="#949060" className="w-[100px] md:w-[120px] h-auto" />
        </div>
        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 justify-end">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#949060] mb-2" style={{ fontSize: 20 }}>Escritório</h4>
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
            <h4 className="font-['Cormorant_Garamond',serif] font-semibold text-[#949060] mb-2" style={{ fontSize: "clamp(15px, 2vw, 20px)" }}>Visite</h4>
            <p className="font-['Inter',sans-serif] font-medium text-white/80" style={{ fontSize: "clamp(11px, 1.5vw, 15px)", lineHeight: 1.6 }}>
              Shopping Conjunto Nacional,<br />Torre Vermelha, sala 5026<br />Brasília - DF
            </p>
            <p className="font-['Inter',sans-serif] font-medium text-white mt-4" style={{ fontSize: "clamp(11px, 1.5vw, 15px)" }}>61 9 9882 7844</p>
            <p className="font-['Inter',sans-serif] font-medium text-white/80 mt-1" style={{ fontSize: "clamp(11px, 1.5vw, 15px)" }}>contato@nwyadvocacia.com.br</p>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 border-t border-white/10 pt-6 mt-6 flex justify-between items-center text-white/40 text-[13px]">
        <span>© {new Date().getFullYear()} NWY Advocacia.</span>
        <span>Desenvolvido por <a href="https://tauatech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">tauatech.com</a></span>
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