import { apiRequest } from './api';
import { User } from '../types';

export const authService = {
  loginUser: async (email: string, password: string): Promise<{ token: string; user: User }> => {
    return await apiRequest<{ token: string; user: User }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  registerUser: async (name: string, email: string, password: string): Promise<{ user: User }> => {
    return await apiRequest<{ user: User }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  getProfile: async (token: string): Promise<{ user: User }> => {
    return await apiRequest<{ user: User }>('/api/auth/profile', {
      method: 'GET',
    }, token);
  },
};
