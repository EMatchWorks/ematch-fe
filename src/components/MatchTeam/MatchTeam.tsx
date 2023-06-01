import { useContext, useEffect } from 'react';
import { Context } from '../..';
import styles from './MatchTeam.module.scss';
import Preloader from '../../assets/preloader/Preloader';
import MatchUser from '../MatchUser/MatchUser';
import { observer } from 'mobx-react-lite';
import { ITeam } from '../../models/Team/ITeam';

type MatchTeamProps = {
  team: ITeam;
};

const MatchTeam = (props: MatchTeamProps) => {
  const emptyCells = [];
  console.log('MatchTeam');
  console.log(props.team.users);
  //   for (
  //     let i = props.team.size - props.team.users.length;
  //     i < props.team.size;
  //     i++
  //   ) {
  //     emptyCells.push(<div key={i}></div>);
  //   }

  return (
    <div className={styles.container}>
      {/* {props.team.users.map((user, index) => (
        <MatchUser user={{ ...user }} key={index} />
      ))}
      {emptyCells.map((cell) => cell)} */}
    </div>
  );
};

export default MatchTeam;
