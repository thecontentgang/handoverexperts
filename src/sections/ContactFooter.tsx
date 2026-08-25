import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Mail,
  CalendarDays,
} from "lucide-react";
// Adjust the import path based on your folder structure
import BookingModal from "../components/BookingModal";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactFooterSection() {
  // State to handle the single source of truth for the booking form
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
        ref={ref}
        className="pt-24 pb-8 relative font-sans text-navy bg-white overflow-hidden drop-shadow-[0_-10px_30px_rgba(15,45,129,0.05)]"
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/20 bg-navy/5 shadow-xs"
            >
              <CheckCircle size={14} className="text-navy" />
              <span className="text-xs font-bold tracking-wider text-navy uppercase">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-navy"
            >
              Ready to book your <span className="text-[#EEBD08]">inspection?</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium"
            >
              Reach out to us directly or click below to schedule your inspection. Our team is ready to help you secure your new home with confidence.
            </motion.p>
          </motion.div>

          {/* --- Contact Layout --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-center">

            {/* Left Column: Brand & Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {/* Brand Logo (Mirrors Navbar exactly) */}
              <motion.div variants={itemVariants} className="flex items-center gap-3.5 group cursor-pointer shrink-0">
                <img
                  src="/handover-expert-logo.png"
                  alt="Handover expert Logo"
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>

              {/* Info Cards */}
              {[
                { icon: Mail, title: "Email Us", detail: "sushmitha@handoverexpert.com" },
              ].map((info, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center gap-5 group cursor-pointer">
                  <div
                    className="bg-[#EEBD08] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <info.icon size={24} className="text-navy" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">
                      {info.title}
                    </h4>
                    <p className="text-lg font-bold text-navy group-hover:text-[#EEBD08] transition-colors duration-300">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column: Modal Trigger CTA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="lg:col-span-7 flex items-center"
            >
              <motion.div
                variants={itemVariants}
                className="w-full bg-white border border-navy/10 rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col items-center justify-center text-center gap-6"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-2 bg-[#EEBD08]/20"
                >
                  <CalendarDays size={40} className="text-navy" strokeWidth={1.5} />
                </div>

                <h3 className="text-3xl font-black text-navy tracking-tight">
                  Secure Your Investment
                </h3>

                <p className="text-zinc-600 text-base max-w-md mx-auto mb-4">
                  Don't leave your new property to chance. Schedule a comprehensive home inspection today and let our experts handle the rest.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, filter: "drop-shadow(0 4px 15px rgba(238,189,8,0.5))" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#EEBD08] text-navy px-8 py-4 rounded-xl font-black text-base lg:text-lg uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-md"
                >
                  Book Inspection Now
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* --- Footer Area --- */}
          <motion.footer
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="border-t border-navy/10 pt-8 flex items-center justify-center text-center"
          >
            <motion.div 
              variants={itemVariants} 
              className="text-xs sm:text-sm text-zinc-500 font-medium tracking-wide flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
            >
              <span>© {new Date().getFullYear()} Handover Expert. All rights reserved.</span>
              <span className="hidden sm:inline">|</span>
              <span>
                Built by{" "}
                <a 
                  href="https://thecontentgang.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy hover:text-[#EEBD08] font-bold transition-colors"
                >
                  thecontentgang.com
                </a>
              </span>
            </motion.div>
          </motion.footer>

        </div>
      </section>

      {/* Mount the Booking Modal globally here */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}