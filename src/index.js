import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationContextProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationContextProvider>
        <App />
      </ApplicationContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
