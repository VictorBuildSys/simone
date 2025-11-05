import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Camera, Lightbulb, LineChart, Megaphone, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: "Estratégia de Conteúdo",
      description: "Planejamento criativo alinhado aos objetivos da marca",
    },
    {
      icon: Camera,
      title: "Criação de Conteúdo",
      description: "Posts, stories e reels que engajam e convertem",
    },
    {
      icon: Users,
      title: "Gestão de Comunidade",
      description: "Relacionamento autêntico com o público",
    },
    {
      icon: Megaphone,
      title: "Campanhas Pagas",
      description: "Anúncios otimizados para máximo ROI",
    },
    {
      icon: BarChart3,
      title: "Análise de Métricas",
      description: "Insights baseados em dados para decisões estratégicas",
    },
    {
      icon: LineChart,
      title: "Tendências Digitais",
      description: "Sempre atualizada com as últimas novidades",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <p className="text-primary font-semibold">Habilidades</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            O que faz uma{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Social Media?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Planejo e executo estratégias de comunicação digital, criando conteúdos que conectam marcas ao público. Minha atuação inclui gestão de redes sociais, campanhas pagas, análise de métricas e tendências, garantindo engajamento e resultados reais para fortalecer a presença online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() => scrollToSection("contato")}
          >
            Contrate-me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
