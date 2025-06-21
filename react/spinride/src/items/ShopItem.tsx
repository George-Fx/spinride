import React from 'react';
import {useAtom} from 'jotai';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import type {BikeType} from '../types';
import {constants} from '../constants';
import {addToCartAtom} from '../atoms/cart.atom';

type Props = {
  bike: BikeType;
};

export const ShopItem: React.FC<Props> = ({bike}) => {
  const {navigate} = hooks.useRouter();

  const [, addToCart] = useAtom(addToCartAtom);
  // addToCart(dish);

  return (
    <li style={{width: '100%'}}>
      <button
        onClick={() => {
          navigate(constants.routes.BIKE, {
            state: {bikeId: bike.id},
          });
        }}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'var(--white-color)',
            height: 170,
            marginBottom: 6,
            width: '100%',
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
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 8,
              }}
            >
              <svg.AddToWLHeartSvg />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(bike);
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingTop: 8,
              }}
            >
              <svg.AddToCartBag />
            </div>
          </div>
        </div>
        <span
          className="t14 number-of-lines-1"
          style={{color: 'var(--text-color)', marginBottom: 3}}
        >
          {bike.name}
        </span>
        <span className="t14" style={{fontWeight: 600}}>
          ${bike.price.toLocaleString()}
        </span>
      </button>
    </li>
  );
};
