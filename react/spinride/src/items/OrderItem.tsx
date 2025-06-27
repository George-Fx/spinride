import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import type {BikeType} from '../types';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {useAppDispatch} from '../store';
import {components} from '../components';
import {cartActions} from '../store/slices/cartSlice';

type Props = {
  bike: BikeType;
};

export const OrderItem: React.FC<Props> = ({bike}) => {
  const dispatch = useAppDispatch();
  const {navigate} = hooks.useRouter();

  const {list: cart} = useAppSelector((state) => state.cartSlice);
  const qty = cart.find((item) => item.id === bike.id)?.quantity || 1;

  return (
    <li style={{display: 'flex', flexDirection: 'row', gap: 14, height: 100}}>
      {/* image */}
      <div
        style={{
          width: 100,
          height: '100%',
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
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
        <span className="t14" style={{marginBottom: 3}}>
          {bike.name}
        </span>
        <components.Price bike={bike} />
        <span
          className="t14"
          style={{marginTop: 'auto', marginBottom: 3, lineHeight: 1.6}}
        >
          color: {bike.color || 'N/A'}
        </span>
      </div>
      {/* counter */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => {
            dispatch(cartActions.addToCart(bike));
          }}
        >
          <svg.CounterPlusSvg />
        </button>
        <span className="t14">{qty}</span>
        <button
          onClick={() => {
            dispatch(cartActions.removeFromCart(bike));
          }}
        >
          <svg.CounterMinusSvg />
        </button>
      </div>
    </li>
  );
};
