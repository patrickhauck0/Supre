import React from 'react';
import { Text, View } from 'react-native';
import { LinceIcon } from '../components/ui/LinceIcon';

export const SplashScreen = () => {
  return (
    <View className="flex-1 bg-blue-800 items-center justify-center">
      <LinceIcon size={96} />
      <Text className="text-blue-200 text-base mt-2 font-medium">
        Controle de Estoque Inteligente
      </Text>
    </View>
  );
};
