import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Play from '../../../assets/icons/Sidebar/Play/Play';
import News from '../../../assets/icons/Sidebar/News/News';
import Tournaments from '../../../assets/icons/Sidebar/Cup/Cup';
import Anticheat from '../../../assets/icons/Sidebar/Anticheat/Anticheat';
import styles from './SideBar.module.scss';

interface Props {
  className: string;
}

const SideBar = (props: Props) => {
  const { t } = useTranslation();
  const activeClass = (isActive: boolean) => {
    return isActive ? styles.active : styles.disable;
  };

  return (
    <div className={props.className}>
      <div className={styles.Container}>
        <NavLink
          className={({ isActive }) => activeClass(isActive)}
          to="./play"
        >
          <Play />
        </NavLink>
        <NavLink className={({ isActive }) => activeClass(isActive)} to="news">
          <News />
        </NavLink>
        <div
          className={styles.comingSoon}
          title={t('nav.tournamentsComingSoon')}
        >
          <Tournaments />
          <span className={styles.tooltip}>
            {t('nav.tournamentsComingSoon')}
          </span>
        </div>
        {/* <NavLink
          className={({ isActive }) => activeClass(isActive)}
          to="anticheat"
        >
          <Anticheat />
        </NavLink> */}
      </div>
    </div>
  );
};

export default SideBar;
