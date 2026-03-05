import { Star } from "lucide-react";

const testimonials = [
  { name: "Lorenna Santos", text: "Espaço acolhedor, Dra. Tattiana é a melhor periodontista que já passei, a limpeza dela é fantástica!", time: "há 5 dias" },
  { name: "Davi Augusto", text: "Uma experiência muito boa! Antes estava com muito medo por ter que ir ao dentista, mas logo após o início do tratamento e todo o cuidado dos profissionais me senti bem.", time: "há 7 dias" },
  { name: "Walyson Gyn", text: "Uma clínica maravilhosa! Super recomendo, atendimento excelente, profissionais dedicados. Sempre fui atendido no horário marcado.", time: "há 3 meses" },
  { name: "Renata Pavanelli", text: "Limpeza dos dentes eficaz, excelente profissional a Dra Tatiana.", time: "há 2 meses" },
  { name: "Rita De Cássia", text: "Fui atendida pela Dra Juliana, muito atenciosa, excelente profissional.", time: "há 3 meses" },
  { name: "Canal da Milinha", text: "A melhor clínica odontológica de Aparecida!", time: "há 4 meses" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title mt-4">O Que Dizem Nossos Pacientes</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">191 avaliações no Google</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background p-8 flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground flex-1 text-sm leading-relaxed font-light">
                "{t.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-primary/30 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm text-foreground">{t.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;