import { observer } from 'mobx-react-lite';
import CreateMatch from '../../components/CreateMatch/CreateMatch';
import MatchesList from '../../components/MatchesList/MatchesList';
import styles from './Play.module.scss';
import Plus from '../../assets/icons/Plus/Plus.svg';
import { useState } from 'react';

const Play = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.matchesList}>
        <MatchesList />
      </div>
      <div
        className={
          styles.createMatch +
          ' ' +
          (isOpenCreate ? styles.createMatchOpen : '')
        }
      >
        <CreateMatch />
      </div>

      <div
        onClick={() => setIsOpenCreate(!isOpenCreate)}
        className={
          styles.createMatchButton +
          ' ' +
          (isOpenCreate ? styles.createMatchButtonOpen : '')
        }
      >
        <img src={Plus} />
      </div>
      <div
        onClick={() => setIsOpenCreate(false)}
        className={
          styles.createMatchCloseField +
          ' ' +
          (isOpenCreate ? styles.createMatchCloseFieldOpen : '')
        }
      ></div>
    </div>
  );
};

export default observer(Play);
