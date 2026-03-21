import { useEffect, useState } from 'react';
import { ProductService } from '../service/ProductService';

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  return products;
}
