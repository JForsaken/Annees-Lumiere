/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import photoFille from '../../../assets/images/map.jpg';


/* Styles */
const style = {

  footerMapContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    background: '#f0f0f0',
  },

  mapRow: {
    paddingTop: 20,
  },
  mapImg: {
    backgroundImage: `url(${photoFille})`,
    paddingTop: 20,
    height: '420px',
    width: '500px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
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
          <h1>
            <FormattedMessage id="footer.map.location" />
          </h1>
        </Row>

        <div style={style.mapImg} />

        <Row>
          <h2>
            Années-Lumière
          </h2>
          <div style={style.line} />
        </Row>
        <Row style={style.mapRow}>
          <h4>
            5311 Chemin de la Cote Saint-Luc
          </h4>
          <h4>
            Montreal, Qc, Canada
          </h4>
        </Row>
      </div>
    );
  }
}
