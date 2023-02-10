import { useState } from 'react';
import Input from '../../components/Input/Input';
import styles from './Registration.module.scss';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
        <Input name="email" type="text" value={email} setInput={setEmail}>
          Email
        </Input>
        <Input
          name="password"
          type="password"
          value={password}
          setInput={setPassword}
        >
          Password
        </Input>
        <button>Registrantion</button>
      </form>
    </div>
  );
};
export default Registration;
