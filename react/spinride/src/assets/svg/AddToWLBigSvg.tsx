import * as React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};

export const AddToWLBigSvg: React.FC<Props> = ({
  fillColor = '#fff',
  strokeColor = '#6B717D',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none">
      <rect width={43} height={43} x={0.5} y={0.5} fill="#fff" rx={21.5} />
      <rect width={43} height={43} x={0.5} y={0.5} stroke="#EEE" rx={21.5} />
      <path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M29.367 15.842a4.584 4.584 0 0 0-6.483 0l-.884.883-.883-.883a4.584 4.584 0 0 0-6.483 6.483l.883.883L22 29.692l6.484-6.484.883-.883a4.585 4.585 0 0 0 0-6.483v0Z"
      />
    </svg>
  );
};
