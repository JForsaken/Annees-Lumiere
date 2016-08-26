/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Link } from 'react-router';
import { FormControl, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import { cloneDeep, isEmpty, forEach } from 'lodash';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Components */
import ReservationItem from './ReservationItem';
const RadiumRow = radium(Row);

/* Constants */
import { REPLY_RESERVATION } from '../../actions/constants';

/* Styles */
const style = {

  dashboardContainer: {
    textAlign: 'center',
    margin: '75px auto 0 auto',
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '75%',
    },
  },

  modal: {
    background: '#f4e9e9',
    borderTop: '11px solid #c12e2a',
    boxShadow: '#c12e2a 0px 0px 1px',
  },

  searchContainer: {
    margin: '0, auto',
    display: 'inline-block',
    padding: 8,
    background: '#2980b9',
    borderRadius: 5,
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '75%',
    },
  },

  spinnerContainer: {
    margin: '0, auto',
    display: 'inline-block',
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '75%',
    },

  },

};

@radium
class Dashboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSearchChanged = this.handleSearchChanged.bind(this);

    this.state = {
      isShowingModal: false,
      filter: '',
    };
  }

  componentDidMount() {
    this.props.actions.fetchReservationsPending();
    this.props.actions.fetchReservations();
  }

  componentWillUpdate(nextProps) {
    const { samfish } = this.props;
    if (samfish.reservations.lastAction !==
        nextProps.samfish.reservations.lastAction) {
      if (nextProps.samfish.reservations.errors) {
        this.setState({ isShowingModal: true });
      }
    } else if (samfish.repliedReservation.lastAction !==
               nextProps.samfish.repliedReservation.lastAction &&
               nextProps.samfish.repliedReservation.lastAction === REPLY_RESERVATION) {
      if (nextProps.samfish.repliedReservation.errors) {
        this.setState({ isShowingModal: true });
      } else {
        this.props.actions.fetchReservationsPending();
        this.props.actions.fetchReservations();
      }
    }
  }

  isSearchValidated(searchee, filter) {
    let isValid = false;

    if (!filter) {
      isValid = true;
    }

    const clone = cloneDeep(searchee);
    delete clone.kids;

    forEach(clone, o => {
      if (String(o).toLowerCase().indexOf(filter) >= 0) {
        isValid = true;
        return false;
      }
      return true;
    });

    forEach(searchee.kids, l => {
      forEach(l, o => {
        if (String(o).toLowerCase().indexOf(filter) >= 0) {
          isValid = true;
          return false;
        }
        return true;
      });
    });

    return isValid;
  }

  handleSearchChanged(evt) {
    this.setState({ filter: evt.target.value });
  }

  renderModal() {
    return (
      <ModalContainer onClose={this.handleModalClose}>
        <ModalDialog style={style.modal} onClose={this.handleModalClose}>
          <h2>
            Couldn't fetch the reservations.
          </h2>
          <h4>
            Looks like we have server issues, please try again later. :(
          </h4>
        </ModalDialog>
      </ModalContainer>
    );
  }

  renderReservations() {
    const { reservations } = this.props.samfish;
    const { filter } = this.state;
    if (isEmpty(reservations.response) || reservations.errors) {
      return null;
    }

    const renderedReservations = [];
    reservations.response.forEach((r, i) => {
      if (this.isSearchValidated(r, filter)) {
        renderedReservations.push(
          <ReservationItem
            reservation={r}
            key={i}
            actions={this.props.actions}
            samfish={this.props.samfish}
          />
        );
      }
    });

    return renderedReservations;
  }

  renderSpinner() {
    return (
      <div style={style.spinnerContainer} className="loader"></div>
    );
  }

  render() {
    return (
      <div style={style.dashboardContainer}>
        {this.state.isShowingModal && this.renderModal()}

        <h1>
          Dashboard
        </h1>

        <Row>
          <Link to="/logout">
            Click here to logout.
          </Link>
        </Row>

        <RadiumRow style={style.searchContainer}>
          <FormControl
            type="text"
            placeholder="Search..."
            onChange={this.handleSearchChanged}
          />
        </RadiumRow>

        {this.props.samfish.reservations.pending && this.renderSpinner()}
        {this.renderReservations()}

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
)(Dashboard);
