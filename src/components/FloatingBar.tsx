// Filename: FloatingContactButton.tsx

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const colors = {
  navy: "#0F2D81",
  yellow: "#EEBD08",
};

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M19.11 17.21c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.08-.29-.14-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.12-.58.13-.13.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.14.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.11-.27-.18-.56-.32z" />
    <path d="M16.03 3C8.85 3 3 8.84 3 16c0 2.82.92 5.57 2.61 7.83L4 29l5.31-1.56A13 13 0 0 0 16.03 29C23.21 29 29 23.16 29 16S23.21 3 16.03 3zm0 23.67c-2.17 0-4.29-.58-6.15-1.69l-.44-.26-3.15.93.94-3.07-.29-.47A10.59 10.59 0 0 1 5.37 16c0-5.88 4.78-10.67 10.66-10.67S26.7 10.12 26.7 16c0 5.88-4.79 10.67-10.67 10.67z" />
  </svg>
);



export default function FloatingContactButton() {
  const actions = [
  
    {
      icon: <Phone size={24} strokeWidth={2.5} />,
      label: "Call Us",
      color: colors.navy,
      href: "tel:+916303363041",
    },
    {
      icon: <WhatsAppIcon size={24} />,
      label: "WhatsApp",
      color: "#25D366",
      href: "https://wa.me/916303363041",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.12,
            y: -3,
          }}
          whileTap={{
            scale: 0.92,
          }}
          style={{
            backgroundColor: action.color,
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all"
        >
          {action.icon}

          {/* Tooltip */}
          <span className="absolute right-16 whitespace-nowrap rounded-lg bg-black px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            {action.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}