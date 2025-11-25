import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './deals.slice';
import propertiesReducer from './properties.slice';
import networkReducer from './network.slice';
import uiReducer from './ui.slice';

/**
 * Store centralizado de Redux
 * Combinación de todos los slices globales
 */
export const store = configureStore({
  reducer: {
    deals: dealsReducer,
    properties: propertiesReducer,
    network: networkReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;