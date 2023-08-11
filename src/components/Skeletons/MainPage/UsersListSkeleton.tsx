import React from 'react';

import { Skeleton } from '@mantine/core';

export const UsersListSkeleton = () => {
  return (
    <div>
      <Skeleton height={37} mb={2} />

      <Skeleton height={45} mb={1} />
      <Skeleton height={45} mb={1} />
      <Skeleton height={45} mb={1} />
      <Skeleton height={45} mb={1} />
      <Skeleton height={45} mb={20} />

      <Skeleton height={32} width={'50%'} style={{ margin: '0 auto' }} />
    </div>
  );
};
