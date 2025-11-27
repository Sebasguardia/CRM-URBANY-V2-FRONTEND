import { createContext, useContext, useReducer, useEffect } from 'react';

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

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const mockUser = {
        id: 'user-001',
        name: 'Usuario Demo',
        email: 'usuario@example.com',
        role: 'ADMIN'
      };
      dispatch({ type: 'AUTH_SUCCESS', payload: { user: mockUser, token } });
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  }, []);

  const login = async (credentials) => {
    dispatch({ type: 'AUTH_START' });
    
    setTimeout(() => {
      const mockUser = {
        id: 'user-001',
        name: 'Usuario Demo',
        email: 'usuario@example.com',
        role: 'ADMIN'
      };
      
      const mockToken = 'mock-token-123';
      localStorage.setItem('token', mockToken);
      dispatch({ type: 'AUTH_SUCCESS', payload: { user: mockUser, token: mockToken } });
    }, 300);
    
    return { success: true };
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};