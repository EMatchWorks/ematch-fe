import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Preloader from '../../../assets/preloader/Preloader';
import styles from './TopBar.module.scss';
import UserIcon from '../../../assets/icons/UserSideBar/User';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';
import { useAppSelector } from '../../../store/hooks';

interface Props {
  className: string;
}

const TopBar = (props: Props) => {
  const { isLoading, isAuth, user } = useAppSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <div className={props.className + ' ' + styles.container}>
      {isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <div className={styles.topRow}>
          <LanguageSwitcher />
          {isAuth && !isLoading ? (
            <div className={styles.avatar}>
              <Link to={`/users/${user.id.toString()}`}>
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

export default TopBar;
