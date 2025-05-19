import React from 'react';
import { Styles } from './Styles';

interface overlayProps {
  opacity?: 0 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 100;
  width?: string;
  height?: string;
  styles?: string;
  onClose?: () => void;
}
export const Overlay = ({
  opacity = 75,
  height = 'h-full',
  width = 'w-full',
  styles = '',
  onClose
}: overlayProps) => {
  return (
    <div
      onClick={() => {
        onClose && onClose();
      }}
      className={`${Styles.overlay} ${height} ${width}
  ${Styles[opacity]} ${styles}`}></div>
  );
};
