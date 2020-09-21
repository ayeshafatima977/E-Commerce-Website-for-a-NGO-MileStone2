import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


ReactDOM.render(
  <React.StrictMode>
     <Navigation />
     <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
