// Moneda
export const formatCurrency = (amount, currency = 'USD') => {
  if (amount === null || amount === undefined) return '-';
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Fechas
export const formatDate = (date, format = 'short') => {
  if (!date) return '-';
  
  const d = new Date(date);
  if (isNaN(d.getTime())) return 'Fecha inválida';

  const options = {
    short: { day: '2-digit', month: '2-digit', year: 'numeric' },
    long: { day: 'numeric', month: 'long', year: 'numeric' },
    full: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
  };

  return d.toLocaleDateString('es-ES', options[format] || options.short);
};

export const formatDateTime = (date) => {
  if (!date) return '-';
  return new Date(date).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Teléfono
export const formatPhone = (phone) => {
  if (!phone) return '-';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+${cleaned.slice(0,2)} ${cleaned.slice(2,5)} ${cleaned.slice(5,8)}-${cleaned.slice(8)}`;
  }
  return phone;
};

// Números
export const formatNumber = (number, decimals = 0) => {
  if (number === null || number === undefined) return '-';
  return new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(number);
};

// Porcentaje
export const formatPercentage = (value, decimals = 0) => {
  if (value === null || value === undefined) return '-';
  return `${formatNumber(value, decimals)}%`;
};

// Texto
export const truncateText = (text, maxLength = 50) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

// Dirección
export const formatAddress = (address) => {
  if (!address) return '-';
  const parts = [address.street, address.number, address.city, address.state]
    .filter(Boolean);
  return parts.join(', ');
};