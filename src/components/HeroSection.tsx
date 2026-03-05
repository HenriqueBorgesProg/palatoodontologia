import heroBg from "@/assets/hero-bg.jpg";

const WA = "5562982414338";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Clínica Palato" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-12 h-px bg-gold" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-gold-light">
            Quase duas décadas de excelência
          </span>
          <div className="w-12 h-px bg-gold" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-primary-foreground leading-[0.95] mb-8">
          Odontologia de
          <br />
          <span className="gold-text font-medium italic">Alto Padrão</span>
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/70 mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Tecnologia de ponta e cuidado personalizado em Goiânia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Palato Odontologia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-10 py-4 text-primary-foreground font-semibold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            Agende sua Avaliação
          </a>
          <a
            href="#sobre"
            className="px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-medium text-sm tracking-[0.1em] uppercase hover:bg-primary-foreground/10 transition-colors"
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