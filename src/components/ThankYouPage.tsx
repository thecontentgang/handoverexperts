import { useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";

const theme = { navy: "#0F2D81", yellow: "#EEBD08", whatsapp: "#25D366" };

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
    <path d="M19.11 17.21c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.08-.29-.14-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.12-.58.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.14.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.27-.18-.56-.32zM16.03 3C8.85 3 3 8.84 3 16c0 2.82.92 5.57 2.61 7.83L4 29l5.31-1.56A13 13 0 0 0 16.03 29C23.21 29 29 23.16 29 16S23.21 3 16.03 3zm0 23.67c-2.17 0-4.29-.58-6.15-1.69l-.44-.26-3.15.93.94-3.07-.29-.47A10.59 10.59 0 0 1 5.37 16c0-5.88 4.78-10.67 10.66-10.67S26.7 10.12 26.7 16c0 5.88-4.79 10.67-10.67 10.67z" />
  </svg>
);

const ActionButton = ({ href, icon: Icon, text, bg, color, shadow }: any) => (
  <motion.a
    href={href} target={href.includes("http") ? "_blank" : "_self"} rel="noreferrer"
    whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
    className={`w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2 md:gap-3 transition-all ${color}`}
    style={{ backgroundColor: bg, boxShadow: `0 8px 25px -8px ${shadow}` }}
  >
    <Icon size={18} /> {text}
  </motion.a>
);

export default function ThankYouPage() {
  useEffect(() => { document.title = "Thank You | Handover Expert"; }, []);

  const container: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const item: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-4 md:p-8 bg-[#FAFAFA] relative overflow-hidden font-sans selection:bg-[#EEBD08] selection:text-white text-center">

      {/* Background Orbs */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }} transition={{ duration: 15, repeat: Infinity }} className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full blur-[100px]" style={{ background: theme.navy }} />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }} transition={{ duration: 20, repeat: Infinity }} className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full blur-[100px]" style={{ background: theme.yellow }} />

      <motion.div variants={container} initial="hidden" animate="visible" className="w-[95%] max-w-[550px] md:max-w-[650px] relative z-10 flex flex-col items-center">

        {/* Responsive Logo */}
        <motion.img variants={item} src="/logo.png" alt="Handover Expert" className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain drop-shadow-md mb-6 md:mb-10" onError={(e) => (e.currentTarget.style.display = 'none')} />

        {/* Responsive Main Card */}
        <motion.div variants={item} className="w-full rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 shadow-2xl border border-white/10" style={{ background: theme.navy }}>

          {/* Checkmark Icon */}
          <motion.div variants={item} className="mx-auto flex justify-center mb-5 md:mb-8 relative w-16 h-16 md:w-20 md:h-20">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-full h-full rounded-full flex items-center justify-center z-10" style={{ background: `${theme.yellow}20`, border: `1px solid ${theme.yellow}40` }}>
              <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke={theme.yellow} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.4 }} d="M20 6L9 17l-5-5" />
              </svg>
            </motion.div>
            <motion.div animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="absolute inset-0 rounded-full border-2" style={{ borderColor: theme.yellow }} />
          </motion.div>

          {/* Typography scaling */}
          <motion.h1 variants={item} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2 md:mb-4 text-white">Thank You</motion.h1>
          <motion.p variants={item} className="text-sm sm:text-base md:text-xl font-medium text-white/90 mb-1 md:mb-2">Your request has been received successfully.</motion.p>
          <motion.p variants={item} className="text-xs sm:text-sm md:text-base text-white/60 mb-6 md:mb-10">Our team is reviewing your details and will be in touch shortly.</motion.p>

          {/* Contact Box */}
          <motion.div variants={item} className="rounded-2xl p-4 md:p-8 mb-6 md:mb-10 bg-white/5 border border-white/10">
            <p className="text-[10px] md:text-xs font-bold text-white/70 mb-4 md:mb-6 uppercase tracking-widest">Need faster assistance?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <ActionButton href="tel:+918309531411" icon={Phone} text="Call Us" bg={theme.yellow} color="text-[#0F2D81]" shadow={`${theme.yellow}60`} />
              <ActionButton href="https://wa.me/918309531411" icon={WhatsAppIcon} text="WhatsApp" bg={theme.whatsapp} color="text-white" shadow={`${theme.whatsapp}60`} />
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.a variants={item} href="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-white/70 hover:text-[#EEBD08] transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </motion.a>

        </motion.div>
      </motion.div>
    </div>
  );
}