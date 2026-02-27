import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import config from '@config';
import './index.css';

/* Apply theme and language from blog.config.js */
document.documentElement.dataset.theme = config.theme || 'light';
document.documentElement.lang = config.lang || 'en';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
