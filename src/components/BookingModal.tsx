import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, User, Phone, Home, Building, Building2 } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    propertyType: "Apartment", // Default selection
  });

  const propertyTypes = [
    { id: "Apartment", icon: Building, label: "Apartment" },
    { id: "Villa", icon: Home, label: "Villa" },
    { id: "Commercial", icon: Building2, label: "Commercial" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API submission logic here
    
    // Close modal after submission (optional)
    // onClose(); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing modal
              className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col"
            >
              {/* Top Accent Bar */}
              <div style={{ backgroundColor: colors.navy }} className="h-2 w-full" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full text-zinc-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-8">
                  <h3 style={{ color: colors.navy }} className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                    Book Inspection
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium">
                    Enter your details below and our experts will contact you shortly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User size={18} className="text-zinc-400" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F2D81]/20 focus:border-[#0F2D81] transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Mobile Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone size={18} className="text-zinc-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F2D81]/20 focus:border-[#0F2D81] transition-all"
                      />
                    </div>
                  </div>

                  {/* Property Type Selection */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Property Type</label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {propertyTypes.map((type) => {
                        const isSelected = formData.propertyType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, propertyType: type.id })}
                            style={{
                              backgroundColor: isSelected ? colors.navy : "",
                              color: isSelected ? colors.white : "",
                              borderColor: isSelected ? colors.navy : "",
                            }}
                            className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${
                              isSelected 
                                ? "shadow-md" 
                                : "bg-zinc-50 border-zinc-200 text-zinc-500 hover:bg-zinc-100"
                            }`}
                          >
                            <type.icon size={18} strokeWidth={isSelected ? 2.5 : 2} />
                            <span className="text-[10px] sm:text-xs font-bold">{type.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(15,45,129,0.2)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{ backgroundColor: colors.yellow, color: colors.navy }}
                      className="w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-sm transition-all"
                    >
                      Submit Request
                    </motion.button>
                  </div>

                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}