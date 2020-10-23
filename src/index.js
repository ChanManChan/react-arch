import React from 'react';
import { render } from 'react-dom';
import Boot from './Boot';
import { GlobalStyles } from './global-styles'
import 'normalize.css'

render(
  <>
    <GlobalStyles />
    <Boot />
  </>,
  document.getElementById('root')
);
