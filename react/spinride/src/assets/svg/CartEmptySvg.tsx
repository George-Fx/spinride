import * as React from 'react';

export const CartEmptySvg: React.FC = () => {
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
        d="M81 74.334 76 81v23.333a3.336 3.336 0 0 0 3.333 3.334h23.334a3.333 3.333 0 0 0 3.333-3.334V81l-5-6.666H81ZM76 81h30"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M97.667 87.666a6.666 6.666 0 1 1-13.334 0"
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
            result="effect1_foregroundBlur_3538_2385"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
