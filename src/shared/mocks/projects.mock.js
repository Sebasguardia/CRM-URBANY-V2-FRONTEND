// src/shared/mocks/projects.mock.js

export const mockProjects = [
  {
    id: 'proj-001',
    title: 'URBANY Towers - Puerto Madero',
    description: 'Desarrollo premium de torres residenciales en el corazón de Puerto Madero.',
    status: 'en_construccion',
    location: {
      address: 'Av. Alicia Moreau de Justo 2000, CABA',
      city: 'CABA',
      state: 'Buenos Aires',
      lat: -34.6177,
      lng: -58.3625
    },
    developer: 'Urbany Desarrollos',
    totalUnits: 150,
    availableUnits: 35,
    priceRange: {
      min: 180000,
      max: 450000,
      currency: 'USD'
    },
    completionDate: new Date('2026-06-01'),
    amenities: [
      'piscina', 'gimnasio', 'cowork', 'sala_cine', 'terraza', 'parrilla',
      'sistema_seguridad', 'ascensor'
    ],
    agent: {
      id: 'user-002',
      name: 'Carlos Rodríguez'
    },
    images: {
      facade: 'https://picsum.photos/seed/proj-001-facade/1200/800.jpg',
      amenities: [
        'https://picsum.photos/seed/proj-001-pool/800/600.jpg',
        'https://picsum.photos/seed/proj-001-gym/800/600.jpg'
      ],
      plans: [
        'https://picsum.photos/seed/proj-001-plan-1/600/400.jpg',
        'https://picsum.photos/seed/proj-001-plan-2/600/400.jpg'
      ]
    },
    createdAt: new Date('2025-01-15T08:00:00'),
    updatedAt: new Date('2025-11-22T16:00:00')
  },
  {
    id: 'proj-002',
    title: 'URBANY Village - San Isidro',
    description: 'Barrio privado con casas de estilo moderno y amplios espacios verdes.',
    status: 'pre_venta',
    location: {
      address: 'Ruta 202 Km 45, San Isidro',
      city: 'San Isidro',
      state: 'Buenos Aires',
      lat: -34.4811,
      lng: -58.5575
    },
    developer: 'Urbany Desarrollos',
    totalUnits: 80,
    availableUnits: 80,
    priceRange: {
      min: 220000,
      max: 350000,
      currency: 'USD'
    },
    completionDate: new Date('2027-03-01'),
    amenities: [
      'piscina', 'gimnasio', 'area_juegos', 'area_verde', 'parrilla',
      'sistema_seguridad', 'barrio_privado'
    ],
    agent: {
      id: 'user-003',
      name: 'Ana Martínez'
    },
    images: {
      facade: 'https://picsum.photos/seed/proj-002-facade/1200/800.jpg',
      amenities: [
        'https://picsum.photos/seed/proj-002-pool/800/600.jpg',
        'https://picsum.photos/seed/proj-002-park/800/600.jpg'
      ],
      plans: [
        'https://picsum.photos/seed/proj-002-plan-1/600/400.jpg'
      ]
    },
    createdAt: new Date('2025-03-20T10:30:00'),
    updatedAt: new Date('2025-11-21T14:00:00')
  },
  {
    id: 'proj-003',
    title: 'URBANY Lofts - Palermo',
    description: 'Lofts modernos con diseño industrial en la mejor ubicación de Palermo.',
    status: 'finalizado',
    location: {
      address: 'Cabello 3500, Palermo, CABA',
      city: 'CABA',
      state: 'Buenos Aires',
      lat: -34.5833,
      lng: -58.4167
    },
    developer: 'Urbany Desarrollos',
    totalUnits: 60,
    availableUnits: 5,
    priceRange: {
      min: 98000,
      max: 180000,
      currency: 'USD'
    },
    completionDate: new Date('2024-08-01'),
    amenities: [
      'piscina', 'gimnasio', 'cowork', 'terraza', 'parrilla', 'ascensor'
    ],
    agent: {
      id: 'user-002',
      name: 'Carlos Rodríguez'
    },
    images: {
      facade: 'https://picsum.photos/seed/proj-003-facade/1200/800.jpg',
      amenities: [
        'https://picsum.photos/seed/proj-003-pool/800/600.jpg',
        'https://picsum.photos/seed/proj-003-terrace/800/600.jpg'
      ],
      plans: [
        'https://picsum.photos/seed/proj-003-plan-1/600/400.jpg',
        'https://picsum.photos/seed/proj-003-plan-2/600/400.jpg'
      ]
    },
    createdAt: new Date('2024-02-10T09:00:00'),
    updatedAt: new Date('2025-11-20T12:00:00')
  }
];

