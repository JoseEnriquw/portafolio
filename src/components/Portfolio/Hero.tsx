import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Code2, Download } from "lucide-react";

const Hero = () => {
  const skills = [
    "C#", ".NET", "Java", "TypeScript", "React","Python",
    "Microservices", "MongoDB", "MySQL", "Docker"
  ];

  const handleDownloadCV = () => {
    // This would download the CV in a real implementation
    console.log("Downloading CV...");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 gradient-hero">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">portfolio.dev</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              José Enrique
              <br />
              <span className="text-gradient-primary">Menéndez</span>
            </h1>
            
            <div className="text-xl text-muted-foreground font-medium">
              Backend Developer & Full-Stack Engineer
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Tigre, Argentina</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Programador nacido en Cuba, graduado de la UTN. Especializado en 
            <span className="text-primary font-medium"> C# .NET</span> y desarrollo de 
            microservicios. Apasionado por la tecnología y el trabajo en equipo, 
            siempre enfrentando nuevos desafíos.
          </p>

          {/* Skills */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Tecnologías principales
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 animate-fade-in glow-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contactar
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadCV}
              className="border-primary/20 hover:bg-primary/10 hover:border-primary"
            >
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative animate-slide-up">
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 glow-primary">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary animate-pulse-glow"></div>
                <h3 className="text-2xl font-bold">Full-Stack Developer</h3>
                <p className="text-muted-foreground">Backend Specialist</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Años experiencia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Tecnologías</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Backend Development</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Microservices</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-secondary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span>Database Design</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="gradient-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;