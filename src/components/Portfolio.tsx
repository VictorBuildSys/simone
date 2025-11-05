import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      name: "Life Projects",
      instagram: "lifeprojectst",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    },
    {
      name: "BH Caçamba",
      instagram: "bhcacamba",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    },
    {
      name: "Joana Boutique",
      instagram: "joana_boutiquebetim",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop",
    },
    {
      name: "Advance Inteligência",
      instagram: "advanceinteligenciaempresarial",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Meu <span className="bg-gradient-primary bg-clip-text text-transparent">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos projetos que gerencio e desenvolvo nas redes sociais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-gold cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={`https://www.instagram.com/${project.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <ExternalLink size={20} />
                      <span className="font-semibold">Ver Instagram</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">@{project.instagram}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
