import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const SignIn: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const [isRememberMe, setIsRememberMe] = useState(false);

  hooks.useThemeColor('#F3F3F3');
  hooks.useBodyColor('#F3F3F3');

  const [form, setForm] = useState({
    email: '',
    password: '',
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
        title="Sign In"
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
        <h1 style={{textAlign: 'center', marginBottom: 14}}>Welcome Back!</h1>
        <p
          style={{
            marginBottom: 30,
            textAlign: 'center',
            color: 'var(--text-color)',
          }}
        >
          Sign in to continue
        </p>
        <components.InputField
          placeholder="cristinawolf@mail.com"
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="••••••"
          inputType="password"
          value={form.password}
          onClick={() => handleChangeField('password', 'password')}
          containerStyle={{marginBottom: 20}}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <div
            onClick={() => setIsRememberMe(!isRememberMe)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                backgroundColor: 'var(--white-color)',
                borderRadius: 5,
                border: '1px solid #EEEEEE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isRememberMe && <svg.CheckSvg />}
            </div>
            <span className="t16" style={{lineHeight: 1, marginBottom: 1}}>
              Remember me
            </span>
          </div>

          <Link to={constants.routes.FORGOT_PASSWORD}>Forgot password?</Link>
        </div>

        <components.Button
          title="Sign In"
          containerStyle={{marginBottom: 20}}
          onClick={() => {
            navigate(constants.routes.HOME, {
              replace: true,
            });
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <span className="t16">Don’t have an account? </span>
          <Link to={constants.routes.SIGN_UP}>Sign up.</Link>
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
