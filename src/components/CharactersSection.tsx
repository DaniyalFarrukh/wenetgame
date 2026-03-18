import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import charEmma from "@/assets/char-emma.png";
import charJames from "@/assets/char-james.png";
import charLilly from "@/assets/char-lilly.png";
import char4 from "@/assets/char-4.png";
import char5 from "@/assets/char-5.png";

const characters = [
  { name: "Emma",  role: "Shadow Mage",   img: charEmma,  accent: "#38bdf8", bg: "from-sky-900/80" },
  { name: "James", role: "Cyber Knight",  img: charJames, accent: "#a78bfa", bg: "from-violet-900/80" },
  { name: "Lilly", role: "Neon Archer",   img: charLilly, accent: "#22c55e", bg: "from-emerald-900/80" },
  { name: "Zara",  role: "Flame Warrior", img: char4,     accent: "#f97316", bg: "from-orange-900/80" },
  { name: "Riko",  role: "Storm Caller",  img: char5,     accent: "#e879f9", bg: "from-fuchsia-900/80" },
];

export function CharactersSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="characters" className="py-24 px-6">
      <AnimatedSection>
        <SectionHeading
          title="Choose Your Fighter"
          subtitle="Each character brings unique abilities, playstyles, and a story worth discovering."
        />
      </AnimatedSection>

      {/* Riot-style expanding cards */}
      <AnimatedSection delay={0.1}>
        <div className="flex gap-2 max-w-6xl mx-auto h-[560px]">
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              onClick={() => setActive(i)}
              animate={{ flex: active === i ? 4 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 group"
              style={{ minWidth: 64 }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${char.bg} to-black/60 transition-opacity duration-500`} />

              {/* Dark overlay — lightens on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-[1]" />

              {/* Character art */}
              <img
                src={char.img}
                alt={char.name}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] object-contain object-bottom z-10 select-none transition-transform duration-500 group-hover:scale-105"
                style={{ filter: `drop-shadow(0 0 40px ${char.accent}50)` }}
              />

              {/* Active glow border */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none z-20 transition-all duration-500"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${char.accent}${active === i ? "80" : "20"}`,
                }}
              />

              {/* Bottom glow line on active */}
              {active === i && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] z-30"
                  style={{ background: `linear-gradient(to right, transparent, ${char.accent}, transparent)` }}
                />
              )}

              {/* Name label */}
              <AnimatePresence mode="wait">
                {active === i ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black via-black/60 to-transparent"
                  >
                    <p
                      className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
                      style={{ color: char.accent }}
                    >
                      {char.role}
                    </p>
                    <h3 className="font-heading text-4xl font-black text-white tracking-tight">
                      {char.name}
                    </h3>
                  </motion.div>
                ) : (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-6 left-0 right-0 flex justify-center z-20"
                  >
                    <span
                      className="font-heading text-xs font-black tracking-[0.2em] uppercase [writing-mode:vertical-rl] rotate-180"
                      style={{ color: char.accent }}
                    >
                      {char.name}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Character count indicator */}
      <AnimatedSection delay={0.2} className="flex justify-center gap-2 mt-6">
        {characters.map((char, i) => (
          <button
            key={char.name}
            onClick={() => setActive(i)}
            className="h-[2px] transition-all duration-300 rounded-full"
            style={{
              width: active === i ? 32 : 16,
              background: active === i ? char.accent : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </AnimatedSection>
    </section>
  );
}

export default CharactersSection;