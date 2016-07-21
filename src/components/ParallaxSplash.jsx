import React, { Component } from 'React';
import { Row, Col, Button } from 'react-bootstrap';
import Radium from 'radium';

import photoFille from '../../assets/images/petite_fille_v1.jpg';

@Radium
export default class ParallaxSplash extends Component {
  render() {
    return (
      <div style={style.splash}>
      </div>
    );
  }
}

const style = {
  splash: {
    backgroundImage: `url(${photoFille})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    zIndex: -10,
    overflow: 'hidden',
    width: '100%',
    height: 400,
    top: 0,
    left: 0,
    position: 'fixed',
  },
};
