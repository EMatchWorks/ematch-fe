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
  const { store } = useContext(Context);
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
      console.log(validateErrors);
      setErrors({ ...validateErrors });
    } else {
      await store.registration(username, email, password);
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
            'The login must consist of 4-16 Latin characters, digits, and symbols "_", "-".'
          }
        >
          Username
        </Input>
        <Input
          name="email"
          type="text"
          value={email}
          setInput={setEmail}
          error={errors.email}
          errorText={'Incorrect email. Please try again'}
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
            'The password must be between 4 and 16 characters, and contain at least one uppercase letter and one digit.'
          }
        >
          Password
        </Input>
        <button>Registrantion</button>
      </form>
    </div>
  );
};
export default Registration;
