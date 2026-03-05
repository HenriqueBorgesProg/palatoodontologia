import { Star } from "lucide-react";

const testimonials = [
  { name: "Lorenna Santos", text: "Espaço acolhedor, Dra. Tattiana é a melhor periodontista que já passei, a limpeza dela é fantástica!!", time: "há 5 dias" },
  { name: "Davi Augusto", text: "Uma experiência muito boa! Antes estava com muito medo por ter que ir ao dentista, mas logo após o início do tratamento e todo o cuidado dos profissionais me senti bem. A experiência foi muito boa! ❤️", time: "há 7 dias" },
  { name: "Walyson Gyn", text: "Uma clínica maravilhosa! Super recomendo, atendimento excelente, profissionais dedicados. Sempre fui atendido no horário marcado. Estão de parabéns!", time: "há 3 meses" },
  { name: "Renata Pavanelli", text: "Limpeza dos dentes eficaz, excelente profissional a Dra Tatiana.", time: "há 2 meses" },
  { name: "Rita De Cássia", text: "Fui atendida pela Dra Juliana, muito atenciosa, excelente profissional.", time: "há 3 meses" },
  { name: "Canal da Milinha", text: "A melhor clínica odontológica de Aparecida!", time: "há 4 meses" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title mt-3">O Que Nossos Pacientes Dizem</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">(191 avaliações no Google)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 flex flex-col">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground flex-1 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-sm text-foreground">{t.name}</span>
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
