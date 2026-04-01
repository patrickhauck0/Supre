import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/productStore';

export const ProductFormScreen = () => {
  const { token } = useAuthStore();
  const { addProduct, isLoading } = useProductStore();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [sku, setSku] = useState('');
  const [minQuantity, setMinQuantity] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSave = async () => {
    if (!name.trim() || !category.trim()) {
      Alert.alert('Erro', 'Nome e Categoria são obrigatórios.');
      return;
    }

    const parsedQty = parseInt(quantity, 10);
    const parsedMinQty = parseInt(minQuantity, 10);

    if (isNaN(parsedQty) || parsedQty < 0 || isNaN(parsedMinQty) || parsedMinQty < 0) {
      Alert.alert('Erro', 'A quantidade deve ser um número inteiro válido e não negativo.');
      return;
    }

    if (!token) {
      Alert.alert('Erro', 'Sessão inválida. Por favor, faça login novamente.');
      return;
    }

    try {
      await addProduct(token, {
        name: name.trim(),
        category: category.trim(),
        sku: sku.trim() || undefined,
        quantity: parsedQty,
        minQuantity: parsedMinQty,
      } as any);

      if (Platform.OS === 'web') {
        window.alert('Produto adicionado com sucesso!');
        router.back();
      } else {
        Alert.alert('Sucesso', 'Produto adicionado com sucesso!', [
          { text: 'OK', onPress: () => router.back() }
        ]);
      }
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  };

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

            <InputField label="Nome do Produto" placeholder="Ex: Monitor Dell 27 polegadas" value={name} onChangeText={setName} />
            <InputField label="Categoria" placeholder="Ex: Eletrônicos" value={category} onChangeText={setCategory} />

            <View className="flex-col md:flex-row md:justify-between md:gap-4">
              <View className="w-full md:flex-1">
                <InputField label="SKU (Código)" placeholder="Ex: DEL-M27-02" value={sku} onChangeText={setSku} />
              </View>
            </View>

            <View className="h-px bg-gray-100 my-6" />

            <Text className="text-lg font-bold text-gray-800 mb-5">Estoque Inicial</Text>

            <View className="flex-col md:flex-row md:justify-between md:gap-4">
              <View className="w-full md:flex-1">
                <InputField label="Quantidade Mínima (Alerta)" placeholder="0" keyboardType="numeric" value={minQuantity} onChangeText={setMinQuantity} />
              </View>
              <View className="w-full md:flex-1">
                <InputField label="Quantidade no Estoque" placeholder="0" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
              </View>
            </View>

            <View className="mt-8 flex-col md:flex-row-reverse md:justify-start gap-3">
              <Button label="Salvar Produto" className="md:w-48" onPress={handleSave} isLoading={isLoading} />
              <Button label="Cancelar" variant="outline" className="md:w-48" onPress={() => router.back()} disabled={isLoading} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
