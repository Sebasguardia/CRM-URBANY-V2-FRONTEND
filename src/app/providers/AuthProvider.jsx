import { createContext, useContext, useReducer, useEffect } from 'react';
import { authService } from '../../features/auth/services/auth.api';

const AuthContext = createContext(null);

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isLoading: true,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, isLoading: true, error: null };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isAuthenticated: false,
      };
    case 'LOGOUT':
      return { ...initialState, token: null, isLoading: false };
    default:
      return state;
  }
}

/**
 * Provider de autenticación global
 * Maneja login, logout, token y datos del usuario
 */
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Auto-login con token existente
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token);
    } else {
      dispatch({ type: 'AUTH_FAILURE', payload: 'No token found' });
    }
  }, []);

  const validateToken = async (token) => {
    try {
      const user = await authService.me(token);
      dispatch({ type: 'AUTH_SUCCESS', payload: { user, token } });
    } catch (error) {
      localStorage.removeItem('token');
      dispatch({ type: 'AUTH_FAILURE', payload: error.message });
    }
  };

  const login = async (credentials) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const { user, token } = await authService.login(credentials);
      localStorage.setItem('token', token);
      dispatch({ type: 'AUTH_SUCCESS', payload: { user, token } });
      return { success: true };
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE', payload: error.message });
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const value = {
    ...state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook para usar el contexto de auth
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};