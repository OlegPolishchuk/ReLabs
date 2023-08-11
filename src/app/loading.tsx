import React from 'react';

import cls from './page.module.css';

import { MainSkeleton } from '@/components/Skeletons';

const Loading = () => {
  return (
    <main className={cls.main}>
      <MainSkeleton />
    </main>
  );
};

export default Loading;
