// Filename: HeroSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { MapPin, Target } from "lucide-react";

const customColors = {
  deepNavy: "#0F2D81",
  yellowGold: "#EEBD08",
};

// Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      style={{ backgroundColor: customColors.deepNavy }}
      className="min-h-screen text-white pt-28 sm:pt-30 pb-10 relative overflow-hidden flex flex-col justify-start items-center"
    >
      {/* Structural Minimal Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.07),transparent_60%)] pointer-events-none" />

      {/* 
        Defects Illustrations Cloud (Arc shape preserved on all viewports)
        - Uses percentage widths (w-[22%]) to prevent horizontal row breaking/wrapping on mobile
        - Responsive translation values scale the arch depth seamlessly
      */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-3xl flex flex-row justify-center items-end gap-2 sm:gap-6 md:gap-10 px-4 mb-16 z-10"
      >
        {/* 1. Leak Card - Outer Left (Lower position to start the arc) */}
        <motion.img
          src="/water-leaks.png"
          alt="Water Leakage"
          animate={{ y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[22%] max-w-[150px] min-w-[65px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-5 sm:translate-y-8 md:translate-y-10"
        />

        {/* 2. Electrical Card - Inner Left (Raised up to form the arc peak) */}
        <motion.img
          src="/electrical.png"
          alt="Electrical Issues"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[22%] max-w-[150px] min-w-[65px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-0"
        />

        {/* 3. Finishing Card - Inner Right (Raised up at peak level) */}
        <motion.img
          src="/finishing.png"
          alt="Poor Finishing"
          animate={{ y: [0, -8, 0], rotate: [1.5, -1.5, 1.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[22%] max-w-[150px] min-w-[65px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-0"
        />

        {/* 4. Cracks Card - Outer Right (Lower position to complete the arc) */}
        <motion.img
          src="/cracks.png"
          alt="Wall Cracks"
          animate={{ y: [0, -7, 0], rotate: [-2, 1, -2] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[22%] max-w-[150px] min-w-[65px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-5 sm:translate-y-8 md:translate-y-10"
        />
      </motion.div>

      {/* Main Narrative / Headline Elements */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-20 flex flex-col items-center -mt-6 sm:-mt-10 md:-mt-12"
      >
        {/* Simple Location Badge */}
        <motion.div
          variants={fadeInUpVariants}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-xs"
        >
          <MapPin size={14} style={{ color: customColors.yellowGold }} />
          <span className="text-xs font-bold tracking-wider text-zinc-300 uppercase">
            Best Home Inspection in Hyderabad
          </span>
        </motion.div>

        {/* Headline Stack */}
        <div className="space-y-4 max-w-3xl">
          <motion.h1
            variants={fadeInUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white"
          >
            Find Hidden House Defects
            <br />
            Before You{" "}
            <span style={{ color: customColors.yellowGold }} className="inline-block mt-1 sm:mt-0">
              Take Handover.
            </span>
          </motion.h1>

          {/* Simple Description */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            We inspect your new Apartment or Villa for water leakage, faulty wiring, cracks, and bad finishing. Get a clear digital report within 24 hours.
          </motion.p>
        </div>

        {/* Synchronized Call To Actions */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md pt-4"
        >
          <motion.button
            whileHover={{ y: -2, boxShadow: "0 15px 30px -10px rgba(238,189,8,0.35)" }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
            className="w-full sm:w-auto font-extrabold px-8 py-4 rounded-xl text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 shadow-md transition-all"
          >
            <Target size={16} strokeWidth={2.5} />
            Book My Inspection
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: customColors.yellowGold }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
          >
            See Sample Report
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}