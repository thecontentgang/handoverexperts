import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

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
      <div id="about"
        ref={ref}
        className="min-h-screen bg-white text-navy py-20 relative overflow-hidden flex flex-col justify-start items-center"
      >
        {/* Structural Minimal Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(238,189,8,0.06),transparent_60%)] pointer-events-none" />

        {/* Visually hidden SEO block to ensure every exact word is indexed by Google */}
        <div className="sr-only">
          <h2>Engineer-Led Home Inspection in Hyderabad</h2>
          <p>10K+ Homes Checked · 40K+ Defects Found · 1K+ Google Reviews · 58K+ Followers</p>
          <p>Numbers only mean something if they translate into trust — so here's the honest version. Over 10,000 homes inspected across Hyderabad. Over 40,000 individual defects caught before buyers took possession — defects that would otherwise have become their expense, not the builder's. And a track record built by full-time, trained engineers, not freelancers working off a printed checklist.</p>
          <p>This is why Handover Expert consistently comes up when people search for the best home inspection services in Hyderabad. We don't chase the label of best home inspection company near me — we've earned it the slow way, one inspected home at a time. If you're comparing quality home inspection services before booking anyone, ask this one question: how many homes has this team actually inspected, and can they show you the reports? We can.</p>
          <p>Handover Expert stands as one of the few names offering genuinely total home inspection services in the city — covering residential and commercial, new construction and resale, all under one standardized 400+ point process.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-5xl mx-auto px-4 relative z-20 flex flex-col items-center pt-8"
        >
          {/* Centered Headline with Underline */}
          <motion.div variants={fadeInUpVariants} className="flex flex-col items-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy text-center">
              Engineer-Led Home Inspection
            </h2>
            <div 
              className="bg-yellow h-1 sm:h-1.5 w-16 sm:w-24 mt-4 sm:mt-6 rounded-full"
            />
          </motion.div>

          {/* Stats Row with Arc & Fade effect */}
          <motion.div
            variants={fadeInUpVariants}
            className="w-full flex flex-row justify-between items-center gap-2 sm:gap-6 md:gap-8 px-4 mb-20 z-10 relative"
          >
            {/* Edge fade gradients (as seen in image) */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            {/* Homes Checked (Outer Left - Lowest in Arc) */}
            <div className="flex-1 text-center translate-y-5 sm:translate-y-8 md:translate-y-10 opacity-70">
              <h3 className="text-yellow text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-md">
                10K+
              </h3>
              <p className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Homes Checked
              </p>
            </div>

            {/* Defects Found (Inner Left - Higher in Arc) */}
            <div className="flex-1 text-center">
              <h3 className="text-yellow text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-md">
                40K+
              </h3>
              <p className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Defects Found
              </p>
            </div>

            {/* Google Reviews (Inner Right - Higher in Arc) */}
            <div className="flex-1 text-center">
              <h3 className="text-yellow text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-md">
                1K+
              </h3>
              <p className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Google Reviews
              </p>
            </div>

            {/* Followers (Outer Right - Lowest in Arc) */}
            <div className="flex-1 text-center translate-y-5 sm:translate-y-8 md:translate-y-10 opacity-70">
              <h3 className="text-yellow text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-md">
                58K+
              </h3>
              <p className="text-[9px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Followers
              </p>
            </div>
          </motion.div>

          {/* Centered Paragraph Text */}
          <motion.div
            variants={fadeInUpVariants}
            className="max-w-4xl w-full text-center text-sm sm:text-base md:text-[17px] text-zinc-600 font-normal leading-relaxed space-y-6"
          >
            <p>
              Numbers only mean something if they translate into trust so here's the honest version. Over <strong className="text-navy">10,000 homes inspected</strong> across Hyderabad. Over <strong className="text-navy">40,000 individual defects caught</strong> before buyers took possession defects that would otherwise have become their expense, not the builder's. And a track record built by full-time, trained engineers, not freelancers working off a printed checklist.
            </p>
            
            <p>
              This is why Handover Expert consistently comes up when people search for the best home inspection services in Hyderabad. We don't chase the label of best home inspection company near me we've earned it the slow way, one inspected home at a time. If you're comparing quality home inspection services before booking anyone, ask this one question: how many homes has this team actually inspected, and can they show you the reports? <strong className="text-yellow">We can.</strong>
            </p>

            {/* Divider Line */}
            <div className="w-full max-w-3xl mx-auto h-[1px] bg-navy/10 my-8 md:my-10"></div>

            <p>
              Handover Expert stands as one of the few names offering genuinely total home inspection services in the city covering residential and commercial, new construction and resale, all under one standardized <strong className="text-yellow">400+ point process.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}