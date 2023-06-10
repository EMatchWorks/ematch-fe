import { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import Preloader from '../../assets/preloader/Preloader';
import styles from './Match.module.scss';
import MatchTeam from '../../components/MatchTeam/MatchTeam';
import { IMatch, IMatchErorr } from '../../models/Match/IMatch';

import overpassBG from '../../assets/background/Maps/de_overpass.jpg';
import mirageBG from '../../assets/background/Maps/de_mirage.jpg';
import dustBG from '../../assets/background/Maps/de_dust2.jpg';
import cobleBG from '../../assets/background/Maps/de_cbble.jpg';
import nukeBG from '../../assets/background/Maps/de_nuke.jpg';
import infernoBG from '../../assets/background/Maps/de_inferno.jpg';
import anchientBG from '../../assets/background/Maps/de_ancient.jpg';
import trainBG from '../../assets/background/Maps/de_train.jpg';
import vertigoBG from '../../assets/background/Maps/de_vertigo.jpg';
import anubisBG from '../../assets/background/Maps/de_anubis.jpg';
import maps from '../../data/map';
import { set } from 'mobx';

const mapBGHandler = (name: string) => {
  switch (maps.find((map) => map.name === name)?.name) {
    case 'de_mirage':
      return mirageBG;
    case 'de_overpass':
      return overpassBG;
    case 'de_dust2':
      return dustBG;
    case 'de_cbble':
      return cobleBG;
    case 'de_nuke':
      return nukeBG;
    case 'de_inferno':
      return infernoBG;
    case 'de_ancient':
      return anchientBG;
    case 'de_train':
      return trainBG;
    case 'de_vertigo':
      return vertigoBG;
    case 'de_anubis':
      return anubisBG;
    default:
      break;
  }
};

const Match = () => {
  const { loadMatch } = useContext(Context);
  const [matchData, setMatchData] = useState({
    match: {} as IMatch,
    matchError: {} as IMatchErorr,
    isLoading: true,
  });

  const setMatchIp = (newMatch: IMatch) => {
    setMatchData({ ...matchData, match: newMatch });
  };

  const params = useParams();
  const matchID = Number(params.match_id);
  useEffect(() => {
    (async () => {
      await loadMatch.loadMatch(matchID);
      if (!(loadMatch.matchError.status >= 400)) {
        setMatchData({
          match: { ...loadMatch.match },
          matchError: {} as IMatchErorr,
          isLoading: false,
        });
      } else {
        setMatchData({
          match: {} as IMatch,
          matchError: { ...loadMatch.matchError },
          isLoading: false,
        });
      }
    })();
  }, []);

  const teamHandler = (teamNumber: number) => {
    const team = [];
    matchData.match.users.map((el) => {
      if (el.team === teamNumber) {
        team.push(el);
      }
    });
    for (let i = team.length; i < +matchData.match.mode[0]; i++) {
      team.push(null);
    }
    console.log('teamHandler');
    console.log(team);
    return team;
  };

  return (
    <div className={styles.container}>
      {matchData.isLoading ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : matchData.matchError.status ? (
        <>
          <NotFound />
        </>
      ) : (
        <>
          {console.log(matchData.match)}
          <div className={styles.content}>
            <div className={styles.team}>
              <MatchTeam team={[...teamHandler(1)]} />
            </div>
            <div className={styles.map}>
              <div className={styles.mapPic}>
                <img
                  className={styles.imgMap}
                  src={mapBGHandler(matchData.match.map)}
                />
              </div>
              {matchData.match.map}
            </div>
            <div className={styles.team}>
              <MatchTeam team={[...teamHandler(2)]} />
            </div>
          </div>
          <a
            href={`steam://connect/${matchData.match.ip}`}
            className={
              styles.matchLink +
              ' ' +
              (matchData.match.ip ? '' : styles.disable)
            }
          >
            Join to match
          </a>
        </>
      )}
    </div>
  );
};

export default observer(Match);
