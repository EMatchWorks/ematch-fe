import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import users from '../../data/user';
import NotFound from '../../pages/NotFound/NotFound';
import styles from './UserLayout.module.scss';
import Avatar from '../../components/Avatar/Avatar';
import { link } from 'fs';

const UserLayout = () => {
  const activeLinkHandler = (isActive: boolean) => {
    return isActive ? styles.activeLink : styles.link;
  };
  const params = useParams();
  const user = users.find((user) => user.id.toString() === params.user_id);
  if (!user) {
    return <NotFound />;
  }

  return (
    <div className={styles.layoutUser}>
      <div className={styles.userDataContainer}>
        <div className={styles.userAvatar}>
          <Avatar id={user.id} />
        </div>
        <div className={styles.userName}>{'' + user.userName}</div>
      </div>
      <div className={styles.userProfileNav}>
        <NavLink
          className={({ isActive }) => activeLinkHandler(isActive)}
          to={`.`}
          end
        >
          User info
        </NavLink>
        <NavLink
          className={({ isActive }) => activeLinkHandler(isActive)}
          to={`./friends`}
        >
          Friends
        </NavLink>
        <NavLink
          className={({ isActive }) => activeLinkHandler(isActive)}
          to={`./teams`}
        >
          Teams
        </NavLink>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
