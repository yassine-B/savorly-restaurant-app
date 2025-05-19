import React, { ReactNode } from 'react';
import { Styles, defaultButtonStyles } from './Styles';

interface buttonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  bgColor?: 'primary' | 'secondary' | 'yellow' | 'gray' | 'white_border' | 'transparent';
  shape?: 'normal' | 'rounded';
  onClick?: () => void;
  styles?: string;
}

export const Button = ({
  children,
  type = 'button',
  bgColor = 'primary',
  shape = 'normal',
  onClick,
  styles = ''
}: buttonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={() => {
          return onClick && onClick();
        }}
        className={`${defaultButtonStyles} ${
          bgColor === 'transparent' ? 'bg-transparent' : Styles[bgColor]
        } ${Styles[shape]} ${styles}`}>
        {children}
      </button>
    </>
  );
};
