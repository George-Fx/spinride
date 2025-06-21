import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

import styles from '../modules/sign-up.module.scss';

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
        title='Sign up'
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Sign up!</h1>
        <components.InputField
          className={styles.inputField}
          placeholder='Cristina Wolf'
          value={form.name}
          onClick={() => handleChangeField('name', 'name')}
        />
        <components.InputField
          className={styles.inputField}
          placeholder='cristinawolf@gmail.com'
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
        />
        <components.InputField
          className={styles.inputField}
          placeholder='••••••'
          value={form.password}
          onClick={() => handleChangeField('password', 'password')}
          inputType='password'
        />
        <components.InputField
          className={styles.inputField}
          placeholder='••••••'
          value={form.confirmPassword}
          onClick={() =>
            handleChangeField('confirmPassword', 'confirm password')
          }
          inputType='password'
        />
        <components.Button
          title='Sign up'
          containerStyle={{marginBottom: 30}}
          onClick={() => {
            navigate(constants.routes.VERIFY_YOUR_PHONE_NUMBER);
          }}
        />
        <div className={styles.bottomRow}>
          <span className='t16'>Already have an account?</span>
          <Link
            className={`t16 ${styles.signInLink}`}
            to={constants.routes.SIGN_IN}
          >
            Sign in.
          </Link>
        </div>
        <div className={styles.socialRow}>
          <button
            onClick={() => {
              alert('Facebook login logic goes here');
            }}
          >
            <svg.FacebookSvg />
          </button>
          <button
            onClick={() => {
              alert('Twitter login logic goes here');
            }}
          >
            <svg.TwitterSvg />
          </button>
          <button
            onClick={() => {
              alert('Google login logic goes here');
            }}
          >
            <svg.GoogleSvg />
          </button>
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
