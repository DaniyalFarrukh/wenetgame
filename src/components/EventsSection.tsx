import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const events = [
  { emoji: "🎃", name: "Halloween", desc: "Spooky Word Challenges", color: "#ff6b00" },
  { emoji: "🎄", name: "Christmas", desc: "English Quiz Show", color: "#39ff14" },
  { emoji: "🎆", name: "New Year", desc: "Future Writer Tournament", color: "#00f5ff" },
  { emoji: "🌸", name: "Spring", desc: "English Marathon", color: "#ff2d78" },
  { emoji: "☀️", name: "Summer", desc: "DAO-Voted Theme Event", color: "#9b59b6" },
];

const EventsSection = () => (
  <section id="events" className="py-24 max-w-7xl mx-auto px-6">
    <SectionHeading title="Always Something New." />
    <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="min-w-[260px] glass-card p-6 transition-all duration-300"
          style={{ borderColor: `${e.color}20` }}
        >
          <div className="text-5xl mb-4">{e.emoji}</div>
          <h3 className="text-xl font-heading font-bold mb-2" style={{ color: e.color }}>
            {e.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">{e.desc}</p>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full text-foreground">
            Limited NFT Rewards
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EventsSection;
