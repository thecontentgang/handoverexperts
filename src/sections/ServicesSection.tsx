import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";
import { 
  Home, 
  CheckSquare, 
  Droplets, 
  Layers, 
  TestTube, 
  Building,
  ArrowRight,
  CalendarCheck
} from "lucide-react";



// --- Updated Service Data ---
const servicesData = [
  {
    id: 1,
    title: "Full Home Inspection",
    description: "The backbone of our house home inspections. We check plumbing, electrical wiring, walls, flooring, and overall build quality, point by point, so your home is genuinely safe and move-in ready not just move-in pretty. This is our most-booked house inspection services offering, and for good reason: it's the one inspection that catches the widest range of builder shortcuts.",
    icon: Home,
  },
  {
    id: 2,
    title: "Re-Inspection",
    description: "Builders fix what you flag. But do they fix it properly, or just enough to pass a glance? Before you accept the keys, we go back and personally verify every corrected issue. This single step is what separates a real building & home inspection service from a box-ticking exercise.",
    icon: CheckSquare,
  },
  {
    id: 3,
    title: "Seepage Inspection",
    description: "Water damage is the defect Hyderabad buyers regret missing the most, especially in Gachibowli and HITEC City towers where slab seepage is common. Using thermal imaging, we detect hidden moisture inside walls and ceilings months before it becomes a visible stain or a mold problem you can smell before you see.",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Multi-Stage Inspection",
    description: " For under-construction properties, this is where building inspection services Hyderabad buyers actually save money. We inspect at critical construction phases foundation, structure, finishing. so mistakes get caught while they're still cheap to correct, not after the walls are sealed shut.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Water Quality Check",
    description: "Because 'the taps work' and 'the water is safe' are very different claims. We test TDS levels, hardness, and impurities so you aren't drinking a hidden problem.",
    icon: TestTube,
  },
  {
    id: 6,
    title: "Commercial Property",
    description: " Offices, retail units, and business spaces deserve property inspection services with the same rigor as a home, arguably more, given lease timelines and fit-out deadlines. Our commercial property inspection services apply the same 400+ point standard to commercial handovers across the city.",
    icon: Building,
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
      <section id="services"
        ref={ref}
        className="py-20 relative font-sans bg-white"
      >
        {/* SEO Crawler Content - Hidden from UI but read by Google */}
        <div className="sr-only">
          <h2>Our Home Inspection Services in Hyderabad</h2>
          <p>Not every property needs the same thing checked the same way but every property deserves the same level of scrutiny. That's the principle behind every home inspection company in Hyderabad worth hiring, and it's the one we build every service around.</p>
          <p>Full Home Inspection — The backbone of our house home inspections. We check plumbing, electrical wiring, walls, flooring, and overall build quality, point by point, so your home is genuinely safe and move-in ready — not just move-in pretty. This is our most-booked house inspection services offering, and for good reason: it's the one inspection that catches the widest range of builder shortcuts.</p>
          <p>Re-Inspection — Builders fix what you flag. But do they fix it properly, or just enough to pass a glance? Before you accept the keys, we go back and personally verify every corrected issue. This single step is what separates a real building & home inspection service from a box-ticking exercise.</p>
          <p>Seepage Inspection — Water damage is the defect Hyderabad buyers regret missing the most, especially in Gachibowli and HITEC City towers where slab seepage is common. Using thermal imaging, we detect hidden moisture inside walls and ceilings months before it becomes a visible stain — or a mold problem you can smell before you see.</p>
          <p>Multi-Stage Inspection — For under-construction properties, this is where building inspection services Hyderabad buyers actually save money. We inspect at critical construction phases — foundation, structure, finishing — so mistakes get caught while they're still cheap to correct, not after the walls are sealed shut.</p>
          <p>Water Quality Check — Because "the taps work" and "the water is safe" are two very different claims. We test TDS levels, hardness, and impurities so your family isn't drinking — or bathing in — a problem nobody flagged.</p>
          <p>Commercial Property Inspection — Offices, retail units, and business spaces deserve property inspection services with the same rigor as a home, arguably more, given lease timelines and fit-out deadlines. Our commercial property inspection services apply the same 400+ point standard to commercial handovers across the city.</p>
          <p>Whether you need flat inspection services in Hyderabad, apartment inspection in Hyderabad, or villa inspection in Hyderabad, the checklist depth never changes — only the details do. This is what genuine property inspection looks like when it's built around your specific property, not a template.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 pt-4">
          
          {/* --- Section Header --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.h2
              variants={cardVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-navy"
            >
              Our Home Inspection Services in Hyderabad
            </motion.h2>
            
            <motion.p
              variants={cardVariants}
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium text-zinc-600"
            >
              Not every property needs the same thing checked the same way but every property deserves the same level of scrutiny. That's the principle we build every service around.
            </motion.p>
          </motion.div>

          {/* --- Services Cards Grid --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="relative flex flex-col transition-all duration-300 shadow-xl rounded-3xl"
              >
                {/* The core White Box with Navy Border/Shadow */}
                <div 
                  className="relative p-6 sm:p-8 flex flex-col items-start justify-start gap-5 flex-grow z-10 rounded-3xl bg-white border border-navy/10 shadow-lg transition-colors"
                >
                  {/* Top Row: Title and Icon */}
                  <div className="flex flex-row items-center justify-between w-full gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy leading-tight">
                      {service.title}
                    </h3>
                    <div 
                      className="bg-yellow w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 shrink-0 shadow-md"
                    >
                      <service.icon 
                        size={24} 
                        className="text-navy" 
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                  
                  {/* Bottom Area: Description */}
                  <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed mb-0">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* --- Call to Action (CTA) Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="mt-16 pt-8 border-t border-gray-200 flex flex-col items-center justify-center text-center space-y-6"
          >
            <motion.h3
              variants={cardVariants}
              className="text-2xl sm:text-3xl font-black tracking-tight text-navy"
            >
              Book Home Inspection Service Today
            </motion.h3>
            
            <motion.p
              variants={cardVariants}
              className="text-sm sm:text-base font-medium text-zinc-600 max-w-2xl mx-auto"
            >
              Whether you need flat, apartment, or villa inspection, the checklist depth never changes only the details do. Book today and get a clear digital report within 24 hours.
            </motion.p>
            
            <motion.button
              variants={cardVariants}
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow text-navy px-6 py-4 sm:px-8 sm:py-5 mt-2 rounded-xl font-black text-base lg:text-lg uppercase tracking-widest flex items-center gap-3 transition-all shadow-md"
            >
              <CalendarCheck size={20} />
              Book Your Inspection
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

        </div>
      </section>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}