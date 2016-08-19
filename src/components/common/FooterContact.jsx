/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

/* Components */
import StyledButton from '../common/StyledButton';

/* Constants */
import {
  CONTACT_SCROLL,
} from './scrollConstants';

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
class FooterContact extends Component {
  render() {
    const currentPage = this.props.router.location.pathname;
    const isReservationPage = currentPage.includes('reservation');

    return (
      <Element name={CONTACT_SCROLL}>
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
            {!isReservationPage && <StyledButton
              textId="home.mission.button"
              link="/reservation"
            />
            }
          </Row>
        </div>

      </Element>
    );
  }
}

export default connect(
  ({ router }) => ({ router })
)(FooterContact);

