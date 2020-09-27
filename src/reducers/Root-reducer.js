import { combineReducers } from "redux";
import CartReducer from "./Cart";
import BillingInfoReducer from "./Billing-info";
import CreditCardReducer from "./Credit-Card";
import BrowsingHistoryReducer from "./Browsing-history";
import ShoppingNavigationReducer from "./Shopping-navigation"

const UserDataReducer = combineReducers({
  BillingInfo: BillingInfoReducer,
  CreditCardInfo: CreditCardReducer,
});

const GlobalReducer = combineReducers({
  ShopNav: ShoppingNavigationReducer,
  Cart: CartReducer,
  UserData: UserDataReducer,
  BrowsingHistory: BrowsingHistoryReducer,
});

export default GlobalReducer;
