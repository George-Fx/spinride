import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {useAppDispatch} from '../store';
import {modalActions} from '../store/slices/modalSlice';

type Props = {
  title?: string;
  showGoBack?: boolean;
  showUser?: boolean;
  showBurger?: boolean;
  showBasket?: boolean;
  goBackColor?: string;
  headerStyle?: React.CSSProperties;
  showBorder?: boolean;
  containerStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
};

export const Header: React.FC<Props> = ({
  title,
  showGoBack,
  showBurger,
  showBasket,
  showBorder,
  titleStyle,
  goBackColor,
  containerStyle,
}) => {
  const dispatch = useAppDispatch();
  const {navigate} = hooks.useRouter();
  const {total} = useAppSelector((state) => state.cartSlice);

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
        <svg.GoBackSvg color={goBackColor} />
      </button>
    );
  };

  const renderBurgerMenu = () => {
    if (!showBurger) return null;

    return (
      <button
        style={{paddingLeft: 20, paddingRight: 20}}
        onClick={() => {
          dispatch(modalActions.setVisible(true));
        }}
      >
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
            ${total ? total.toFixed(2) : '0'}
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
        <h4 style={{...titleStyle}}>{title}</h4>
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
        zIndex: 3,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',

        height: 'var(--header-height)',
        maxWidth: 'var(--screen-width)',
        borderBottom: showBorder
          ? '1px solid #E2E2E2'
          : '1px solid transparent',
        margin: '0 auto',
        ...containerStyle,
      }}
    >
      {renderGoBack()}
      {renderTitle()}
      {renderBurgerMenu()}
      {renderBasket()}
    </header>
  );
};
