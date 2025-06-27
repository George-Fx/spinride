import React, {useEffect, useState} from 'react';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {components} from '../components';

export const EditProfile: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const {visible: isModalVisible} = useAppSelector((state) => state.modalSlice);

  useEffect(() => {
    if (isModalVisible) {
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', '#161e2f');
    } else {
      let metaTag = document.querySelector('meta[name="theme-color"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', '#F3F3F3');
    }
  }, [isModalVisible]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
    }
  };

  const renderHeader = () => {
    return <components.Header showGoBack={true} title="Edit profile" />;
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
          placeholder="+1 234 567 8900"
          value={form.phone}
          onClick={() => handleChangeField('phone', 'phone')}
          containerStyle={{marginBottom: 14}}
        />
        <components.InputField
          placeholder="123 Main St, City, Country"
          value={form.address}
          onClick={() => handleChangeField('address', 'address')}
          containerStyle={{marginBottom: 14}}
        />
        <components.Button
          title="Save Changes"
          onClick={() => {
            navigate(constants.routes.INFO_SAVED);
          }}
        />
      </main>
    );
  };

  const renderContacts = () => {
    return <components.BurgerContacts />;
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderContacts()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
