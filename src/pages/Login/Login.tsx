import { useState, useContext } from 'react';
import { Context } from '../..';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);
  function handlerFornSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    store.login(username, password);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handlerFornSubmit}>
        <Input
          name="username"
          type="text"
          value={username}
          setInput={setUsername}
        >
          Email\Username
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
        >
          Password
        </Input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
