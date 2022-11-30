import React from 'react';
import ReactDOM from 'react-dom';

import { App, GlobalStyles } from './components';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
