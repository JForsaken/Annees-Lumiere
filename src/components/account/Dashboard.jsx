/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Link } from 'react-router';
import { FormControl, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';
import { cloneDeep, isEmpty, forEach } from 'lodash';
import { FormattedMessage, injectIntl } from 'react-intl';

/* Actions */
import * as samfishActions from '../../actions/samfish';

/* Components */
import ReservationItem from './ReservationItem';
const RadiumRow = radium(Row);

/* Constants */
import {
  REPLY_RESERVATION,
  DELETE_RESERVATION,
} from '../../actions/constants';

/* Styles */
const style = {

  dashboardContainer: {
    textAlign: 'center',
    margin: '75px auto 0 auto',
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '85%',
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
@injectIntl
class Dashboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleSearchChanged = this.handleSearchChanged.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

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
    } else if ((samfish.repliedReservation.lastAction !==
               nextProps.samfish.repliedReservation.lastAction &&
               nextProps.samfish.repliedReservation.errors &&
               nextProps.samfish.repliedReservation.lastAction === REPLY_RESERVATION) ||
               (samfish.deletedReservation.lastAction !==
               nextProps.samfish.deletedReservation.lastAction &&
               nextProps.samfish.deletedReservation.errors &&
               nextProps.samfish.deletedReservation.lastAction === DELETE_RESERVATION)) {
      this.setState({ isShowingModal: true });
    }
  }

  handleModalClose() {
    this.setState({ isShowingModal: false });
  }

  isSearchValidated(searchee, filter) {
    let isValid = false;

    if (!filter) {
      return true;
    }

    const clone = cloneDeep(searchee);
    delete clone.kids;

    // if starts with #, search only on ids
    if (filter[0] === '#' && /\d+/g.test(filter.substr(1, filter.length))) {
      return (String(searchee.id).indexOf(filter.substr(1, filter.length)) !== -1);
    }

    // parent attributes search
    if (!isValid) {
      forEach(clone, o => {
        if (String(o).toLowerCase().indexOf(filter) !== -1) {
          isValid = true;
          return false;
        }
        return true;
      });
    }

    // kids search
    if (!isValid) {
      forEach(searchee.kids, l => {
        forEach(l, o => {
          if (String(o).toLowerCase().indexOf(filter) !== -1) {
            isValid = true;
            return false;
          }
          return true;
        });
      });
    }

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
            <FormattedMessage id="dashboard.modal.title" />
          </h2>
          <h4>
            <FormattedMessage id="dashboard.modal.content" />
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
      if (this.isSearchValidated(r, filter) && !r.hidden) {
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
      <div style={style.spinnerContainer} className="loader" />
    );
  }

  render() {
    const { intl } = this.props;

    return (
      <RadiumRow style={style.dashboardContainer}>
        {this.state.isShowingModal && this.renderModal()}

        <h1>
          <FormattedMessage id="dashboard.title" />
        </h1>

        <Row>
          <Link to="/logout">
            <FormattedMessage id="dashboard.logout" />
          </Link>
        </Row>

        <RadiumRow style={style.searchContainer}>
          <FormControl
            type="text"
            placeholder={intl.messages['dashboard.search']}
            onChange={this.handleSearchChanged}
          />
        </RadiumRow>

        {this.props.samfish.reservations.pending && this.renderSpinner()}
        {this.renderReservations()}

      </RadiumRow>
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
