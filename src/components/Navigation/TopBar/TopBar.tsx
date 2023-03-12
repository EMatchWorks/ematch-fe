import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../..';
import styles from './TopBar.module.scss';

interface Props {
  className: string;
}

const TopBar = (props: Props) => {
  const { store } = useContext(Context);
  return (
    <div className={props.className + ' ' + styles.container}>
      {store.isAuth && !store.isLoading ? (
        <div className={styles.avatar}>
          <span>{store.user.Username.toString()[0].toLocaleUpperCase()}</span>
        </div>
      ) : (
        <div className={styles.link}>
          <Link role={'button'} to="./login">
            Sign in
          </Link>

          <Link role={'button'} to="./reg">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default observer(TopBar);
