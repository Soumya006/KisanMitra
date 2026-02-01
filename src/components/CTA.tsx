import { motion } from "framer-motion";
import { ArrowRight, Smartphone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Free to get started",
  "Works on any smartphone",
  "Available in Hindi & regional languages",
  "No technical skills needed",
];

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-primary-foreground" />
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-primary-foreground" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border-2 border-primary-foreground -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Start Protecting Your Crops Today
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Join thousands of farmers who are already using FarmAssist to reduce crop losses 
                and increase their income. Getting started takes less than 2 minutes.
              </p>

              {/* Benefits */}
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="golden" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  <Smartphone className="w-5 h-5" />
                  Download App
                </Button>
              </div>
            </div>

            {/* Phone Mockup Placeholder */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] rounded-[3rem] bg-primary-foreground/10 backdrop-blur-sm border-4 border-primary-foreground/20 flex items-center justify-center">
                  <div className="text-center text-primary-foreground/70">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Mobile App</p>
                    <p className="text-xs opacity-70">Coming Soon</p>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-secondary rotate-12 flex items-center justify-center shadow-elevated">
                  <span className="text-2xl">🌾</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-accent -rotate-12 flex items-center justify-center shadow-elevated">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
