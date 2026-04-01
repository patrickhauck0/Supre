import { create } from 'zustand';
import { productService } from '../services/productService';
import { Product } from '../types';

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  fetchProducts: (token: string) => Promise<void>;
  addProduct: (token: string, data: Partial<Product>) => Promise<void>;
  removeProduct: (token: string, productId: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,

  fetchProducts: async (token) => {
    set({ isLoading: true });
    try {
      const products = await productService.getProducts(token);
      set({ products, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  addProduct: async (token, data) => {
    set({ isLoading: true });
    try {
      const newProduct = await productService.createProduct(token, data);
      set((state) => ({ products: [...state.products, newProduct], isLoading: false }));
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  removeProduct: async (token, productId) => {
    set({ isLoading: true });
    try {
      await productService.deleteProduct(token, productId);
      set((state) => ({
        products: state.products.filter(p => p.id !== productId),
        isLoading: false
      }));
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  }
}));
