import React from 'react';

import {Button} from "@mantine/core";
import {signOut} from "next-auth/react";

interface Props {
  className?: string
}
export const LogoutButton = ({className}: Props) => {
  const handleLogout = async () => {
    await signOut()
  }
  return (
    <Button className={className} variant={'outline'} onClick={handleLogout}>Logout</Button>
  );
};
