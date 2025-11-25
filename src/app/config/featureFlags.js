import { FEATURE_FLAGS } from '../../shared/constants/featureFlags.constants';

/**
 * Feature Flags - Habilitar/deshabilitar módulos
 * Puede ser estático o consumir de API/variables de entorno
 */
export const getFeatureFlags = () => {
  return {
    [FEATURE_FLAGS.DASHBOARD]: true,
    [FEATURE_FLAGS.DEALS]: true,
    [FEATURE_FLAGS.PROPERTIES]: true,
    [FEATURE_FLAGS.ACTIVITIES]: true,
    [FEATURE_FLAGS.CONTACTS]: true,
    [FEATURE_FLAGS.PROJECTS]: process.env.NODE_ENV === 'development',
    [FEATURE_FLAGS.VALUATIONS]: true,
    [FEATURE_FLAGS.MAPS]: true,
    [FEATURE_FLAGS.NETWORK]: process.env.NODE_ENV === 'development',
    [FEATURE_FLAGS.REPORTS]: false, // En desarrollo
    [FEATURE_FLAGS.SETTINGS]: true,
  };
};

/**
 * Verifica si una feature está habilitada
 */
export const isFeatureEnabled = (featureKey) => {
  const flags = getFeatureFlags();
  return flags[featureKey] === true;
};

/**
 * Middleware para features (útil en rutas)
 */
export const featureMiddleware = (featureKey) => {
  return (next) => (args) => {
    if (!isFeatureEnabled(featureKey)) {
      throw new Error(`Feature ${featureKey} is not enabled`);
    }
    return next(args);
  };
};