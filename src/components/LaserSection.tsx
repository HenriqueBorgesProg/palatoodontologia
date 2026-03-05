import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "5562982414338";

const benefits = [
  "Tratamentos mais rápidos e indolores",
  "Minimamente invasivo",
  "Diversos procedimentos sem anestesia",
  "Sem o clássico barulho de dentista",
  "O melhor laser para todas as especialidades",
];

const LaserSection = () => {
  return (
    <section className="py-24 md:py-36 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">Inovação</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light leading-tight mt-4 text-primary-foreground">
              Laser LiteTouch
              <br />
              <span className="italic text-gold-light">Odontológico</span>
            </h2>
            <p className="text-primary-foreground/70 mt-6 leading-relaxed font-light">
              A Palato Odontologia inova mais uma vez e traz para Goiânia o Laser LiteTouch, a melhor tecnologia a laser do mundo.
            </p>
            <ul className="mt-10 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openExternal(getWhatsAppUrl(WA, "Olá! Gostaria de saber mais sobre o tratamento com Laser LiteTouch na Palato Odontologia."))}
              className="inline-block mt-10 px-10 py-4 gold-gradient text-primary-foreground font-semibold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
            >
              Saiba Mais
            </button>
          </div>

          <div className="border border-primary-foreground/10 overflow-hidden">
            <img
              src="/images/laser-litetouch.jpeg"
              alt="Laser LiteTouch"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserSection;
