import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O que se faz em uma clínica odontológica?", a: "A clínica oferece serviços como consultas, limpezas, tratamentos de cárie, doenças gengivais, extrações, implantes, ortodontia, cirurgias, tratamentos estéticos e prevenção." },
  { q: "Qual idade para ir em clínica odontológica?", a: "Crianças devem começar a visitar a clínica odontológica após o surgimento do primeiro dente ou até o primeiro aniversário. Pessoas de todas as idades devem continuar a fazer visitas regulares para manter a saúde bucal." },
  { q: "Como é feito o procedimento de implante dentário?", a: "Envolve cirurgia para colocar o implante no osso da mandíbula ou maxilar, seguido da cicatrização óssea. Depois, um pilar é conectado ao implante, e uma coroa é fixada sobre o pilar." },
  { q: "O que é uma clínica odontológica?", a: "Uma clínica odontológica é um estabelecimento onde profissionais de odontologia oferecem serviços relacionados à saúde bucal, como consultas, exames, tratamentos preventivos e corretivos, cirurgias e procedimentos estéticos." },
  { q: "Quais profissionais trabalham em uma clínica odontológica?", a: "Pode contar com dentistas, ortodontistas, periodontistas, endodontistas, cirurgiões bucomaxilofaciais, higienistas dentais e assistentes odontológicos." },
  { q: "Quais são os serviços oferecidos?", a: "Limpeza dental, tratamento de cáries, extrações, tratamentos de canal, ortodontia, implantes dentários, cirurgias bucais, entre outros." },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-20">
          <span className="section-label">Dúvidas</span>
          <h2 className="section-title mt-4">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border px-6 bg-background"
            >
              <AccordionTrigger className="text-left font-heading font-light text-foreground hover:text-primary hover:no-underline py-6 text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed font-light text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;