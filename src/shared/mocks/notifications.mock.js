// src/shared/mocks/notifications.mock.js

export const mockNotifications = [
  {
    id: 'notif-001',
    userId: 'user-003',
    title: 'Nuevo lead asignado',
    message: 'Se te ha asignado un nuevo deal: "Venta Casa San Isidro - Familia López"',
    type: 'deal',
    read: false,
    createdAt: new Date('2025-11-20T10:00:00'),
    action: {
      type: 'navigate',
      target: '/deals/deal-001'
    }
  },
  {
    id: 'notif-002',
    userId: 'user-003',
    title: 'Tasación completada',
    message: 'José Pérez ha completado la tasación de tu propiedad.',
    type: 'valuation',
    read: true,
    createdAt: new Date('2025-11-15T15:00:00'),
    action: {
      type: 'navigate',
      target: '/valuations/val-001'
    }
  },
  {
    id: 'notif-003',
    userId: 'user-004',
    title: 'Nueva solicitud de tasación',
    message: 'Tienes una nueva solicitud de tasación pendiente.',
    type: 'valuation',
    read: false,
    createdAt: new Date('2025-11-22T14:00:00'),
    action: {
      type: 'navigate',
      target: '/valuations/val-003'
    }
  },
  {
    id: 'notif-004',
    userId: 'user-005',
    title: 'Recordatorio de actividad',
    message: 'Tienes una visita programada para hoy a las 15:00.',
    type: 'activity',
    read: false,
    createdAt: new Date('2025-11-22T09:00:00'),
    action: {
      type: 'navigate',
      target: '/activities'
    }
  },
  {
    id: 'notif-005',
    userId: 'user-002',
    title: 'Reporte generado',
    message: 'El reporte mensual de ventas está listo para descargar.',
    type: 'report',
    read: true,
    createdAt: new Date('2025-11-01T08:00:00'),
    action: {
      type: 'download',
      target: '/reports/monthly-2025-11.pdf'
    }
  }
];

// Generar 50+ notificaciones adicionales
for (let i = 6; i <= 50; i++) {
  const types = ['deal', 'valuation', 'activity', 'report', 'system'];
  const userIds = ['user-003', 'user-005', 'user-004', 'user-002'];
  
  mockNotifications.push({
    id: `notif-${String(i).padStart(3, '0')}`,
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: `Notificación ${i}`,
    message: `Mensaje de la notificación ${i}. ${['Nueva actividad', 'Tarea completada', 'Recordatorio', 'Actualización disponible'][Math.floor(Math.random() * 4)]}.`,
    type: types[Math.floor(Math.random() * types.length)],
    read: Math.random() > 0.3,
    createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
    action: {
      type: Math.random() > 0.5 ? 'navigate' : 'download',
      target: '#'
    }
  });
}

export const generateMockNotification = (userId, overrides = {}) => {
  const types = ['deal', 'valuation', 'activity', 'report', 'system'];
  
  return {
    id: `notif-${Date.now().toString(36).substr(2, 9)}`,
    userId,
    title: 'Nueva notificación',
    message: 'Mensaje de notificación.',
    type: types[Math.floor(Math.random() * types.length)],
    read: false,
    createdAt: new Date(),
    action: {
      type: 'navigate',
      target: '#'
    },
    ...overrides
  };
};