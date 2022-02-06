import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"; //building on big component father of CardList
import reportWebVitals from './reportWebVitals';
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();