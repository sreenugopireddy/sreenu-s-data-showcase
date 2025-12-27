import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, Github, ExternalLink, BarChart2, Zap } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Financial Performance Dashboard",
    description: "Interactive Power BI dashboard for financial KPIs, enabling real-time tracking of business performance metrics and strategic decision-making.",
    tools: ["Power BI", "Excel", "ETL", "DAX"],
    icon: BarChart2,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Smart Grid Energy Demand Forecasting",
    description: "ML-based energy demand prediction system using time series analysis for accurate forecasting and grid optimization.",
    tools: ["Python", "Time Series", "ML", "Pandas"],
    icon: Zap,
    gradient: "from-accent/20 to-accent/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Folder className="h-5 w-5 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden hover-glow h-full flex flex-col">
                {/* Project preview */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="h-16 w-16 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-secondary/50 rounded-lg text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
