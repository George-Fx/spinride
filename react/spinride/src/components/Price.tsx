import React from 'react';

import type {BikeType} from '../types';

type Props = {
  bike: BikeType;
};

export const Price: React.FC<Props> = ({bike}) => {
  return (
    <div>
      {bike.oldPrice && (
        <span
          className="t12"
          style={{
            textDecoration: 'line-through',
            marginRight: 4,
            color: 'var(--text-color)',
          }}
        >
          ${bike.oldPrice.toLocaleString('en-US')}
        </span>
      )}
      <span
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: bike.oldPrice
            ? 'var(--main-orange-color)'
            : 'var(--text-dark-color)',
        }}
      >
        ${bike.price.toLocaleString('en-US')}
      </span>
    </div>
  );
};
