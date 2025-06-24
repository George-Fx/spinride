import React, {useState} from 'react';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';

export const LeaveAReview: React.FC = () => {
  hooks.useThemeColor('#161e2f');
  hooks.useBodyColor('#161e2f');

  const {navigate} = hooks.useRouter();

  const [form, setForm] = useState({
    comment: '',
  });

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
    }
  };

  const renderBackground = () => {
    return (
      <img
        src={constants.images.bg01}
        alt="bg"
        style={{
          position: 'fixed',
          width: '100%',
          height: 'auto',
          zIndex: 1,
          maxWidth: 'var(--screen-width)',
          margin: '0 auto',
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title="Leave a review"
        containerStyle={{
          backgroundColor: '#161e2f',
        }}
        titleStyle={{color: 'var(--white-color)'}}
        goBackColor="var(--white-color)"
      />
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          // height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'calc(var(--header-height) + 0px)',
          paddingBottom: 20,
          zIndex: 2,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: '6%',
        }}
      >
        <div style={{marginBottom: 14}}>
          <svg.MessageCircleSvg />
        </div>
        <h2
          style={{
            color: 'var(--white-color)',
            textTransform: 'capitalize',
            marginBottom: 14,
            maxWidth: 303,
            textAlign: 'center',
          }}
        >
          Please rate the quality of service for the order!
        </h2>
        <p
          style={{
            maxWidth: 335,
            textAlign: 'center',
            color: '#C3CDE0',
            marginBottom: 30,
          }}
          className="t16"
        >
          Your comments and suggestions help us improve the service quality
          better!
        </p>
        <components.InputField
          placeholder="Enter your comment"
          containerStyle={{
            minHeight: 140,
            borderRadius: 12,
            alignItems: 'flex-start',
            paddingTop: 11,
            marginBottom: 14,
          }}
          value={form.comment}
          onClick={() => handleChangeField('comment', 'comment')}
        />
        <components.Button
          title="submit"
          onClick={() => {
            navigate(-1);
          }}
        />
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
