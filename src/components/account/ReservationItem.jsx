/* Node modules */
import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import { Button, Panel } from 'react-bootstrap';
import { cloneDeep } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { ModalContainer, ModalDialog } from 'react-modal-dialog';

/* Styles */
const style = {

  container: {
    borderRadius: 10,
    padding: 20,
    margin: '20px auto 0 auto',
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '75%',
    },
  },

  replied: {
    color: '#5cb85c',
  },

  notReplied: {
    color: '#c9302c',
  },

  modal: {
    textAlign: 'center',
    background: '#f4e9e9',
    borderTop: '11px solid #c12e2a',
    boxShadow: '#c12e2a 0px 0px 1px',
  },

};

@radium
export default class ReservationItem extends Component {

  static propTypes = {
    reservation: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.handleReplyClick = this.handleReplyClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);

    this.state = { isShowingModal: false };
  }

  handleModalClose() {
    this.setState({ isShowingModal: false });
  }

  handleReplyClick() {
    const { id, replied } = this.props.reservation;
    const { username } = this.props.samfish.login.user;

    this.props.actions.replyReservationPending();
    this.props.actions.replyReservation(id, username, !replied);
  }

  handleDeleteClick() {
    this.setState({ isShowingModal: true });
  }

  handleConfirmDelete() {
    const { id } = this.props.reservation;
    const { username } = this.props.samfish.login.user;

    this.props.actions.deleteReservationPending();
    this.props.actions.deleteReservation(id, username);
  }

  renderModal() {
    return (
      <ModalContainer onClose={this.handleModalClose}>
        <ModalDialog style={style.modal} onClose={this.handleModalClose}>
          <h2>
            <FormattedMessage id="dashboard.modal.delete.title" />
          </h2>
          <h4>
            <FormattedMessage id="dashboard.modal.delete.content" />
          </h4>
          <Button
              style={{ width: '100%', fontSize: 18 }}
              bsStyle="danger"
              onClick={this.handleConfirmDelete}
          >
            <FormattedMessage id="dashboard.confirm" />
          </Button>

        </ModalDialog>
      </ModalContainer>
    );
  }

  renderKids() {
    const kids = this.props.reservation.kids;
    const renderedKids = [];

    kids.forEach((k, i) => {
      renderedKids.push(
        <Panel
          key={`kidPanel${i}`}
          header={`${k.firstname} ${k.lastname}`}
          bsStyle="success"
        >
          <p>
            <b>Birthday:</b> {k.birthday.substr(0, 10)}
          </p>
          <p>
            <b>Language:</b> {k.language}
          </p>
          <p>
            <b>Sex:</b> {k.sex}
          </p>
        </Panel>
      );
    });

    return renderedKids;
  }

  render() {
    const {
      id,
      firstname,
      lastname,
      address,
      emailAddress,
      primaryPhoneNumber,
      optionalPhoneNumber,
      language,
      profession,
      replied,
      hidden,
    } = this.props.reservation;

    const replyIndicator = replied ?
      <i
        className="fa fa-check"
        style={style.replied}
      /> :
      <i
        className="fa fa-times"
        style={style.notReplied}
      />;

    const boxStyle = cloneDeep(style.container);
    boxStyle.background = id % 2 === 0 ? '#d3d3d3' : '#f7f7f7';

    return (
      <div style={boxStyle}>
        {this.state.isShowingModal && this.renderModal()}

        <h3>
          <FormattedMessage id="menu.reservation" /> {`#${id}`} {replyIndicator}
        </h3>
        <h4>
          {emailAddress}
        </h4>
        <h4> <FormattedMessage id="form.replied" />:
          <Button
            style={{ marginLeft: 5, fontSize: 18 }}
            bsStyle={replied ? 'success' : 'danger'}
            bsSize="small"
            onClick={this.handleReplyClick}
          >
            <FormattedMessage id={`form.${replied ? 'yes' : 'no'}`} />
          </Button>
        </h4>
        <Panel header={`${firstname} ${lastname}`} bsStyle="primary">
          <p>
            <b><FormattedMessage id="form.address" />:</b> {address}
          </p>
          <p>
            <b><FormattedMessage id="form.primaryPhoneNumber" />:</b> {primaryPhoneNumber}
          </p>
          {optionalPhoneNumber &&
            <p>
              <b><FormattedMessage id="form.optionalPhoneNumber" />:</b> {optionalPhoneNumber}
            </p>}
          <p>
            <b><FormattedMessage id="form.language" />:</b> {language}
          </p>
          <p>
            <b><FormattedMessage id="form.profession" />:</b> {profession}
          </p>
        </Panel>

        {this.renderKids()}

        <Button
            style={{ width: '100%', fontSize: 18 }}
            bsStyle="danger"
            onClick={this.handleDeleteClick}
        >
          <FormattedMessage id="dashboard.delete" />
        </Button>

      </div>
    );
  }
}
