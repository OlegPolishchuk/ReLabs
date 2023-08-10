'use client';

import React from 'react';

import clsx from "clsx";

import {NavLink} from "./NavLink";

import {LogoutButton} from "@/components/LoboutButton/LogoutButton";
import cls from "@/components/Navigation/ui/Navigation.module.css";
import {Routes} from "@/shared/constants";

export const Navigation = () => {

  return (
    <nav className={clsx(cls.nav, 'container')}>
      <NavLink href={Routes.main} >Главная</NavLink>
      <NavLink href={Routes.login} >Авторизация</NavLink>
      <NavLink href={Routes.shop} >Магазин</NavLink>

      <LogoutButton className={cls.logout} />
    </nav>
  );
};

