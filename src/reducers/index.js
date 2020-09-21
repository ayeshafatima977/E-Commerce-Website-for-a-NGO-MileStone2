import { combineReducers } from 'redux';
import PageNavigationReducer from './Page-Navigation';
import CartReducer from './Cart';
import BillingReducer from './Billing-Info';
import CreditReducer from './Credit-Card';
import BillingInfoReducer from './Billing-Info';
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