import React from 'react';
import styles from './Statistic.module.scss';

type StatisticProps = {
  winRate: number;
  headshot: number;
  mapFlexibel: number;
  kast: number;
  firstKill: number;
};

const Statistic = (props: StatisticProps) => {
  const vectorWidth = (x2: number, percent: number): number => {
    let newCoordanate = ((x2 - 200) * percent) / 100 + 200;
    return newCoordanate;
  };

  return (
    <div className={styles.container}>
      <svg
        width="400"
        height="403"
        viewBox="0 0 400 403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200 3L390.211 141.197L317.557 364.803H82.4429L9.7887 141.197L200 3Z"
          fill="#0B0C10"
          fill-opacity="0.51"
          stroke="#66FCF1"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M200 18L371.19 142.377L305.801 343.623H94.1987L28.8098 142.377L200 18Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 38L352.169 148.557L294.046 327.443H105.954L47.831 148.557L200 38Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 58L333.148 154.738L282.29 311.262H117.71L66.8521 154.738L200 58Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 78L314.127 160.918L270.534 295.082H129.466L85.8732 160.918L200 78Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 98L295.106 167.098L258.779 278.902H141.221L104.894 167.098L200 98Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 118L276.085 173.279L247.023 262.721H152.977L123.915 173.279L200 118Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 138L257.063 179.459L235.267 246.541H164.733L142.937 179.459L200 138Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 158L238.042 185.639L223.511 230.361H176.489L161.958 185.639L200 158Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200 178L219.021 191.82L211.756 214.18H188.244L180.979 191.82L200 178Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="2"
        />
        <path
          d="M200.5 198L200.976 198.345L200.794 198.905H200.206L200.024 198.345L200.5 198Z"
          stroke="#66FCF1"
          stroke-width="2"
        />
        <path
          d={`M${vectorWidth(200, props.winRate)} ${vectorWidth(
            3,
            props.winRate,
          )}L${vectorWidth(390.211, props.headshot)} ${vectorWidth(
            141.197,
            props.headshot,
          )}L${vectorWidth(317.557, props.mapFlexibel)} ${vectorWidth(
            364.803,
            props.mapFlexibel,
          )} L${vectorWidth(82.443, props.firstKill)} ${vectorWidth(
            364.803,
            props.firstKill,
          )} L${vectorWidth(9.7887, props.kast)} ${vectorWidth(
            141.197,
            props.kast,
          )} L${vectorWidth(200, props.winRate)} ${vectorWidth(
            3,
            props.winRate,
          )}Z`}
          fill="#66FCF1"
          fill-opacity="0.5"
        />
        <path
          d="M200 3L390.211 141.197L317.557 364.803H82.4429L9.7887 141.197L200 3Z"
          stroke="#66FCF1"
          stroke-opacity="1"
          stroke-width="4"
        />
      </svg>
    </div>
  );
};

export default Statistic;
