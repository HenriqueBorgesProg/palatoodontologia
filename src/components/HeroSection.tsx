import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const WA = "556299693125";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Clínica Palato" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-12">
          <div className="w-16 h-px bg-gold" />
          <span className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gold-light">
            Mais de duas décadas de excelência
          </span>
          <div className="w-16 h-px bg-gold" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary-foreground leading-[0.85] mb-10 tracking-tighter">
          Transformamos
          <br />
          sorrisos
          <br />
          <span className="gold-text">e histórias</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/60 mb-16 max-w-md mx-auto font-light leading-relaxed">
          Tecnologia, estética e cuidado em cada detalhe
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            type="button"
            onClick={() =>
              openExternal(getWhatsAppUrl(WA, "Olá! Gostaria de agendar uma avaliação na Palato Odontologia."))
            }
            className="gold-gradient px-14 py-5 text-primary-foreground font-bold text-sm tracking-[0.2em] uppercase rounded-lg hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-[1.02]"
          >
            Agende sua Avaliação
          </button>
          <a
            href="#sobre"
            className="px-14 py-5 border border-primary-foreground/20 text-primary-foreground/80 font-medium text-sm tracking-[0.15em] uppercase rounded-lg hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            Conheça a Clínica
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
