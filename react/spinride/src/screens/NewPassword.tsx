import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const NewPassword: React.FC = () => {
  hooks.useThemeColor('#F3F3F3');
  hooks.useBodyColor('#F3F3F3');

  const navigate = useNavigate();

  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: '',
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
        title="New password"
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
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
          Enter new password and confirm.
        </p>
        <components.InputField
          inputType="password"
          placeholder="New Password"
          containerStyle={{marginBottom: 10}}
          onClick={() => handleChangeField('newPassword', 'new password')}
          value={form.newPassword}
        />
        <components.InputField
          inputType="password"
          placeholder="Confirm Password"
          containerStyle={{marginBottom: 14}}
          onClick={() =>
            handleChangeField('confirmPassword', 'confirm password')
          }
          value={form.confirmPassword}
        />
        <components.Button
          title="Change Password"
          onClick={() => {
            navigate(constants.routes.FORGOT_PASSWORD_SENT_EMAIL, {
              replace: true,
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
