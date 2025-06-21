import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

import type {BikeType} from '../types';

export type WishlistStateType = {
  list: BikeType[];
};

const initialState: WishlistStateType = {
  list: [],
};

export const wishlistAtom = atomWithStorage<WishlistStateType>(
  'wishlist',
  initialState,
);

export const addToWishlistAtom = atom(null, (get, set, bike: BikeType) => {
  const state = get(wishlistAtom);
  const inWishlist = state.list.find((item) => item.id === bike.id);

  let newList = [...state.list];

  if (!inWishlist) {
    newList.push(bike);
  } else {
    newList = newList.filter((item) => item.id !== bike.id);
  }

  set(wishlistAtom, {
    ...state,
    list: newList,
  });
});

export const removeFromWishlistAtom = atom(null, (get, set, bike: BikeType) => {
  const state = get(wishlistAtom);
  const newList = state.list.filter((item) => item.id !== bike.id);

  set(wishlistAtom, {
    ...state,
    list: newList,
  });
});

export const isInWishlistAtom = atom((get) => (bike: BikeType) => {
  const state = get(wishlistAtom);
  return state.list.some((item) => item.id === bike.id);
});
