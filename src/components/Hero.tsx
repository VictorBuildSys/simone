import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      <div className="absolute inset-0 bg-gradient-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              Olá, Eu sou{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Simone Calisto
              </span>{" "}
              👋
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary">
              Social Media
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transformando ideias em conexões digitais que brilham!
            </p>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
              Sou especialista em mídias sociais, criando conteúdo envolvente e
              impactante para marcas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contato")}
            >
              Contrate-me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("portfolio")}
            >
              Ver Portfólio
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:contato@simonecalisto.com"
              className="text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
