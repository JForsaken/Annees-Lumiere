/* eslint-disable max-len*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
let pomme = require('../../../assets/images/pomme.jpg');

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <img src={pomme} />
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
