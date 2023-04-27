import React from 'react';
import styles from './TournamentBanner.module.scss';
import { TournamentList } from '../../data/tournamentList';
import { Link } from 'react-router-dom';

type TournamentBannerProps = {
  tournament: TournamentList;
};

const TournamentBanner = (props: TournamentBannerProps) => {
  return (
    <Link to={`./${props.tournament.id}`} className={styles.bannerContainer}>
      {props.tournament.name}
    </Link>
  );
};

export default TournamentBanner;
