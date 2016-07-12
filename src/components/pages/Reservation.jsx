import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { defineMessages, FormattedMessage } from 'react-intl';
import ReservationForm from '../reservation/ReservationForm';
import * as languageActions from '../../actions/languages';
import * as reservationActions from '../../actions/reservation';

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
            {text => <h2>{text}</h2>}
          </FormattedMessage>
        </div>
        <ReservationForm {...this.props} />

        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { ...this.props })}
      </div>
    );
  }
}


export default connect(
  ({ languages, reservation }) => ({ languages, reservation }),
  dispatch => ({
    actions: bindActionCreators({
      ...languageActions,
      ...reservationActions,
    }, dispatch),
  })
)(Reservation);
