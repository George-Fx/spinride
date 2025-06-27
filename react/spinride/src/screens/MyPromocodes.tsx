import React, {useState} from 'react';

import {hooks} from '../hooks';
import {items} from '../items';
import {components} from '../components';

export const MyPromocodes: React.FC = () => {
  const {promocodes, loading} = hooks.useGetPromocodes();

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
    if (loading) return null;
    return <components.Header title="My promocodes" showGoBack={true} />;
  };

  const renderAddPromocode = () => {
    return (
      <section>
        <div style={{display: 'flex', flexDirection: 'row', gap: 14}}>
          <components.InputField
            placeholder="Add promocode"
            value={form.promocode}
            onClick={() => handleChangeField('promocode', 'promocode')}
          />
          <div style={{minWidth: 100}}>
            <components.Button
              title="+Add"
              onClick={() => {
                window.alert(`This function is not implemented yet.`);
              }}
            />
          </div>
        </div>
      </section>
    );
  };

  const renderContent = () => {
    if (loading) return null;
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 20,
        }}
      >
        <ul style={{display: 'grid', gap: 8, marginBottom: 20}}>
          {promocodes.map((promocode) => {
            return (
              <items.PromocodeItem key={promocode.id} promocode={promocode} />
            );
          })}
        </ul>
        {renderAddPromocode()}
      </main>
    );
  };

  const renderLoader = () => {
    if (loading) {
      return <components.Loader />;
    }

    return null;
  };

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderLoader()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
