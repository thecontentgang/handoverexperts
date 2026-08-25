import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { 
  Calendar, 
  UserCheck, 
  ClipboardCheck, 
  Camera, 
  FileText, 
  MessageSquareCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import BookingModal from "../components/BookingModal";

// --- 6-Step Process Data ---
const stepsData = [
  {
    step: "01",
    title: "Book Your Inspection",
    description: "Share your location, property details, and preferred date with our team.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "Engineer Visits Your Home",
    description: "Our inspection engineer visits the property at the scheduled time.",
    icon: UserCheck,
  },
  {
    step: "03",
    title: "Your Home Is Inspected",
    description: "We systematically inspect the property using our 700+ point checklist.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Defects Are Documented",
    description: "Identified issues are recorded with relevant observations and supporting evidence.",
    icon: Camera,
  },
  {
    step: "05",
    title: "Receive Your Report",
    description: "You receive a detailed inspection report showing the issues identified during the inspection.",
    icon: FileText,
  },
  {
    step: "06",
    title: "Raise It With Your Builder",
    description: "Use the report to communicate the identified defects and request rectification before handover.",
    icon: MessageSquareCheck,
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function HowItWorksSection() {
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
        id="how-it-works"
        ref={ref}
        className="py-24 relative font-sans overflow-hidden bg-white text-navy"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

        {/* Visually hidden SEO Content for Google Indexing */}
        <div className="sr-only">
          <h2>How Home Inspection Works — Getting Your Home Inspected Is Simple</h2>
          <ol>
            <li>01 — Book Your Inspection: Share your location, property details and preferred date with our team.</li>
            <li>02 — Engineer Visits Your Home: Our inspection engineer visits the property at the scheduled time.</li>
            <li>03 — Your Home Is Inspected: We systematically inspect the property using our 700+ point checklist.</li>
            <li>04 — Defects Are Documented: Identified issues are recorded with relevant observations and supporting evidence.</li>
            <li>05 — Receive Your Report: You receive a detailed inspection report showing the issues identified during the inspection.</li>
            <li>06 — Raise It With Your Builder: Use the report to communicate the identified defects and request rectification before handover.</li>
          </ol>
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
              <Sparkles size={16} className="text-yellow" />
              <span className="text-xs font-bold tracking-wider uppercase text-navy">
                Step-by-Step Process
              </span>
            </motion.div>

            <motion.h2
              variants={cardVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-navy"
            >
              Getting Your Home Inspected <br className="hidden sm:block" />
              <span className="relative inline-block mt-1 sm:mt-0 whitespace-nowrap">
                <span className="relative z-10 text-navy">Is Simple.</span>
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
              From booking your slot to handing a verified report to your builder, here is how we make possession completely hassle-free.
            </motion.p>
          </motion.div>

          {/* --- 6 Steps Grid --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16"
          >
            {stepsData.map((item) => (
              <motion.div
                key={item.step}
                variants={cardVariants}
                className="bg-white border border-navy/10 shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Card Header: Icon & Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-yellow/20 border border-yellow/40 flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon size={22} className="text-navy" strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-navy/20 tracking-tighter">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="w-8 h-1 bg-navy/10 rounded-full mt-6" />
              </motion.div>
            ))}
          </motion.div>

          {/* --- Bottom Call To Action --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-center justify-center text-center space-y-4"
          >
            <motion.button
              variants={cardVariants}
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow text-navy px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-black text-base lg:text-lg uppercase tracking-widest flex items-center gap-3 transition-all shadow-md"
            >
              Schedule My Inspection
              <ArrowRight size={20} />
            </motion.button>
            <motion.p variants={cardVariants} className="text-xs sm:text-sm text-zinc-500 font-medium">
              Slots fill quickly · Reports delivered within committed timelines
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}