import { TrendingUp, TrendingDown, Minus, MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const priceData = [
  { id: 1, crop: "Wheat", district: "Indore", mandi: "Indore Mandi", minPrice: 2200, maxPrice: 2550, modalPrice: 2450, change: 5.2, trend: "up" },
  { id: 2, crop: "Rice", district: "Bhopal", mandi: "Bhopal Central", minPrice: 2900, maxPrice: 3300, modalPrice: 3120, change: -2.1, trend: "down" },
  { id: 3, crop: "Cotton", district: "Ujjain", mandi: "Ujjain Krishi", minPrice: 6500, maxPrice: 7200, modalPrice: 6850, change: 8.7, trend: "up" },
  { id: 4, crop: "Soybean", district: "Dewas", mandi: "Dewas Mandi", minPrice: 4000, maxPrice: 4400, modalPrice: 4200, change: 0, trend: "neutral" },
  { id: 5, crop: "Maize", district: "Jabalpur", mandi: "Jabalpur Market", minPrice: 1800, maxPrice: 2100, modalPrice: 1950, change: 3.5, trend: "up" },
  { id: 6, crop: "Gram", district: "Gwalior", mandi: "Gwalior Mandi", minPrice: 4800, maxPrice: 5200, modalPrice: 5000, change: -1.5, trend: "down" },
  { id: 7, crop: "Wheat", district: "Sagar", mandi: "Sagar Krishi", minPrice: 2150, maxPrice: 2480, modalPrice: 2380, change: 4.1, trend: "up" },
  { id: 8, crop: "Rice", district: "Satna", mandi: "Satna Central", minPrice: 2850, maxPrice: 3250, modalPrice: 3080, change: -1.8, trend: "down" },
  { id: 9, crop: "Groundnut", district: "Indore", mandi: "Indore Mandi", minPrice: 5200, maxPrice: 5800, modalPrice: 5500, change: 6.2, trend: "up" },
  { id: 10, crop: "Mustard", district: "Bhopal", mandi: "Bhopal Central", minPrice: 4600, maxPrice: 5100, modalPrice: 4850, change: 2.3, trend: "up" },
];

interface PriceTableProps {
  selectedDistrict: string;
  selectedCrop: string;
}

export function PriceTable({ selectedDistrict, selectedCrop }: PriceTableProps) {
  const filteredData = priceData.filter((item) => {
    const districtMatch = selectedDistrict === "all" || item.district.toLowerCase() === selectedDistrict;
    const cropMatch = selectedCrop === "all" || item.crop.toLowerCase() === selectedCrop;
    return districtMatch && cropMatch;
  });

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-accent" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

  return (
    <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="font-display text-xl font-semibold text-foreground">
          Today's Mandi Prices
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Prices are in ₹ per quintal • Last updated: 2 hours ago
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Crop</TableHead>
              <TableHead className="font-semibold">Mandi</TableHead>
              <TableHead className="font-semibold text-right">Min Price</TableHead>
              <TableHead className="font-semibold text-right">Max Price</TableHead>
              <TableHead className="font-semibold text-right">Modal Price</TableHead>
              <TableHead className="font-semibold text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                        {item.crop}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{item.mandi}</p>
                        <p className="text-xs text-muted-foreground">{item.district}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-medium text-muted-foreground">
                    {formatPrice(item.minPrice)}
                  </TableCell>
                  <TableCell className="text-right font-medium text-muted-foreground">
                    {formatPrice(item.maxPrice)}
                  </TableCell>
                  <TableCell className="text-right font-bold text-foreground">
                    {formatPrice(item.modalPrice)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      {getTrendIcon(item.trend)}
                      <span
                        className={`font-medium ${
                          item.trend === "up"
                            ? "text-accent"
                            : item.trend === "down"
                            ? "text-destructive"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.change > 0 ? "+" : ""}
                        {item.change}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No data found for the selected filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
