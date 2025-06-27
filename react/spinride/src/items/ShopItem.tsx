import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import type {BikeType} from '../types';
import {constants} from '../constants';
import {components} from '../components';
import {cartActions} from '../store/slices/cartSlice';
import {useAppDispatch, useAppSelector} from '../store';
import {wishlistActions} from '../store/slices/wishlistSlice';

type Props = {
  bike: BikeType;
};

export const ShopItem: React.FC<Props> = ({bike}) => {
  const dispatch = useAppDispatch();
  const {navigate} = hooks.useRouter();
  const {list: cart} = useAppSelector((state) => state.cartSlice);
  const {list: wishlist} = useAppSelector((state) => state.wishlistSlice);
  const ifInCart = cart.some((item) => item.id === bike.id);
  const ifInWishlist = wishlist.some((item) => item.id === bike.id);

  return (
    <li style={{width: '100%'}}>
      <div
        onClick={() => {
          navigate(constants.routes.BIKE, {
            state: {bikeId: bike.id},
          });
        }}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          userSelect: 'none',
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
                if (!ifInWishlist) {
                  dispatch(wishlistActions.addToWishlist(bike));
                } else {
                  alert('This bike is already in your wishlist');
                }
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 8,
              }}
            >
              <svg.AddToWLHeartSvg
                fillColor={ifInWishlist ? 'var(--main-orange-color)' : '#fff'}
                strokeColor={
                  ifInWishlist
                    ? 'var(--main-orange-color)'
                    : 'var(--text-color)'
                }
              />
            </div>
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!ifInCart) {
                  dispatch(cartActions.addToCart(bike));
                } else {
                  alert('This bike is already in your cart');
                }
              }}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingTop: 8,
              }}
            >
              <svg.AddToCartBag
                color={
                  ifInCart ? 'var(--main-orange-color)' : 'var(--text-color)'
                }
              />
            </div>
          </div>
        </div>
        <span
          className="t14 number-of-lines-1"
          style={{color: 'var(--text-color)', marginBottom: 3}}
        >
          {bike.name}
        </span>
        <components.Price bike={bike} />
      </div>
    </li>
  );
};
