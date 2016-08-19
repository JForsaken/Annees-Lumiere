/* Node modules */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedHTMLMessage } from 'react-intl';
import Scroll from 'react-scroll';
const Element = Scroll.Element;

/* Components */
import photoFille from '../../../assets/images/melonEauv2.jpg';

/* Constants */
import {
  ABOUT_SCROLL,
} from '../common/scrollConstants';

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
  homeHeadlineBackgroundMobile: {
    backgroundImage: `url(${photoFille})`,
    textAlign: 'center',
    backgroundPosition: 'center 20%',
    backgroundSize: 'cover',
    overflow: 'hidden',
    width: '100%',
    height: '300px',
  },

  text: {
    fontSize: '16px',
    margin: 'auto',
    textAlign: 'justify',
  },

  textMobile: {
    fontSize: '18px',
    margin: 'auto',
    textAlign: 'justify',
    padding: '20',
  },

  transbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    paddingTop: '20px',
  },
};

@radium
export default class HomeHeadline extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }
  render() {
    const width = this.state.windowWidth;
    if (width > 800) {
      return (
        <Element name={ABOUT_SCROLL}>
          <Row style={style.homeHeadlineBackground}>
            <Col xs={6} />
            <Col xs={6} style={style.transbox}>
              <div style={style.text}>
                <FormattedHTMLMessage id="home.homeHeadline.text" />
              </div>
            </Col>
          </Row>
        </Element>
      );
    }
    return (
      <Element name={ABOUT_SCROLL}>
        <div>
          <Row style={style.textMobile}>
            <FormattedHTMLMessage id="home.homeHeadline.text" />
          </Row>
          <div style={style.homeHeadlineBackgroundMobile} />
        </div>
      </Element>
    );
  }
}
