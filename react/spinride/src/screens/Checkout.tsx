import React from 'react';

import {hooks} from '../hooks';
import {constants} from '../constants';
import {components} from '../components';
import {useAppSelector} from '../store';

export const Checkout: React.FC = () => {
  const {list: cart, total} = useAppSelector((state) => state.cartSlice);

  const {navigate} = hooks.useRouter();

  const renderHeader = () => {
    return (
      <components.Header showGoBack={true} title="Checkout" showBorder={true} />
    );
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
        {/* My order */}
        <section style={{marginBottom: 32}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 14,
            }}
          >
            <h4>My order</h4>
            <h4>${(total - 413).toLocaleString('en-US')}</h4>
          </div>
          <div
            style={{
              backgroundColor: 'var(--white-color)',
              padding: 20,
              borderRadius: 12,
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginBottom: 3,
              }}
            >
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span className="t14">{item.name}</span>
                  <span className="t14">
                    {item.quantity} x ${item.price.toLocaleString('en-US')}
                  </span>
                </li>
              ))}
            </ul>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}
            >
              <span className="t14">Discount</span>
              <span className="t14">-413</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span className="t14">Delivery</span>
              <span className="t14" style={{color: '#51BA74'}}>
                Free
              </span>
            </div>
          </div>
        </section>

        {/* My order */}
        <section>
          <div
            style={{
              marginBottom: 14,
            }}
          >
            <h4>Shipping & payment info</h4>
          </div>
          <div
            style={{
              backgroundColor: 'var(--white-color)',
              padding: 20,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <span className="t14">Darron Banks</span>
            <span className="t14">
              8000 S Kirkland Ave, Chicago, IL 6065...
            </span>
            <span className="t14">**** 4864</span>
          </div>
        </section>
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
          maxWidth: 'var(--screen-width)',
          margin: '0 auto',
        }}
      >
        <components.Button
          title="Confirm order"
          onClick={() => {
            navigate(constants.routes.ORDER_SUCCESSFUL);
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
