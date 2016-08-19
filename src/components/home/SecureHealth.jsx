/* Node modules */
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import radium from 'radium';
import { FormattedHTMLMessage } from 'react-intl';

/* Components */
import photoFille from '../../../assets/images/plante.jpg';

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
  secureHealthBackgroundMobile: {
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
    height: '300px',

  },

  title: {
    marginTop: 0,
    height: '100%',
    textAlign: 'center',
  },
  titleMobile: {
    marginTop: 40,
    height: '100%',
    textAlign: 'center',
  },

  text: {
    fontSize: '16px',
    textAlign: 'justify',
    margin: 'auto',
  },

  textMobile: {
    fontSize: '18px',
    margin: 'auto',
    textAlign: 'justify',
    padding: '20',
  },

  transbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '30px',
    paddingTop: '30px',
  },

  lineBefore: {
    display: 'block',
    content: '',
    height: '30px',
    borderStyle: 'solid',
    borderColor: '#8c8b8b',
    borderWidth: '0 0 1px 0',
    borderRadius: '20px',
    width: '95%',
    margin: '31px auto 0 auto',
  },

  lineAfter: {
    height: '30px',
    borderStyle: 'solid',
    borderColor: '#8c8b8b',
    borderWidth: '1px 0 0 0',
    borderRadius: '20px',
    width: '95%',
    margin: '0 auto',
  },
};
@radium
export default class SecureHealth extends Component {
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
        <Row style={style.secureHealthBackground}>
          <FormattedHTMLMessage id="home.secureHealth.title" />
          <br />
          <Col xs={5} style={style.transbox}>
            <div style={style.text}>
              <FormattedHTMLMessage id="home.secureHealth.text" />
            </div>
          </Col>
        </Row>
      );
    }
    return (
      <div>
        <Row style={style.secureHealthBackgroundMobile} />
        <Row style={style.titleMobile}>
          <FormattedHTMLMessage id="home.secureHealth.title" />
          <div style={style.textMobile}>
            <FormattedHTMLMessage id="home.secureHealth.text" />
          </div>
        </Row>
        <div style={style.lineBefore} />
        <div style={style.lineAfter} />
      </div>
    );
  }
}
