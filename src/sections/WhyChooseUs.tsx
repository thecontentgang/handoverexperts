// Filename: WhyChooseUsSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle, Clock, SearchCheck, HardHat } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Expanded & Simplified Content ---
const reasonsData = [
  {
    id: "01",
    title: "Fast & Reliable Service",
    description: "We respect your time. You will get a thorough inspection and a clear, detailed digital report within just 24 hours, helping you make quick decisions without delaying your handover.",
    icon: Clock,
  },
  {
    id: "02",
    title: "360° Complete Inspections",
    description: "We don't just look at the surface. From hidden plumbing leaks and electrical faults to wall cracks and flooring quality, we check every single detail to ensure your home is totally safe.",
    icon: SearchCheck,
  },
  {
    id: "03",
    title: "Expert Engineering Team",
    description: "Our team consists of highly skilled professionals who know exactly what builders try to hide. We bring the right tools and real on-site experience to deliver precise, honest results.",
    icon: HardHat,
  },
];

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const leftSideVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function WhyChooseUsSection() {
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
      style={{ backgroundColor: colors.navy }}
      className="py-20 md:py-28 relative font-sans text-white"
    >
      {/* Subtle Background Grid for Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- Left Column: Sticky Header Area --- */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            <div
              style={{ backgroundColor: `${colors.white}10` }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"
            >
              <CheckCircle size={14} style={{ color: colors.yellow }} />
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-200">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Precision, Quality, and <span style={{ color: colors.yellow }}>Unmatched Expertise.</span>
            </h2>
            
            <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium">
              We leave no stone unturned in every inspection. Choose Handover Experts to protect your investment and move into your new home with total confidence.
            </p>
          </motion.div>

          {/* --- Right Column: Scrolling Feature Blocks (White BG) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 mt-8 lg:mt-0"
          >
            {reasonsData.map((reason) => (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
                style={{ backgroundColor: colors.white }}
                className="relative rounded-3xl p-8 sm:p-10 shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Large Background Watermark Number (Light Gray/Navy tint) */}
                <span 
                  style={{ color: `${colors.navy}08` }} 
                  className="absolute -right-4 -bottom-6 text-[120px] font-black select-none pointer-events-none group-hover:opacity-70 transition-opacity duration-300"
                >
                  {reason.id}
                </span>

                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  {/* Yellow Icon Box */}
                  <div 
                    style={{ backgroundColor: colors.yellow }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:rotate-6 transition-transform duration-300"
                  >
                    <reason.icon size={30} style={{ color: colors.navy }} strokeWidth={2.5} />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 style={{ color: colors.navy }} className="text-2xl font-bold tracking-tight mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-zinc-600 font-medium">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}