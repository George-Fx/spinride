import React from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const InfoSaved: React.FC = () => {
  const navigate = useNavigate();
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const renderBackground = () => {
    return (
      <img
        src={constants.images.bg01}
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
          <svg.PocketSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
          }}
        >
          Info Saved!
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
          Your personal information has been securely stored.
        </p>
        <components.Button
          title='Done'
          onClick={() => navigate(-1)}
          containerStyle={{maxWidth: 170}}
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
