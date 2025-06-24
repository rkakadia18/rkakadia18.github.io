import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 theme-transition bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-yellow-400 dark:text-yellow-400">
              RK
            </div>
            <div className="hidden md:flex space-x-6 text-yellow-400 dark:text-yellow-400">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:opacity-80 transition-opacity"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:opacity-80 transition-opacity"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:opacity-80 transition-opacity"
              >
                Work Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:opacity-80 transition-opacity"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="hover:opacity-80 transition-opacity"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:opacity-80 transition-opacity"
              >
                Contact
              </button>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="theme-transition"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
