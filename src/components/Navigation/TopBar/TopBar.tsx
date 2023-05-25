import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../..';
import Preloader from '../../../assets/preloader/Preloader';
import styles from './TopBar.module.scss';
import Avatar from '../../Avatar/Avatar';

interface Props {
  className: string;
}

const TopBar = (props: Props) => {
  const { userStore } = useContext(Context);
  return (
    <div className={props.className + ' ' + styles.container}>
      {userStore.isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <div>
          {userStore.isAuth && !userStore.isLoading ? (
            <div className={styles.avatar}>
              <Link to={`/${userStore.user.id.toString()}`}>
                <Avatar id={userStore.user.id} />
              </Link>
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
      )}
    </div>
  );
};

export default observer(TopBar);
