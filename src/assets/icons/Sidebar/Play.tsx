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
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 46.7635V13.2356C9 11.0056 11.3466 9.55515 13.3413 10.5522L46.8692 27.3111C49.0805 28.4164 49.0808 31.5718 46.8698 32.6776L13.342 49.4466C11.3472 50.4443 9 48.9938 9 46.7635Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={props.blueBG}
      />

      <path
        filter="url(#filter1_i_302_4)"
        d="M16 35.7635V24.2356C16 22.0056 18.3466 20.5551 20.3413 21.5522L31.8692 27.3144C34.0805 28.4197 34.0809 31.5751 31.8698 32.6809L20.342 38.4466C18.3472 39.4443 16 37.9938 16 35.7635Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={props.darkBG}
      />

      <defs>
        <filter
          id="filter1_i_302_4"
          x="15"
          y="20.2305"
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
