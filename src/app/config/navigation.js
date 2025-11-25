import { 
  LayoutDashboard, 
  Kanban, 
  Building2, 
  Calendar, 
  Users, 
  Building, 
  Calculator, 
  Map, 
  Network, 
  BarChart3, 
  Settings 
} from 'lucide-react';
import { USER_ROLES } from '../../shared/constants/userRoles';
import { FEATURE_FLAGS } from '../../shared/constants/featureFlags.constants';

/**
 * Items del sidebar dinámicos por rol
 * Cada item usa un componente de icono de Lucide React
 */
export const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.DASHBOARD,
    exact: true,
  },
  {
    id: 'deals',
    label: 'Pipeline',
    path: '/deals',
    icon: Kanban,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.DEALS,
    badge: { type: 'count', value: 'deals.length' },
  },
  {
    id: 'properties',
    label: 'Propiedades',
    path: '/properties',
    icon: Building2,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.PROPERTIES,
  },
  {
    id: 'activities',
    label: 'Actividades',
    path: '/activities',
    icon: Calendar,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
    featureFlag: FEATURE_FLAGS.ACTIVITIES,
    badge: { type: 'count', value: 'activities.today' },
  },
  {
    id: 'contacts',
    label: 'Contactos',
    path: '/contacts',
    icon: Users,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.CONTACTS,
  },
  {
    id: 'projects',
    label: 'Proyectos',
    path: '/projects',
    icon: Building,
    roles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.PROJECTS,
  },
  {
    id: 'valuations',
    label: 'Tasaciones',
    path: '/valuations',
    icon: Calculator,
    roles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.VALUATIONS,
  },
  {
    id: 'maps',
    label: 'Mapa',
    path: '/maps',
    icon: Map,
    roles: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.MAPS,
  },
  {
    id: 'network',
    label: 'Red',
    path: '/network',
    icon: Network,
    roles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.NETWORK,
  },
  {
    id: 'reports',
    label: 'Reportes',
    path: '/reports',
    icon: BarChart3,
    roles: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
    featureFlag: FEATURE_FLAGS.REPORTS,
  },
  {
    id: 'settings',
    label: 'Configuración',
    path: '/settings',
    icon: Settings,
    roles: [USER_ROLES.ADMIN],
    featureFlag: FEATURE_FLAGS.SETTINGS,
    separator: true,
  },
];

/**
 * Función para filtrar items por rol y feature flags
 * @param {string} userRole - Rol del usuario actual
 * @param {Object} features - Feature flags activos
 * @returns {Array} Items de navegación filtrados
 */
export const getNavigationByRole = (userRole, features = {}) => {
  return navigationItems.filter(item => {
    const hasRole = item.roles.includes(userRole);
    const isEnabled = features[item.featureFlag] !== false;
    return hasRole && isEnabled;
  });
};