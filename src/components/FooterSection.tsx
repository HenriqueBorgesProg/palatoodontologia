import { MapPin, Phone, Clock } from "lucide-react";

const WA = "5562982414338";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold-light">Localização</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-primary-foreground leading-tight mt-4">Encontre-nos</h2>
        </div>

        {/* Google Maps */}
        <div className="w-full border border-primary-foreground/10 mb-16 p-8 md:p-10 bg-primary-foreground/5">
          <p className="text-primary-foreground/70 text-sm font-light text-center max-w-2xl mx-auto">
            Estamos no Edifício Metropolitano em Goiânia. Clique no botão abaixo para abrir a localização diretamente no Google Maps.
          </p>
          <div className="flex justify-center mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Metropolitano+Goi%C3%A2nia+GO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 gold-gradient text-primary-foreground text-xs font-semibold tracking-[0.1em] uppercase"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src="/images/logo.png" alt="Palato Odontologia" className="h-12 brightness-200 mb-6" />
            <p className="text-primary-foreground/60 text-sm font-light leading-relaxed">
              Quase duas décadas transformando sorrisos em Goiânia com tecnologia de ponta e cuidado personalizado.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground mb-6">Contato</h3>
            <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold" />
              <span className="font-light">Edifício Metropolitano, Goiânia - GO</span>
            </div>
            <a href={`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent("Olá! Gostaria de entrar em contato com a Palato Odontologia.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 text-sm hover:text-gold transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
              <span className="font-light">(62) 9 8241-4338</span>
            </a>
            <div className="flex items-center gap-3 text-primary-foreground/70 text-sm">
              <Clock className="w-4 h-4 flex-shrink-0 text-gold" />
              <span className="font-light">Seg - Sex: 8h às 18h</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground mb-6">Links</h3>
            {["Sobre", "Tratamentos", "Especialidades", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-primary-foreground/70 text-sm font-light hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center text-primary-foreground/40 text-xs font-light tracking-wider">
          © {new Date().getFullYear()} Palato Odontologia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;