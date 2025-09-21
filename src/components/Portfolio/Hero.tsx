import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Code2, Download } from "lucide-react";

const Hero = () => {
  const skills = [
    "C#",
    ".NET (6-8)",
    "ASP.NET Web API",
    "EF Core / Dapper",
    "Microservices",
    "Clean Architecture",
    "Docker",
    "RabbitMQ / Kafka",
    "SQL Server / MySQL",
    "MongoDB",
    "React / TypeScript",
    "Unit Tests"
  ];

  const handleDownloadCV = () => {
    // This would download the CV in a real implementation
    console.log("Downloading CV...");
  };

  const base = import.meta.env.BASE_URL;
  return (
    <section className="min-h-screen flex items-center justify-center px-4 gradient-hero">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              José Enrique
              <br />
              <span className="text-gradient-primary">Menéndez</span>
            </h1>
            
            <div className="text-xl text-muted-foreground font-medium">
              Full-Stack Developer
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
                <a href="#contact" className="inline-block">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-primary-foreground hover:glow-primary transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contactar
                  </Button>
                </a>
            
            {/* Download CV (served from public/) - keep only on main/hero */}
            <a href={`${base}cv-jose-enrique-menendez-fernandez.pdf`} download className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/10 hover:border-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
              <a href="https://github.com/JoseEnriquw" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-enrique-men%C3%A9ndez-fern%C3%A1ndez-69a9b21a5" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:jenriq05mfdez@gmail.com" className="inline-block">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative animate-slide-up">
          <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 glow-primary">
            <div className="space-y-6">
              <div className="text-center">
                  {/* Profile image: uses public/yo.jpg */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-primary animate-pulse-glow">
                    <img
                      src={`${base}yo.jpg`}
                      alt="Profile"
                      className="w-full h-full object-cover block"
                      loading="lazy"
                    />
                  </div>
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