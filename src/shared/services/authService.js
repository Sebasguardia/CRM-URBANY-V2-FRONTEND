import { mockUsers } from '../mocks/users.mock';
import { delay } from './apiClient';

const SIMULATE_DELAY = 300;

export const authService = {
  async login(email, password) {
    await delay(SIMULATE_DELAY);
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const { password: _, ...userWithoutPassword } = user;
    
    return {
      user: userWithoutPassword,
      token: `mock-token-${user.id}`,
      message: 'Login exitoso'
    };
  },

  async register(userData) {
    await delay(SIMULATE_DELAY);
    
    const newUser = {
      id: `user-${Date.now()}`,
      ...userData,
      role: 'AGENT',
      isActive: true,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name)}&background=3b82f6&color=fff`,
      createdAt: new Date().toISOString()
    };

    return {
      user: newUser,
      token: `mock-token-${newUser.id}`,
      message: 'Registro exitoso'
    };
  },

  async logout() {
    await delay(SIMULATE_DELAY);
    return { message: 'Logout exitoso' };
  },

  async refreshToken() {
    await delay(SIMULATE_DELAY);
    return { token: 'new-mock-token' };
  },

  async forgotPassword(email) {
    await delay(SIMULATE_DELAY);
    return { message: 'Email de recuperación enviado (simulado)' };
  },

  async resetPassword(token, password) {
    await delay(SIMULATE_DELAY);
    return { message: 'Contraseña actualizada (simulado)' };
  },

  async getProfile() {
    await delay(SIMULATE_DELAY);
    return mockUsers.find(u => u.id === 'user-1');
  },

  async updateProfile(data) {
    await delay(SIMULATE_DELAY);
    return { message: 'Perfil actualizado', data };
  }
};