// src/shared/mocks/activities.mock.js

import { ACTIVITY_TYPES } from '../constants/activityTypes';

export const mockActivities = [
  {
    id: 'activity-001',
    title: 'Llamada inicial - Presentación de servicios',
    type: 'llamada',
    date: new Date('2025-11-20T11:00:00'),
    duration: 30,
    notes: 'Cliente interesado en casa en San Isidro. Presupuesto aproximado USD 250k.',
    deal: {
      id: 'deal-001',
      title: 'Venta Casa San Isidro - Familia López'
    },
    property: null,
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    completed: true,
    createdAt: new Date('2025-11-20T11:30:00')
  },
  {
    id: 'activity-002',
    title: 'Visita a propiedad',
    type: 'visita',
    date: new Date('2025-11-22T15:00:00'),
    duration: 60,
    notes: 'Visita realizada con éxito. Cliente muy interesado, quiere hacer una oferta.',
    deal: {
      id: 'deal-001',
      title: 'Venta Casa San Isidro - Familia López'
    },
    property: {
      id: 'prop-001',
      title: 'Hermosa Casa en San Isidro'
    },
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    completed: true,
    createdAt: new Date('2025-11-22T16:00:00')
  },
  {
    id: 'activity-003',
    title: 'Envío de documentación',
    type: 'correo',
    date: new Date('2025-11-19T10:00:00'),
    duration: 15,
    notes: 'Enviados contrato de alquiler y requisitos. Cliente revisando.',
    deal: {
      id: 'deal-002',
      title: 'Alquiler Depto 2 Ambientes - Estudiante Universitaria'
    },
    property: null,
    agent: {
      id: 'user-005',
      name: 'Lucía Fernández'
    },
    completed: true,
    createdAt: new Date('2025-11-19T10:15:00')
  },
  {
    id: 'activity-004',
    title: 'Tasación de propiedad',
    type: 'tasacion',
    date: new Date('2025-11-25T09:00:00'),
    duration: 120,
    notes: 'Tasación realizada por José Pérez. Valor: USD 180.000',
    deal: null,
    property: {
      id: 'prop-045',
      title: 'Propiedad a Tasar'
    },
    agent: {
      id: 'user-004',
      name: 'José Pérez'
    },
    completed: false,
    createdAt: new Date('2025-11-24T16:00:00')
  }
];

// Generar 300+ actividades adicionales
for (let i = 5; i <= 300; i++) {
  const types = ACTIVITY_TYPES.map(t => t.value);
  const agents = ['user-003', 'user-005', 'user-006'];
  
  mockActivities.push({
    id: `activity-${String(i).padStart(3, '0')}`,
    title: `Actividad ${i} - ${types[Math.floor(Math.random() * types.length)]}`,
    type: types[Math.floor(Math.random() * types.length)],
    date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000),
    duration: Math.floor(Math.random() * 180) + 15,
    notes: `Nota de actividad ${i}. ${['Llamar al cliente', 'Revisar documentación', 'Enviar email', 'Coordinar visita'][Math.floor(Math.random() * 4)]}.`,
    deal: Math.random() > 0.3 ? {
      id: `deal-${Math.floor(Math.random() * 50) + 1}`,
      title: `Deal ${Math.floor(Math.random() * 50) + 1}`
    } : null,
    property: Math.random() > 0.7 ? {
      id: `prop-${Math.floor(Math.random() * 100) + 1}`,
      title: `Propiedad ${Math.floor(Math.random() * 100) + 1}`
    } : null,
    agent: {
      id: agents[Math.floor(Math.random() * agents.length)],
      name: ['Ana Martínez', 'Lucía Fernández', 'Roberto Gómez'][Math.floor(Math.random() * 3)]
    },
    completed: Math.random() > 0.6,
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
  });
}

export const generateMockActivity = (overrides = {}) => {
  const types = ACTIVITY_TYPES.map(t => t.value);
  
  return {
    id: `activity-${Date.now().toString(36).substr(2, 9)}`,
    title: 'Nueva actividad',
    type: types[Math.floor(Math.random() * types.length)],
    date: new Date(),
    duration: 30,
    notes: 'Nota de actividad.',
    deal: null,
    property: null,
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    completed: false,
    createdAt: new Date(),
    ...overrides
  };
};