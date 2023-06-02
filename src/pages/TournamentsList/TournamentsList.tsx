import React from 'react';
import styles from './TournamentsList.module.scss';
import tournamentList from '../../data/tournamentList';
import TournamentBanner from '../../components/TournamentBanner/TournamentBanner';
import { Link } from 'react-router-dom';

const TournamentsList = () => {
  return (
    <div className={styles.tournamentsListContainer}>
      {tournamentList.map((el, index) => (
        <TournamentBanner tournament={el} key={index} />
      ))}
      {/* <div className={styles.linkCreateMatch}>
        <Link to="./createTournament">Create Tournament</Link>
      </div> */}
    </div>
  );
};

export default TournamentsList;
