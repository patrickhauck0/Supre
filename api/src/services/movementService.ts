import { supabase } from '../config/supabaseClient';
import { getProductById } from './productService';

export const createMovement = async (userId: string, data: any) => {
  const product = await getProductById(userId, data.productId);

  if (!product) {
    throw new Error("Product not found or does not belong to user.");
  }

  const currentQuantity = product.quantity;
  const newQuantity = data.type === 'in'
    ? currentQuantity + data.quantity
    : currentQuantity - data.quantity;

  if (newQuantity < 0) {
    throw new Error("Insufficient stock for this operation.");
  }

  const { error: updateError } = await supabase
    .from('products')
    .update({ quantity: newQuantity })
    .eq('id', product.id)
    .eq('user_id', userId);

  if (updateError) {
    throw new Error(`Failed to update product stock: ${updateError.message}`);
  }

  const { data: movement, error: insertError } = await supabase
    .from('movements')
    .insert([{
      product_id: product.id,
      user_id: userId,
      type: data.type,
      quantity: data.quantity,
      notes: data.notes || null,
      previous_quantity: currentQuantity,
      new_quantity: newQuantity
    }])
    .select()
    .single();

  if (insertError) {
    throw new Error(`Failed to create movement record: ${insertError.message}`);
  }

  const alertTriggered = newQuantity <= product.min_quantity;

  return {
    ...movement,
    alertTriggered,
    productName: product.name
  };
};

export const getMovements = async (userId: string) => {
  const { data: movements, error } = await supabase
    .from('movements')
    .select(`
      *,
      products (
        name
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return movements;
};
