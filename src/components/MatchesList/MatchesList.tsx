import { useState } from 'react';
import styles from './MatchesList.module.scss';
import matches from '../../data/matches';

import MatchLink from './MatchLink/MatchLink';
import MatchSearch from './MatchSearch/MatchSearch';
import MatchMapFilter from './MatchMapFilter/MatchMapFilter';

const MatchesList = () => {
  const arr: string[] = [];

  const [inputValue, setInputValue] = useState('');
  const [mapFilter, setMapFilter] = useState(arr);

  return (
    <div className={styles.container}>
      <MatchSearch inputValue={inputValue} setInputValue={setInputValue} />
      <MatchMapFilter mapFilter={mapFilter} setMapFilter={setMapFilter} />
      <div className={styles.gridContainer}>
        {' '}
        {matches.map((match) =>
          (match.User.userName
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()) ||
            match.id.toString() === inputValue) &&
          (mapFilter.length === 0 ||
            mapFilter.includes(match.map.toString())) ? (
            <MatchLink match={match} />
          ) : (
            ''
          )
        )}{' '}
      </div>
    </div>
  );
};

export default MatchesList;
