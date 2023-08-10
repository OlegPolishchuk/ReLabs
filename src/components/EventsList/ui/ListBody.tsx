import React from 'react';

import { Text } from '@mantine/core';

import { Event } from '@/components/EventsList/types/types';
import cls from '@/components/EventsList/ui/EventList.module.css';
import { formatDate } from '@/shared/utils';

interface Props {
  events: Event[];
}

export const ListBody = ({ events }: Props) => {
  if (!events) {
    return;
  }

  const rows = events.map(({ event, ctime }: Event) => (
    <div key={`${event}_${ctime}`} className={cls.row}>
      <Text className={cls.col}>{formatDate(ctime)}</Text>
      <Text className={cls.col}>{event}</Text>
    </div>
  ));

  return <div className={cls.body}>{rows}</div>;
};
