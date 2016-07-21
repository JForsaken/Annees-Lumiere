/* eslint-disable max-len*/
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Radium from 'radium';
import Footer from '../Footer';
import ParallaxSplash from '../ParallaxSplash';

@Radium
export default class Home extends React.Component {

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

const style = {
  content: {
    position: 'absolute',
    top: '400',
    width: '100%',
    zIndex: 10,
    background: 'white',
  },
};
