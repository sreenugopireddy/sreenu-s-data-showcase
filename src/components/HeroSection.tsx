import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Cloud, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const floatingIcons = [
  { name: "Python", delay: 0 },
  { name: "SQL", delay: 0.2 },
  { name: "ML", delay: 0.4 },
  { name: "AI", delay: 0.6 },
  { name: "Power BI", delay: 0.8 },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-[100px]" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={icon.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + icon.delay, duration: 0.5 }}
            className={`absolute glass px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground animate-float`}
            style={{
              top: `${20 + (index * 15) % 60}%`,
              left: index % 2 === 0 ? `${5 + index * 3}%` : `${75 + index * 3}%`,
              animationDelay: `${icon.delay}s`,
            }}
          >
            {icon.name}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            Data Scientist | AI & ML Engineer | Data Analyst
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Sreenu Gopireddy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I build intelligent systems, uncover insights from data, and create ML-driven solutions that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-base font-semibold"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary/50 px-8 py-6 text-base font-semibold"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/sreenugopireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-secondary/50 transition-colors hover-glow"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sreenu-gopireddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-secondary/50 transition-colors hover-glow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://learn.microsoft.com/en-in/users/sreenugopireddy-1886"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-secondary/50 transition-colors hover-glow"
          >
            <Cloud className="h-5 w-5" />
          </a>
          <a
            href="https://leetcode.com/u/sreenu_24/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:bg-secondary/50 transition-colors hover-glow"
          >
            <Code2 className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
