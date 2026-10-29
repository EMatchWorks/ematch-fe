import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './UserProfile.module.scss';
import Plus from '../../assets/icons/Plus/Plus.svg';
import StatisticIcon from '../../assets/icons/Statistic/Statistic.svg';
import Statistic from '../../components/Statistic/Statistic';
import MatchHistory from '../../components/MatchHistory/MatchHistory';

const User = () => {
  const [isOpenStatistic, setIsOpenStatistic] = useState(false);
  // UserLayout already resolved and validated this - it only renders
  // <Outlet /> (this page) once it has fetched a user for params.user_id.
  const { user_id } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.matchHistory}>
        <MatchHistory userId={user_id as string} />
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
        <img className={styles.statisticIcon} src={StatisticIcon} alt="" />
        <img className={styles.plusIcon} src={Plus} alt="" />
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
