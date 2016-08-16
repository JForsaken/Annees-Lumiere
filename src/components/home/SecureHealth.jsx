/* Node modules */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';

/* Components */
import photoFille from '../../../assets/images/avion.jpg';

/* Styles */
const style = {

  secureHealthBackground: {
    backgroundImage: `url(${photoFille})`,
    textAlign: 'center',
    backgroundPosition: 'center 20%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '10px',
    paddingTop: '30px',
    paddingBottom: '100px',
    paddingRight: '30px',
    paddingLeft: '30px',
  },

  titleTop: {
    marginTop: 0,
    height: '100%',
    textDecoration: 'underline',
  },

  titleBottom: {
    marginTop: -15,
    height: '100%',
  },

  text: {
    fontSize: '16px',
    textAlign: 'justify',
    margin: 'auto',
  },

  transbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: '40px',
    paddingTop: '20px',
  },
};

@radium
export default class SecureHealth extends Component {
  render() {
    return (
      <Row style={style.secureHealthBackground}>
        <h3 style={style.titleTop}>
          <FormattedMessage id="home.secureHealth.titleTop" />
        </h3>
        <h1 style={style.titleBottom}>
          <FormattedMessage id="home.secureHealth.titleBottom" />
        </h1>
        <Col xs={12} md={6} style={style.transbox}>
          <div style={style.text}>
            <FormattedMessage id="home.secureHealth.text" />
          </div>
        </Col>
      </Row>
    );
  }
}
