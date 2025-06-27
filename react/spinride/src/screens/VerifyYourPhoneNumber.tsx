import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';

export const VerifyYourPhoneNumber: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phoneNumber: '+17123456789',
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
        title="Verify phone number"
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
        <p className="t16" style={{marginBottom: 30, textAlign: 'center'}}>
          We have sent you an SMS with a code to number +17 0123456789.
        </p>
        <components.InputField
          placeholder="+17 0123456789"
          value={form.phoneNumber}
          onClick={() => handleChangeField('phoneNumber', 'phone number')}
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title="Confirm"
          onClick={() => {
            navigate(constants.routes.VERIFICATION, {
              state: {phoneNumber: form.phoneNumber},
            });
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
