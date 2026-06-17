// Filename: AboutSection.tsx
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { Award, ClipboardCheck, ShieldAlert, Clock, CheckCircle } from "lucide-react";

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
        <div
            ref={ref}
            style={{ backgroundColor: customColors.deepNavy }}
            className="min-h-screen text-white py-10 relative overflow-hidden flex flex-col justify-start items-center "
        >
            {/* Structural Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

            {/* Stats Row / Arc Layout */}
            <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate={controls}
                className="w-full max-w-3xl flex flex-row justify-center items-end gap-2 sm:gap-6 md:gap-10 px-4 mb-16 z-10"
            >
                {/* Stat 1: Experience */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
                    className="w-[22%] rounded-2xl p-3 sm:p-5 text-center drop-shadow-xl translate-y-5 sm:translate-y-8 md:translate-y-10 border border-[#0F2D81]/10"
                >
                    <Award size={20} style={{ color: customColors.deepNavy }} className="mx-auto mb-2" />
                    <h3 className="text-sm sm:text-2xl font-black tracking-tight">5+ Yrs</h3>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 hidden sm:block opacity-75">
                        Experience
                    </p>
                </motion.div>

                {/* Stat 2: Homes Inspected */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
                    className="w-[22%] rounded-2xl p-3 sm:p-5 text-center drop-shadow-xl translate-y-0 border border-[#0F2D81]/10"
                >
                    <ClipboardCheck size={20} style={{ color: customColors.deepNavy }} className="mx-auto mb-2" />
                    <h3 className="text-sm sm:text-2xl font-black tracking-tight">2,500+</h3>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 hidden sm:block opacity-75">
                        Homes Checked
                    </p>
                </motion.div>

                {/* Stat 3: Defects Identified */}
                <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
                    className="w-[22%] rounded-2xl p-3 sm:p-5 text-center drop-shadow-xl translate-y-0 border border-[#0F2D81]/10"
                >
                    <ShieldAlert size={20} style={{ color: customColors.deepNavy }} className="mx-auto mb-2" />
                    <h3 className="text-sm sm:text-2xl font-black tracking-tight">18K+</h3>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 hidden sm:block opacity-75">
                        Defects Found
                    </p>
                </motion.div>

                {/* Stat 4: Report Delivery */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ backgroundColor: customColors.yellowGold, color: customColors.deepNavy }}
                    className="w-[22%] rounded-2xl p-3 sm:p-5 text-center drop-shadow-xl translate-y-5 sm:translate-y-8 md:translate-y-10 border border-[#0F2D81]/10"
                >
                    <Clock size={20} style={{ color: customColors.deepNavy }} className="mx-auto mb-2" />
                    <h3 className="text-sm sm:text-2xl font-black tracking-tight">24-Hr</h3>
                    <p className="text-[9px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 hidden sm:block opacity-75">
                        PDF Delivery
                    </p>
                </motion.div>
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
                        About Handover Experts
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
                            At <strong>Handover Experts</strong>, we conduct professional, independent property audits across Hyderabad. Our team uses advanced diagnostic tools to inspect every corner for water leakages, faulty wiring, structural cracks, and poor finishing layout issues.
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