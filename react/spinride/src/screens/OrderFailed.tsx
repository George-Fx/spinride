import React from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import bg from '../assets/bg/01.png';
import {components} from '../components';

export const OrderFailed: React.FC = () => {
  const navigate = useNavigate();
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const renderBackground = () => {
    return (
      <img
        src={bg}
        alt='bg'
        style={{
          position: 'fixed',
          width: '100%',
          height: 'auto',
          zIndex: 1,
          maxWidth: 'var(--screen-width)',
          margin: '0 auto',
        }}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          padding: 20,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
          height: '100%',
          paddingBottom: '20%',
        }}
      >
        <div style={{marginBottom: 14}}>
          <svg.FailedCrossSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Your order has failed!
        </h2>
        <p
          style={{
            maxWidth: 290,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className='t16'
        >
          Something went wrong. Please try again to continue your order.
        </p>
        <div
          style={{
            display: 'grid',
            gap: 15,
            width: '100%',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <components.Button
            title='my profile'
            colorScheme='secondary'
            onClick={() => navigate(constants.routes.SIGN_IN)}
          />
          <components.Button
            title='try again'
            onClick={() => navigate(-1)}
          />
        </div>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderBackground()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
