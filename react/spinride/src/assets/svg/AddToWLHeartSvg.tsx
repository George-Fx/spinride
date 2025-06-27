import * as React from 'react';

type Props = {
  strokeColor?: string;
  fillColor?: string;
};

export const AddToWLHeartSvg: React.FC<Props> = ({
  strokeColor = '#6B717D',
  fillColor = '#D9D9D9',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <path
        fill={fillColor}
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M17.365 3.842a4.582 4.582 0 0 0-6.483 0l-.884.883-.883-.883a4.584 4.584 0 1 0-6.483 6.483l.883.883 6.483 6.484 6.484-6.484.883-.883a4.582 4.582 0 0 0 0-6.483v0Z"
      />
    </svg>
  );
};
