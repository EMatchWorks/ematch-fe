import { useContext, useState } from 'react';
import styles from './CreateMatch.module.scss';
import DropMenu from '../DropMenu/DropMenu';
import CreateMatchService from '../../services/CreateMatchService';
import { Context } from '../..';

const mode = ['2v2', '5v5'];
const selectType = ['preset', 'pick/ban'];
const maps = [
  'de_mirage',
  'de_inferno',
  'de_overpass',
  'de_nuke',
  'de_anubis',
  'de_ancient',
  'de_vertigo',
];

const CreateMatch = () => {
  const [modeVarc, setModeVarc] = useState(mode[0]);
  const [selectTypeVarc, setSelectTypeVarc] = useState(selectType[0]);
  const [mapVarc, setMapVarc] = useState(maps[0]);
  const { userStore } = useContext(Context);

  const createMatchHandler = () => {
    CreateMatchService.create(
      userStore.user.id,
      modeVarc,
      selectTypeVarc,
      mapVarc,
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <DropMenu
          name={'Mode'}
          choosenParam={modeVarc}
          paramsList={mode}
          setChoosenParam={setModeVarc}
        />
        <DropMenu
          name={'Select Type'}
          choosenParam={selectTypeVarc}
          paramsList={selectType}
          setChoosenParam={setSelectTypeVarc}
        />
        <DropMenu
          name={'Map'}
          choosenParam={mapVarc}
          paramsList={maps}
          setChoosenParam={setMapVarc}
          isDisable={selectTypeVarc === 'pick/ban' ? true : false}
        />
      </div>
      <div className={styles.button} onClick={createMatchHandler}>
        Create Match
      </div>
    </div>
  );
};

export default CreateMatch;
