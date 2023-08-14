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
    name: 'password',
    options?: RegisterOptions<LoginInputs, 'password'>,
  ) => UseFormRegisterReturn<'password'>;
}

export const PasswordInput = ({ errors, register, disabled }: Props) => {
  const { password } = LoginFormValidateParams;

  return (
    <Input.Wrapper
      className={cls.label}
      label="Пароль"
      required
      error={errors.password?.message}
    >
      <Input
        className={cls.input}
        type={'password'}
        placeholder="Пароль"
        disabled={disabled}
        {...register('password', {
          required: true,
          minLength: password.min,
          pattern: password.pattern,
        })}
      />
    </Input.Wrapper>
  );
};
