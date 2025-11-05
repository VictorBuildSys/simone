import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Simone Calisto - Social Media Specialist | Gestão de Redes Sociais";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Especialista em mídias sociais com +5 anos de experiência. Criação de conteúdo estratégico, gestão de redes sociais e campanhas que geram resultados reais para sua marca."
      );
    }

    // Add structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Simone Calisto",
      "jobTitle": "Social Media Specialist",
      "description": "Especialista em mídias sociais, criando conteúdo envolvente e impactante para marcas",
      "url": window.location.href,
      "sameAs": [
        "https://instagram.com/simonecalisto",
        "https://linkedin.com/in/simonecalisto"
      ],
      "knowsAbout": [
        "Social Media Marketing",
        "Content Creation",
        "Digital Strategy",
        "Community Management",
        "Paid Advertising",
        "Analytics"
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
