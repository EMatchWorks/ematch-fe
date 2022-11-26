import React from 'react';
import { useState } from 'react';

const Anticheat = () => {
  const [hoverParams, setHoverParams] = useState({
    color: '#0B0C10',
    border: '2',
    scale: '1',
  });

  const hoverChangeParams = () => {
    setHoverParams({ color: '#66FCF1', border: '0', scale: '1.17' });
  };

  const unhoverChangeParams = () => {
    setHoverParams({ color: '#0B0C10', border: '2', scale: '1' });
  };

  const biggerIcon = () => {
    setHoverParams({ ...hoverParams, scale: '1.17' });
  };

  const smallerIcon = () => {
    setHoverParams({ ...hoverParams, scale: '1' });
  };

  return (
    <svg
      width="42"
      height="52"
      viewBox="0 0 42 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={hoverChangeParams}
      onMouseOut={unhoverChangeParams}
      onMouseDown={smallerIcon}
      onMouseUp={biggerIcon}
      style={{ transform: `scale(${hoverParams.scale})` }}
    >
      <path
        d="M1.30133 8.75327C1.30133 7.66628 2.16929 6.77561 3.25487 6.72039C5.50164 6.60611 9.2264 6.33752 11.9206 5.74116C14.8937 5.10397 18.1841 3.18416 19.868 2.10601C20.5598 1.66309 21.4486 1.64148 22.148 2.07218C24.0358 3.23465 27.7443 5.42388 29.3923 5.74116C31.7752 6.23162 36.2398 6.54779 38.7877 6.69708C39.8563 6.75969 40.6986 7.64154 40.6986 8.71197V23.604C40.6986 44.017 24.518 49.7087 21.484 50.5965C21.1661 50.6895 20.8303 50.6837 20.5156 50.5801C17.4967 49.5855 1.30133 43.3104 1.30133 23.1462V8.75327Z"
        fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width={hoverParams.border}
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Anticheat;
