import React from 'react';
import { useState } from 'react';
import styles from './News.module.scss';
const News = (props: { active: string }) => {
  const defaultStyles = { color: '#66FCF1', border: '2', scale: '1' };

  const [hoverParams, setHoverParams] = useState({
    color: '#0B0C10',
    border: '2',
    scale: '1',
  });

  const hoverChangeParams = () => {
    setHoverParams({ color: '#66FCF1', border: '1', scale: '1.17' });
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
      height="47"
      viewBox="0 0 42 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.news}
      // onMouseOver={hoverChangeParams}
      // onMouseOut={unhoverChangeParams}
      // onMouseDown={smallerIcon}
      // onMouseUp={biggerIcon}
      // style={{ transform: `scale(${hoverParams.scale})` }}
    >
      <path
        d="M36.8511 1.54401H5.14896C3.12463 1.54401 1.48358 3.39018 1.48358 5.66755V41.3324C1.48358 43.6098 3.12463 45.456 5.14896 45.456H36.8511C38.8754 45.456 40.5165 43.6098 40.5165 41.3324V5.66755C40.5165 3.39018 38.8754 1.54401 36.8511 1.54401Z"
        // fill={hoverParams.color}
        stroke="#66FCF1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linejoin="bevel"
      />
      <path
        d="M15.008 6H7.99203C7.30698 6 6.78487 6.39403 6.47418 6.83321C6.16174 7.27488 6 7.8328 6 8.40232V13.5977C6 14.1672 6.16174 14.7251 6.47418 15.1668C6.78487 15.606 7.30698 16 7.99203 16H15.008C15.693 16 16.2151 15.606 16.5258 15.1668C16.8383 14.7251 17 14.1672 17 13.5977V8.40232C17 7.8328 16.8383 7.27488 16.5258 6.83321C16.2151 6.39403 15.693 6 15.008 6Z"
        fill="#0B0C10"
        stroke="#66FCF1"
        // stroke-width={hoverParams.border}
        stroke-linejoin="bevel"
      />
      <path
        d="M24 10H33C34.6569 10 36 11.3431 36 13C36 14.6569 34.6569 16 33 16H24C22.3431 16 21 14.6569 21 13C21 11.3431 22.3431 10 24 10Z"
        fill="#0B0C10"
        stroke="#66FCF1"
        // stroke-width={hoverParams.border}
        stroke-linejoin="bevel"
      />
      <path
        d="M9 21H33C34.6569 21 36 22.3431 36 24C36 25.6569 34.6569 27 33 27H9C7.34315 27 6 25.6569 6 24C6 22.3431 7.34315 21 9 21Z"
        fill="#0B0C10"
        stroke="#66FCF1"
        // stroke-width={hoverParams.border}
        stroke-linejoin="bevel"
      />
      <path
        d="M9 32H33C34.6569 32 36 33.3431 36 35C36 36.6569 34.6569 38 33 38H9C7.34315 38 6 36.6569 6 35C6 33.3431 7.34315 32 9 32Z"
        fill="#0B0C10"
        stroke="#66FCF1"
        // stroke-width={hoverParams.border}
        stroke-linejoin="bevel"
      />
    </svg>
    // <svg
    //   width="62"
    //   height="67"
    //   viewBox="0 0 62 67"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   onMouseOver={hoverChangeParams}
    //   onMouseOut={unhoverChangeParams}
    //   onMouseDown={smallerIcon}
    //   onMouseUp={biggerIcon}
    //   style={{
    //     transform: `scale(${
    //       props.active ? defaultStyles.scale : hoverParams.scale
    //     })`,
    //   }}
    // >
    //   <g>
    //     <path
    //       d="M46.8511 11.544H15.149C13.1246 11.544 11.4836 13.3902 11.4836 15.6676V51.3324C11.4836 53.6098 13.1246 55.456 15.149 55.456H46.8511C48.8754 55.456 50.5165 53.6098 50.5165 51.3324V15.6676C50.5165 13.3902 48.8754 11.544 46.8511 11.544Z"
    //       fill={props.active ? defaultStyles.color : hoverParams.color}
    //       stroke="#66FCF1"
    //       stroke-width={
    //         props.active ? defaultStyles.border : hoverParams.border
    //       }
    //       stroke-miterlimit="10"
    //       stroke-linejoin="bevel"
    //     />
    //     <g>
    //       <path
    //         d="M25.008 17H17.992C17.4441 17 17 17.6278 17 18.4023V23.5977C17 24.3722 17.4441 25 17.992 25H25.008C25.5559 25 26 24.3722 26 23.5977V18.4023C26 17.6278 25.5559 17 25.008 17Z"
    //         fill="#0B0C10"
    //       />
    //     </g>
    //     <path
    //       d="M25.008 16H17.992C17.307 16 16.7849 16.394 16.4742 16.8332C16.1617 17.2749 16 17.8328 16 18.4023V23.5977C16 24.1672 16.1617 24.7251 16.4742 25.1668C16.7849 25.606 17.307 26 17.992 26H25.008C25.693 26 26.2151 25.606 26.5258 25.1668C26.8383 24.7251 27 24.1672 27 23.5977V18.4023C27 17.8328 26.8383 17.2749 26.5258 16.8332C26.2151 16.394 25.693 16 25.008 16Z"
    //       stroke="#66FCF1"
    //       stroke-width={
    //         props.active ? defaultStyles.border : hoverParams.border
    //       }
    //       stroke-linejoin="bevel"
    //     />
    //     <g>
    //       <path
    //         d="M43 19H34C31.7909 19 30 20.7909 30 23C30 25.2091 31.7909 27 34 27H43C45.2091 27 47 25.2091 47 23C47 20.7909 45.2091 19 43 19Z"
    //         fill="#0B0C10"
    //       />
    //     </g>
    //     <path
    //       d="M34 20H43C44.6569 20 46 21.3431 46 23C46 24.6569 44.6569 26 43 26H34C32.3431 26 31 24.6569 31 23C31 21.3431 32.3431 20 34 20Z"
    //       stroke="#66FCF1"
    //       stroke-width={
    //         props.active ? defaultStyles.border : hoverParams.border
    //       }
    //       stroke-linejoin="bevel"
    //     />
    //     <g>
    //       <path
    //         d="M43 30H19C16.7909 30 15 31.7909 15 34C15 36.2091 16.7909 38 19 38H43C45.2091 38 47 36.2091 47 34C47 31.7909 45.2091 30 43 30Z"
    //         fill="#0B0C10"
    //       />
    //     </g>
    //     <path
    //       d="M19 31H43C44.6569 31 46 32.3431 46 34C46 35.6569 44.6569 37 43 37H19C17.3431 37 16 35.6569 16 34C16 32.3431 17.3431 31 19 31Z"
    //       stroke="#66FCF1"
    //       stroke-width={
    //         props.active ? defaultStyles.border : hoverParams.border
    //       }
    //       stroke-linejoin="bevel"
    //     />
    //     <g>
    //       <path
    //         d="M43 41H19C16.7909 41 15 42.7909 15 45C15 47.2091 16.7909 49 19 49H43C45.2091 49 47 47.2091 47 45C47 42.7909 45.2091 41 43 41Z"
    //         fill="#0B0C10"
    //       />
    //     </g>
    //     <path
    //       d="M19 42H43C44.6569 42 46 43.3431 46 45C46 46.6569 44.6569 48 43 48H19C17.3431 48 16 46.6569 16 45C16 43.3431 17.3431 42 19 42Z"
    //       stroke="#66FCF1"
    //       stroke-width={
    //         props.active ? defaultStyles.border : hoverParams.border
    //       }
    //       stroke-linejoin="bevel"
    //     />
    //   </g>
    //   <defs>
    //     <filter
    //       id="filter0_d_302_36"
    //       x="0.483582"
    //       y="0.544006"
    //       width="61.0329"
    //       height="65.912"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset />
    //       <feGaussianBlur stdDeviation="5" />
    //       <feComposite in2="hardAlpha" operator="out" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 1 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="BackgroundImageFix"
    //         result="effect1_dropShadow_302_36"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="effect1_dropShadow_302_36"
    //         result="shape"
    //       />
    //     </filter>
    //     <filter
    //       id="filter1_i_302_36"
    //       x="15"
    //       y="15"
    //       width="13"
    //       height="12"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset />
    //       <feGaussianBlur stdDeviation="15" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 0.25 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="shape"
    //         result="effect1_innerShadow_302_36"
    //       />
    //     </filter>
    //     <filter
    //       id="filter2_i_302_36"
    //       x="30"
    //       y="19"
    //       width="17"
    //       height="8"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset />
    //       <feGaussianBlur stdDeviation="15" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 0.25 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="shape"
    //         result="effect1_innerShadow_302_36"
    //       />
    //     </filter>
    //     <filter
    //       id="filter3_i_302_36"
    //       x="15"
    //       y="30"
    //       width="32"
    //       height="8"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset />
    //       <feGaussianBlur stdDeviation="15" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 0.25 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="shape"
    //         result="effect1_innerShadow_302_36"
    //       />
    //     </filter>
    //     <filter
    //       id="filter4_i_302_36"
    //       x="15"
    //       y="41"
    //       width="32"
    //       height="8"
    //       filterUnits="userSpaceOnUse"
    //       color-interpolation-filters="sRGB"
    //     >
    //       <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //       <feBlend
    //         mode="normal"
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       />
    //       <feColorMatrix
    //         in="SourceAlpha"
    //         type="matrix"
    //         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    //         result="hardAlpha"
    //       />
    //       <feOffset />
    //       <feGaussianBlur stdDeviation="15" />
    //       <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
    //       <feColorMatrix
    //         type="matrix"
    //         values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 0.25 0"
    //       />
    //       <feBlend
    //         mode="normal"
    //         in2="shape"
    //         result="effect1_innerShadow_302_36"
    //       />
    //     </filter>
    //   </defs>
    // </svg>
  );
};

export default News;
