import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
}

export function GlassCard({ children, className, onClick, glowColor }: Props) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={
        glowColor
          ? { boxShadow: `0 0 30px ${glowColor}15, 0 0 60px ${glowColor}08` }
          : undefined
      }
      className={cn(
        "relative rounded-2xl border border-white/10 group",
        "bg-white/5 backdrop-blur-md",
        "hover:border-white/20",
        "transition-shadow duration-300",
        onClick && "cursor-pointer",
        className
      )}
    >
      {glowColor && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${glowColor}20, transparent 70%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
