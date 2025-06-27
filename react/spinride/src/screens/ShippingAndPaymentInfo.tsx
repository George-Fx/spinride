import React, {useState} from 'react';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';

export const ShippingAndPaymentInfo: React.FC = () => {
  const {navigate} = hooks.useRouter();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
    }
  };

  const renderHeader = () => {
    return <components.Header showGoBack={true} title="Shipping  info" />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 90,
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <components.InputField
          placeholder="Darron Banks"
          value={form.name}
          onClick={() => handleChangeField('name', 'name')}
          isValid={form.email.length > 0 && form.email.includes('@')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="+1 234 567 8900"
          value={form.phone}
          onClick={() => handleChangeField('phone', 'phone')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="darronbanks@mail.com"
          value={form.email}
          onClick={() => handleChangeField('email', 'email')}
          isValid={form.email.length > 0 && form.email.includes('@')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="123 Main St, City, Country"
          value={form.address}
          onClick={() => handleChangeField('address', 'address')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="Card Number"
          value={form.cardNumber}
          onClick={() => handleChangeField('cardNumber', 'card number')}
          containerStyle={{marginBottom: 14}}
        />
        <div style={{display: 'flex', gap: 14}}>
          <components.InputField
            placeholder="MM/YY"
            value={form.expirationDate}
            onClick={() =>
              handleChangeField('expirationDate', 'expiration date')
            }
            containerStyle={{flex: 1}}
          />
          <components.InputField
            placeholder="CVV"
            value={form.cvv}
            onClick={() => handleChangeField('cvv', 'CVV')}
            containerStyle={{flex: 1}}
          />
        </div>
      </main>
    );
  };

  const renderButton = () => {
    return (
      <section
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          position: 'fixed',
          bottom: 'env(safe-area-inset-bottom)',
          left: 0,
          right: 0,
          backgroundColor: 'var(--anti-flash-white)',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <components.Button
          title="proceed to checkout"
          onClick={() => {
            navigate(constants.routes.CHECKOUT);
          }}
        />
      </section>
    );
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderButton()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
