import React, { useState } from 'react';
import styles from './UserProfile.module.scss';
import Plus from '../../assets/icons/Plus/Plus.svg';
import StatisticIcon from '../../assets/icons/Statistic/Statistic.svg';
import Statistic from '../../components/Statistic/Statistic';
import MatchHistory from '../../components/MatchHistory/MatchHistory';

const User = () => {
  const [isOpenStatistic, setIsOpenStatistic] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.matchHistory}>
        <MatchHistory />
      </div>
      <div
        className={
          styles.statistic + ' ' + (isOpenStatistic ? styles.statisticOpen : '')
        }
      >
        <Statistic
          firstKill={80}
          headshot={100}
          kast={44}
          mapFlexibel={70}
          winRate={56}
        />
      </div>
      <div
        onClick={() => setIsOpenStatistic(!isOpenStatistic)}
        className={
          styles.statisticButton +
          ' ' +
          (isOpenStatistic ? styles.statisticButtonOpen : '')
        }
      >
        <img className={styles.statisticIcon} src={StatisticIcon} />
        <img className={styles.plusIcon} src={Plus} />
      </div>
      <div
        onClick={() => setIsOpenStatistic(false)}
        className={
          styles.statisticCloseField +
          ' ' +
          (isOpenStatistic ? styles.statisticCloseFieldOpen : '')
        }
      ></div>
    </div>
  );
};

export default User;
