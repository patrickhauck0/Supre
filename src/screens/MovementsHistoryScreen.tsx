import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from '../components/ui/Card';

export const MovementsHistoryScreen = () => {
  const movements = [
    { id: 1, type: 'in', product: 'MacBook Pro M3', qty: 10, date: '10 Nov, 2026', time: '10:30' },
    { id: 2, type: 'out', product: 'Teclado Mecânico Keychron', qty: 2, date: '10 Nov, 2026', time: '09:15' },
    { id: 3, type: 'in', product: 'Monitor Dell 27 polegadas', qty: 5, date: '09 Nov, 2026', time: '16:40' },
    { id: 4, type: 'out', product: 'Mouse MX Master 3S', qty: 1, date: '08 Nov, 2026', time: '11:20' },
  ];

  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }} className="pt-8 px-5 md:px-10">
        <View className="w-full max-w-6xl">
          <View className="mb-6 mt-4">
            <Text className="text-2xl md:text-3xl font-bold text-gray-800">Histórico de Movimentações</Text>
            <Text className="text-gray-500 text-sm md:text-base mt-1">Acompanhe as entradas e saídas do estoque</Text>
          </View>

          <Card className="p-0 overflow-hidden">
            {movements.map((mov, index) => (
              <View
                key={mov.id}
                className={`p-4 md:p-5 flex-row items-center justify-between ${index !== movements.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <View className="flex-row items-center flex-1 pr-4">
                  <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 shrink-0 ${mov.type === 'in' ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    <Text className={`font-bold text-lg ${mov.type === 'in' ? 'text-emerald-700' : 'text-red-700'}`}>
                      {mov.type === 'in' ? '↓' : '↑'}
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text className="font-bold text-gray-800 text-base" numberOfLines={2} ellipsizeMode="tail">
                      {mov.product}
                    </Text>
                    <Text className="text-gray-500 text-sm mt-0.5" numberOfLines={1}>
                      {mov.date} às {mov.time}
                    </Text>
                  </View>
                </View>

                <View className="items-end pl-2 shrink-0">
                  <Text className={`font-bold text-xl ${mov.type === 'in' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {mov.type === 'in' ? '+' : '-'}{mov.qty}
                  </Text>
                  <Text className="text-gray-400 text-xs font-medium">Unid.</Text>
                </View>
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};
