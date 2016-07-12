/* eslint-disable max-len*/
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>
            <FormattedMessage id="home.welcome" />
          </h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage id="home.intro1" />
          </p>
          <p>
            <FormattedMessage id="home.intro2" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
        </div>
      </div>
    );
  }
}
