const WA = "5562982414338";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-12 h-px bg-primary" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            Quase duas décadas de excelência
          </span>
          <div className="w-12 h-px bg-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-light text-foreground leading-[0.95] mb-8">
          Odontologia de
          <br />
          <span className="gold-text font-medium italic">Alto Padrão</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Tecnologia de ponta e cuidado personalizado em Goiânia
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Palato Odontologia.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-10 py-4 text-primary-foreground font-semibold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            Agende sua Avaliação
          </a>
          <a
            href="#sobre"
            className="px-10 py-4 border border-border text-foreground font-medium text-sm tracking-[0.1em] uppercase hover:border-primary hover:text-primary transition-colors"
          >
            Conheça a Clínica
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
      </div>
    </section>
  );
};

export default HeroSection;