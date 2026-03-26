import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card } from './Card';

export interface ProductCardProps {
  name: string;
  sku: string;
  quantity: number;
  minQuantity: number;
  price: number;
  onPress?: () => void;
}

export const ProductCard = ({ name, sku, quantity, minQuantity, price, onPress }: ProductCardProps) => {
  const isLowStock = quantity <= minQuantity;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} className="mb-4">
      <Card>
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-1 pr-3">
            <Text className="text-gray-800 font-bold text-lg" numberOfLines={1}>{name}</Text>
            <Text className="text-gray-500 text-sm mt-0.5">SKU: {sku}</Text>
          </View>
          <View className={`px-2.5 py-1.5 rounded-lg ${isLowStock ? 'bg-red-100' : 'bg-emerald-100'}`}>
            <Text className={`font-bold text-sm ${isLowStock ? 'text-red-600' : 'text-emerald-700'}`}>
              Qtd: {quantity}
            </Text>
          </View>
        </View>
        
        <View className="flex-row justify-between items-center mt-3 pt-3 border-t border-gray-100">
          <Text className="text-gray-400 text-sm font-medium">Preço Unitário</Text>
          <Text className="text-blue-800 font-bold text-lg">
            R$ {price.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
