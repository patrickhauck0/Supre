import { apiRequest } from './api';
import { Product } from '../types';

export const productService = {
  getProducts: async (token: string): Promise<Product[]> => {
    const response = await apiRequest<{ products: Product[] }>('/api/products', {
      method: 'GET',
    }, token);
    return response.products;
  },

  createProduct: async (token: string, productData: Partial<Product>): Promise<Product> => {
    const response = await apiRequest<{ product: Product }>('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    }, token);
    return response.product;
  },

  deleteProduct: async (token: string, productId: string): Promise<void> => {
    await apiRequest<{ product: Product }>(`/api/products/${productId}`, {
      method: 'DELETE',
    }, token);
  },
};
