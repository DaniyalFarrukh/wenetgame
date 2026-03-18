import { Users, Gamepad2, Wallet, MessageSquare, Puzzle, BookOpen, Swords, Glasses, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GlassCard } from "./GlassCard";

const steps = [
  {
    step: "01",
    title: "Choose Your Character",
    desc: "Pick from 7 unique characters and customize with NFT outfits and accessories.",
    icon: <Users className="text-neon-green" size={24} />,
    glow: "hsl(var(--neon-green) / 0.3)",
  },
  {
    step: "02",
    title: "Play Episodes",
    desc: "Complete 120 story-driven episodes. Conversations with NPCs, mini games, and comprehension challenges.",
    icon: <Gamepad2 className="text-neon-cyan" size={24} />,
    glow: "hsl(var(--neon-cyan) / 0.3)",
  },
  {
    step: "03",
    title: "Earn & Own",
    desc: "Win WNC tokens and NFT rewards for completing challenges, climbing leaderboards, and winning tournaments.",
    icon: <Wallet className="text-neon-orange" size={24} />,
    glow: "hsl(var(--neon-orange) / 0.3)",
  },
];

const features = [
  { icon: <MessageSquare size={20} />, title: "Conversation Mode", color: "text-neon-cyan" },
  { icon: <Puzzle size={20} />, title: "Mini Games", color: "text-neon-green" },
  { icon: <BookOpen size={20} />, title: "Comprehension", color: "text-neon-purple" },
  { icon: <Swords size={20} />, title: "Multiplayer Battles", color: "text-neon-pink" },
  { icon: <Glasses size={20} />, title: "VR Mode", color: "text-neon-orange" },
  { icon: <Calendar size={20} />, title: "Seasonal Events", color: "text-primary" },
];

const GameplaySection = () => (
  <section id="gameplay" className="py-24 max-w-7xl mx-auto px-6">
    <SectionHeading title="How WENET Works" />

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {steps.map((item, i) => (
        <GlassCard key={i} glowColor={item.glow}>
          <div className="mb-6 flex justify-between items-start">
            <div className="p-3 rounded-lg bg-white/5">{item.icon}</div>
            <span className="text-4xl font-heading font-bold opacity-20 text-foreground">{item.step}</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
        </GlassCard>
      ))}
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((f, i) => (
        <GlassCard key={i} className="flex items-center gap-3 p-4">
          <span className={f.color}>{f.icon}</span>
          <span className="text-sm font-bold text-foreground uppercase tracking-wider">{f.title}</span>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default GameplaySection;
