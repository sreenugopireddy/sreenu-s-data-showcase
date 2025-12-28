import { Github, Linkedin, Heart, Cloud, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Crafting data-driven solutions with passion
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sreenugopireddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/sreenu-gopireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://learn.microsoft.com/en-in/users/sreenugopireddy-1886"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <Cloud className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/sreenu_24/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <Code2 className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © 2024 Sreenu Gopireddy. Made with <Heart className="h-4 w-4 text-primary" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
