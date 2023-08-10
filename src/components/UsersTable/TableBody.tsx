import React from 'react';

import {Button} from "@mantine/core";

import {FetchUsersResponse, User} from "@/components/UsersList/types/types";
import {formatDate} from "@/shared/utils";

interface Props {
  items: User[]
  setItems: React.Dispatch<React.SetStateAction<FetchUsersResponse>>;
}

export const TableBody = ({items, setItems}: Props) => {
  const handleDeleteUser =  (userId: number) => {
    setItems(prevState => ({
      ...prevState,
      items: prevState.items.filter(user => user.id !== userId)
    }))
  }

  const rows = items.map(({id, name, role, ctime}: User) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{role}</td>
      <td>{formatDate(ctime)}</td>
      <td>
        <Button
          color={'red'}
          size={'xs'}
          onClick={() => handleDeleteUser(id)}
        >
          Удалить
        </Button>
      </td>
    </tr>
  ))
  return (
    <tbody>{rows}</tbody>
  );
};

