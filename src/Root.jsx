/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css';

import React, { PropTypes, Component } from 'react';
import { StyleRoot } from 'radium';
import { Redirect, Route } from 'react-router';
import DevTools from './components/common/DevTools';
import { ReduxRouter } from 'redux-router';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from './utils/configure-store';
import * as storage from './persistence/storage';
import * as components from './components';
import * as constants from './actions/constants';
import * as i18n from './i18n';

const {
  About,
  Account,
  AccountHome,
  Application,
  Home,
  Login,
  SuperSecretArea,
  Reservation,
} = components;

const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'fr',
    locales: [
      'fr',
      'en',
    ],
    user: { permissions: [/* 'manage_account'*/] },
  },
};

export const store = configureStore(initialState);

function logout(nextState, replaceState) {
  store.dispatch({ type: constants.LOG_OUT });
  replaceState({}, '/login');
}

function requireAuth(nextState, replaceState) {
  const state = store.getState();
  const isLoggedIn = Boolean(state.application.token);
  if (!isLoggedIn) {
    replaceState({
      nextPathname: nextState.location.pathname,
    }, '/login');
  }
}

function renderRoutes() {
  return (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Home} />
        <Redirect from="/account" to="/account/profile" />
        <Route path="about" component={About} />
        <Route path="account" component={Account} onEnter={requireAuth}>
          <Route path="profile" component={AccountHome} />
          <Route path="secret-area" component={SuperSecretArea} />
        </Route>
        <Route path="login" component={Login} />
        <Route path="logout" onEnter={logout} />
        <Route path="reservation" component={Reservation} />
      </Route>
    </ReduxRouter>
  );
}

function getRootChildren(props) {
  const intlData = {
    locale: props.application.locale,
    messages: i18n[props.application.locale],
  };
  const rootChildren = [
    <IntlProvider key="intl" {...intlData}>
      <StyleRoot>
        {renderRoutes()}
      </StyleRoot>
    </IntlProvider>,
  ];

  if (__DEVTOOLS__) {
    rootChildren.push(<DevTools key="devtools" />);
  }
  return rootChildren;
}

class Root extends Component {
  render() {
    return (
      <div>{getRootChildren(this.props)}</div>
    );
  }
}

Root.propTypes = {
  application: PropTypes.object.isRequired,
};

export default connect(({ application }) => ({ application }))(Root);
