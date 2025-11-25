// src/shared/mocks/contacts.mock.js

export const mockContacts = [
  {
    id: 'contact-001',
    name: 'Roberto López',
    email: 'roberto.lopez@email.com',
    phone: '+5491122334455',
    source: 'zonaprop',
    status: 'interesado',
    createdAt: new Date('2025-11-20T10:00:00'),
    lastActivity: new Date('2025-11-22T14:30:00'),
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    budget: {
      min: 200000,
      max: 300000,
      currency: 'USD'
    },
    requirements: {
      type: 'casa',
      bedrooms: 3,
      location: 'San Isidro'
    },
    notes: 'Buscando casa para familia. Prioriza espacios verdes.',
    dealId: 'deal-001'
  },
  {
    id: 'contact-002',
    name: 'María Sosa',
    email: 'maria.sosa@email.com',
    phone: '+5491144556677',
    source: 'facebook',
    status: 'en_seguimiento',
    createdAt: new Date('2025-11-18T09:00:00'),
    lastActivity: new Date('2025-11-21T16:00:00'),
    agent: {
      id: 'user-005',
      name: 'Lucía Fernández'
    },
    budget: {
      min: 800,
      max: 1500,
      currency: 'USD'
    },
    requirements: {
      type: 'departamento',
      bedrooms: 1,
      location: 'CABA'
    },
    notes: 'Estudiante universitaria. Necesita cerca de transporte.',
    dealId: 'deal-002'
  },
  {
    id: 'contact-003',
    name: 'Carlos Ruiz',
    email: 'carlos.ruiz@email.com',
    phone: '+5491166778899',
    source: 'referido',
    status: 'convertido',
    createdAt: new Date('2025-10-25T08:00:00'),
    lastActivity: new Date('2025-11-15T18:00:00'),
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    budget: {
      min: 150000,
      max: 200000,
      currency: 'USD'
    },
    requirements: {
      type: 'terreno',
      bedrooms: 0,
      location: 'Tigre'
    },
    notes: 'Inversor buscando terreno para desarrollo.',
    dealId: 'deal-003'
  }
];

// Generar 200+ contactos adicionales
for (let i = 4; i <= 200; i++) {
  const sources = ['zonaprop', 'argenprop', 'facebook', 'instagram', 'referido', 'web', 'landing'];
  const statuses = ['nuevo', 'en_seguimiento', 'interesado', 'no_interesado', 'convertido'];
  const names = ['Juan', 'Pedro', 'Laura', 'Sofía', 'Martín', 'Camila', 'Andrés', 'Paula'];
  const surnames = ['García', 'López', 'Martínez', 'Rodríguez', 'Sánchez', 'Pérez'];
  
  mockContacts.push({
    id: `contact-${String(i).padStart(3, '0')}`,
    name: `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`,
    email: `contact${i}@email.com`,
    phone: `+54911${Math.floor(Math.random() * 90000000) + 10000000}`,
    source: sources[Math.floor(Math.random() * sources.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    agent: {
      id: ['user-003', 'user-005', 'user-006'][Math.floor(Math.random() * 3)],
      name: ['Ana Martínez', 'Lucía Fernández', 'Roberto Gómez'][Math.floor(Math.random() * 3)]
    },
    budget: {
      min: Math.floor(Math.random() * 200000) + 50000,
      max: Math.floor(Math.random() * 500000) + 250000,
      currency: 'USD'
    },
    requirements: {
      type: ['casa', 'departamento', 'local'][Math.floor(Math.random() * 3)],
      bedrooms: Math.floor(Math.random() * 5),
      location: ['CABA', 'San Isidro', 'Tigre', 'Olivos'][Math.floor(Math.random() * 4)]
    },
    notes: 'Contacto generado automáticamente.',
    dealId: Math.random() > 0.7 ? `deal-${Math.floor(Math.random() * 50) + 1}` : null
  });
}

export const generateMockContact = (overrides = {}) => {
  const sources = ['zonaprop', 'facebook', 'referido'];
  const statuses = ['nuevo', 'en_seguimiento'];
  const names = ['Juan', 'Pedro', 'Laura', 'Sofía'];
  const surnames = ['García', 'López', 'Martínez', 'Rodríguez'];
  
  const name = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
  
  return {
    id: `contact-${Date.now().toString(36).substr(2, 9)}`,
    name,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@ejemplo.com`,
    phone: `+54911234567${Math.floor(Math.random() * 90) + 10}`,
    source: sources[Math.floor(Math.random() * sources.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createdAt: new Date(),
    lastActivity: new Date(),
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    budget: {
      min: 100000,
      max: 300000,
      currency: 'USD'
    },
    requirements: {
      type: 'casa',
      bedrooms: 3,
      location: 'San Isidro'
    },
    notes: 'Contacto nuevo.',
    dealId: null,
    ...overrides
  };
};