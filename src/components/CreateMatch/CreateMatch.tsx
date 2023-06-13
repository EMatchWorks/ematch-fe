import { useContext, useState } from 'react';
import styles from './CreateMatch.module.scss';
import DropMenu from '../DropMenu/DropMenu';
import MatchService from '../../services/MatchService';
import { Context } from '../..';
import MatchStore from '../../store/matchStore';
import { useNavigate } from 'react-router-dom';

const mode = ['1v1', '2v2', '5v5'];
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
  const { matchStore } = useContext(Context);
  const navigate = useNavigate();

  const [modeVarc, setModeVarc] = useState(mode[0]);
  const [selectTypeVarc, setSelectTypeVarc] = useState(selectType[0]);
  const [mapVarc, setMapVarc] = useState(maps[0]);

  const createMatchHandler = async () => {
    const newMatchID = await matchStore.createMatch(
      modeVarc,
      selectTypeVarc,
      mapVarc,
    );
    navigate(`./${newMatchID}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <DropMenu
          name={'Режим'}
          choosenParam={modeVarc}
          paramsList={mode}
          setChoosenParam={setModeVarc}
        />
        <DropMenu
          name={'Виборка'}
          choosenParam={selectTypeVarc}
          paramsList={selectType}
          setChoosenParam={setSelectTypeVarc}
        />
        <DropMenu
          name={'Мапа'}
          choosenParam={mapVarc}
          paramsList={maps}
          setChoosenParam={setMapVarc}
          isDisable={selectTypeVarc === 'pick/ban' ? true : false}
        />
      </div>
      <div className={styles.button} onClick={createMatchHandler}>
        Створити матч
      </div>
    </div>
  );
};

export default CreateMatch;
