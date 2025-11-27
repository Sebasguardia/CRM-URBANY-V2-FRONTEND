import { mockUsers } from '../../../shared/mocks/users.mock';
import { delay } from '../../../shared/services/apiClient';

const SIMULATE_DELAY = 300;

export const authService = {
  async login(credentials) {
    await delay(SIMULATE_DELAY);
    
    const { username, email, password } = credentials;
    const loginField = username || email;
    
    const user = mockUsers.find(u => 
      (u.email === loginField || u.username === loginField) && u.password === password
    );
    
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token: `mock-token-${user.id}`
    };
  },

  async register(userData) {
    await delay(SIMULATE_DELAY);
    
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      role: 'AGENT',
      isActive: true,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.username || userData.name)}&background=10b981&color=fff`,
      createdAt: new Date().toISOString()
    };

    return {
      user: newUser,
      token: `mock-token-${newUser.id}`
    };
  },

  async me(token) {
    await delay(SIMULATE_DELAY);
    
    const userId = token?.replace('mock-token-', '');
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('Token inválido');
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },

  async logout() {
    await delay(SIMULATE_DELAY);
    return { message: 'Logout exitoso' };
  }
};

