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
    let newCoordanate = ((x2 - 300) * percent) / 100 + 300;
    return newCoordanate;
  };

  return (
    <div className={styles.container}>
      <svg
        width="600"
        height="603"
        viewBox="0 0 600 603"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M300 103L490.211 241.197L417.557 464.803H182.4429L109.7887 241.197L300 103Z"
          fill="#0B0C10"
          fill-opacity="0.51"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 118L471.19 242.377L405.801 443.623H194.1987L128.8098 242.377L300 118Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 138L452.169 248.557L394.046 427.443H205.954L147.831 248.557L300 138Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 158L433.148 254.738L382.29 411.262H217.71L166.8521 254.738L300 158Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 178L414.127 260.918L370.534 395.082H229.466L185.8732 260.918L300 178Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 198L395.106 267.098L358.779 378.902H241.221L204.894 267.098L300 198Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 218L376.085 273.279L347.023 362.721H252.977L223.915 273.279L300 218Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 238L357.063 279.459L335.267 346.541H264.733L242.937 279.459L300 238Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 258L338.042 285.639L323.511 330.361H276.489L261.958 285.639L300 258Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300 278L319.021 291.82L311.756 314.18H288.244L280.979 291.82L300 278Z"
          stroke="#1F4041"
          stroke-opacity="0.4"
          stroke-width="4"
        />
        <path
          d="M300.5 298L300.976 298.345L300.794 298.905H300.206L300.024 298.345L300.5 298Z"
          stroke="#66FCF1"
          stroke-width="4"
        />
        <path
          d={`M${vectorWidth(300, props.winRate)} ${vectorWidth(
            103,
            props.winRate,
          )}L${vectorWidth(490.211, props.headshot)} ${vectorWidth(
            241.197,
            props.headshot,
          )}L${vectorWidth(417.557, props.mapFlexibel)} ${vectorWidth(
            464.803,
            props.mapFlexibel,
          )} L${vectorWidth(182.443, props.firstKill)} ${vectorWidth(
            464.803,
            props.firstKill,
          )} L${vectorWidth(109.7887, props.kast)} ${vectorWidth(
            241.197,
            props.kast,
          )} L${vectorWidth(300, props.winRate)} ${vectorWidth(
            103,
            props.winRate,
          )}Z`}
          fill="#66FCF1"
          fill-opacity="0.5"
        />
        <path
          d="M300 103L490.211 241.197L417.557 464.803H182.4429L109.7887 241.197L300 103Z"
          stroke="#66FCF1"
          stroke-opacity="1"
          stroke-width="4"
        />
        <text
          x="300"
          y="87"
          fill="white"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          % перемог
        </text>
        <text
          x="500.211"
          y="241.197"
          fill="white"
          dominant-baseline="start"
          text-anchor="start"
        >
          % хедшотів
        </text>
        <text
          x="417.557"
          y="484.803"
          fill="white"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          % гнучкості карт
        </text>
        <text
          x="182.4429"
          y="484.803"
          fill="white"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          % перші вбивства
        </text>
        <text
          x="99.7887"
          y="241.197"
          fill="white"
          dominant-baseline="end"
          text-anchor="end"
        >
          % користності
        </text>
      </svg>
    </div>
  );
};

export default Statistic;
