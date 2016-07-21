import React, { PropTypes } from 'react';
import { Forbidden } from '../components';

export default function secure(scope) {
  return DecoratedComponent =>
    class SecureDecorator extends React.Component {
      static contextTypes = {
        store: PropTypes.any,
      };

      render() {
        const { store } = this.context;
        const { application: { user } } = store.getState();
        let componentToReturn = <Forbidden />;

        if (user.permissions.some(s => s === scope)) {
          componentToReturn = <DecoratedComponent {...this.props} />;
        }
        return componentToReturn;
      }
    };
}

