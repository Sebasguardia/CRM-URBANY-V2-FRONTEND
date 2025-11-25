// src/shared/mocks/deals.mock.js

export const mockDeals = [
  {
    id: 'deal-001',
    title: 'Venta Casa San Isidro - Familia López',
    contact: {
      id: 'contact-005',
      name: 'Roberto López',
      email: 'roberto.lopez@email.com',
      phone: '+5491122334455'
    },
    property: {
      id: 'prop-001',
      title: 'Hermosa Casa en San Isidro'
    },
    stage: 'nuevo',
    value: 250000,
    currency: 'USD',
    commission: 5,
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    activities: ['activity-001', 'activity-002'],
    createdAt: new Date('2025-11-20T10:00:00'),
    updatedAt: new Date('2025-11-20T14:30:00'),
    expectedCloseDate: new Date('2025-12-15'),
    source: 'zonaprop'
  },
  {
    id: 'deal-002',
    title: 'Alquiler Depto 2 Ambientes - Estudiante Universitaria',
    contact: {
      id: 'contact-012',
      name: 'María Sosa',
      email: 'maria.sosa@email.com',
      phone: '+5491144556677'
    },
    property: {
      id: 'prop-002',
      title: 'Moderno Departamento 2 Ambientes'
    },
    stage: 'contactado',
    value: 1200,
    currency: 'USD',
    commission: 8,
    agent: {
      id: 'user-005',
      name: 'Lucía Fernández'
    },
    activities: ['activity-003'],
    createdAt: new Date('2025-11-18T09:00:00'),
    updatedAt: new Date('2025-11-22T16:00:00'),
    expectedCloseDate: new Date('2025-12-01'),
    source: 'facebook'
  },
  {
    id: 'deal-003',
    title: 'Venta Terreno - Inversor',
    contact: {
      id: 'contact-008',
      name: 'Carlos Ruiz',
      email: 'carlos.ruiz@email.com',
      phone: '+5491166778899'
    },
    property: {
      id: 'prop-003',
      title: 'Terreno Ideal para Construir'
    },
    stage: 'cerrado_ganado',
    value: 180000,
    currency: 'USD',
    commission: 4,
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    activities: ['activity-005', 'activity-006', 'activity-007'],
    createdAt: new Date('2025-10-25T08:00:00'),
    updatedAt: new Date('2025-11-15T18:00:00'),
    expectedCloseDate: new Date('2025-11-15'),
    source: 'referido',
    closedDate: new Date('2025-11-15')
  }
];

// Generar 50+ deals adicionales
for (let i = 4; i <= 50; i++) {
  const stages = ['nuevo', 'contactado', 'tasacion', 'visitado', 'oferta', 'cerrado_ganado', 'cerrado_perdido'];
  const sources = ['zonaprop', 'argenprop', 'facebook', 'instagram', 'referido', 'web', 'landing'];
  
  mockDeals.push({
    id: `deal-${String(i).padStart(3, '0')}`,
    title: `Deal ${i} - ${['Venta', 'Alquiler'][Math.floor(Math.random() * 2)]} ${['Casa', 'Depto', 'Local'][Math.floor(Math.random() * 3)]}`,
    contact: {
      id: `contact-${Math.floor(Math.random() * 50) + 1}`,
      name: ['Juan', 'Pedro', 'Laura', 'Sofía', 'Martín', 'Camila'][Math.floor(Math.random() * 6)] + ' ' + ['García', 'López', 'Martínez', 'Rodríguez'][Math.floor(Math.random() * 4)],
      email: `client${i}@email.com`,
      phone: `+54911${Math.floor(Math.random() * 90000000) + 10000000}`
    },
    property: {
      id: `prop-${Math.floor(Math.random() * 100) + 1}`,
      title: `Propiedad ${Math.floor(Math.random() * 100) + 1}`
    },
    stage: stages[Math.floor(Math.random() * stages.length)],
    value: Math.floor(Math.random() * 500000) + 50000,
    currency: 'USD',
    commission: Math.floor(Math.random() * 5) + 3,
    agent: {
      id: ['user-003', 'user-005', 'user-006'][Math.floor(Math.random() * 3)],
      name: ['Ana Martínez', 'Lucía Fernández', 'Roberto Gómez'][Math.floor(Math.random() * 3)]
    },
    activities: [`activity-${Math.floor(Math.random() * 300) + 1}`],
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    expectedCloseDate: new Date(Date.now() + Math.random() * 60 * 24 * 60 * 60 * 1000),
    source: sources[Math.floor(Math.random() * sources.length)]
  });
}

export const generateMockDeal = (overrides = {}) => {
  const stages = ['nuevo', 'contactado', 'tasacion', 'visitado', 'oferta', 'cerrado_ganado', 'cerrado_perdido'];
  const sources = ['zonaprop', 'argenprop', 'facebook', 'instagram', 'referido'];
  
  return {
    id: `deal-${Date.now().toString(36).substr(2, 9)}`,
    title: 'Nuevo Deal Generado',
    contact: {
      id: 'contact-001',
      name: 'Cliente Ejemplo',
      email: 'cliente@ejemplo.com',
      phone: '+5491123456789'
    },
    property: null,
    stage: 'nuevo',
    value: 0,
    currency: 'USD',
    commission: 5,
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    activities: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    expectedCloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    source: sources[Math.floor(Math.random() * sources.length)],
    ...overrides
  };
};