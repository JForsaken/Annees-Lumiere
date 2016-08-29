/* Node modules */
import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import { Button, Panel } from 'react-bootstrap';
import { cloneDeep } from 'lodash';

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
  }
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
    boxStyle.background = id % 2 == 0 ? '#d3d3d3' : '#f7f7f7';

    return (
      <div style={boxStyle}>
        <h3>
          {`Reservation #${id}`} {replyIndicator}
        </h3>
        <h4>
          {emailAddress}
        </h4>
        <h4> Replied:
          <Button
              style={{ marginLeft: 5, fontSize: 18 }}
              bsStyle={replied ? 'success' : 'danger'}
              bsSize="small"
              onClick={this.handleReplyClick}
          >
            {String(replied)}
          </Button>
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
        </Panel>

        {this.renderKids()}

      </div>
    );
  }
}
