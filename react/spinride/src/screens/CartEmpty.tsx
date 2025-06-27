import React from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const CartEmpty: React.FC = () => {
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const {navigate} = hooks.useRouter();

  const renderBackground = () => {
    return <components.BackgroundImage />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflowY: 'auto',
          height: '100%',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        <div style={{marginBottom: 14}}>
          <svg.CartEmptySvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            textAlign: 'center',
          }}
        >
          Your cart is empty!
        </h2>
        <p
          style={{
            maxWidth: 283,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          Looks like you don't have any items in your cart yet.
        </p>
        <components.Button
          title="shop now"
          onClick={() => navigate(constants.routes.HOME)}
          containerStyle={{maxWidth: 170, width: '100%'}}
        />
      </main>
    );
  };

  const renderBottomBar = () => {
    return (
      <components.BottomTabBar
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        tabsContainerStyle={{
          border: '1px solid #555C6A',
        }}
      />
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderBackground()}
        {renderContent()}
        {renderBottomBar()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
