/* Node modules */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import Radium from 'radium';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

/* Components */
import MenuListItem from './MenuListItem';

/* Actions */
import * as applicationActions from '../actions/application';


const menuItems = [
  { text: <FormattedMessage id="menu.reservation" />, link: '/reservation', icon: 'fa fa-user' },
  { text: <FormattedMessage id="menu.account" />, link: '/account', icon: 'fa fa-user' },
  { text: <FormattedMessage id="menu.about" />, link: '/about', icon: 'fa fa-dot-circle-o' },
];

const style = {
  langSwitcher: {
    textDecoration: 'none',
  },
  langSwitcherText: {
    textDecoration: 'none',
    color: '#9d9d9d',
    ':hover': {
      cursor: 'pointer',
      fontWeight: 700,
      color: 'black',
    },
  },
};

@Radium
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
            <Link to="/">
              <FormattedMessage id="website.title" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              menuItems.map((item, i) =>
                <MenuListItem {...item} key={i} onClick={this.state.expanded ? this.toggleNav : null} />)
            }
          </Nav>
          <Nav style={style.langSwitcher} pullRight>
            <NavItem style={style.langSwitcherText} onClick={this.handleSwitchLocale}>
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
