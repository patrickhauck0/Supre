import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ProfileScreen = () => {
  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }} className="pt-8 px-5 md:px-10">
        <View className="w-full max-w-3xl mt-4">
          
          <Card className="items-center py-8 mb-6 border-transparent shadow-sm">
            <View className="w-24 h-24 rounded-full bg-blue-100 items-center justify-center mb-4">
              <Text className="text-blue-800 text-3xl font-bold">JD</Text>
            </View>
            <Text className="text-2xl font-bold text-gray-800">João Dias</Text>
            <Text className="text-gray-500 mt-1 mb-4">joao.dias@supre.com</Text>
            <View className="bg-emerald-100 px-4 py-1.5 rounded-full">
              <Text className="text-emerald-800 text-xs font-bold uppercase tracking-wider">Administrador</Text>
            </View>
          </Card>

          <Text className="text-gray-500 font-bold mb-3 px-2">Opções da Conta</Text>
          <Card className="p-0 overflow-hidden mb-8 border-gray-200">
            <TouchableOpacity className="p-5 border-b border-gray-100 flex-row justify-between items-center bg-white active:bg-slate-50">
              <Text className="text-gray-800 font-medium text-base">Editar Informações Pessoais</Text>
              <Text className="text-gray-400 font-bold">{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-5 border-b border-gray-100 flex-row justify-between items-center bg-white active:bg-slate-50">
              <Text className="text-gray-800 font-medium text-base">Notificações e Alertas via WhatsApp</Text>
              <Text className="text-gray-400 font-bold">{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-5 flex-row justify-between items-center bg-white active:bg-slate-50">
              <Text className="text-gray-800 font-medium text-base">Segurança Exigida (Mudar Senha)</Text>
              <Text className="text-gray-400 font-bold">{'>'}</Text>
            </TouchableOpacity>
          </Card>

          <Button label="Sair da Conta" variant="danger" />
          <Text className="text-center text-gray-400 mt-6 text-sm">Supre Version 1.0.0</Text>

        </View>
      </ScrollView>
    </View>
  );
};
