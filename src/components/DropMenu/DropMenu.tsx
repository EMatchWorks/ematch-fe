import { useState } from 'react';
import styles from './DropMenu.module.scss';
import { isDisabled } from '@testing-library/user-event/dist/utils';

type DropMenuProps = {
  name: string;
  paramsList: Array<string>;
  choosenParam: string;
  setChoosenParam: React.Dispatch<React.SetStateAction<string>>;
  isDisable?: boolean;
};

const DropMenu = (props: DropMenuProps) => {
  const [inputParamsStyles, setInputParamsStyles] = useState({
    height: `${0}px`,
    opacity: `${0}`,
    'pointer-events': `none`,
  });

  const setInputParamsStylesHandler = () => {
    if (inputParamsStyles.height == '0px') {
      setInputParamsStyles({
        height: `${
          props.paramsList.length < 3 ? props.paramsList.length * 50 : 150
        }px`,
        opacity: `${100}`,
        'pointer-events': 'all',
      });
    } else {
      setInputParamsStyles({
        height: `${0}px`,
        opacity: `${0}`,
        'pointer-events': 'none',
      });
    }
  };

  return (
    <div className={styles.inputField}>
      <div
        style={
          props.isDisable
            ? {
                pointerEvents: 'none',
                color: '#89a09e',
                border: '2px solid #89a09e',
              }
            : {}
        }
        className={styles.inputChoosen}
        onClick={setInputParamsStylesHandler}
      >
        <div>{props.name}</div>
        <div>{props.choosenParam}</div>
      </div>
      <div className={styles.inputParams} style={inputParamsStyles}>
        {props.paramsList.map((el, index) => (
          <div key={index} onClick={() => props.setChoosenParam(el)}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
