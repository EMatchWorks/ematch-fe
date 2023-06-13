import { useEffect, useState } from 'react';
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
import MatchService from '../../services/MatchService';
import TeamService from '../../services/TeamService';

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
  const [matchData, setMatchData] = useState<IMatch>();
  const [isError, setIsError] = useState(false);

  const params = useParams();
  const matchID = Number(params.match_id);

  useEffect(() => {
    console.log('useEffect');

    (async () => {
      try {
        const response = await MatchService.get(matchID);

        console.log(response.data);
        setMatchData({ ...response.data });
      } catch (e) {
        setIsError(true);
      }
    })();

    const eventSource = MatchService.eventSource(matchID);
    eventSource.onmessage = (res) => {
      setMatchData({ ...JSON.parse(res.data).match });
    };

    return () => eventSource.close();
  }, []);

  const addUserAtTeam = async (teamID: number) => {
    await TeamService.addUser(teamID, matchData!.id);
  };

  const teamHandler = (teamNumber: number) => {
    const team = [];
    if (matchData) {
      matchData.users.map((el) => {
        if (el.team === teamNumber) {
          team.push(el);
        }
      });
    }
    for (let i = team.length; i < +matchData!.mode[0]; i++) {
      team.push(null);
    }
    return team;
  };

  if (isError) return <NotFound />;

  return (
    <div className={styles.container}>
      {matchData ? (
        <>
          {console.log(matchData)}
          <div className={styles.content}>
            <div className={styles.team}>
              <MatchTeam
                team={[...teamHandler(1)]}
                addUser={addUserAtTeam}
                teamID={1}
              />
            </div>
            <div className={styles.map}>
              <div className={styles.mapPic}>
                <img
                  className={styles.imgMap}
                  src={mapBGHandler(matchData.map)}
                />
              </div>
              {matchData.map}
            </div>
            <div className={styles.team}>
              <MatchTeam
                team={[...teamHandler(2)]}
                addUser={addUserAtTeam}
                teamID={2}
              />
            </div>
          </div>
          <a
            href={`steam://connect/${matchData.ip}`}
            className={
              styles.matchLink + ' ' + (matchData.ip ? '' : styles.disable)
            }
          >
            Приєднатись до матчу
          </a>
        </>
      ) : (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      )}
    </div>
  );
};

export default observer(Match);
