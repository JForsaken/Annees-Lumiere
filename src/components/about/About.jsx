import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class About extends React.Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1>
            <FormattedMessage id="about.title" />
          </h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage id="about.intro1" />
          </p>
        </div>
      </div>
    );
  }
}
