import { useState } from 'react';
import styles from './MatchesList.module.scss';
import matches from '../../data/matches';
import users from '../../data/user';

import MatchLink from './MatchLink/MatchLink';
import MatchSearch from './MatchSearch/MatchSearch';
import MatchMapFilter from './MatchMapFilter/MatchMapFilter';
import maps from '../../data/map';

const MatchesList = () => {
  const arr: string[] = [];

  const [inputValue, setInputValue] = useState('');
  const [mapFilter, setMapFilter] = useState(arr);

  const findUserName = (id: number): string => {
    return users.find((user) => user.id === id)?.userName || '';
  };

  const mapBGHandler = (id: number): string => {
    return maps.find((map) => map.id === id)?.name || '';
  };

  return (
    <div className={styles.container}>
      <MatchSearch inputValue={inputValue} setInputValue={setInputValue} />
      <MatchMapFilter mapFilter={mapFilter} setMapFilter={setMapFilter} />
      <div className={styles.gridContainer}>
        {' '}
        {matches.map((match) =>
          (findUserName(match.userId)
            .toLocaleLowerCase()
            .includes(inputValue.toLocaleLowerCase()) ||
            match.id.toString() === inputValue) &&
          (mapFilter.length === 0 ||
            mapFilter.includes(mapBGHandler(match.mapId).toString())) ? (
            <MatchLink match={match} key={match.id} />
          ) : (
            ''
          ),
        )}{' '}
      </div>
    </div>
  );
};

export default MatchesList;
