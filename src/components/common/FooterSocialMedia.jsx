/* Node modules */
import React, { Component } from 'react';
import radium from 'radium';
import { Row } from 'react-bootstrap';

const style = {

  socialMediaContainter: {
    textAlign: 'center',
    textAspangn: 'center',
    backgroundColor: '#303233',
    paddingTop: 40,
    paddingBottom: 40,
  },

  socialIcon: {
    paddingLeft: '30px',
    paddingRight: '30px',
    '@media (min-width: 300px)': {
      fontSize: '20px',
    },
    '@media (min-width: 800px)': {
      fontSize: '45px',
    },
  },

  socialLink: {
    textDecoration: 'none',
    color: '#9d9d9d',
    ':hover': {
      cursor: 'pointer',
      fontWeight: 700,
      color: 'white',
    },
  },

  copyright: {
    marginTop: 20,
    color: '#9d9d9d',
  },
};

@radium
export default class FooterSocialMedia extends Component {
  render() {
    return (
      <div style={style.socialMediaContainter}>
        <Row>
          <span style={style.socialIcon}>
            <a style={style.socialLink} href="https://facebook.com" key="facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </span>
          <span style={style.socialIcon}>
            <a style={style.socialLink} href="https://instagram.com" key="instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </span>
          <span style={style.socialIcon}>
            <a style={style.socialLink} href="https://www.instagram.com/viget/" key="linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
          <span style={style.socialIcon}>
            <a
              style={style.socialLink}
              href="mailto:jbertrand@annees-lumiere.com"
              target="_top"
              key="email"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </span>
        </Row>
        <Row style={style.copyright}>
          &copy; {new Date().getFullYear()} Années-Lumière
        </Row>
      </div>
    );
  }
}
