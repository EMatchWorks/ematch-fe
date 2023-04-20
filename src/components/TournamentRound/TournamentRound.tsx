import TournamentLine from '../../assets/icons/Tournaments/TournamentLine';
import { Round } from '../../data/tournamentData';
import TournamentTeam from '../TournamentTeam/TournamentTeam';
import styles from './TournamentRound.module.scss';

type TournamentRoundProps = {
  roundIndex: number;
  round: Round;
};
const height = 80;
const marginY = 20;
const marginX = 40;

const step = (count: number) => {
  let res = 0;
  let coef = height - (height / 2 - marginY);
  for (let i = 0; i < count; i++) {
    res += coef;
    coef *= 2;
  }
  return res;
};
const isWinner = (team: string, winner: string) => team === winner;

const TournamentRound = (props: TournamentRoundProps) => {
  return (
    <div>
      {' '}
      <div key={`round-${props.roundIndex}`} className={styles.round}>
        {props.round.round.map((match, matchIndex) => (
          <div
            key={`match-${matchIndex}`}
            className={styles.match}
            style={{
              position: 'relative',
              height: `${height}px`,
              margin: `${marginY + step(props.roundIndex)}px ${marginX}px`,
            }}
          >
            {props.round.round.length > 1 ? (
              <TournamentLine
                height={height}
                marginX={marginX}
                marginY={marginY}
                roundIndex={props.roundIndex}
                matchIndex={matchIndex}
              />
            ) : (
              ' '
            )}

            <TournamentTeam
              team={match.team1}
              isWinner={isWinner(match.team1, match.winner)}
            />
            <TournamentTeam
              team={match.team2}
              isWinner={isWinner(match.team2, match.winner)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentRound;
