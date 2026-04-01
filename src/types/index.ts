export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface Product {
  id: string;
  user_id: string;
  name: string;
  category: string;
  quantity: number;
  min_quantity: number;
  image_url?: string;
  sku?: string;
  description?: string;
  created_at: string;
}
