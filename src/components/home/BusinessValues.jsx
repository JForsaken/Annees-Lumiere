/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { FormattedMessage } from 'react-intl';

/* Styles */
const style = {

  businessValuesContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    background: '#f0f0f0',
  },

  singleValueContainer: {
    width: 100,
    '@media (min-width: 300px)': {
      display: 'table',
      margin: '30px auto 30px auto',
    },
    '@media (min-width: 800px)': {
      display: 'inline-block',
      marginLeft: 30,
      marginRight: 30,
    },
  },

  businessValueRow: {
    '@media (min-width: 300px)': {
      paddingBottom: 0,
    },
    '@media (min-width: 800px)': {
      paddingBottom: 0,
    },
  },

  businessValue: {
    color: '#404040',
    background: 'white',
    width: 100,
    height: 100,
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: 30,
    fontSize: 40,
  },

};

@radium
export default class BusinessValues extends Component {
  render() {
    return (
      <div style={style.businessValuesContainer}>
        <h1>
          <FormattedMessage id="home.businessValues.title" />
        </h1>
        <div style={style.businessValueRow}>
          <div style={style.singleValueContainer}>
            <i style={style.businessValue} className="fa fa-glass"> </i>
            <h4>
              <FormattedMessage id="home.businessValues.value1" />
            </h4>
          </div>
          <div style={style.singleValueContainer}>
            <i style={style.businessValue} className="fa fa-glass"> </i>
            <h4>
              <FormattedMessage id="home.businessValues.value2" />
            </h4>
          </div>
          <div style={style.singleValueContainer}>
            <i style={style.businessValue} className="fa fa-glass"> </i>
            <h4>
              <FormattedMessage id="home.businessValues.value3" />
            </h4>
          </div>
        </div>

        <div style={style.businessValueRow}>
          <div style={style.singleValueContainer}>
            <i style={style.businessValue} className="fa fa-glass"> </i>
            <h4>
              <FormattedMessage id="home.businessValues.value4" />
            </h4>
          </div>
          <div style={style.singleValueContainer}>
            <i style={style.businessValue} className="fa fa-glass"> </i>
            <h4>
              <FormattedMessage id="home.businessValues.value5" />
            </h4>
          </div>
        </div>

      </div>
    );
  }
}
