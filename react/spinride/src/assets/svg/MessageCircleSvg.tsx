import * as React from 'react';

export const MessageCircleSvg: React.FC = () => {
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
        d="M106 90.167a13.96 13.96 0 0 1-1.5 6.333 14.17 14.17 0 0 1-12.667 7.833 13.96 13.96 0 0 1-6.333-1.5L76 106l3.167-9.5a13.965 13.965 0 0 1-1.5-6.333A14.166 14.166 0 0 1 85.5 77.5a13.968 13.968 0 0 1 6.333-1.5h.834A14.134 14.134 0 0 1 106 89.333v.834Z"
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
            result="effect1_foregroundBlur_3606_2428"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
