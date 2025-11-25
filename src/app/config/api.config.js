/**
 * Modo mock: true = usar datos simulados, false = usar backend real
 * Puedes cambiarlo con: REACT_APP_USE_MOCK=false npm run dev
 */
export const USE_MOCK = process.env.REACT_APP_USE_MOCK !== 'false'; // Por defecto true

/**
 * Configuración centralizada de APIs
 * Cuando USE_MOCK está activo, estos endpoints no se usan pero se mantienen para referencia
 */
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 30000,
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

/**
 * Endpoints organizados por feature
 * Útiles como referencia cuando conectes al backend real
 */
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },
  DEALS: {
    LIST: '/deals',
    DETAIL: (id) => `/deals/${id}`,
    CREATE: '/deals',
    UPDATE: (id) => `/deals/${id}`,
    DELETE: (id) => `/deals/${id}`,
    MOVE_STAGE: (id) => `/deals/${id}/stage`,
  },
  PROPERTIES: {
    LIST: '/properties',
    DETAIL: (id) => `/properties/${id}`,
    CREATE: '/properties',
    UPDATE: (id) => `/properties/${id}`,
    DELETE: (id) => `/properties/${id}`,
  },
  CONTACTS: {
    LIST: '/contacts',
    IMPORT: '/contacts/import',
  },
  ACTIVITIES: {
    LIST: '/activities',
    CREATE: '/activities',
  },
  VALUATIONS: {
    LIST: '/valuations',
    CREATE: '/valuations',
    APPROVE: (id) => `/valuations/${id}/approve`,
  },
  NETWORK: {
    AGENTS: '/network/agents',
    INVITE: '/network/invite',
  },
};

/**
 * Helper para simular delay de red (más realista)
 * @param {number} ms - Milisegundos de delay
 * @returns {Promise}
 */
export const simulateDelay = (ms = 500) => 
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Función para decidir si usar mock o real
 * @returns {boolean} true si está en modo mock
 */
export const isMockMode = () => USE_MOCK;