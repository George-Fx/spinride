import React, {useEffect} from 'react';
import {svg} from '../assets/svg';

type Props = {
  message: string;
  visible: boolean;
  type?: 'error' | 'success';
  setVisible?: (visible: boolean) => void;
};

export const FlashMessage: React.FC<Props> = ({
  message,
  visible,
  type,
  setVisible,
}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible && setVisible(false);
      }, 2000);
    }
  }, [visible]);
  return (
    <section
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        maxWidth: 'var(--screen-width)',
        margin: '0 auto',
        padding: 20,
        backgroundColor: '#0F1620',
        color: '#fff',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        zIndex: 99999,
        gap: 8,
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.5s ease-in-out',
      }}
      onClick={() => {}}
    >
      {type === 'error' && (
        <span style={{marginTop: 5}}>
          <svg.ErrorSvg />
        </span>
      )}
      {type === 'success' && (
        <span style={{marginTop: 5, zIndex: 1}}>
          <div style={{width: 20, height: 20, display: 'flex'}}>
            <svg.SuccessSvg />
          </div>
        </span>
      )}
      <span
        style={{
          fontSize: 14,
          color: 'var(--lavender-gray)',
        }}
      >
        {message}
      </span>
    </section>
  );
};
