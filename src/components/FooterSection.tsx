import { MapPin, Phone, Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src="/images/logo.png" alt="Palato Odontologia" className="h-14 brightness-200 mb-6" />
            <p className="text-background/60 text-sm leading-relaxed">
              Transformando sorrisos em Goiânia com tecnologia de ponta e cuidado personalizado há quase duas décadas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <div className="flex items-start gap-3 text-background/70 text-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Edifício Metropolitano, Goiânia - GO</span>
            </div>
            <div className="flex items-center gap-3 text-background/70 text-sm">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>(62) 9 9999-9999</span>
            </div>
            <div className="flex items-center gap-3 text-background/70 text-sm">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span>Seg - Sex: 8h às 18h</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h3>
            {["Sobre", "Tratamentos", "Especialidades", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-background/70 text-sm hover:text-background transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} Palato Odontologia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
