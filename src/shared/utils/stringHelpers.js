// Slug para URLs
export const slugify = (text) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};

// Capitalizar primera letra
export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Capitalizar cada palabra
export const capitalizeWords = (text) => {
  if (!text) return '';
  return text.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
};

// Generar ID único
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Extraer iniciales
export const getInitials = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  const firstName = parts[0] || '';
  const lastName = parts[parts.length - 1] || '';
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

// Limpiar texto (quitar espacios extras)
export const cleanText = (text) => {
  return text.replace(/\s+/g, ' ').trim();
};