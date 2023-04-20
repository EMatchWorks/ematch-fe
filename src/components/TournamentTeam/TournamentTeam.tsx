import React from 'react';
import styles from './TournamentTeam.module.scss';

type TournamentTeamProps = {
  team: string;
  isWinner: boolean;
};

const TournamentTeam = (props: TournamentTeamProps) => {
  return (
    <div>
      {' '}
      <div
        className={styles.team + ' ' + (props.isWinner ? styles.winner : '')}
        //   style={{ height: `${height / 2}px` }}
      >
        {props.team}
      </div>
    </div>
  );
};

export default TournamentTeam;
