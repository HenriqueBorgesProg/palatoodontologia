import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl, openExternal } from "@/lib/externalNavigation";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

const WA = "556299693125";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBook = () => {
    openExternal(getWhatsAppUrl(WA, "Olá! Gostaria de agendar uma consulta na Palato Odontologia."));
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="#inicio">
          <img src="/images/logo.png" alt="Palato Odontologia" className="h-12 md:h-14" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors tracking-[0.15em] uppercase"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleBook}
            className="px-6 py-2.5 gold-gradient text-primary-foreground text-xs font-bold tracking-[0.15em] uppercase rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Agendar Consulta
          </button>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary py-2 tracking-wider uppercase"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleBook}
            className="px-6 py-3 gold-gradient text-primary-foreground text-sm font-semibold text-center tracking-wider uppercase"
          >
            Agendar Consulta
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
