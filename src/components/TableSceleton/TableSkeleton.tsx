'use client';

import React from 'react';

import {Skeleton} from "@mantine/core";

export const TableSkeleton = () => {
  return (
    <>
      <Skeleton height={40}  width="100%" radius="sm" />
      <Skeleton height={40}  width="100%" radius="sm" />
      <Skeleton height={40}  width="100%" radius="sm" />
      <Skeleton height={40}  width="100%" radius="sm" />
      <Skeleton height={40}  width="100%" radius="sm" />
    </>
  );
};

