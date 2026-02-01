import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MandiHero } from "@/components/mandi/MandiHero";
import { PriceFilters } from "@/components/mandi/PriceFilters";
import { PriceTable } from "@/components/mandi/PriceTable";
import { PriceTrendChart } from "@/components/mandi/PriceTrendChart";
import { MandiStats } from "@/components/mandi/MandiStats";

export default function MandiPrices() {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedCrop, setSelectedCrop] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MandiHero />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MandiStats />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <PriceFilters
              selectedDistrict={selectedDistrict}
              setSelectedDistrict={setSelectedDistrict}
              selectedCrop={selectedCrop}
              setSelectedCrop={setSelectedCrop}
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <PriceTable 
                selectedDistrict={selectedDistrict} 
                selectedCrop={selectedCrop} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PriceTrendChart selectedCrop={selectedCrop} />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
