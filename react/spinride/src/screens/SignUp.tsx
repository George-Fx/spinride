import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const SignUp: React.FC = () => {
  hooks.useThemeColor('#F3F3F3');
  hooks.useBodyColor('#F3F3F3');

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
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
        title="Sign up"
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
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            marginBottom: 30,
            textTransform: 'capitalize',
          }}
        >
          Sign up!
        </h1>
        <components.InputField
          placeholder="Cristina Wolf"
          value={form.name}
          onClick={() => handleChangeField('name', 'name')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="cristinawolf@gmail.com"
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="••••••"
          value={form.password}
          onClick={() => handleChangeField('password', 'password')}
          inputType="password"
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="••••••"
          value={form.confirmPassword}
          onClick={() =>
            handleChangeField('confirmPassword', 'confirm password')
          }
          inputType="password"
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title="Sign up"
          containerStyle={{marginBottom: 30}}
          onClick={() => {
            navigate(constants.routes.VERIFY_YOUR_PHONE_NUMBER);
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',
          }}
        >
          <span className="t16">Already have an account?</span>
          <Link to={constants.routes.SIGN_IN}>Sign in.</Link>
        </div>
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
