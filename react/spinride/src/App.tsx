import {AnimatePresence} from 'framer-motion';
import {useLocation, Routes, Route} from 'react-router-dom';

import {screens} from './screens';
import {constants} from './constants';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path={constants.routes.SIGN_IN} element={<screens.SignIn />} />
        <Route path={constants.routes.HOME} element={<screens.Home />} />
        <Route
          path={constants.routes.CATEGORIES}
          element={<screens.Categories />}
        />
        <Route
          path={constants.routes.SHIPPING_AND_PAYMENT_INFO}
          element={<screens.ShippingAndPaymentInfo />}
        />
        <Route path={constants.routes.SIGN_OUT} element={<screens.SignOut />} />
        <Route
          path={constants.routes.ORDER_FAILED}
          element={<screens.OrderFailed />}
        />
        <Route
          path={constants.routes.CHECKOUT}
          element={<screens.Checkout />}
        />
        <Route
          path={constants.routes.ORDER_HISTORY_EMPTY}
          element={<screens.OrderHistoryEmpty />}
        />
        <Route path={constants.routes.BIKE} element={<screens.Bike />} />
        <Route
          path={constants.routes.ORDER_SUCCESSFUL}
          element={<screens.OrderSuccessful />}
        />
        <Route path={constants.routes.REVIEWS} element={<screens.Reviews />} />
        <Route
          path={constants.routes.DESCRIPTION}
          element={<screens.Description />}
        />
        <Route
          path={constants.routes.CART_EMPTY}
          element={<screens.CartEmpty />}
        />
        <Route path={constants.routes.SHOP} element={<screens.Shop />} />
        <Route
          path={constants.routes.INFO_SAVED}
          element={<screens.InfoSaved />}
        />
        <Route
          path={constants.routes.WISHLIST_EMPTY}
          element={<screens.WishlistEmpty />}
        />
        <Route
          path={constants.routes.EMAIL_HAS_BEEN_VERIFIED}
          element={<screens.EmailHasBeenVerified />}
        />
        <Route
          path={constants.routes.PHONE_NUMBER_HAS_BEEN_VERIFIED}
          element={<screens.PhoneNumberHasBeenVerified />}
        />
        <Route
          path={constants.routes.ORDER_FAILED}
          element={<screens.OrderFailed />}
        />
        <Route
          path={constants.routes.FORGOT_PASSWORD}
          element={<screens.ForgotPassword />}
        />
        <Route path={constants.routes.SIGN_UP} element={<screens.SignUp />} />
        <Route
          path={constants.routes.VERIFY_YOUR_PHONE_NUMBER}
          element={<screens.VerifyYourPhoneNumber />}
        />
        <Route
          path={constants.routes.VERIFICATION}
          element={<screens.Verification />}
        />
        <Route
          path={constants.routes.SIGN_UP_ACCOUNT_CREATED}
          element={<screens.SignUpAccountCreated />}
        />
        <Route
          path={constants.routes.NEW_PASSWORD}
          element={<screens.NewPassword />}
        />
        <Route
          path={constants.routes.FORGOT_PASSWORD_SENT_EMAIL}
          element={<screens.ForgotPasswordSentEmail />}
        />
        <Route path={constants.routes.FILTER} element={<screens.Filter />} />
        <Route path={constants.routes.PROFILE} element={<screens.Profile />} />
        <Route
          path={constants.routes.LEAVE_A_REVIEW}
          element={<screens.LeaveAReview />}
        />
        <Route
          path={constants.routes.MY_PROMOCODES_EMPTY}
          element={<screens.MyPromocodesEmpty />}
        />
        <Route
          path={constants.routes.VERIFY_YOUR_EMAIL}
          element={<screens.VerifyYourEmail />}
        />
        <Route
          path={constants.routes.ORDER_HISTORY}
          element={<screens.OrderHistory />}
        />
        <Route
          path={constants.routes.EDIT_PROFILE}
          element={<screens.EditProfile />}
        />
        <Route
          path={constants.routes.MY_PROMOCODES}
          element={<screens.MyPromocodes />}
        />
        <Route path={constants.routes.ORDER} element={<screens.Order />} />
        <Route
          path={constants.routes.WISHLIST}
          element={<screens.Wishlist />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
