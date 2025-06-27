import React from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const OrderSuccessful: React.FC = () => {
  const navigate = useNavigate();
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const renderBackground = () => {
    return <components.BackgroundImage />;
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
          <svg.CheckCircleSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Thank you for your order!
        </h2>
        <p
          style={{
            maxWidth: 290,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          Your order will be delivered on time. Thank you!
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
            title="Go Shopping"
            colorScheme="secondary"
            onClick={() => navigate(constants.routes.HOME)}
          />
          <components.Button
            title="View orders"
            onClick={() => navigate(constants.routes.ORDER_HISTORY)}
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
