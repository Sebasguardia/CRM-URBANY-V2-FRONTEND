// Diferencia en días
export const daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
};

// Días desde hoy
export const daysFromToday = (date) => {
  const today = new Date();
  return daysBetween(today, new Date(date));
};

// Fecha límite (para vencimientos)
export const isExpired = (date) => {
  return new Date(date) < new Date();
};

// Próximos N días
export const withinNextDays = (date, days) => {
  const targetDate = new Date(date);
  const today = new Date();
  const limitDate = new Date(today.setDate(today.getDate() + days));
  return targetDate <= limitDate && targetDate >= new Date();
};

// Formato relativo (hoy, ayer, mañana)
export const formatRelativeDate = (date) => {
  const targetDate = new Date(date);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (targetDate.toDateString() === today.toDateString()) return 'Hoy';
  if (targetDate.toDateString() === yesterday.toDateString()) return 'Ayer';
  if (targetDate.toDateString() === tomorrow.toDateString()) return 'Mañana';
  
  return formatDate(date, 'short');
};

// Inicio de semana
export const getStartOfWeek = (date = new Date()) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(d.setDate(diff));
};

// Fin de mes
export const getEndOfMonth = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};