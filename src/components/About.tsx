import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary shadow-gold">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop"
                alt="Simone Calisto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-50" />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div>
              <p className="text-primary font-semibold mb-2">Quem sou</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Com uma visão estratégica aguçada e paixão por comunicação, sou especialista em criar pontes entre marcas e pessoas no vasto universo das redes sociais.
              </p>
              <p>
                Minhas habilidades vão além do gerenciamento de contas: eu conto histórias, construo comunidades e converto engajamento em resultados.
              </p>
              <p>
                Da criatividade na criação de conteúdos impactantes ao uso de dados para estratégias certeiras, faço da inovação a minha principal aliada. Tenho experiência em impulsionar projetos com campanhas personalizadas e uma abordagem humanizada, sempre antenada às últimas tendências.
              </p>
              <p className="text-foreground font-semibold">
                Se você busca alguém que transforme perfis em experiências digitais inesquecíveis, prazer, sou Simone! 😉
              </p>
            </div>

            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("contato")}
            >
              Contrate-me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
