import { useState, useContext } from 'react';
import { Context } from '../..';
import Input from '../../components/Input/Input';
import styles from './Registration.module.scss';

const loginRegex: RegExp = /^[a-zA-Z0-9_-]{4,16}$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    login: false,
    email: false,
    password: false,
  });
  const { userStore } = useContext(Context);
  async function handlerFormSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const validateErrors = {
      login: !loginRegex.test(username),
      email: !emailRegex.test(email),
      password: !passwordRegex.test(password),
    };
    if (
      validateErrors.login ||
      validateErrors.password ||
      validateErrors.email
    ) {
      setErrors({ ...validateErrors });
    } else {
      await userStore.registration(username, email, password);
      setErrors({ ...validateErrors });
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handlerFormSubmit}>
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
          Ім'я користувача
        </Input>
        <Input
          name="email"
          type="text"
          value={email}
          setInput={setEmail}
          error={errors.email}
          errorText={'Неправильний email. Будь ласка, спробуйте ще раз'}
        >
          Email
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
        <button>Registrantion</button>
      </form>
    </div>
  );
};
export default Registration;
