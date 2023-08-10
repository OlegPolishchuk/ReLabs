'use client';

import React from 'react';

import {Table} from "@mantine/core";

import {TableBody} from "./TableBody";
import {TableHead} from "./TableHead";

import {FetchUsersResponse, User} from "@/components/UsersList/types/types";

interface Props {
  items: User[];
  setItems: React.Dispatch<React.SetStateAction<FetchUsersResponse>>;
}

export const UsersTable = ({items, setItems}: Props) => {

  return (
    <>
      <Table striped highlightOnHover withBorder>
        <TableHead />
        <TableBody items={items} setItems={setItems} />
      </Table>
    </>
  );
};
