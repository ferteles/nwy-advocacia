import { useState } from "react";
import { toast } from "sonner";
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
      return;
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
    <section id="contato" className="bg-site-light section-pad relative overflow-hidden">
      <WatermarkFooter />
      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 md:gap-12 z-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2">
          <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-2 md:mb-4 text-section-subtitle">
            Contato
          </h2>
          <p className="font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80 mb-5 md:mb-8 text-body leading-normal">
            Para informações ou agendamento de conversa inicial, entre em contacto.
          </p>

          {/* Campo invisível Honeypot para proteção contra Bots */}
          <input
            type="text"
            name="b_phone"
            className="hidden"
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
                className="h-[36px] md:h-[50px] px-3 md:px-4 font-['Inter',sans-serif] text-site-card-fg placeholder-site-card-fg contact-input"
                required
              />
            ))}
            <textarea
              placeholder="Mensagem"
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="h-[130px] md:h-[180px] px-3 md:px-4 py-2 md:py-3 font-['Inter',sans-serif] text-site-card-fg placeholder-site-card-fg resize-none contact-input"
              required
            />
          </div>
          <div className="flex justify-end mt-4 md:mt-6">
            <button 
              type="submit" 
              disabled={submitting}
              className="font-['Cormorant_Garamond',serif] font-semibold text-[#1A1A1A] border-b-2 border-black pb-1 hover:opacity-70 transition disabled:opacity-50 text-btn-large"
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>

        {/* Where we are */}
        <div className="lg:w-1/2">
          <div className="flex items-start gap-0">
            <div className="w-[2px] lg:w-[3px] self-stretch hidden lg:block bg-site-dark-alt" />
            <div className="w-full lg:pl-8">
              {/* Mobile: separator line */}
              <div className="lg:hidden h-[2px] w-full mb-6 bg-site-dark-alt" />
              <h2 className="font-['Cormorant_Garamond',serif] font-semibold tracking-[-0.02em] text-[#1A1A1A] mb-3 md:mb-4 text-section-subtitle">
                Onde Estamos
              </h2>
              <div className="font-['Inter',sans-serif] font-medium text-[#1A1A1A]/80 space-y-1 max-md:!text-[24px] text-body">
                <p>Shopping Conjunto Nacional, Torre Vermelha, sala 5026</p>
                <p>Brasília - DF</p>
                <p className="mt-2 text-site-gold">
                  <a href="tel:+556****7844" className="hover:underline">61 9 9882 7844</a>
                </p>
                <p className="text-site-gold">
                  <a href="mailto:contato@nwyadvocacia.com.br" className="hover:underline">contato@nwyadvocacia.com.br</a>
                </p>
              </div>
              <div className="relative mt-5 md:mt-6 w-full h-[250px] md:h-[350px] overflow-hidden border border-[#32353A]/10 rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.123230485966!2d-47.893178!3d-15.791280999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3c2a6e99f3%3A0x82609d19eae687e1!2sShopping%20Conjunto%20Nacional!5e0!3m2!1spt-BR!2sbr!4v1744530606061!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  className="border-0"
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
