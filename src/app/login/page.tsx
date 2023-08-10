import React from 'react';

import cls from './Login.module.css';

import { LoginForm } from '@/components/LoginForm';

const Login = () => {
  return (
    <div className={cls.wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
