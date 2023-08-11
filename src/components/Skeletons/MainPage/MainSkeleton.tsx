'use client';

import React from 'react';

import { EventsSkeleton } from './EventsSkeleton';
import { UsersListSkeleton } from './UsersListSkeleton';

export const MainSkeleton = () => {
  return (
    <>
      <UsersListSkeleton />
      <EventsSkeleton />
    </>
  );
};
