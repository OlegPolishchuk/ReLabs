import React from 'react';

import { Title } from '@mantine/core';

import cls from './ShopCard.module.css';

export const Price = () => {
  return (
    <div className={cls.price}>
      <Title order={4}>86 956 ₽</Title>
      <Title order={5} color={'dimmed'} strikethrough>
        99 999 ₽
      </Title>
    </div>
  );
};
