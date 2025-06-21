import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import type {BikeType} from '../types';

export type CartStateType = {
  total: number;
  delivery: number;
  discount: number;
  subtotal: number;
  promoCode: string;
  list: BikeType[];
  discountAmount: number;
};

const initialState: CartStateType = {
  total: 0,
  list: [],
  delivery: 0,
  discount: 0,
  subtotal: 0,
  promoCode: '',
  discountAmount: 0,
};

export const cartAtom = atomWithStorage<CartStateType>('cart', initialState);

export const addToCartAtom = atom(null, (get, set, bike: BikeType) => {
  const state = get(cartAtom);
  const inCart = state.list.find((item) => item.id === bike.id);

  let newList = [...state.list];
  let subtotal = state.subtotal;
  let total = state.total;
  let discountAmount = state.discountAmount;

  if (inCart) {
    newList = newList.map((item) =>
      item.id === bike.id
        ? {...item, quantity: (item.quantity ?? 1) + 1}
        : item,
    );
    subtotal += Number(bike.price);
    const newTotal = subtotal * (1 - state.discount / 100);
    discountAmount = Number((subtotal - newTotal).toFixed(2));
    total = newTotal;
  } else {
    newList.push({...bike, quantity: 1});
    subtotal += Number(bike.price);
    const newTotal = subtotal * (1 - state.discount / 100);
    discountAmount = Number((subtotal - newTotal).toFixed(2));
    total = newTotal;
  }

  set(cartAtom, {
    ...state,
    list: newList,
    subtotal,
    total,
    discountAmount,
  });
});

export const removeFromCartAtom = atom(null, (get, set, bike: BikeType) => {
  const state = get(cartAtom);
  const inCart = state.list.find((item) => item.id === bike.id);

  if (!inCart) return;

  let newList: BikeType[];
  let subtotal = state.subtotal;
  let total = state.total;
  let discountAmount = state.discountAmount;
  let discount = state.discount;
  let promoCode = state.promoCode;

  if ((inCart.quantity ?? 1) > 1) {
    newList = state.list.map((item) =>
      item.id === bike.id
        ? {...item, quantity: (item.quantity ?? 1) - 1}
        : item,
    );
    subtotal -= Number(bike.price);
  } else {
    newList = state.list.filter((item) => item.id !== bike.id);
    subtotal -= Number(bike.price);
  }

  const newTotal = subtotal * (1 - discount / 100);
  discountAmount = Number((subtotal - newTotal).toFixed(2));
  total = newTotal;

  if (newList.length === 0) {
    discount = 0;
    promoCode = '';
  }

  set(cartAtom, {
    ...state,
    list: newList,
    subtotal,
    total,
    discount,
    promoCode,
    discountAmount,
  });
});

export const resetCartAtom = atom(null, (_get, set) => {
  set(cartAtom, initialState);
});

export const atoms = {
  cartAtom,
  addToCartAtom,
  removeFromCartAtom,
  resetCartAtom,
  initialState,
};
