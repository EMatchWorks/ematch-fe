import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import styles from './UserLayout.module.scss';
import Avatar from '../../components/Avatar/Avatar';
import UserService from '../../services/UserService';
import { IUser } from '../../models/User/IUser';

const UserLayout = () => {
  const [user, setUser] = useState<IUser>();
  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        if (!params.user_id) {
          return;
        }
        let response = await UserService.fetchUser(params.user_id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.user_id]);

  const activeLinkHandler = (isActive: boolean) => {
    return isActive ? styles.activeLink : styles.link;
  };
  if (!user) {
    return <NotFound />;
  }

  return (
    <div className={styles.layoutUser}>
      <div className={styles.userDataContainer}>
        <div className={styles.userAvatar}>
          <Avatar id={user.id} />
        </div>
        <div className={styles.userName}>{'' + user.username}</div>
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
