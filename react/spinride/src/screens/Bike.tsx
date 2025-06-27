import React, {useState} from 'react';

import {items} from '../items';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {useAppSelector} from '../store';
import {useAppDispatch} from '../store';
import {components} from '../components';
import {cartActions} from '../store/slices/cartSlice';
import {wishlistActions} from '../store/slices/wishlistSlice';

export const Bike: React.FC = () => {
  const {location} = hooks.useRouter();
  const {bikeId} = location.state || {bikeId: null};
  const {bike, loading} = hooks.useGetBike(bikeId);
  const {reviews} = hooks.useGetReviews();

  const dispatch = useAppDispatch();
  const {navigate} = hooks.useRouter();

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  const {list: cart} = useAppSelector((state) => state.cartSlice);
  const {list: wishlist} = useAppSelector((state) => state.wishlistSlice);

  const bikeInCart = cart.find((item) => item.id === bike?.id);

  if (!bike) return null;
  const isInWishlist = wishlist.some((item) => item.id === bike.id);

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(bike));
    if (!bikeInCart?.quantity) return;
    if (bikeInCart?.quantity === 1) {
      setMessage(`"${bike?.name}" has been added to your cart.`);
      setVisible(true);
    } else if (bikeInCart?.quantity > 1) {
      setMessage(
        `"${bike?.name}" has been updated in your cart. Quantity: ${bikeInCart.quantity}`,
      );
      setVisible(true);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(bike));
  };

  const renderFlashMessage = () => {
    return (
      <components.FlashMessage
        type={'error'}
        visible={visible}
        setVisible={setVisible}
        message={message}
      />
    );
  };

  const renderHeader = () => {
    return <components.Header showGoBack={true} showBasket={true} />;
  };

  const renderCarousel = () => {
    return <components.BikeCarousel images={bike?.images} />;
  };

  const renderNameAndBTN = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h3>{bike?.name}</h3>
          <button
            onClick={() => {
              if (bike) {
                dispatch(wishlistActions.addToWishlist(bike));
              }
            }}
          >
            <svg.AddToWLBigSvg
              fillColor={
                isInWishlist ? 'var(--main-orange-color)' : 'var(--white-color)'
              }
              strokeColor={
                isInWishlist ? 'var(--main-orange-color)' : 'var(--text-color)'
              }
            />
          </button>
        </div>
      </section>
    );
  };

  const renderRating = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 5}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 4}}>
          <svg.RatingStarsSvg rating={3} />
          <span
            className="t12"
            style={{color: 'var(--text-color)', marginBottom: 1}}
          >
            ({bike.name.length})
          </span>
        </div>
      </section>
    );
  };

  const renderPriceWithCounter = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 35}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{fontSize: 20, fontWeight: 600, lineHeight: 1.5}}>
            ${bike.price.toLocaleString()}
          </span>
          <components.Counter
            bike={bike}
            plusBtnClicked={() => {
              handleAddToCart();
            }}
            minusBtnClicked={() => {
              handleRemoveFromCart();
            }}
          />
        </div>
      </section>
    );
  };

  const renderColors = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 34}}>
        <ul style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
          {bike.colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{
                  display: 'flex',
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  backgroundColor: color.code,
                  marginRight: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  setSelectedColor(color.code);
                }}
              >
                {selectedColor === color.code && (
                  <svg.CheckSvg color={'white'} />
                )}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderReviews = () => {
    return (
      <section style={{marginBottom: 14}}>
        <components.BlockHeading
          title="Reviews (23)"
          viewAllOnClick={() => {
            navigate(constants.routes.REVIEWS);
          }}
          containerStyle={{marginBottom: 18}}
        />
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {reviews.map((review) => {
            return <items.ReviewItem review={review} key={review.id} />;
          })}
        </ul>
      </section>
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
          backgroundColor: '#F3F3F3',
          paddingTop: 20,
          paddingBottom: 20,
          maxWidth: 'var(--screen-width)',
          margin: '0 auto',
        }}
      >
        <components.Button
          title="+ Add to cart"
          onClick={() => {
            handleAddToCart();
          }}
        />
      </section>
    );
  };

  const renderDescription = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20, marginBottom: 30}}>
        <h5 style={{marginBottom: 14}}>Description</h5>
        <p
          className="t16"
          style={{color: 'var(--text-color)', marginBottom: 20}}
        >
          {bike.description}
        </p>
        <button
          onClick={() => {
            navigate(constants.routes.DESCRIPTION, {
              state: {bikeId: bike.id},
            });
          }}
        >
          <svg.ReadMoreSvg />
        </button>
      </section>
    );
  };

  const renderLeaveReviewBtn = () => {
    return (
      <section style={{paddingLeft: 20, paddingRight: 20}}>
        <components.Button
          title="Leave a Review"
          colorScheme="secondary"
          onClick={() => {
            navigate(constants.routes.LEAVE_A_REVIEW);
          }}
        />
      </section>
    );
  };

  const renderContent = () => {
    return (
      <main
        style={{
          overflowY: 'auto',
          paddingTop: 'calc(var(--header-height) + 17px)',
          paddingBottom: 90,
        }}
      >
        {renderCarousel()}
        {renderNameAndBTN()}
        {renderRating()}
        {renderPriceWithCounter()}
        {renderColors()}
        {renderDescription()}
        {renderReviews()}
        {renderLeaveReviewBtn()}
      </main>
    );
  };

  if (loading) return <components.Loader />;

  return (
    <components.MotionWrapper>
      <components.SafeAreaView>
        {renderHeader()}
        {renderContent()}
        {renderButton()}
        {renderFlashMessage()}
      </components.SafeAreaView>
    </components.MotionWrapper>
  );
};
