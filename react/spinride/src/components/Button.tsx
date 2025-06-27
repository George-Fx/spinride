import React from 'react';

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
    <div style={containerStyle}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
          border: 'none',
          background:
            colorScheme === 'primary'
              ? 'var(--main-orange-color)'
              : 'var(--white-color)',
        }}
      >
        <span
          style={{
            fontWeight: 600,
            textTransform: 'capitalize',
            fontSize: 16,
            color:
              colorScheme === 'primary'
                ? 'var(--white-color)'
                : 'var(--main-dark-color)',
          }}
        >
          {title}
        </span>
      </button>
    </div>
  );
};
