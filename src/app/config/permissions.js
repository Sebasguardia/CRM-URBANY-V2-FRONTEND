import { USER_ROLES } from '../../shared/constants/userRoles';

/**
 * Control de Acceso por Rol (ACL)
 * Define qué roles pueden ver, crear, editar o eliminar en cada feature
 */
export const PERMISSIONS = {
  // Deals
  DEALS_VIEW: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
  DEALS_CREATE: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  DEALS_EDIT: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  DEALS_DELETE: [USER_ROLES.ADMIN],
  DEALS_MOVE_STAGE: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  
  // Properties
  PROPERTIES_VIEW: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
  PROPERTIES_CREATE: [USER_ROLES.ADMIN],
  PROPERTIES_EDIT: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  PROPERTIES_DELETE: [USER_ROLES.ADMIN],
  
  // Activities
  ACTIVITIES_VIEW: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  ACTIVITIES_CREATE: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  ACTIVITIES_EDIT: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  ACTIVITIES_DELETE: [USER_ROLES.ADMIN],
  
  // Contacts
  CONTACTS_VIEW: [USER_ROLES.ADMIN, USER_ROLES.AGENT, USER_ROLES.MANAGER],
  CONTACTS_CREATE: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  CONTACTS_IMPORT: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  CONTACTS_DELETE: [USER_ROLES.ADMIN],
  
  // Projects
  PROJECTS_VIEW: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  PROJECTS_CREATE: [USER_ROLES.ADMIN],
  PROJECTS_EDIT: [USER_ROLES.ADMIN],
  
  // Valuations
  VALUATIONS_VIEW: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  VALUATIONS_CREATE: [USER_ROLES.ADMIN, USER_ROLES.AGENT],
  VALUATIONS_APPROVE: [USER_ROLES.ADMIN],
  
  // Network
  NETWORK_VIEW: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  NETWORK_INVITE: [USER_ROLES.ADMIN],
  
  // Reports
  REPORTS_VIEW: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  REPORTS_EXPORT: [USER_ROLES.ADMIN, USER_ROLES.MANAGER],
  
  // Settings
  SETTINGS_VIEW: [USER_ROLES.ADMIN],
  SETTINGS_EDIT: [USER_ROLES.ADMIN],
};

/**
 * Verifica si un rol tiene permiso para una acción
 */
export const hasPermission = (userRole, permission) => {
  return PERMISSIONS[permission]?.includes(userRole) || false;
};

/**
 * Verifica múltiples permisos (AND lógico)
 */
export const hasAllPermissions = (userRole, permissions) => {
  return permissions.every(permission => hasPermission(userRole, permission));
};

/**
 * Verifica al menos un permiso (OR lógico)
 */
export const hasAnyPermission = (userRole, permissions) => {
  return permissions.some(permission => hasPermission(userRole, permission));
};