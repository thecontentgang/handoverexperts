import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Grid,
  Zap,
  Wrench,
  Droplets,
  Bath,
  Maximize,
  Droplet,
  Wind,
  Lock,
  DoorOpen,
  Square,
  Sun,
  Snowflake,
  Layout,
  Umbrella,
  CloudRain,
  CheckCircle,
  PhoneCall
} from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Comprehensive Inspection Content Data ---
const coverageData = [
  {
    id: 1,
    title: "Flooring Check",
    description: "Check for slope, hollowness, cracks, and finishing of all floor types.",
    icon: Grid,
  },
  {
    id: 2,
    title: "Electrical Check",
    description: "Testing of wiring, DB panels, switches, and sockets for absolute safety.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Plumbing Check",
    description: "Inspection of all pipes and fittings to ensure zero blockages or leaks.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Seepage Check",
    description: "Advanced thermal scanning to identify hidden water retention within walls.",
    icon: Droplets,
  },
  {
    id: 15,
    title: "Water Proofing Check",
    description: "Verifying waterproof coatings in wet areas like bathrooms and kitchens.",
    icon: Umbrella,
  },
  {
    id: 16,
    title: "Dampness Check",
    description: "Detecting localized damp patches that could lead to mold and damage.",
    icon: CloudRain,
  },
  {
    id: 5,
    title: "Sanitary Check",
    description: "Checking bathroom fittings, WCs, and basins for proper installation.",
    icon: Bath,
  },
  {
    id: 6,
    title: "Area Check",
    description: "Accurate carpet area measurements to ensure you get what you paid for.",
    icon: Maximize,
  },
  {
    id: 7, 
    title: "Water Check",
    description: "Testing water flow pressure and supply lines for everyday reliability.",
    icon: Droplet,
  },
  {
    id: 8,
    title: "Air Check",
    description: "Evaluating cross-ventilation and exhaust functionality across the home.",
    icon: Wind,
  },
  {
    id: 9,
    title: "Hardware Check",
    description: "Verifying the quality and smooth operation of locks, hinges, and handles.",
    icon: Lock,
  },
  {
    id: 10,
    title: "Doors & Windows Check",
    description: "Inspecting frames, glass, and seals for alignment and smooth sliding.",
    icon: DoorOpen,
  },
  {
    id: 11,
    title: "Internal Walls Check",
    description: "Checking plastering, paint quality, and detecting structural cracks.",
    icon: Square,
  },
  {
    id: 12,
    title: "Terrace Check",
    description: "Inspecting slopes and drainage on top floors to prevent water pooling.",
    icon: Sun,
  },
  {
    id: 13,
    title: "AC Drains Check",
    description: "Ensuring proper slope and concealed piping for AC drain lines.",
    icon: Snowflake,
  },
  {
    id: 14,
    title: "Balcony & Utility Check",
    description: "Checking safety railings, floor slopes, and washing machine provisions.",
    icon: Layout,
  },
  
];

// --- Micro-Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export default function InspectionCoverageSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="inspection"
      ref={ref}
      className="bg-zinc-50 py-16 md:py-24 relative font-sans border-t border-zinc-200"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">

        {/* --- Section Intro Header --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-4xl mx-auto mb-16 space-y-5"
        >
          <motion.div
            variants={itemVariants}
            style={{ backgroundColor: `${colors.navy}15` }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F2D81]/20"
          >
            <CheckCircle size={14} style={{ color: colors.navy }} />
            <span style={{ color: colors.navy }} className="text-xs font-bold tracking-wider uppercase">
              Inside Our Inspections
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            style={{ color: colors.navy }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
          >
            What Does a Home Inspection Cover?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-[17px] text-zinc-600 leading-relaxed font-medium"
          >
            A 400+ point home inspection covers essential areas like the foundation, plumbing, electrical systems, HVAC, and structure, along with checks for moisture damage and safety issues. Make informed decisions about the condition of your property.
          </motion.p>
        </motion.div>

        {/* --- 16-Point Checklist Grid (Adjusted for Higher Density) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-24"
        >
          {coverageData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              // Removed hover animations entirely
              className="relative flex flex-col shadow-md rounded-2xl"
            >
              {/* The core Yellow Box */}
              <div
                style={{ backgroundColor: colors.yellow }}
                className="relative p-5 sm:p-6 flex flex-row items-start justify-between gap-4 flex-grow z-10 rounded-2xl"
              >

                {/* Left Side: Navy Text Content */}
                <div className="flex flex-col flex-grow">
                  <h3 style={{ color: colors.navy }} className="text-lg sm:text-xl font-bold tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p style={{ color: colors.navy }} className="text-sm leading-relaxed mb-0 font-medium opacity-90">
                    {item.description}
                  </p>
                </div>

                {/* Right Side: Navy Icon Container */}
                <div
                  style={{ backgroundColor: colors.navy }}
                  // Removed scale hover effect
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                >
                  <item.icon
                    size={22}
                    style={{ color: colors.yellow }}
                    strokeWidth={2.5}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Trust & Call to Action Banner --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ backgroundColor: colors.navy }}
          className="w-full max-w-6xl mx-auto rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Subtle Background Accent for the banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

          <div className="lg:max-w-2xl text-center lg:text-left relative z-10">
            <motion.div variants={itemVariants} className="space-y-2 mb-6">
              <h3 style={{ color: colors.yellow }} className="text-xs font-bold tracking-widest uppercase">
                400+ Inspection Points Covered
              </h3>
              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Professional Home Inspection You Can Trust.
              </h4>
            </motion.div>

            <motion.p variants={itemVariants} className="text-zinc-300 text-[15px] md:text-base leading-relaxed">
              Our experts bring years of real on-site experience to check every part of your property with accuracy and care. With clear reports and honest guidance, we help you avoid future repair costs and protect your investment.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(238,189,8,0.25)" }}
              whileTap={{ scale: 0.96 }}
              style={{ backgroundColor: colors.yellow, color: colors.navy }}
              onClick={() => window.location.href = "tel:6303363041"}
              className="px-8 py-4 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest flex items-center gap-3 transition-all shadow-md"
            >
              <PhoneCall size={20} strokeWidth={2.5} />
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}