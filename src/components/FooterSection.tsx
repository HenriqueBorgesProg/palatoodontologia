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
        <div className="w-full h-[400px] border border-primary-foreground/10 mb-16 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.2648!3d-16.6869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11d4d3b5b3d%3A0x3e3b3b3b3b3b3b3b!2sEdif%C3%ADcio%20Metropolitano%20-%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Palato Odontologia"
          />
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
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Olá! Gostaria de entrar em contato com a Palato Odontologia.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 text-sm hover:text-gold transition-colors">
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