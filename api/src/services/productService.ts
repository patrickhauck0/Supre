import { supabase } from '../config/supabaseClient';

export const createProduct = async (userId: string, data: any) => {
  const { data: insertedProduct, error } = await supabase
    .from('products')
    .insert([{
      name: data.name,
      category: data.category,
      quantity: data.quantity,
      min_quantity: data.minQuantity,
      image_url: data.imageUrl,
      sku: data.sku,
      description: data.description,
      user_id: userId
    }])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return insertedProduct;
};

export const getProducts = async (userId: string) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error(error.message);
  return products;
};

export const getProductById = async (userId: string, productId: string) => {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', productId)
    .eq('user_id', userId)
    .single();

  if (error) return null;
  return product;
};

export const updateProduct = async (userId: string, productId: string, data: any) => {
  const updates: any = {};

  if (data.name !== undefined) updates.name = data.name;
  if (data.category !== undefined) updates.category = data.category;
  if (data.quantity !== undefined) updates.quantity = data.quantity;
  if (data.minQuantity !== undefined) updates.min_quantity = data.minQuantity;
  if (data.imageUrl !== undefined) updates.image_url = data.imageUrl;
  if (data.sku !== undefined) updates.sku = data.sku;
  if (data.description !== undefined) updates.description = data.description;

  const { data: updatedProduct, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', productId)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) return null;
  return updatedProduct;
};

export const deleteProduct = async (userId: string, productId: string) => {
  const { data: deletedProduct, error } = await supabase
    .from('products')
    .delete()
    .eq('id', productId)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) return null;
  return deletedProduct;
};
