import React, {useEffect} from 'react';
import {useSetAtom, useAtomValue} from 'jotai';
import {useNavigate} from 'react-router-dom';

import {atoms} from '../atoms';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const PhoneNumberHasBeenVerified: React.FC = () => {
  const navigate = useNavigate();
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const setIsPhoneNumberVerified = useSetAtom(atoms.isPhoneNumberVerifiedAtom);

  useEffect(() => {
    setIsPhoneNumberVerified(true);
  }, [setIsPhoneNumberVerified]);

  const renderBackground = () => {
    return (
      <img
        src={constants.images.bg01}
        alt="bg"
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
          <svg.PhoneCallSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            maxWidth: 308,
            textAlign: 'center',
          }}
        >
          Your phone number has been successfully verified!
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
          Now that your account is fully set up, immerse yourself in the world
          of bikes.
        </p>
        <components.Button
          title="Done"
          onClick={() => navigate(constants.routes.PROFILE)}
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
