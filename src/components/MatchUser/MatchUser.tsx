import { useState, useEffect } from 'react';
import styles from './MatchUser.module.scss';
import { IUser } from '../../models/User/IUser';
import Avatar from '../Avatar/Avatar';
import UserService from '../../services/UserService';
import Preloader from '../../assets/preloader/Preloader';

type MatchUserProps = {
  user: string;
};

const MatchUser = (props: MatchUserProps) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    (async () => {
      const response = await UserService.fetchUser(props.user);

      setUser({ ...response.data });
    })();
  }, [props.user]);

  return (
    <div className={styles.user}>
      {!!user ? (
        <>
          <div className={styles.userAvatar}>
            <div className={styles.avatar}>
              <Avatar id={props.user} nameAvatar={`AvataId in match`} />
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
