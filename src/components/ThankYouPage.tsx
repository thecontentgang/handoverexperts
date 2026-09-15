import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  darkNavy: "#05102a",
  yellow: "#EEBD08",
  white: "#FFFFFF",
  whatsapp: "#25D366",
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
    <path d="M19.11 17.21c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.08-.29-.14-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.12-.58.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.14.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.27-.18-.56-.32z" />
    <path d="M16.03 3C8.85 3 3 8.84 3 16c0 2.82.92 5.57 2.61 7.83L4 29l5.31-1.56A13 13 0 0 0 16.03 29C23.21 29 29 23.16 29 16S23.21 3 16.03 3zm0 23.67c-2.17 0-4.29-.58-6.15-1.69l-.44-.26-3.15.93.94-3.07-.29-.47A10.59 10.59 0 0 1 5.37 16c0-5.88 4.78-10.67 10.66-10.67S26.7 10.12 26.7 16c0 5.88-4.79 10.67-10.67 10.67z" />
  </svg>
);

export default function ThankYouPage() {
  useEffect(() => {
    document.title = "Thank You | Handover Expert";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Thank you for contacting Handover Expert. Your request has been received and our team will get in touch with you shortly."
      );
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div
      // Changed to 100dvh (dynamic viewport height) and reduced mobile padding
      className="min-h-[100dvh] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-[#EEBD08] selection:text-white"
      style={{ backgroundColor: colors.darkNavy }}
    >
      {/* Premium Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: colors.navy }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: colors.yellow }}
      />

      {/* Main Glassmorphism Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // Reduced mobile padding (p-6) and radius to fit smaller screens better
        className="max-w-[600px] w-full rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-14 text-center relative z-10"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Animated Checkmark SVG */}
        <motion.div className="mx-auto flex items-center justify-center mb-5 sm:mb-8 relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            // Scaled down icon size for mobile
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center relative z-10"
            style={{
              background: `linear-gradient(135deg, ${colors.yellow}20, transparent)`,
              border: `1px solid ${colors.yellow}40`,
              boxShadow: `0 0 40px ${colors.yellow}20`
            }}
          >
            <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke={colors.yellow} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                d="M20 6L9 17l-5-5"
              />
            </svg>
          </motion.div>
          {/* Subtle pulse ring behind icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
            className="absolute inset-0 rounded-full z-0"
            style={{ border: `2px solid ${colors.yellow}` }}
          />
        </motion.div>

        {/* Typography */}
        <motion.h1
          variants={itemVariants}
          // Smaller text on mobile, tighter bottom margin
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 sm:mb-4 leading-tight text-white"
        >
          Thank You
        </motion.h1>

        <motion.p
          variants={itemVariants}
          // Scaled down subtitle
          className="text-base sm:text-xl font-medium text-white/90 mb-1 sm:mb-2 leading-snug"
        >
          Your request has been received successfully.
        </motion.p>

        <motion.p
          variants={itemVariants}
          // Scaled down subtext, tighter bottom margin
          className="text-sm sm:text-base text-white/50 font-normal mb-6 sm:mb-10 max-w-sm mx-auto"
        >
          Our team is reviewing your details and will be in touch shortly.
        </motion.p>

        {/* Fast-Track Contact Section */}
        <motion.div
          variants={itemVariants}
          // Reduced padding inside the contact box
          className="rounded-2xl p-5 sm:p-8 mb-6 sm:mb-10 border relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 mb-4 sm:mb-6 uppercase tracking-[0.2em] leading-relaxed relative z-10">
            Need faster assistance?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 relative z-10">
            {/* Call Button */}
            <motion.a
              href="tel:+918309531411"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              // Reduced vertical padding (py-3) on mobile to save height
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
              style={{
                backgroundColor: colors.yellow,
                color: colors.darkNavy,
                boxShadow: `0 8px 25px -8px ${colors.yellow}60`
              }}
            >
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              Call Us
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/918309531411"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              // Reduced vertical padding (py-3) on mobile to save height
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all text-white"
              style={{
                backgroundColor: colors.whatsapp,
                boxShadow: `0 8px 25px -8px ${colors.whatsapp}60`
              }}
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* Back to Home Link */}
        <motion.a
          variants={itemVariants}
          href="/"
          whileHover={{ x: -4 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide transition-colors focus:outline-none"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = colors.yellow)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
}