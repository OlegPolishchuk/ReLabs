'use client';

import React, {ReactNode} from 'react';

import Link from "next/link";
import {usePathname} from "next/navigation";

import cls from './Navigation.module.css'; 

interface Props {
  href: string;
  children: ReactNode;
}

export const NavLink = ({href, children}: Props) => {
  const pathname = usePathname()

  const isActive = (linkHref: string) => pathname === linkHref;
  const activeClassName = isActive(href) ? cls.active : '';

  return (
    <Link href={href} className={`${cls.link} ${activeClassName}`}>{children}</Link>
  );
};
