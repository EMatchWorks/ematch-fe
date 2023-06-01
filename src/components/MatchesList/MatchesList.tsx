import { useContext, useEffect, useState } from 'react';
import styles from './MatchesList.module.scss';
import users from '../../data/user';

import MatchLink from './MatchLink/MatchLink';
import MatchSearch from './MatchSearch/MatchSearch';
import MatchMapFilter from './MatchMapFilter/MatchMapFilter';
import maps from '../../data/map';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Preloader from '../../assets/preloader/Preloader';

const MatchesList = () => {
  const { matchStore } = useContext(Context);

  const [inputValue, setInputValue] = useState('');
  const [mapFilter, setMapFilter] = useState<string[]>([]);

  useEffect(() => {
    matchStore.loadMatchList();
  }, []);

  const findUserName = (id: number): string => {
    return users.find((user) => user.id === id)?.userName || '';
  };

  const mapBGHandler = (name: string): string => {
    return maps.find((map) => map.name === name)?.name || '';
  };

  return (
    <div className={styles.container}>
      {matchStore.isLoadingMatchList ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <>
          <MatchSearch inputValue={inputValue} setInputValue={setInputValue} />
          <MatchMapFilter mapFilter={mapFilter} setMapFilter={setMapFilter} />
          <div className={styles.gridContainer}>
            {' '}
            {matchStore.matchList.map((match) =>
              (findUserName(match.creatorId)
                .toLocaleLowerCase()
                .includes(inputValue.toLocaleLowerCase()) ||
                match.id.toString() === inputValue) &&
              (mapFilter.length === 0 ||
                mapFilter.includes(mapBGHandler(match.map).toString())) ? (
                <MatchLink match={match} key={match.id} />
              ) : (
                ''
              ),
            )}{' '}
          </div>
        </>
      )}
    </div>
  );
};

export default observer(MatchesList);
