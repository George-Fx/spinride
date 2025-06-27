import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const ForgotPassword: React.FC = () => {
  hooks.useThemeColor('#F3F3F3');
  hooks.useBodyColor('#F3F3F3');

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
  });

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
    }
  };

  const renderHeader = () => {
    return <components.Header title="Forgot password" showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <p className="t16" style={{textAlign: 'center', marginBottom: 30}}>
          Please enter your email address. You will receive an OTP code.
        </p>
        <components.InputField
          placeholder="cristinawolf@mail.com"
          containerStyle={{marginBottom: 14}}
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
        />
        <components.Button
          title="Send"
          onClick={() => {
            navigate(constants.routes.NEW_PASSWORD, {
              state: {email: form.email},
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
