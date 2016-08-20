/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Collapsible from 'react-collapse';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

/* Components */
import EducationalDetails from './EducationalDetails';

/* Constants */
import {
  PROGRAMS_SCROLL,
} from '../common/scrollConstants';

/* Styles */
const style = {

  educationalProgramBackground: {
    textAlign: 'center',
    fontSize: '30px',
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
    fontWeight: '500',
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

  handleBoxClick(boxIndex) {
    const isOpened = this.state.lastClickedBox !== boxIndex;
    const clickedBox = !isOpened ? null : boxIndex;

    this.setState({
      lastClickedBox: clickedBox,
      isSectionOpened: isOpened,
    });
  }

  renderBoxes() {
    const boxQty = 6;
    const boxes = [];

    for (let i = 1; i <= boxQty; i++) {
      boxes.push(
        <Col style={style.boxColumn} xs={6} md={4} key={`cbox${i}`}>
          <a style={style.boxLink} onClick={() => this.handleBoxClick(i)} key={`abox${i}`}>
            <div style={{ ...style.standardBox, ...style[`box${i}`] }} key={`box${i}`} >
              <div style={style.boxTitle}>
                <FormattedMessage id={`home.educationalProgram.box${i}.title`} />
              </div>
            </div>
          </a>
        </Col>
      );
    }
    return boxes;
  }

  render() {
    const { lastClickedBox } = this.state;
    const styleColor = lastClickedBox ? style[`box${lastClickedBox}`][':hover'] : null;

    return (
      <Element name={PROGRAMS_SCROLL}>
        <Row style={style.educationalProgramBackground}>
          <h1 style={style.title}>
            <FormattedMessage id="home.educationalProgram.title" />
          </h1>
          <Row>
            {this.renderBoxes()}
          </Row>
        </Row>
        <Collapsible
          springConfig={{ stiffness: 200, damping: 30 }}
          isOpened={this.state.isSectionOpened}
        >
          <EducationalDetails
            boxNumber={lastClickedBox}
            color={styleColor ? styleColor.backgroundColor : 'white'}
          />
        </Collapsible>
      </Element>
    );
  }
}
