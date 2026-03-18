import { motion } from "framer-motion";
import { Coins, Palette, Vote, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import {NeonButton}from "./NeonButton";

const columns = [
  {
    icon: <Coins className="text-neon-orange" size={28} />,
    title: "Earn WNC Tokens",
    desc: "Complete lessons, win battles, climb leaderboards to earn WNC tokens.",
    glow: "hsl(var(--neon-orange) / 0.3)",
  },
  {
    icon: <Palette className="text-neon-cyan" size={28} />,
    title: "Collect NFT Assets",
    desc: "Unlock exclusive outfits, badges, accessories and scene customizations.",
    glow: "hsl(var(--neon-cyan) / 0.3)",
  },
  {
    icon: <Vote className="text-neon-purple" size={28} />,
    title: "DAO Governance",
    desc: "Vote on new content, NFT drops, and game updates using your WNC tokens.",
    glow: "hsl(var(--neon-purple) / 0.3)",
  },
];

const flow = ["Earn", "Spend", "Stake", "Trade", "Govern"];

const TokenSection = () => (
  <section id="token" className="py-24 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="Play. Earn. Own." />

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {columns.map((col, i) => (
          <GlassCard key={i} glowColor={col.glow}>
            <div className="p-3 rounded-lg bg-white/5 inline-block mb-4">{col.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{col.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{col.desc}</p>
          </GlassCard>
        ))}
      </div>

      {/* Token flow strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card p-6 flex flex-wrap items-center justify-center gap-4 mb-8"
      >
        {flow.map((step, i) => (
          <div key={i} className="flex items-center gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-foreground">{step}</span>
            {i < flow.length - 1 && <ArrowRight size={16} className="text-primary" />}
          </div>
        ))}
      </motion.div>

      <div className="text-center">
        <NeonButton>NFT Marketplace</NeonButton>
      </div>
    </div>
  </section>
);

export default TokenSection;
