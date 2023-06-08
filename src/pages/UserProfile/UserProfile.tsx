import React from 'react';
import styles from './UserProfile.module.scss';
import Statistic from '../../components/Statistic/Statistic';
import MatchHistory from '../../components/MatchHistory/MatchHistory';

const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.matchHistory}>
        <MatchHistory />
      </div>
      <div className={styles.statistic}>
        <Statistic
          firstKill={80}
          headshot={100}
          kast={44}
          mapFlexibel={70}
          winRate={56}
        />
      </div>
    </div>
  );
};

export default User;
