import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import { useState } from "react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// High-fidelity fractal noise texture for a tactile matte finish
const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center select-none">
        
        {/* ========================================= */}
        {/* MOBILE VIEW: SINGLE SIDE-BY-SIDE CARD     */}
        {/* ========================================= */}
        <div className="flex sm:hidden w-full px-2 justify-center">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative w-full max-w-[480px] bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-[#0F2D81]/10 border-t-0 rounded-b-[1.25rem] px-3 py-2 overflow-hidden flex flex-row items-center justify-between"
          >
            {/* Uniform Noise Scrim */}
            <div
              style={{ backgroundImage: noiseTexture }}
              className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
            />

            {/* Left Side: Brand Identity */}
            <div className="relative z-10 flex items-center gap-1.5 min-[380px]:gap-2 group cursor-pointer shrink-0">
              <img
                src="/handover-expert-logo.png"
                alt="Handover Expert Logo"
                // Scaled down logo for mobile side-by-side fit
                className="h-8 min-[380px]:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Right Side: Socials & CTA Side-By-Side */}
            <div className="relative z-10 flex flex-row items-center gap-2 min-[380px]:gap-3 shrink-0">
              {/* Book Now Button */}
              <motion.button
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 4px 14px rgba(238, 189, 8, 0.25)",
                    "0 6px 22px rgba(238, 189, 8, 0.45)",
                    "0 4px 14px rgba(238, 189, 8, 0.25)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                whileHover={{ backgroundColor: "#D1A507" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: colors.yellow, color: colors.navy }}
                className="text-[9px] min-[380px]:text-[10px] font-black tracking-widest uppercase px-3 py-2 min-[380px]:px-4 min-[380px]:py-2.5 rounded-lg shadow-sm transition-colors duration-200 antialiased whitespace-nowrap text-center"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP/TABLET VIEW: TWO SPLIT CARDS      */}
        {/* ========================================= */}
        {/* Changed items-start to items-stretch so both children stretch to the exact same equal height */}
        <div className="hidden sm:flex w-full max-w-7xl mx-auto px-6 md:px-8 items-stretch justify-between">
          
          {/* Left Card: Brand Identity */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            // Added flex items-center to center content within the stretched height
            className="pointer-events-auto relative bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-[#0F2D81]/10 border-t-0 rounded-b-[2rem] px-6 py-4 overflow-hidden flex items-center justify-center"
          >
            <div
              style={{ backgroundImage: noiseTexture }}
              className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
            />

            <div className="relative z-10 flex items-center justify-center gap-2.5 group cursor-pointer shrink-0">
              <img
                src="/handover-expert-logo.png"
                alt="Handover Expert Logo"
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Card: Call to Action & Socials */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            // Automatically stretches to match the height of the left card, flex keeps the button centered
            className="pointer-events-auto relative bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-[#0F2D81]/10 border-t-0 rounded-b-[2rem] px-6 py-4 overflow-hidden flex items-center justify-center"
          >
            <div
              style={{ backgroundImage: noiseTexture }}
              className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
            />

            <div className="relative z-10 flex flex-row items-center gap-5">
              <motion.button
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 4px 14px rgba(238, 189, 8, 0.25)",
                    "0 6px 22px rgba(238, 189, 8, 0.45)",
                    "0 4px 14px rgba(238, 189, 8, 0.25)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                whileHover={{ backgroundColor: "#D1A507" }}
                whileTap={{ scale: 0.97 }}
                style={{ backgroundColor: colors.yellow, color: colors.navy }}
                onClick={() => setIsModalOpen(true)}
                className="text-base font-black tracking-widest uppercase px-10 py-4 rounded-xl shadow-sm transition-colors duration-200 antialiased whitespace-nowrap"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>

        </div>
      </header>
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}