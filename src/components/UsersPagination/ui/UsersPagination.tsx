'use client';

import React from 'react';

import { Pagination as MantinePagination } from '@mantine/core';

import { FetchUsersResponse } from '@/components/UsersList/types/types';
import { fetchUsers } from '@/components/UsersList/utils/fetchUsers';
import { Pagination } from '@/shared/constants/pagination';

interface Props {
  total: number;
  className?: string;
  setData: React.Dispatch<React.SetStateAction<FetchUsersResponse>>;
}

export const UsersPagination = ({ total, className, setData }: Props) => {
  const handleChangePage = async (value: number) => {
    const offset = (value - 1) * Pagination.limit;

    const usersData = await fetchUsers(offset);
    setData(usersData);
  };

  return (
    <MantinePagination total={total} className={className} onChange={handleChangePage} />
  );
};
