import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { MapPin, CheckCircle2, ShieldCheck } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

const locations = [
  "Gachibowli",
  "HITEC City",
  "Kondapur",
  "Madhapur",
  "Kukatpally",
  "Miyapur",
  "Financial District",
  "Kokapet"
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
      id="areas-we-serve"
      ref={ref}
      style={{ backgroundColor: colors.white }}
      className="py-24 relative font-sans overflow-hidden"
    >
      {/* SEO Crawler Content - Hidden from UI but read by Google */}
      <div className="sr-only">
        <h2>Areas We Serve in Hyderabad</h2>
        <p>Searching for home inspection services near me? Our engineers are already working across Hyderabad's busiest residential and commercial corridors:</p>
        <p>Gachibowli · HITEC City · Kondapur · Madhapur · Kukatpally · Miyapur · Financial District · Kokapet</p>
        <p>Whether you're looking for home inspection near me in Gachibowli or property inspection services Hyderabad in Kondapur, you're not waiting for a team to be "arranged specially." Our engineers inspect properties in these exact localities every single week — which means faster booking slots and inspectors who already know the common defect patterns specific to builders active in your area.</p>
        <p>If you're comparing us against the nearest best home inspection company near me, ask whether they actually operate locally in your locality, or whether they're dispatching someone from across the city for a one-off visit. That difference shows up in both response time and inspection quality.</p>
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
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full shadow-xs"
          >
            <MapPin size={16} style={{ color: colors.navy }} />
            <span className="text-xs font-bold tracking-wider uppercase" style={{ color: colors.navy }}>
              Local Expertise
            </span>
          </motion.div>

          <motion.h2
            variants={cardVariants}
            style={{ color: colors.navy }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
          >
            Areas We Serve in Hyderabad
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium text-zinc-600"
          >
            Searching for home inspection services near me? Our engineers are already working across Hyderabad's busiest residential and commercial corridors.
          </motion.p>
        </motion.div>

        {/* --- Locations Grid / Badges --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16"
        >
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{ backgroundColor: colors.navy, color: colors.white }}
              className="p-5 rounded-2xl flex items-center gap-3 shadow-lg transition-all duration-300 group"
            >
              <div 
                style={{ backgroundColor: colors.yellow }}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-12"
              >
                <MapPin size={20} style={{ color: colors.navy }} />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight truncate">
                {loc}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Explanatory Narrative Cards --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <motion.div 
            variants={cardVariants}
            className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <CheckCircle2 size={24} style={{ color: colors.navy }} />
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: colors.navy }}>
                No Waiting for Special Arrangements
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Whether you're looking for home inspection near me in Gachibowli or property inspection services Hyderabad in Kondapur, you're not waiting for a team to be "arranged specially." Our engineers inspect properties in these exact localities every single week — meaning faster booking slots and inspectors who already know the common defect patterns specific to builders active in your area.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                <ShieldCheck size={24} style={{ color: colors.navy }} />
              </div>
              <h3 className="text-xl font-bold tracking-tight" style={{ color: colors.navy }}>
                True Local Presence vs. One-Off Visits
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                If you're comparing us against the nearest best home inspection company near me, ask whether they actually operate locally in your locality, or whether they're dispatching someone from across the city for a one-off visit. That difference shows up in both response time and inspection quality.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}