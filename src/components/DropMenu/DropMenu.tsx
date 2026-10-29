import { useState } from 'react';
import styles from './DropMenu.module.scss';

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

  const closeStyles = {
    height: `${0}px`,
    opacity: `${0}`,
    'pointer-events': 'none',
  };

  const setInputParamsStylesHandler = () => {
    if (inputParamsStyles.height === '0px') {
      setInputParamsStyles({
        height: `${
          props.paramsList.length < 3 ? props.paramsList.length * 50 : 150
        }px`,
        opacity: `${100}`,
        'pointer-events': 'all',
      });
    } else {
      setInputParamsStyles(closeStyles);
    }
  };

  const selectParamHandler = (el: string) => {
    props.setChoosenParam(el);
    setInputParamsStyles(closeStyles);
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
        <div className={styles.choosenParam}>{props.choosenParam}</div>
      </div>
      <div className={styles.inputParams} style={inputParamsStyles}>
        {props.paramsList.map((el, index) => (
          <div key={index} onClick={() => selectParamHandler(el)}>
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropMenu;
