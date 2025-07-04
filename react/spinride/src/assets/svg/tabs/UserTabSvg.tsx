import * as React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {color?: string};

export const UserTabSvg: React.FC<Props> = ({color = '#FF7557'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <g>
        <path
          fill={color}
          d="M20.485 3.515A11.922 11.922 0 0 0 12 0a11.921 11.921 0 0 0-8.485 3.515A11.921 11.921 0 0 0 0 12c0 3.205 1.248 6.219 3.515 8.485A11.921 11.921 0 0 0 12 24c3.205 0 6.219-1.248 8.485-3.515A11.921 11.921 0 0 0 24 12c0-3.205-1.248-6.219-3.515-8.485ZM6.015 20.737A6.059 6.059 0 0 1 12 15.716a6.059 6.059 0 0 1 5.984 5.02A10.534 10.534 0 0 1 12 22.595c-2.219 0-4.28-.687-5.984-1.857Zm2.17-10.243A3.82 3.82 0 0 1 12 6.678a3.82 3.82 0 0 1 3.816 3.816A3.82 3.82 0 0 1 12 14.309a3.82 3.82 0 0 1-3.816-3.815Zm11.017 9.268a7.474 7.474 0 0 0-2.184-3.52 7.476 7.476 0 0 0-2.173-1.372 5.221 5.221 0 0 0 2.377-4.376A5.228 5.228 0 0 0 12 5.272a5.228 5.228 0 0 0-5.222 5.222c0 1.83.947 3.444 2.377 4.376a7.477 7.477 0 0 0-2.173 1.372 7.476 7.476 0 0 0-2.184 3.52A10.567 10.567 0 0 1 1.406 12C1.406 6.159 6.16 1.406 12 1.406c5.841 0 10.594 4.753 10.594 10.594 0 3.063-1.307 5.826-3.392 7.762Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
