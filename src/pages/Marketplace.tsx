import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { MarketplaceStats } from "@/components/marketplace/MarketplaceStats";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MarketplaceHero />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MarketplaceStats />
          
          <div className="grid lg:grid-cols-4 gap-8 mt-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <MarketplaceFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </motion.aside>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <ProductGrid
                selectedCategory={selectedCategory}
                selectedLocation={selectedLocation}
                priceRange={priceRange}
                sortBy={sortBy}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
