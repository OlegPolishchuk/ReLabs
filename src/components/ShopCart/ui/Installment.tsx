import React from 'react';

import { Title } from '@mantine/core';

import cls from '@/components/ShopCart/ui/ShopCard.module.css';

export const Installment = () => {
  return (
    <div className={cls.installment}>
      <Title order={5} color={'grape'}>
        85 251 ₽
      </Title>
    </div>
  );
};
