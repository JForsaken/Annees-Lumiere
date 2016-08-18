/* Node modules */
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

/* Components */
import StyledButton from '../common/StyledButton';

/* Styles */
const style = {

  missionContainer: {
    textAlign: 'center',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    paddingLeft: '40px',
    paddingRight: '40px',
  },

  title: {
    color: '#404040',
    marginBottom: 15,
    height: '100%',
    fontSize: '40px',
    fontWeight: 700,
  },

  mainText: {
    fontSize: '16px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'justify',
    margin: '-40px auto auto auto',
    paddingTop: '3.5em',
    paddingBottom: '3.5em',
    paddingLeft: '2em',
    paddingRight: '2em',
    borderStyle: 'solid',
    borderColor: '#7e7e7e',
    borderWidth: '0 2px',
    borderRadius: '1em',
    '@media (min-width: 300px)': {
      height: '100%',
    },
    '@media (min-width: 800px)': {
      height: '50%',
    },
  },

  buttonRow: {
    paddingTop: '40px',
  },

};

@radium
export default class Mission extends Component {
  render() {
    return (
      <div style={style.missionContainer}>
        <Row>
          <div style={style.title}>
            <h2>
              <FormattedMessage id="home.mission.title" />
            </h2>
          </div>
          <div style={style.mainText}>
            <FormattedHTMLMessage id="home.mission.text" />
          </div>
        </Row>
        <Row style={style.buttonRow}>
          <StyledButton textId="home.mission.button" link="/reservation" />
        </Row>
      </div>
    );
  }
}
