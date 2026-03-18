import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Episodes", val: 120 },
  { label: "Learning Levels", val: 3 },
  { label: "Characters", val: 7 },
  { label: "Grades", val: "3–12", isText: true },
  { label: "Web3 Powered", val: "✓", isText: true },
];

const AnimatedNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            start = Math.floor(progress * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
};

const StatsBar = () => (
  <section className="py-14 border-y border-white/[0.06] bg-gradient-to-r from-white/[0.01] via-white/[0.03] to-white/[0.01] relative">
    <div className="absolute inset-0 bg-gradient-to-b from-sky-500/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8 relative z-10">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center flex-1 min-w-[120px]"
        >
          <span className="text-4xl font-heading font-bold text-sky-400 text-glow-cyan">
            {stat.isText ? stat.val : <AnimatedNumber target={stat.val as number} />}
          </span>
          <span className="text-xs uppercase tracking-widest text-white/50 mt-2">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsBar;
