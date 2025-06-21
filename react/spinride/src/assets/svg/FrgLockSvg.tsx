import * as React from 'react';

export const FrgLockSvg: React.FC = () => {
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
        d='M102.667 88.833H79.333A3.333 3.333 0 0 0 76 92.167v11.666a3.334 3.334 0 0 0 3.333 3.334h23.334a3.334 3.334 0 0 0 3.333-3.334V92.167a3.333 3.333 0 0 0-3.333-3.334ZM82.667 88.833v-6.666a8.333 8.333 0 1 1 16.666 0v6.666'
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
            result='effect1_foregroundBlur_1_24'
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
