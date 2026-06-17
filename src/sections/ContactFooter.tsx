// Filename: ContactFooterSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  CheckCircle, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Send, 
} from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};



// --- Custom SVG Social Icons ---
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

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
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function ContactFooterSection() {
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
      ref={ref}
      style={{ backgroundColor: colors.navy }}
      className="pt-24 pb-8 relative font-sans text-white overflow-hidden drop-shadow-[0_-10px_30px_rgba(15,45,129,0.22)]"
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
            style={{ backgroundColor: `${colors.white}10` }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-xs"
          >
            <CheckCircle size={14} style={{ color: colors.yellow }} />
            <span className="text-xs font-bold tracking-wider text-zinc-200 uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-black tracking-tight leading-tight"
          >
            Ready to book your <span style={{ color: colors.yellow }}>inspection?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-300 leading-relaxed font-medium"
          >
            Fill out the form below or reach out to us directly. Our team is ready to help you secure your new home with confidence.
          </motion.p>
        </motion.div>

        {/* --- Contact Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Brand & Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Brand Logo (Mirrors Navbar exactly) */}
            <motion.div variants={itemVariants} className="flex items-center gap-3.5 group cursor-pointer shrink-0 mb-4">
              <img
                src="/logo.png"
                alt="Handover Experts Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col justify-center leading-[0.9]">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white">
                  Handover
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#EEBD08] mt-1.5">
                  Experts
                </span>
              </div>
            </motion.div>

            {/* Info Cards */}
            {[
              { icon: PhoneCall, title: "Call Us", detail: "+91 63033 63041" },
              { icon: Mail, title: "Email Us", detail: "hello@handoverexperts.com" },
              { icon: MapPin, title: "Visit Us", detail: "Asian Suncity, Hyderabad,India" },
            ].map((info, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex items-center gap-5 group cursor-pointer">
                <div 
                  style={{ backgroundColor: colors.yellow }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <info.icon size={24} style={{ color: colors.navy }} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                    {info.title}
                  </h4>
                  <p className="text-lg font-bold text-white group-hover:text-[#EEBD08] transition-colors duration-300">
                    {info.detail}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="mt-4 pt-8 border-t border-white/10">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EEBD08] hover:text-[#0F2D81] hover:scale-105 shadow-xs backdrop-blur-sm transition-all duration-300">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.youtube.com/@Hand-overexpert/shorts" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EEBD08] hover:text-[#0F2D81] hover:scale-105 shadow-xs backdrop-blur-sm transition-all duration-300">
                  <YoutubeIcon size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EEBD08] hover:text-[#0F2D81] hover:scale-105 shadow-xs backdrop-blur-sm transition-all duration-300">
                  <FacebookIcon size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Glass Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-7"
          >
            <motion.form 
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col gap-6"
            >
              <h3 className="text-2xl font-black text-white tracking-tight mb-2">Request an Inspection</h3>
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#EEBD08] focus:bg-black/30 transition-all shadow-inner"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 63033 63041" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#EEBD08] focus:bg-black/30 transition-all shadow-inner"
                />
              </div>

              {/* Service Dropdown Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-zinc-300 tracking-wide uppercase">Service Required</label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#EEBD08] focus:bg-black/30 transition-all shadow-inner appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0F2D81] text-zinc-400">Select a service...</option>
                    <option value="Full Home Inspection" className="bg-[#0F2D81]">Full Home Inspection</option>
                    <option value="Re-Inspection" className="bg-[#0F2D81]">Re-Inspection</option>
                    <option value="Moisture Check" className="bg-[#0F2D81]">Moisture Check</option>
                    <option value="Step-by-Step Check" className="bg-[#0F2D81]">Step-by-Step Check</option>
                    <option value="Area Measurement" className="bg-[#0F2D81]">Area Measurement</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button (Animated Pill Style like Navbar) */}
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#D1A507" }} // Slightly darker yellow on hover
                whileTap={{ scale: 0.97 }}
                style={{ backgroundColor: colors.yellow, color: colors.navy }}
                className="w-full py-4 mt-4 rounded-xl font-black text-sm sm:text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_6px_20px_rgba(238,189,8,0.3)] transition-all antialiased"
              >
                <Send size={18} strokeWidth={2.5} />
                Submit Request
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* --- Footer Area --- */}
        <motion.footer 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <motion.div variants={itemVariants} className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
            © {new Date().getFullYear()} Handover Experts. All rights reserved.
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {["About", "Services", "Inspection", "Results"].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm font-bold text-zinc-300 hover:text-[#EEBD08] transition-colors uppercase tracking-wider bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-[#EEBD08]/50"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </motion.footer>

      </div>
    </section>
  );
}