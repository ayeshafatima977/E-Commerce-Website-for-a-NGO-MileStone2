import { combineReducers } from 'redux';
import PageNavigationReducer from './Page-Navigation';
import CartReducer from './Cart';

export default combineReducers( {
  PageNavigationReducer,
  CartReducer
})