import React from 'react';
import styles from './MapName.module.scss';

type FilterMapProps = {
  mapName: string;
  isAuth: boolean;
  clikFunc: Function;
};

const MapName = (props: FilterMapProps) => {
  return (
    <div
      className={styles.mapNameFilter}
      onClick={() => {
        props.clikFunc(props.mapName);
      }}
    >
      <div className={styles.chekBox}>
        <svg
          width="86"
          height="60"
          viewBox="0 0 86 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 31.5L26.8787 54.8787C28.0503 56.0503 29.9497 56.0503 31.1213 54.8787L82.5 3.5"
            stroke="#66FCF1"
            strokeWidth="15"
            className={
              (props.isAuth ? styles.active : '') + ' ' + styles.svgElem1
            }
          ></path>
        </svg>
      </div>
      <div className={styles.filterName}>{props.mapName}</div>
    </div>
  );
};
export default MapName;
