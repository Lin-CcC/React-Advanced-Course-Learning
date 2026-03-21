import { useLocalStorage } from 'react-use';
import { useDispatch } from 'react-redux';
import { addCartList } from '../reudx/Slice/cartListSlice';

export function useCartActions(showMessage) {
  const [cartList, setCartList] = useLocalStorage('cartList', []);
  const dispatch = useDispatch();

  function addToCart(product) {
    const safeCartList = cartList || [];

    if (safeCartList.some((item) => Number(item.id) === Number(product.id))) {
      showMessage('error');
      return false;
    }

    const newCartList = [...safeCartList, product];
    setCartList(newCartList);
    dispatch(addCartList(newCartList));
    showMessage('success');
    return true;
  }

  return {
    cartList,
    addToCart,
  };
}
