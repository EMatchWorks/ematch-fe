import { useContext, useState, useEffect } from 'react';
import { Context } from '../..';
import styles from './MatchTeam.module.scss';
import Preloader from '../../assets/preloader/Preloader';
import MatchUser from '../MatchUser/MatchUser';
import { observer } from 'mobx-react-lite';
import { ITeam } from '../../models/Team/ITeam';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { IMatch, IMatchErorr } from '../../models/Match/IMatch';

type MatchTeamProps = {
  teamID: number;
  matchID: number;
  setMatch: (newMatch: IMatch) => void;
};

const MatchTeam = (props: MatchTeamProps) => {
  const { teamStore } = useContext(Context);
  const [teamData, setTeamData] = useState({
    team: {} as ITeam,
    isLoading: true,
  });

  const loadTeam = async () => {
    const newTeam = { ...(await teamStore.loadTeam(props.teamID)) } as ITeam;
    setTeamData({
      team: { ...newTeam },
      isLoading: false,
    });
  };

  useEffect(() => {
    loadTeam();
  }, []);

  setTimeout(() => {
    loadTeam();
  }, 1000);

  const addUserAtTeam = async () => {
    const ip = await teamStore.addUser(props.teamID, props.matchID);
    if (ip !== null) {
      props.setMatch(ip);
    }
  };

  const emptyCellsPush = (): JSX.Element[] => {
    const emptyCells = [] as JSX.Element[];
    for (let i = teamData.team.users.length; i < teamData.team.size; i++) {
      emptyCells.push(
        <div onClick={addUserAtTeam} className={styles.cell} key={i}>
          <img src={Plus} />
        </div>,
      );
    }
    return [...emptyCells];
  };

  //   console.log('MatchTeam');
  //   console.log(props.teamID);

  return (
    <div className={styles.container}>
      {teamData.isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <>
          {teamData.team.users.map((user, index) => (
            <div className={styles.user}>
              <div className={styles.userAvatar}>
                <MatchUser user={{ ...user }} key={index} />
              </div>
              <div className={styles.userName}>{user.username}</div>
            </div>
          ))}
          {emptyCellsPush().map((cell, index) => (
            <div key={index}>{cell}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default observer(MatchTeam);
