import React from 'react';
import { View, ViewProps } from 'react-native';

export interface CardProps extends ViewProps {
  children: React.ReactNode;
}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <View 
      className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ${className || ''}`}
      {...rest}
    >
      {children}
    </View>
  );
};
