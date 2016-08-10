/* Node modules */
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import radium from 'radium';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

/* Components */
const RadiumLink = radium(Link);

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
    '@media (min-width: 320px)': {
      fontSize: '30px',
    },
    '@media (min-width: 800px)': {
      fontSize: '40px',
    },
  },

  mainText: {
    fontSize: '16px',
    marginTop: '-40px !important',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '3.5em',
    paddingBottom: '3.5em',
    paddingLeft: '2em',
    paddingRight: '2em',
    border: 'solid#7e7e7e',
    borderWidth: '0 2px',
    borderRadius: '1em',
    '@media (min-width: 320px)': {
      height: '100%',
    },
    '@media (min-width: 800px)': {
      height: '50%',
    },
  },

  inscriptionButton: {
    border: '2px solid#404040',
    padding: '.5em 1em',
    fontWeight: 700,
    fontSize: '20px',
    color: '#404040',
    backgroundColor: 'rgba(0,0,0,0)',
    textDecoration: 'none',
    borderRadius: '2px',
    ':hover': {
      cursor: 'pointer',
      border: '2px solid black',
      backgroundColor: 'black',
      color: 'white',
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
            <FormattedMessage id="home.mission.title" />
          </div>
          <div style={style.mainText}>
            <FormattedMessage id="home.mission.text" />
          </div>
        </Row>
        <Row style={style.buttonRow}>
          <RadiumLink style={style.inscriptionButton} to="/reservation">
            <FormattedMessage id="home.mission.button" />
          </RadiumLink>
        </Row>
      </div>
    );
  }
}
