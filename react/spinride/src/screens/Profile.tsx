import React from 'react';

import {hooks} from '../hooks';
import {items} from '../items';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {components} from '../components';

const SmartphoneGray: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
      <rect width={49} height={49} x={0.5} y={0.5} fill="#fff" rx={24.5} />
      <rect width={49} height={49} x={0.5} y={0.5} stroke="#EEE" rx={24.5} />
      <path
        stroke="#6B717D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M29.167 16.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V18.333c0-.92-.746-1.666-1.666-1.666ZM25 30h.008"
      />
    </svg>
  );
};

const SmartphoneOrange: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
      <rect width={49} height={49} x={0.5} y={0.5} stroke="#FF7557" rx={24.5} />
      <path
        stroke="#FF7557"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M29.167 16.667h-8.334c-.92 0-1.666.746-1.666 1.666v13.334c0 .92.746 1.666 1.666 1.666h8.334c.92 0 1.666-.746 1.666-1.666V18.333c0-.92-.746-1.666-1.666-1.666ZM25 30h.008"
      />
    </svg>
  );
};

const MailOrange: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
      <rect width={49} height={49} x={0.5} y={0.5} stroke="#FF7557" rx={24.5} />
      <path
        stroke="#FF7557"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.333 18.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H18.333c-.916 0-1.666-.75-1.666-1.667V20c0-.917.75-1.667 1.666-1.667Z"
      />
      <path
        stroke="#FF7557"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M33.333 20 25 25.833 16.667 20"
      />
    </svg>
  );
};

const MailGray: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="none">
      <rect width={49} height={49} x={0.5} y={0.5} fill="#fff" rx={24.5} />
      <rect width={49} height={49} x={0.5} y={0.5} stroke="#EEE" rx={24.5} />
      <path
        stroke="#6B717D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.333 18.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H18.333c-.916 0-1.666-.75-1.666-1.667V20c0-.917.75-1.667 1.666-1.667Z"
      />
      <path
        stroke="#6B717D"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M33.333 20 25 25.833 16.667 20"
      />
    </svg>
  );
};

export const Profile: React.FC = () => {
  const {navigate} = hooks.useRouter();

  const {emailVerified, phoneVerified} = useAppSelector(
    (state) => state.verificationSlice,
  );

  const isEmailVerified = emailVerified;
  const isPhoneNumberVerified = phoneVerified;

  const renderHeader = () => {
    return (
      <components.Header
        showBurger={true}
        showBasket={true}
        title="My profile"
        showBorder={true}
      />
    );
  };

  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 'calc(var(--header-height) + 0px)',
          marginTop: '10%',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        <section style={{marginBottom: '7%'}}>
          <h3>Darron Banks</h3>
          <span className="t14">darronbanks@mail.com</span>
        </section>
        <section style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <items.ProfileMenuItem
            title="Personal info"
            leftSideIcon={<svg.ProfileUserSvg />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.EDIT_PROFILE)}
          />
          <items.ProfileMenuItem
            title="Order history"
            leftSideIcon={<svg.CalendarSvg />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.ORDER_HISTORY)}
          />
          <items.ProfileMenuItem
            title="Order history Empty"
            leftSideIcon={<svg.CalendarSvg />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.ORDER_HISTORY_EMPTY)}
          />
          <items.ProfileMenuItem
            title="My promocodes"
            leftSideIcon={<svg.GiftSvg />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.MY_PROMOCODES)}
          />
          <items.ProfileMenuItem
            title="My promocodes Empty"
            leftSideIcon={<svg.GiftSvg />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.MY_PROMOCODES_EMPTY)}
          />
          <items.ProfileMenuItem
            title={`${isPhoneNumberVerified ? 'Phone number verified' : 'Verify phone number'}`}
            leftSideIcon={
              isPhoneNumberVerified ? <SmartphoneGray /> : <SmartphoneOrange />
            }
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.VERIFY_YOUR_PHONE_NUMBER)}
            titleStyle={{
              color: isPhoneNumberVerified
                ? 'var(--main-color)'
                : 'var(--main-orange-color)',
            }}
          />
          <items.ProfileMenuItem
            title={`${isEmailVerified ? 'Email verified' : 'Verify email'}`}
            leftSideIcon={isEmailVerified ? <MailGray /> : <MailOrange />}
            rightSideIcon={<svg.RightArrowSvg />}
            onClick={() => navigate(constants.routes.VERIFY_YOUR_EMAIL)}
            titleStyle={{
              color: isEmailVerified
                ? 'var(--main-color)'
                : 'var(--main-orange-color)',
            }}
          />
          <items.ProfileMenuItem
            title="Sign out"
            leftSideIcon={<svg.LogOutSvg />}
            onClick={() => navigate(constants.routes.SIGN_OUT)}
          />
          <items.ProfileMenuItem
            title="Delete account"
            leftSideIcon={<svg.CrossSvg />}
            titleStyle={{color: 'var(--main-orange-color)'}}
            onClick={() => navigate(constants.routes.SIGN_IN)}
          />
        </section>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderBottomBar()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
