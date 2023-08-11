'use client';

import React from 'react';

import { ShopCardSkeleton } from './ShopCardSkeleton';

export const ShopSkeleton = () => {
  return (
    <>
      <ShopCardSkeleton />
      <ShopCardSkeleton />
      <ShopCardSkeleton />
      <ShopCardSkeleton />
    </>
  );
};
