import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Socket } from 'socket.io-client';

import NotFound from '../NotFound/NotFound';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import Preloader from '../../assets/preloader/Preloader';
import styles from './Match.module.scss';
import MatchTeam from '../../components/MatchTeam/MatchTeam';
import { IMatch } from '../../models/Match/IMatch';
import { EMatchStatus } from '../../models/Match/EMAtch';

import overpassBG from '../../assets/background/Maps/de_overpass.jpg';
import mirageBG from '../../assets/background/Maps/de_mirage.jpg';
import dustBG from '../../assets/background/Maps/de_dust2.jpg';
import cobleBG from '../../assets/background/Maps/de_cbble.jpg';
import nukeBG from '../../assets/background/Maps/de_nuke.jpg';
import infernoBG from '../../assets/background/Maps/de_inferno.jpg';
import ancientBG from '../../assets/background/Maps/de_ancient.jpg';
import trainBG from '../../assets/background/Maps/de_train.jpg';
import vertigoBG from '../../assets/background/Maps/de_vertigo.jpg';
import anubisBG from '../../assets/background/Maps/de_anubis.jpg';
import maps from '../../data/map';
import MatchService from '../../services/MatchService';

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
      return ancientBG;
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
  const { userStore } = useContext(Context);
  const [matchData, setMatchData] = useState<IMatch>();
  const [isError, setIsError] = useState(false);

  const params = useParams();
  const matchID = params.match_id as string;
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await MatchService.get(matchID);

        setMatchData({ ...response.data });
      } catch (e) {
        setIsError(true);
      }
    })();

    const { socket, unsubscribe } = MatchService.subscribeToMatch(
      matchID,
      userStore.user.id,
      (match) => {
        setMatchData({ ...match });
      },
    );
    socketRef.current = socket;

    return () => {
      socketRef.current = null;
      unsubscribe();
    };
  }, [matchID, userStore.user.id]);

  const addUserAtTeam = (teamID: number) => {
    if (!socketRef.current) return;

    MatchService.joinLobby(socketRef.current, {
      userId: userStore.user.id,
      matchId: matchID,
      team: teamID as 1 | 2,
      isCaptain: false,
    });
  };

  const leaveMatch = () => {
    if (!socketRef.current) return;

    MatchService.leaveLobby(socketRef.current, {
      userId: userStore.user.id,
      matchId: matchID,
    });
  };

  const isParticipant = matchData?.memberships?.some(
    (membership) => membership.userId === userStore.user.id,
  );

  const teamHandler = (teamNumber: number) => {
    const team = [];
    if (matchData) {
      matchData.memberships?.forEach((el) => {
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
          <div className={styles.content}>
            <div className={styles.team}>
              <MatchTeam
                team={[...teamHandler(1)]}
                addUser={addUserAtTeam}
                teamID={1}
              />
            </div>
            <div>
              <div className={styles.map}>
                <div className={styles.mapPic}>
                  <img
                    className={styles.imgMap}
                    src={mapBGHandler(matchData.map)}
                    alt='Map Background'
                   />
                </div>
                {matchData.map}
              </div>
              {matchData.status === EMatchStatus.InProgress && matchData.ip ? (
                <a
                  href={`steam://connect/${matchData.ip}`}
                  className={styles.matchLink}
                >
                  Приєднатись до серверу
                </a>
              ) : (
                matchData.status === EMatchStatus.Starting && (
                  // The match's `ip` is set as soon as this status hits, but
                  // the Dathost server is often still booting/loading the
                  // map at that point - MatchService.pollForServerReady
                  // flips status to InProgress once it actually confirms
                  // the server is ready, so the link only appears then.
                  <div className={styles.matchLink + ' ' + styles.starting}>
                    Сервер запускається...
                  </div>
                )
              )}
              {isParticipant && (
                <button
                  className={styles.matchLink + ' ' + styles.leaveButton}
                  onClick={leaveMatch}
                >
                  Покинути матч
                </button>
              )}
            </div>
            <div className={styles.team}>
              <MatchTeam
                team={[...teamHandler(2)]}
                addUser={addUserAtTeam}
                teamID={2}
              />
            </div>
          </div>
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
