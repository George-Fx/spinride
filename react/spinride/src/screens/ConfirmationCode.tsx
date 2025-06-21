import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';

import styles from '../modules/confirmation-code.module.scss';

export const ConfirmationCode: React.FC = () => {
  const navigate = useNavigate();

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
        title='Verify your phone number'
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className={styles.container}>
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
        <div>
          <span className='t16'>
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
          title='Confirm'
          onClick={() => {
            navigate(constants.routes.SIGN_UP_ACCOUNT_CREATED, {
              replace: true,
            });
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
