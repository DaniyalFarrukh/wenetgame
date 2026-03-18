import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const scenarios = [
  { emoji: "🍽️", title: "Virtual Café", desc: "Order food in English" },
  { emoji: "✈️", title: "Airport & Travel", desc: "Navigate real-world situations" },
  { emoji: "💼", title: "Job Interview", desc: "Practice formal English" },
  { emoji: "🎤", title: "Debate Arena", desc: "Public speaking competitions" },
];

const VRSection = () => (
  <section id="vr" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
          Next-Gen Immersion
        </div>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold uppercase mb-6 text-foreground">
          Step Inside
          <br />
          the Lesson.
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Experience English like never before. Navigate virtual cities, conduct job
          interviews, and debate in arenas using voice-activated AI and gesture controls.
        </p>
        <ul className="space-y-4 mb-8">
          {["Voice-Activated Lessons", "AI-Powered NPCs", "Gesture-Based Interaction"].map(
            (item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-foreground">
                <div className="w-2 h-2 bg-primary rotate-45" /> {item}
              </li>
            )
          )}
        </ul>
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 text-xs font-bold uppercase tracking-widest text-muted-foreground border border-white/[0.08]">
          🥽 VR Headset Compatible
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {scenarios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ borderColor: "hsl(var(--neon-cyan) / 0.5)" }}
            className="aspect-square glass-card flex flex-col items-center justify-center p-6 text-center group transition-all duration-300"
          >
            <span className="text-4xl mb-3">{s.emoji}</span>
            <span className="text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
              {s.title}
            </span>
            <span className="text-xs text-muted-foreground mt-1">{s.desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VRSection;
