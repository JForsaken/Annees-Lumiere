import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { fetchOnUpdate } from '../../decorators';
import { isEmpty } from 'lodash';

class ReservationForm extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    samfish: PropTypes.object,
  };

  renderModal() {
    const closed = isEmpty(this.props.samfish.reservation.info);

    if (closed) { return null; }
    return (
      <div className="static-modal">
        couille
      </div>
    );
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.props.actions.postReservation}
        >
          Mocked Reservation
        </Button>
        {this.renderModal()}
      </div>
    );
  }
}

export default fetchOnUpdate([], (params, actions) => {
  actions.fetchLanguages();
})(ReservationForm);
