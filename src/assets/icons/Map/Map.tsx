import React from 'react';
import styles from './Map.module.scss';

type FilterProps = {
  isOpen: Boolean;
  clikFunc: () => void;
};

const Map = ({ isOpen, clikFunc }: FilterProps) => {
  return (
    <div onClick={clikFunc} className={styles.container}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isOpen ? styles.close : ''}
      >
        <path
          d="M5 92.2501V16.9C5 16.0523 5.53447 15.2966 6.3338 15.0142L34.0442 5.22493C34.4572 5.07903 34.9066 5.07274 35.3236 5.20703L66.5685 15.271C66.9994 15.4099 67.4647 15.3983 67.8882 15.2384L92.2934 6.02211C93.6016 5.52808 95 6.49476 95 7.89313V83.9642C95 84.8166 94.4597 85.5754 93.6542 85.8542L67.8398 94.7903C67.4458 94.9267 67.0191 94.9365 66.6192 94.8185L35.2745 85.5636C34.8878 85.4494 34.4756 85.4548 34.092 85.579L7.61616 94.1528C6.3243 94.5711 5 93.608 5 92.2501Z"
          stroke="#66FCF1"
          strokeWidth="8"
        />
        <path
          d="M17 25.7455C17 24.7814 17.7069 24 18.5789 24H30.4211C31.2931 24 32 24.7814 32 25.7455V72H18.5789C17.7069 72 17 71.2186 17 70.2545V25.7455Z"
          stroke="#66FCF1"
          strokeWidth="8"
        />
        <path
          d="M67 35H80.5714C81.3604 35 82 35.7705 82 36.7209V70.2791C82 71.2295 81.3604 72 80.5714 72H67V35Z"
          stroke="#66FCF1"
          strokeWidth="8"
        />
        <path
          d="M47 28.875C47 27.8394 47.6268 27 48.4 27H59.6C60.3732 27 61 27.8394 61 28.875V72H47V28.875Z"
          stroke="#66FCF1"
          strokeWidth="8"
        />
        <path
          d="M33 36H46.1765C46.6313 36 47 36.4477 47 37V72H33V36Z"
          stroke="#66FCF1"
          strokeWidth="8"
        />
        <path d="M5 65H14M85.4255 65H95" stroke="#66FCF1" strokeWidth="8" />
        <rect
          x="99.9953"
          y="89.3884"
          width="15"
          height="0"
          rx="8"
          transform="rotate(135 99.9953 89.3884)"
          fill="#66FCF1"
        />
        <rect
          x="11.6066"
          y="99.9953"
          width="15"
          height="0"
          rx="8"
          transform="rotate(-135 11.6066 99.9953)"
          fill="#66FCF1"
        />
      </svg>
    </div>
  );
};

export default Map;
