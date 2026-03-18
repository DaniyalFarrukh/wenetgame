import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`mb-16 ${align === "center" ? "text-center" : ""}`}
  >
    <h2 className="font-heading text-4xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
    {/* Riot-style accent line — gradient instead of solid */}
    <div
      className={`h-[2px] w-24 mt-5 bg-gradient-to-r from-sky-400 to-violet-400 ${
        align === "center" ? "mx-auto" : ""
      }`}
    />
  </motion.div>
);

export default SectionHeading;