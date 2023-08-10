'use client';

import React from 'react';

import { Paper } from '@mantine/core';

import { ButtonBasket } from './ButtonBasket';
import { ButtonInstallment } from './ButtonInstallment';
import { ButtonLike } from './ButtonLike';
import { CardImage } from './CardImage';
import { Installment } from './Installment';
import { Price } from './Price';
import { Rating } from './Rating';
import cls from './ShopCard.module.css';
import { Specifications } from './Specifications';

export const ShopCart = () => {
  return (
    <Paper shadow="md" radius="lg" p="lg" className={cls.card}>
      <CardImage />

      <div className={cls.description}>
        <div>
          <Price />
          <Installment />
        </div>

        <Rating />
        <Specifications />
      </div>

      <ButtonInstallment />

      <div className={cls.controls}>
        <ButtonBasket />
        <ButtonLike />
      </div>
    </Paper>
  );
};
