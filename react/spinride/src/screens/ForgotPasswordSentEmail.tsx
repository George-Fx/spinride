import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const ForgotPasswordSentEmail: React.FC = () => {
  const {navigate} = hooks.useRouter();
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
          <svg.FrgLockSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            maxWidth: 214,
            textAlign: 'center',
          }}
        >
          Your password has been reset!
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
          Log in with your new credentials. Welcome back!
        </p>
        <components.Button
          title="done"
          onClick={() => navigate(constants.routes.SIGN_IN)}
          containerStyle={{maxWidth: 170, width: '100%'}}
        />
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
