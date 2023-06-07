import React from 'react';
import styles from './UserProfile.module.scss';
import Statistic from '../../components/Statistic/Statistic';

const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.matchHistory}></div>
      <div className={styles.statistic}>
        <Statistic
          firstKill={10}
          headshot={50}
          kast={44}
          mapFlexibel={70}
          winRate={56}
        />
      </div>
    </div>
  );
};

export default User;
