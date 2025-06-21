import * as React from 'react';

export const EmptyHeartSvg: React.FC = () => {
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
        d="M105.733 78.683a9.169 9.169 0 0 0-12.966 0L91 80.45l-1.766-1.767A9.169 9.169 0 0 0 76.267 91.65l1.766 1.767L91 106.383l12.967-12.966 1.766-1.767a9.165 9.165 0 0 0 0-12.967Z"
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
            result="effect1_foregroundBlur_3519_2379"
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
