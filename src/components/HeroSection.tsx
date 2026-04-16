import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import heroClinicView from "@/assets/hero-clinic-view.jpg";
import heroClinicInterior from "@/assets/hero-clinic-interior.jpg";
import heroProcedure from "@/assets/hero-procedure.jpg";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";
const INTERVAL = 6000;

const heroImages = [
  heroBg, // Secretária / acolhimento
  heroClinicView, // Consultório com vista / sofisticação
  heroClinicInterior, // Ambiente interno / detalhe premium
  heroProcedure, // Doutora em atendimento / excelência
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slider images */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={src} alt={`Palato Odontologia - Ambiente ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Texto fixo */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-12">
          <div className="w-16 h-px bg-gold" />
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-light">
            Mais de duas décadas de excelência
          </span>
          <div className="w-16 h-px bg-gold" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary-foreground leading-[0.85] mb-10 tracking-tighter">
          Seu sorriso
          <br />
          mais bonito
          <br />
          <span className="gold-text">começa aqui</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/60 mb-16 max-w-md mx-auto font-light leading-relaxed">
          Recupere sua autoestima com resultados naturais
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            type="button"
            onClick={() =>
              openExternal(getWhatsAppUrl(WA, "Olá! Gostaria de agendar uma avaliação na Palato Odontologia."))
            }
            className="gold-gradient px-14 py-5 text-primary-foreground font-bold text-sm tracking-[0.2em] uppercase rounded-lg hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-[1.02]"
          >
            Quero meu novo sorriso
          </button>
          <a
            href="#sobre"
            className="px-14 py-5 border border-primary-foreground/20 text-primary-foreground/80 font-medium text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            Conheça a Clínica
          </a>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/30"
            }`}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
