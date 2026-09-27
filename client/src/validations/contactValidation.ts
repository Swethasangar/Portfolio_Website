export const validateName = (name: string): string => {
  if (!name.trim()) {
    return "";
  }

  if (name.trim().length < 3) {
    return "Name must be at least 3 characters";
  }

  return "";
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address";
  }

  return "";
};

export const validatePhone = (phone: string): string => {
  if (!phone.trim()) {
    return "";
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    return "Please enter a valid 10-digit phone number";
  }

  return "";
};

export const validateMessage = (message: string): string => {
  if (!message.trim()) {
    return "";
  }

  if (message.trim().length < 10) {
    return "Message must be at least 10 characters";
  }

  return "";
};