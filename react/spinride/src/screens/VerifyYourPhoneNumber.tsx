import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';
import styles from '../modules/verify-your-phone-number.module.scss';

export const VerifyYourPhoneNumber: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phoneNumber: '',
  });

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
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
        <p className={`t16 ${styles.infoText}`}>
          We have sent you an SMS with a code to number +17 0123456789.
        </p>
        <components.InputField
          className={styles.inputField}
          placeholder='+17 0123456789'
          value={form.phoneNumber}
          onClick={() => handleChangeField('phoneNumber', 'phone number')}
        />
        <components.Button
          title='Confirm'
          onClick={() => {
            navigate(constants.routes.CONFIRMATION_CODE);
          }}
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
