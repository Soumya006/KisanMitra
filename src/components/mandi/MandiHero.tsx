import { motion } from "framer-motion";
import { TrendingUp, MapPin, Clock } from "lucide-react";

export function MandiHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground mb-6">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Live Market Data</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mandi Price{" "}
            <span className="text-gradient-hero">Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access real-time mandi prices across districts. Make informed decisions 
            and get the best value for your produce.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>50+ Districts</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Updated Every Hour</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>7-Day Trends</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
