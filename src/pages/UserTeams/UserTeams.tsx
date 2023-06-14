import React from 'react';
import styles from './UserTeams.module.scss';
import teams from '../../data/teams';
import Avatar from '../../components/Avatar/Avatar';

const UserTeams = () => {
  return (
    <div className={styles.container}>
      {teams.map((el, index) => (
        <div key={index} className={styles.user}>
          <div className={styles.avatar}>
            <Avatar id={1} />
          </div>
          <span>{el.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserTeams;
