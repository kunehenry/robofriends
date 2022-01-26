import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1> Hello World </h1>
    <App />
    {/* <App /> this is where we're updating the app*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//index.js and app.js is the main thing that allow us to build components and build this react app.

//reportWebVitals.js and setupTests.js is not really important. These are just configuration files that are nice things to have. But they don't really help us build the