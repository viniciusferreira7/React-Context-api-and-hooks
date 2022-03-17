import React from 'react';

import ReactDOM from 'react-dom';
import { CounterContextProvider } from './context/CounterContext';

import './index.css';

import App from './templetes/Home/App';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
