import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import Experience from "@/components/Portfolio/Experience";
import Education from "@/components/Portfolio/Education";
import Skills from "@/components/Portfolio/Skills";
import Contact from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/20 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 José Enrique Menéndez Fernández. Desarrollado con React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
