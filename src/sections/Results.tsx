import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Eye,
  Wrench,
  ShieldAlert,
  Star,
  Quote,
  CalendarCheck,
  ArrowRight
} from "lucide-react";
import BookingModal from "../components/BookingModal";



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

// --- Real Hyderabad Reviews ---
const reviewsData = [
  {
    id: 1,
    name: "Rahul Reddy",
    location: "Gachibowli, Hyderabad",
    text: "Saved me from buying a flat with hidden seepage issues. The thermal scanning was an eye-opener. Best investment before taking handover!"
  },
  {
    id: 2,
    name: "Sneha Sharma",
    location: "Kondapur, Hyderabad",
    text: "Highly professional team. The 400+ point checklist is real. They found electrical faults that the builder had to fix immediately. Highly recommend."
  },
  {
    id: 3,
    name: "Vikram K.",
    location: "HITEC City, Hyderabad",
    text: "Being an NRI, I couldn't be there for the handover. Handover Expert took care of everything and sent a highly detailed digital report. Perfect service."
  },
  {
    id: 4,
    name: "Ananya Singh",
    location: "Hyderabad",
    text: "The team was incredibly thorough. They spent 4 hours inspecting our villa and found things we would have never noticed. The report was easy to read."
  },
  {
    id: 5,
    name: "Mohammed Tariq",
    location: "Hyderabad",
    text: "Worth every penny! Forced the builder to fix hollow tiles and a major plumbing issue in the master bathroom before we moved in."
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
      <section id="results"
        ref={ref}
        className="py-16 md:py-24 relative font-sans overflow-hidden bg-white"
      >
        {/* SEO Crawler Content - Hidden from UI but read by Google */}
        <div className="sr-only">
          <h2>Trusted by Hyderabad Homebuyers — Reviews</h2>
          <p>Real feedback from real home inspection services Hyderabad customers — not curated marketing lines, actual reviews from people who booked us before taking possession:</p>
          <blockquote>"Saved me from buying a flat with hidden seepage issues. The thermal scanning was an eye-opener. Best investment before taking handover!" — Rahul Reddy, Gachibowli, Hyderabad</blockquote>
          <blockquote>"Highly professional team. The 400+ point checklist is real. They found electrical faults that the builder had to fix immediately. Highly recommend." — Sneha Sharma, Kondapur, Hyderabad</blockquote>
          <blockquote>"Being an NRI, I couldn't be there for the handover. Handover Expert took care of everything and sent a highly detailed digital report. Perfect service." — Vikram K., HITEC City, Hyderabad</blockquote>
          <blockquote>"The team was incredibly thorough. They spent 4 hours inspecting our villa and found things we would have never noticed. The report was easy to read." — Ananya Singh, Hyderabad</blockquote>
          <blockquote>"Worth every penny! Forced the builder to fix hollow tiles and a major plumbing issue in the master bathroom before we moved in." — Mohammed Tariq, Hyderabad</blockquote>
          <p>This is what home inspection services Hyderabad should feel like from the buyer's side: not a bureaucratic formality, but the one step in the entire property-buying process where someone is working entirely for you. When people search for Handover Expert by name after their inspection, it's usually to tell someone else to book us too — and that, more than any stat on this page, is the reason we keep doing this the way we do.</p>
          <p>CTA: Book Your Inspection — Get Your Report in 24 Hours</p>
        </div>

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/20 bg-navy/5"
            >
              <CheckCircle size={14} className="text-navy" />
              <span className="text-xs font-bold tracking-wider uppercase text-navy">
                Real Results
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-navy"
            >
              Watch How We Protect{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-navy">Your Home.</span>

                {/* Hand-drawn SVG underline */}
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
                  <div className="absolute inset-0 rounded-3xl ring-inset ring-2 ring-[#0F2D81]/10 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- View More Button --- */}


          {/* --- Impact / Results Cards --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-32"
          >
            {impactData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(15, 45, 129, 0.15)" }}
                className="bg-white border border-navy/10 rounded-3xl p-8 transition-all duration-300 shadow-md text-center flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-yellow/20"
                >
                  <item.icon size={32} className="text-navy" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 text-navy">
                  {item.title}
                </h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* --- NEW: Reviews & Testimonials Section --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16 space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-navy"
              >
                Trusted by Hyderabad Homebuyers
              </motion.h2>
              <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto">
                Real feedback from real home owners Hyderabad customers not curated marketing lines.
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {reviewsData.map((review) => (
                <motion.div
                  key={review.id}
                  variants={itemVariants}
                  className="bg-white border border-navy/10 rounded-3xl p-8 shadow-lg flex flex-col justify-between w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 grow"
                >
                  <div>
                    <Quote size={28} className="text-zinc-200 mb-4" />
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FABB05" color="#FABB05" />
                      ))}
                    </div>
                    <p className="text-zinc-700 italic text-sm sm:text-base leading-relaxed mb-8">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/80">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-navy">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-sm block text-navy">
                        {review.name}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">
                        {review.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


            <motion.button
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow text-navy px-6 py-4 sm:px-10 sm:py-5 rounded-xl font-black text-base lg:text-lg uppercase tracking-widest flex items-center justify-center gap-3 mx-auto transition-all shadow-md"
            >
              <CalendarCheck size={22} />
              <span className="hidden sm:inline">Book Your Inspection — Get Your Report in 24 Hours</span>
              <span className="sm:hidden">Book Your Inspection</span>
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}