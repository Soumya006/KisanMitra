import { motion } from "framer-motion";
import { ShoppingBag, Users, Leaf, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Products Listed",
    value: "1,234",
    icon: ShoppingBag,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Active Farmers",
    value: "567",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    label: "Organic Products",
    value: "432",
    icon: Leaf,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    label: "Successful Sales",
    value: "12,890",
    icon: TrendingUp,
    color: "text-earth",
    bgColor: "bg-earth/10",
  },
];

export function MarketplaceStats() {
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
          <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
