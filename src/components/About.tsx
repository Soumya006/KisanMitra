import { motion } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Farmer First",
    description: "Every decision we make starts with the question: how does this help farmers?",
  },
  {
    icon: Target,
    title: "Practical Solutions",
    description: "We build technology that works in the field, not just in the lab.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our platform grows stronger with every farmer who joins our network.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description: "We ensure accuracy and reliability in every feature we build.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bridging the Gap Between{" "}
              <span className="text-primary">Technology & Farming</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              FarmAssist was born from a simple observation: Indian farmers face preventable 
              crop losses worth billions every year. We're here to change that with accessible, 
              AI-powered solutions that put technology in every farmer's hands.
            </p>
            <p className="text-muted-foreground">
              Our team combines agricultural expertise with cutting-edge AI to build tools 
              that are not just powerful, but practical and easy to use — even for farmers 
              with limited smartphone experience.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
