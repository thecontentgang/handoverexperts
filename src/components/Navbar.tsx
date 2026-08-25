import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import { useState, useEffect } from "react";

// High-fidelity fractal noise texture for a tactile matte finish
const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect when the user scrolls past 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center select-none">
        
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.12)] border border-navy/10 overflow-hidden flex flex-row items-center justify-between transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? "w-[95%] max-w-[500px] sm:max-w-[600px] rounded-full mt-2 sm:mt-4 px-4 sm:px-6 py-2" // Scrolled State: Compact Floating Pill
                : "w-full max-w-7xl rounded-b-[1.5rem] sm:rounded-b-[2rem] border-t-0 px-4 sm:px-8 py-3 sm:py-5" // Top State: Wide Standard Navbar
            }
          `}
        >
          {/* Uniform Noise Scrim */}
          <div
            style={{ backgroundImage: noiseTexture }}
            className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
          />

          {/* Left Side: Brand Identity */}
          <div className="relative z-10 flex items-center group cursor-pointer shrink-0">
            <img
              src="/handover-expert-logo.png"
              alt="Handover Expert Logo"
              className={`w-auto object-contain transition-all duration-500 ease-in-out group-hover:scale-105 ${
                isScrolled ? "h-8 sm:h-10" : "h-10 sm:h-16"
              }`}
            />
          </div>

          {/* Right Side: CTA */}
          <div className="relative z-10 flex flex-row items-center shrink-0">
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
              className={`bg-yellow text-navy font-black tracking-widest uppercase rounded-lg shadow-sm transition-all duration-500 ease-in-out antialiased whitespace-nowrap text-center
                ${
                  isScrolled
                    ? "text-[10px] sm:text-xs px-4 py-2.5 sm:px-5 sm:py-3" // Smaller button for floating pill
                    : "text-[10px] sm:text-base px-4 py-2.5 sm:px-8 sm:py-4" // Larger button for wide navbar
                }
              `}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </header>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}