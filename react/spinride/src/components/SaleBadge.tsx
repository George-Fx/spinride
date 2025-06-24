import React from 'react';

type Props = {
  isOnSale: number | null;
  containerStyle?: React.CSSProperties;
};

export const SaleBadge: React.FC<Props> = ({isOnSale, containerStyle}) => {
  if (!isOnSale) return null;
  return (
    <div
      style={{
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: '#66A97D',
        height: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 6,
        ...containerStyle,
      }}
    >
      <span
        style={{
          fontSize: 8,
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--white-color)',
          fontFamily: 'Mulish',
        }}
      >
        sale
      </span>
    </div>
  );
};
