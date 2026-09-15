export const validateName = (name: string): string | null => {
  const trimmed = name.trim();
  if (!trimmed) return "Please enter your name.";
  if (trimmed.length < 2) return "Name must be at least 2 characters.";
  // Check if it contains at least one letter (a-z, A-Z)
  if (!/[a-zA-Z]/.test(trimmed)) return "Name must contain letters.";
  return null;
};

export const validateIndianPhone = (phone: string): string | null => {
  const cleaned = phone.replace(/\s+/g, "");
  if (!cleaned) return "Please enter your mobile number.";
  
  // Regex for Indian mobile numbers: optional +91 or 91 or 0, followed by 10 digits starting with 6-9.
  // Wait, the prompt says: "Accept a valid 10-digit Indian mobile number. If the existing UI includes +91, handle it correctly. Do not allow alphabetic characters. Do not allow obviously invalid numbers."
  // A simple robust regex: ^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$
  // Let's use a cleaner approach: strip +91, 91, 0 from the start, then check if what's left is a 10 digit number starting with 6, 7, 8, or 9.
  let normalized = cleaned;
  if (normalized.startsWith("+91")) normalized = normalized.slice(3);
  else if (normalized.startsWith("91") && normalized.length === 12) normalized = normalized.slice(2);
  else if (normalized.startsWith("0") && normalized.length === 11) normalized = normalized.slice(1);

  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return "Please enter a valid 10-digit mobile number.";
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  const trimmed = email.trim();
  if (!trimmed) return "Please enter your email address.";
  // Practical regex for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
  return null;
};
