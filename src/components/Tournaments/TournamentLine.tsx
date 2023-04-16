import React from 'react';

type Props = {
  height: number;
  marginX: number;
  marginY: number;
  roundIndex: number;
  matchIndex: number | 0;
};
type LineParams = {
  width: number;
  height: number;
  direction: boolean;
};

const heightFunc = (height: number, marginY: number, index: number) => {
  let coef = height - (height / 2 - marginY);
  for (let i = 0; i < index; i++) {
    coef *= 2;
  }
  let res = height + coef;
  return res;
};

const TournamentLine = (props: Props) => {
  const params: LineParams = {
    width: props.marginX * 2,
    height: heightFunc(props.height, props.marginY, props.roundIndex),
    direction: props.matchIndex % 2 === 0,
  };

  return (
    <svg
      width={params.width}
      height={params.height}
      viewBox={`0 0 ${params.width} ${params.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        [params.direction ? 'top' : 'bottom']: '0',
        right: `-${params.width}px`,
      }}
    >
      <path
        d={
          params.direction
            ? `M0 ${0 + props.height / 2} H ${params.width / 2} V ${
                params.height - props.height / 2
              } H ${params.width}`
            : `M0 ${params.height - props.height / 2} H ${params.width / 2} V ${
                0 + props.height / 2
              } H ${params.width}`
        }
        stroke="white"
        strokeWidth="5"
      />
    </svg>
  );
};

export default TournamentLine;
