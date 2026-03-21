import React from 'react';
import AppNavBar from './ui/AppNavBar';
import ProductsView from './components/ProductsView';
import AppDialog from './ui/AppDialog';

export default function App() {
  return (
    <div>
      <AppNavBar />
      <ProductsView />
      <AppDialog />
    </div>
  );
}
