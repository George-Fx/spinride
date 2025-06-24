import React from 'react';

import styles from '../modules/components/button.module.scss';

interface ButtonProps {
  title: string;
  onClick?: () => void;
  colorScheme?: 'primary' | 'secondary';
  containerStyle?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  colorScheme = 'primary',
  containerStyle,
}) => {
  return (
    <div className={styles.container} style={containerStyle}>
      <button
        className={
          colorScheme === 'primary'
            ? styles.button
            : `${styles.button} ${styles.secondary}`
        }
        onClick={onClick}
      >
        <span className={styles.title}>{title}</span>
      </button>
    </div>
  );
};
