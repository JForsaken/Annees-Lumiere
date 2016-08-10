/* Node modules */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import radium from 'radium';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

/* Components */
import photoFille from '../../../assets/images/lumiere.jpg';
const RadiumLink = radium(Link);

/* Styles */
const style = {
  splash: {
    backgroundImage: `url(${photoFille})`,
    textAlign: 'center',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    zIndex: -10,
    overflow: 'hidden',
    width: '100%',
    top: 50,
    left: 0,
    position: 'fixed',
    '@media (min-width: 320px)': {
      height: '50%',
    },
    '@media (min-width: 800px)': {
      height: '100%',
    },
  },
  content: {
    color: '#404040',
    position: 'relative',
    top: '40%',
    transform: 'translateY(-50%)',
  },
  subtitle: {
    margin: 0,
  },
  title: {
    marginTop: 0,
    marginBottom: 15,
    height: '100%',
    fontSize: '5vw',
    fontWeight: 700,
  },
  reservationButton: {
    border: '2px solid white',
    padding: '.5em 1em',
    fontWeight: 700,
    fontSize: '20px',
    color: 'white',
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
export default class ParallaxSplash extends Component {
  render() {
    return (
      <div style={style.splash}>
        <Row style={style.content}>
          <Col xs={6} sm={6} >
            <h3 style={style.subtitle}>
              <FormattedMessage id="website.subtitle" />
            </h3>
            <h1 className="splash" style={style.title}>
              <FormattedMessage id="website.title" />
            </h1>
            <RadiumLink style={style.reservationButton} to="/reservation">
              <FormattedMessage id="menu.reservation" />
            </RadiumLink>
          </Col>
        </Row>
      </div>
    );
  }
}
