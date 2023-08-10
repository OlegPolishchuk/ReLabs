import React from 'react';

import { Text } from '@mantine/core';

import cls from '@/components/ShopCart/ui/ShopCard.module.css';

const specifications = [
  'Apple',
  'Смартфон iPhone 12 Pro 128Gb',
  '6.1"',
  '2532x1170',
  'OLED',
  '128 Гб',
];

export const Specifications = () => {
  const lastItemIndex = specifications.length - 1;

  return (
    <div>
      {specifications.map((item, index) => (
        <Text color={'dimmed'} component={'span'} key={index}>
          {item}
          {index !== lastItemIndex && <span className={cls.divider}>/</span>}
        </Text>
      ))}
    </div>
  );
};
