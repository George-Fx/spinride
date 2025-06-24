import React, {useState} from 'react';

import {svg} from '../assets/svg';
import {components} from '../components';
import type {PromocodeType} from '../types';

type Props = {
  promocode: PromocodeType;
};

export const PromocodeItem: React.FC<Props> = ({promocode}) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>('');

  const color = () => {
    if (promocode.discount <= 15) {
      return '#51BA74';
    }
    if (promocode.discount <= 30) {
      return '#FF7557';
    }

    if (promocode.discount >= 50) {
      return '#FF4365';
    }
  };

  const renderFlashMessage = () => {
    return (
      <components.FlashMessage
        type={'error'}
        visible={visible}
        setVisible={setVisible}
        message={message}
      />
    );
  };

  const renderContent = () => {
    return (
      <button
        style={{
          backgroundColor: 'var(--white-color)',
          width: '100%',
          borderRadius: 12,
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 14,
          position: 'relative',
        }}
        onClick={() => {
          setVisible(true);
          setMessage(`"${promocode.code}" has been copied to clipboard.`);
          navigator.clipboard.writeText(promocode.code);
        }}
      >
        <img
          src={promocode.image}
          alt={promocode.code}
          style={{width: 80, height: 90, borderRadius: 12, objectFit: 'cover'}}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 60,
          }}
        >
          <h5 className="number-of-lines-1">{promocode.code}</h5>
          <span
            style={{
              color: color(),
              fontWeight: 600,
              marginBottom: 3,
            }}
            className="number-of-lines-1"
          >
            {promocode.discount}% off
          </span>
          <span className="t14">{promocode.expires_at}</span>
        </div>
        <div style={{position: 'absolute', right: 20, top: 20}}>
          <svg.CopySvg />
        </div>
      </button>
    );
  };

  return (
    <li style={{width: '100%'}}>
      {renderFlashMessage()}
      {renderContent()}
    </li>
  );
};
