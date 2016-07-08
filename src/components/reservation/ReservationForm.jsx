import React, { PropTypes } from 'react';
import { fetchOnUpdate } from '../../decorators';

class ReservationForm extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    languages: PropTypes.object,
    reservation: PropTypes.object,
  };

  render () {
    console.log(this.props);

    return (
      <div>
        <span>TEST</span>
        <button className="pure-button" onClick={this.props.actions.postReservation}>Reserve</button>
      </div>
    );
  }
};

export default fetchOnUpdate([], (params, actions) => {
  actions.fetchLanguages();
})(ReservationForm);
