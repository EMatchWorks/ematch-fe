import { useState } from 'react';
import styles from './MatchMapFilter.module.scss';
import Map from '../../../assets/icons/Map/Map';
import MapName from './MapName/MapName';

const mapList = [
  'de_mirage',
  'de_overpass',
  'de_dust2',
  'de_cbble',
  'de_nuke',
  'de_inferno',
  'de_ancient',
  'de_train',
  'de_vertigo',
  'de_anubis',
];

type MatchMapFilterProps = {
  mapFilter: string[];
  setMapFilter: Function;
};

const MatchMapFilter = ({ mapFilter, setMapFilter }: MatchMapFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const mapFilterHandler = (name: string) => {
    const index = mapFilter.indexOf(name);

    if (index === -1) {
      setMapFilter([...mapFilter, name]);
    } else {
      mapFilter.splice(index, 1);
      setMapFilter([...mapFilter]);
    }
  };

  return (
    <div className={styles.filter + ' ' + (isOpen ? styles.open : '')}>
      <div className={styles.filterMap}>
        {mapList.map((el) => (
          <MapName
            mapName={el}
            isAuth={mapFilter.includes(el)}
            clikFunc={mapFilterHandler}
          />
        ))}
      </div>
      <div className={styles.mapIcon}>
        <Map isOpen={isOpen} clikFunc={searchOpenHandler} />
      </div>
    </div>
  );
};

export default MatchMapFilter;
