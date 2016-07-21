/* eslint-disable max-len*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Parallax } from 'react-parallax';

const pomme = require('../../../assets/images/pomme.jpg');

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <img src={pomme} />
        <Parallax bgImage="assets/petite_fille_v1.jpg" strength={50}>
          <br />
          <h1> some content that is displayed above the bgImage </h1>
        </Parallax>
        <div className="header">
          <h1>
            <FormattedMessage id="home.welcome" />
          </h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage id="home.intro1" />
          </p>
          <p>
            <FormattedMessage id="home.intro2" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
        </div>
      </div>
    );
  }
}
