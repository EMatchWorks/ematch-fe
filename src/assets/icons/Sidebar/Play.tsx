const Play = (props: { blueBG: string; darkBG: string }) => {
  return (
    // <svg
    //   width="42"
    //   height="42"
    //   viewBox="0 0 42 42"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M1 4.23563C1 2.00564 3.34664 0.555153 5.34132 1.55219L38.8692 18.3111C41.0805 19.4164 41.0808 22.5718 38.8698 23.6776L5.34197 40.4466C3.34724 41.4443 1 39.9938 1 37.7635V4.23563Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     className={props.blueBG}
    //   />
    //   <path
    //     d="M8 26.7635V15.2356C8 13.0056 10.3466 11.5551 12.3413 12.5522L23.8692 18.3144C26.0805 19.4197 26.0809 22.5751 23.8698 23.6809L12.342 29.4466C10.3472 30.4443 8 28.9938 8 26.7635Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     className={props.darkBG}
    //   />
    // </svg>

    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6553 57.3119L48.1359 41.1505C50.2621 40.0231 50.2621 36.9769 48.1359 35.8495L17.6553 19.6881C15.6573 18.6287 13.25 20.077 13.25 22.3386L13.25 54.6614C13.25 56.9229 15.6573 58.3713 17.6553 57.3119Z"
        stroke="#66FCF1"
        stroke-width="2"
        className={props.blueBG}
      />
      <path
        filter="url(#filter1_i_302_4)"
        d="M25.3614 44.7241L32.5989 41.3053C34.8904 40.2229 34.8904 36.9626 32.5989 35.8801L25.3614 32.4613C23.3713 31.5212 21.08 32.9729 21.08 35.1739V42.0116C21.08 44.2125 23.3713 45.6642 25.3614 44.7241Z"
        stroke="#66FCF1"
        stroke-width="2"
        className={props.darkBG}
      />

      <defs>
        <filter
          id="filter1_i_302_4"
          x="20.08"
          y="31.1691"
          width="15.2375"
          height="14.8474"
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
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.4 0 0 0 0 0.988235 0 0 0 0 0.945098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_302_4"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Play;
