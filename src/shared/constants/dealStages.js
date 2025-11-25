export const DEAL_STAGES = [
  { 
    value: 'nuevo', 
    label: 'Nuevo', 
    color: 'info', 
    icon: 'star',
    description: 'Lead recién ingresado'
  },
  { 
    value: 'contactado', 
    label: 'Contactado', 
    color: 'primary', 
    icon: 'phone',
    description: 'Primer contacto establecido'
  },
  { 
    value: 'tasacion', 
    label: 'Tasación', 
    color: 'warning', 
    icon: 'edit',
    description: 'Solicitando tasación'
  },
  { 
    value: 'visitado', 
    label: 'Visitado', 
    color: 'primary', 
    icon: 'map-pin',
    description: 'Visita realizada'
  },
  { 
    value: 'oferta', 
    label: 'Oferta', 
    color: 'success', 
    icon: 'dollar-sign',
    description: 'Oferta presentada'
  },
  { 
    value: 'cerrado_ganado', 
    label: 'Cerrado (Ganado)', 
    color: 'success', 
    icon: 'check-circle',
    description: 'Negocio concretado'
  },
  { 
    value: 'cerrado_perdido', 
    label: 'Cerrado (Perdido)', 
    color: 'danger', 
    icon: 'x-circle',
    description: 'Negocio perdido'
  }
];

export const STAGE_TRANSITIONS = {
  nuevo: ['contactado'],
  contactado: ['tasacion'],
  tasacion: ['visitado'],
  visitado: ['oferta'],
  oferta: ['cerrado_ganado', 'cerrado_perdido']
};