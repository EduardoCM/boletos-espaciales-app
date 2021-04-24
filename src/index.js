import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import RegistroBoletos from './componentes/RegistroBoletos';
import Boletos from './componentes/Boletos'
ReactDOM.render(
  <React.StrictMode>
    <RegistroBoletos />
    <Boletos/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
