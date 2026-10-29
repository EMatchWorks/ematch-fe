import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './MatchUser.module.scss';
import { IUser } from '../../models/User/IUser';
import UserIcon from '../../assets/icons/UserSideBar/User';
import UserService from '../../services/UserService';
import Preloader from '../../assets/preloader/Preloader';

type MatchUserProps = {
  user: string;
  isCaptain?: boolean;
  // True while the player's socket is dropped but MatchGateway hasn't
  // kicked them yet (see DISCONNECT_KICK_DELAY_MS) - they might just be
  // reloading the page.
  isDisconnected?: boolean;
};

const MatchUser = ({ user: userId, isCaptain, isDisconnected }: MatchUserProps) => {
  const { t } = useTranslation();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    setUser(null);

    (async () => {
      const response = await UserService.fetchUser(userId);

      setUser({ ...response.data });
    })();
  }, [userId]);

  return (
    <div className={styles.user}>
      {user ? (
        <>
          <div
            className={
              styles.userAvatar +
              (isDisconnected ? ' ' + styles.disconnected : '')
            }
          >
            <UserIcon />
            {isCaptain && (
              <span
                className={styles.captainBadge}
                title={t('matchUser.captain')}
              >
                ★
              </span>
            )}
            {isDisconnected && (
              <div
                className={styles.disconnectedOverlay}
                title={t('matchUser.reconnecting')}
              >
                <Preloader />
              </div>
            )}
          </div>
          <div className={styles.userName}>{user.username}</div>
        </>
      ) : (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      )}
    </div>
  );
};

export default MatchUser;
