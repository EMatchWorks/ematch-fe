import { useContext, useEffect } from 'react';
import styles from './MatchUser.module.scss';
import { Context } from '../..';
import { IUser } from '../../models/User/IUser';
import Avatar from '../Avatar/Avatar';

type MatchUserProps = {
  user: IUser;
};

const MatchUser = (props: MatchUserProps) => {
  return (
    <div className={styles.avatar}>
      <Avatar id={props.user.id} />
    </div>
  );
};

export default MatchUser;
