import React, {useState} from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const MyPromocodesEmpty: React.FC = () => {
  const {navigate} = hooks.useRouter();

  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const [form, setForm] = useState({
    promocode: '',
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
        title="My promocodes"
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        titleStyle={{color: 'var(--white-color)'}}
        goBackColor="var(--white-color)"
      />
    );
  };

  const renderBackground = () => {
    return <components.BackgroundImage />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 20,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 2,
        }}
      >
        <div style={{marginBottom: 14}}>
          <svg.PromocodeGiftSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            maxWidth: 191,
            textAlign: 'center',
          }}
        >
          Your don’t have promocodes yet!
        </h2>
        <p
          style={{
            maxWidth: 306,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          Stay tuned for exclusive offers and discounts. Add a promocode below.
        </p>
        <components.InputField
          placeholder="Promocode2024"
          containerStyle={{marginBottom: 14}}
          value={form.promocode}
          onClick={() => handleChangeField('promocode', 'promocode')}
        />
        <div style={{width: '100%'}}>
          <components.Button
            title="submit"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      </main>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderBackground()}
        {renderHeader()}
        {renderContent()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
