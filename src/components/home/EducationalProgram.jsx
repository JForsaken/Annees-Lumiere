/* Node modules */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

/* Components */
const RadiumLink = radium(Link);

/* Styles */
const style = {

  educationalProgramBackground: {
    textAlign: 'center',
    fontSize: '30px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '20px',
    marginBottom: '10px',
    paddingRight: '0px',
    paddingLeft: '0px',
  },

  title: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20,
    height: '100%',
  },

  standardBox: {
    textAlign: 'center',
    height: '150px',
    width: '100%',
    display: 'table',
    padding: '10px',
    '@media (min-width: 300px)': {
      fontSize: '25px',
    },
    '@media (min-width: 800px)': {
      fontSize: '35px',
    },


  },

  boxTitle: {
    verticalAlign: 'middle',
    display: 'table-cell',
  },

  boxColumn: {
    padding: 0,
  },

  boxLink: {
    textDecoration: 'none',
    color: '#545454',
    ':hover': {
      cursor: 'pointer',
      color: 'white',
    },
  },

  box1: {
    backgroundColor: 'rgba(57, 195, 254, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(57, 195, 254, 0.8)',
    },
  },

  box2: {
    backgroundColor: 'rgba(238, 97, 255, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(238, 97, 255, 0.8)',
    },
  },

  box3: {
    backgroundColor: 'rgba(69, 104, 255, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(69, 104, 255, 0.8)',
    },
  },

  box4: {
    backgroundColor: 'rgba(255, 232, 96, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(255, 232, 96, 0.8)',
    },
  },

  box5: {
    backgroundColor: 'rgba(56, 241, 102, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(56, 241, 102, 0.8)',
    },
  },

  box6: {
    backgroundColor: 'rgba(232, 175, 179, 0.5)',
    ':hover': {
      backgroundColor: 'rgba(232, 175, 179, 0.8)',
    },
  },

};

@radium
export default class EducationalProgram extends Component {

  render() {
    return (
      <Row style={style.educationalProgramBackground}>
        <h1 style={style.title}>
          <FormattedMessage id="home.educationalProgram.title" />
        </h1>
        <Row>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box1 }} key="box1" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box1" />
                </div>
              </div>
            </RadiumLink>
          </Col>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box2 }} key="box2" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box2" />
                </div>
              </div>
            </RadiumLink>
          </Col>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box3 }} key="box3" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box3" />
                </div>
              </div>
            </RadiumLink>
          </Col>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box4 }} key="box4" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box4" />
                </div>
              </div>
            </RadiumLink>
          </Col>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box5 }} key="box5" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box5" />
                </div>
              </div>
            </RadiumLink>
          </Col>
          <Col style={style.boxColumn} xs={6} md={4}>
            <RadiumLink to="/reservation" style={style.boxLink}>
              <div style={{ ...style.standardBox, ...style.box6 }} key="box6" >
                <div style={style.boxTitle}>
                  <FormattedMessage id="home.educationalProgram.box6" />
                </div>
              </div>
            </RadiumLink>
          </Col>
        </Row>
      </Row>
    );
  }
}
