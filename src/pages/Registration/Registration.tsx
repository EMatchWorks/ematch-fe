import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Context } from '../..';
import Input from '../../components/Input/Input';
import styles from './Registration.module.scss';

const loginRegex: RegExp = /^[a-zA-Z0-9_-]{4,16}$/;
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

const Registration = () => {
  const { t } = useTranslation();
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
          errorText={t('auth.register.usernameError')}
        >
          {t('auth.register.usernameLabel')}
        </Input>
        <Input
          name="email"
          type="text"
          value={email}
          setInput={setEmail}
          error={errors.email}
          errorText={t('auth.register.emailError')}
        >
          {t('auth.register.emailLabel')}
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
          error={errors.password}
          errorText={t('auth.register.passwordError')}
        >
          {t('auth.register.passwordLabel')}
        </Input>
        <button>{t('auth.register.submit')}</button>
      </form>
    </div>
  );
};
export default Registration;
