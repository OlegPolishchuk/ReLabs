'use client';

import React, { ComponentPropsWithRef } from 'react';

import { Input } from '@mantine/core';
import {
  DeepRequired,
  FieldErrorsImpl,
  GlobalError,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';

import { LoginInputs } from '@/components/LoginForm/types/types';
import cls from '@/components/LoginForm/ui/LoginForm.module.css';
import { LoginFormValidateParams } from '@/shared/constants';

interface Props extends ComponentPropsWithRef<'input'> {
  errors: Partial<FieldErrorsImpl<DeepRequired<LoginInputs>>> & {
    root?: Record<string, GlobalError> & GlobalError;
  };
  register: (
    name: 'email',
    options?: RegisterOptions<LoginInputs, 'email'>,
  ) => UseFormRegisterReturn<'email'>;
}

export const LoginInput = ({ errors, register, disabled }: Props) => {
  const { login } = LoginFormValidateParams;
  const loginError = errors.email && login.error;

  return (
    <Input.Wrapper
      className={cls.label}
      label="Электронаая почта"
      required
      error={loginError}
    >
      <Input
        className={cls.input}
        placeholder="Электронная почта"
        disabled={disabled}
        {...register('email', { required: true, pattern: login.pattern })}
      />
    </Input.Wrapper>
  );
};
