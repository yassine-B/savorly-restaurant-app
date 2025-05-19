import React, { ReactNode } from 'react';
import { textColors, textSizes } from '../SharedStyles';

interface textProps {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'black' | 'white';
  size?: 'x_small' | 'small' | 'medium' | 'large';
  textAlignment?: 'left' | 'right' | 'center';
  textTransform?: 'uppercase' | 'capitalize' | 'lowercase';
  styles?: string;
}
export function Text({
  children,
  color = 'primary',
  textAlignment = 'left',
  textTransform = 'lowercase',
  size = 'medium',
  styles = ''
}: textProps) {
  return (
    <p
      className={`${textSizes[size]} ${textColors[color]}
    text-${textAlignment} ${textTransform}
    ${styles}`}>
      {children}
    </p>
  );
}
