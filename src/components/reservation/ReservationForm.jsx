import React, { PropTypes } from 'react';
import { fetchOnUpdate } from '../../decorators';
import { isEmpty } from 'lodash';

class ReservationForm extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    languages: PropTypes.object,
    reservation: PropTypes.object,
  };

  renderModal() {
    const closed = isEmpty(this.props.reservation.info);

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
        <span>TEST</span>
        <button
          className="pure-button"
          onClick={this.props.actions.postReservation}
        >
          Reserve
        </button>
        {this.renderModal()}
      </div>
    );
  }
}

export default fetchOnUpdate([], (params, actions) => {
  actions.fetchLanguages();
})(ReservationForm);
