import React from 'react';
import AppNavBar from './ui/AppNavBar';
import ProductsView from './components/ProductsView';
import AppDialog from './ui/AppDialog';
import { load } from './reudx/Slice/cartListSlice';
import { useDispatch } from 'react-redux';
import { useLocalStorage } from 'react-use';

export default function App() {
  const dispatch = useDispatch();
  const [cartList] = useLocalStorage('cartList', []);
  React.useEffect(() => {
    dispatch(load(cartList));
  }, [dispatch, cartList]);
  return (
    <div>
      <AppNavBar />
      <ProductsView />
      <AppDialog />
    </div>
  );
}
