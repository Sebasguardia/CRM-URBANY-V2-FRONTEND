// src/shared/mocks/index.js
export { mockDeals, generateMockDeal } from './deals.mock';
export { mockProperties, generateMockProperty } from './properties.mock';
export { mockContacts, generateMockContact } from './contacts.mock';
export { mockActivities, generateMockActivity } from './activities.mock';
export { mockValuations, generateMockValuation } from './valuations.mock';
export { mockProjects, generateMockProject } from './projects.mock';
export { mockUsers, generateMockUser } from './users.mock';
export { mockNetwork, generateMockAgent } from './network.mock';
export { mockNotifications, generateMockNotification } from './notifications.mock';

// Helper para resetear mocks
export const resetMocks = () => {
  // En implementación real, esto recargaría los datos desde archivos
  window.location.reload();
};