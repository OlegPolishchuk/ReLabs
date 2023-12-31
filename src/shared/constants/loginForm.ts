export const LoginFormValidateParams = {
  login: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    error: 'Некорректный адрес электронной почты',
    required: 'Поле обязательно для заполнения',
  },
  password: {
    min: 8,
    pattern: /^[^A-Z\s]*[A-Z][^A-Z\s]*$/g,
    error: {
      required: 'Пароль должен содержать не менее 8 символов',
      min: 'Пароль должен содержать не менее 8 символов',
      spase: 'Пароль не должен содержать пробелы',
      pattern: 'Пароль должен содержать как минимум одну заглавную букву',
    },
  },
};
