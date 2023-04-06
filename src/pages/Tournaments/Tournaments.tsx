import React from 'react';
import styles from './Tournaments.module.scss';
import tournamentData, { Round } from './tournamentData';

const height = 80;
const margin = 20;

const step = (count: Number) => {
  let res = 0;
  let coef = height - (height / 2 - margin);
  for (let i = 0; i < count; i++) {
    res += coef;
    coef *= 2;
  }
  return res;
};

const Tournaments = () => {
  return (
    <div className={styles.tournament}>
      <div className={styles.rounds}>
        {tournamentData.rounds.map((round: Round, index: number) => (
          <div key={`round-${index}`} className={styles.round}>
            {round.round.map((match, matchIndex) => (
              <div
                key={`match-${matchIndex}`}
                className={
                  styles.match +
                  ' ' +
                  (round.round.length > 1
                    ? matchIndex % 2 == 0
                      ? styles.matchUp
                      : styles.matchDown
                    : ' ')
                }
                style={{
                  height: `${height}px`,
                  margin: `${margin + step(index)}px 40px`,
                }}
              >
                <div className={styles.team}>
                  {match.team1}
                  {match.winner === match.team1 && ' (победитель)'}
                </div>
                <div className={styles.team}>
                  {match.team2}
                  {match.winner === match.team2 && ' (победитель)'}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
