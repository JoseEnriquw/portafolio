import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Andreani Grupo Logístico",
      position: "Desarrollador C# .Net",
      period: "Jul 2022 - Actualidad",
      location: "Híbrido (Tigre, Argentina)",
      description: "Soporte y desarrollo en el equipo de Arquitectura para soluciones backend: microservicios, APIs, librerías internas, integración y automatización CI/CD, y mejoras de observabilidad y pruebas.",
      technologies: [".NET 6", ".NET 8", "Microservices", "Web API", "EF Core / Dapper", "SQL Server", "MongoDB", "Kafka", "GitHub Actions", "xUnit", "React", "TypeScript", "Python", "ElasticSearch", "Elastic Apm", "Redis"],
      current: true
    },
    {
      company: "Evoltis (Freelance)",
      position: "Desarrollador FullStack",
      period: "Jul 2023 - Dic 2024",
      location: "Remoto",
      description: "Migraciones de datos desde un servicio legacy (.NET Framework 4.7 / MySQL) hacia un esquema de microservicios en .NET 6; implementé mapeos y validaciones, APIs y repositorios con EF Core, y orquestación con RabbitMQ.",
      technologies: [".NET 6", ".NET Framework 4.7", "EF Core", "MySQL", "RabbitMQ", "Microservices", "Unit Tests"],
      current: false
    },
    {
      company: "SISA LATAM",
      position: "Desarrollador Java",
      period: "Ene 2022 - Jul 2022",
      location: "Remoto",
      description: "Mantenimiento evolutivo y correctivo en sistemas legados Java: aplicaciones de escritorio y web con JSP/Servlets; implementación de features y resolución de bugs en módulos operativos.",
      technologies: ["Java", "JSP/Servlets", "SQL (MySQL/Informix)", "Git"],
      current: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Experiencia <span className="text-gradient-primary">Profesional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria profesional enfocada en desarrollo backend y arquitectura de microservicios
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`
                backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500
                animate-fade-in hover:glow-primary
                ${exp.current ? 'bg-card/80 border-primary/20' : 'bg-card/50'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-primary" />
                      {exp.company}
                      {exp.current && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          Actual
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="text-lg font-semibold text-gradient-secondary">
                      {exp.position}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/90 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-3 py-1 border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
                        style={{ 
                          animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` 
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;