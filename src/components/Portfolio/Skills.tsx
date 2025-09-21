import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Database,
  Server,
  Cloud,
  Wrench,
  Users,
  GitBranch,
  TestTube,
  ClipboardCheck,
  Clock,
  BookOpen,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: Code2,
      color: "text-primary",
      skills: [
        { name: "C#", level: 95, years: "3+" },
        { name: "Java", level: 85, years: "2+" },
        { name: "TypeScript", level: 80, years: "2+" },
        { name: "JavaScript", level: 85, years: "3+" },
        { name: "HTML/CSS", level: 90, years: "4+" },
        { name: "Python", level: 65, years: "1+" }
      ]
    },
    {
      title: "Frameworks & Tecnologías",
      icon: Server,
      color: "text-secondary",
      skills: [
        { name: ".NET 6/8", level: 95, years: "3+" },
        { name: "Spring Boot", level: 60, years: "1+" },
        { name: "React", level: 60, years: "1+" },
        { name: "Entity Framework", level: 90, years: "3+" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: Database,
      color: "text-primary",
      skills: [
        { name: "MySQL", level: 90, years: "3+" },
        { name: "SQL Server", level: 85, years: "3+" },
        { name: "MongoDB", level: 80, years: "2+" },
        { name: "PostgreSQL", level: 75, years: "1+" },
        { name: "Oracle (PL/SQL)", level: 60, years: "1+" }
      ]
    },
    {
      title: "DevOps & Herramientas",
      icon: Cloud,
      color: "text-secondary",
      skills: [
        { name: "Docker", level: 85, years: "2+" },
        { name: "Microservicios", level: 90, years: "3+" },
        { name: "GitHub Actions", level: 80, years: "2+" },
        { name: "ElasticSearch", level: 65, years: "1+" },
        { name: "Kafka", level: 85, years: "3+" }
      ]
    }
  ];

  const softSkills = [
    {
      name: "Trabajo en equipo",
      icon: Users,
      desc: "Coordinación con otros equipos para integrar servicios y alinear entregas."
    },
    {
      name: "Comunicación técnica",
      icon: Code2,
      desc: "Explico decisiones de arquitectura en lenguaje claro."
    },
    {
      name: "Resolución de problemas",
      icon: Wrench,
      desc: "Diagnóstico de issues en producción (trazas/logs) y fixes puntuales."
    },
    {
      name: "Ownership / Proactividad",
      icon: GitBranch,
      desc: "Tomo tareas punta a punta: diseño, implementación, pruebas y handoff."
    },
    {
      name: "Orientación a la calidad",
      icon: TestTube,
      desc: "Tests unitarios, chequeos en CI y criterios de aceptación claros."
    },
    {
      name: "Documentación útil",
      icon: ClipboardCheck,
      desc: "Handbooks, notas de cambio y guías rápidas para onboarding y soporte."
    },
    {
      name: "Gestión del tiempo / Prioridad",
      icon: Clock,
      desc: "Foco en lo crítico (incidentes, flujos core) sin frenar roadmap."
    },
    {
      name: "Aprendizaje continuo / Adaptabilidad",
      icon: BookOpen,
      desc: "Migraciones de legacy a .NET 6/8 y adopción de mejores prácticas."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Habilidades <span className="text-gradient-primary">Técnicas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-primary animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-3 animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {skill.years}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="backdrop-blur-sm bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              Habilidades <span className="text-gradient-primary">Blandas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/30 hover:bg-primary/5 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm text-foreground">{skill.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{skill.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specializations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient-primary">
            Especializaciones
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Arquitectura de Microservicios",
              "Desarrollo Backend",
              "APIs RESTful",
              "Unit Testing",
              "Migración de Sistemas Legacy"
            ].map((spec, index) => (
              <Badge
                key={spec}
                className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;