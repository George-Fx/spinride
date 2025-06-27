import React from 'react';

import {svg} from '../assets/svg';
import type {BikeType} from '../types';
import {useAppSelector} from '../store';

type Props = {
  bike: BikeType;
  minusBtnClicked?: () => void;
  plusBtnClicked?: () => void;
};

export const Counter: React.FC<Props> = ({
  bike,
  minusBtnClicked,
  plusBtnClicked,
}) => {
  const {list: cart} = useAppSelector((state) => state.cartSlice);
  const qty = cart.find((item) => item.id === bike.id)?.quantity || 0;

  return (
    <div
      style={{
        backgroundColor: 'var(--white-color)',
        padding: 8,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #EEEEEE',
        height: 40,
        minWidth: 110,
        paddingLeft: 14,
        paddingRight: 14,
        userSelect: 'none',
      }}
    >
      <button onClick={minusBtnClicked} style={{userSelect: 'none'}}>
        <svg.MinusSvg />
      </button>
      <span className="t14">{qty}</span>
      <button onClick={plusBtnClicked} style={{userSelect: 'none'}}>
        <svg.PlusSvg />
      </button>
    </div>
  );
};
