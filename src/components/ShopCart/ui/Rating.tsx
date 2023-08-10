import React from 'react';

import { Rating as MantineRating, Text } from '@mantine/core';

import cls from './ShopCard.module.css';

export const Rating = () => {
  return (
    <div className={cls.rating}>
      <MantineRating defaultValue={2} color="grape" />

      <Text color={'dimmed'} size={'sm'}>
        87
      </Text>
    </div>
  );
};
