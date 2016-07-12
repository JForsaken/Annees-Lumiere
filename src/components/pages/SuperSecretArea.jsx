import React from 'react';
import { FormattedMessage } from 'react-intl';
import { secure } from '../../decorators';

class SuperSecretArea extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>SuperSecretArea</h1>
        </div>
        <div className="content">
          <p><FormattedMessage id="superSecretArea.info" /></p>
        </div>
      </div>
    );
  }
}

export default secure('manage_account')(SuperSecretArea);
