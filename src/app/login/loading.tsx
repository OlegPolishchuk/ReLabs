import React from 'react';

import cls from './Login.module.css';

import { LoginPageSkeleton } from '@/components/Skeletons';

const Loading = () => {
  return (
    <div className={cls.wrapper}>
      <LoginPageSkeleton />
    </div>
  );
};

export default Loading;
