import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Home, User, Briefcase, GraduationCap, 
  Code2, Mail, Menu, X, Sun, Moon 
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDark, setIsDark] = useState(true);

  const navItems = [
    { id: "hero", label: "Inicio", icon: Home },
    { id: "experience", label: "Experiencia", icon: Briefcase },
    { id: "education", label: "Educación", icon: GraduationCap },
    { id: "skills", label: "Habilidades", icon: Code2 },
    { id: "contact", label: "Contacto", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <>
      {/* Fixed Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
        <Card className="backdrop-blur-md bg-card/80 border-border/50 px-6 py-3 shadow-lg glow-primary">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`
                  transition-all duration-300 flex items-center gap-2
                  ${activeSection === item.id 
                    ? "bg-primary text-primary-foreground glow-primary" 
                    : "hover:bg-primary/10 hover:text-primary"
                  }
                `}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-2 hover:bg-secondary/10 hover:text-secondary"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center justify-between">
            <div className="font-semibold text-sm">José Enrique</div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-secondary/10 hover:text-secondary"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/10 hover:text-primary"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </Card>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="absolute top-20 left-4 right-4 bg-card/95 backdrop-blur-md border-border/50 p-6 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`
                    w-full justify-start gap-3 transition-all duration-300
                    ${activeSection === item.id 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary/10 hover:text-primary"
                    }
                  `}
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Floating Action Button - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-lg glow-primary animate-pulse-glow"
          onClick={() => scrollToSection("contact")}
        >
          <Mail className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/20 z-50">
        <div 
          className="h-full gradient-primary transition-all duration-300"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </>
  );
};

export default Navigation;