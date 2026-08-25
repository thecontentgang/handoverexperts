import { motion, AnimatePresence, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

// --- FAQ Data ---
const faqData = [
  {
    id: 1,
    question: "How much does a home inspection cost in Hyderabad?",
    answer: "Home inspection costs in Hyderabad vary by property size and inspection depth — from a focused pre-possession check to a full 400+ point inspection. Handover Expert shares a transparent quote once we know your property size and locality; get in touch for an exact price."
  },
  {
    id: 2,
    question: "How long does a home inspection take in Hyderabad?",
    answer: "A standard 400+ point inspection takes 2 to 4 hours on-site, depending on the size of the flat, apartment, or villa. You'll have the complete digital report, with photos, within 24 hours of the visit."
  },
  {
    id: 3,
    question: "What does a home inspection in Hyderabad actually check?",
    answer: "It covers flooring, electrical wiring, plumbing, waterproofing, dampness, sanitary fittings, area measurement, doors and windows, internal walls, and terrace drainage — 400+ individual points across every category that affects how safe and liveable your home actually is."
  },
  {
    id: 4,
    question: "Is a home inspection necessary before taking possession from a builder in Hyderabad?",
    answer: "Yes. Builders in Hyderabad routinely hand over flats with unresolved snags — seepage, incomplete wiring, poor finishing — that a standard walkthrough won't reveal. An independent inspection report gives you documented, specific leverage to get those defects fixed before you take final possession."
  },
  {
    id: 5,
    question: "Which areas in Hyderabad does Handover Expert cover for home inspection?",
    answer: "We cover all major residential corridors in Hyderabad, including Gachibowli, HITEC City, Kondapur, Madhapur, Kukatpally, Miyapur, Financial District, and Kokapet."
  },
  {
    id: 6,
    question: "Can Handover Expert inspect a home for an NRI buyer who can't be present in Hyderabad?",
    answer: "Yes. We regularly handle inspections for NRI buyers who can't travel. Our engineer conducts the full on-site inspection independently and sends a detailed digital report with photos, so you can review and decide remotely."
  },
  {
    id: 7,
    question: "What's the difference between Handover Expert and a local freelance inspector?",
    answer: "We run a SOP-based 400+ point checklist executed by full-time trained engineers on our own HXOPS system, with internal review before every report goes out. Most local freelancers work from a shorter, informal checklist with no structured reporting or second-level review."
  }
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Open first FAQ by default
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      ref={ref}
      style={{ backgroundColor: colors.white }}
      className="py-24 relative font-sans overflow-hidden"
    >
      {/* SEO Crawler Content - Hidden from UI but read by Google */}
      <div className="sr-only">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4"
            style={{ backgroundColor: `${colors.yellow}20`, color: colors.navy }}
          >
            <MessageCircleQuestion size={28} strokeWidth={2.5} />
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            style={{ color: colors.navy }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about our home inspection process, pricing, and services in Hyderabad.
          </motion.p>
        </motion.div>

        {/* --- Accordion List --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-4"
        >
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <motion.div 
                key={faq.id} 
                variants={itemVariants}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-[#0F2D81]/20 bg-blue-50/30 shadow-sm" : "border-zinc-200 bg-white hover:bg-zinc-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span 
                    style={{ color: colors.navy }}
                    className="text-[17px] sm:text-lg font-bold pr-6 leading-snug"
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#0F2D81]/5"
                  >
                    <ChevronDown size={20} style={{ color: colors.navy }} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-zinc-600 text-[15px] sm:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}