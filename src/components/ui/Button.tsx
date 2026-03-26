import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  isLoading?: boolean;
}

export const Button = ({ label, variant = 'primary', isLoading, className, ...rest }: ButtonProps) => {
  const baseClasses = "w-full py-4 rounded-xl flex-row justify-center items-center active:opacity-80";

  let variantClasses = "";
  let textClasses = "text-base font-bold";

  switch (variant) {
    case 'primary':
      variantClasses = "bg-blue-800"; // #1E40AF
      textClasses += " text-white";
      break;
    case 'secondary':
      variantClasses = "bg-emerald-500"; // #10B981
      textClasses += " text-white";
      break;
    case 'danger':
      variantClasses = "bg-red-500"; // #EF4444
      textClasses += " text-white";
      break;
    case 'outline':
      variantClasses = "bg-transparent border-2 border-blue-800";
      textClasses += " text-blue-800";
      break;
  }

  return (
    <TouchableOpacity
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'outline' ? '#1E40AF' : '#FFF'} />
      ) : (
        <Text className={textClasses}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
