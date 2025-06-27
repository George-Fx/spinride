import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {constants} from '../constants';
import {components} from '../components';

export const VerifyYourEmail: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: 'darronbanks@mail.com',
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
        title="Verify your email"
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
        <p
          className="t16"
          style={{marginBottom: 30, textAlign: 'center', maxWidth: 335}}
        >
          We have sent you an email with a verification code.
        </p>
        <components.InputField
          placeholder="+17 0123456789"
          value={form.email}
          onClick={() => handleChangeField('email', 'email address')}
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title="Confirm"
          onClick={() => {
            navigate(constants.routes.VERIFICATION, {
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
