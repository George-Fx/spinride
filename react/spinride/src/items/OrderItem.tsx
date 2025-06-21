import React from 'react';

import {hooks} from '../hooks';
import type {BikeType} from '../types';
import {components} from '../components';
import {constants} from '../constants';

type Props = {
  bike: BikeType;
};

export const OrderItem: React.FC<Props> = ({bike}) => {
  const {navigate} = hooks.useRouter();

  return (
    <li>
      <button
        style={{
          width: 100,
          height: 100,
          borderRadius: 12,
          objectFit: 'cover',
          overflow: 'hidden',
          backgroundColor: 'var(--white-color)',
          position: 'relative',
        }}
        onClick={() => {
          navigate(constants.routes.BIKE, {
            state: {bikeId: bike.id},
          });
        }}
      >
        <img
          src={bike.image}
          alt={bike.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
        <components.SaleBadge isOnSale={bike.oldPrice} />
      </button>
    </li>
  );
};
