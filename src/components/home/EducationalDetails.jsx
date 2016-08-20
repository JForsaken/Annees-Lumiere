/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

/* Styles */
const style = {

 detailsContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    background: '#f0f0f0',
  },

};

@radium
export default class EducationalDetails extends Component {

  render() {
    return (
      <Row style={style.detailsContainer}>
        <Col xs={12} md={4}>
          AA
        </Col>
      </Row>
    );
  }
}
