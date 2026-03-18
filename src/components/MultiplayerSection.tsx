import { motion } from "framer-motion";
import { Swords, Users, Trophy, Shield } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GlassCard } from "./GlassCard";

const modes = [
  { icon: <Swords size={24} />, title: "PvP Battles", desc: "1v1 grammar and vocabulary duels", color: "text-neon-cyan", reward: "50 WNC" },
  { icon: <Users size={24} />, title: "Co-op Missions", desc: "Team up to solve English puzzles", color: "text-neon-green", reward: "30 WNC" },
  { icon: <Trophy size={24} />, title: "Battle Royale", desc: "Last learner standing wins", color: "text-neon-orange", reward: "100 WNC" },
  { icon: <Shield size={24} />, title: "Guild Wars", desc: "Compete as a guild in monthly tournaments", color: "text-neon-purple", reward: "200 WNC" },
];

const leaderboard = [
  { rank: 1, name: "DragonLearner", score: 12450, badge: "🥇" },
  { rank: 2, name: "NeonNinja", score: 11200, badge: "🥈" },
  { rank: 3, name: "VocabKing", score: 10850, badge: "🥉" },
  { rank: 4, name: "GrammarQueen", score: 9700, badge: "" },
  { rank: 5, name: "EnglishPro", score: 8900, badge: "" },
];

const MultiplayerSection = () => (
  <section id="multiplayer" className="py-24 max-w-7xl mx-auto px-6">
    <SectionHeading title="Challenge the World. Prove Your English." />

    <div className="grid sm:grid-cols-2 gap-6 mb-16">
      {modes.map((m, i) => (
        <GlassCard key={i}>
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg bg-white/5 ${m.color}`}>{m.icon}</div>
            <span className="text-xs font-bold uppercase px-3 py-1 bg-neon-orange/10 text-neon-orange rounded-full">
              {m.reward}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{m.title}</h3>
          <p className="text-muted-foreground text-sm">{m.desc}</p>
        </GlassCard>
      ))}
    </div>

    {/* Leaderboard */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-primary mb-4">
        Global Leaderboard
      </h3>
      <div className="space-y-3">
        {leaderboard.map((p) => (
          <div
            key={p.rank}
            className={`flex items-center justify-between p-3 rounded-lg ${
              p.rank <= 3 ? "bg-white/[0.05]" : "bg-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-heading font-bold text-muted-foreground w-8">
                {p.badge || `#${p.rank}`}
              </span>
              <span className="font-bold text-foreground">{p.name}</span>
            </div>
            <span className="text-sm font-bold text-primary">{p.score.toLocaleString()} XP</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default MultiplayerSection;
