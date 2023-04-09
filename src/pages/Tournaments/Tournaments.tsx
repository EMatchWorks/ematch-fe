import React, { useEffect, useRef } from 'react';
import styles from './Tournaments.module.scss';
import tournamentData, { Round } from './tournamentData';
import ToutnamentLine from '../../assets/Tournaments/ToutnamentLine';

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

const Tournaments = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let startY = 0;

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (scrollRef.current) {
      startX = scrollRef.current.scrollLeft + event.pageX;
      startY = scrollRef.current.scrollTop + event.pageY;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startX - event.pageX;
      scrollRef.current.scrollTop = startY - event.pageY;
      event.preventDefault();
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      className={styles.tournament}
    >
      <div className={styles.rounds}>
        {tournamentData.rounds.map((round: Round, roundIndex: number) => (
          <div key={`round-${roundIndex}`} className={styles.round}>
            {round.round.map((match, matchIndex) => (
              <div
                key={`match-${matchIndex}`}
                className={styles.match}
                style={{
                  position: 'relative',
                  height: `${height}px`,
                  margin: `${marginY + step(roundIndex)}px ${marginX}px`,
                }}
              >
                {round.round.length > 1 ? (
                  <ToutnamentLine
                    height={height}
                    marginX={marginX}
                    marginY={marginY}
                    roundIndex={roundIndex}
                    matchIndex = {matchIndex}
                  />
                ) : (
                  ' '
                )}

                <div
                  className={
                    styles.team +
                    ' ' +
                    (match.winner === match.team1 ? styles.winner : '')
                  }
                  style={{ height: `${height / 2}px` }}
                >
                  {match.team1}
                </div>
                <div
                  className={
                    styles.team +
                    ' ' +
                    (match.winner === match.team2 ? styles.winner : '')
                  }
                  style={{ height: `${height / 2}px` }}
                >
                  {match.team2}
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
