import { Image } from 'expo-image';
import React from 'react';

export interface LinceIconProps {
  size?: number;
  width?: number;
  height?: number;
}

export const LinceIcon = ({ size, width, height }: LinceIconProps) => {
  const finalHeight = size || height || 48;
  const finalWidth = size ? size * 3 : (width || 144);

  return (
    <Image
      source={require('../../../assets/images/supre_logo.svg')}
      style={{ width: finalWidth, height: finalHeight }}
      contentFit="contain"
      transition={200}
    />
  );
};
