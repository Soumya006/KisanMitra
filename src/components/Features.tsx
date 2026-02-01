import { motion } from "framer-motion";
import { 
  ScanLine, 
  GraduationCap, 
  TrendingUp, 
  ShoppingCart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ScanLine,
    title: "AI Crop Disease Detection",
    description: "Upload a photo of your crop and get instant AI-powered diagnosis with treatment recommendations.",
    benefits: ["95% accuracy rate", "50+ crop diseases", "Instant results"],
    color: "leaf",
    gradient: "from-leaf to-leaf-light",
  },
  {
    icon: GraduationCap,
    title: "Agri-Internship Program",
    description: "Get assigned trained agriculture students who provide hands-on field guidance and support.",
    benefits: ["Personal mentor", "On-field training", "Local language support"],
    color: "sky",
    gradient: "from-sky to-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Mandi Price Intelligence",
    description: "Real-time market prices from mandis across India. Know the best time and place to sell.",
    benefits: ["500+ mandis", "Price alerts", "Historical trends"],
    color: "secondary",
    gradient: "from-secondary to-harvest-light",
  },
  {
    icon: ShoppingCart,
    title: "Direct Farmer Marketplace",
    description: "Sell directly to consumers without middlemen. Earn more, build loyal customers.",
    benefits: ["Zero commission", "Direct payments", "Local delivery"],
    color: "earth",
    gradient: "from-earth to-earth-light",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Powerful Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Grow Smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four integrated modules designed to solve real farming challenges and 
            increase your income.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 overflow-hidden"
            >
              {/* Gradient Background */}
              <div 
                className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`} 
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
