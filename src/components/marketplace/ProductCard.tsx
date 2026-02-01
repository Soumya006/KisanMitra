import { Link } from "react-router-dom";
import { MapPin, Star, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/marketplace/${product.id}`}>
      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.organic && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              <Leaf className="w-3 h-3 mr-1" />
              Organic
            </Badge>
          )}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm"
          >
            {product.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="w-3 h-3" />
            <span>{product.farmer.location}</span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-foreground">₹{product.price}</span>
              <span className="text-sm text-muted-foreground">/{product.unit}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="font-medium text-foreground">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews})</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Min: {product.minOrder} {product.unit}
            </p>
            <Button size="sm" variant="outline" className="text-xs">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
