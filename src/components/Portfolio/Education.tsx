import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Universidad de la Ciudad",
      degree: "Licenciatura en Desarrollo y Producción de Videojuegos",
      period: "Sep 2024 - Actualidad",
      location: "Argentina",
      status: "En curso",
      description: "Formación especializada en desarrollo de videojuegos, programación de motores, diseño de gameplay y producción multimedia.",
      current: true
    },
    {
      institution: "Universidad Tecnológica Nacional (UTN)",
      degree: "Tecnicatura Universitaria en Sistemas Informáticos",
      period: "Mar 2022 - Dic 2022",
      location: "Argentina",
      status: "Completado",
      description: "Especialización en arquitectura de sistemas, administración de bases de datos y infraestructura tecnológica.",
      current: false
    },
    {
      institution: "Universidad Tecnológica Nacional (UTN)",
      degree: "Tecnicatura Universitaria en Programación",
      period: "Mar 2020 - Dic 2021",
      location: "Argentina",
      status: "Completado",
      description: "Fundamentos sólidos en programación, algoritmos, estructuras de datos y metodologías de desarrollo de software.",
      current: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Formación <span className="text-gradient-secondary">Académica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria educativa en tecnología y desarrollo de software
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`
                backdrop-blur-sm border-border/50 hover:border-secondary/30 transition-all duration-500
                animate-fade-in hover:glow-secondary
                ${edu.current ? 'bg-card/80 border-secondary/20' : 'bg-card/50'}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-secondary" />
                      {edu.institution}
                      {edu.current && (
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                          En curso
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="text-lg font-semibold text-gradient-primary">
                      {edu.degree}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <Badge 
                      variant={edu.current ? "default" : "secondary"}
                      className={edu.current ? "bg-secondary/20 text-secondary" : ""}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">
                  {edu.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 text-center">
          <Card className="backdrop-blur-sm bg-card/50 border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                Logros Académicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">2</div>
                  <div className="text-sm text-muted-foreground">Títulos Universitarios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Años de Estudio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">UTN</div>
                  <div className="text-sm text-muted-foreground">Universidad de Prestigio</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;