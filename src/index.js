import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello'; //import custom app Hello
import reportWebVitals from './reportWebVitals';
import "tachyons";

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();