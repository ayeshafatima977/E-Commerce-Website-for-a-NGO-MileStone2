import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import combinedReducer from './reducers';
import Banner from './components/Banner';


const LayoutStore = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={LayoutStore}>
    <h1>Hello Scriptorce</h1>
   <Banner />
   </Provider>,
  document.getElementById('root')
);
