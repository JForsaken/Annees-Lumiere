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

  title: {
    '@media (min-width: 300px)': {
      marginBottom: 30,
    },
    '@media (min-width: 800px)': {
      marginBottom: 0,
    },
  },

  singleValueContainer: {
    display: 'inline-block',
    '@media (min-width: 300px)': {
      width: 150,
      marginLeft: 0,
      marginRight: 0,
    },
    '@media (min-width: 800px)': {
      width: 100,
      marginLeft: 30,
      marginRight: 30,
    },
  },

  businessValueRow: {
    '@media (min-width: 300px)': {
      paddingBottom: 0,
      paddingTop: 0,
    },
    '@media (min-width: 800px)': {
      paddingBottom: 0,
      paddingTop: 20,
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
        <h1 style={style.title}>
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
