import { motion } from "framer-motion";
import { ShoppingBasket, Users, Leaf } from "lucide-react";

export function MarketplaceHero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-nature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
            <ShoppingBasket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Direct from Farms</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Farm Fresh{" "}
            <span className="text-gradient-hero">Marketplace</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Buy directly from farmers. Fresh produce, fair prices, zero middlemen. 
            Support local agriculture while getting the best quality.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>500+ Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBasket className="w-4 h-4 text-primary" />
              <span>1000+ Products</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-primary" />
              <span>100% Fresh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
