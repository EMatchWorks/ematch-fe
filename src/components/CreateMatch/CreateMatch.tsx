import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CreateMatch.module.scss';
import DropMenu from '../DropMenu/DropMenu';
import MatchService from '../../services/MatchService';
import { useNavigate } from 'react-router-dom';

// Labels only - the actual match is created with a numeric teamSize
// (ematch-be stores/validates team size as a symmetrical number, not this
// display string), derived from the label's first character below.
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [modeVarc, setModeVarc] = useState(mode[0]);
  // const [selectTypeVarc, setSelectTypeVarc] = useState(selectType[0]);
  const [mapVarc, setMapVarc] = useState(maps[0]);

  const createMatchHandler = async () => {
    const teamSize = Number(modeVarc.charAt(0));
    try {
      const response = await MatchService.create(
        teamSize,
        selectType[0],
        mapVarc,
      );
      navigate(`./${response.data.id}`);
    } catch (e: any) {
      console.error(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.fieldsContainer}>
        <DropMenu
          name={t('createMatch.modeLabel')}
          choosenParam={modeVarc}
          paramsList={mode}
          setChoosenParam={setModeVarc}
        />
        {/*<DropMenu*/}
        {/*  name={t('createMatch.selectTypeLabel')}*/}
        {/*  choosenParam={selectTypeVarc}*/}
        {/*  paramsList={selectType}*/}
        {/*  setChoosenParam={setSelectTypeVarc}*/}
        {/*/>*/}
        <DropMenu
          name={t('createMatch.mapLabel')}
          choosenParam={mapVarc}
          paramsList={maps}
          setChoosenParam={setMapVarc}
          // isDisable={selectTypeVarc === 'pick/ban' ? true : false}
          isDisable={false}
        />
      </div>
      <div className={styles.button} onClick={createMatchHandler}>
        {t('createMatch.submit')}
      </div>
    </div>
  );
};

export default CreateMatch;
