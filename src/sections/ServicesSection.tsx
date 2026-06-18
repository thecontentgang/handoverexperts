import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";
import { 
  Home, 
  CheckSquare, 
  Droplets, 
  Layers, 
  TestTube, 
  ArrowRight,
  CalendarCheck
} from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Updated Service Data ---
const servicesData = [
  {
    id: 1,
    title: "Full Home Inspection",
    description: "We check the plumbing, electrical wiring, walls, and overall build quality to make sure your home is completely safe and ready.",
    icon: Home,
  },
  {
    id: 2,
    title: "Re-Inspection",
    description: "Before you take the keys, we check the home again to ensure the builder has fixed all the issues we found the first time.",
    icon: CheckSquare,
  },
  {
    id: 3,
    title: "Seepage Inspection",
    description: "Hidden water seepage can ruin your interiors. We use specialized thermal tools to detect dampness and leaks before they spread.",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Multi-Stage Inspection",
    description: "We evaluate your property at critical construction phases, catching structural and finishing mistakes long before the walls are closed up.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Water Quality Check",
    description: "We test the water supply for TDS levels, hardness, and impurities to ensure it's safe for your family, plumbing, and appliances.",
    icon: TestTube,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function ServicesSection() {

  const [isModalOpen, setIsModalOpen ] = useState(false);
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
      ref={ref}
      style={{ backgroundColor: colors.white }}
      className="py-20 relative font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 pt-4">
        
        {/* --- Simple Section Header --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <motion.h2
            variants={cardVariants}
            style={{ color: colors.navy }}
            className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            variants={cardVariants}
            style={{ color: colors.navy }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium opacity-90"
          >
            We make sure your new home is perfectly safe, well-built, and completely ready for you and your family to move in.
          </motion.p>
        </motion.div>

        {/* --- Services Cards Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8"
        >
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col group transition-all duration-300 shadow-xl hover:shadow-2xl rounded-3xl ${
                  isFeatured 
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                {/* The core Navy Box */}
                <div 
                  style={{ backgroundColor: colors.navy }} 
                  className="relative p-6 sm:p-8 flex flex-row items-start justify-between gap-5 flex-grow z-10 rounded-3xl"
                >
                  
                  {/* Left Side: White Text Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-zinc-300 text-[15px] leading-relaxed mb-0">
                      {service.description}
                    </p>
                  </div>

                  {/* Right Side: Yellow Icon Container */}
                  <div 
                    style={{ backgroundColor: colors.yellow }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0 shadow-md"
                  >
                    <service.icon 
                      size={28} 
                      style={{ color: colors.navy }} 
                      strokeWidth={2.5}
                    />
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- Call to Action (CTA) Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 pt-6 flex flex-col items-center justify-center text-center space-y-6"
        >
          <motion.h3
            variants={cardVariants}
            style={{ color: colors.navy }}
            className="text-3xl sm:text-4xl font-black tracking-tight"
          >
            Ready to secure your new home?
          </motion.h3>
          
          <motion.p
            variants={cardVariants}
            className="text-base sm:text-lg font-medium text-zinc-600 max-w-xl mx-auto"
          >
            Book an inspection today and get a clear, easy-to-read digital report within 24 hours.
          </motion.p>
          
          <motion.button
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(15,45,129,0.25)" }}
            whileTap={{ scale: 0.96 }}
            onClick= {() => {setIsModalOpen(true)}}
            style={{ backgroundColor: colors.navy, color: colors.white }}
            className="px-8 py-4 mt-2 rounded-2xl font-bold text-sm sm:text-base uppercase tracking-widest flex items-center gap-3 transition-all"
          >
            <CalendarCheck size={20} />
            Book Your Inspection
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

      </div>
    </section>
    <BookingModal  isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}}/>
    </>
  );
}