import { combineReducers } from 'redux';
import ShoppingNavigationReducer from './Shopping-navigation';
import CartReducer from './Cart';
import BillingReducer from './Billing-info';
import CreditReducer from './Credit-card';
import BillingInfoReducer from './Billing-info';
import CreditCardReducer from './Credit-card';

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditCardInfo: CreditCardReducer
})

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer
})

export default GlobalReducer;