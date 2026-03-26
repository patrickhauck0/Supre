import React from 'react';
import { View, Text } from 'react-native';

export interface AlertCardProps {
  title: string;
  description: string;
  type?: 'warning' | 'error' | 'success' | 'info';
}

export const AlertCard = ({ title, description, type = 'warning' }: AlertCardProps) => {
  let containerColor = "bg-orange-50 border-orange-200";
  let textColor = "text-orange-800";
  let titleColor = "text-orange-900";
  
  if (type === 'error') {
    containerColor = "bg-red-50 border-red-200";
    textColor = "text-red-800";
    titleColor = "text-red-900";
  } else if (type === 'success') {
    containerColor = "bg-emerald-50 border-emerald-200";
    textColor = "text-emerald-800";
    titleColor = "text-emerald-900";
  } else if (type === 'info') {
    containerColor = "bg-blue-50 border-blue-200";
    textColor = "text-blue-800";
    titleColor = "text-blue-900";
  }

  return (
    <View className={`w-full p-4 rounded-xl border mb-4 ${containerColor}`}>
      <Text className={`font-bold text-base mb-1 ${titleColor}`}>{title}</Text>
      <Text className={`text-sm leading-5 ${textColor}`}>{description}</Text>
    </View>
  );
};
