import { useRef } from 'react';
import { DataView } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { show } from '../util/toastHelper';
import { ItemTemplate } from '../ui/itemTemplate';
import { getProductSeverity } from '../util/getProductSeverity';
import { useProducts } from '../hooks/useProducts';
import { useCartActions } from '../hooks/useCartActions';

export default function ProductsView() {
  const products = useProducts();
  const toastTopRight = useRef(null);

  const showMessage = (severity) => {
    let label = '添加购物车成功';
    let life = 1000;
    if (severity === 'error') {
      label = '添加失败，该商品已在购物车中';
      life = 3000;
    }
    show(toastTopRight, label, severity, life);
  };

  const { cartList, addToCart } = useCartActions(showMessage);

  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return (
        <ItemTemplate
          product={product}
          index={index}
          addToCart={addToCart}
          getSeverity={getProductSeverity}
          key={product.id}
        />
      );
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
