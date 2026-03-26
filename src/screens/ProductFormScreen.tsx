import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';

export const ProductFormScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 bg-slate-50">
      <View className="w-full bg-white border-b border-gray-100 items-center">
        <View className="w-full max-w-3xl px-5 pt-12 pb-4 md:px-10">
          <Text className="text-xl font-bold text-gray-800">Novo Produto</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }}>
        <View className="w-full max-w-3xl px-5 md:px-10 mt-6 md:mt-10">
          <View className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <Text className="text-lg font-bold text-gray-800 mb-5">Informações Básicas</Text>

            <InputField label="Nome do Produto" placeholder="Ex: Monitor Dell 27 polegadas" />

            <View className="flex-col md:flex-row md:justify-between md:gap-4">
              <View className="w-full md:flex-1">
                <InputField label="SKU (Código)" placeholder="Ex: DEL-M27-02" />
              </View>
              <View className="w-full md:flex-1">
                <InputField label="Preço de Venda (R$)" placeholder="0,00" keyboardType="numeric" />
              </View>
            </View>

            <View className="h-px bg-gray-100 my-6" />

            <Text className="text-lg font-bold text-gray-800 mb-5">Estoque Inicial</Text>

            <View className="flex-col md:flex-row md:justify-between md:gap-4">
              <View className="w-full md:flex-1">
                <InputField label="Quantidade Mínima (Alerta)" placeholder="0" keyboardType="numeric" />
              </View>
              <View className="w-full md:flex-1">
                <InputField label="Quantidade Adicionada" placeholder="0" keyboardType="numeric" />
              </View>
            </View>

            <View className="mt-8 flex-col md:flex-row-reverse md:justify-start gap-3">
              <Button label="Salvar Produto" className="md:w-48" />
              <Button label="Cancelar" variant="outline" className="md:w-48" />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
