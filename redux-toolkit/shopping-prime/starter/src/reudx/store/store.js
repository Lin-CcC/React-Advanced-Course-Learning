import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import dialogReducer from '../Slice/dialogSlice';
import cartListReducer from '../Slice/cartListSlice';

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    cartList: cartListReducer,
  },
});
