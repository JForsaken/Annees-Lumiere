/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

/* Components */
const RadiumLink = radium(Link);

/* Styles */
const style = {

  footerContactContainer: {
    textAlign: 'center',
    paddingBottom: 100,
  },

  phoneNumber: {
    textDecoration: 'none',
    fontSize: 60,
    fontWeight: 0,
    webkitFontSmoothing: 'antialiased',
    color: '#404040',
  },

  emailLink: {
    borderBottom: '1px dotted #848484',
    fontSize: 25,
    textDecoration: 'none',
    color: '#404040',
    fontWeight: 700,
    ':hover': {
      cursor: 'pointer',
      borderBottom: '1px dotted #1395ba',
      color: '#1395ba',
    },
  },

  inscriptionButtonRow: {
    paddingTop: 25,
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

};

@radium
export default class FooterContact extends Component {
  render() {
    return (
      <div style={style.footerContactContainer}>
        <Row>
          <h2 style={style.phoneNumber}>
            514-293-6244
          </h2>
        </Row>

        <Row>
          <a
            style={style.emailLink}
            href="mailto:jbertrand@annees-lumiere.com"
            target="_top"
            key="joanieBertrand"
          >
            jbertrand@annees-lumiere.com
          </a>
        </Row>

        <Row style={style.inscriptionButtonRow}>
          <RadiumLink style={style.inscriptionButton} to="/reservation">
            <FormattedMessage id="home.mission.button" />
          </RadiumLink>
        </Row>
      </div>
    );
  }
}
