import laserLitetouch from "@/assets/laser-litetouch.jpg";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";

const benefits = [
  "Tratamentos mais rápidos e indolores",
  "Minimamente invasivo",
  "Diversos procedimentos sem anestesia",
  "Sem o clássico barulho de dentista",
  "O melhor laser para todas as especialidades",
];

const LaserSection = () => {
  return (
    <section className="py-28 md:py-40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">Inovação</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-4 text-primary-foreground tracking-tight">
              Laser LiteTouch
              <br />
              <span className="font-light text-gold-light">Odontológico</span>
            </h2>
            <p className="text-primary-foreground/70 mt-6 leading-relaxed font-light">
              A Palato Odontologia traz para Goiânia o Laser LiteTouch, uma tecnologia moderna que auxilia na realização
              de procedimentos com mais precisão e conforto para o paciente.
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
              onClick={() =>
                openExternal(
                  getWhatsAppUrl(
                    WA,
                    "Olá! Gostaria de saber mais sobre o tratamento com Laser LiteTouch na Palato Odontologia.",
                  ),
                )
              }
              className="inline-block mt-10 px-10 py-4 gold-gradient text-primary-foreground font-bold text-sm tracking-[0.15em] uppercase rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Saiba Mais
            </button>
          </div>

          <div className="border border-primary-foreground/10 overflow-hidden rounded-xl">
            <img
              src={laserLitetouch}
              alt="Equipamento Laser LiteTouch odontológico"
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
