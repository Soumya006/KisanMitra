import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const districts = [
  { value: "all", label: "All Districts" },
  { value: "indore", label: "Indore" },
  { value: "bhopal", label: "Bhopal" },
  { value: "jabalpur", label: "Jabalpur" },
  { value: "gwalior", label: "Gwalior" },
  { value: "ujjain", label: "Ujjain" },
  { value: "sagar", label: "Sagar" },
  { value: "dewas", label: "Dewas" },
  { value: "satna", label: "Satna" },
];

const crops = [
  { value: "all", label: "All Crops" },
  { value: "wheat", label: "Wheat" },
  { value: "rice", label: "Rice" },
  { value: "cotton", label: "Cotton" },
  { value: "soybean", label: "Soybean" },
  { value: "maize", label: "Maize" },
  { value: "gram", label: "Gram (Chana)" },
  { value: "groundnut", label: "Groundnut" },
  { value: "mustard", label: "Mustard" },
];

interface PriceFiltersProps {
  selectedDistrict: string;
  setSelectedDistrict: (value: string) => void;
  selectedCrop: string;
  setSelectedCrop: (value: string) => void;
}

export function PriceFilters({
  selectedDistrict,
  setSelectedDistrict,
  selectedCrop,
  setSelectedCrop,
}: PriceFiltersProps) {
  return (
    <div className="bg-card rounded-xl p-4 md:p-6 shadow-card border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Filter Prices</h3>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search mandi or crop..." 
            className="pl-10 bg-background"
          />
        </div>
        
        <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>
          <SelectContent>
            {districts.map((district) => (
              <SelectItem key={district.value} value={district.value}>
                {district.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedCrop} onValueChange={setSelectedCrop}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select Crop" />
          </SelectTrigger>
          <SelectContent>
            {crops.map((crop) => (
              <SelectItem key={crop.value} value={crop.value}>
                {crop.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
