import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from 'twin.macro';
import 'tailwind.css';
import Home from 'layouts/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
