import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Context } from '../../..';
import Preloader from '../../../assets/preloader/Preloader';
import styles from './TopBar.module.scss';
import UserIcon from '../../../assets/icons/UserSideBar/User';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

interface Props {
  className: string;
}

const TopBar = (props: Props) => {
  const { userStore } = useContext(Context);
  const { t } = useTranslation();

  return (
    <div className={props.className + ' ' + styles.container}>
      {userStore.isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <div className={styles.topRow}>
          <LanguageSwitcher />
          {userStore.isAuth && !userStore.isLoading ? (
            <div className={styles.avatar}>
              <Link to={`/users/${userStore.user.id.toString()}`}>
                <UserIcon />
              </Link>
            </div>
          ) : (
            <div className={styles.link}>
              <Link role={'button'} to="./login">
                {t('nav.login')}
              </Link>
              <Link role={'button'} to="./reg">
                {t('nav.register')}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default observer(TopBar);
