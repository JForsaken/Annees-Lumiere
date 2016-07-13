import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { defineMessages, FormattedMessage } from 'react-intl';
import ReservationForm from '../reservation/ReservationForm';
import * as samfishActions from '../../actions/samfish';

const messages = defineMessages({
  subtitle: {
    id: 'reservations.subtitle',
    description: 'Subtitle of the page',
    defaultMessage: 'Reservation section.',
  },
});

class Reservation extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object,
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Reservations</h1>
          <FormattedMessage {...messages.subtitle}>
            {text => <h3>{text}</h3>}
          </FormattedMessage>
        </div>
        <ReservationForm {...this.props} />
      </div>
    );
  }
}


export default connect(
  ({ samfish }) => ({ samfish }),
  dispatch => ({
    actions: bindActionCreators({
      ...samfishActions,
    }, dispatch),
  })
)(Reservation);
