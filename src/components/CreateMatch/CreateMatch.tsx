import { useState } from 'react';
import styles from './CreateMatch.module.scss';

const mode = ['2v2', '5v5'];

const CreateMatch = () => {
  const [varc, setVarc] = useState(mode[0]);

  return (
    <div className={styles.container}>
      <div className={styles.inputField}>
        <div className={styles.inputChoosen}>
          <div>Mode</div>
          <div>{varc}</div>
        </div>
        <div className={styles.inputParams}>
          {mode.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateMatch;
