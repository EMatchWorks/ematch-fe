import { useState, useEffect } from 'react';
import styles from './MatchUser.module.scss';
import { Context } from '../..';
import { IUser } from '../../models/User/IUser';
import Avatar from '../Avatar/Avatar';
import { MembershipDto } from '../../models/Match/IMatch';
import UserService from '../../services/UserService';
import Preloader from '../../assets/preloader/Preloader';

type MatchUserProps = {
  user: number;
};

const MatchUser = (props: MatchUserProps) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    (async () => {
      const response = await UserService.fetchUser(user.id.toString());
      setUser({ ...response.data });
    })();
  }, []);

  return (
    <div className={styles.user}>
      {user ? (
        <>
          <div className={styles.userAvatar}>
            <div className={styles.avatar}>
              <Avatar id={user.id} />
            </div>
          </div>
          <div className={styles.userName}>{user.username}</div>
        </>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </div>
  );
};

export default MatchUser;
