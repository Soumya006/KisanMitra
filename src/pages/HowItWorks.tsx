import { motion } from "framer-motion";
import { Camera, Cpu, FileCheck, Sprout, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Upload Photo",
    description: "Take a photo of your affected crop using your phone camera. Our system accepts images in various formats and lighting conditions.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analysis",
    description: "Our advanced AI powered by deep learning models instantly analyzes the image to detect diseases, pests, and nutrient deficiencies with high accuracy.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Get Results",
    description: "Receive detailed diagnosis including disease name, severity level, affected crop area, and comprehensive treatment recommendations.",
  },
  {
    icon: Sprout,
    step: "04",
    title: "Save Your Crop",
    description: "Apply the recommended organic or chemical solutions and preventive measures. Track your crop's recovery progress over time.",
  },
];

const features = [
  {
    title: "Multi-Disease Detection",
    description: "Identify over 50+ crop diseases across various plant species including rice, wheat, tomato, potato, and more.",
  },
  {
    title: "Real-time Analysis",
    description: "Get instant results within seconds. No waiting, no delays - just quick and accurate diagnosis.",
  },
  {
    title: "Treatment Recommendations",
    description: "Receive both organic and chemical treatment options tailored to your specific crop and disease severity.",
  },
  {
    title: "Offline Capability",
    description: "Download disease information for offline access in areas with limited internet connectivity.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              AI-Powered Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How Our AI Disease Detection Works
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our cutting-edge artificial intelligence system uses deep learning models trained on millions of crop images to accurately identify diseases and provide actionable treatment recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get accurate crop disease diagnosis in just four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 h-full border border-border hover:border-primary/50 transition-colors hover:shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities designed for farmers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of farmers who are already using our AI-powered disease detection to save their crops and increase yields.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/auth">Get Started Free</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}