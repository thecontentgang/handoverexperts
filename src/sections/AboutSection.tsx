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
        
        {/* Bright Blue Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,99,235,0.05),transparent_60%)] pointer-events-none" />

        {/* Visually hidden SEO block */}
        <div className="sr-only">
          <h2>Engineer-Led Home Inspection in Hyderabad</h2>
          <p>10K+ Homes Checked · 40K+ Defects Found · 1K+ Google Reviews · 58K+ Followers</p>
          <p>Numbers only mean something if they translate into trust — so here's the honest version. Over 10,000 homes inspected across Hyderabad. Over 40,000 individual defects caught before buyers took possession — defects that would otherwise have become their expense, not the builder's. And a track record built by full-time, trained engineers, not freelancers working off a printed checklist.</p>
          <p>This is why Handover Expert consistently comes up when people search for the best home inspection services in Hyderabad. We don't chase the label of best home inspection company near me — we've earned it the slow way, one inspected home at a time. If you're comparing quality home inspection services before booking anyone, ask this one question: how many homes has this team actually inspected, and can they show you the reports? We can.</p>
          <p>Handover Expert stands as one of the few names offering genuinely total home inspection services in the city — covering residential and commercial, new construction and resale, all under one standardized 700+ point process.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full max-w-5xl mx-auto px-4 relative z-20 flex flex-col items-center pt-8"
        >
          {/* Centered Headline with Underline */}
          <motion.div variants={fadeInUpVariants} className="flex flex-col items-center mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy text-center leading-[1.1]">
              Helping Homeowners Take Handover With <span className="text-blue-600">Confidence</span>
            </h2>
            <div 
              className="bg-blue-600 h-1 sm:h-1.5 w-16 sm:w-24 mt-6 sm:mt-8 rounded-full"
            />
          </motion.div>

          {/* Centered Paragraph Text */}
          <motion.div
            variants={fadeInUpVariants}
            className="max-w-3xl w-full text-center text-base sm:text-lg md:text-xl text-zinc-600 font-medium leading-relaxed mb-8"
          >
            <p>
              Thousands of homeowners have trusted <strong className="text-navy">Handover Expert</strong> to identify hidden defects before they became expensive problems.
            </p>
          </motion.div>

          {/* --- Trust Badges with Inline SVGs (No External Library Needed) --- */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-16 px-2"
          >
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg shadow-blue-600/10">
              
              {/* Google G Logo SVG */}
              <div className="bg-white p-1.5 rounded-full shadow-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {/* Inline 5 Stars SVG */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="12" height="12" stroke="#2563EB" strokeWidth="2" fill="#2563EB" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-black text-navy tracking-wide uppercase mt-0.5">
                  1.4K+ Reviews
                </span>
              </div>
            </div>

            {/* Social Followers Badge */}
            <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg shadow-blue-600/10">
              <div className="flex items-center gap-1.5 bg-white px-2.5 py-1.5 rounded-full shadow-sm">
                
                {/* Instagram SVG */}
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="#EC4899" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>

                {/* YouTube SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>

              </div>
              <span className="text-xs sm:text-sm font-black text-navy tracking-wide uppercase">
                90K+ Followers
              </span>
            </div>
          </motion.div>

          {/* Stats Row with Arc & Fade effect */}
          <motion.div
            variants={fadeInUpVariants}
            className="w-full grid grid-cols-2 gap-y-10 gap-x-4 sm:flex sm:flex-row sm:justify-between items-center sm:gap-6 md:gap-8 px-4 mb-20 z-10 relative"
          >
            {/* Edge fade gradients - Hidden on mobile so they don't cover the grid text */}
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            {/* Homes Inspected (Outer Left) */}
            <div className="text-center sm:flex-1 opacity-80 translate-y-0 sm:translate-y-8 md:translate-y-10">
              <h3 className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-sm">
                40K+
              </h3>
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Homes Inspected
              </p>
            </div>

            {/* Defects Identified (Inner Left) */}
            <div className="text-center sm:flex-1">
              <h3 className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-sm">
                1.2L+
              </h3>
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Defects Identified
              </p>
            </div>

            {/* Repair Costs Avoided (Inner Right) */}
            <div className="text-center sm:flex-1">
              <h3 className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-sm">
                ₹600 Cr+
              </h3>
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Repair Costs Avoided
              </p>
            </div>

            {/* Checkpoints Covered (Outer Right) */}
            <div className="text-center sm:flex-1 opacity-80 translate-y-0 sm:translate-y-8 md:translate-y-10">
              <h3 className="text-blue-600 text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-1 md:mb-3 drop-shadow-sm">
                700+
              </h3>
              <p className="text-[10px] sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">
                Checkpoints Covered
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}