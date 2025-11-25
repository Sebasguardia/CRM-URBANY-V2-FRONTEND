export const STATUS_COLORS = {
  // General
  activo: { bg: '#d1fae5', text: '#047857' },
  inactivo: { bg: '#fee2e2', text: '#b91c1c' },
  pendiente: { bg: '#fef3c7', text: '#d97706' },
  completado: { bg: '#d1fae5', text: '#047857' },
  cancelado: { bg: '#fee2e2', text: '#b91c1c' },
  
  // Deal stages
  nuevo: { bg: '#cffafe', text: '#0891b2' },
  contactado: { bg: '#dbeafe', text: '#1d4ed8' },
  tasacion: { bg: '#fef3c7', text: '#d97706' },
  visitado: { bg: '#dbeafe', text: '#1d4ed8' },
  oferta: { bg: '#d1fae5', text: '#047857' },
  cerrado_ganado: { bg: '#d1fae5', text: '#047857' },
  cerrado_perdido: { bg: '#fee2e2', text: '#b91c1c' },
  
  // Property status
  disponible: { bg: '#d1fae5', text: '#047857' },
  reservado: { bg: '#fef3c7', text: '#d97706' },
  vendido: { bg: '#dbeafe', text: '#1d4ed8' },
  alquilado: { bg: '#dbeafe', text: '#1d4ed8' },
  
  // Amenity status
  incluido: { bg: '#d1fae5', text: '#047857' },
  no_incluido: { bg: '#f3f4f6', text: '#6b7280' },
  
  // Agent status
  online: { bg: '#d1fae5', text: '#047857' },
  offline: { bg: '#f3f4f6', text: '#6b7280' },
  busy: { bg: '#fef3c7', text: '#d97706' }
};

// Helper para obtener estilo
export const getStatusStyle = (status) => {
  const colors = STATUS_COLORS[status] || STATUS_COLORS.inactivo;
  return {
    backgroundColor: colors.bg,
    color: colors.text
  };
};