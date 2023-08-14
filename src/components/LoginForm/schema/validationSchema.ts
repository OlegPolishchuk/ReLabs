import { ObjectSchema } from 'yup';
import * as yup from 'yup';

import { LoginInputs } from '@/components/LoginForm/types/types';
import { LoginFormValidateParams } from '@/shared/constants';

const { password, login } = LoginFormValidateParams;

export const schema: ObjectSchema<LoginInputs> = yup
  .object({
    email: yup.string().required().email(login.error),
    password: yup
      .string()
      .required(password.error.required)
      .min(8, password.error.min)
      .matches(/[A-Z]/, password.error.pattern)
      .matches(/^\S*$/, password.error.spase),
  })
  .required();
