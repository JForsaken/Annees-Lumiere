/* Node modules */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import radium from 'radium';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/* Components */
import MenuListItem from './MenuListItem';
const RadiumLink = radium(Link);

/* Actions */
import * as applicationActions from '../../actions/application';

/* Constants */
import {
  CONTACT_SCROLL,
  ABOUT_SCROLL,
  PROGRAMS_SCROLL,
} from './scrollConstants';

/* Styles */
const style = {

  brandImage: {
    backgroundImage: 'url(https://placekitten.com/32)',
    position: 'fixed',
    height: 32,
    width: 32,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginTop: -6,
  },

  brandFontIcon: {
    fontSize: 20,
  },

  brandImageSpacer: {
    marginRight: 10,
    verticalAlign: 'middle',
    width: 32,
    height: 1,
    display: 'inline-block',
  },

  brandName: {
    color: '#545454',
    textDecoration: 'none',
    ':hover': {
      color: 'black',
    },
  },
};

const menuItems = [
  {
    text: <FormattedMessage id="menu.about" />,
    link: '/',
    query: { scroll: ABOUT_SCROLL },
    icon: 'fa fa-dot-circle-o',
  },
  {
    text: <FormattedMessage id="menu.programs" />,
    link: '/',
    query: { scroll: PROGRAMS_SCROLL },
    icon: 'fa fa-calendar-check-o',
  },
  {
    text: <FormattedMessage id="menu.contact" />,
    link: '/',
    query: { scroll: CONTACT_SCROLL },
    icon: 'fa fa-user',
  },
  {
    text: <FormattedMessage id="menu.reservation" />,
    link: '/reservation',
    icon: 'fa fa-pencil-square-o',
  },
  {
    text: <FormattedMessage id="menu.account" />,
    link: '/account',
    icon: 'fa fa-user',
  },
];

@radium
class Menu extends Component {

  static propTypes = {
    actions: PropTypes.object,
    activeClass: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.handleSwitchLocale = this.handleSwitchLocale.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = { expanded: false };
  }

  handleSwitchLocale() {
    const { application: { locales, locale } } = this.props;

    const langIndex = locales.indexOf(locale);
    const nextLocale = langIndex + 1 < locales.length ? langIndex + 1 : 0;

    this.props.actions.switchLocale(locales[nextLocale]);
  }

  toggleNav() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { application: { locale } } = this.props;
    const { expanded } = this.state;

    return (
      <Navbar inverse fixedTop expanded={expanded} onToggle={this.toggleNav}>
        <Navbar.Header>
          <Navbar.Brand>
            <div style={style.brandImage} />
            <div style={style.brandImageSpacer} />
            <RadiumLink to="/" style={style.brandName}>
              <FormattedMessage id="website.title" />
            </RadiumLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              menuItems.map((item, i) =>
                <MenuListItem
                  {...item}
                  key={i}
                    /* Constants */
                  import onClick={this.state.expanded ? this.toggleNav : null}
                />)
            }
          </Nav>
          <Nav pullRight>
            <NavItem onClick={this.handleSwitchLocale}>
              {locale.toUpperCase()}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default connect(
  ({ application }) => ({ application }),
  dispatch => ({
    actions: bindActionCreators({
      ...applicationActions,
    }, dispatch),
  })
)(Menu);
