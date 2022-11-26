import { NavLink } from 'react-router-dom';
import Play from '../../../assets/icons/Sidebar/Play/Play';
import News from '../../../assets/icons/Sidebar/News/News';
import Tournaments from '../../../assets/icons/Sidebar/Cup/Cup';
import Anticheat from '../../../assets/icons/Sidebar/Anticheat/Anticheat';
import styles from './SideBar.module.scss';
import { useState } from 'react';

const SideBar = () => {
  const [active, setActive] = useState('none');

  const activeChange = (link: string) => {
    setActive(link);
  };

  return (
    <div className={styles.sideBar}>
      <NavLink
        className={({ isActive }) => {
          isActive && activeChange('play');
          return '';
        }}
        to="."
        end
      >
        <Play active={active} />
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          isActive && activeChange('news');
          return '';
        }}
        to="news"
      >
        <News active={active} />
      </NavLink>
      <NavLink to="tournaments">
        <Tournaments />
      </NavLink>
      <NavLink to="anticheat">
        <Anticheat />
      </NavLink>
    </div>
  );
};

export default SideBar;
