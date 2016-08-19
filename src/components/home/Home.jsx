/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import Scroll from 'react-scroll';
import { isEqual } from 'lodash';
const scroller = Scroll.scroller;

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
      top: '100%',
    },
    '@media (min-width: 800px)': {
      top: '100%',
    },
  },
};

@radium
export default class Home extends Component {

  componentWillUpdate(nextProps) {
    if (!isEqual(this.props.location.query, nextProps.location.query)) {
      const { scroll } = nextProps.location.query;

      if (scroll) {
        scroller.scrollTo(scroll, {
          duration: 1000,
          delay: 100,
          offset: -30,
          smooth: true,
        });
      }
    }
  }

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
