import { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import matches from '../../data/matches';
import NotFound from '../NotFound/NotFound';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import Preloader from '../../assets/preloader/Preloader';
import styles from './Match.module.scss';
import MatchTeam from '../../components/MatchTeam/MatchTeam';
import { IMatch } from '../../models/Match/IMatch';
import MatchService from '../../services/MatchService';
import { ITeam } from '../../models/Team/ITeam';

const Match = () => {
  const { loadMatch, teamStore } = useContext(Context);
  const [teams, setTeams] = useState({
    team1: {} as ITeam,
    team2: {} as ITeam,
  });
  const params = useParams();
  const matchID = Number(params.match_id);
  useEffect(() => {
    (async () => {
      await loadMatch.loadMatch(matchID);
      await teamStore.loadTeam(loadMatch.match.team1Id);
      const team1Teamp = { ...teamStore.team };
      await teamStore.loadTeam(loadMatch.match.team2Id);
      const team2Teamp = { ...teamStore.team };
      setTeams({
        team1: { ...team1Teamp },
        team2: { ...team2Teamp },
      });
    })();
  }, []);

  return (
    <div className={styles.container}>
      {console.log(loadMatch.isLoadingMatch)}
      {loadMatch.isLoadingMatch ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : loadMatch.matchError.status ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          {console.log(loadMatch.match)}
          <div className={styles.team}>
            <MatchTeam team={teams.team1} />
          </div>
          <div className={styles.team}>
            <MatchTeam team={teams.team2} />
          </div>
        </>
      )}
    </div>
  );
};

export default observer(Match);
