import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

interface ProductGridProps {
  selectedCategory: string;
  selectedLocation: string;
  priceRange: number[];
  sortBy: string;
}

export function ProductGrid({
  selectedCategory,
  selectedLocation,
  priceRange,
  sortBy,
}: ProductGridProps) {
  // Filter products
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" ||
      product.category.toLowerCase() === selectedCategory;
    const locationMatch =
      selectedLocation === "all" ||
      product.location.toLowerCase() === selectedLocation;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && locationMatch && priceMatch;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.sold - a.sold;
      case "newest":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground">
            No products found matching your filters.
          </p>
        </div>
      )}
    </div>
  );
}
