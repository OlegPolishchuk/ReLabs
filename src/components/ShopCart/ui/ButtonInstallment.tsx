import React from 'react';

import { Button } from '@mantine/core';

import cls from './ShopCard.module.css';

export const ButtonInstallment = () => {
  return (
    <Button
      className={cls.button_installment}
      variant="gradient"
      radius={'xl'}
      gradient={{ from: '#8CE99A', to: '#FFE066', deg: 120 }}
      uppercase
    >
      Рассрочка 0-0-6
    </Button>
  );
};
