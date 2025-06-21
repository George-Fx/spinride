import React from 'react';
import {useAtomValue} from 'jotai';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {cartAtom} from '../atoms/cart.atom';

type Props = {
  title?: string;
  showGoBack?: boolean;
  showUser?: boolean;
  showBurger?: boolean;
  showBasket?: boolean;
  headerStyle?: React.CSSProperties;
  showBorder?: boolean;
};

export const Header: React.FC<Props> = ({
  title,
  showGoBack,
  showBurger,
  showBasket,
  showBorder,
}) => {
  const {navigate} = hooks.useRouter();
  const cart = useAtomValue(cartAtom);

  const canGoBack = showGoBack && window.history.length > 1;

  const renderGoBack = () => {
    if (!showGoBack && !canGoBack) return null;

    return (
      <button
        style={{paddingLeft: 20, paddingRight: 20}}
        onClick={() => {
          navigate(-1);
        }}
      >
        <svg.GoBackSvg />
      </button>
    );
  };

  const renderBurgerMenu = () => {
    if (!showBurger) return null;

    return (
      <button style={{paddingLeft: 20, paddingRight: 20}}>
        <svg.BurgerSvg />
      </button>
    );
  };

  const renderBasket = () => {
    if (!showBasket) return null;
    return (
      <button
        style={{paddingLeft: 20, paddingRight: 20}}
        onClick={() => {
          navigate(constants.routes.ORDER);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative',
          }}
        >
          <svg.BagSvg />
        </div>
        <div
          style={{
            height: 19,
            backgroundColor: 'var(--main-orange-color)',
            borderRadius: 10,
            paddingLeft: 4,
            paddingRight: 4,
            position: 'absolute',
            bottom: 7,
            right: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: 'var(--white-color)',
              fontWeight: 700,
            }}
          >
            ${cart.total ? cart.total.toFixed(2) : '0'}
          </span>
        </div>
      </button>
    );
  };

  const renderTitle = () => {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4>{title}</h4>
      </div>
    );
  };

  return (
    <header
      style={{
        display: 'flex',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        zIndex: 1000,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',

        // backgroundColor: 'red',
        height: 'var(--header-height)',
        maxWidth: 'var(--screen-width)',
        borderBottom: showBorder
          ? '1px solid #E2E2E2'
          : '1px solid transparent',
        margin: '0 auto',
      }}
    >
      {renderGoBack()}
      {renderTitle()}
      {renderBurgerMenu()}
      {renderBasket()}
    </header>
  );
};
