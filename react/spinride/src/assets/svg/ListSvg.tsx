import * as React from 'react';

export const ListSvg: React.FC = () => {
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
        d="M84.333 81H106M84.333 91H106M84.333 101H106M76 81h.017M76 91h.017M76 101h.017"
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
            result="effect1_foregroundBlur_3602_2427"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
