import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Send, MessageCircle, Download 
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jenriq05mfdez@gmail.com",
      link: "mailto:jenriq05mfdez@gmail.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 11 2544-2736",
      link: "tel:+541125442736"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Tigre, Argentina",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "/JoseEnriquw",
      link: "https://github.com/JoseEnriquw"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/José Enrique Menéndez Fernández",
      link: "https://www.linkedin.com/in/jos%C3%A9-enrique-men%C3%A9ndez-fern%C3%A1ndez-69a9b21a5"
    }
  ];

  // NOTE: contact form removed — keep toast for other actions if needed

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">
            Hablemos <span className="text-gradient-primary">Juntos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea 
            y cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 justify-items-center">
          {/* Contact Information + CV grouped and centered */}
          <div className="w-full max-w-xl space-y-8 animate-fade-in mx-auto">
            <Card className="backdrop-blur-sm bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="backdrop-blur-sm bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                      <social.icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <div className="font-medium">{social.label}</div>
                      <div className="text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Download CV */}
            <Card className="backdrop-blur-sm bg-gradient-primary border-0 text-primary-foreground">
              <CardContent className="p-6">
                <div className="text-center space-y-4 text-primary-foreground">
                  <h3 className="text-xl font-bold">¿Interesado en mi perfil?</h3>
                  <p className="opacity-90 text-primary-foreground">
                    Descarga mi CV completo para ver todos los detalles de mi experiencia
                  </p>
                  {/* Use an anchor so the file in public/ can be downloaded directly. */}
                  <a
                    href="/CV_Jose_Enrique_Menendez_Fernandez.pdf"
                    download="CV_Jose_Enrique_Menendez_Fernandez.pdf"
                    className="inline-block w-full"
                  >
                    <Button 
                      asChild
                      variant="secondary"
                      size="lg"
                      className="w-full bg-background text-foreground hover:bg-background/90"
                    >
                      <span>
                        <Download className="mr-2 h-4 w-4" />
                        Descargar CV
                      </span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;