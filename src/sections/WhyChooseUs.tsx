import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import BookingModal from "../components/BookingModal";
import { 
  CheckCircle2, 
  XCircle, 
  Building2, 
  Home, 

  CalendarCheck,
  ArrowRight,
  MoveHorizontal
} from "lucide-react";

// --- Data extracted from original snippet ---
const comparisonData = [
  { parameter: "Inspection Checkpoints", us: "SOP based 700+ detailed checkpoints", them: "Usually 100-200 checkpoints" },
  { parameter: "Team Expertise", us: "Trained full-time engineers", them: "Individual freelancers or part-time inspectors" },
  { parameter: "Inspection Process", us: "Tech Driven SOP-driven process", them: "Depends on individual inspector" },
  { parameter: "Report Quality", us: "Detailed digital report with photos & observations", them: "Basic PDF or checklist report" },
  { parameter: "Technology Platform", us: "Proprietary HXOPS inspection system", them: "Mostly manual processes" },
  { parameter: "Builder Defect Documentation", us: "Structured defect categorization", them: "General observations only" },
  { parameter: "Electrical Testing", us: "Comprehensive testing", them: "Limited testing" },
  { parameter: "Moisture & Seepage Detection", us: "Advanced tools and thermal scanning", them: "Mostly visual checks" },
  { parameter: "Customer Support", us: "Dedicated operations team", them: "Single point of contact" },
  { parameter: "Turnaround Time", us: "Committed timelines — 24 hours", them: "Varies significantly" },
  { parameter: "Multi-Stage Inspections", us: "Available", them: "Not available" },
  { parameter: "Company Credibility", us: "Registered company with dedicated team", them: "Mostly individual consultants" },
  { parameter: "NRI Support", us: "Dedicated support", them: "Usually unavailable" },
  { parameter: "Quality Assurance", us: "Internal review before report submission", them: "Depends on inspector" },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <section 
        id="comparison"
        ref={ref} 
        className="py-16 md:py-24 font-sans overflow-hidden bg-white text-navy"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

        {/* Visually hidden SEO block to ensure every exact word is indexed by Google */}
        <div className="sr-only">
          <h2>Handover Expert vs Local Inspectors in Hyderabad</h2>
          <p>See exactly why thousands of homebuyers trust us over freelancers and basic checklist services this comparison isn't marketing spin, it's the actual operational difference:</p>
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Handover Expert</th>
                <th>Typical Competitors / Freelancers</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td>{row.parameter}</td>
                  <td>{row.us}</td>
                  <td>{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>If you're weighing affordable home inspection services against a cheaper local freelancer, ask one question before you decide: will they still pick up the phone if a builder disputes their findings three weeks later? A company with full-time engineers and internal report review will. A freelancer, more often than not, has already moved on to the next job.</p>
          <p>When you're ready to book home inspection service with a team that treats every inspection like it's protecting their own reputation — not just filling a slot — that's exactly what you get here.</p>
          <p>CTA: Book Home Inspection Service Today</p>
        </div>

        {/* 1. THE IMPACT BANNER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-20 relative z-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="rounded-3xl p-8 sm:p-12 md:p-16 text-center relative shadow-2xl flex flex-col items-center justify-center overflow-hidden border border-white/10 bg-navy backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_50%,#EEBD08_0%,transparent_60%)] pointer-events-none" />
            
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6 relative z-10 text-white/60">
              <Building2 size={32} />
              <span className="w-12 h-[1px] bg-white/20"></span>
              <Home size={28} />
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl relative z-10"
            >
              From{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-white">1000 Cr luxury properties</span>
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
              </span>{" "}
              to small standalone apartments, we have inspected them all.
            </motion.h2>
          </motion.div>
        </div>

        {/* 2. THE COMPARISON TABLE */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-24 relative z-20">
          <motion.div variants={containerVariants} initial="hidden" animate={controls} className="text-center mb-10 space-y-6">
            <motion.h3 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-navy"
            >
              Handover Expert vs <br className="hidden sm:block" />
              <span className="text-yellow">Local Inspectors in Hyderabad</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto font-medium leading-relaxed">
              See exactly why thousands of homebuyers trust us over freelancers and basic checklist services — this comparison isn't marketing spin, it's the actual operational difference:
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            {/* Mobile Swipe Hint */}
            <div className="md:hidden flex items-center justify-center gap-2 pb-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              <MoveHorizontal size={16} />
              <span>Swipe horizontally to compare</span>
            </div>

            <div className="rounded-3xl border border-navy/10 bg-white backdrop-blur-sm overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[800px] border-collapse">
                  <thead>
                    <tr className="border-b border-navy/10">
                      <th className="p-6 text-sm md:text-base font-bold text-zinc-600 w-[25%] uppercase tracking-wider">
                        Parameter
                      </th>
                      {/* Elevated Header for Handover Expert */}
                      <th className="p-6 text-lg md:text-xl font-black w-[40%] bg-navy text-white border-l border-r border-navy/20 shadow-[inset_0_4px_0_#EEBD08]">
                        Handover Expert
                      </th>
                      <th className="p-6 text-sm md:text-base font-bold text-zinc-600 w-[35%] uppercase tracking-wider">
                        Typical Competitors / Freelancers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/10">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-zinc-50 transition-colors group">
                        <td className="p-6 text-sm md:text-base font-semibold text-navy/90 align-top">
                          {row.parameter}
                        </td>
                        {/* Elevated Body Cell for Handover Expert */}
                        <td className="p-6 align-top bg-navy group-hover:bg-[#163898] transition-colors border-l border-r border-navy/20">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-yellow" />
                            <span className="text-base font-bold text-white leading-snug">
                              {row.us}
                            </span>
                          </div>
                        </td>
                        <td className="p-6 align-top">
                          <div className="flex items-start gap-3 opacity-80 text-zinc-600">
                            <XCircle size={20} className="mt-0.5 shrink-0" />
                            <span className="text-base font-medium leading-snug">
                              {row.them}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* --- Post-Table Narrative --- */}
          
          {/* --- Call to Action (CTA) --- */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow text-navy px-6 py-4 sm:px-8 sm:py-5 rounded-xl font-black text-base lg:text-lg uppercase tracking-widest flex items-center gap-3 transition-all shadow-md"
            >
              <CalendarCheck size={22} />
              Book Home Inspection Service Today
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}