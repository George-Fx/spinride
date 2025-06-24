import * as React from 'react';

export const PromocodeGiftSvg: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={182}
      height={182}
      fill="none"
    >
      <rect
        width={100}
        height={100}
        x={41}
        y={41}
        stroke="#fff"
        strokeWidth={2}
        rx={50}
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M104.333 91v16.667H77.667V91M107.667 82.667H74.333V91h33.334v-8.333ZM91 107.667v-25M91 82.667h-7.5a4.167 4.167 0 0 1 0-8.334c5.833 0 7.5 8.334 7.5 8.334Z"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M91 82.667h7.5a4.165 4.165 0 0 0 2.946-7.113 4.165 4.165 0 0 0-2.946-1.22c-5.833 0-7.5 8.333-7.5 8.333Z"
      />
      <g filter="url(#a)">
        <circle cx={91} cy={91} r={70} stroke="#fff" strokeWidth={2} />
      </g>
      <defs>
        <filter
          id="a"
          width={182}
          height={182}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_3606_2429"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
