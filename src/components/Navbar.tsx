// Filename: Navbar.tsx
import { motion } from "framer-motion";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// High-fidelity fractal noise texture for a tactile matte finish
const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      // Replaced solid white with glassy blur and a soft blue shadow
      className="fixed top-0 left-0 right-0 z-50 select-none border-b border-[#0F2D81]/10 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,45,129,0.15)]"
    >
      {/* Main Navbar Element */}
      <nav className="relative py-2">
        {/* Uniform Noise Scrim for a premium matte finish over the glass */}
        <div
          style={{ backgroundImage: noiseTexture }}
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between relative z-10">
          
          {/* Brand Identity Group */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer shrink-0">
            <img
              src="/logo.png"
              alt="Handover Experts Logo"
              // Slightly smaller on mobile to ensure it fits alongside the text and button
              className="h-20 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Always visible text */}
            <div className="flex flex-col justify-center leading-[0.8] sm:leading-[0.6]">
              {/* Both lines now share the exact same text size and weight */}
              <span className="text-[15px] sm:text-xl font-black uppercase tracking-wide text-[#0F2D81]">
                Handover
              </span>

              <span className="text-[15px] sm:text-xl font-black uppercase tracking-wide text-[#0F2D81]">
                Experts
              </span>
            </div>
          </div>

          {/* Right Action Frame: Yellow Book Now Button */}
          <div className="flex items-center shrink-0">
            <motion.button
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 4px 14px rgba(238, 189, 8, 0.25)",
                  "0 6px 22px rgba(238, 189, 8, 0.45)",
                  "0 4px 14px rgba(238, 189, 8, 0.25)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              whileHover={{ backgroundColor: "#D1A507" }} // Slightly darker yellow on hover
              whileTap={{ scale: 0.97 }}
              style={{ backgroundColor: colors.yellow, color: colors.navy }}
              className="text-[10px] sm:text-sm font-black tracking-widest uppercase px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl transition-colors duration-200 antialiased"
            >
              Book Now
            </motion.button>
          </div>

        </div>
      </nav>
    </motion.header>
  );
}