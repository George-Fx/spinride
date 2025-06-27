import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import type {BikeType} from '../types';
import {useAppSelector} from '../store';
import {useAppDispatch} from '../store';
import {components} from '../components';
import {cartActions} from '../store/slices/cartSlice';
import {wishlistActions} from '../store/slices/wishlistSlice';

type Props = {
  bike: BikeType;
};

export const FeaturedItem: React.FC<Props> = ({bike}) => {
  const dispatch = useAppDispatch();
  const {navigate} = hooks.useRouter();
  const {list: cart} = useAppSelector((state) => state.cartSlice);
  const {list: wishlist} = useAppSelector((state) => state.wishlistSlice);
  const ifInCart = cart.some((item) => item.id === bike.id);
  const ifInWishlist = wishlist.some((item) => item.id === bike.id);

  return (
    <>
      {/* image */}
      <button
        style={{
          width: 138,
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          marginBottom: 6,
          backgroundColor: 'var(--white-color)',
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
          style={{width: '100%', height: 170, objectFit: 'contain'}}
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
                alert('Already in wishlist');
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
                ifInWishlist ? 'var(--main-orange-color)' : 'var(--text-color)'
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
                alert('Already in cart');
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
        {/* badge */}
        <components.SaleBadge
          isOnSale={bike.oldPrice}
          containerStyle={{top: 10, left: 10}}
        />
      </button>
      {/* info */}
      <div style={{maxWidth: 138}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            marginBottom: 2,
          }}
        >
          <svg.RatingStarsSvg rating={bike.rating} />
          <span className="t12" style={{marginBottom: 1}}>
            ({bike.rating})
          </span>
        </div>
        <span
          className="t14 number-of-lines-1"
          style={{maxWidth: 200, marginBottom: 3}}
        >
          {bike.name}
        </span>
        <span style={{marginBottom: 9, fontSize: 14, fontWeight: 600}}>
          ${bike.price.toLocaleString('en-US')}
        </span>
      </div>
    </>
  );
};
