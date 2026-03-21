import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addCartList: (state, action) => {
      state.push(action.payload);
    },
    //把localstorage中的数组展开之后，给他push到名为cartList的全局的状态中，就算作一次数据的重新加载
    load: (state, action) => {
      state.push(...action.payload);
    },
  },
});
export const { addCartList, load } = cartListSlice.actions;
export default cartListSlice.reducer;
