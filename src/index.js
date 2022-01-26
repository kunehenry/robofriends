import React from 'react'; //is to import the React package that we need write React
import ReactDOM from 'react-dom'; //is to connect the React package to the DOM. The Document Object Model of our browser

//the reason they're separated into two is because react can be used with anything it doesn't have to be just for apps on the browser, it can be for mobile. That's what React Native is for, it could be for VR and virtual reality.
//So based on where you are using React, you need essentially two packages for the main React library and whatever the connector is.

import './index.css'; //that is where we add all our niceness, all our CSS for our app.
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* This is what we see on the screen, when we load the app. What we see on the screen is contained inside of this app component. */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
