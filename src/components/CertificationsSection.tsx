import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, BarChart2, Database, FileSpreadsheet } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architecture",
    issuer: "Forage",
    icon: Cloud,
  },
  {
    title: "Data Visualization",
    issuer: "Tata",
    icon: BarChart2,
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis",
    icon: Database,
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    icon: FileSpreadsheet,
  },
  {
    title: "ETL in Power BI",
    issuer: "Microsoft (Coursera)",
    icon: Database,
  },
  {
    title: "Data Analysis & Visualization",
    issuer: "Microsoft (Coursera)",
    icon: BarChart2,
  },
  {
    title: "Harnessing Power of Data",
    issuer: "Microsoft (Coursera)",
    icon: FileSpreadsheet,
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Certifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover-glow group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
