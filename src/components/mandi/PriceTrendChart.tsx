import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const trendData = [
  { day: "Mon", wheat: 2380, rice: 3180, cotton: 6500, soybean: 4150 },
  { day: "Tue", wheat: 2400, rice: 3150, cotton: 6600, soybean: 4180 },
  { day: "Wed", wheat: 2420, rice: 3120, cotton: 6700, soybean: 4200 },
  { day: "Thu", wheat: 2410, rice: 3100, cotton: 6750, soybean: 4190 },
  { day: "Fri", wheat: 2430, rice: 3110, cotton: 6800, soybean: 4200 },
  { day: "Sat", wheat: 2440, rice: 3115, cotton: 6820, soybean: 4195 },
  { day: "Sun", wheat: 2450, rice: 3120, cotton: 6850, soybean: 4200 },
];

const cropColors: Record<string, string> = {
  wheat: "hsl(145, 45%, 28%)",
  rice: "hsl(38, 75%, 55%)",
  cotton: "hsl(120, 40%, 45%)",
  soybean: "hsl(25, 35%, 35%)",
};

interface PriceTrendChartProps {
  selectedCrop: string;
}

export function PriceTrendChart({ selectedCrop }: PriceTrendChartProps) {
  const activeCrops = selectedCrop === "all" 
    ? ["wheat", "rice", "cotton", "soybean"] 
    : [selectedCrop];

  return (
    <div className="bg-card rounded-xl shadow-card border border-border p-4 md:p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="font-display text-lg font-semibold text-foreground">
          7-Day Price Trend
        </h3>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 20%, 85%)" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: "hsl(140, 15%, 40%)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(45, 20%, 85%)" }}
            />
            <YAxis 
              tick={{ fill: "hsl(140, 15%, 40%)", fontSize: 12 }}
              axisLine={{ stroke: "hsl(45, 20%, 85%)" }}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(45, 20%, 85%)",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 20px -4px hsl(145, 45%, 28%, 0.15)",
              }}
              labelStyle={{ color: "hsl(140, 25%, 15%)", fontWeight: 600 }}
              formatter={(value: number, name: string) => [
                `₹${value.toLocaleString("en-IN")}`,
                name.charAt(0).toUpperCase() + name.slice(1),
              ]}
            />
            <Legend 
              formatter={(value) => (
                <span className="text-sm capitalize text-muted-foreground">
                  {value}
                </span>
              )}
            />
            {activeCrops.map((crop) => (
              <Line
                key={crop}
                type="monotone"
                dataKey={crop}
                stroke={cropColors[crop] || "hsl(145, 45%, 28%)"}
                strokeWidth={2}
                dot={{ fill: cropColors[crop] || "hsl(145, 45%, 28%)", r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Price trends based on average modal prices across all districts
        </p>
      </div>
    </div>
  );
}
