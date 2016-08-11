/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';

/* Components */
import StyledButton from '../common/StyledButton';

/* Styles */
const style = {

  footerContactContainer: {
    textAlign: 'center',
    paddingBottom: 60,
    paddingTop: 60,
  },

  emailLink: {
    borderBottom: '1px dotted #848484',
    textDecoration: 'none',
    ':hover': {
      cursor: 'pointer',
      borderBottom: '1px dotted #1395ba',
      color: '#1395ba',
    },
  },

  inscriptionButtonRow: {
    paddingTop: 25,
  },

};

@radium
export default class FooterContact extends Component {
  render() {
    return (
      <div style={style.footerContactContainer}>
        <Row>
          <h1>
            514-293-6244
          </h1>
        </Row>

        <Row>
          <h3>
            <a
              style={style.emailLink}
              href="mailto:jbertrand@annees-lumiere.com"
              target="_top"
              key="joanieBertrand"
            >
              jbertrand@annees-lumiere.com
            </a>
          </h3>
        </Row>

        <Row style={style.inscriptionButtonRow}>
          <StyledButton textId="home.mission.button" link="/reservation" />
        </Row>
      </div>
    );
  }
}
