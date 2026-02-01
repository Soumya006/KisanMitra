import { motion } from "framer-motion";
import { Tractor, ShoppingBag } from "lucide-react";
import type { UserRole } from "@/pages/Auth";

interface RoleSelectionProps {
  onSelectRole: (role: UserRole) => void;
}

const roles = [
  {
    id: "farmer" as UserRole,
    title: "I'm a Farmer",
    description: "Grow and sell your crops, access mandi prices, and get AI-powered crop disease detection",
    icon: Tractor,
    gradient: "from-primary to-secondary",
  },
  {
    id: "consumer" as UserRole,
    title: "I'm a Consumer",
    description: "Buy fresh produce directly from farmers at the best prices",
    icon: ShoppingBag,
    gradient: "from-secondary to-accent",
  },
];

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <motion.div
      key="role-selection"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Welcome to FarmAssist
        </h1>
        <p className="text-muted-foreground text-lg">
          Tell us who you are to get started
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <motion.button
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectRole(role.id)}
            className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all text-left overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 shadow-lg`}>
              <role.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {role.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              {role.description}
            </p>

            <div className="mt-6 flex items-center text-primary font-medium text-sm">
              Continue
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
