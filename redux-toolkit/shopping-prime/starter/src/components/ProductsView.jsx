import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { ProductService } from '../service/ProductService';
import { useLocalStorage } from 'react-use';
import { Toast } from 'primereact/toast';
import { show } from '../util/toastHelper';
import { addCartList } from '../reudx/Slice/cartListSlice';
import { useDispatch } from 'react-redux';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useLocalStorage('cartList', []);
  const dispatch = useDispatch();

  const toastTopRight = useRef(null);

  const showMessage = (event, ref, severity) => {
    let label = '添加购物车成功';
    let life = 1000;
    if (severity === 'error') {
      label = '添加失败，该商品已在购物车中';
      life = 3000;
    }
    show(ref, label, severity, life);
  };

  function addToCart(product) {
    if (cartList.some((item) => Number(item.id) === Number(product.id))) {
      showMessage(null, toastTopRight, 'error');
      return;
    }
    const newCartList = [...cartList, product];
    setCartList(newCartList);
    dispatch(addCartList(newCartList));
    showMessage(null, toastTopRight, 'success');
  }

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

  const itemTemplate = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames(
            'flex flex-column xl:flex-row xl:align-items-start p-4 gap-4',
            { 'border-top-1 surface-border': index !== 0 },
          )}
        >
          <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <Rating value={product.rating} readOnly cancel={false}></Rating>
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{product.category}</span>
                </span>
                <Tag
                  value={product.inventoryStatus}
                  severity={getSeverity(product)}
                ></Tag>
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${product.price}</span>
              <Button
                icon="pi pi-shopping-cart"
                className="p-button-rounded"
                disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                onClick={() => {
                  addToCart(product);
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  return (
    <div>
      <div className="card">
        <DataView
          value={products}
          listTemplate={listTemplate}
          paginator
          rows={5}
        />
      </div>
      <div className="card flex justify-content-center">
        <Toast ref={toastTopRight} position="top-right" />
      </div>
    </div>
  );
}
