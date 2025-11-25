// src/shared/mocks/valuations.mock.js

export const mockValuations = [
  {
    id: 'val-001',
    title: 'Tasación Casa San Isidro',
    requester: {
      name: 'Roberto López',
      email: 'roberto.lopez@email.com',
      phone: '+5491122334455'
    },
    property: {
      type: 'casa',
      address: 'Av. Ricardo Balbín 1234, San Isidro',
      bedrooms: 4,
      bathrooms: 3,
      area: 280
    },
    status: 'completada',
    agent: {
      id: 'user-004',
      name: 'José Pérez'
    },
    estimatedValue: 245000,
    currency: 'USD',
    reportUrl: 'https://example.com/val-001-report.pdf',
    notes: 'Propiedad en excelente estado. Mercado estable en la zona.',
    requestedAt: new Date('2025-11-10T09:00:00'),
    completedAt: new Date('2025-11-15T15:00:00')
  },
  {
    id: 'val-002',
    title: 'Tasación Departamento Centro',
    requester: {
      name: 'Ana García',
      email: 'ana.garcia@email.com',
      phone: '+5491155667788'
    },
    property: {
      type: 'departamento',
      address: 'Calle Florida 567, CABA',
      bedrooms: 2,
      bathrooms: 1,
      area: 85
    },
    status: 'en_proceso',
    agent: {
      id: 'user-004',
      name: 'José Pérez'
    },
    estimatedValue: null,
    currency: 'USD',
    reportUrl: null,
    notes: 'Visita agendada para el 28/11.',
    requestedAt: new Date('2025-11-20T11:00:00'),
    completedAt: null
  },
  {
    id: 'val-003',
    title: 'Tasación Local Comercial',
    requester: {
      name: 'Martín Torres',
      email: 'martin.torres@email.com',
      phone: '+5491177889900'
    },
    property: {
      type: 'local',
      address: 'Av. Santa Fe 2345, CABA',
      bedrooms: 0,
      bathrooms: 2,
      area: 120
    },
    status: 'pendiente',
    agent: null,
    estimatedValue: null,
    currency: 'USD',
    reportUrl: null,
    notes: 'Solicitud recibida. Pendiente asignar tasador.',
    requestedAt: new Date('2025-11-22T14:00:00'),
    completedAt: null
  }
];

// Generar 30+ tasaciones adicionales
for (let i = 4; i <= 30; i++) {
  const statuses = ['pendiente', 'en_proceso', 'completada', 'cancelada'];
  const types = ['casa', 'departamento', 'local', 'terreno'];
  
  mockValuations.push({
    id: `val-${String(i).padStart(3, '0')}`,
    title: `Tasación ${types[Math.floor(Math.random() * types.length)]} ${Math.floor(Math.random() * 100) + 1}`,
    requester: {
      name: `Cliente ${i}`,
      email: `client${i}@email.com`,
      phone: `+54911234567${Math.floor(Math.random() * 90) + 10}`
    },
    property: {
      type: types[Math.floor(Math.random() * types.length)],
      address: `Calle ${Math.floor(Math.random() * 5000) + 1}, ${['CABA', 'San Isidro', 'Tigre'][Math.floor(Math.random() * 3)]}`,
      bedrooms: Math.floor(Math.random() * 6),
      bathrooms: Math.floor(Math.random() * 4),
      area: Math.floor(Math.random() * 500) + 50
    },
    status: statuses[Math.floor(Math.random() * statuses.length)],
    agent: Math.random() > 0.2 ? {
      id: 'user-004',
      name: 'José Pérez'
    } : null,
    estimatedValue: Math.random() > 0.5 ? Math.floor(Math.random() * 500000) + 50000 : null,
    currency: 'USD',
    reportUrl: Math.random() > 0.6 ? `https://example.com/val-${i}-report.pdf` : null,
    notes: `Notas de tasación ${i}. ${['Pendiente visita', 'En proceso de evaluación', 'Completada con éxito'][Math.floor(Math.random() * 3)]}.`,
    requestedAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000),
    completedAt: Math.random() > 0.5 ? new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000) : null
  });
}

export const generateMockValuation = (overrides = {}) => {
  return {
    id: `val-${Date.now().toString(36).substr(2, 9)}`,
    title: 'Nueva tasación',
    requester: {
      name: 'Nombre Cliente',
      email: 'cliente@ejemplo.com',
      phone: '+5491123456789'
    },
    property: {
      type: 'casa',
      address: 'Dirección a tasar',
      bedrooms: 3,
      bathrooms: 2,
      area: 200
    },
    status: 'pendiente',
    agent: null,
    estimatedValue: null,
    currency: 'USD',
    reportUrl: null,
    notes: 'Pendiente asignación.',
    requestedAt: new Date(),
    completedAt: null,
    ...overrides
  };
};