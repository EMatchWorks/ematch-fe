import React from 'react';
import styles from './TournamentTeam.module.scss';
import Avatar from '../Avatar/Avatar';

type TournamentTeamProps = {
  team: string;
  isWinner?: boolean;
};

const TournamentTeam = (props: TournamentTeamProps) => {
  return (
    <div>
      {' '}
      <div
        className={styles.team + ' ' + (props.isWinner ? styles.winner : '')}
        //   style={{ height: `${height / 2}px` }}
      >
        <div className={styles.avatar}>
          <Avatar id={0} />
        </div>
        <div className={styles.teamName}>{props.team}</div>
      </div>
    </div>
  );
};

export default TournamentTeam;
