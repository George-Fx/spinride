import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {BikeType} from '../../types';

export type WishlistStateType = {list: BikeType[]};

const initialState: WishlistStateType = {
  list: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<BikeType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.list.push({
          ...action.payload,
        });
      }
    },
    removeFromWishlist: (state, action: PayloadAction<BikeType>) => {
      const inWishlist = state.list.find(
        (item) => item.id === action.payload.id,
      );

      if (inWishlist) {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
    setWishlist: (state, action: PayloadAction<BikeType[]>) => {
      state.list = action.payload;
    },
    updateList: (state, action: PayloadAction<BikeType[]>) => {
      state.list = action.payload;
    },
    resetWishlist: (state) => {
      state.list = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  setWishlist,
  updateList,
  resetWishlist,
} = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;
