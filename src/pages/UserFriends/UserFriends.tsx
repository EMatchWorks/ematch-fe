import React from 'react';
import styles from './UserFriends.module.scss';
import friends from '../../data/friends';
import Avatar from '../../components/Avatar/Avatar';

const UserFriends = () => {
  return (
    <div className={styles.container}>
      {friends.map((el, index) => (
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

export default UserFriends;
