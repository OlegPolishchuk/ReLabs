import React from 'react';

import cls from './Header.module.css';

import {Navigation} from "@/components/Navigation";

export const Header = () => {
  return (
    <header className={cls.header}>
      <Navigation />
    </header>
  );
};

