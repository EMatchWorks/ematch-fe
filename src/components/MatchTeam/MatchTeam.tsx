import { useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import styles from './MatchTeam.module.scss';
import Preloader from '../../assets/preloader/Preloader';
import MatchUser from '../MatchUser/MatchUser';
import { observer } from 'mobx-react-lite';
import { ITeam } from '../../models/Team/ITeam';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { IMatch, IMatchErorr, MembershipDto } from '../../models/Match/IMatch';

type MatchTeamProps = {
  team: null[] | MembershipDto[];
};

const MatchTeam = (props: MatchTeamProps) => {
  // const addUserAtTeam = async () => {
  //   const ip = await teamStore.addUser(props.teamID, props.matchID);
  //   if (ip !== null) {
  //     props.setMatch(ip);
  //   }
  // };

  // const emptyCellsPush = (): JSX.Element[] => {
  //   const emptyCells = [] as JSX.Element[];
  //   for (let i = teamData.team.users.length; i < teamData.team.size; i++) {
  //     emptyCells.push(
  //       <div onClick={addUserAtTeam} className={styles.cell} key={i}>
  //         <img src={Plus} />
  //       </div>,
  //     );
  //   }
  //   return [...emptyCells];
  // };

  //   console.log('MatchTeam');
  //   console.log(props.teamID);

  return (
    <div className={styles.container}>
      {props.team.map((user, index) =>
        user === null ? (
          <div className={styles.cell} key={index}>
            <img src={Plus} />
          </div>
        ) : (
          <>
            <MatchUser user={user.id} key={index} />
          </>
        ),
      )}
    </div>
  );
};

export default MatchTeam;
