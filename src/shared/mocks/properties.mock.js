// src/shared/mocks/properties.mock.js

import { PROPERTY_TYPES } from '../constants/propertyTypes';
import { STATUS_COLORS } from '../constants/statusColors';

const generateAddress = () => {
  const streets = [
    'Av. Ricardo Balbín', 'Calle 123', 'Av. de Mayo', 'Calle 9 de Julio',
    'Av. Rivadavia', 'Calle San Martín', 'Av. Belgrano', 'Calle Moreno',
    'Av. Pellegrini', 'Calle Sarmiento', 'Av. Santa Fe', 'Calle Florida'
  ];
  const cities = ['CABA', 'San Isidro', 'Tigre', 'Vicente López', 'Olivos', 'La Lucila'];
  const states = ['Buenos Aires'];
  
  const street = streets[Math.floor(Math.random() * streets.length)];
  const number = Math.floor(Math.random() * 9000) + 100;
  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const zip = `B${Math.floor(Math.random() * 9000) + 1000}`;
  
  return {
    street,
    number,
    city,
    state,
    zip,
    full: `${street} ${number}, ${city}, ${state}`
  };
};

const generateImages = (count = 3) => {
  return Array.from({ length: count }, (_, i) => 
    `https://picsum.photos/seed/prop-${Date.now()}-${i}/800/600.jpg`
  );
};

const generateFeatures = () => {
  const allFeatures = [
    'piscina', 'quincho', 'parrilla', 'jardin', 'cochera', 'pileta',
    'terraza', 'balcon', 'lavadero', 'sistema_seguridad', 'cctv'
  ];
  const count = Math.floor(Math.random() * 6);
  return allFeatures.sort(() => 0.5 - Math.random()).slice(0, count);
};

export const mockProperties = [
  {
    id: 'prop-001',
    title: 'Hermosa Casa en San Isidro',
    type: 'casa',
    operation: 'venta',
    price: 250000,
    currency: 'USD',
    address: generateAddress(),
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: 280,
    areaCovered: 220,
    description: 'Casa de categoría en el corazón de San Isidro. Excelente estado, luminosa y con amplios espacios.',
    status: 'disponible',
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    images: generateImages(),
    features: generateFeatures(),
    project: null,
    createdAt: new Date('2025-10-15T10:00:00'),
    updatedAt: new Date('2025-11-20T14:30:00'),
    views: 1250,
    favorites: 45
  },
  {
    id: 'prop-002',
    title: 'Moderno Departamento 2 Ambientes',
    type: 'departamento',
    operation: 'alquiler',
    price: 1200,
    currency: 'USD',
    address: generateAddress(),
    bedrooms: 1,
    bathrooms: 1,
    parking: 0,
    area: 65,
    areaCovered: 65,
    description: 'Departamento moderno en excelente ubicación, cercano a transporte y comercios.',
    status: 'disponible',
    agent: {
      id: 'user-005',
      name: 'Lucía Fernández'
    },
    images: generateImages(),
    features: generateFeatures(),
    project: null,
    createdAt: new Date('2025-11-01T09:15:00'),
    updatedAt: new Date('2025-11-22T11:00:00'),
    views: 890,
    favorites: 32
  },
  {
    id: 'prop-003',
    title: 'Terreno Ideal para Construir',
    type: 'terreno',
    operation: 'venta',
    price: 180000,
    currency: 'USD',
    address: generateAddress(),
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    area: 850,
    areaCovered: 0,
    description: 'Terreno plano, ubicado en zona residencial, ideal para proyecto de vivienda unifamiliar.',
    status: 'reservado',
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    images: generateImages(2),
    features: [],
    project: null,
    createdAt: new Date('2025-09-20T08:30:00'),
    updatedAt: new Date('2025-11-18T16:45:00'),
    views: 2340,
    favorites: 67
  }
];

// Generar 100+ propiedades adicionales
for (let i = 4; i <= 100; i++) {
  const types = PROPERTY_TYPES.map(t => t.value);
  const operations = ['venta', 'alquiler'];
  const statuses = ['disponible', 'reservado', 'vendido', 'alquilado'];
  
  mockProperties.push({
    id: `prop-${String(i).padStart(3, '0')}`,
    title: `${types[Math.floor(Math.random() * types.length)]} en ${generateAddress().city} ${Math.floor(Math.random() * 5) + 1}`,
    type: types[Math.floor(Math.random() * types.length)],
    operation: operations[Math.floor(Math.random() * operations.length)],
    price: Math.floor(Math.random() * 500000) + 50000,
    currency: 'USD',
    address: generateAddress(),
    bedrooms: Math.floor(Math.random() * 6),
    bathrooms: Math.floor(Math.random() * 4) + 1,
    parking: Math.floor(Math.random() * 3),
    area: Math.floor(Math.random() * 500) + 50,
    areaCovered: Math.floor(Math.random() * 400) + 50,
    description: `Excelente ${types[Math.floor(Math.random() * types.length)]} ubicado en zona privilegiada. ${['Muy luminoso', 'Cercano a transporte', 'Excelente estado', 'Moderno'][Math.floor(Math.random() * 4)]}.`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    agent: {
      id: ['user-003', 'user-005', 'user-006'][Math.floor(Math.random() * 3)],
      name: ['Ana Martínez', 'Lucía Fernández', 'Roberto Gómez'][Math.floor(Math.random() * 3)]
    },
    images: generateImages(Math.floor(Math.random() * 5) + 2),
    features: generateFeatures(),
    project: Math.random() > 0.8 ? `proj-${Math.floor(Math.random() * 5) + 1}` : null,
    createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
    views: Math.floor(Math.random() * 5000),
    favorites: Math.floor(Math.random() * 200)
  });
}

export const generateMockProperty = (overrides = {}) => {
  const types = PROPERTY_TYPES.map(t => t.value);
  const operations = ['venta', 'alquiler'];
  const statuses = ['disponible', 'reservado', 'vendido', 'alquilado'];
  
  return {
    id: `prop-${Date.now().toString(36).substr(2, 9)}`,
    title: `${types[Math.floor(Math.random() * types.length)]} en ${generateAddress().city}`,
    type: types[Math.floor(Math.random() * types.length)],
    operation: operations[Math.floor(Math.random() * operations.length)],
    price: Math.floor(Math.random() * 500000) + 50000,
    currency: 'USD',
    address: generateAddress(),
    bedrooms: Math.floor(Math.random() * 6),
    bathrooms: Math.floor(Math.random() * 4) + 1,
    parking: Math.floor(Math.random() * 3),
    area: Math.floor(Math.random() * 500) + 50,
    areaCovered: Math.floor(Math.random() * 400) + 50,
    description: 'Propiedad generada automáticamente.',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    images: generateImages(),
    features: generateFeatures(),
    project: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 0,
    favorites: 0,
    ...overrides
  };
};