import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Turning <span className="gradient-text">Data</span> into Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a Data Science undergraduate passionate about turning raw data into meaningful insights and intelligent systems. I've worked on real-world projects across data analysis, machine learning, forecasting, and dashboard development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I enjoy solving business problems using data and building solutions that create impact. My approach combines technical expertise with a deep understanding of business needs to deliver solutions that truly matter.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">India</span>
                </div>
                <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">sreenugopireddy24@gmail.com</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden glass glow-purple">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl font-bold gradient-text">SG</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-[60px]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
