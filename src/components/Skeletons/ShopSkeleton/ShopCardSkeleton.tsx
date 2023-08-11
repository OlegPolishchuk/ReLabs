import React from 'react';

import { Skeleton } from '@mantine/core';

export const ShopCardSkeleton = () => {
  return (
    <div style={{ maxWidth: '400px', padding: '20px' }}>
      <Skeleton height={300} width={230} mb={25} mx={'auto'} radius={'lg'} />

      <Skeleton height={26} width={150} mb={8} />
      <Skeleton height={24} width={75} mb={8} />

      <Skeleton height={20} width={130} mb={8} />
      <Skeleton height={45} mb={8} />

      <Skeleton height={36} width={140} mb={8} radius={'xl'} />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Skeleton height={36} width={100} radius={'md'} />
        <Skeleton height={24} width={24} radius={'xl'} mx={20} circle />
      </div>
    </div>
  );
};
