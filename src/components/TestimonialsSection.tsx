import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { name: "Lorenna Santos", text: "Espaço acolhedor, Dra. Tattiana é a melhor periodontista que já passei, a limpeza dela é fantástica!", time: "há 5 dias" },
  { name: "Davi Augusto", text: "Uma experiência muito boa! Antes estava com muito medo por ter que ir ao dentista, mas logo após o início do tratamento e todo o cuidado dos profissionais me senti bem.", time: "há 7 dias" },
  { name: "Walyson Gyn", text: "Uma clínica maravilhosa! Super recomendo, atendimento excelente, profissionais dedicados. Sempre fui atendido no horário marcado.", time: "há 3 meses" },
  { name: "Renata Pavanelli", text: "Limpeza dos dentes eficaz, excelente profissional a Dra Tatiana.", time: "há 2 meses" },
  { name: "Rita De Cássia", text: "Fui atendida pela Dra Juliana, muito atenciosa, excelente profissional.", time: "há 3 meses" },
  { name: "Canal da Milinha", text: "A melhor clínica odontológica de Aparecida!", time: "há 4 meses" },
];

const AUTOPLAY_MS = 5000;

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="py-28 md:py-40 section-alt-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title mt-4">O Que Dizem Nossos Pacientes</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">191 avaliações no Google</span>
          </div>
        </div>

        <div className="glass-card p-8 md:p-12 relative">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light min-h-[120px]">
            "{active.text}"
          </p>

          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">{active.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm text-foreground">{active.name}</p>
                <p className="text-xs text-muted-foreground">{active.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Depoimento anterior"
                className="h-10 w-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mx-auto" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo depoimento"
                className="h-10 w-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <ChevronRight className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Ir para depoimento ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === activeIndex ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/40"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
