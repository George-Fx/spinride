import * as React from 'react';

export const PhoneCallSvg: React.FC = () => {
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
        d='M93.084 80.333a8.333 8.333 0 0 1 6.583 6.584m-6.584-13.25A14.999 14.999 0 0 1 106.335 86.9m-1.667 13.3v5a3.33 3.33 0 0 1-3.633 3.333 32.977 32.977 0 0 1-14.384-5.116 32.502 32.502 0 0 1-10-10 32.983 32.983 0 0 1-5.117-14.45 3.334 3.334 0 0 1 3.317-3.634h5a3.334 3.334 0 0 1 3.334 2.867c.21 1.6.602 3.171 1.166 4.683a3.333 3.333 0 0 1-.75 3.517l-2.116 2.117a26.666 26.666 0 0 0 10 10L93.6 96.4a3.334 3.334 0 0 1 3.517-.75 21.4 21.4 0 0 0 4.683 1.167 3.335 3.335 0 0 1 2.867 3.383Z'
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
            result='effect1_foregroundBlur_3621_2431'
            stdDeviation={10}
          />
        </filter>
      </defs>
    </svg>
  );
};
