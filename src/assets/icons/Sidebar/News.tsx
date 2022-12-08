const News = (props: { news: string }) => {
  return (
    // <svg
    //   width="44"
    //   height="49"
    //   viewBox="0 0 44 49"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M37.8511 1.54401H6.14896C3.46487 1.54401 1.48358 3.95188 1.48358 6.66755V42.3324C1.48358 45.0481 3.46487 47.456 6.14896 47.456H37.8511C40.5352 47.456 42.5165 45.0481 42.5165 42.3324V6.66755C42.5165 3.95188 40.5352 1.54401 37.8511 1.54401Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-miterlimit="10"
    //     stroke-linejoin="bevel"
    //     className={props.blueBG}
    //   />
    //   <path
    //     d="M15.7875 8H7.21248C6.54285 8 6 8.70632 6 9.57761V15.4224C6 16.2937 6.54285 17 7.21248 17H15.7875C16.4572 17 17 16.2937 17 15.4224V9.57761C17 8.70632 16.4572 8 15.7875 8Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linejoin="bevel"
    //     className={props.darkBG}
    //   />
    //   <path
    //     d="M35 11H24C22.3431 11 21 12.3431 21 14C21 15.6569 22.3431 17 24 17H35C36.6569 17 38 15.6569 38 14C38 12.3431 36.6569 11 35 11Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linejoin="bevel"
    //     className={props.darkBG}
    //   />
    //   <path
    //     d="M35 22H9C7.34315 22 6 23.3431 6 25C6 26.6569 7.34315 28 9 28H35C36.6569 28 38 26.6569 38 25C38 23.3431 36.6569 22 35 22Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linejoin="bevel"
    //     className={props.darkBG}
    //   />
    //   <path
    //     d="M35 33H9C7.34315 33 6 34.3431 6 36C6 37.6569 7.34315 39 9 39H35C36.6569 39 38 37.6569 38 36C38 34.3431 36.6569 33 35 33Z"
    //     stroke="#66FCF1"
    //     stroke-width="2"
    //     stroke-linejoin="bevel"
    //     className={props.darkBG}
    //   />
    // </svg>
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.news}
    >
      <path
        d="M48.3511 9.54401H16.649C13.9649 9.54401 11.9836 11.9519 11.9836 14.6676V50.3324C11.9836 53.0481 13.9649 55.456 16.649 55.456H48.3511C51.0352 55.456 53.0165 53.0481 53.0165 50.3324V14.6676C53.0165 11.9519 51.0352 9.54401 48.3511 9.54401Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linejoin="bevel"
      />

      <path
        d="M26.2875 16H17.7125C17.0428 16 16.5 16.7063 16.5 17.5776V23.4224C16.5 24.2937 17.0428 25 17.7125 25H26.2875C26.9572 25 27.5 24.2937 27.5 23.4224V17.5776C27.5 16.7063 26.9572 16 26.2875 16Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linejoin="bevel"
      />

      <path
        d="M45.5 19H34.5C32.8431 19 31.5 20.3431 31.5 22C31.5 23.6569 32.8431 25 34.5 25H45.5C47.1569 25 48.5 23.6569 48.5 22C48.5 20.3431 47.1569 19 45.5 19Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linejoin="bevel"
      />

      <path
        d="M45.5 30H19.5C17.8431 30 16.5 31.3431 16.5 33C16.5 34.6569 17.8431 36 19.5 36H45.5C47.1569 36 48.5 34.6569 48.5 33C48.5 31.3431 47.1569 30 45.5 30Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linejoin="bevel"
      />

      <path
        d="M45.5 41H19.5C17.8431 41 16.5 42.3431 16.5 44C16.5 45.6569 17.8431 47 19.5 47H45.5C47.1569 47 48.5 45.6569 48.5 44C48.5 42.3431 47.1569 41 45.5 41Z"
        stroke="#66FCF1"
        stroke-width="2"
        stroke-linejoin="bevel"
      />
      <defs>
        <filter
          id="filter0_i_302_34"
          x="15.5"
          y="15"
          width="13"
          height="11"
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
            result="effect1_innerShadow_302_34"
          />
        </filter>
        <filter
          id="filter1_i_302_34"
          x="30.5"
          y="18"
          width="19"
          height="8"
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
            result="effect1_innerShadow_302_34"
          />
        </filter>
        <filter
          id="filter2_i_302_34"
          x="15.5"
          y="29"
          width="34"
          height="8"
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
            result="effect1_innerShadow_302_34"
          />
        </filter>
        <filter
          id="filter3_i_302_34"
          x="15.5"
          y="40"
          width="34"
          height="8"
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
            result="effect1_innerShadow_302_34"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default News;
