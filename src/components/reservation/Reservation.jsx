/* Node modules */
import React, { PropTypes } from 'react';
import radium from 'radium';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';

/* Components */
import ReservationForm from '../reservation/ReservationForm';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Styles */
const style = {
  page: {
    overflowX: 'hidden',
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
          <h1 style={{ textAlign: 'center' }}>
            <FormattedMessage id="form.title" />
          </h1>
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
