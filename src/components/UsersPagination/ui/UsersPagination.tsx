'use client';

import React from 'react';

import {Pagination} from "@mantine/core";

import {FetchUsersResponse} from "@/components/UsersList/types/types";
import {fetchUsers} from "@/components/UsersList/utils/fetchUsers";

interface Props {
  total: number;
  className?: string;
  setData: React.Dispatch<React.SetStateAction<FetchUsersResponse>>;
}

export const UsersPagination = ({total, className, setData}: Props) => {
  const handleChangePage = async (value: number) => {
    const usersData = await fetchUsers(value)
    setData(usersData)
  }
  
  return (
    <Pagination total={total} className={className} onChange={handleChangePage} />
  );
};

