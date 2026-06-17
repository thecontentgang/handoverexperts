// Filename: InspectionCoverageSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  ShieldCheck, 
  Maximize, 
  Layers, 
  Ruler, 
  Tag, 
  Settings2, 
  CheckCircle,
  PhoneCall
} from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Content Data ---
const coverageData = [
  {
    id: 1,
    title: "Quality Check",
    description: "We ensure quality by thoroughly inspecting every detail of your home with absolute precision.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Area Check",
    description: "We measure every space accurately to ensure your property meets the required size standards.",
    icon: Maximize,
  },
  {
    id: 3,
    title: "Material Check",
    description: "We inspect all materials to ensure durability, quality, and compliance with construction codes.",
    icon: Layers,
  },
  {
    id: 4,
    title: "Dimension Check",
    description: "We take careful measurements of key structural elements to ensure perfect alignment.",
    icon: Ruler,
  },
  {
    id: 5,
    title: "Brand Check",
    description: "We verify that all fixtures and fittings used in your home match the trusted brands promised.",
    icon: Tag,
  },
  {
    id: 6,
    title: "Function Check",
    description: "We test all systems to ensure electrical, plumbing, appliances, and HVAC function properly.",
    icon: Settings2,
  },
];

// --- Micro-Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
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
    <section
      ref={ref}
      className="bg-zinc-50 py-16 md:py-24 relative font-sans border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
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
            A home inspection covers essential areas like the foundation, roof, plumbing, electrical systems, HVAC, and structure, along with checks for moisture damage, pests, and safety issues. With our reliable services in Hyderabad, you can make informed decisions about the condition and safety of your property.
          </motion.p>
        </motion.div>

        {/* --- 6-Point Checklist Grid (Clean Rounded Cards) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {coverageData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="relative flex flex-col group transition-all duration-300 shadow-lg hover:shadow-xl rounded-3xl"
            >
              {/* The core Yellow Box */}
              <div 
                style={{ backgroundColor: colors.yellow }} 
                className="relative p-6 sm:p-8 flex flex-row items-start justify-between gap-5 flex-grow z-10 rounded-3xl"
              >
                
                {/* Left Side: Navy Text Content */}
                <div className="flex flex-col flex-grow">
                  <h3 style={{ color: colors.navy }} className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  
                  <p style={{ color: colors.navy }} className="text-[15px] leading-relaxed mb-0 font-medium opacity-90">
                    {item.description}
                  </p>
                </div>

                {/* Right Side: Navy Icon Container */}
                <div 
                  style={{ backgroundColor: colors.navy }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0 shadow-md"
                >
                  <item.icon 
                    size={28} 
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
          className="w-full rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Subtle Background Accent for the banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
          
          <div className="lg:max-w-2xl text-center lg:text-left relative z-10">
            <motion.div variants={itemVariants} className="space-y-2 mb-6">
              <h3 style={{ color: colors.yellow }} className="text-xs font-bold tracking-widest uppercase">
                Detailed Reports With Clear Solutions
              </h3>
              <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Professional Home Inspection You Can Trust.
              </h4>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-zinc-300 text-[15px] md:text-base leading-relaxed">
              Our experts bring years of real on-site experience to check every part of your property with accuracy and care. We inspect structural quality, electrical systems, plumbing, dampness, and overall workmanship. With clear reports and honest guidance, we help you avoid future repair costs and protect your investment.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="shrink-0 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(238,189,8,0.25)" }}
              whileTap={{ scale: 0.96 }}
              style={{ backgroundColor: colors.yellow, color: colors.navy }}
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