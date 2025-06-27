import React, {useState} from 'react';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const Verification: React.FC = () => {
  const {navigate, location} = hooks.useRouter();
  const state = location.state as
    | {phoneNumber?: string}
    | {email?: string}
    | undefined;

  const [otpCode, setOtpCode] = useState(['', '', '', '', '']);

  const handleCodeChange = (index: number, value: string) => {
    const result = window.prompt('Enter code', value);
    if (result !== null) {
      const chars = result.split('');
      const newOtpCode = [...otpCode];
      for (let i = 0; i < chars.length && index + i < otpCode.length; i++) {
        newOtpCode[index + i] = chars[i];
      }
      setOtpCode(newOtpCode);
    }
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title="Verification"
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 30px)',
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span className="t16" style={{marginBottom: 30, textAlign: 'center'}}>
          Enter your OTP code here.
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '9px',
            marginBottom: '30px',
          }}
        >
          {otpCode.map((code, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCodeChange(index, code)}
                style={{
                  backgroundColor: 'var(--white-color)',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  padding: '13px 20px',
                  textAlign: 'center',
                  fontSize: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #EEEEEE',
                }}
              >
                {code || '_'}
              </button>
            );
          })}
        </div>
        <div style={{textAlign: 'center'}}>
          <span className="t16">
            Didn’t receive the OTP?{' '}
            <span
              onClick={() => {
                alert('Resend OTP logic goes here');
              }}
              style={{
                color: 'var(--main-dark-color)',
              }}
            >
              Resend.
            </span>
          </span>
        </div>
        <components.Button
          title="Confirm"
          onClick={() => {
            if (state && 'phoneNumber' in state && state.phoneNumber) {
              navigate(constants.routes.PHONE_NUMBER_HAS_BEEN_VERIFIED);
            }
            if (state && 'email' in state && state.email) {
              navigate(constants.routes.EMAIL_HAS_BEEN_VERIFIED);
            }
          }}
          containerStyle={{marginTop: 20}}
        />
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
