import { motion } from "framer-motion";
import { Lock, Unlock, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tiers = [
  { level: "Beginner", color: "#39ff14", episodes: "1–20", grade: "3–4", desc: "Basic vocabulary & phrases", unlocked: true },
  { level: "Elementary", color: "#00f5ff", episodes: "21–50", grade: "5–6", desc: "Story missions & puzzles", unlocked: true },
  { level: "Intermediate", color: "#9b59b6", episodes: "51–80", grade: "7–8", desc: "Multiplayer role-playing", unlocked: false },
  { level: "Advanced", color: "#ff6b00", episodes: "81–100", grade: "9–10", desc: "Real-world simulations", unlocked: false },
  { level: "Expert", color: "#ff2d78", episodes: "101–120", grade: "11–12", desc: "Competitive high-stakes missions", unlocked: false },
];

const EpisodesSection = () => (
  <section id="episodes" className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="120 Episodes. One Epic Journey." />
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="min-w-[280px] p-8 rounded-2xl bg-card border border-white/[0.05] relative group transition-all duration-300"
            style={{ boxShadow: `0 0 0 0 ${tier.color}` }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px -5px ${tier.color}40`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${tier.color}`;
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ backgroundColor: tier.color }} />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Episodes {tier.episodes}
            </span>
            <h3 className="text-2xl font-heading font-bold mt-2 mb-2" style={{ color: tier.color }}>
              {tier.level}
            </h3>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Grades {tier.grade}</p>
            <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase px-3 py-1 bg-white/5 rounded-full text-foreground flex items-center gap-1">
                {tier.unlocked ? <Unlock size={12} /> : <Lock size={12} />}
                {tier.unlocked ? "Unlocked" : "Locked"}
              </span>
              <Cpu size={18} className="text-muted-foreground opacity-30" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EpisodesSection;
