import { combineReducers } from "redux";
import ShoppingNavigationReducer from "./Shopping-Navigation";
import CartReducer from "./Cart";
import BillingInfoReducer from "./Billing-info";
import CreditCardReducer from "./Credit-Card";

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
