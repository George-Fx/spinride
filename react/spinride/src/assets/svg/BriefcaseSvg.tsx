import * as React from 'react';

export const BriefcaseSvg: React.FC = () => {
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
        d='M104.333 82.667H77.667A3.333 3.333 0 0 0 74.333 86v16.667A3.333 3.333 0 0 0 77.667 106h26.666a3.334 3.334 0 0 0 3.334-3.333V86a3.334 3.334 0 0 0-3.334-3.333Z'
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M97.667 106V79.333A3.333 3.333 0 0 0 94.333 76h-6.666a3.333 3.333 0 0 0-3.334 3.333V106'
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
            result='effect1_foregroundBlur_3634_2433'
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
