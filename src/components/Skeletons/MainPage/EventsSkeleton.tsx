import React from 'react';

import { Skeleton } from '@mantine/core';

export const EventsSkeleton = () => {
  return (
    <div>
      <Skeleton height={37} mb={2} />
      <Skeleton height={45} mb={1} />
    </div>
  );
};
