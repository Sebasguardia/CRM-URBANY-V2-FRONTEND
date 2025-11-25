export const ROLES = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  AGENT: 'AGENT',
  VALUER: 'VALUER',
  ASSISTANT: 'ASSISTANT'
};

export const ROLE_LABELS = {
  ADMIN: 'Administrador',
  MANAGER: 'Gerente',
  AGENT: 'Agente',
  VALUER: 'Tasador',
  ASSISTANT: 'Asistente'
};

export const ROLE_PERMISSIONS = {
  ADMIN: ['*'], // Todos los permisos
  MANAGER: [
    'DASHBOARD',
    'DEALS',
    'PROPERTIES',
    'ACTIVITIES',
    'VALUATIONS',
    'CONTACTS',
    'PROJECTS',
    'MAPS',
    'REPORTS',
    'NETWORK_VIEW'
  ],
  AGENT: [
    'DASHBOARD',
    'DEALS_OWN',
    'PROPERTIES',
    'ACTIVITIES_OWN',
    'VALUATIONS_REQUEST',
    'CONTACTS_OWN',
    'MAPS'
  ],
  VALUER: [
    'DASHBOARD',
    'VALUATIONS',
    'PROPERTIES',
    'MAPS'
  ],
  ASSISTANT: [
    'DASHBOARD',
    'CONTACTS',
    'ACTIVITIES'
  ]
};