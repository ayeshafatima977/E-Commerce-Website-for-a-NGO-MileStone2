import { combineReducers } from 'redux';
import ShoppingNavigationReducer from './Shopping-navigation';
import CartReducer from './Cart';
import CreditCardReducer from './Credit-card';
import BillingInfoReducer from './Billing-info';

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditCardInfo: CreditCardReducer,
});

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer,
});

export default GlobalReducer;
