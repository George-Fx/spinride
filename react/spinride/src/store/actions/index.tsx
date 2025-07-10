import {setScreen} from '../slices/tabSlice';
import {addToWishlist} from '../slices/wishlistSlice';
import {removeFromWishlist} from '../slices/wishlistSlice';
import {setPhoneVerified} from '../slices/verificationSlice';
import {setEmailVerified} from '../slices/verificationSlice';

export const actions = {
  setScreen,
  resetFilters,
  addToWishlist,
  setFirstLaunch,
  setSelectedTags,
  setPhoneVerified,
  setEmailVerified,
  setSelectedSizes,
  setSelectedColors,
  removeFromWishlist,
  setSelectedCategories,
};
