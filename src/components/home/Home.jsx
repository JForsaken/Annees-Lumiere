/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';


/* Components */
import Footer from '../common/Footer';
import ParallaxSplash from './ParallaxSplash';
import Mission from './Mission';
import HomeHeadline from './HomeHeadline';
import BusinessValues from './BusinessValues';
import SecureHealth from './SecureHealth';
import EducationalProgram from './EducationalProgram';

/* Styles */
const style = {
  content: {
    position: 'absolute',
    overflowX: 'hidden',
    width: '100%',
    zIndex: 10,
    background: 'white',
    '@media (min-width: 300px)': {
      top: '50%',
    },
    '@media (min-width: 800px)': {
      top: '100%',
    },
  },
};

@radium
export default class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxSplash />
        <div style={style.content}>
          <HomeHeadline />
          <Mission />
          <BusinessValues />
          <EducationalProgram />
          <SecureHealth />
          <Footer />
        </div>

      </div>
    );
  }
}
