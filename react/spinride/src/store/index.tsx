import storage from 'redux-persist/lib/storage';
import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import type {TabStateType} from './slices/tabSlice';
import type {CartStateType} from './slices/cartSlice';
import type {ModalStateType} from './slices/modalSlice';
import type {WishlistStateType} from './slices/wishlistSlice';
import type {VerificationStateType} from './slices/verificationSlice';

import {tabSlice} from './slices/tabSlice';
import {cartSlice} from './slices/cartSlice';
import {modalSlice} from './slices/modalSlice';
import {wishlistSlice} from './slices/wishlistSlice';
import {verificationSlice} from './slices/verificationSlice';

const rootReducer = combineReducers({
  tabSlice: tabSlice.reducer,
  cartSlice: cartSlice.reducer,
  modalSlice: modalSlice.reducer,
  wishlistSlice: wishlistSlice.reducer,
  verificationSlice: verificationSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tabSlice', 'sortingSlice', 'cartSlice', 'wishlistSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export interface RootState {
  tabSlice: TabStateType;
  cartSlice: CartStateType;
  modalSlice: ModalStateType;
  wishlistSlice: WishlistStateType;
  verificationSlice: VerificationStateType;
}

export const persistor = persistStore(store);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
