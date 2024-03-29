import '../assets/stylesheets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root, { store } from './Root';
import { addLocaleData } from 'react-intl';
import fr from 'react-intl/lib/locale-data/fr';
import en from 'react-intl/lib/locale-data/en';

function start() {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
      , document.getElementById('app'));
}

addLocaleData(fr);
addLocaleData(en);

// All modern browsers, except `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl) {
  require.ensure(['intl'], require => {
    require('intl').default; // eslint-disable-line no-unused-expressions
    start();
  }, 'IntlBundle');
} else {
  start();
}
