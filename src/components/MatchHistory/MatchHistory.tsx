import React from 'react';
import styles from './MatchHistory.module.scss';
import matchHistory from '../../data/matchHistory';
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

const MatchHistory = () => {
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
  return (
    <div className={styles.container}>
      {matchHistory.map((match, index) => (
        <div key={index} className={styles.history}>
          <div className={styles.mapImg}>
            <img src={mapBGHandler(match.map)} />
          </div>
          <div className={styles.data}>
            <div className={styles.count}>{match.count}</div>
            <div
              className={
                styles.result +
                ' ' +
                (match.result === 'Перемога' ? styles.win : styles.lose)
              }
            >
              {match.result}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchHistory;
