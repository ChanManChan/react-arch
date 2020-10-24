import React from 'react';
import { render } from 'react-dom';
import 'normalize.css'

import Boot from './Boot';
import { GlobalStyles } from './global-styles'
import { firebaseInit } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

render(
  <FirebaseContext.Provider value={{ firebaseInit }}>
    <GlobalStyles />
    <Boot />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
