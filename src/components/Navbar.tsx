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
              src="/logo.png"
              alt="Handover Experts Logo"
              // Scaled down logo for mobile side-by-side fit
              className="h-8 min-[380px]:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            {/* Text hides on extremely small devices (<360px) to prevent overflowing */}
            <div className="hidden min-[360px]:flex flex-col justify-center items-start gap-0.5">
              <span className="text-[9px] min-[380px]:text-[11px] font-black uppercase tracking-widest leading-none text-[#0F2D81]">
                Handover
              </span>
              <span className="text-[9px] min-[380px]:text-[11px] font-black uppercase tracking-widest leading-none text-[#0F2D81]">
                Experts
              </span>
            </div>
          </div>

          {/* Right Side: Socials & CTA Side-By-Side */}
          <div className="relative z-10 flex flex-row items-center gap-2 min-[380px]:gap-3 shrink-0">
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-1.5 min-[380px]:gap-2.5 border-r border-[#0F2D81]/15 pr-2 min-[380px]:pr-3">
              {/* Instagram Icon */}
              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] min-[380px]:w-[18px] min-[380px]:h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] min-[380px]:w-[18px] min-[380px]:h-[18px]">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -.5 -.5h-1a.5 .5 0 0 0 -.5 .5v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 .5 -.5v-1a.5 .5 0 0 0 -.5 -.5h-1a.5 .5 0 0 0 -.5 .5v.5a4 4 0 0 1 -4 -4v-.5z"></path>
                </svg>
              </a>

              {/* Call / Phone Icon */}
              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] min-[380px]:w-[18px] min-[380px]:h-[18px]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>

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
      <div className="hidden sm:flex w-full max-w-7xl mx-auto px-6 md:px-8 items-start justify-between">
        
        {/* Left Card: Brand Identity */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto relative bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-[#0F2D81]/10 border-t-0 rounded-b-[2rem] px-5 py-2.5 overflow-hidden"
        >
          <div
            style={{ backgroundImage: noiseTexture }}
            className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
          />

          <div className="relative z-10 flex items-center justify-center gap-2.5 group cursor-pointer shrink-0">
            <img
              src="/logo.png"
              alt="Handover Experts Logo"
              className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 pt-1"
            />
            <div className="flex flex-col justify-center items-center gap-1.5">
              <span className="text-xl font-black uppercase tracking-widest leading-none text-[#0F2D81]">
                Handover
              </span>
              <span className="text-xl font-black uppercase tracking-widest leading-none text-[#0F2D81]">
                Experts
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Call to Action & Socials */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto relative bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-[#0F2D81]/10 border-t-0 rounded-b-[2rem] px-5 py-3 overflow-hidden flex items-center justify-center"
        >
          <div
            style={{ backgroundImage: noiseTexture }}
            className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
          />

          <div className="relative z-10 flex flex-row items-center gap-5">
            
            <div className="flex items-center gap-4 border-r border-[#0F2D81]/15 pr-5 pt-0">
              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -.5 -.5h-1a.5 .5 0 0 0 -.5 .5v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 .5 -.5v-1a.5 .5 0 0 0 -.5 -.5h-1a.5 .5 0 0 0 -.5 .5v.5a4 4 0 0 1 -4 -4v-.5z"></path>
                </svg>
              </a>

              <a href="#" className="text-[#0F2D81] hover:text-[#EEBD08] transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>

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