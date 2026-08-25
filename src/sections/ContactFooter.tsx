import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  ArrowRight
} from "lucide-react";
// Adjust the import path based on your folder structure
import BookingModal from "../components/BookingModal";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactFooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <section
        ref={ref}
        style={{ backgroundColor: colors.white }}
        className="pt-24 pb-8 relative font-sans overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

          {/* --- Massive CTA Banner (Reduced Height, Highly Responsive) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl mb-12 sm:mb-16"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                // Placeholder high-quality architecture image. Replace with your own if needed.
                backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')" 
              }}
            />
            {/* Deep Navy Overlay for Text Readability */}
            <div 
              className="absolute inset-0 " 
              style={{ backgroundColor: "rgba(15, 45, 129, 0.9)" }} 
            />

            {/* CTA Content (Tighter padding for shorter height) */}
            <div className="relative z-10 px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center">
              
              <motion.div
                variants={itemVariants}
                style={{ backgroundColor: "rgba(238,189,8,0.2)", borderColor: "rgba(238,189,8,0.3)" }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 border"
              >
                <CalendarDays size={28} style={{ color: colors.yellow }} strokeWidth={2} />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                style={{ color: colors.white }}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mb-4"
              >
                Ready to secure your <br className="hidden sm:block"/>
                <span style={{ color: colors.yellow }}>new home?</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-sm md:text-base text-zinc-300 leading-relaxed font-medium max-w-2xl mx-auto mb-8"
              >
                Don't leave your investment to chance. Schedule a comprehensive 400+ point home inspection today and let our experts uncover what builders won't tell you.
              </motion.p>

              {/* Responsive Button Container */}
              <motion.div variants={itemVariants} className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, filter: "drop-shadow(0 10px 25px rgba(238,189,8,0.4))" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  style={{ backgroundColor: colors.yellow, color: colors.navy }}
                  className="w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-4 rounded-2xl font-black text-sm sm:text-base uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg"
                >
                  Book Inspection Now
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>

              
            </div>
          </motion.div>

          {/* --- Footer Strip --- */}
          <motion.footer
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 px-2"
          >
            {/* Logo */}
            <motion.div variants={itemVariants} className="shrink-0 cursor-pointer">
              <img
                src="/handover-expert-logo.png"
                alt="Handover expert Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>

            {/* Copyright & Built By */}
            <motion.div 
              variants={itemVariants} 
              className="text-xs sm:text-sm text-zinc-500 font-medium tracking-wide flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center md:text-right"
            >
              <span>© {new Date().getFullYear()} Handover Expert. All rights reserved.</span>
              <span className="hidden sm:inline text-zinc-300">|</span>
              <span>
                Built by{" "}
                <a 
                  href="https://thecontentgang.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: colors.navy }}
                  className="font-bold hover:opacity-80 transition-opacity"
                >
                  thecontentgang.com
                </a>
              </span>
            </motion.div>
          </motion.footer>

        </div>
      </section>

      {/* Mount the Booking Modal globally here */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}