import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { InputField } from '../components/ui/InputField';
import { ProductCard } from '../components/ui/ProductCard';

export const ProductsListScreen = () => {
  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }} className="pt-8 px-5 md:px-10">
        <View className="w-full max-w-6xl">

          <View className="flex-row items-center justify-between mb-6 mt-4">
            <View>
              <Text className="text-2xl md:text-3xl font-bold text-gray-800">Produtos</Text>
              <Text className="text-gray-500 text-sm md:text-base mt-1">Gerencie seu inventário</Text>
            </View>
            <TouchableOpacity className="bg-blue-800 px-5 py-2.5 rounded-xl shadow-sm">
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
                <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full">
                  <Text className="text-gray-600 font-medium text-sm">Maior Preço</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white border border-gray-200 px-4 py-2 rounded-full">
                  <Text className="text-gray-600 font-medium text-sm">Ativos</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-4">
            <View className="w-full md:w-[48%] lg:w-[32%]"><ProductCard name="MacBook Pro M3" sku="APP-MBP-01" quantity={15} minQuantity={5} price={14999.00} /></View>
            <View className="w-full md:w-[48%] lg:w-[32%]"><ProductCard name="Monitor Dell 27 polegadas" sku="DEL-M27-02" quantity={8} minQuantity={10} price={2450.00} /></View>
            <View className="w-full md:w-[48%] lg:w-[32%]"><ProductCard name="Teclado Mecânico Keychron" sku="KCH-K8-03" quantity={3} minQuantity={5} price={850.00} /></View>
            <View className="w-full md:w-[48%] lg:w-[32%]"><ProductCard name="Mouse MX Master 3S" sku="LOG-MX-04" quantity={22} minQuantity={10} price={650.00} /></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
