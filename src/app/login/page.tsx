import React from 'react';
import {LoginForm} from "@/components/LoginForm/ui/LoginForm";
import cls from './Login.module.css';

const Page = () => {
  return (
    <div className={cls.wrapper}>
        <LoginForm />
    </div>
  );
};

export default Page;