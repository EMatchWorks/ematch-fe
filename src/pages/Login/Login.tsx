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
  const { store } = useContext(Context);
  function handlerFornSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const validateErrors = {
      login: !(loginRegex.test(username) ? true : emailRegex.test(username)),
      password: !passwordRegex.test(password),
    };
    if (validateErrors.login || validateErrors.password) {
      console.log(validateErrors);
      setErrors({ ...validateErrors });
    } else {
      store.login(username, password);
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
            'The login must consist of 4-16 Latin characters, digits, and symbols "_", "-".'
          }
        >
          Email\Username
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
          error={errors.password}
          errorText={
            'The password must be between 4 and 16 characters, and contain at least one uppercase letter and one digit.'
          }
        >
          Password
        </Input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
