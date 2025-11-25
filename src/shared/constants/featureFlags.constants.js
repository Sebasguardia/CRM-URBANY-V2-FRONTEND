export const FEATURE_FLAGS = {
  // Módulos principales
  DEALS_MODULE: process.env.VITE_FEATURE_DEALS !== 'false',
  PROPERTIES_MODULE: process.env.VITE_FEATURE_PROPERTIES !== 'false',
  VALUATIONS_MODULE: process.env.VITE_FEATURE_VALUATIONS !== 'false',
  PROJECTS_MODULE: process.env.VITE_FEATURE_PROJECTS !== 'false',
  CONTACTS_MODULE: process.env.VITE_FEATURE_CONTACTS !== 'false',
  MAPS_MODULE: process.env.VITE_FEATURE_MAPS !== 'false',
  
  // Funcionalidades
  AI_VALUATION: process.env.VITE_FEATURE_AI_VALUATION === 'true',
  AUTOMATION: process.env.VITE_FEATURE_AUTOMATION === 'true',
  MULTI_LANGUAGE: process.env.VITE_FEATURE_MULTI_LANGUAGE === 'true',
  REAL_TIME_SYNC: process.env.VITE_FEATURE_REAL_TIME_SYNC === 'true',
  OFFLINE_MODE: process.env.VITE_FEATURE_OFFLINE_MODE === 'true',
  
  // Integraciones
  GOOGLE_MAPS_ENABLED: process.env.VITE_GOOGLE_MAPS_API_KEY !== '',
  CALENDAR_INTEGRATION: process.env.VITE_FEATURE_CALENDAR === 'true',
  PORTAL_SYNC: process.env.VITE_FEATURE_PORTAL_SYNC === 'true',
  
  // UI
  DARK_MODE: process.env.VITE_FEATURE_DARK_MODE === 'true',
  ADVANCED_FILTERS: process.env.VITE_FEATURE_ADVANCED_FILTERS === 'true'
};