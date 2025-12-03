import { apiClient } from '../../../../shared/services/apiClient';

export const profileApi = {
  async get() {
    return apiClient.get('/profile');
  },
  async update(payload) {
    return apiClient.put('/profile', payload);
  },
};

export default profileApi;

