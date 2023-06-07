import { useState, useContext } from 'react';
import { Context } from '../..';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';

const loginRegex: RegExp = /^[a-zA-Z0-9_-]{4,16}$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

const Login = () => {
  const [errors, setErrors] = useState({
    login: false,
    password: false,
  });
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { userStore } = useContext(Context);
  function handlerFornSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const validateErrors = {
      login: !(loginRegex.test(username) ? true : emailRegex.test(username)),
      password: !passwordRegex.test(password),
    };
    if (validateErrors.login || validateErrors.password) {
      setErrors({ ...validateErrors });
    } else {
      userStore.login(username, password);
      setErrors({ ...validateErrors });
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handlerFornSubmit}>
        <Input
          name="username"
          type="text"
          value={username}
          setInput={setUsername}
          error={errors.login}
          errorText={
            'Логін повинен складатися з 4-16 латинських символів, цифр та символів "_", "-".'
          }
        >
          Email\Ім'я користувача
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
          error={errors.password}
          errorText={
            'Пароль повинен містити від 4 до 16 символів і містити принаймні одну велику літеру та одну цифру.'
          }
        >
          Пароль
        </Input>
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};

export default Login;
