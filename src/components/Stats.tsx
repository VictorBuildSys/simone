const Stats = () => {
  const stats = [
    { value: "+5", label: "Anos de experiência" },
    { value: "+30", label: "Projetos concluídos" },
    { value: "+20", label: "Clientes satisfeitos" },
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
