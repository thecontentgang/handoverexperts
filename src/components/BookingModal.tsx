import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser"; // <-- Imported EmailJS

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
    service: "",
    propertyType: "Apartment",
  });
  
  // Added state to handle the loading state during the API call
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these strings with your actual EmailJS IDs
      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // The keys in this object must match the {{variables}} in your EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_mobile: formData.mobile,
        selected_service: formData.service,
        property_type: formData.propertyType,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      console.log("Email successfully sent!");
      
      // Optional: Reset form before closing
      setFormData({
        name: "",
        mobile: "",
        service: "",
        propertyType: "Apartment",
      });
      
      onClose();
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
          onClick={onClose}
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
              onClick={onClose}
              disabled={isSubmitting} // Prevent closing while submitting
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors disabled:opacity-50"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
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

                {/* Service Dropdown */}
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full h-12 px-4 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:outline-none focus:border-[#0F2D81] disabled:opacity-50"
                >
                  <option value="" disabled>Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

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
                  className="w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Booking..." : "Book Inspection"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}