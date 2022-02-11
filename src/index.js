import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App";
import reportWebVitals from './reportWebVitals';
import "tachyons";

//these are the new syntax for React v18
//https://github.com/reactwg/react-18/discussions/5
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);

reportWebVitals();