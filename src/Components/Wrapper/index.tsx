import React, { ReactNode } from 'react';

interface wrapperProps {
  children: ReactNode;
  my?: string;
  size?: 'small' | 'medium';
  styles?: string;
}

export function Wrapper({ children, size = 'small', my = 'my-16', styles = '' }: wrapperProps) {
  const wrapperSizes = {
    medium: `my-2 mx-6`,
    small: `${my} m-auto lg:w-9/12 w-11/12`
  };
  return <div className={`${wrapperSizes[size]} ${styles}`}>{children}</div>;
}
