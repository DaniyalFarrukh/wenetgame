import { motion } from "framer-motion";
import {NeonButton}from "./NeonButton";
import charJames from "@/assets/char-james.png";
import char7 from "@/assets/char-7.png";

const DownloadSection = () => (
  <section id="download" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex items-center justify-center gap-8 lg:gap-16">
        {/* Left character */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block w-48"
        >
          <img
            src={charJames}
            alt="James"
            className="w-full rounded-2xl shadow-[0_0_40px_hsl(var(--neon-green)/0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl"
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold uppercase mb-6 text-foreground">
            Your English Adventure
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon-green">
              Starts Now.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Available on Windows, Mac and VR
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NeonButton>Windows</NeonButton>
            <NeonButton>Mac</NeonButton>
            <NeonButton variant="outline">VR</NeonButton>
          </div>
        </motion.div>

        {/* Right character */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block w-48"
        >
          <img
            src={char7}
            alt="Character 7"
            className="w-full rounded-2xl shadow-[0_0_40px_hsl(var(--neon-cyan)/0.2)]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default DownloadSection;
