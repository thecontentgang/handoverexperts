import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronDown, CheckCircle } from "lucide-react"; // <-- Added CheckCircle
import emailjs from "@emailjs/browser";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    propertyType: "Apartment",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // <-- Added Success State

  const services = [
    "Full Home Inspection",
    "Re-Inspection",
    "Seepage Inspection",
    "Multi-Stage Inspection",
    "Water Quality Check",
  ];

  const propertyTypes = [
    "Apartment",
    "Villa",
    "Commercial",
  ];

  // Custom close handler to reset the form after the animation finishes
  const handleClose = () => {
    onClose();
    // Delay reset so the form doesn't suddenly disappear during the exit animation
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        propertyType: "Apartment",
      });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service) {
      alert("Please select a service.");
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceID = "service_iqg87l4";
      const templateID = "template_3btzjaz";
      const publicKey = "m8GFnGUnqg10xcs07";

      const templateParams = {
        user_name: formData.name,
        user_mobile: formData.mobile,
        user_email: formData.email || "Not Provided",
        selected_service: formData.service,
        property_type: formData.propertyType,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Instead of closing, trigger the success screen
      setIsSuccess(true); 

    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Top Bar */}
            <div style={{ backgroundColor: colors.navy }} className="h-2 w-full" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors disabled:opacity-50 z-10"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h2
                        style={{ color: colors.navy }}
                        className="text-2xl sm:text-3xl font-black tracking-tight"
                      >
                        Book Inspection
                      </h2>
                      <p className="text-zinc-500 text-sm mt-2">
                        Fill in your details and our inspection expert will contact you shortly.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:outline-none focus:border-[#0F2D81] disabled:opacity-50"
                      />

                      {/* Mobile */}
                      <input
                        type="tel"
                        required
                        placeholder="Your Mobile Number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:outline-none focus:border-[#0F2D81] disabled:opacity-50"
                      />

                      {/* Email (Optional) */}
                      <input
                        type="email"
                        placeholder="Your Email (Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={isSubmitting}
                        className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:outline-none focus:border-[#0F2D81] disabled:opacity-50"
                      />

                      {/* Custom Animated Service Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:outline-none focus:border-[#0F2D81] disabled:opacity-50 flex items-center justify-between transition-colors"
                        >
                          <span className={formData.service ? "text-black" : "text-zinc-400"}>
                            {formData.service || "Select Service"}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`text-zinc-400 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180 text-[#0F2D81]" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <>
                              {/* Invisible overlay to close dropdown on click outside */}
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setIsDropdownOpen(false)} 
                              />
                              
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-xl z-50 overflow-hidden"
                              >
                                {services.map((service) => (
                                  <button
                                    key={service}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, service });
                                      setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                                      formData.service === service
                                        ? "bg-[#0F2D81]/5 text-[#0F2D81] font-bold"
                                        : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                                    }`}
                                  >
                                    {service}
                                  </button>
                                ))}
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Property Type */}
                      <div className="pt-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                          Property Type
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {propertyTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              disabled={isSubmitting}
                              onClick={() => setFormData({ ...formData, propertyType: type })}
                              className={`h-11 rounded-xl text-xs sm:text-sm font-bold transition-all disabled:opacity-50 ${
                                formData.propertyType === type
                                  ? "bg-[#0F2D81] text-white shadow-md"
                                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        type="submit"
                        disabled={isSubmitting}
                        style={{ backgroundColor: colors.yellow, color: colors.navy }}
                        className="w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                      >
                        {isSubmitting ? "Booking..." : "Book Inspection"}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                    className="flex flex-col items-center justify-center py-6 text-center"
                  >
                    {/* Success Icon */}
                    <div 
                      style={{ backgroundColor: `${colors.yellow}20`, color: colors.yellow }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner"
                    >
                      <CheckCircle size={40} strokeWidth={2.5} style={{ color: colors.navy }} />
                    </div>

                    <h3 
                      style={{ color: colors.navy }}
                      className="text-2xl font-black tracking-tight mb-3"
                    >
                      Booking Successful!
                    </h3>
                    
                    <p className="text-zinc-500 text-base max-w-[280px] mx-auto mb-8 font-medium leading-relaxed">
                      Your inspection request has been received. Our expert will contact you within <span style={{ color: colors.navy }} className="font-bold">1 hour</span>.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClose}
                      style={{ backgroundColor: colors.navy, color: colors.white }}
                      className="w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center shadow-lg transition-colors hover:bg-opacity-90"
                    >
                      Done
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}