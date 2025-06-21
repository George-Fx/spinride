import * as React from 'react';

export const PocketSvg: React.FC = () => {
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
        d='M77.667 76h26.666a3.333 3.333 0 0 1 3.334 3.333v10a16.665 16.665 0 1 1-33.334 0v-10A3.333 3.333 0 0 1 77.667 76Z'
      />
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M84.333 87.667 91 94.333l6.667-6.666'
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
            result='effect1_foregroundBlur_3527_2381'
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
