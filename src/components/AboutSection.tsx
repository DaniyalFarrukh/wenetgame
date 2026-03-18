import { motion } from "framer-motion";
import { Gamepad2, Globe, Glasses, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GlassCard } from "./GlassCard";

const highlights = [
  { icon: <Gamepad2 className="text-neon-cyan" size={28} />, title: "Story-Driven Episodes", glow: "hsl(var(--neon-cyan) / 0.3)" },
  { icon: <Globe className="text-neon-green" size={28} />, title: "Web3 Economy", glow: "hsl(var(--neon-green) / 0.3)" },
  { icon: <Glasses className="text-neon-purple" size={28} />, title: "VR Learning", glow: "hsl(var(--neon-purple) / 0.3)" },
  { icon: <Trophy className="text-neon-orange" size={28} />, title: "Compete & Earn", glow: "hsl(var(--neon-orange) / 0.3)" },
];

const AboutSection = () => (
  <section id="about" className="py-24 max-w-7xl mx-auto px-6">
    <SectionHeading title="Not Just a Game. A Revolution in Learning." />
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          WENET is an interactive multiplayer Web3 VR game designed for Vietnamese students
          grades 3–12. It combines story-driven gameplay, competitive multiplayer, VR
          immersion, and blockchain rewards to make English learning genuinely exciting.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Developed by ArgonTeq, WENET merges AAA game quality with real educational
          outcomes. Every lesson is an adventure, every achievement is a reward.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 neon-glow-cyan"
      >
        <div className="text-center">
          <div className="text-6xl font-heading font-bold text-primary mb-2">120</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Immersive Episodes</div>
          <div className="h-px bg-white/10 my-4" />
          <div className="text-6xl font-heading font-bold text-neon-green mb-2">7</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Unique Characters</div>
          <div className="h-px bg-white/10 my-4" />
          <div className="text-6xl font-heading font-bold text-neon-orange mb-2">∞</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Adventure Awaits</div>
        </div>
      </motion.div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {highlights.map((h, i) => (
        <GlassCard key={i} glowColor={h.glow} className="group p-6">
          <div className="p-3 rounded-lg bg-white/5 inline-block mb-4">{h.icon}</div>
          <h3 className="text-foreground font-bold text-lg">{h.title}</h3>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default AboutSection;