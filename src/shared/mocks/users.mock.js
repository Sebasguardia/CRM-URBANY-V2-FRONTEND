// src/shared/mocks/users.mock.js

export const mockUsers = [
  {
    id: 'user-001',
    name: 'María González',
    username: 'maria',
    email: 'maria@urbany.com',
    password: 'password123',
    phone: '+5491123456789',
    role: 'ADMIN',
    avatar: 'https://ui-avatars.com/api/?name=María+González&background=3b82f6&color=fff',
    status: 'active',
    lastLogin: new Date('2025-11-20T10:30:00'),
    createdAt: new Date('2025-01-15T08:00:00'),
    permissions: ['*']
  },
  {
    id: 'user-002',
    name: 'Carlos Rodríguez',
    email: 'carlos@urbany.com',
    phone: '+5491187654321',
    role: 'MANAGER',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Rodríguez&background=10b981&color=fff',
    status: 'active',
    lastLogin: new Date('2025-11-21T14:20:00'),
    createdAt: new Date('2025-02-20T09:00:00'),
    permissions: ['DASHBOARD', 'DEALS', 'PROPERTIES', 'VALUATIONS', 'CONTACTS', 'PROJECTS', 'MAPS', 'REPORTS', 'NETWORK_VIEW']
  },
  {
    id: 'user-003',
    name: 'Ana Martínez',
    email: 'ana@urbany.com',
    phone: '+5491155567890',
    role: 'AGENT',
    avatar: 'https://ui-avatars.com/api/?name=Ana+Martínez&background=f59e0b&color=fff',
    status: 'active',
    lastLogin: new Date('2025-11-22T16:45:00'),
    createdAt: new Date('2025-03-10T10:30:00'),
    permissions: ['DASHBOARD', 'DEALS_OWN', 'PROPERTIES', 'ACTIVITIES_OWN', 'VALUATIONS_REQUEST', 'CONTACTS_OWN', 'MAPS']
  },
  {
    id: 'user-004',
    name: 'José Pérez',
    email: 'jose@urbany.com',
    phone: '+5491144432100',
    role: 'VALUER',
    avatar: 'https://ui-avatars.com/api/?name=José+Pérez&background=ef4444&color=fff',
    status: 'busy',
    lastLogin: new Date('2025-11-19T12:00:00'),
    createdAt: new Date('2025-04-05T11:15:00'),
    permissions: ['DASHBOARD', 'VALUATIONS', 'PROPERTIES', 'MAPS']
  },
  {
    id: 'user-005',
    name: 'Lucía Fernández',
    email: 'lucia@urbany.com',
    phone: '+5491133322110',
    role: 'AGENT',
    avatar: 'https://ui-avatars.com/api/?name=Lucía+Fernández&background=06b6d4&color=fff',
    status: 'offline',
    lastLogin: new Date('2025-11-18T09:30:00'),
    createdAt: new Date('2025-05-15T08:45:00'),
    permissions: ['DASHBOARD', 'DEALS_OWN', 'PROPERTIES', 'ACTIVITIES_OWN', 'VALUATIONS_REQUEST', 'CONTACTS_OWN', 'MAPS']
  }
];

export const generateMockUser = (overrides = {}) => {
  const names = ['Laura', 'Diego', 'Sofía', 'Martín', 'Paula', 'Andrés', 'Camila', 'Facundo'];
  const surnames = ['García', 'López', 'Rodríguez', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Vázquez'];
  
  const name = `${names[Math.floor(Math.random() * names.length)]} ${surnames[Math.floor(Math.random() * surnames.length)]}`;
  const id = `user-${Date.now().toString(36).substr(2, 9)}`;
  
  return {
    id,
    name,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@urbany.com`,
    phone: `+54911${Math.floor(Math.random() * 90000000) + 10000000}`,
    role: 'AGENT',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${Math.floor(Math.random()*16777215).toString(16)}&color=fff`,
    status: ['active', 'busy', 'offline'][Math.floor(Math.random() * 3)],
    lastLogin: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    permissions: ['DASHBOARD', 'DEALS_OWN', 'PROPERTIES', 'ACTIVITIES_OWN', 'CONTACTS_OWN', 'MAPS'],
    ...overrides
  };
};