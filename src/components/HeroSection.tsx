import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { NeonButton } from "./NeonButton";
import { ChevronDown } from "lucide-react";
import charEmma from "@/assets/char-emma.png";
import charJames from "@/assets/char-james.png";
import charLilly from "@/assets/char-lilly.png";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const characters = [
  {
    name: "Emma",
    role: "Shadow Mage",
    img: charEmma,
    color: "#38bdf8",
    frameClass: "holographic-frame-cyan",
    // Top of the triangle — center position, pushed forward in Z
    position: "top" as const,
  },
  {
    name: "James",
    role: "Cyber Knight",
    img: charJames,
    color: "#a78bfa",
    frameClass: "holographic-frame-violet",
    // Bottom-left of the triangle
    position: "bottom-left" as const,
  },
  {
    name: "Lilly",
    role: "Neon Archer",
    img: charLilly,
    color: "#22c55e",
    frameClass: "holographic-frame-green",
    // Bottom-right of the triangle
    position: "bottom-right" as const,
  },
];

// 3D position offsets for triangle formation
const positionStyles: Record<string, { x: number; y: number; z: number; rotate: number }> = {
  top:          { x: 0,    y: -40,  z: 80,  rotate: 0 },
  "bottom-left":  { x: -160, y: 60,  z: -30, rotate: -6 },
  "bottom-right": { x: 160,  y: 60,  z: -30, rotate: 6 },
};

// Staggered bob offsets for each card
const bobVariants: Record<string, { duration: number; delay: number; yAmount: number }> = {
  top:           { duration: 3.2, delay: 0,   yAmount: -12 },
  "bottom-left": { duration: 3.6, delay: 0.4, yAmount: -10 },
  "bottom-right": { duration: 3.8, delay: 0.8, yAmount: -14 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 via-transparent to-black z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-cyan-950/20 z-[1]" />
        {/* Radial spotlight behind characters */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sky-500/[0.06] rounded-full blur-[120px] z-[1]" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-6 pt-20 pb-8 w-full max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.span
          variants={item}
          className="inline-block text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-6 border border-sky-400/30 px-4 py-1.5 rounded-full"
        >
          Next-Gen Multiplayer • Web3 • VR
        </motion.span>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-4 tracking-tight"
        >
          WE
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
            NET
          </span>
          {" "}WORLDS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-white/50 font-medium tracking-wide mb-8 max-w-lg"
        >
          Master English. Conquer the World.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex gap-4 flex-wrap justify-center mb-12">
          <NeonButton variant="primary">Play Now</NeonButton>
          <NeonButton variant="secondary">Watch Trailer</NeonButton>
        </motion.div>

        {/* 3D Triangle Character Showcase */}
        <motion.div
          variants={item}
          className="w-full flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full max-w-[600px]"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(12deg)",
              height: "380px",
            }}
          >
            {characters.map((char) => {
              const pos = positionStyles[char.position];
              const bob = bobVariants[char.position];

              return (
                <motion.div
                  key={char.name}
                  initial={{ opacity: 0, y: 80, z: -100 }}
                  animate={{
                    opacity: 1,
                    x: pos.x,
                    y: pos.y,
                    z: pos.z,
                    rotateY: pos.rotate,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: bob.delay + 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 flex flex-col items-center"
                  style={{
                    transformStyle: "preserve-3d",
                    marginLeft: "-80px",
                    marginTop: "-140px",
                  }}
                >
                  {/* Floating bob animation wrapper */}
                  <motion.div
                    animate={{
                      y: [0, bob.yAmount, 0],
                    }}
                    transition={{
                      duration: bob.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bob.delay,
                    }}
                    className="flex flex-col items-center"
                    style={{ perspective: "800px" }}
                  >
                    {/* 3D Flip animation wrapper */}
                    <motion.div
                      animate={{
                        rotateY: [0, 180, 360],
                      }}
                      transition={{
                        duration: 6 + bob.delay * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2 + bob.delay,
                        times: [0, 0.5, 1],
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="flex flex-col items-center"
                    >
                    {/* Holographic frame */}
                    <div
                      className={`holographic-frame ${char.frameClass} p-1 animate-glow-pulse-border`}
                    >
                      <div className="relative bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl overflow-hidden">
                        <img
                          src={char.img}
                          alt={char.name}
                          className="w-32 sm:w-36 md:w-40 h-auto object-contain select-none"
                          style={{
                            filter: `drop-shadow(0 0 30px ${char.color}40)`,
                          }}
                        />
                        {/* Inner bottom glow */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                          style={{
                            background: `linear-gradient(to top, ${char.color}15, transparent)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Character name */}
                    <div className="mt-3 text-center">
                      <p
                        className="font-heading text-sm md:text-base font-bold uppercase tracking-wider"
                        style={{ color: char.color }}
                      >
                        {char.name}
                      </p>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
                        {char.role}
                      </p>
                    </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Triangle edge lines connecting the cards */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ transform: "translateZ(-1px)" }}
              viewBox="0 0 600 380"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="tri-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="tri-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="tri-grad-3" x1="0%" y1="100%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {/* Triangle edges: top-center → bottom-left, top-center → bottom-right, bottom-left → bottom-right */}
              <motion.line
                x1="300" y1="80" x2="140" y2="280"
                stroke="url(#tri-grad-1)" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
              />
              <motion.line
                x1="300" y1="80" x2="460" y2="280"
                stroke="url(#tri-grad-2)" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2.0 }}
              />
              <motion.line
                x1="140" y1="280" x2="460" y2="280"
                stroke="url(#tri-grad-3)" strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2.2 }}
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.25em] font-bold">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/40 animate-bounce-arrow" />
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}

export default HeroSection;