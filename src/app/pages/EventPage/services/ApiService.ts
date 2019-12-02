import { axiosInstance } from 'app/core/services/ApiService';

export const ApiService = {
  getEventById(id) {
    return axiosInstance.get(`/events/${id}`);
  },
};
