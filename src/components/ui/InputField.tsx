import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

export interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

export const InputField = ({ label, error, className, ...rest }: InputFieldProps) => {
  return (
    <View className={`w-full mb-4 ${className || ''}`}>
      <Text className="text-gray-800 font-medium mb-1.5">{label}</Text>
      <TextInput
        placeholderTextColor="#9CA3AF"
        className={`w-full bg-slate-50 border ${error ? 'border-red-500' : 'border-gray-200'} rounded-xl px-4 py-3.5 text-gray-800 text-base focus:border-blue-800`}
        {...rest}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};
