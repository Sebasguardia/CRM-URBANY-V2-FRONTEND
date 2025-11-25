export const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'layout-dashboard',
    feature: 'DASHBOARD',
    roles: ['ADMIN', 'MANAGER', 'AGENT', 'VALUER']
  },
  {
    id: 'deals',
    label: 'Negocios',
    path: '/deals',
    icon: 'handshake',
    feature: 'DEALS',
    roles: ['ADMIN', 'MANAGER', 'AGENT']
  },
  {
    id: 'activities',
    label: 'Actividades',
    path: '/activities',
    icon: 'activity',
    feature: 'ACTIVITIES',
    roles: ['ADMIN', 'MANAGER', 'AGENT']
  },
  {
    id: 'properties',
    label: 'Propiedades',
    path: '/properties',
    icon: 'home',
    feature: 'PROPERTIES',
    roles: ['ADMIN', 'MANAGER', 'AGENT', 'VALUER']
  },
  {
    id: 'valuations',
    label: 'Tasaciones',
    path: '/valuations',
    icon: 'edit',
    feature: 'VALUATIONS',
    roles: ['ADMIN', 'MANAGER', 'AGENT', 'VALUER']
  },
  {
    id: 'contacts',
    label: 'Contactos',
    path: '/contacts',
    icon: 'users',
    feature: 'CONTACTS',
    roles: ['ADMIN', 'MANAGER', 'AGENT']
  },
  {
    id: 'projects',
    label: 'Emprendimientos',
    path: '/projects',
    icon: 'building-2',
    feature: 'PROJECTS',
    roles: ['ADMIN', 'MANAGER', 'AGENT']
  },
  {
    id: 'maps',
    label: 'Mapas',
    path: '/maps',
    icon: 'map-pin',
    feature: 'MAPS',
    roles: ['ADMIN', 'MANAGER', 'AGENT']
  },
  {
    id: 'network',
    label: 'Redes',
    path: '/network',
    icon: 'network',
    feature: 'NETWORK',
    roles: ['ADMIN', 'MANAGER']
  },
  {
    id: 'reports',
    label: 'Reportes',
    path: '/reports',
    icon: 'bar-chart',
    feature: 'REPORTS',
    roles: ['ADMIN', 'MANAGER']
  },
  {
    id: 'settings',
    label: 'Configuración',
    path: '/settings',
    icon: 'settings',
    feature: 'SETTINGS',
    roles: ['ADMIN']
  }
];