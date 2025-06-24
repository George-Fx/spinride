import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

import styles from '../modules/confirmation-code.module.scss';

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
      <main className={styles.container}>
        <span className="t16" style={{marginBottom: 30, textAlign: 'center'}}>
          Enter your OTP code here.
        </span>
        <div className={styles.otpGrid}>
          {otpCode.map((code, index) => {
            return (
              <button
                key={index}
                className={styles.otpBtn}
                onClick={() => handleCodeChange(index, code)}
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
              className={styles.resend}
              onClick={() => {
                alert('Resend OTP logic goes here');
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
