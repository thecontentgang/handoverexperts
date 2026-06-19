import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { ClipboardCheck, ShieldAlert, CheckCircle } from "lucide-react";

const customColors = {
  deepNavy: "#0F2D81",   // Background Color
  yellowGold: "#EEBD08", // Accent & Highlight Color
};

// Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};
const GoogleLogo = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={customColors.deepNavy}
    className="mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5"
  >
    <path d="M21.35 11.1H12v2.8h5.35c-.23 1.45-1.73 4.25-5.35 4.25-3.22 0-5.85-2.67-5.85-5.95s2.63-5.95 5.85-5.95c1.83 0 3.05.78 3.75 1.45l2.55-2.48C16.68 3.7 14.6 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.2 0 8.65-3.65 8.65-8.8 0-.6-.05-.85-.15-1.1z" />
  </svg>
);

const InstagramLogo = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={customColors.deepNavy}
    className="mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  </svg>
);

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutSection() {
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
      <div id="about"
        ref={ref}
        style={{ backgroundColor: customColors.deepNavy }}
        className="min-h-screen text-white py-20 relative overflow-hidden flex flex-col justify-start items-center "
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

        {/* Stats Row / Arc Layout */}
        {/* Stats Row */}
<motion.div
  variants={fadeInUpVariants}
  initial="hidden"
  animate={controls}
  className="w-full max-w-3xl flex flex-row justify-center items-end gap-2 sm:gap-6 md:gap-10 px-4 mb-16 z-10"
>
  {/* Homes Checked */}
  <div
    style={{
      backgroundColor: customColors.yellowGold,
      color: customColors.deepNavy,
    }}
    className="w-[22%] rounded-xl sm:rounded-2xl p-2 sm:p-5 text-center drop-shadow-xl translate-y-5 sm:translate-y-8 md:translate-y-10 border border-[#0F2D81]/10 flex flex-col items-center justify-center"
  >
    <ClipboardCheck
      size={20}
      strokeWidth={2.5}
      style={{ color: customColors.deepNavy }}
      className="mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5"
    />
    <h3 className="text-xs sm:text-2xl font-black tracking-tight leading-none mb-1">
      10K+
    </h3>
    <p className="text-[8px] sm:text-xs font-bold uppercase tracking-wider opacity-75 leading-tight">
      Homes Checked
    </p>
  </div>

  {/* Defects Found */}
  <div
    style={{
      backgroundColor: customColors.yellowGold,
      color: customColors.deepNavy,
    }}
    className="w-[22%] rounded-xl sm:rounded-2xl p-2 sm:p-5 text-center drop-shadow-xl border border-[#0F2D81]/10 flex flex-col items-center justify-center"
  >
    <ShieldAlert
      size={20}
      strokeWidth={2.5}
      style={{ color: customColors.deepNavy }}
      className="mb-1 sm:mb-2 w-4 h-4 sm:w-5 sm:h-5"
    />
    <h3 className="text-xs sm:text-2xl font-black tracking-tight leading-none mb-1">
      40K+
    </h3>
    <p className="text-[8px] sm:text-xs font-bold uppercase tracking-wider opacity-75 leading-tight">
      Defects Found
    </p>
  </div>

  {/* Google Reviews */}
  <div
    style={{
      backgroundColor: customColors.yellowGold,
      color: customColors.deepNavy,
    }}
    className="w-[22%] rounded-xl sm:rounded-2xl p-2 sm:p-5 text-center drop-shadow-xl border border-[#0F2D81]/10 flex flex-col items-center justify-center"
  >
    <GoogleLogo size={20} />
    <h3 className="text-xs sm:text-2xl font-black tracking-tight leading-none mb-1">
      1K+
    </h3>
    <p className="text-[8px] sm:text-xs font-bold uppercase tracking-wider opacity-75 leading-tight">
      Google Reviews
    </p>
  </div>

  {/* Instagram Followers */}
  <div
    style={{
      backgroundColor: customColors.yellowGold,
      color: customColors.deepNavy,
    }}
    className="w-[22%] rounded-xl sm:rounded-2xl p-2 sm:p-5 text-center drop-shadow-xl translate-y-5 sm:translate-y-8 md:translate-y-10 border border-[#0F2D81]/10 flex flex-col items-center justify-center"
  >
    <InstagramLogo size={20} />

    <h3 className="text-xs sm:text-2xl font-black tracking-tight leading-none mb-1">
      58K+
    </h3>

    <p className="text-[8px] sm:text-xs font-bold uppercase tracking-wider opacity-75 leading-tight">
      Followers
    </p>
  </div>
</motion.div>

        {/* Main Narrative Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-6xl mx-auto px-6 md:px-8 space-y-6 relative z-20 flex flex-col items-center -mt-6 sm:-mt-10 md:-mt-12"
        >
          {/* Simple Section Badge */}
          <motion.div
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-xs"
          >
            <CheckCircle size={14} style={{ color: customColors.yellowGold }} />
            <span className="text-xs font-bold tracking-wider text-zinc-300 uppercase">
              About Handover Expert
            </span>
          </motion.div>

          {/* Headline & Paragraph Layout - Two-Column Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 w-full text-left items-start pt-2">

            {/* Left Column: Headline Section */}
            <motion.h2
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-white md:col-span-5 text-center md:text-left"
            >
              Helping Homebuyers
              <br />
              Move In With{" "}
              <span style={{ color: customColors.yellowGold }} className="inline-block">
                Confidence.
              </span>
            </motion.h2>

            {/* Right Column: Shortened Explainer Copy */}
            <motion.div
              variants={fadeInUpVariants}
              className="text-sm sm:text-base md:text-[17px] text-zinc-300 font-normal leading-relaxed space-y-5 md:col-span-7 text-left"
            >
              <p>
                Buying a new home is a massive investment, yet many newly built apartments and villas contain hidden flaws that are easily missed during a standard walkthrough.
              </p>
              <p>
                At <strong>Handover Expert</strong>, we conduct professional, independent property audits across Hyderabad. Our team uses advanced diagnostic tools to inspect every corner for water leakages, faulty wiring, structural cracks, and poor finishing layout issues.
              </p>
              <p>
                We provide a clear digital checklist with photos within 24 hours. This detailed documentation gives you total peace of mind and complete leverage to ensure the builder fixes all defects before your final possession.
              </p>
            </motion.div>
          </div>

        </motion.div>
        
      </div>
    </>
  );
}