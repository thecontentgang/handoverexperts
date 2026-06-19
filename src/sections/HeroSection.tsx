import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import BookingModal from "../components/BookingModal";

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

  const [isModal, setIsModalOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div
        ref={ref}
        style={{ backgroundColor: customColors.deepNavy }}
        // Changed to h-[100dvh] and flex-col justify-center to lock it to viewport height
        className="h-[100dvh] text-white relative overflow-hidden flex flex-col justify-center items-center px-4"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.07),transparent_60%)] pointer-events-none" />

        {/* Defects Illustrations Cloud 
        - Increased max-widths for larger desktop displays
        - Added fetchPriority for faster Above-The-Fold loading
      */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-5xl lg:max-w-6xl flex flex-row justify-center items-end gap-2 sm:gap-6 md:gap-10 mb-8 md:mb-12 lg:mb-16 z-10"
        >
          {/* 1. Leak Card */}
          <motion.img
            src="/water-leaks.png"
            alt="Water Leakage"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[22%] min-w-[65px] max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-5 sm:translate-y-8 md:translate-y-12 lg:translate-y-16"
          />

          {/* 2. Electrical Card */}
          <motion.img
            src="/electrical.png"
            alt="Electrical Issues"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[22%] min-w-[65px] max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-0"
          />

          {/* 3. Finishing Card */}
          <motion.img
            src="/finishing.png"
            alt="Poor Finishing"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -8, 0], rotate: [1.5, -1.5, 1.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[22%] min-w-[65px] max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-0"
          />

          {/* 4. Cracks Card */}
          <motion.img
            src="/cracks.png"
            alt="Wall Cracks"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -7, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[22%] min-w-[65px] max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-5 sm:translate-y-8 md:translate-y-12 lg:translate-y-16"
          />
        </motion.div>

        {/* Main Narrative / Headline Elements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-6xl mx-auto text-center space-y-2 md:space-y-2 relative z-20 flex flex-col items-center"
        >
          {/* Location Badge */}
          <motion.div
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 md:px-5 md:py-1 rounded-full backdrop-blur-md shadow-xs"
          >
            <MapPin size={16} style={{ color: customColors.yellowGold }} />
            <span className="text-xs md:text-sm font-bold tracking-wider text-zinc-300 uppercase">
              Best Home Inspection in Hyderabad
            </span>
          </motion.div>

          {/* Headline Stack */}
          <div className="space-y-4 md:space-y-2 w-full">
            <motion.h1
              variants={fadeInUpVariants}
              // Significantly increased desktop typography size
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.1] text-white"
            >
              Find Hidden House Defects
              <br className="hidden sm:block" />
              Before You{" "}
              <span style={{ color: customColors.yellowGold }} className="inline-block mt-1 sm:mt-0">
                Take Handover.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUpVariants}
              // Scaled text up for desktop readability
              className="text-sm sm:text-base md:text-xl lg:text-xl text-zinc-300 max-w-2xl lg:max-w-4xl mx-auto font-normal leading-relaxed px-2"
            >
              We inspect your new Apartment or Villa for water leakage, faulty wiring, cracks, and bad finishing. Get a clear digital report within 24 hours.
            </motion.p>
          </div>

          {/* Synchronized Call To Actions */}
          <motion.div
            variants={fadeInUpVariants}
            // Forced flex-row on mobile and slightly reduced gap to save space
            className="flex flex-row gap-2 sm:gap-4 justify-center items-center w-full pt-4 md:pt-6"
          >
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 15px 30px -10px rgba(238,189,8,0.35)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
              // Replaced w-full with flex-1 for 50/50 split on mobile. Scaled down mobile text/padding.
              className="flex-1 sm:flex-none font-extrabold px-2 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-[10px] sm:text-sm md:text-base tracking-wider uppercase flex items-center justify-center shadow-md transition-all text-center leading-tight"
            >
              Book My Inspection
            </motion.button>

           <motion.button
  whileHover={{
    backgroundColor: "rgba(255,255,255,0.06)",
    borderColor: customColors.yellowGold,
  }}
  whileTap={{ scale: 0.98 }}
  onClick={() => {
    if (window.innerWidth < 640) {
      window.location.href = "tel:+916303363041";
    }
  }}
  className="flex-1 sm:flex-none bg-transparent border border-white/20 text-white font-bold px-2 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-[10px] sm:text-sm md:text-base tracking-wider uppercase transition-all flex items-center justify-center backdrop-blur-xs text-center leading-tight"
>
  <span className="sm:hidden">
    Talk to Expert
  </span>

  <span className="hidden sm:inline">
    +91 63033 63041
  </span>
</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <BookingModal isOpen={isModal} onClose={() => setIsModalOpen(false)} />
    </>
  );
}