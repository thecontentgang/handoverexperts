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
        className="h-[100dvh] text-white relative overflow-hidden flex flex-col justify-center items-center px-4"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.07),transparent_60%)] pointer-events-none" />

        {/* SEO / Crawler Content (Visually hidden but read by Google) */}
        <div className="sr-only">
          <p>
            Buying a home is probably the biggest cheque you'll ever sign — so why take possession on trust alone? Handover Expert delivers home inspection services in Hyderabad built around one simple idea: you deserve to know exactly what you're getting before you get it. Our engineers run a 400+ point home inspection on every flat, apartment, or villa we visit, covering everything from live wiring to hairline wall cracks, and hand you a clear digital report — with photos — within 24 hours.
          </p>
          <p>
            This isn't a generic walkthrough. Every home inspection in Hyderabad we conduct follows the same structured process, whether it's a 2BHK in Kondapur or a luxury villa in Kokapet. If you've searched for home inspection or home inspection services and landed here, here's the short version: we find what builders don't tell you, before it becomes your problem to fix.
          </p>
          <p>
            Handover Expert isn't just another house inspection Hyderabad company running through a checklist. We're the team homebuyers call when they want a second, unbiased opinion before signing off on the single biggest purchase of their life.
          </p>
        </div>

        {/* 
          Defects Illustrations Cloud 
          - Mobile: 2x2 Grid (grid-cols-2)
          - Desktop: Flex row with baseline alignment (sm:flex sm:flex-row)
        */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-5xl lg:max-w-6xl grid grid-cols-2 place-items-center gap-y-4 gap-x-2 sm:flex sm:flex-row sm:justify-center sm:items-end sm:gap-6 md:gap-10 mb-8 md:mb-12 lg:mb-16 z-10 px-4 sm:px-0"
        >
          {/* 1. Leak Card */}
          <motion.img
            src="/water-leaks.png"
            alt="Water Leakage"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[85%] max-w-[130px] sm:w-[22%] sm:min-w-[65px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-2 sm:translate-y-8 md:translate-y-12 lg:translate-y-16"
          />

          {/* 2. Electrical Card */}
          <motion.img
            src="/electrical.png"
            alt="Electrical Issues"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[85%] max-w-[130px] sm:w-[22%] sm:min-w-[65px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain -translate-y-2 sm:translate-y-0"
          />

          {/* 3. Finishing Card */}
          <motion.img
            src="/finishing.png"
            alt="Poor Finishing"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -8, 0], rotate: [1.5, -1.5, 1.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[85%] max-w-[130px] sm:w-[22%] sm:min-w-[65px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain -translate-y-2 sm:translate-y-0"
          />

          {/* 4. Cracks Card */}
          <motion.img
            src="/cracks.png"
            alt="Wall Cracks"
            fetchPriority="high"
            decoding="async"
            animate={{ y: [0, -7, 0], rotate: [-2, 1, -2] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[85%] max-w-[130px] sm:w-[22%] sm:min-w-[65px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[260px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] object-contain translate-y-2 sm:translate-y-8 md:translate-y-12 lg:translate-y-16"
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
            <h1 className="text-xs md:text-sm font-bold tracking-wider text-zinc-300 uppercase">
              Home Inspection services in Hyderabad
            </h1>
          </motion.div>

          {/* Headline Stack */}
          <div className="space-y-4 md:space-y-2 w-full">
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.1] text-white"
            >
              Find Hidden House Defects
              <br className="hidden sm:block" />
              Before You{" "}
              <span style={{ color: customColors.yellowGold }} className="inline-block mt-1 sm:mt-0">
                Take Handover.
              </span>
            </motion.h2>

            {/* Description Updated Based on New Copy */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-sm sm:text-base md:text-xl lg:text-xl text-zinc-300 max-w-2xl lg:max-w-4xl mx-auto font-normal leading-relaxed px-2"
            >
              Don't take possession on trust alone. We run a comprehensive 400+ point inspection uncovering what builders don't tell you and hand you a clear digital report within 24 hours.
            </motion.p>
          </div>

          {/* Synchronized Call To Actions */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-row gap-2 sm:gap-4 justify-center items-center w-full pt-4 md:pt-6"
          >
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 15px 30px -10px rgba(238,189,8,0.35)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
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
                Talk to Expert
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <BookingModal isOpen={isModal} onClose={() => setIsModalOpen(false)} />
    </>
  );
}