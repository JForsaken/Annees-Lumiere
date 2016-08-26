/* Node modules */
import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import { Button, Panel } from 'react-bootstrap';

/* Styles */
const style = {

  container: {
    borderRadius: 10,
    background: '#f0f0f0',
    padding: 20,
    margin: '20px auto 0 auto',
    '@media (min-width: 300px)': {
      width: '95%',
    },
    '@media (min-width: 800px)': {
      width: '75%',
    },
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
  }

  handleReplyClick() {
    const { id, replied } = this.props.reservation;
    const { username } = this.props.samfish.login.user;

    this.props.actions.replyReservationPending();
    this.props.actions.replyReservation(id, username, !replied);
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
            <b>Birthday:</b> {k.birthday}
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
    } = this.props.reservation;

    return (
      <div style={style.container}>
        <h3>
          {`Reservation #${id}`}
        </h3>
        <h4>
          {emailAddress}
        </h4>
        <Panel header={`${firstname} ${lastname}`} bsStyle="primary">
          <p>
            <b>Address:</b> {address}
          </p>
          <p>
            <b>Phone:</b> {primaryPhoneNumber}
          </p>
          {optionalPhoneNumber &&
            <p>
              <b>Optional phone:</b> {optionalPhoneNumber}
            </p>}
          <p>
            <b>Language:</b> {language}
          </p>
          <p>
            <b>Profession:</b> {profession}
          </p>
          <p>
            <b>Replied:</b>
            <Button
              style={{ marginLeft: 5 }}
              bsStyle="info"
              bsSize="xsmall"
              onClick={this.handleReplyClick}
            >
              {String(replied)}
            </Button>
          </p>
        </Panel>

        {this.renderKids()}

      </div>
    );
  }
}
