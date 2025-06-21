import React, {useEffect} from 'react';
import {useSetAtom, useAtomValue} from 'jotai';

import {atoms} from '../atoms';
import {svg} from '../assets/svg';
import type {BikeType} from '../types';

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
  const cart = useAtomValue(atoms.cartAtom);
  const addToCart = useSetAtom(atoms.addToCartAtom);
  const removeFromCart = useSetAtom(atoms.removeFromCartAtom);
  const qty = cart.list.find((item) => item.id === bike.id)?.quantity || 0;

  // useEffect(() => {
  //   if (!bikeInCart?.quantity) return;
  //   if (bikeInCart?.quantity === 1) {
  //     setMessage(`"${bike?.name}" has been added to your cart.`);
  //     setVisible(true);
  //   } else if (bikeInCart?.quantity > 1) {
  //     setMessage(
  //       `"${bike?.name}" has been updated in your cart. Quantity: ${bikeInCart.quantity}`,
  //     );
  //     setVisible(true);
  //   } else {
  //     setMessage(`"${bike?.name}" has been removed from your cart.`);
  //     setVisible(true);
  //   }
  // }, [bikeInCart?.quantity]);

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
      <button
        // onClick={() => {
        //   removeFromCart(bike);
        // }}
        onClick={minusBtnClicked}
        style={{userSelect: 'none'}}
      >
        <svg.MinusSvg />
      </button>
      <span className="t14">{qty}</span>
      <button
        // onClick={() => {
        //   addToCart(bike);
        // }}
        onClick={plusBtnClicked}
        style={{userSelect: 'none'}}
      >
        <svg.PlusSvg />
      </button>
    </div>
  );
};
