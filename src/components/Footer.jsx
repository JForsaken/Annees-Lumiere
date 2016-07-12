import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
            <FormattedMessage id="footer.title" />
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}
