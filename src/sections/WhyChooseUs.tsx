import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2, XCircle, Star, Building2, Home, ChevronLeft, ChevronRight } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- Data extracted from image_fd6f40.png ---
const comparisonData = [
  { parameter: "Inspection Checkpoints", us: "400+ detailed checkpoints", them: "Usually 100-200 checkpoints" },
  { parameter: "Team Expertise", us: "Trained full-time engineers", them: "Individual freelancers or part-time inspectors" },
  { parameter: "Inspection Process", us: "Standardized SOP-driven process", them: "Depends on individual inspector" },
  { parameter: "Report Quality", us: "Detailed digital report with photos & observations", them: "Basic PDF or checklist report" },
  { parameter: "Technology Platform", us: "Proprietary HXOXP inspection system", them: "Mostly manual processes" },
  { parameter: "Builder Defect Documentation", us: "Structured defect categorization", them: "General observations only" },
  { parameter: "Electrical Testing", us: "Comprehensive testing", them: "Limited testing" },
  { parameter: "Moisture & Seepage Detection", us: "Advanced tools and thermal scanning", them: "Mostly visual checks" },
  { parameter: "Customer Support", us: "Dedicated operations team", them: "Single point of contact" },
  { parameter: "Turnaround Time", us: "Committed timelines", them: "Varies significantly" },
  { parameter: "Multi-Stage Inspections", us: "Available", them: "Not available" },
  { parameter: "Company Credibility", us: "Registered company with dedicated team", them: "Mostly individual consultants" },
  { parameter: "NRI Support", us: "Dedicated support", them: "Usually unavailable" },
  { parameter: "Quality Assurance", us: "Internal review before report submission", them: "Depends on inspector" },
];

// --- Expanded Mock Google Reviews Data ---
const reviewsData = [
  { id: 1, name: "Rahul Reddy", date: "2 weeks ago", text: "Saved me from buying a flat with hidden seepage issues. The thermal scanning was an eye-opener. Best investment before taking handover!" },
  { id: 2, name: "Sneha Sharma", date: "1 month ago", text: "Highly professional team. The 400+ point checklist is real. They found electrical faults that the builder had to fix immediately. Highly recommend." },
  { id: 3, name: "Vikram K.", date: "3 months ago", text: "Being an NRI, I couldn't be there for the handover. Handover Experts took care of everything and sent a highly detailed digital report. Perfect service." },
  { id: 4, name: "Ananya Singh", date: "3 months ago", text: "The team was incredibly thorough. They spent 4 hours inspecting our villa and found things we would have never noticed. The report was easy to read." },
  { id: 5, name: "Mohammed Tariq", date: "4 months ago", text: "Worth every penny! Forced the builder to fix hollow tiles and a major plumbing issue in the master bathroom before we moved in." },
  { id: 6, name: "Priya Desai", date: "5 months ago", text: "I loved their attention to detail. The proprietary software they use generates a beautiful, actionable report with photos for every single defect." },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null); // Added Ref for scrolling
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Handle Button Clicks to Scroll Left/Right smoothly
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="bg-white py-16 md:py-24 font-sans overflow-hidden">
      
      {/* 1. THE IMPACT BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ backgroundColor: colors.navy }}
          className="rounded-3xl p-8 sm:p-12 md:p-16 text-center relative shadow-2xl flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,#EEBD08_0%,transparent_60%)] pointer-events-none" />
          
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 relative z-10 text-white/50">
            <Building2 size={32} />
            <span className="w-12 h-[1px] bg-white/20"></span>
            <Home size={28} />
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl relative z-10"
          >
            From <span style={{ color: colors.yellow }}>1000 Cr luxury properties</span> to small standalone apartments, we have inspected them all.
          </motion.h2>
        </motion.div>
      </div>

      {/* 2. THE COMPARISON TABLE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-24">
        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="text-center mb-10">
          <motion.h3 variants={itemVariants} style={{ color: colors.navy }} className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Handover Expert vs Competitors
          </motion.h3>
          <motion.p variants={itemVariants} className="text-zinc-600 max-w-2xl mx-auto font-medium">
            See exactly why thousands of homebuyers trust us over freelancers and basic checklist services.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white border border-zinc-200 rounded-3xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="py-5 px-6 font-bold text-zinc-500 uppercase tracking-wider text-xs w-1/3 bg-zinc-50">Parameter</th>
                  <th style={{ backgroundColor: colors.navy, color: colors.white }} className="py-5 px-6 font-black uppercase tracking-wider text-sm w-1/3">Handover Expert</th>
                  <th className="py-5 px-6 font-bold text-zinc-600 uppercase tracking-wider text-xs w-1/3 bg-zinc-50">Typical Competitors / Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-zinc-800 text-sm">{row.parameter}</td>
                    <td className="py-4 px-6 bg-[#0F2D81]/[0.02]">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={18} style={{ color: colors.navy }} className="shrink-0 mt-0.5" />
                        <span style={{ color: colors.navy }} className="font-bold text-sm leading-snug">{row.us}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-3">
                        <XCircle size={18} className="text-zinc-300 shrink-0 mt-0.5" />
                        <span className="text-zinc-500 font-medium text-sm leading-snug">{row.them}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* 3. SCROLLABLE GOOGLE REVIEWS SHOWCASE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mb-10"
        >
          {/* Left Side: Title */}
          <div className="text-center sm:text-left">
            <motion.div variants={itemVariants} className="flex items-center justify-center sm:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FABB05" color="#FABB05" />
              ))}
            </motion.div>
            <motion.h3 variants={itemVariants} style={{ color: colors.navy }} className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Trusted by Hyderabad's Homebuyers
            </motion.h3>
            <motion.p variants={itemVariants} className="text-zinc-600 font-medium">
              Read what our clients have to say on Google.
            </motion.p>
          </div>

          {/* Right Side: Navigation Buttons (Fix for Desktop sliding) */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 text-[#0F2D81] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-50 text-[#0F2D81] transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Container (Added scrollRef) */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <motion.div
            ref={scrollRef as React.RefObject<HTMLDivElement>}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
          >
            {reviewsData.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="w-[85vw] sm:w-[380px] shrink-0 snap-center sm:snap-start bg-zinc-50 border border-zinc-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FABB05" color="#FABB05" />
                    ))}
                  </div>
                  <p className="text-zinc-700 italic text-sm sm:text-base leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200/60">
                  <div className="flex items-center gap-3">
                    <div style={{ backgroundColor: colors.navy }} className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <span style={{ color: colors.navy }} className="font-bold text-sm">{review.name}</span>
                  </div>
                  <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.3036 10.158H12V14.1542H17.4042C17.0261 16.0354 15.3526 17.5 12 17.5C8.68656 17.5 6 14.8134 6 11.5C6 8.18656 8.68656 5.5 12 5.5C13.5678 5.5 14.9959 6.10803 16.0592 7.10651L19.0065 4.15923C17.1856 2.4542 14.7731 1.5 12 1.5C6.47715 1.5 2 5.97715 2 11.5C2 17.0228 6.47715 21.5 12 21.5C17.5228 21.5 22 17.0228 22 11.5C22 10.8715 21.8906 10.3175 21.3036 10.158Z" fill="#4285F4"/>
                    </svg>
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}