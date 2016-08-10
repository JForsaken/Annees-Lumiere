/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';


/* Components */
import Footer from '../common/Footer';
import ParallaxSplash from './ParallaxSplash';
import Mission from './Mission';

/* Styles */
const style = {
  content: {
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    background: 'white',
    '@media (min-width: 320px)': {
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
          <Mission />
          <Footer />
        </div>

      </div>
    );
  }
}
