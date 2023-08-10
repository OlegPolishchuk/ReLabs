'use client';

import React from 'react';

import { Text } from '@mantine/core';

import { useStartWebSocket } from '../hooks/useStartWebSocket';

import cls from './EventList.module.css';
import { ListBody } from './ListBody';
import { ListHeader } from './ListHeader';

import { ListEmpty } from '@/components/EventsList/ui/ListEmpty';

export const EventList = () => {
  const { events, errorMessage } = useStartWebSocket();
  const isEmpty = events.length === 0;

  return (
    <div className={cls.container}>
      <ListHeader />

      {isEmpty && <ListEmpty />}
      {errorMessage && <Text>{errorMessage}</Text>}

      <ListBody events={events} />
    </div>
  );
};
