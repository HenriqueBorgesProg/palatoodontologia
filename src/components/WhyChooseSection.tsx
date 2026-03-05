const reasons = [
  { icon: "🏅", title: "Equipamentos de Última Geração", description: "Tecnologia avançada para diagnósticos precisos e tratamentos eficientes." },
  { icon: "👥", title: "Equipe Multidisciplinar Especializada", description: "Profissionais qualificados em todas as áreas da odontologia." },
  { icon: "🏥", title: "Todos os Serviços em Um Só Lugar", description: "Tratamentos completos sem necessidade de encaminhamentos externos." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Por Que Escolher a Palato?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-8 glass-card hover:shadow-xl transition-shadow">
              <span className="text-5xl mb-6 block">{r.icon}</span>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
