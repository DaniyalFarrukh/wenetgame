import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NeonButton({ variant = "primary", children, className, onClick }: Props) {
  const colors = {
    primary:
      "border-sky-400 text-sky-400 hover:bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]",
    secondary:
      "border-violet-400 text-violet-400 hover:bg-violet-400/10 shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_40px_rgba(167,139,250,0.6)]",
    outline:
      "border-white/40 text-white/80 hover:bg-white/10 shadow-none",
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "px-6 py-3 rounded-lg border font-heading font-bold uppercase tracking-wider transition-all duration-300",
        colors[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}

export default NeonButton;