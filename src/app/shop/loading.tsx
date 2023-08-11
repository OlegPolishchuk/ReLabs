import React from 'react';

import cls from './shop.module.css';

import { ShopSkeleton } from '@/components/Skeletons';

const Loading = () => {
  return (
    <div className={cls.container}>
      <ShopSkeleton />
    </div>
  );
};

export default Loading;
