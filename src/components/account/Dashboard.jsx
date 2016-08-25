/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Link } from 'react-router';

/* Styles */
const style = {
  dashboardContainer: {
    textAlign: 'center',
    margin: '75px auto 0 auto',
    width: '75%',
  },
};

@radium
export default class Dashboard extends Component {
  render() {
    return (
      <div style={style.dashboardContainer}>
        <h1>Dashboard</h1>
        <Link to="/logout">
          Click here to logout.
        </Link>
      </div>
    );
  }
}
