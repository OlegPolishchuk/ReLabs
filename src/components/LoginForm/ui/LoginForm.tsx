'use client';

import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Title } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { schema } from '../schema/validationSchema';
import { LoginInputs } from '../types/types';

import { LoginInput } from './LoginInput';
import { PasswordInput } from './PasswordInput';

import cls from '@/components/LoginForm/ui/LoginForm.module.css';

const DELAY = 2000;

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginInputs> = async data => {
    setLoading(true);

    setTimeout(async () => {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: `${window.location.origin}/`,
      });

      setLoading(false);
    }, DELAY);
  };

  return (
    <form className={cls.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Title order={3}>Авторизация</Title>

      <LoginInput errors={errors} register={register} disabled={loading} />
      <PasswordInput errors={errors} register={register} disabled={loading} />

      <Button type={'submit'} loading={loading}>
        Авторизация
      </Button>
    </form>
  );
};
