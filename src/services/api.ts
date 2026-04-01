import { Platform } from 'react-native';

// Configurable environment variable local. 
export const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}, token?: string | null): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;

  const headers = new Headers(options.headers);

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      throw new Error(data.error || data.message || 'Ocorreu um erro na requisição à API.');
    }

    return data.data;
  } catch (error: any) {
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Servidor offline ou indisponível. Verifique se a API está rodando.');
    }
    throw error;
  }
}
