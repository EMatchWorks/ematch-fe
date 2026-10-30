import { useEffect, useState } from 'react';
import styles from './MatchesList.module.scss';
import users from '../../data/user';

import MatchLink from './MatchLink/MatchLink';
import MatchSearch from './MatchSearch/MatchSearch';
import MatchMapFilter from './MatchMapFilter/MatchMapFilter';
import maps from '../../data/map';
import Preloader from '../../assets/preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadMatchList } from '../../store/matchSlice';

const MatchesList = () => {
  const dispatch = useAppDispatch();
  const { matchList, isLoadingMatchList } = useAppSelector(
    (state) => state.match,
  );

  const [inputValue, setInputValue] = useState('');
  const [mapFilter, setMapFilter] = useState<string[]>([]);

  useEffect(() => {
    dispatch(loadMatchList());
  }, [dispatch]);

  const findUserName = (id: string): string => {
    // `users` is local mock data with numeric ids, while match.creatorId is
    // now a real ematch-be uuid string - coerce so this still type-checks.
    return users.find((user) => user.id.toString() === id)?.userName || '';
  };

  const mapBGHandler = (name: string): string => {
    return maps.find((map) => map.name === name)?.name || '';
  };

  return (
    <div className={styles.container}>
      {isLoadingMatchList ? (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      ) : (
        <>
          <MatchSearch inputValue={inputValue} setInputValue={setInputValue} />
          <MatchMapFilter mapFilter={mapFilter} setMapFilter={setMapFilter} />
          <div className={styles.gridContainer}>
            {' '}
            {matchList.map((match) =>
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

export default MatchesList;
