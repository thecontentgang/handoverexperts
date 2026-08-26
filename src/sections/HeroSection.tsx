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
        // Changed to min-h-[100dvh] and added vertical padding to prevent crowding
        className="min-h-[100dvh] py-18 md:py-14 bg-white text-navy relative overflow-hidden flex flex-col justify-center items-center px-4"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.1),transparent_60%)] pointer-events-none" />

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
          className="w-full max-w-5xl lg:max-w-6xl grid grid-cols-2 place-items-center gap-y-4 gap-x-2 sm:flex sm:flex-row sm:justify-center sm:items-end sm:gap-6 md:gap-10 mb-10 md:mb-16 z-10 px-4 sm:px-0"
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
          className="w-full max-w-6xl mx-auto text-center space-y-4 md:space-y-6 relative z-20 flex flex-col items-center"
        >
          {/* Location Badge */}
          <motion.div
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 px-4 py-1.5 md:px-5 md:py-1 rounded-full backdrop-blur-md shadow-xs"
          >
            <MapPin size={16} style={{ color: customColors.yellowGold }} />
            <h1 className="text-xs md:text-sm font-bold tracking-wider text-zinc-600 uppercase">
              Home Inspection services in Hyderabad
            </h1>
          </motion.div>

          {/* Headline Stack */}
          <div className="space-y-4 md:space-y-2 w-full">
            <motion.h2
  variants={fadeInUpVariants}
  className="text-4xl sm:text-5xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.1] text-navy"
>
  Find Hidden House Defects
  <br className="hidden sm:block" />
  Before You{" "}
  <span className="relative inline-block mt-1 sm:mt-0 whitespace-nowrap">
    <span className="relative z-10 text-navy">Take Handover.</span>
    
    {/* Hand-drawn SVG underline */}
    <svg
      className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-5 text-yellow z-0"
      viewBox="0 0 200 20"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 14C60 6 140 6 195 14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  </span>
</motion.h2>

            {/* Description Updated Based on New Copy */}
            <motion.p
              variants={fadeInUpVariants}
              className="text-sm sm:text-base md:text-xl lg:text-xl text-zinc-600 max-w-2xl lg:max-w-4xl mx-auto font-normal leading-relaxed px-2"
            >
             Our engineers inspect your home across 400+ checkpoints, identify defects, document them and give you a detailed inspection report.so you know what needs to be fixed before it becomes your problem.
            </motion.p>
          </div>

          {/* --- Trust Badges Moved Above Buttons --- */}
          <motion.div
  variants={fadeInUpVariants}
  className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2 sm:mt-4 mb-2 z-20 px-2"
>
  {/* Google Reviews Badge */}
  <div className="flex items-center gap-2 sm:gap-3 bg-white border border-navy/10 shadow-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
    {/* Official Google G Logo SVG */}
    <div className="flex items-center justify-center shrink-0">
      <svg viewBox="0 0 24 24" width="14" height="14" className="sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    </div>

    <div className="flex flex-col items-start">
      <div className="flex gap-[1px]">
        {/* Inline Yellow Stars SVG */}
        {[...Array(5)].map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" width="10" height="10" className="sm:w-3 sm:h-3" stroke="#EEBD08" strokeWidth="2" fill="#EEBD08" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-navy tracking-wide leading-none mt-1">
        1.4k+ Reviews on Google
      </span>
    </div>
  </div>

  {/* Social Media Followers Badge */}
  <div className="flex items-center gap-2 sm:gap-2.5 bg-white border border-navy/10 shadow-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
    <div className="flex items-center gap-1.5 shrink-0">
      
      {/* Instagram SVG */}
      <svg viewBox="0 0 24 24" width="14" height="14" className="sm:w-4 sm:h-4" stroke="#EC4899" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>

      {/* YouTube SVG */}
      <svg viewBox="0 0 24 24" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>

    </div>
    <span className="text-[10px] sm:text-xs font-bold text-navy tracking-wide">
      90k+ Followers combined
    </span>
  </div>
</motion.div>

          {/* Synchronized Call To Actions */}
          <motion.div
            variants={fadeInUpVariants}
            className="flex flex-row gap-2 sm:gap-4 justify-center items-stretch w-full pt-2"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="flex-1 sm:flex-none h-full bg-yellow text-navy font-black px-1 sm:px-8 py-3.5 sm:py-4 md:px-10 md:py-5 rounded-xl text-[11px] sm:text-base lg:text-lg tracking-widest uppercase flex items-center justify-center shadow-md transition-all text-center leading-tight"
            >
              Book My Inspection
            </motion.button>

            {/* Transparent Button with Navy Border */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(15, 45, 129, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (window.innerWidth < 640) {
                  window.location.href = "tel:+916303363041";
                }
              }}
              className="flex-1 sm:flex-none h-full bg-transparent border-2 border-navy text-navy font-black px-1 sm:px-8 py-3.5 sm:py-4 md:px-10 md:py-5 rounded-xl text-[11px] sm:text-base lg:text-lg tracking-widest uppercase flex items-center justify-center transition-all text-center leading-tight"
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