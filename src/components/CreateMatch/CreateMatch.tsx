import { useState } from 'react';
import styles from './CreateMatch.module.scss';
import DropMenu from '../DropMenu/DropMenu';

const mode = ['2v2', '5v5'];
const selectType = ['random', 'precet', 'ban/decide'];

const CreateMatch = () => {
  const [varc, setVarc] = useState(mode[0]);

  return (
    <div className={styles.container}>
      <DropMenu
        name={'Mode'}
        choosenParam={varc}
        paramsList={mode}
        setChoosenParam={setVarc}
      />
    </div>
  );
};

export default CreateMatch;
