import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './css/bootstrap.min.css';
import './css/master.css';
import './css/animate.min.css';
import './css/scroll.window.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
