// Filename: ResultsSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle, Eye, Wrench, ShieldAlert } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};


// --- YouTube Video IDs ---

const youtubeVideoIds = [
  "FdWON-XRKXQ", // Video 1 ID
  "c3fo_EPwE74", // Video 2 ID
  "3BMvvqtGv34", // Video 3 ID
];

// --- Real Results Highlights ---
const impactData = [
  {
    id: 1,
    title: "Hidden Issues Found",
    description: "We regularly uncover hidden dampness, hollow tiles, and hairline wall cracks that are invisible to the naked eye.",
    icon: Eye,
  },
  {
    id: 2,
    title: "Builder Fixes",
    description: "Our reports force builders to fix faulty wiring, leaking pipes, and poor paint jobs before you take the keys.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Future Costs Saved",
    description: "By catching defects early, we save our clients lakhs of rupees in future structural repairs and renovations.",
    icon: ShieldAlert,
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function ResultsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="results"
      ref={ref}
      style={{ backgroundColor: colors.white }}
      className="py-12 md:py-16 relative font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-16 space-y-5"
        >
          <motion.div
            variants={itemVariants}
            style={{ backgroundColor: `${colors.navy}15` }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F2D81]/20"
          >
            <CheckCircle size={14} style={{ color: colors.navy }} />
            <span style={{ color: colors.navy }} className="text-xs font-bold tracking-wider uppercase">
              Real Results
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            style={{ color: colors.navy }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Watch How We Protect <span style={{ color: colors.yellow }}>Your Home.</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium"
          >
            See our engineers in action. Watch how we thoroughly inspect every corner of a property to find hidden defects before our clients move in.
          </motion.p>
        </motion.div>

       {/* --- 3 Vertical YouTube Video Players Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-6xl mx-auto mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {youtubeVideoIds.map((videoId, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(15, 45, 129, 0.2)" }}
                className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#EEBD08]/30 bg-zinc-100 aspect-[3/4] group transition-all duration-300"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title={`Inspection Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full absolute inset-0 border-none"
                ></iframe>

                {/* Subtle glow/shadow overlay - using pointer-events-none so it doesn't block iframe clicks */}
                <div className="absolute inset-0 rounded-3xl ring-inset ring-2 ring-[#0F2D81]/10 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- View More Button --- */}
        {/* --- View More Button --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center mb-20"
        >
          <motion.a
            href="https://www.youtube.com/@Hand-overexpert/shorts"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: colors.navy, color: colors.white }}
            whileTap={{ scale: 0.96 }}
            style={{ backgroundColor: colors.yellow, color: colors.navy }}
            className="px-8 py-3.5 rounded-full font-black text-sm md:text-base uppercase tracking-widest flex items-center gap-3 shadow-[0_10px_20px_rgba(238,189,8,0.25)] transition-colors duration-300"
          >
            <Eye size={20} strokeWidth={2.5} />
            View More
          </motion.a>
        </motion.div>
        {/* --- Impact / Results Cards --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {impactData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(15, 45, 129, 0.15)" }}
              className="bg-white border border-zinc-200 rounded-3xl p-8 transition-all duration-300 shadow-md text-center flex flex-col items-center"
            >
              <div 
                style={{ backgroundColor: `${colors.yellow}20`, color: colors.yellow }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <item.icon size={32} style={{ color: colors.navy }} strokeWidth={2} />
              </div>
              
              <h3 style={{ color: colors.navy }} className="text-xl font-bold tracking-tight mb-3">
                {item.title}
              </h3>
              
              <p className="text-[15px] text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      
    </section>
  );
}