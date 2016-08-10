/* Node modules */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import radium from 'radium';

/* Components */
import Footer from '../common/Footer';
import ParallaxSplash from './ParallaxSplash';


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
          <div className="header">
            <h1>
              <FormattedMessage id="home.welcome" />
            </h1>
          </div>
          <p>
            <FormattedMessage id="home.intro1" />
          </p>
          <p>
            <FormattedMessage id="home.intro2" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <p>
            <FormattedMessage id="home.intro3" />
          </p>
          <Footer />
        </div>

      </div>
    );
  }
}
