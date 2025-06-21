import * as React from 'react';

export const CheckCircleSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={182}
      height={182}
      fill='none'
    >
      <rect
        width={100}
        height={100}
        x={41}
        y={41}
        stroke='#fff'
        strokeWidth={2}
        rx={50}
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M107.667 89.467V91a16.668 16.668 0 1 1-9.884-15.233'
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M107.667 77.666 91 94.35l-5-5'
      />
      <g filter='url(#a)'>
        <circle
          cx={91}
          cy={91}
          r={70}
          stroke='#fff'
          strokeWidth={2}
        />
      </g>
      <defs>
        <filter
          id='a'
          width={182}
          height={182}
          x={0}
          y={0}
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood
            floodOpacity={0}
            result='BackgroundImageFix'
          />
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            result='effect1_foregroundBlur_3565_2394'
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
