import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, IndianRupee } from "lucide-react";

const stats = [
  {
    label: "Avg. Wheat Price",
    value: "₹2,450",
    change: "+5.2%",
    trend: "up",
    period: "vs last week",
  },
  {
    label: "Avg. Rice Price",
    value: "₹3,120",
    change: "-2.1%",
    trend: "down",
    period: "vs last week",
  },
  {
    label: "Avg. Cotton Price",
    value: "₹6,850",
    change: "+8.7%",
    trend: "up",
    period: "vs last week",
  },
  {
    label: "Avg. Soybean Price",
    value: "₹4,200",
    change: "0%",
    trend: "neutral",
    period: "vs last week",
  },
];

export function MandiStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card rounded-xl p-5 shadow-card border border-border"
        >
          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            <span className="text-xs text-muted-foreground">/quintal</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            {stat.trend === "up" && (
              <TrendingUp className="w-4 h-4 text-accent" />
            )}
            {stat.trend === "down" && (
              <TrendingDown className="w-4 h-4 text-destructive" />
            )}
            {stat.trend === "neutral" && (
              <Minus className="w-4 h-4 text-muted-foreground" />
            )}
            <span
              className={`text-sm font-medium ${
                stat.trend === "up"
                  ? "text-accent"
                  : stat.trend === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {stat.change}
            </span>
            <span className="text-xs text-muted-foreground">{stat.period}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
