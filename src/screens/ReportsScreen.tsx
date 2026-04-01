import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from '../components/ui/Card';

export const ReportsScreen = () => {
  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }} className="pt-8 px-5 md:px-10">
        <View className="w-full max-w-6xl">
          <View className="mb-6 mt-4">
            <Text className="text-2xl md:text-3xl font-bold text-gray-800">Relatórios de Desempenho</Text>
            <Text className="text-gray-500 text-sm md:text-base mt-1">Métricas e estatísticas do seu negócio</Text>
          </View>

          <View className="flex-col md:flex-row md:justify-between gap-4 mb-6">
            <View className="w-full md:flex-1">
              <Card className="items-center py-10 border-emerald-100">
                <Text className="text-gray-500 mb-2 font-medium">Entradas do Mês (Jan)</Text>
                <Text className="text-4xl font-bold text-emerald-600">+145</Text>
                <Text className="text-sm text-gray-400 mt-2">Unidades processadas</Text>
              </Card>
            </View>
            <View className="w-full md:flex-1">
              <Card className="items-center py-10 border-blue-100">
                <Text className="text-gray-500 mb-2 font-medium">Saídas do Mês (Jan)</Text>
                <Text className="text-4xl font-bold text-blue-800">-89</Text>
                <Text className="text-sm text-gray-400 mt-2">Unidades despachadas</Text>
              </Card>
            </View>
          </View>

          <Card className="mt-2 min-h-[350px] justify-center items-center bg-white border-dashed border-gray-300">
            <Text className="text-gray-300 text-6xl mb-4">📈</Text>
            <Text className="text-gray-500 font-medium text-lg text-center px-4 mb-2">
              Visualização Avançada
            </Text>
            <Text className="text-gray-400 text-center px-6 text-sm">
              Em desenvolvimento...
            </Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};
