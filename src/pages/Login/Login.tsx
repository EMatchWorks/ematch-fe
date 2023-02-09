import { useState } from 'react';
import Input from '../../components/Input/Input';
import styles from './Login.module.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handlerFornSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
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
          Username
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
        >
          Password
        </Input>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
