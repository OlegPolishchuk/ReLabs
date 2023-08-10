import React from 'react';

import { Title } from '@mantine/core';

import cls from './EventList.module.css';

export const ListEmpty = () => {
  return (
    <div className={cls.empty}>
      <Title order={4} color={'dimmed'}>
        Пока событий нет =(
      </Title>
    </div>
  );
};
