import { motion } from "framer-motion";
import { Camera, Cpu, FileCheck, Sprout } from "lucide-react";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Upload Photo",
    description: "Take a photo of your affected crop using your phone camera.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our AI instantly analyzes the image to detect diseases and severity.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Results",
    description: "Receive detailed diagnosis with treatment and prevention steps.",
  },
  {
    icon: Sprout,
    step: "04",
    title: "Save Your Crop",
    description: "Apply recommended solutions and watch your crops recover.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How Disease Detection Works
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Get accurate diagnosis in under 30 seconds. No expertise required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number with Icon */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary-foreground flex items-center justify-center shadow-elevated mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
