import { configureStore } from '@reduxjs/toolkit';
import dealsReducer from './deals.slice';
import propertiesReducer from './properties.slice';
import networkReducer from './network.slice';
import uiReducer from './ui.slice';
import activitiesReducer from '../../features/actividades/store/activities.slice';

export const store = configureStore({
  reducer: {
    deals: dealsReducer,
    properties: propertiesReducer,
    network: networkReducer,
    ui: uiReducer,
    activities: activitiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;