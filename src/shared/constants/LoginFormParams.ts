export const LoginFormValidateParams = {
  login: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    error: 'Некорректный адрес электронной почты',
  },
  password: {
    min: 8,
    pattern: /[A-Z]/g,
    error: {
      min: 'Пароль должен содержать не менее 8 символов',
      pattern: 'Пароль должен содержать как минимум одну заглавную букву'
    }
  }
}