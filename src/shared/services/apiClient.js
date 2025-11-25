// Cliente simulado - Devuelve datos mock con delay
const SIMULATE_DELAY = 500;

// Helper para simular delay de red
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper para simular error aleatorio
const simulateError = (rate = 0.05) => {
  if (Math.random() < rate) {
    throw new Error('Error de conexión simulado');
  }
};

export const apiClient = {
  async get(url, { params } = {}) {
    await delay(SIMULATE_DELAY);
    simulateError(0.05);
    
    console.log(`[MOCK GET] ${url}`, params);
    return { success: true, message: 'Datos simulados' };
  },

  async post(url, data) {
    await delay(SIMULATE_DELAY);
    simulateError(0.05);
    
    console.log(`[MOCK POST] ${url}`, data);
    return { success: true, message: 'Creado exitosamente (simulado)' };
  },

  async put(url, data) {
    await delay(SIMULATE_DELAY);
    simulateError(0.05);
    
    console.log(`[MOCK PUT] ${url}`, data);
    return { success: true, message: 'Actualizado exitosamente (simulado)' };
  },

  async patch(url, data) {
    await delay(SIMULATE_DELAY);
    simulateError(0.05);
    
    console.log(`[MOCK PATCH] ${url}`, data);
    return { success: true, message: 'Actualizado exitosamente (simulado)' };
  },

  async delete(url) {
    await delay(SIMULATE_DELAY);
    simulateError(0.05);
    
    console.log(`[MOCK DELETE] ${url}`);
    return { success: true, message: 'Eliminado exitosamente (simulado)' };
  }
};

export default apiClient;