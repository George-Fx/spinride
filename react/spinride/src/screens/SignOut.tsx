import React from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const SignOut: React.FC = () => {
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
          <svg.SignOutSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Are you sure?
        </h2>
        <p
          style={{
            maxWidth: 335,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          You will need to enter your email and password again.
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
            title="Sure"
            colorScheme="secondary"
            onClick={() => navigate(constants.routes.SIGN_IN)}
          />
          <components.Button title="Cancel" onClick={() => navigate(-1)} />
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
