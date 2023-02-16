import { NavLink } from 'react-router-dom';
import styles from './UserSideBar.module.scss';
import User from '../../../assets/icons/UserSidBar/User';
import Teams from '../../../assets/icons/UserSidBar/Teams';

interface Props {
  className: string;
}

const activeClass = (isActive: boolean) => {
  return isActive ? styles.active : styles.disable;
};

const UserSideBar = (props: Props) => {
  return (
    <div className={props.className + ' ' + styles.Container}>
      <NavLink className={({ isActive }) => activeClass(isActive)} to="user">
        <User />
      </NavLink>
      <NavLink className={({ isActive }) => activeClass(isActive)} to="teams">
        <Teams />
      </NavLink>
    </div>
  );
};

export default UserSideBar;
