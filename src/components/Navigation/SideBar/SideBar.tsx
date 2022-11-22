import { NavLink } from 'react-router-dom';
import Play from '../../../assets/icons/Sidebar/Play/Play';
import News from '../../../assets/icons/Sidebar/News/News';
import Tournaments from '../../../assets/icons/Sidebar/Cup/Cup';
import Anticheat from '../../../assets/icons/Sidebar/Anticheat/Anticheat';
import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <NavLink to="." end>
        <Play />
      </NavLink>
      <NavLink to="news" end>
        <News />
      </NavLink>
      <NavLink to="tournaments" end>
        <Tournaments />
      </NavLink>
      <NavLink to="anticheat" end>
        <Anticheat />
      </NavLink>
    </div>
  );
};

export default SideBar;
