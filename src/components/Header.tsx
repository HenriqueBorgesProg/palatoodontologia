import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="#inicio">
          <img src="/images/logo.png" alt="Palato Odontologia" className="h-12 md:h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-foreground hover:text-primary py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            Agendar Consulta
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
