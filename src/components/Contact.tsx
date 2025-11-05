import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import { Instagram, Linkedin, Mail, Phone ,MessageCircle} from "lucide-react";
=======
import { Instagram, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
>>>>>>> 533d3e1af2594591a4a20b8c05df8f5aa99401e1
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
     {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (31) 9679-9362",
      link: "https://wa.me/5531996799362",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
    },
    {
      icon: Mail,
      label: "Email",
      value: "SimoneCalisto@gmail.com",
      link: "mailto:contato@SimoneCalisto@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (31) 99679-9362",
      link: "tel:+5531996799362",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@simonecalisto",
      link: "https://instagram.com/simonecalisto",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Simone Calisto",
      link: "https://linkedin.com/in/simonecalisto",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Vamos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Conversar?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou pronta para transformar sua presença digital. Entre em contato e vamos criar algo incrível juntos!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-background border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="p-6 bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-gold group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
