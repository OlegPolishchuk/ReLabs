'use client';

import React from 'react';

import { Skeleton } from '@mantine/core';

import cls from './LoginPageSkeleton.module.css';

export const LoginPageSkeleton = () => {
  return (
    <div className={cls.skeleton}>
      <Skeleton height={30} width={150} mb={30} className={cls.title} />

      <Skeleton height={8} width={150} mb={8} className={cls.hint} />
      <Skeleton height={30} mb={30} />

      <Skeleton height={8} width={150} mb={8} className={cls.hint} />
      <Skeleton height={30} mb={25} />

      <Skeleton height={30} width={120} />
    </div>
  );
};
