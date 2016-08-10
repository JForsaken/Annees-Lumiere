/* Node modules */
import React, { Component } from 'react';

/* Components */
import FooterSocialMedia from './FooterSocialMedia';
import FooterContact from './FooterContact';
import FooterMap from './FooterMap';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <FooterContact />
        <FooterMap />
        <FooterSocialMedia />
      </div>
    );
  }
}
