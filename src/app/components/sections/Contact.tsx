import { useState } from "react";
import { toast } from "sonner";
import { COLORS } from "../../constants/colors";
import { WatermarkFooter } from "../layout/Watermarks";

export function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Proteção contra bots (Honeypot)
    if (honeypot) {
      console.warn("Submissão suspeita bloqueada.");
      return; // Bloqueia silenciosamente
    }

    // Validações básicas adicionais no JS
    if (!form.nome.trim() || !form.email.trim() || !form.assunto.trim() || !form.mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    setSubmitting(true);

    // Simulação segura de envio estático
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Retornaremos o seu contato em breve.");
      setForm({ nome: "", email: "", assunto: "", mensagem: "" });
      setSubmitting(false);
    }, 1200);
  };

  return (
    <section id="contato" style={{ background: COLORS.light }} className="py-12 md:py-20 relative overflow-hidden">
      <WatermarkFooter />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 md:gap-12 z-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-2 md:mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
            Contato
          </h2>
          <p className="font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80 mb-5 md:mb-8" style={{ fontSize: "clamp(13px, 1.5vw, 16px)", lineHeight: 1.5 }}>
            Para informações ou agendamento de conversa inicial, entre em contacto.
          </p>

          {/* Campo invisível Honeypot para proteção contra Bots */}
          <input
            type="text"
            name="b_phone"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />

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
                required
              />
            ))}
            <textarea
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="h-[130px] md:h-[180px] px-3 md:px-4 py-2 md:py-3 font-['Inter',sans-serif] text-[#dadad7] placeholder-[#dadad7] resize-none"
              style={{ background: "#ABB1B9", fontSize: "clamp(12px, 1.3vw, 16px)", border: "none", outline: "none" }}
              required
            />
          </div>
          <div className="flex justify-end mt-4 md:mt-6">
            <button 
              type="submit" 
              disabled={submitting}
              className="font-['Cormorant_Garamond',serif] font-semibold text-[#1A1A1A] border-b-2 border-black pb-1 hover:opacity-70 transition disabled:opacity-50" 
              style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>

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
                  title="Localização NWY Advogados"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
