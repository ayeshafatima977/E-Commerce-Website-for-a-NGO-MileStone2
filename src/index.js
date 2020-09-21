import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import PageNavigationReducer from './reducers/Page-Navigation';

const LayoutStore = createStore(
  PageNavigationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={LayoutStore}>
    <h1>Hello Scriptorce</h1>
   <> </>
   </Provider>,
  document.getElementById('root')
);
