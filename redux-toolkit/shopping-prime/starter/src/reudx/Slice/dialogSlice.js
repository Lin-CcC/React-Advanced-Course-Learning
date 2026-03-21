import { createSlice } from '@reduxjs/toolkit';
const initialState = { value: false };
export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state) => {
      state.value = true;
    },
    closeDialog: (state) => {
      state.value = false;
    },
  },
});
export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
