import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './MatchHistory.module.scss';
import MatchService from '../../services/MatchService';
import { IMatch } from '../../models/Match/IMatch';
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

type MatchHistoryProps = {
  userId: string;
};

// Mirrors ematch-be's DathostMatch team shape (see dathost.types.ts) -
// MatchService.finishMatch stores Dathost's match_ended webhook payload
// verbatim as `stats`, so this is what's actually in that JSON blob.
type DathostMatchStatsPayload = {
  team1?: { stats?: { score: number } };
  team2?: { stats?: { score: number } };
};

const parseStats = (stats: string): DathostMatchStatsPayload | null => {
  try {
    return JSON.parse(stats);
  } catch {
    return null;
  }
};

const MatchHistory = ({ userId }: MatchHistoryProps) => {
  const { t } = useTranslation();
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await MatchService.getUserMatchHistory(userId);
        setMatches(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userId]);

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

  // Score/result can't be derived without knowing which side this user
  // played on (team1/team2) and the scores Dathost reported for each.
  const matchOutcome = (match: IMatch) => {
    const team = match.memberships?.find((m) => m.userId === userId)?.team;
    const stats = parseStats(match.stats);
    const ownScore = team === 1 ? stats?.team1?.stats?.score : stats?.team2?.stats?.score;
    const opponentScore = team === 1 ? stats?.team2?.stats?.score : stats?.team1?.stats?.score;

    if (team === undefined || ownScore === undefined || opponentScore === undefined) {
      return null;
    }

    return {
      count: `${ownScore}/${opponentScore}`,
      isWin: ownScore > opponentScore,
    };
  };

  if (isLoading) {
    return <div className={styles.container}>{t('matchHistory.loading')}</div>;
  }

  if (matches.length === 0) {
    return <div className={styles.container}>{t('matchHistory.empty')}</div>;
  }

  return (
    <div className={styles.container}>
      {matches.map((match) => {
        const outcome = matchOutcome(match);

        return (
          <div key={match.id} className={styles.history}>
            <div className={styles.mapImg}>
              <img src={mapBGHandler(match.map)} alt={match.map} />
            </div>
            <div className={styles.data}>
              <div className={styles.count}>{outcome?.count ?? '-'}</div>
              <div
                className={
                  styles.result +
                  ' ' +
                  (outcome
                    ? outcome.isWin
                      ? styles.win
                      : styles.lose
                    : '')
                }
              >
                {outcome
                  ? t(outcome.isWin ? 'matchHistory.win' : 'matchHistory.lose')
                  : '-'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchHistory;
