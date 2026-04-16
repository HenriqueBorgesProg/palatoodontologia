import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Clínica Palato" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-12 h-px bg-gold" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-light">
            Mais de duas décadas de excelência
          </span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-[0.9] mb-8 tracking-tight">
          Transformamos sorrisos
          <br />
          <span className="gold-text">e histórias</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 mb-14 max-w-xl mx-auto font-light leading-relaxed">
          Tecnologia, estética e cuidado em cada detalhe
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() =>
              openExternal(getWhatsAppUrl(WA, "Olá! Gostaria de agendar uma avaliação na Palato Odontologia."))
            }
            className="gold-gradient px-12 py-5 text-primary-foreground font-bold text-sm tracking-[0.15em] uppercase rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Agende sua Avaliação
          </button>
          <a
            href="#sobre"
            className="px-12 py-5 border border-primary-foreground/30 text-primary-foreground font-medium text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            Conheça a Clínica
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />
      </div>
    </section>
  );
};

export default HeroSection;
