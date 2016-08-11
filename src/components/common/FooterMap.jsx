/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

/* Styles */
const style = {

  footerMapContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    background: '#f0f0f0',
  },

  title: {
    textDecoration: 'none',
    fontSize: 60,
    fontWeight: 0,
    color: '#404040',
  },

  mapRow: {
    paddingTop: 20,
  },

  line: {
    margin: '0 auto',
    display: 'table',
    borderWidth: '0 0 1px',
    borderStyle: 'solid',
    borderColor: '#a8a8a8',
    width: 50,
  },

};

@radium
export default class FooterContact extends Component {
  render() {
    return (
      <div style={style.footerMapContainer}>
        <Row>
          <h2 style={style.title}>
            <FormattedMessage id="footer.map.location" />
          </h2>
        </Row>

        <Row style={style.mapRow}>
          <a href="https://goo.gl/maps/qQQJeEpDraU2" target="_blank" key="maps">
            <img src="https://static.viget.com/offices/_450x450_crop_center-center/contact-hq.jpg?mtime=20160301153453" alt="" />
          </a>
        </Row>

        <Row>
          <h2>
            Années-Lumière
          </h2>
          <div style={style.line}>
          </div>
        </Row>

        <Row style={style.mapRow}>
          <h5>
            5311 Chemin de la Cote Saint-Luc
          </h5>
          <h5>
            Montreal, Qc, Canada
          </h5>
        </Row>
      </div>
    );
  }
}
