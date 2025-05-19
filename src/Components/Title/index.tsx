import React, { ReactNode } from 'react';
import { textColors, titleSizes } from '../SharedStyles';

interface titleProps {
  children: ReactNode;
  titleAlignment?: 'left' | 'right' | 'center';
  color?: 'primary' | 'black' | 'white';
  titleTransform?: 'uppercase' | 'capitalize';
  titleWeight?: 'bold' | 'semibold';
  size?: 'small' | 'medium' | 'large' | 'x_large';
  styles?: string;
}
interface colorfullTitleProps {
  size: 'small' | 'medium' | 'large' | 'x_large';
  title: string;
  titleWithColor: string;
  titleAlignment?: 'left' | 'right' | 'center';
  colors?: 'color_1' | 'color_2';
  titleWeight?: 'bold' | 'semibold';
  styles?: string;
}

export function ColorfulTitle({
  size,
  title,
  titleWithColor,
  colors = 'color_1',
  titleAlignment = 'left',
  styles
}: colorfullTitleProps) {
  const colorsList: { [k: string]: { title: 'white' | 'black'; titleWithColor: string } } = {
    color_1: {
      title: 'white',
      titleWithColor: 'text-secondary'
    },
    color_2: {
      title: 'black',
      titleWithColor: 'text-secondary'
    }
  };
  return (
    <Title
      color={colorsList[colors].title}
      size={size}
      titleAlignment={titleAlignment}
      styles={styles}
      titleTransform="uppercase">
      {title}
      <span className={`${colorsList[colors].titleWithColor}`}>{titleWithColor}</span>
    </Title>
  );
}

export function Title({
  children,
  size = 'medium',
  color = 'primary',
  titleWeight = 'bold',
  titleTransform = 'uppercase',
  titleAlignment = 'left',
  styles = ''
}: titleProps) {
  return (
    <>
      {
        <h1
          className={`${titleSizes[size]} ${textColors[color]} font-${titleWeight} text-${titleAlignment}  ${titleTransform} ${styles}`}>
          {children}
        </h1>
      }
    </>
  );
}
