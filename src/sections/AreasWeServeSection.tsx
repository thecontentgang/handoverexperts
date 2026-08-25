import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight, HelpCircle } from "lucide-react";
import BookingModal from "../components/BookingModal";

// --- Comprehensive Locations List ---
const locations = [
  "Gachibowli",
  "Financial District",
  "Kokapet",
  "Narsingi",
  "Kondapur",
  "Manikonda",
  "Miyapur",
  "Bachupally",
  "Kukatpally",
  "Tellapur",
  "Nanakramguda",
  "Puppalaguda",
  "Uppal",
  "Nagole",
  "LB Nagar",
  "Kompally",
  "Secunderabad"
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function AreasWeServeSection() {
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
        id="areas-we-serve"
        ref={ref}
        className="py-24 relative font-sans overflow-hidden bg-white text-navy"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

        {/* SEO Crawler Content */}
        <div className="sr-only">
          <h2>Home Inspection Services Across Hyderabad</h2>
          <p>Whether your home is in a high-rise apartment, gated community, villa project or independent property, our team can inspect it for you. We serve homeowners across Hyderabad, including Gachibowli, Financial District, Kokapet, Narsingi, Kondapur, Manikonda, Miyapur, Bachupally, Kukatpally, Tellapur, Nanakramguda, Puppalaguda, Uppal, Nagole, LB Nagar, Kompally, Secunderabad and surrounding areas.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          
          {/* --- Section Header --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.div
              variants={cardVariants}
              className="inline-flex items-center gap-2 bg-navy/5 border border-navy/10 px-4 py-1.5 rounded-full shadow-xs"
            >
              <MapPin size={16} className="text-navy" />
              <span className="text-xs font-bold tracking-wider uppercase text-navy">
                Hyderabad Coverage
              </span>
            </motion.div>

            <motion.h2
              variants={cardVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-navy"
            >
              Home Inspection Services <br className="hidden sm:block" />
              <span className="relative inline-block mt-1 sm:mt-0 whitespace-nowrap">
                <span className="relative z-10 text-navy">Across Hyderabad</span>
                {/* Hand-drawn SVG underline in yellow */}
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
            
            <motion.p
              variants={cardVariants}
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium text-zinc-600"
            >
              Whether your home is in a high-rise apartment, gated community, villa project or independent property, our team can inspect it for you. We serve homeowners across Hyderabad, including:
            </motion.p>
          </motion.div>

          {/* --- Locations Grid Badges --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto mb-16"
          >
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 text-navy p-3 sm:p-4 rounded-2xl flex items-center gap-2.5 shadow-md transition-all duration-200"
              >
                <div className="bg-yellow/20 border border-yellow/40 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-navy" />
                </div>
                <span className="font-bold text-xs sm:text-sm tracking-tight truncate">
                  {loc}
                </span>
              </motion.div>
            ))}

            {/* Surrounding Areas Badge */}
            <motion.div
              variants={cardVariants}
              className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1 bg-navy/5 border border-dashed border-navy/20 text-navy p-3 sm:p-4 rounded-2xl flex items-center justify-center text-center shadow-xs"
            >
              <span className="font-bold text-xs sm:text-sm tracking-tight text-zinc-600">
                + Surrounding Areas
              </span>
            </motion.div>
          </motion.div>

          {/* --- "Check Availability" Interactive CTA Banner --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={cardVariants}
              className="bg-navy rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center"
            >
              {/* Radial Accent Glow */}
              <div className="absolute inset-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#EEBD08_0%,transparent_60%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center max-w-2xl space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <HelpCircle size={24} className="text-yellow" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Not sure if we cover your location?
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base font-normal leading-relaxed">
                  Tell us where your home is. We'll check availability and confirm your inspection slot for you.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 bg-yellow text-navy px-8 py-4 rounded-xl font-black text-sm sm:text-base uppercase tracking-widest flex items-center gap-3 transition-all shadow-lg"
                >
                  Check Availability
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}