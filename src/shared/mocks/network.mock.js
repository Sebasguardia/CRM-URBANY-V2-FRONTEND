// src/shared/mocks/network.mock.js

export const mockNetwork = [
  {
    id: 'net-001',
    user: {
      id: 'user-003',
      name: 'Ana Martínez',
      email: 'ana@urbany.com',
      phone: '+5491155567890',
      avatar: 'https://ui-avatars.com/api/?name=Ana+Martínez&background=f59e0b&color=fff',
      role: 'AGENT'
    },
    status: 'active',
    commissionRate: 5,
    propertiesCount: 28,
    dealsCount: 12,
    performance: {
      monthly: 450000,
      quarterly: 1350000,
      yearly: 5200000
    },
    joinedAt: new Date('2025-03-10T10:30:00'),
    lastActivity: new Date('2025-11-22T16:45:00')
  },
  {
    id: 'net-002',
    user: {
      id: 'user-005',
      name: 'Lucía Fernández',
      email: 'lucia@urbany.com',
      phone: '+5491133322110',
      avatar: 'https://ui-avatars.com/api/?name=Lucía+Fernández&background=06b6d4&color=fff',
      role: 'AGENT'
    },
    status: 'active',
    commissionRate: 5,
    propertiesCount: 34,
    dealsCount: 18,
    performance: {
      monthly: 380000,
      quarterly: 1140000,
      yearly: 4800000
    },
    joinedAt: new Date('2025-05-15T08:45:00'),
    lastActivity: new Date('2025-11-21T11:30:00')
  },
  {
    id: 'net-003',
    user: {
      id: 'user-004',
      name: 'José Pérez',
      email: 'jose@urbany.com',
      phone: '+5491144432100',
      avatar: 'https://ui-avatars.com/api/?name=José+Pérez&background=ef4444&color=fff',
      role: 'VALUER'
    },
    status: 'active',
    commissionRate: 3,
    propertiesCount: 0,
    dealsCount: 0,
    performance: {
      monthly: 0,
      quarterly: 0,
      yearly: 0
    },
    joinedAt: new Date('2025-04-05T11:15:00'),
    lastActivity: new Date('2025-11-19T12:00:00'),
    valuationsCount: 45
  }
];

// Generar 15+ agentes adicionales
for (let i = 4; i <= 15; i++) {
  const roles = ['AGENT', 'AGENT', 'AGENT', 'VALUER'];
  const statuses = ['active', 'active', 'busy', 'offline'];
  const names = ['Roberto', 'Fernando', 'Silvia', 'María', 'Jorge', 'Patricia', 'Diego', 'Carolina'];
  const surnames = ['Gómez', 'Vázquez', 'Hernández', 'González', 'Ramírez', 'Flores'];
  
  const name = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
  const role = roles[Math.floor(Math.random() * roles.length)];
  
  mockNetwork.push({
    id: `net-${String(i).padStart(3, '0')}`,
    user: {
      id: `user-${String(i + 5).padStart(3, '0')}`,
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@urbany.com`,
      phone: `+54911${Math.floor(Math.random() * 90000000) + 10000000}`,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${Math.floor(Math.random()*16777215).toString(16)}&color=fff`,
      role
    },
    status: statuses[Math.floor(Math.random() * statuses.length)],
    commissionRate: Math.floor(Math.random() * 3) + 4,
    propertiesCount: role === 'AGENT' ? Math.floor(Math.random() * 40) + 10 : 0,
    dealsCount: role === 'AGENT' ? Math.floor(Math.random() * 20) + 5 : 0,
    performance: {
      monthly: role === 'AGENT' ? Math.floor(Math.random() * 400000) + 100000 : 0,
      quarterly: role === 'AGENT' ? Math.floor(Math.random() * 1200000) + 300000 : 0,
      yearly: role === 'AGENT' ? Math.floor(Math.random() * 4800000) + 1200000 : 0
    },
    joinedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    lastActivity: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    valuationsCount: role === 'VALUER' ? Math.floor(Math.random() * 50) + 20 : 0
  });
}

export const generateMockAgent = (overrides = {}) => {
  const roles = ['AGENT', 'VALUER'];
  const statuses = ['active', 'busy'];
  const names = ['Nuevo', 'Agente', 'Usuario'];
  const surnames = ['Test', 'Demo', 'Mock'];
  
  const name = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
  const role = roles[Math.floor(Math.random() * roles.length)];
  
  return {
    id: `net-${Date.now().toString(36).substr(2, 9)}`,
    user: {
      id: `user-${Date.now().toString(36).substr(2, 9)}`,
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@urbany.com`,
      phone: `+54911789012${Math.floor(Math.random() * 90) + 10}`,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff`,
      role
    },
    status: statuses[Math.floor(Math.random() * statuses.length)],
    commissionRate: 5,
    propertiesCount: 0,
    dealsCount: 0,
    performance: {
      monthly: 0,
      quarterly: 0,
      yearly: 0
    },
    joinedAt: new Date(),
    lastActivity: new Date(),
    ...overrides
  };
};