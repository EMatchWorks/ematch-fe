import { type } from 'os';
import { useState } from 'react';
import styles from './Input.module.scss';
type InputProps = {
  isOpen: Boolean;
  clikFunc: () => void;
};

const Input = ({ isOpen, clikFunc }: InputProps) => {
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
        <rect
          x="99.9949"
          y="89.3884"
          width="15"
          height="55"
          rx="7.5"
          transform="rotate(135 99.9949 89.3884)"
          fill="#66FCF1"
        />
        <rect
          x="11.6063"
          y="99.9954"
          width="15"
          height="0"
          rx="7.5"
          transform="rotate(-135 11.6063 99.9954)"
          fill="#66FCF1"
        />
        <circle
          cx="36.5001"
          cy="36.5002"
          r="31"
          transform="rotate(45 36.5001 36.5002)"
          stroke="#66FCF1"
          stroke-width="11"
        />
      </svg>
    </div>
  );
};

export default Input;
