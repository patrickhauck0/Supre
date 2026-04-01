import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { authService } from '../services/authService';
import { AuthState } from '../types';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      isAuthenticated: false,

      setLoading: (value) => set({ isLoading: value }),

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const { token, user } = await authService.loginUser(email, password);

          const mappedUser = {
            id: user.id || '',
            email: user.email || '',
            name: (user as any).user_metadata?.name || 'Visitante',
            avatarUrl: (user as any).user_metadata?.avatarUrl,
          };

          set({
            user: mappedUser,
            token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (name, email, password) => {
        set({ isLoading: true });
        try {
          await authService.registerUser(name, email, password);
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'supre-auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
