import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Characters", href: "#characters" },
  { label: "Gameplay", href: "#gameplay" },
  { label: "Episodes", href: "#episodes" },
  { label: "Token", href: "#token" },
  { label: "Events", href: "#events" },
];

const linkStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
};

const mobileLinkItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
          }`}
      >
        {/* Subtle scanline texture overlay when scrolled */}
        {scrolled && (
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
          {/* ── LEFT: Logo ── */}
          <a href="#" className="flex items-center gap-2 group">
            {/* Glowing cyan diamond */}
            <span className="w-2 h-2 bg-sky-400 rotate-45 shadow-[0_0_8px_rgba(56,189,248,0.6)] group-hover:shadow-[0_0_14px_rgba(56,189,248,0.9)] transition-shadow duration-300" />

            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-white font-black text-2xl tracking-tight">
                  WE
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400"
                    style={{
                      animation: "gradient-shift 4s ease-in-out infinite alternate",
                    }}
                  >
                    NET
                  </span>
                </span>
                {/* BETA badge */}
                <span className="text-[8px] font-bold tracking-[0.15em] uppercase text-sky-400 border border-sky-400/40 px-1.5 py-[1px] rounded leading-tight">
                  BETA
                </span>
              </div>
              <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-medium">
                WORLDS
              </span>
            </div>
          </a>

          {/* ── CENTER: Nav links ── */}
          <motion.div
            variants={linkStagger}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          >
            {links.map(({ label, href }) => (
              <motion.a
                key={href}
                href={href}
                variants={linkItem}
                className="nav-link-hover text-white/50 hover:text-white text-sm font-medium tracking-wide transition-all duration-200 relative group py-1"
              >
                {label}
                {/* Hover underline */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-sky-400 group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              </motion.a>
            ))}
          </motion.div>

          {/* ── RIGHT: CTA + Hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-lg border border-sky-400 text-sky-400 text-sm font-heading font-bold uppercase tracking-wider transition-all duration-300 hover:bg-sky-400/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
            >
              Play Now
              <ArrowRight size={14} strokeWidth={2.5} />
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[60]"
              aria-label="Toggle menu"
            >
              <span
                className={`hamburger-line ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
              />
              <span
                className={`hamburger-line ${mobileOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`hamburger-line ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Thin cyan accent line at bottom (only when scrolled) */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: "linear-gradient(to right, transparent, #38bdf8, #a78bfa, transparent)",
          }}
        />
      </motion.nav>

      {/* ── MOBILE OVERLAY ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 h-16 items-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Staggered links */}
            <motion.div
              className="flex-1 flex flex-col items-start justify-center px-10 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            >
              {links.map(({ label, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  variants={mobileLinkItem}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-heading font-bold uppercase tracking-wider text-white/70 hover:text-sky-400 transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <div className="px-10 pb-12">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-lg border border-sky-400 text-sky-400 font-heading font-bold uppercase tracking-wider text-lg hover:bg-sky-400/10 transition-all duration-300"
              >
                Play Now
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient shift keyframes (injected once) */}
      <style>{`
        @keyframes gradient-shift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(30deg); }
        }
        .nav-link-hover:hover {
          text-shadow: 0 0 12px rgba(56, 189, 248, 0.4);
        }
      `}</style>
    </>
  );
};

export default Navbar;