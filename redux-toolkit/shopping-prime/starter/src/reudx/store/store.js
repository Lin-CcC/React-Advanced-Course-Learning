import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from '../Slice/dialogSlice';
export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
  },
});
