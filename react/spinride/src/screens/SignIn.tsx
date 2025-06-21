import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const SignIn: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const [isRememberMe, setIsRememberMe] = useState(false);
  const styles = constants.styles.signIn;

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
        title='Sign In'
        headerStyle={{backgroundColor: 'var(--anti-flash-white)'}}
      />
    );
  };

  const renderContent = () => {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome Back!</h1>
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
          className={styles.inputField}
          placeholder='cristinawolf@mail.com'
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
        />
        <components.InputField
          className={styles.inputFieldPassword}
          placeholder='••••••'
          inputType='password'
          value={form.password}
          onClick={() => handleChangeField('password', 'password')}
        />
        <div className={styles.rememberRow}>
          <button
            className={styles.rememberBtn}
            onClick={() => setIsRememberMe(!isRememberMe)}
          >
            <div className={styles.checkbox}>
              {isRememberMe && <svg.CheckSvg />}
            </div>
            <span className={`t16 ${styles.rememberText}`}>Remember me</span>
          </button>

          <Link
            to={constants.routes.FORGOT_PASSWORD}
            className={styles.forgotLink}
          >
            Forgot password?
          </Link>
        </div>

        <components.Button
          title='Sign In'
          containerStyle={{marginBottom: 30}}
          onClick={() => {
            navigate(constants.routes.HOME, {
              replace: true,
            });
          }}
        />
        <div className={styles.bottomRow}>
          <span className={`t16 ${styles.bottomText}`}>No account? </span>
          <Link
            className={`t16 ${styles.registerLink}`}
            to={constants.routes.SIGN_UP}
          >
            Sign up.
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
