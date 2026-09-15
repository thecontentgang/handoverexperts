"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { validateName, validateIndianPhone, validateEmail } from "../utils/validation";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
  white: "#FFFFFF",
  red: "#EF4444",
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
  
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Validate single field
  const validateField = (field: string, value: string) => {
    let error: string | null = null;
    if (field === "name") error = validateName(value);
    if (field === "mobile") error = validateIndianPhone(value);
    if (field === "email") error = validateEmail(value);
    
    setErrors(prev => ({ ...prev, [field]: error }));
    return error;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field as keyof typeof formData]);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        propertyType: "Apartment",
      });
      setErrors({});
      setTouched({});
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all as touched
    setTouched({
      name: true,
      mobile: true,
      email: true,
      service: true,
    });

    const nameErr = validateName(formData.name);
    const mobileErr = validateIndianPhone(formData.mobile);
    const emailErr = validateEmail(formData.email);
    
    setErrors({
      name: nameErr,
      mobile: mobileErr,
      email: emailErr,
    });

    if (nameErr || mobileErr || emailErr) {
      return; // Stop submission if validation fails
    }

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
        user_name: formData.name.trim(),
        user_mobile: formData.mobile.trim(),
        user_email: formData.email.trim(),
        selected_service: formData.service,
        property_type: formData.propertyType,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      sessionStorage.setItem("formSubmitted", "true");
      window.location.assign("/thank-you");

    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false); // Re-enable if it fails
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          {/* Invisible overlay for close */}
          <div className="absolute inset-0 z-0" onClick={handleClose} />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white w-full max-w-sm sm:max-w-md rounded-3xl shadow-2xl overflow-visible relative z-10 flex flex-col max-h-[90vh]"
          >
            {/* Top Bar */}
            <div style={{ backgroundColor: colors.navy }} className="h-2 w-full shrink-0 rounded-t-3xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors disabled:opacity-50 z-20"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
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
                    className="text-2xl sm:text-3xl font-black tracking-tight pr-8"
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
                  <div className="space-y-1">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      disabled={isSubmitting}
                      className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 text-sm font-medium focus:outline-none disabled:opacity-50 transition-colors ${
                        errors.name && touched.name ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-[#0F2D81]"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1 pl-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="space-y-1">
                    <input
                      type="tel"
                      placeholder="Your Mobile Number"
                      value={formData.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      onBlur={() => handleBlur("mobile")}
                      disabled={isSubmitting}
                      className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 text-sm font-medium focus:outline-none disabled:opacity-50 transition-colors ${
                        errors.mobile && touched.mobile ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-[#0F2D81]"
                      }`}
                    />
                    {errors.mobile && touched.mobile && (
                      <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1 pl-1">
                        <AlertCircle size={12} /> {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      disabled={isSubmitting}
                      className={`w-full h-12 px-4 rounded-xl border bg-zinc-50 text-sm font-medium focus:outline-none disabled:opacity-50 transition-colors ${
                        errors.email && touched.email ? "border-red-500 focus:border-red-500" : "border-zinc-200 focus:border-[#0F2D81]"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1 pl-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Custom Animated Service Dropdown */}
                  <div className="relative" ref={dropdownRef}>
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
                    className="w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg transition-opacity"
                  >
                    {isSubmitting ? "Submitting..." : "Book Inspection"}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}