import React from 'react';
import {useAtom} from 'jotai';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import type {BikeType} from '../types';
import {constants} from '../constants';
import {components} from '../components';
import {removeFromWishlistAtom} from '../atoms/wishlist.atom';

type Props = {
  bike: BikeType;
  isLast?: boolean;
};

export const WishlistItem: React.FC<Props> = ({bike, isLast}) => {
  const {navigate} = hooks.useRouter();
  const [, removeFromWishlist] = useAtom(removeFromWishlistAtom);

  return (
    <li
      style={{
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: isLast ? 0 : 14,
        display: 'flex',
        gap: 14,
        borderBottom: isLast ? 'none' : '1px solid #E2E2E2',
      }}
    >
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

      <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
        <span style={{marginBottom: 3}} className="t14">
          {bike.name}
        </span>
        <span style={{marginBottom: 9, fontSize: 14, fontWeight: 600}}>
          ${bike.price.toLocaleString()}
        </span>
        <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
          <svg.RatingStarsSvg rating={bike.rating} />
          <span className="t12" style={{marginBottom: 1}}>
            ({bike.rating})
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <svg.AddToCartSvg />
        <button
          onClick={() => {
            removeFromWishlist(bike);
          }}
        >
          <svg.IsInWishlistSvg />
        </button>
      </div>
    </li>
  );
};
