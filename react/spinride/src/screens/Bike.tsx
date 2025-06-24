import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import React, {useState, useEffect, use} from 'react';

import {atoms} from '../atoms';
import {items} from '../items';
import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {constants} from '../constants';
import {components} from '../components';
import {wishlistAtom} from '../atoms/wishlist.atom';
import {addToWishlistAtom} from '../atoms/wishlist.atom';

export const Bike: React.FC = () => {
  const {location} = hooks.useRouter();
  const {bikeId} = location.state || {bikeId: null};
  const {bike} = hooks.useGetBike(bikeId);
  const {reviews} = hooks.useGetReviews();
  const cart = useAtomValue(atoms.cartAtom);
  const bikeInCart = cart.list.find((item) => item.id === bikeId);

  const {navigate} = hooks.useRouter();

  const [wishlist] = useAtom(wishlistAtom);
  const [, addToWishlist] = useAtom(addToWishlistAtom);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>('');
  const addToCart = useSetAtom(atoms.addToCartAtom);
  const removeFromCart = useSetAtom(atoms.removeFromCartAtom);

  // useEffect(() => {
  //   if (!bikeInCart?.quantity) return;
  //   if (bikeInCart?.quantity === 1) {
  //     setMessage(`"${bike?.name}" has been added to your cart.`);
  //     setVisible(true);
  //   } else if (bikeInCart?.quantity > 1) {
  //     setMessage(
  //       `"${bike?.name}" has been updated in your cart. Quantity: ${bikeInCart.quantity}`,
  //     );
  //     setVisible(true);
  //   } else {
  //     setMessage(`"${bike?.name}" has been removed from your cart.`);
  //     setVisible(true);
  //   }
  // }, [bikeInCart?.quantity]);

  if (!bike) return null;
  const isInWishlist = wishlist.list.some((item) => item.id === bike.id);

  const handleAddToCart = () => {
    addToCart(bike);
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
    removeFromCart(bike);
    // if (!bikeInCart?.quantity) return;
    // if (bikeInCart?.quantity === 0) {
    //   setMessage(`"${bike?.name}" has been removed from your cart.`);
    //   setVisible(true);
    // } else if (bikeInCart?.quantity > 0) {
    //   setMessage(
    //     `"${bike?.name}" has been updated in your cart. Quantity: ${bikeInCart.quantity}`,
    //   );
    //   setVisible(true);
    // }
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
                addToWishlist(bike);
                setVisible(true);
                setMessage(
                  isInWishlist
                    ? `"${bike.name}" has been removed from your wishlist.`
                    : `"${bike.name}" has been added to your wishlist.`,
                );
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
          backgroundColor: 'var(--anti-flash-white)',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <components.Button
          title="+ Add to cart"
          onClick={() => {
            handleAddToCart();
            // addToCart(bike);
            // if (!bikeInCart?.quantity) return;
            // if (bikeInCart?.quantity === 1) {
            //   setMessage(`"${bike?.name}" has been added to your cart.`);
            //   setVisible(true);
            // } else if (bikeInCart?.quantity > 1) {
            //   setMessage(
            //     `"${bike?.name}" has been updated in your cart. Quantity: ${bikeInCart.quantity}`,
            //   );
            //   setVisible(true);
            // }

            // else if (bikeInCart?.quantity === 0) {
            //   setMessage(`"${bike?.name}" has been removed from your cart.`);
            //   setVisible(true);
            // }
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
        {renderDescription()}
        {renderReviews()}
        {renderLeaveReviewBtn()}
      </main>
    );
  };

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
