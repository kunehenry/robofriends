import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from "./CardList";
import reportWebVitals from './reportWebVitals';
import "tachyons";
import {robots} from "./robots";

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();