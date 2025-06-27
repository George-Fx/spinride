import React, {useState} from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const OrderHistoryEmpty: React.FC = () => {
  const {navigate} = hooks.useRouter();

  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title="Order history"
        containerStyle={{backgroundColor: '#161e2f'}}
        titleStyle={{color: 'var(--white-color)'}}
        goBackColor="var(--white-color)"
      />
    );
  };

  const renderBackground = () => {
    return <components.BackgroundImage />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 20,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 2,
        }}
      >
        <div style={{marginBottom: 14}}>
          <svg.ListSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            maxWidth: 292,
            textAlign: 'center',
          }}
        >
          Your order history is currently empty!
        </h2>
        <p
          style={{
            maxWidth: 306,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          You haven't placed any orders yet. Explore our products and start
          shopping!
        </p>
        <components.Button
          title="shop now"
          onClick={() => navigate(constants.routes.SHOP)}
          containerStyle={{maxWidth: 170, width: '100%'}}
        />
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderBackground()}
        {renderHeader()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
