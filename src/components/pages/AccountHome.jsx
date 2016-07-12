import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

export default class AccountHome extends React.Component {
  render() {
    const logoutLink = (
      <Link to="/logout">
        <FormattedMessage id="logout" />
      </Link>
    );

    const secretAreaLink = (
      <Link to="/account/secret-area">
        <FormattedMessage id="account.home.link.superSecretArea" />
      </Link>);

    return (
      <div>
        <div className="header">
          <h1>Account</h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage id="account.home.intro" />
            <br />
            <FormattedMessage
              id="account.home.steps"
              values={{ logoutLink, secretAreaLink }}
            />
          </p>
        </div>
      </div>
    );
  }
}
