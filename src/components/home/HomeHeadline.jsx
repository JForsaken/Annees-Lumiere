/* Node modules */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';

/* Components */
import photoFille from '../../../assets/images/terreReverse.jpg';

/* Styles */
const style = {

  homeHeadlineBackground: {
    backgroundImage: `url(${photoFille})`,
    textAlign: 'center',
    backgroundPosition: 'center 20%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '10px',
    paddingTop: '10%',
    paddingBottom: '10%',
    paddingRight: '30px',
    paddingLeft: '30px',
  },

  title: {
    marginTop: 0,
    height: '100%',
    fontWeight: 700,
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
export default class HomeHeadline extends Component {
  render() {
    return (
      <Row style={style.homeHeadlineBackground}>
        <Col xs={12} md={6} />
        <Col xs={12} md={6} style={style.transbox}>
          <h3 style={style.title}>
            <FormattedMessage id="home.homeHeadline.title" />
          </h3>
          <div style={style.text}>
            <FormattedMessage id="home.homeHeadline.text" />
          </div>
        </Col>
      </Row>
    );
  }
}
