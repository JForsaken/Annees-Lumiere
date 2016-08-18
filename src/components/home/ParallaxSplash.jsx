/* Node modules */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';

/* Components */
import photoFille from '../../../assets/images/garcon_appuyer_reverse.jpg';
const RadiumRow = radium(Row);
import StyledButton from '../common/StyledButton';

/* Styles */
const style = {

  splash: {
    backgroundImage: `url(${photoFille})`,
    textAlign: 'center',
    backgroundPosition: '100% 60%',
    backgroundSize: 'cover',
    zIndex: -10,
    overflow: 'hidden',
    width: '100%',
    top: 50,
    left: 0,
    height: '100%',
    position: 'fixed',
  },

  content: {
    color: '#404040',
    position: 'relative',
    '@media (min-width: 300px)': {
      top: '10%',
    },
    '@media (min-width: 800px)': {
      top: '30%',
    },
  },

  subtitle: {
    margin: 0,
  },

  title: {
    marginTop: 0,
    marginBottom: 15,
    height: '100%',
  },

};

@radium
export default class ParallaxSplash extends Component {

  render() {
    return (
      <div style={style.splash}>
        <RadiumRow style={style.content}>
          <Col xs={12} sm={6} >
            <h3 style={style.subtitle}>
              <FormattedMessage id="website.subtitle" />
            </h3>
            <h1 className="splash" style={style.title}>
              <FormattedMessage id="website.title" />
            </h1>
            <StyledButton textId="home.mission.button" link="/reservation" />
          </Col>
        </RadiumRow>
      </div>
    );
  }
}
