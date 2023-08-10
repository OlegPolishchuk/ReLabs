'use client';

import React, {useMemo, useState} from 'react';

import cls from './UserList.module.css';

import {FetchUsersResponse} from "@/components/UsersList/types/types";
import {countTotalPages} from "@/components/UsersList/utils/countTotalPages";
import {UsersPagination} from "@/components/UsersPagination/ui/UsersPagination";
import {UsersTable} from "@/components/UsersTable/UsersTable";

interface Props {
  usersData: FetchUsersResponse;
}
export const UsersList = ({usersData}: Props) => {
  const [data, setData] = useState<FetchUsersResponse>(usersData);

  const totalPages = useMemo(() => countTotalPages(data.total), [data.total]);

  return (
    <div className={cls.container}>
      <UsersTable items={data.items} setItems={setData} />
      <UsersPagination total={totalPages} className={cls.pagination} setData={setData}/>
    </div>
  );
};