// Generar 10+ proyectos adicionales
for (let i = 4; i <= 10; i++) {
  const statuses = ['pre_venta', 'en_construccion', 'finalizado'];
  const cities = ['CABA', 'San Isidro', 'Tigre', 'Vicente López', 'Olivos'];
  const amenities = ['piscina', 'gimnasio', 'cowork', 'sala_cine', 'terraza', 'parrilla', 'sistema_seguridad', 'ascensor', 'area_juegos', 'area_verde'];
  
  mockProjects.push({
    id: `proj-${String(i).padStart(3, '0')}`,
    title: `URBANY ${['Residence', 'Tower', 'Village', 'Lofts', 'Premium'][Math.floor(Math.random() * 5)]} - ${cities[Math.floor(Math.random() * cities.length)]}`,
    description: `Desarrollo de ${['torres residenciales', 'casas de categoría', 'lofts modernos'][Math.floor(Math.random() * 3)]} en excelente ubicación.`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    location: {
      address: `Calle ${Math.floor(Math.random() * 5000) + 1}, ${cities[Math.floor(Math.random() * cities.length)]}`,
      city: cities[Math.floor(Math.random() * cities.length)],
      state: 'Buenos Aires',
      lat: -34.5 + Math.random() * 0.5,
      lng: -58.5 + Math.random() * 0.5
    },
    developer: 'Urbany Desarrollos',
    totalUnits: Math.floor(Math.random() * 200) + 50,
    availableUnits: Math.floor(Math.random() * 100) + 10,
    priceRange: {
      min: Math.floor(Math.random() * 150000) + 50000,
      max: Math.floor(Math.random() * 400000) + 150000,
      currency: 'USD'
    },
    completionDate: new Date(Date.now() + Math.random() * 730 * 24 * 60 * 60 * 1000),
    amenities: amenities.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 6) + 3),
    agent: {
      id: ['user-002', 'user-003'][Math.floor(Math.random() * 2)],
      name: ['Carlos Rodríguez', 'Ana Martínez'][Math.floor(Math.random() * 2)]
    },
    images: {
      facade: `https://picsum.photos/seed/proj-${i}-facade/1200/800.jpg`,
      amenities: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, (_, j) => 
        `https://picsum.photos/seed/proj-${i}-amenity-${j}/800/600.jpg`
      ),
      plans: Array.from({ length: Math.floor(Math.random() * 2) + 1 }, (_, j) => 
        `https://picsum.photos/seed/proj-${i}-plan-${j}/600/400.jpg`
      )
    },
    createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
  });
}

export const generateMockProject = (overrides = {}) => {
  const cities = ['CABA', 'San Isidro', 'Tigre', 'Vicente López'];
  const statuses = ['pre_venta', 'en_construccion'];
  const amenities = ['piscina', 'gimnasio', 'cowork', 'terraza', 'parrilla'];
  
  return {
    id: `proj-${Date.now().toString(36).substr(2, 9)}`,
    title: 'Nuevo Proyecto URBANY',
    description: 'Desarrollo inmobiliario premium.',
    status: statuses[Math.floor(Math.random() * statuses.length)],
    location: {
      address: `Dirección del proyecto`,
      city: cities[Math.floor(Math.random() * cities.length)],
      state: 'Buenos Aires',
      lat: -34.5,
      lng: -58.5
    },
    developer: 'Urbany Desarrollos',
    totalUnits: 100,
    availableUnits: 100,
    priceRange: {
      min: 100000,
      max: 300000,
      currency: 'USD'
    },
    completionDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    amenities: amenities.slice(0, 3),
    agent: {
      id: 'user-002',
      name: 'Carlos Rodríguez'
    },
    images: {
      facade: `https://picsum.photos/seed/proj-${Date.now()}/1200/800.jpg`,
      amenities: [],
      plans: []
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides
  };
};