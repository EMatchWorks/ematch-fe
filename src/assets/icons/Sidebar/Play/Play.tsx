import React from 'react';
import { useState } from 'react';

const Play = (props: { active: string }) => {
  const defaultStyles = { color: '#66FCF1', border: '0', scale: '1' };

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
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseOver={hoverChangeParams}
      onMouseOut={unhoverChangeParams}
      onMouseDown={smallerIcon}
      onMouseUp={biggerIcon}
      style={{
        transform: `scale(${
          props.active === 'play' ? defaultStyles.scale : hoverParams.scale
        })`,
      }}
    >
      <g filter={props.active === 'play' ? 'url(#filter0_d_302_6)' : ''}>
        <path
          d="M11 47.7635V14.2356C11 12.0056 13.3466 10.5551 15.3413 11.5522L48.8692 28.3111C51.0805 29.4164 51.0808 32.5718 48.8698 33.6776L15.342 50.4466C13.3472 51.4443 11 49.9938 11 47.7635Z"
          stroke="#66FCF1"
          fill={
            props.active === 'play' ? defaultStyles.color : hoverParams.color
          }
          stroke-width={
            props.active === 'play' ? defaultStyles.border : hoverParams.border
          }
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <g filter={props.active === 'play' ? 'url(#filter1_i_302_6)' : ''}>
          <path
            d="M21.8942 23.4467C20.5644 22.782 19 23.749 19 25.2356V36.7635C19 38.2504 20.5648 39.2174 21.8946 38.5522L33.4225 32.7866C34.8965 32.0493 34.8963 29.9457 33.4221 29.2089L21.8942 23.4467Z"
            fill="#0B0C10"
          />
        </g>
        <path
          d="M18 25.2356C18 23.0056 20.3466 21.5551 22.3413 22.5522L33.8692 28.3144C36.0805 29.4197 36.0809 32.5751 33.8698 33.6809L22.342 39.4466C20.3472 40.4443 18 38.9938 18 36.7635V25.2356Z"
          stroke="#66FCF1"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_302_6"
          x="0"
          y="0.230469"
          width="61.5279"
          height="61.5382"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_302_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_302_6"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_302_6"
          x="17"
          y="21.2305"
          width="19.5279"
          height="19.5382"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_302_6"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Play;
