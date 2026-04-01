import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { InputField } from '../components/ui/InputField';
import { ProductCard } from '../components/ui/ProductCard';
import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';

export const ProductsListScreen = () => {
  const { token } = useAuthStore();
  const { products, isLoading, fetchProducts, removeProduct } = useProductStore();

  useEffect(() => {
    if (token) {
      fetchProducts(token);
    }
  }, [token]);

  const handleDelete = async (productId: string) => {
    if (token) await removeProduct(token, productId);
  };

  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }} className="pt-8 px-5 md:px-10">
        <View className="w-full max-w-6xl">

          <View className="flex-row items-center justify-between mb-6 mt-4">
            <View>
              <Text className="text-2xl md:text-3xl font-bold text-gray-800">Produtos</Text>
              <Text className="text-gray-500 text-sm md:text-base mt-1">Gerencie seu inventário</Text>
            </View>
            <TouchableOpacity 
              className="bg-blue-800 px-5 py-2.5 rounded-xl shadow-sm"
              onPress={() => router.push('/product-form')}
            >
              <Text className="text-white font-bold text-base">+ Novo Produto</Text>
            </TouchableOpacity>
          </View>

          {/* Search Box */}
          <View className="mb-8">
            <InputField label="" placeholder="Buscar por nome ou SKU..." />

            {/* Options Filter */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2 -mx-1 px-1">
               <View className="flex-row gap-3">
                 <TouchableOpacity className="bg-blue-100 border border-blue-200 px-4 py-2 rounded-full">
                   <Text className="text-blue-800 font-bold text-sm">Todos</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full">
                   <Text className="text-gray-600 font-medium text-sm">Ordem: Nome (A-Z)</Text>
                 </TouchableOpacity>
                 <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full">
                   <Text className="text-gray-600 font-medium text-sm">Quantidade Baixa</Text>
                 </TouchableOpacity>
               </View>
            </ScrollView>
          </View>

          {isLoading ? (
            <View className="flex-1 justify-center items-center py-20">
              <ActivityIndicator size="large" color="#1E40AF" />
            </View>
          ) : products.length === 0 ? (
            <View className="flex-1 justify-center items-center py-20">
              <Text className="text-gray-500 text-center text-lg">
                Nenhum produto cadastrado.{'\n'}Toque em '+ Novo Produto' para começar.
              </Text>
            </View>
          ) : (
            <View className="flex-row flex-wrap justify-between gap-y-4">
              {products.map((product) => (
                <View key={product.id} className="w-full md:w-[48%] lg:w-[32%]">
                  <ProductCard 
                    name={product.name} 
                    sku={product.sku || 'N/A'} 
                    quantity={product.quantity} 
                    minQuantity={product.min_quantity} 
                    price={0} 
                    onPress={() => {}}
                  />
                </View>
              ))}
            </View>
          )}

        </View>
      </ScrollView>
    </View>
  );
};
