/* Node modules */
import React, { PropTypes } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Components */
import ReservationForm from '../reservation/ReservationForm';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Styles */
const style = {
  page: {
    paddingTop: 50,
    paddingRight: 35,
    paddingLeft: 35,
  },
};
@radium
class Reservation extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object,
  };

  render() {
    return (
      <div style={style.page}>
        <div>
          <h1>Reservations</h1>
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
