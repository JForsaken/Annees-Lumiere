/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Col, Row } from 'react-bootstrap';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { cloneDeep } from 'lodash';

/* Styles */
const style = {

  detailsContainer: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    background: '#f0f0f0',
  },

  singleDetailContainer: {
    display: 'inline-block',
    '@media (min-width: 300px)': {
      width: '100%',
    },
    '@media (min-width: 800px)': {
      width: '60%',
    },
  },

  content: {
    textAlign: 'left',
    '@media (min-width: 300px)': {
      marginRight: '7%',
      marginLeft: '7%',
      marginBottom: 30,
    },
    '@media (min-width: 800px)': {
      marginLeft: '0',
      marginRight: '0',
    },
  },

  contentHeader: {
    height: 190,
  },

  detailSticker: {
    background: 'white',
    marginBottom: 10,
    width: 100,
    height: 100,
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    paddingTop: 18,
    fontSize: 65,
  },

  line: {
    margin: '20px auto 20px auto',
    display: 'table',
    borderWidth: '0 0 1px',
    borderStyle: 'solid',
    borderColor: '#a8a8a8',
    '@media (min-width: 300px)': {
      width: '75%',
    },
    '@media (min-width: 800px)': {
      width: '100%',
    },
  },

};

@radium
export default class EducationalDetails extends Component {

  shouldComponentUpdate(nextProps) {
    return !!nextProps.boxNumber;
  }

  renderDetails(boxNumber) {
    const detailsQty = 3;
    const details = [];
    const detailSticker = cloneDeep(style.detailSticker);
    const fontIcons = [
      'fa fa-hand-peace-o',
      'fa fa-leanpub',
      'fa fa-cogs',
    ];

    detailSticker.color = this.props.color;
    detailSticker.boxShadow = `0 0 0 6px ${this.props.color}`;

    for (let i = 1; i <= detailsQty; i++) {
      details.push(
        <Col xs={12} md={4}>
          <div style={style.singleDetailContainer}>

            <div style={style.contentHeader}>
              <i style={detailSticker} className={fontIcons[i - 1]}> </i>
              <h3 style={style.contentTitle}>
                <FormattedMessage id={`home.educationalProgram.box${boxNumber}.sub${i}`} />
              </h3>
            </div>

            <div style={style.line} />
            <div style={style.content}>
              <FormattedHTMLMessage id={`home.educationalProgram.box${boxNumber}.text${i}`} />
            </div>
          </div>
        </Col>
      );
    }
    return details;
  }

  renderActivity() {
    const detailsQty = 5;
    const details = [];
    const detailSticker = cloneDeep(style.detailSticker);
    const fontIcons = [
      'fa fa-hand-peace-o',
      'fa fa-leanpub',
      'fa fa-cogs',
      'fa fa-cutlery',
      'fa fa-medkit',
    ];

    detailSticker.color = this.props.color;
    detailSticker.boxShadow = `0 0 0 6px ${this.props.color}`;

    for (let i = 1; i <= detailsQty; i++) {
      let tempReturn = (
        <Col xs={12} md={i <= 3 ? 4 : 6}>
          <div style={style.singleDetailContainer}>

            <div style={style.contentHeader}>
              <i style={detailSticker} className={fontIcons[i - 1]}> </i>
              <h3 style={style.contentTitle}>
                <FormattedMessage id={`home.educationalProgram.box6.sub${i}`} />
              </h3>
            </div>

            <div style={style.line} />
            <div style={style.content}>
              <FormattedHTMLMessage id={`home.educationalProgram.box6.text${i}`} />
            </div>
          </div>
        </Col>
      );

      tempReturn = i === 3 ? <Row>{tempReturn}</Row> : tempReturn;
      details.push(tempReturn);
    }
    return details;
  }

  render() {
    const { boxNumber } = this.props;
    if (!boxNumber) {
      return null;
    }
    if (boxNumber === 6) {
      return (
        <Row style={style.detailsContainer}>
          {this.renderActivity(boxNumber)}
        </Row>
      );
    }
    return (
      <Row style={style.detailsContainerSix}>
        {this.renderDetails(boxNumber)}
      </Row>
    );
  }
}
