import React from 'react';

import { ActionIcon } from '@mantine/core';
import { Heart } from 'tabler-icons-react';

export const ButtonLike = () => {
  return (
    <ActionIcon>
      <Heart size={24} strokeWidth={2} color={'#bf40bb'} />
    </ActionIcon>
  );
};
