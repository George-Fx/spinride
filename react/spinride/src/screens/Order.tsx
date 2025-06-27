import React, {useEffect, useState} from 'react';

import {items} from '../items';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {components} from '../components';

export const Order: React.FC = () => {
  const {navigate} = hooks.useRouter();
  const cart = useAppSelector((state) => state.cartSlice);
  const total = useAppSelector((state) => state.cartSlice.total);
  const subtotal = useAppSelector((state) => state.cartSlice.subtotal);

  const {visible: isModalVisible} = useAppSelector((state) => state.modalSlice);

  const [form, setForm] = useState({code: ''});
  const [promocodeApplied, setPromocodeApplied] = useState(false);

  const handleChangeField = (field: keyof typeof form, label: string) => {
    const result = window.prompt(`Enter your ${label}`, form[field]);
    if (result !== null) {
      setForm((prev) => ({...prev, [field]: result}));
    }
  };

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

  useEffect(() => {
    if (cart.list.length === 0) {
      navigate(constants.routes.CART_EMPTY);
    }
  }, [cart.list]);

  const renderHeader = () => {
    return (
      <components.Header
        showBurger={true}
        showBasket={true}
        showBorder={true}
        title="Order"
      />
    );
  };

  const renderBottomBar = () => {
    return <components.BottomTabBar />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 'calc(var(--header-height) + 20px)',
          paddingBottom: 'calc(var(--bottom-tabbar-height) + 40px)',
        }}
      >
        {/* Products */}
        <section>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              paddingBottom: 20,
              borderBottom: '1px solid #E2E2E2',
              marginBottom: 20,
            }}
          >
            {cart.list.map((bike) => {
              return <items.OrderItem bike={bike} key={bike.id} />;
            })}
          </ul>
        </section>

        {/* Code */}
        {!promocodeApplied && (
          <section style={{marginBottom: '16%'}}>
            <div style={{display: 'flex', flexDirection: 'row', gap: 14}}>
              <components.InputField
                placeholder="Code2024"
                value={form.code}
                onClick={() => handleChangeField('code', 'promocode')}
              />
              <div style={{minWidth: 100}}>
                <components.Button
                  title="Apply"
                  onClick={() => {
                    setPromocodeApplied(true);
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Promocode Applied */}
        {promocodeApplied && (
          <section style={{marginBottom: '16%'}}>
            <svg.PromocodeAppliedSvg />
          </section>
        )}

        {/* Total */}
        <section style={{marginBottom: 30}}>
          <div
            style={{
              backgroundColor: 'var(--white-color)',
              padding: 20,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <h5>Subtotal</h5>
              <h5>${subtotal.toLocaleString('en-US')}</h5>
            </div>
            {promocodeApplied && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <span className="t16">Discount</span>
                <span className="t16">-413</span>
              </div>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                borderBottom: '1px solid #E2E2E2',
                paddingBottom: 10,
              }}
            >
              <span className="t16">Delivery</span>
              <span className="t16" style={{color: '#51BA74'}}>
                free
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h5>Total</h5>
              {!promocodeApplied && <h5>${total.toLocaleString('en-US')}</h5>}
              {promocodeApplied && (
                <h5>${(total - 413).toLocaleString('en-US')}</h5>
              )}
            </div>
          </div>
        </section>

        {/* Button */}
        <section>
          <components.Button
            title="Shipping & Payment info"
            onClick={() => {
              navigate(constants.routes.SHIPPING_AND_PAYMENT_INFO);
            }}
          />
        </section>
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
        {renderBottomBar()}
        {renderContacts()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
