// Email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Teléfono (acepta formato internacional)
export const isValidPhone = (phone) => {
  const regex = /^\+?[\d\s\-()]{10,}$/;
  return regex.test(phone);
};

// URL
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// DNI/Documento
export const isValidDocument = (doc) => {
  const regex = /^[0-9]{7,9}$/;
  return regex.test(doc);
};

// Precio
export const isValidPrice = (price) => {
  return !isNaN(price) && parseFloat(price) >= 0;
};

// Código postal
export const isValidPostalCode = (code) => {
  const regex = /^[0-9]{4,5}$/;
  return regex.test(code);
};

// Formulario completo
export const validateForm = (fields, rules) => {
  const errors = {};

  Object.keys(rules).forEach(field => {
    const value = fields[field];
    const fieldRules = rules[field];

    if (fieldRules?.required && (!value || value.toString().trim() === '')) {
      errors[field] = 'Este campo es requerido';
    }

    if (value && fieldRules?.email && !isValidEmail(value)) {
      errors[field] = 'Email inválido';
    }

    if (value && fieldRules?.phone && !isValidPhone(value)) {
      errors[field] = 'Teléfono inválido';
    }

    if (value && fieldRules?.minLength && value.length < fieldRules.minLength) {
      errors[field] = `Mínimo ${fieldRules.minLength} caracteres`;
    }

    if (value && fieldRules?.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = `Máximo ${fieldRules.maxLength} caracteres`;
    }

    if (value && fieldRules?.custom) {
      const customError = fieldRules.custom(value, fields);
      if (customError) errors[field] = customError;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};