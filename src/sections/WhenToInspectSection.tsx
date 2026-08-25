import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { 
  Key, 
  Search, 
  Tag, 
  Globe, 
  FileCheck, 
  Building2,
  AlertCircle
} from "lucide-react";



// --- Data for Scenarios ---
const scenarios = [
  {
    id: 1,
    title: "New Home Possession",
    description: "The highest-leverage moment with your builder. Once you sign the possession papers, most builders consider their job done—and your negotiating power disappears.",
    icon: Key,
  },
  {
    id: 2,
    title: "Resale Purchase",
    description: "Sellers show a property at its best. A pre-purchase inspection sees past the staging to tell you what years of 'maintenance' actually looked like behind the paint.",
    icon: Search,
  },
  {
    id: 3,
    title: "Selling Your Property",
    description: "Fix issues on your own terms and price your home with facts. Avoid the awkward moment when a buyer's inspector finds a hidden defect you didn't know about.",
    icon: Tag,
  },
  {
    id: 4,
    title: "NRI Buyers",
    description: "Buying from abroad? Don't just trust video calls. An independent inspection gives you a full digital report with real photos and zero bias before finalizing possession.",
    icon: Globe,
  },
  {
    id: 5,
    title: "Rental Properties",
    description: "Protects both sides. Landlords get documented proof of a property's condition before tenancy starts; tenants get an independent record instead of just the landlord's word.",
    icon: FileCheck,
  },
  {
    id: 6,
    title: "Commercial Properties",
    description: "Signing a multi-year lease? A fit-out budget and a go-live date don't leave room for structural surprises discovered after you've already moved in.",
    icon: Building2,
  },
];

// --- Animation Variants ---
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

export default function WhenToInspectSection() {
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
        id="when-to-inspect"
        ref={ref}
        className="py-24 relative overflow-hidden flex flex-col justify-center items-center bg-white text-navy"
      >
      {/* Structural Minimal Grid Background (Consistency with Hero/About) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,45,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(238,189,8,0.05),transparent_70%)] pointer-events-none" />

      {/* Visually hidden SEO block to ensure every exact word is indexed by Google */}
      <div className="sr-only">
        <h2>When Should You Get a Home Inspection?</h2>
        <p>Here's a myth worth killing early: home inspections aren't just for new construction. If you're asking "do I actually need this," the honest answer depends on where you are in your property journey — and there are more scenarios than most people realize.</p>
        <p>New Home Possession — This is the highest-leverage moment you'll ever have with your builder. Our new home inspection services exist specifically for this window, because once you've signed the possession papers, most builders consider their job done — and your negotiating power disappears with the ink.</p>
        <p>Resale Purchase — A pre purchase home inspection tells you what five years of "maintenance" actually looked like behind the paint. Sellers, understandably, show a property at its best. An inspection sees past the staging.</p>
        <p>Selling Your Property — A pre sale home inspection lets you fix issues on your own terms, price your home with facts instead of guesswork, and avoid the awkward moment when a buyer's inspector finds something you didn't disclose because you didn't know either.</p>
        <p>NRI Buyers — This one matters more than most people expect. If you're buying property in Hyderabad from abroad, you're often trusting photos, video calls, and a local contact to represent your interests. An independent inspection — full digital report, real photos, zero bias — is often the only accurate picture an NRI buyer gets before finalizing possession.</p>
        <p>Rental Properties — Our rental property inspection services protect both sides. Landlords get documented proof of a property's condition before a tenancy starts; tenants get an independent record instead of just a landlord's word.</p>
        <p>Commercial Properties — Signing a multi-year lease? Commercial property inspection services matter here just as much — a fit-out budget and an operational go-live date don't leave room for a structural surprise discovered after move-in.</p>
        <p>The pattern across every one of these scenarios: an inspection works best before you sign, not after you've already committed.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative z-20"
      >
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <motion.h2
            variants={fadeInUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-navy"
          >
            When Should You Get a <br className="hidden sm:block" />
            <span className="text-yellow">Home Inspection?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-zinc-600 font-medium leading-relaxed"
          >
            Here's a myth worth killing early: home inspections aren't just for new construction. The honest answer depends on where you are in your property journey.
          </motion.p>
        </div>

        {/* --- Grid Layout for Scenarios --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((scenario) => (
            <motion.div
              key={scenario.id}
              variants={fadeInUpVariants}
              whileHover={{ y: -5, borderColor: "rgba(15, 45, 129, 0.3)", boxShadow: "0 10px 25px -5px rgba(15,45,129,0.1)" }}
              className="bg-white border border-navy/10 shadow-lg rounded-3xl p-8 transition-all duration-300 flex flex-col h-full"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-yellow/15 border border-yellow/40"
              >
                <scenario.icon size={26} className="text-yellow" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy mb-3">
                {scenario.title}
              </h3>
              
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed flex-grow">
                {scenario.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Footer / Conclusion --- */}
        <motion.div
          variants={fadeInUpVariants}
          className="mt-16 sm:mt-20 flex flex-col md:flex-row items-center justify-center gap-4 bg-navy/5 border border-navy/10 p-6 sm:p-8 rounded-2xl md:rounded-full text-center md:text-left backdrop-blur-md"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-yellow">
            <AlertCircle size={24} className="text-navy" strokeWidth={2.5} />
          </div>
          <p className="text-base sm:text-lg font-medium text-navy max-w-2xl">
            The pattern across every single one of these scenarios is simple: <span className="text-yellow font-bold">an inspection works best before you sign</span>, not after you've already committed.
          </p>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
