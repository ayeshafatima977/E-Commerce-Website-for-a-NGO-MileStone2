import { combineReducers } from 'redux';
import PageNavigationReducer from './Page-Navigation';
import CartReducer from './Cart';
import BillingReducer from './BillingInfo';
import CreditReducer from './Credit-Card';
import BillingInfoReducer from './BillingInfo';
import CreditCardReducer from './Credit-Card';

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditInfo: CreditCardReducer
})

export default combineReducers( {
  PageNav: PageNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer
})