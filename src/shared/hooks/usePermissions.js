import { useAuthStore } from '../../features/auth/store/auth.slice';
import { PERMISSIONS, ROLES } from '../config/permissions';

export const usePermissions = () => {
  const { user } = useAuthStore();
  
  const hasPermission = (permission) => {
    if (!user?.role) return false;
    
    // Admin tiene todos los permisos
    if (user.role === ROLES.ADMIN) return true;
    
    // Verificar si el rol del usuario tiene el permiso específico
    const rolePermissions = PERMISSIONS[user.role] || [];
    return rolePermissions.includes(permission);
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  const hasSomePermission = (permissions) => {
    return permissions.some(permission => hasPermission(permission));
  };

  const hasEveryPermission = (permissions) => {
    return permissions.every(permission => hasPermission(permission));
  };

  return {
    user,
    role: user?.role,
    hasPermission,
    hasRole,
    hasSomePermission,
    hasEveryPermission,
    isAuthenticated: !!user
  };
};

// Hook combinado para usar en componentes
export const useAuth = usePermissions;