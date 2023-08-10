import React from 'react';

import cls from './shop.module.css';

import { ShopCart } from '@/components/ShopCart';

const Shop = () => {
  return (
    <div className={cls.container}>
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
    </div>
  );
};

export default Shop;
