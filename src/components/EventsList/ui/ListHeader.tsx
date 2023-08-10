import React from 'react';

import { Text } from '@mantine/core';
import clsx from 'clsx';

import cls from './EventList.module.css';

export const ListHeader = () => {
  return (
    <div className={clsx(cls.row, cls.header)}>
      <Text fw={500} className={clsx(cls.col, cls.col_head)}>
        Дата
      </Text>
      <Text fw={500} className={clsx(cls.col, cls.col_head)}>
        Событие
      </Text>
    </div>
  );
};
