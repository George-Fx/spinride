import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {components} from '../components';

export const OrderHistory: React.FC = () => {
  const {orders, loading} = hooks.useGetOrders();

  const [openId, setOpenId] = useState<number | null>(null);

  if (loading) return <components.Loader />;

  const renderHeader = () => {
    return <components.Header title="Order History" showGoBack={true} />;
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 'calc(var(--header-height) + 10px)',
          paddingBottom: 20,
        }}
      >
        <ul style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          {orders.map((item) => (
            <li
              style={{
                backgroundColor: 'var(--white-color)',
                borderRadius: 12,
              }}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <section
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderBottom: `1px solid ${openId === item.id ? '#EEEEEE' : 'transparent'}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    WebkitJustifyContent: 'space-between',
                    marginBottom: 7,
                  }}
                >
                  <h5>#{item.id}</h5>
                  {item.status === 'shipping' && <svg.ShippingSvg />}
                  {item.status === 'canceled' && <svg.CanceledSvg />}
                  {item.status === 'delivered' && <svg.DeliveredSvg />}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span className="t12">
                    {item.date} at {item.time}
                  </span>
                  <span
                    className="t12"
                    style={{color: 'var(--main-dark-color)', fontWeight: 700}}
                  >
                    ${item.total}
                  </span>
                </div>
              </section>
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.section
                    key="content"
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3, ease: [0.87, 0, 0.13, 1]}}
                  >
                    <ul
                      style={{
                        padding: 20,
                        gap: 6,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {item.products.map((product) => {
                        return (
                          <li
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <span className="t14">{product.name}</span>
                            <span className="t14">
                              {product.quantity} x ${product.price}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.section>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
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
